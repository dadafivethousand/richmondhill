import React, { useState, useEffect } from 'react';
import '../Stylesheets/KidSection.css'; // Separate CSS file for this component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../AppContext";
 

export default function KidSection({ kidsFormData, setKidsFormData }) {
  const { setShowKidForm } = useAppContext();

  // Initialize state from localStorage or use default
 
  // Save state to localStorage whenever it changes
 
 

  const handleKidInputChange = (index, field, value) => {
    const updatedKids = [...kidsFormData];
    updatedKids[index][field] = value;
    setKidsFormData( updatedKids );
  };
  const addKid = () => {
    setKidsFormData(
      [...kidsFormData, { firstName: '', lastName: '', dob: '' }]
    );
  };


  const removeKid = (index) => {
    const updatedKids = kidsFormData.filter((_, i) => i !== index);
    setKidsFormData( updatedKids );
  };

 

  return (
  
      <div className="kids-form-container">
        <h2>Student's Info</h2>

     
        <form >
    

          {kidsFormData.map((kid, index) => (
            <div key={index} className="kids-form">
              <div className='input-container'>
                <input
                  type="text"
                  className="kids-form-input"
                  placeholder=" First Name"
                  value={kid.firstName}
                  onChange={(e) => handleKidInputChange(index, 'firstName', e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="kids-form-input"
                  placeholder=" Last Name"
                  value={kid.lastName}
                  onChange={(e) => handleKidInputChange(index, 'lastName', e.target.value)}
                  required
                />

              </div>
              { kidsFormData.length > 1  &&
              <button
                type="button"
                id="kids-form-remove-button"
                onClick={() => removeKid(index)}
              >
                Remove
              </button>
              }
            </div>
          ))}

          <div className="kids-form-buttons">
            <button type="button" id="kids-form-add-button" onClick={addKid}>
             + Add
            </button>
   
          </div>
        </form>
      </div>
  );
}