// Step3.js
import React from 'react';
import { useFormContext } from '../FormContext';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step4');
  };

  const businessTypes = ['Type 1', 'Type 2', 'Type 3']; // Add other business types here

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 3</h2>
      <p>Select Your Business Type</p>
      {businessTypes.map((type) => (
        <label key={type}>
          <input type="radio" name="businessType" value={type} onChange={handleChange} /> {type}
        </label>
      ))}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3;
