import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context';

const StepIndicator = () => {

    const { totalSteps, currentStepIndex } = useGlobalContext();

    return (
        <div className='w-full h-10'>
            <p className="text-right text-gray-500">{currentStepIndex + 1} / {totalSteps}</p>
        </div>
    );
}

export default StepIndicator;