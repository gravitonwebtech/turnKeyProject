import React, { useState } from 'react';
import AddListing1 from './AddListing1';
import AddListing2 from './AddListing2';
import AddListing3 from './AddListing3';
import AddListing4 from './AddListing4'; // Import the AddListing4 component

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
      {currentStep === 4 && <AddListing4 />} {/* AddListing4 is rendered on step 4 */}
      {/* Add more conditions for additional steps if needed */}
    </>
  );
}
