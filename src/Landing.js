import './Stylesheets/Landing.css';
import video from "../src/Media/final.mp4";
import webmvideo from "../src/Media/output.webm";

import GetStarted from './Components/GetStarted';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="video-background">
      <video autoPlay muted loop playsInline className="scaled-video"
        poster={require("../src/Media/richmond-hill-jiu-jitsu-high-resolution-logo (2).png")}>
          <source src={video} type="video/mp4" />
          <source src={webmvideo} type="video/webm"/>
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
