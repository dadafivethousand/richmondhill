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

  // Save states to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("showFreeTrialForm", JSON.stringify(showFreeTrialForm));
  }, [showFreeTrialForm]);

   useEffect(() => {
    localStorage.setItem("showPurchaseForm", JSON.stringify(showPurchaseForm));
  }, [showPurchaseForm]);
 

  return (
    <AppContext.Provider value={{ showFreeTrialForm, setShowFreeTrialForm, showPurchaseForm, setShowPurchaseForm }}>
      {children}
    </AppContext.Provider>
  );
};
