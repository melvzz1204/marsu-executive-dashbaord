import { useState } from "react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <footer
      className={`mt-auto px-8 lg:px-12 py-6 border-t flex flex-col sm:flex-row justify-between text-xs font-medium font-oswald transition-colors duration-300 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-800 text-slate-500"
          : "bg-white border-slate-200 text-slate-400"
      }`}
    >
      <p>© 2026 Marinduque State University. All rights reserved.</p>
      <p
        className={`tracking-wide font-bold uppercase ${isDarkMode ? "text-rose-400" : "text-[#600018]"}`}
      >
        Confidential / Governance Intelligence Matrix
      </p>
    </footer>
  );
}
