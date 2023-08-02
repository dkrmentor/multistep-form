// Step4.js
import React from 'react';
import { useFormContext } from '../FormContext';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  const websiteTypes = ['CMS', 'Portal', 'Ecommerce']; // Add other website types here

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 4</h2>
      <p>Which Website Type Are You Looking For?</p>
      {websiteTypes.map((type) => (
        <label key={type}>
          <input type="radio" name="websiteType" value={type} onChange={handleChange} /> {type}
        </label>
      ))}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step4;
