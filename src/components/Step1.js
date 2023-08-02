// Step1.js
import React from 'react';
import { useFormContext } from '../FormContext';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step2');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1</h2>
      <label>
        Business Name:
        <input type="text" name="businessName" value={formData.businessName || ''} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Business Slogan:
        <input type="text" name="businessSlogan" value={formData.businessSlogan || ''} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
