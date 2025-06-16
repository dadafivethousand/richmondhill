 
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
import Pricing from './Pricing';
import AdultPurchase from './Components/AdultPurchase';
import KidPurchase from './Components/KidPurchaseForm';
import SuccessPage from './Components/SuccessPage';
import CancelPage from './Components/CancelPage';
 

function App() {
  const { showFreeTrialForm, showPurchaseForm, selectionArray  } = useAppContext();
  return (
  <Router>
    <div className="App">
      <div>

{showFreeTrialForm && <LeadForm closebutton={true}/>}
{selectionArray[0] === 0 && <AdultPurchase />}
{selectionArray[0] === 1 && <KidPurchase/>}
       <Routes>
            <Route path="/success" element={<SuccessPage />} />   
            <Route path="/cancel" element={<CancelPage />} />   
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

<Pricing />

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
