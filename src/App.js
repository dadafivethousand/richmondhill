 
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discount from './Discount';
 

function App() {
  const { showFreeTrialForm  } = useAppContext();
  return (
  <Router>
    <div className="App">
      <div>

{showFreeTrialForm && <LeadForm closebutton={true}/>}

       <Routes>

        <Route 
        path="/volk"
        element={
          <Discount />
        }
        
        
        />
  <Route
  path="/*"
  element=
{
  <>
<Navbar />
<Landing />
 <Coaches />
<Schedule />
<FAQ />
<Contact />
<Footer />
</>
}
/>
</Routes>
</div>
</div>



</Router>
  );
}

export default App;
