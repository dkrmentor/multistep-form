// Step2.js
import React from 'react';
import { useFormContext } from '../FormContext';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/step3');
  };

  const services = ['Web Dev', 'App Dev', 'SEO', 'Digital Marketing']; // Add other services here

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2</h2>
      <p>What's On Your Mind?</p>
      {services.map((service) => (
        <label key={service}>
          <input type="checkbox" name="services" value={service} onChange={handleChange} /> {service}
        </label>
      ))}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
