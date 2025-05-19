import React from "react";
import "./Stylesheets/GrandOpeningPricing.css";
import StickerBadge from "./Components/StickerBadge";

export default function GrandOpeningPricing() {
  return (
    <div className="pricing-container">
     
          <StickerBadge />
      <div className="pricing-sections">

        <div className="pricing-card">
          <h2>Kids Membership</h2>


          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$120</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$660</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1200</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>
        </div>

        <div className="pricing-card">
          <h2>Adults Membership</h2>

          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$140</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$780</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1400</p>
            <p className="access">Unlimited Class Access</p>
            <a href="#" className="pay-btn" target="_blank" rel="noopener noreferrer">Pay Now</a>
          </div>
        </div>

      </div>

       <p className="disclaimer">* Prices exclude HST. All sales are final. No refunds.</p>
    </div>
  );
}
