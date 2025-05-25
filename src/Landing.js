import './Stylesheets/Landing.css';
import video from "../src/Media/final.mp4";
import webmvideo from "../src/Media/output.webm";
import React, { useState, useEffect } from "react";
import GetStarted from './Components/GetStarted';
import landscapePoster from "./Media/png/logo-no-background.png"
import rotated from "./Media/png/logo-no-background.png"
import landingImage from "./Media/DSC_7821.JPG"

export default function Landing() {
  const [poster, setPoster] = useState(landscapePoster);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPoster(width < 1000 ? rotated : landscapePoster); // tweak 768px threshold as needed
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // run on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="landing-container">
      <div className="video-background">
        <div className="content">
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
