// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './FormContext.js';
import Landing from './components/Landing.js';
import Step1 from './components/Step1.js';
import Step2 from './components/Step2.js';
import Step3 from './components/Step3.js';
import Step4 from './components/Step4.js';
import ThankYou from './components/ThankYou.js';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App;
