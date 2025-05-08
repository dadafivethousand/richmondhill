import './Stylesheets/Landing.css';
import video from "../src/Media/Adobe1_compressed.mp4";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="video-background">
      <video autoPlay muted loop playsInline className="scaled-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Your Content Here</h1>
        </div>
      </div>
    </div>
  );
}
