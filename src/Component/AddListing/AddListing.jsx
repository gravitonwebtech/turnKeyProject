import React, { useState } from 'react';
import AddListing1 from './AddListing1';
import AddListing2 from './AddListing2';
import AddListing3 from './AddListing3';
import AddListing4 from './AddListing4';
import AddListing5 from './AddListing5';

export default function AddListing() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {currentStep === 1 && <AddListing1 onNextStep={handleNextStep} />}
      {currentStep === 2 && <AddListing2 onNextStep={handleNextStep} />}
      {currentStep === 3 && <AddListing3 onNextStep={handleNextStep} />}
      {currentStep === 4 && <AddListing4 onNextStep={handleNextStep} />}
      {currentStep === 5 && <AddListing5 />}
    </>
  );
}
