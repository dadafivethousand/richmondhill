import './Stylesheets/Landing.css';
import video from "../src/Media/Adobe1_trimmed.mp4";
import GetStarted from './Components/GetStarted';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="video-background">
      <video autoPlay muted loop playsInline className="scaled-video">
          <source src={video} type="video/mp4" />
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
