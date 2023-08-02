import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const resetFormData = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};
