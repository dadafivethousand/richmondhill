 
import './Stylesheets/App.css';
import Logo from './Logo';
import Schedule from './Schedule';
import Coaches from './Coaches';
import FAQ from './FAQ';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Landing from './Landing'


function App() {
  return (
    <div className="App">
      <div>

<Navbar />
<Landing />
<About />
<Coaches />
<Schedule />
<FAQ />
<Contact />
<Footer />

</div>
</div>
  );
}

export default App;
