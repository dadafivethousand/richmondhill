import './Stylesheets/Contact.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
 


export default function Contact() {
    return(
        <div id="Contact"   className='ContactContainer'> 
      <h1  className="animate">Contact Us </h1>
        <div className='ContactInfo-and-map'>
          <div className='Map'>
           
      

        <iframe className="animate" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.7620634257337!2d-79.45955409999999!3d43.9435977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47b7264ce5f5%3A0x532bade44e4717c4!2sVolk%20Martial%20Arts!5e0!3m2!1sen!2sca!4v1746559271399!5m2!1sen!2sca" 
          allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
        <div className='Contact'>
       
       
           <div className='Instagram Address animate'>
           <a
      href="https://www.instagram.com/maple_bjj"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Instagram"
    >
        <FontAwesomeIcon className='instagram-icon' icon={faInstagram} />{/* Envelope icon */}
        </a>
        <span id='ContactText'> @rhbjj</span>
        </div>
        <div className='Phone animate'>
        <FontAwesomeIcon icon={faPhone} />  {/* Phone icon */}
        <span id='ContactText' className='ContactText animate'> (647) 887-9940</span>
        </div>
        <div className='Email animate'>
        <FontAwesomeIcon icon={faEnvelope} />{/* Envelope icon */}
        <span id='ContactText'> admin@rhbjj.com</span>
        </div>
        <div className='Address animate'>
        <FontAwesomeIcon icon={faHome} /> {/* House icon */}
        <span id='ContactText'>132 King Rd <br></br>
        <span id='ContactText' className='Indent'>Richmond Hill, <br></br>  </span>  
        <span id='ContactText' className='Indent'> ON, L6E 2T5 <br></br>  </span> 
         </span>  
            
        </div>
      
        </div>


        </div>

        
        </div>
    )
}