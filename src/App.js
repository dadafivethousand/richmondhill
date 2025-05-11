 
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
import { useAppContext } from "./AppContext";
import LeadForm from './Components/LeadForm';

function App() {
  const { showFreeTrialForm  } = useAppContext();
  return (
    <div className="App">
      <div>

{showFreeTrialForm && <LeadForm closebutton={true}/>}
<Navbar />
<Landing />
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
