import { useState, useEffect } from "react"
import './Stylesheets/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
// import GetStarted from "./Components/GetStarted";
import '@fortawesome/fontawesome-free/css/all.min.css';
 import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(false);
    const [animateLogo, setAnimateLogo] = useState(false)
    const [animateBottomLogo, setAnimateBottomLogo] = useState(false)
 
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateLogo(true);
        }, 400);
    
        return () => clearTimeout(timer); // optional cleanup
    }, []);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateBottomLogo(true);
        }, 100);
    
        return () => clearTimeout(timer); // optional cleanup
    }, []);
    

 
 
    const changeExpand = () => {
        if (window.scrollY >= 400) {
            setShowGetStarted(true);
        } else {
            setShowGetStarted(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeExpand);
        return () => {
            window.removeEventListener('scroll', changeExpand);
        };
    }, []);

     
    const handleClick=()=>{
        setClick((prev)=>!prev)
    }

 

    return(
        <div className="navbar-outer-container">
        <div className="navbar-container">
       <div className="navbar-top-row">
  <a href="https://instagram.com/rhbjj" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="ig-icon" icon={faInstagram} /> @rhbjj
  </a>

  <a href="mailto:info@rhbjj.com">
    <FontAwesomeIcon icon={faEnvelope} /> info@rhbjj.com
  </a>

  <a href="tel:+16478879940">
    <FontAwesomeIcon icon={faPhone} /> (647) 887-9940
  </a>

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=132+King+Rd,+Richmond+Hill,+ON"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faHome} /> 132 King Road
  </a>
</div>  

                   
             <div className="hamburger" onClick={handleClick}> {click ?  <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}  </div>
           
      

             

        </div>
        
            <div className={`navbar ${click? 'slide': ''}`}>
             {/*   <div   className={`${showGetStarted?'show-get-started': ''} getstarted`}>
             <GetStarted /> }
             </div>*/}
            <ul className="navbar-options">
            <a  href='#Schedule'>  <li onClick={()=>setClick(false)}>Schedule</li></a>

              <a href='#Coaches'>  <li onClick={()=>setClick(false)}>About Us</li></a>
                     
        
     
              <a href='#FAQ'>  <li onClick={()=>setClick(false)}>FAQ</li></a>
        

              {/*<a href='https://billing.stripe.com/p/login/7sI3fAgOUdugbvybII'> <li onClick={()=>setClick(false)}>Members</li></a>  */}
              <a href='#Contact'> <li onClick={()=>setClick(false)}>Contact Us</li></a>
             
            </ul>
            </div>
     



        </div>
    )
}