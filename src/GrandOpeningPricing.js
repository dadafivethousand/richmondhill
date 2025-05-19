import React from "react";
import "./Stylesheets/GrandOpeningPricing.css";
import StickerBadge from "./Components/StickerBadge";

export default function GrandOpeningPricing() {
  return (
    <div id="Pricing" className="pricing-container">
     
          <StickerBadge />
      <div className="pricing-sections">

        <div className="pricing-card">
          <h2>Kids</h2>


          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$120</p>
            <p className="access">Cancel Any Time</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$660</p>
            <p className="access">Installment Options Available! </p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1100</p>
            <p className="access">Installment Options Available!</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        </div>

        <div className="pricing-card">
          <h2>Adults</h2>

          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$140</p>
            <p className="access">Cancel Any Time</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$800</p>
            <p className="access">Installment Options Available!</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1500</p>
            <p className="access">Installment Options Available!</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        </div>

      </div>

       <p className="disclaimer">*All purchases are subject to HST</p>
    </div>
  );
}
