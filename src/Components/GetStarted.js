import '../Stylesheets/GetStarted.css'
import { useState, useEffect } from 'react'; 
import { useAppContext } from "../AppContext";

export default function GetStarted({size}){
    const { setShowFreeTrialForm } = useAppContext();   

    const [phrase, setPhrase] = useState("")

    useEffect(() => {
        let timeoutId;
        let intervalId;
    
        timeoutId = setTimeout(() => {
            const text = "Start Free Trial";
            let i = 0;
    
            intervalId = setInterval(() => {
                setPhrase(text.substring(0, i + 1));
                i++;
                if (i > text.length) {
                    clearInterval(intervalId);
                }
            }, 100);
        }, 2000);
    
        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, []);
    
    
    return(
        <div className='get-started-container'>
            <div onClick={()=>setShowFreeTrialForm(true)} className={`${size == 'large'? 'large' : ''} get-started-button`}>
           {phrase}
       
            </div>   
        </div>
    )
}