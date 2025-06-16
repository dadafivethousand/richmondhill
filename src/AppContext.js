import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Context provider
export const AppProvider = ({ children }) => {
  // Retrieve initial values from localStorage or use defaults
  const getInitialState = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  };

  // State to control form visibility
  const [showFreeTrialForm, setShowFreeTrialForm] = useState(() => getInitialState("showFreeTrialForm", false));
  const [showPurchaseForm, setShowPurchaseForm] = useState(() => getInitialState("showPurchaseForm", false));
    const [priceObject, setPriceObject] = useState(null)
    const [selectionArray, setSelectionArray] = useState([])

  // Save states to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("showFreeTrialForm", JSON.stringify(showFreeTrialForm));
  }, [showFreeTrialForm]);

   useEffect(() => {
    localStorage.setItem("showPurchaseForm", JSON.stringify(showPurchaseForm));
  }, [showPurchaseForm]);

  useEffect(()=>{
        console.log('fetchinginfo')
        async function fetchMembershipInfo(){
        try {
            const response = await fetch('https://richmondhill-worker.maxli5004.workers.dev/membership-info');
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setPriceObject(data);
            } else {
                console.error('Failed to fetch membership info');
            }

        } catch (error) {
            console.error('Error fetching Membership Info:', error)
        }
    }
    fetchMembershipInfo();

}, 
[]);

const formatCurrency = (price) => {
    const amount = Number(price);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, // Always show two decimal places
      maximumFractionDigits: 2,
    }).format(amount/100);
  };
 

  return (
    <AppContext.Provider value={{ priceObject, formatCurrency, showFreeTrialForm, setShowFreeTrialForm, showPurchaseForm, setShowPurchaseForm, selectionArray, setSelectionArray }}>
      {children}
    </AppContext.Provider>
  );
};
