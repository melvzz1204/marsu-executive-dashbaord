import React, { useState, useEffect } from "react";

export function LoginTransition({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // The administrative steps displayed during loading
  const loadingSteps = [
    "Authenticating credentials...",
    "Establishing secure connection...",
    "Fetching institutional metrics...",
    "Compiling dashboard widgets...",
    "Access granted.",
  ];

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // Total loading time: 2.5 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStepCount = 0;

    const timer = setInterval(() => {
      currentStepCount++;
      const newProgress = Math.min((currentStepCount / steps) * 100, 100);
      setProgress(newProgress);

      // Sync text label with percentage
      if (newProgress < 20) setCurrentStep(0);
      else if (newProgress < 50) setCurrentStep(1);
      else if (newProgress < 80) setCurrentStep(2);
      else if (newProgress < 99) setCurrentStep(3);
      else setCurrentStep(4);

      if (currentStepCount >= steps) {
        clearInterval(timer);
        // Add a tiny delay before firing the redirect prop so the user sees "Access granted"
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8fafc] backdrop-blur-sm">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[#660033]/[0.03] blur-[100px]" />

      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* --- Rotating Abstract Logo / Loading Core --- */}
        <div className="relative flex items-center justify-center w-16 h-16 mb-8">
          {/* Outer track */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
          {/* Spinning Maroon Accent */}
          <div className="absolute inset-0 rounded-full border-2 border-t-[#660033] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          {/* Inner pulsating dot */}
          <div className="w-3 h-3 rounded-full bg-[#C5A059] animate-pulse" />
        </div>

        {/* --- Loading Text Context --- */}
        <div className="w-full text-center space-y-2 mb-6 h-10">
          <h3 className="text-sm font-semibold tracking-widest text-[#660033] uppercase">
            System Initialization
          </h3>
          <p className="text-xs text-slate-500 font-mono transition-opacity duration-300">
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* --- Precision Progress Bar --- */}
        <div className="w-full relative">
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#660033] to-[#C5A059] transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Numeric Percentage Indicator */}
          <div className="absolute -bottom-6 right-0 text-[10px] font-mono font-bold text-slate-400">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginTransition;
