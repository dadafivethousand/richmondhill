import '../Stylesheets/FAQ.css';
import { useAppContext } from "../AppContext";
export default function QA({ faq, isExpanded, toggleExpand }) {
  const { showForm, setShowForm } = useAppContext();   
  return (
    <div className="faq-item-container animate">
      <div className="faq-item">
        <div className="faq-question">
          <p>{faq.question}</p>
          <button onClick={toggleExpand}>
            {isExpanded ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
          </button>
        </div>
        <div
          className="faq-answer-wrapper"
          style={{
            maxHeight: isExpanded ? "1000px" : "0px", // Adjust height based on expanded state
            transition: "max-height 0.5s ease",
          }}
        >
          <div className="faq-answer">
            <p>{faq.answer}</p>
            {faq.link && (
            <>
            
              <div className='faq-free-trial' onClick={()=>setShowForm(true)} >
              Click here to get started
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
