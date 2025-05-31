import React from "react";
import "./Stylesheets/GrandOpeningPricing.css";
import StickerBadge from "./Components/StickerBadge";
import { useAppContext } from "./AppContext";


export default function Pricing() {
  const {setShowPurchaseForm} = useAppContext(); 

  return (
    <div id="Pricing" className="pricing-container">
     
          <StickerBadge />
      <div className="pricing-sections">

          <div className="pricing-card">
          <h2>Adults</h2>

          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$140</p>
            <p className="access">Cancel Any Time</p>
            
            <a href="https://buy.stripe.com/7sY28s2tN1L61Yj5B82oE04" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
        
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$800</p>
            <p className="access">Installment Options Available!</p>
            <a href="https://buy.stripe.com/14A00kgkD75q8mHbZw2oE05" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1500</p>
            <p className="access">Installment Options Available!</p>
            <a href="https://buy.stripe.com/8x214o2tNexSbyTd3A2oE0a" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        </div>

        <div className="pricing-card">
          <h2>Kids</h2>


          <div className="price-tier">
            <p className="duration">1 Month</p>
            <p className="price">$120</p>
            <p className="access">Cancel Any Time</p>
            <a href="https://buy.stripe.com/eVq00k1pJ89u46raVs2oE06" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">6 Months</p>
            <p className="price">$660</p>
            <p className="access">Installment Options Available! </p>
            <a href="https://buy.stripe.com/fZu5kE0lFexS7iD1kS2oE08" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>

          <div className="price-tier">
            <p className="duration">1 Year</p>
            <p className="price">$1100</p>
            <p className="access">Installment Options Available!</p>
            <a href="https://buy.stripe.com/14AfZi7O7cpKeL5e7E2oE09" className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        </div>

      

      </div>

       <p className="disclaimer">*All purchases are subject to HST</p>
    </div>
  );
}
