export function LoginBackground() {
  // Generate random fixed positions and fade delays for left side
  const leftCubes = Array.from({ length: 15 }).map((_, i) => ({
    id: `L-${i}`,
    size: Math.floor(Math.random() * 35) + 15, // 15px to 50px
    xOffset: Math.floor(Math.random() * 12) + 2, // 2% to 14% from left
    yOffset: Math.floor(Math.random() * 90) + 5, // 5% to 95% from top
    delay: Math.random() * 8, // 0s to 8s delay
    duration: Math.floor(Math.random() * 5) + 5, // 5s to 10s lifecycle
  }));

  // Generate random fixed positions and fade delays for right side
  const rightCubes = Array.from({ length: 15 }).map((_, i) => ({
    id: `R-${i}`,
    size: Math.floor(Math.random() * 35) + 15,
    xOffset: Math.floor(Math.random() * 12) + 2, // 2% to 14% from right
    yOffset: Math.floor(Math.random() * 90) + 5, // 5% to 95% from top
    delay: Math.random() * 8,
    duration: Math.floor(Math.random() * 5) + 5,
  }));

  return (
    <div className="absolute inset-0 w-full h-full bg-[#f8fafc] overflow-hidden pointer-events-none z-0">
      {/* --- Ambient Central Glow (Frames the Login Box) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#660033]/[0.015] blur-[150px]" />

      {/* --- Left Side Appearing/Disappearing Cubes --- */}
      <div className="absolute inset-y-0 left-0 w-[20%] overflow-hidden">
        {leftCubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute rounded bg-gradient-to-br from-[#660033]/15 to-transparent border border-[#660033]/20 shadow-[2px_2px_8px_rgba(102,0,51,0.05)] opacity-0 animate-[fadeCube_linear_infinite]"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              left: `${cube.xOffset}%`,
              top: `${cube.yOffset}%`,
              animationDuration: `${cube.duration}s`,
              animationDelay: `${cube.delay}s`,
            }}
          />
        ))}
      </div>

      {/* --- Right Side Appearing/Disappearing Cubes --- */}
      <div className="absolute inset-y-0 right-0 w-[20%] overflow-hidden">
        {rightCubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute rounded bg-gradient-to-bl from-[#C5A059]/15 to-transparent border border-[#C5A059]/30 shadow-[-2px_2px_8px_rgba(197,160,89,0.05)] opacity-0 animate-[fadeCube_linear_infinite]"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              right: `${cube.xOffset}%`,
              top: `${cube.yOffset}%`,
              animationDuration: `${cube.duration}s`,
              animationDelay: `${cube.delay}s`,
            }}
          />
        ))}
      </div>

      {/* --- Micro-Grid Overlay for Texture --- */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#660033 1px, transparent 1px),
            linear-gradient(90deg, #660033 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- CSS Animations --- */}
      <style>{`
        /* Cubes start invisible and small.
          Midway: They fade in fully, grow, and rotate.
          End: They shrink and fade back into the background.
        */
        @keyframes fadeCube {
          0% {
            opacity: 0;
            transform: rotate(45deg) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: rotate(90deg) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: rotate(135deg) scale(0.3);
          }
        }
      `}</style>
    </div>
  );
}

export default LoginBackground;
