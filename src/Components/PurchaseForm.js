import "../Stylesheets/PurchaseForm.css"
import { useAppContext } from "../AppContext";
import pic from '../Media/png/logo-no-background.png'

export default function PurchaseForm() {
  const {setShowPurchaseForm, PurchaseForm} = useAppContext(); 
  console.log(PurchaseForm)

    return(
        <div className="purchase-form-outer-container">
        <div className="purchase-form-container">
        <img src={pic} />
        <div className="close" onClick={()=>setShowPurchaseForm(false)}>
                X
        </div>
        </div>
        </div>
    )
}