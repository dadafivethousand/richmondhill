import React from "react";
import "./Stylesheets/Discount.css";
import logo from "./Media/png/logo-no-background.png"

export default function Discount() {
  return (
    <div className="rh-discount-page">
      <a href="/">
      <img className="discount-logo" src={logo} />
      </a>
      <header className="rh-header">
     
        <h2>
          Exclusive pricing only for Volk members!<br />
        </h2>
                  <p id="small">*All sales subject to HST</p>

      </header>

      <div className="rh-discount-grid">
        <div className="rh-card">
          <h3>1 Month - <span id="price">$99 </span></h3>
          <div className="price-section">
          
            <span>Monthly • Cancel Anytime</span>
          </div>
          <a
            href="https://buy.stripe.com/bJe28s6K3dtO32n3t02oE01"
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
            href="https://buy.stripe.com/cNibJ21pJ4Xi46r9Ro2oE02"
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
            href="https://buy.stripe.com/5kQ5kE5FZ9dygTdbZw2oE03"
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
