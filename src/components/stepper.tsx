"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div role="navigation" aria-label="Progress">
      {/* Mobile Progress */}
      <div className="flex items-center gap-4 md:hidden">
        <div className="whitespace-nowrap text-center text-xs font-semibold">
          PASO {currentStep + 1} DE {steps.length}
        </div>
        <Progress value={((currentStep + 1) / steps.length) * 100} className="w-full" />
      </div>

      {/* Desktop Stepper */}
      <div className="hidden items-center justify-center gap-4 md:flex">
        {steps.map((step, index) => (
          <Step key={index} step={step} stepIndex={index} steps={steps} currentStep={currentStep} />
        ))}
      </div>
    </div>
  );
};

type StepProps = {
  step: string;
  stepIndex: number;
  steps: string[];
  currentStep: number;
};

const Step: React.FC<StepProps> = ({ step, stepIndex, steps, currentStep }) => {
  const isCurrentStep = stepIndex === currentStep;

  return (
    <div
      className={`flex items-center gap-4 ${
        isCurrentStep ? "font-bold text-blue-600" : "text-gray-400"
      }`}
    >
      <button
        className="focus:outline-none"
        aria-current={isCurrentStep ? "step" : undefined}
        disabled={isCurrentStep}
      >
        <div className="flex items-center gap-4">
          <span
            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${isCurrentStep ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300"}`}
          >
            {stepIndex + 1}
          </span>
          <span className="flex items-center justify-center text-left text-base font-medium">
            {step}
          </span>
        </div>
      </button>
      {stepIndex < steps.length - 1 && (
        <div className="h-px w-8 border-b-2 border-dashed border-blue-600"></div>
      )}
    </div>
  );
};

export default Stepper;
