import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Stylesheets/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
         <h1>Contact Us</h1>
         
      <div className="contact-content">
        
        <div className="contact-info">
       

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+16478879940">+1 (647) 887-9940</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:info@rhbjj.com">info@rhbjj.com</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=132+King+Rd,+Richmond+Hill,+ON"
              target="_blank" 
              rel="noopener noreferrer"
            >
              132 King Rd, <br></br>Richmond Hill, ON
            </a>
          </div>


          <div className="contact-item">
            <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
            <a href="https://instagram.com/richmondhillbjj" target="_blank" rel="noopener noreferrer">
              @rhbjj
            </a>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Richmond Hill BJJ Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5745.50131809862!2d-79.4596409!3d43.943833700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad5d1dd87406d%3A0xbabf377cb620fba5!2s132%20King%20Rd%2C%20Richmond%20Hill%2C%20ON%20L4E%202T5!5e0!3m2!1sen!2sca!4v1747106856005!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
