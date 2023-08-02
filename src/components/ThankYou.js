// ThankYou.js
import React from 'react';
import { useFormContext } from '../FormContext';

const ThankYou = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h2>Thank You!</h2>
      <p>Your form has been submitted with the following details:</p>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThankYou;
