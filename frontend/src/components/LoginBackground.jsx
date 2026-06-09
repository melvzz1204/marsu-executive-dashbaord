import React from "react";

export function LoginBackground() {
  // Generate a collection of architectural nodes with varied layouts
  const dataNodes = [
    { top: "10%", left: "15%", delay: "0s", size: "w-2.5 h-2.5" },
    { top: "18%", left: "28%", delay: "-3s", size: "w-2 h-2" },
    { top: "25%", left: "8%", delay: "-6s", size: "w-3 h-3" },
    { top: "12%", right: "14%", delay: "-2s", size: "w-3 h-3" },
    { top: "22%", right: "25%", delay: "-7s", size: "w-2 h-2" },
    { top: "35%", right: "8%", delay: "-4s", size: "w-2.5 h-2.5" },
    { bottom: "15%", left: "12%", delay: "-5s", size: "w-3 h-3" },
    { bottom: "28%", left: "22%", delay: "-1s", size: "w-2 h-2" },
    { bottom: "12%", right: "15%", delay: "-8s", size: "w-2.5 h-2.5" },
    { bottom: "25%", right: "28%", delay: "-3s", size: "w-2 h-2" },
  ];

  return (
    <div className="absolute inset-0 w-full h-full bg-[#f8fafc] overflow-hidden pointer-events-none z-0">
      {/* --- Ambient Structural Corner Glows --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#660033]/[0.02] blur-[130px] animate-[pulseGlow_15s_easeInOut_infinite]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#C5A059]/[0.015] blur-[110px] animate-[pulseGlow_20s_easeInOut_infinite_2s]" />

      {/* --- Dynamic Data Streams (Moving Linear Tracks) --- */}
      <div className="absolute inset-x-0 top-0 h-full w-full opacity-[0.03] flex justify-around">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#660033] to-transparent animate-[streamVertical_12s_linear_infinite]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#660033] to-transparent animate-[streamVertical_16s_linear_infinite_2s]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#660033] to-transparent animate-[streamVertical_14s_linear_infinite_4s]" />
      </div>

      {/* --- Core Constellation Matrix Layer --- */}
      <div className="absolute inset-0 w-full h-full">
        {dataNodes.map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.size} rounded-full bg-gradient-to-tr from-[#660033]/30 to-[#660033]/10 border border-[#660033]/20 animate-[nodeOrbit_20s_easeInOut_infinite]`}
            style={{
              top: node.top,
              left: node.left,
              right: node.right,
              bottom: node.bottom,
              animationDelay: node.delay,
            }}
          >
            {/* Structural data connection indicator ring */}
            <span
              className="absolute -inset-3 rounded-full border border-[#660033]/[0.05] animate-[pingRing_4s_linear_infinite]"
              style={{ animationDelay: node.delay }}
            />
          </div>
        ))}
      </div>

      {/* --- Micro Architecture Engineering Grid Overlay --- */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `linear-gradient(#660033 1px, transparent 1px), linear-gradient(90deg, #660033 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* --- Embedded Keyframe Animations Helper --- */}
      <style>{`
        @keyframes nodeOrbit {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(15px, -20px) scale(1.08);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.95);
          }
        }

        @keyframes pingRing {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @keyframes streamVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default LoginBackground;
