import React, { useState, useEffect } from 'react';
import '../Stylesheets/AdultPurchase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppContext } from "../AppContext";
import pic from '../Media/png/logo-no-background.png'
  
export default function AdultPurchase({ formatCurrency,  option, optionIndex, purchasingHigherIndex }) {
   const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    phone: '',
  
    optionIndex:optionIndex,
    purchasingHigherIndex:purchasingHigherIndex
  // Default to Ontario
  });
  const {setShowPurchaseForm, showPurchaseForm} = useAppContext()
  const [message, setMessage] = useState(null); // To display success/error messages
  const [isValid, setIsValid] = useState(false); // To track if the form is valid

  const cancelPurchase = () => {
    setShowPurchaseForm(false)
    console.log(showPurchaseForm)
  }
    const handleCaptchaChange = (token) => {
    if (token) {
      setCaptchaVerified(true); // Enable the submit button when CAPTCHA is verified
    } else {
      setCaptchaVerified(false); // Disable it if something goes wrong
    }
  };

  useEffect(() => {
  console.log("showPurchaseForm updated:", showPurchaseForm);
}, [showPurchaseForm]);

  // Email validation function using regular expression
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes, and format/validate phone number
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Remove all non-digit characters
      const cleanedPhone = value.replace(/\D/g, '');
      // Apply the format (123) 456-7890
      let formattedPhone = cleanedPhone;
      if (cleanedPhone.length > 3 && cleanedPhone.length <= 6) {
        formattedPhone = `(${cleanedPhone.slice(0, 3)}) ${cleanedPhone.slice(3)}`;
      } else if (cleanedPhone.length > 6) {
        formattedPhone = `(${cleanedPhone.slice(0, 3)}) ${cleanedPhone.slice(3, 6)}-${cleanedPhone.slice(6, 10)}`;
      }

      // Update formData with the formatted phone number
      setFormData({ ...formData, phone: formattedPhone });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate the form fields
  useEffect(() => {
    // Clean the phone number (remove formatting) to validate its length
    const cleanedPhone = formData.phone.replace(/\D/g, '');

    // Ensure all required fields are filled, phone has exactly 10 digits, and email is valid
    const isFormValid =
      formData.firstName.trim() !== '' &&
       
      validateEmail(formData.email) &&
      cleanedPhone.length === 10 &&
      captchaVerified === true;

    setIsValid(isFormValid);
  }, [formData, captchaVerified]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValid(false)
    if (!isValid) return; // Prevent submission if form is not valid
    console.log('sending request to worker')
    try {
      const submissionData = {
        ...formData,
        phone: formData.phone.replace(/\D/g, ''), // Send only digits
       };
      const endpoint = `https://richmondhill-worker.maxli5004.workers.dev/new_adult_subscription`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData), // Send merged object 
        mode: 'cors', // Explicitly set the mode to 'cors'
       });

      if (response.ok) {
        const { url } = await response.json(); // Stripe Checkout URL
        window.location.href = url; // Redirect to Stripe Checkout

        // Reset the form after a successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
   
          optionIndex:null,
          purchasingHigherIndex:null,
          
 
        });
       } else {
        const errorData = await response.json();
        setMessage(<p className="error-message">Error: {errorData.message}</p>);
        console.error('Error:', errorData);
      }
    } catch (error) {
      setMessage(<p className="error-message">Error submitting the form</p>);
      console.error('Error:', error);
    }
  };

  return (
    <div  className="purchase-outer-container">
    <div  className="purchase-container">
      <div className="purchase-navbar">

          <img className='purchase-img' src={pic} />
   
          <div className="close-btn" onClick={() => cancelPurchase()}>
                xz
          </div>
          <div className='purchase-navbar-product-and-price'>
          <div className='transaction-details'>
            <div>
           
            </div>
            -
            <div className='purchase-navbar-price'>
           <span className='hst'>+ HST </span> 
          </div>
          </div>
          </div>

      </div>
    <div  className="purchase-form-container">


    
 
      {message ? (
        <div className='message-container'>
        {message}

        </div>
      ) : (
        <>
    
 
    
       

           <form onSubmit={handleSubmit}>
            <div className='grid'>
            <div className="group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>


            <div className="group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>


          

            <div className="group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            </div>

        
            
            {/* Google reCAPTCHA widget     */}
            <div className='captcha-container'>
            <div className='captcha'>
            <ReCAPTCHA
              id="center"
              className="recaptcha"
              sitekey="6LfVmFoqAAAAAF811UKiqels-ToHS8VlodkDiS6G"
              onChange={handleCaptchaChange}
              required
            />
            </div>
            </div>
            <div className='submit-btn-container'>
 
            <button
              type="submit"
              className='submit-btn'
            >
              Continue
            </button>
            </div>
          </form>
        </>
      )}
    </div>
    </div>
    </div>
  );
}