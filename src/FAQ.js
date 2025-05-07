import { useState } from "react";
import QA from "./Components/QA"; // Import the QA component
import "./Stylesheets/FAQ.css";
import faqList from './Objects/FAQList';
{/*import Jocko from "./Components/Jocko";*/}

export default function FAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState({}); // Store expanded state for all items
  
  const handleExpandAll = () => {
    const allExpanded = faqList.reduce((acc, _, idx) => {
      acc[idx] = true;
      return acc;
    }, {});
    setExpandedFaqs(allExpanded);
  };

  const handleMinimizeAll = () => {
    setExpandedFaqs({});
  };

  const toggleExpand = (index) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="FAQ" className="FAQContainer">
      
       
          <h1> FAQ</h1>
 
    
      
      <div className="FAQ-and-video">
        <div className="FAQ">
          <div className="faq-controls animate">
            <button onClick={handleExpandAll}>Expand All</button>
            <button onClick={handleMinimizeAll}>Minimize All</button>
          </div>
          {faqList.map((faq, index) => (
            <QA
              key={index}
              faq={faq}
              isExpanded={!!expandedFaqs[index]}
              toggleExpand={() => toggleExpand(index)}
            />
          ))}
        </div>
        <div className="VideoContainer">
         { /*<Jocko /> */}
        </div>
      </div>
    </div>
  );
}
