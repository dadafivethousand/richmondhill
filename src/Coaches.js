import { useState, useEffect } from "react";
import CoachesList from './Objects/CoachesObject'
import Coach from "./Components/Coach";
import './Stylesheets/Coaches.css'
export default function Coaches() {
    return(
        <div id='Coaches' className="coaches-container">
      
            
       <div className="coaches-intro">
       <h1 > About </h1>

       <p className="roboto-condensed into-paragraph">  At Richmond Hill BJJ, our mission is to bring elite-level Brazilian Jiu-Jitsu and MMA training to the heart of Richmond Hill. Whether you're a complete beginner or an experienced competitor, our programs are designed to help you reach your highest potential in a supportive, disciplined, and high-performance environment. Led by accomplished coaches with real competition and fight experience, we are proud to offer world-class instruction.  </p>
       </div>
       <div className="coaches">
            {
                CoachesList.map((coach, index)=>{
                  return ( <Coach key={index} coach={coach} />)
                }
            )
            }
            </div>
        </div>
    )

}