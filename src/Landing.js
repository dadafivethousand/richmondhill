import './Stylesheets/Landing.css';
import video from "../src/Media/final.mp4";
import webmvideo from "../src/Media/output.webm";
import React, { useState, useEffect } from "react";
import GetStarted from './Components/GetStarted';
import landscapePoster from "./Media/richmond-hill-jiu-jitsu-high-resolution-logo (2).png"
import rotated from "./Media/rotated.png"

export default function Landing() {
  const [poster, setPoster] = useState(landscapePoster);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPoster(width < 1000 ? landscapePoster : rotated); // tweak 768px threshold as needed
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // run on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="landing-container">
      <div className="video-background">
      <video
          autoPlay
          muted
          loop
          playsInline
          className="scaled-video"
          poster={poster}
        >
          <source src={video} type="video/mp4" />
          <source src={webmvideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>


        <div className="content">
    
          <h2>A journey begins with a single step</h2>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
