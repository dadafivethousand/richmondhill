import React from "react";
import "./Stylesheets/Discount.css";

export default function Discount() {
  return (
    <div className="rh-discount-page">
      <header className="rh-header">
        <h2>Grand Opening Special</h2>
        <p>
          Exclusive pricing only for Volk members!<br />
        </p>
                  <p id="small">*All sales subject to HST</p>

      </header>

      <div className="rh-discount-grid">
        <div className="rh-card">
          <h3>1 Month - <span id="price">$99</span></h3>
          <div className="price-section">
          
            <span>Monthly • Cancel Anytime</span>
          </div>
          <a
            href="https://buy.stripe.com/YOUR_LINK_99"
            target="_blank"
            rel="noopener noreferrer"
            className="rh-button"
          >
            Redeem Offer
          </a>
        </div>

        <div className="rh-card">
          <h3>6 Months - <span id="price">$549</span></h3>
          <div className="price-section">
    
            <span>Pay upfront or with installments</span>
          </div>
          <a
            href="https://buy.stripe.com/YOUR_LINK_549"
            target="_blank"
            rel="noopener noreferrer"
            className="rh-button"
          >
            Redeem Offer
          </a>
        </div>

        <div className="rh-card">
          <h3>1 Year - <span id="price">$949</span></h3>
          <div className="price-section">
 
            <span>Pay upfront or with installments</span>
          </div>
          <a
            href="https://buy.stripe.com/YOUR_LINK_949"
            target="_blank"
            rel="noopener noreferrer"
            className="rh-button"
          >
            Redeem Offer
          </a>
        </div>
      </div>

      <div className="rh-footer-note">
        <p>These offers are limited. Secure your membership today.</p>
      </div>
    </div>
  );
}
