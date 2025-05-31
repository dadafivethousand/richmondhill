import React from "react";
import "./Stylesheets/GrandOpeningPricing.css";
import StickerBadge from "./Components/StickerBadge";
import { useAppContext } from "./AppContext";
 

export default function Pricing() {
  const {setShowPurchaseForm, priceObject} = useAppContext(); 
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, // Always show two decimal places
      maximumFractionDigits: 2,
    }).format(amount/100);
  };

 

  return (


    <div id="Pricing" className="pricing-container">
     
          <StickerBadge />
      <div className="pricing-sections">

        {priceObject?.map((item, index) => {
     return (
        <div key={index} className='pricing-card'>
          <h2>{item.label}</h2>
          
             <div className='membership-flex'>
            {item.info && item.info.map((option, optionIndex) => {
               
                return (
                // Check if the index is in displayArray
                       <div className="price-tier">
            <p className="duration">{option.duration} {option.duration > 1 ? "Months": "Month"}</p>
            <p className="price">{formatCurrency(option.price)}</p>
            <p className="access">{option.cancel ? option.cancel : "Installment Options Available"}</p>
            
            <a href= {option.paymentLink} className="pay-btn" target="_blank" rel="noopener noreferrer">Get Started</a>
        
          </div>
                
                );
            })}
</div>
        </div>
    );
})}

  

      </div>

       <p className="disclaimer">*All purchases are subject to HST</p>
    </div>
  );
}
