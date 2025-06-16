// CancelPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/CancelPage.css';
import logo from "../Media/png/logo-no-background.png"
export default function CancelPage() {
  return (
    <div className="cancel-page">
            <img src={logo}/>
      <div className="cancel-content">
        <svg className="cancelmark" viewBox="0 0 52 52">
          <circle
            className="cancelmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="cancelmark__line1"
            d="M16 16 L36 36"
            fill="none"
          />
          <path
            className="cancelmark__line2"
            d="M36 16 L16 36"
            fill="none"
          />
        </svg>

        <h1>Payment Failed</h1>
        <p className='cancel-message'>Something went wrong with your payment. <br></br> Please try again.</p>
        <Link to="/#Pricing" className="cancel-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
