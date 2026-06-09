import React, { useState, useEffect } from "react";
import ExecutiveKPIs from "../components/ExecutiveKPIs";
import EnrollmentChart from "../components/EnrollmentChart";
import ResearchMetrics from "../components/ResearchMetrics";
import marsuLogo from "../assets/marsu-logo.png";

// Quick inline rendering of a Pie Chart component to round out the distribution metrics
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Fonts belong inside your global css files (src/index.css), but if kept here,
 * we keep it safely encapsulated away from component logic.
 */
if (typeof document !== "undefined") {
  const styleId = "oswald-font-import";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
      .font-oswald {
        font-family: 'Oswald', sans-serif;
      }
    `;
    document.head.appendChild(style);
  }
}

// Sub-component modified to dynamically pass custom label colors down to Chart.js context options
const DistributionPieWidget = ({ isDarkMode }) => {
  const data = {
    labels: [
      "Computing (CICS)",
      "Engineering (CE)",
      "Education (CED)",
      "Industrial Tech (CIT)",
      "Business (CBMA)",
    ],
    datasets: [
      {
        data: [1690, 1580, 1140, 1030, 680],
        backgroundColor: [
          "#660033", // Burgundy Primary
          "#C5A059", // Satin Gold Accent
          "#94a3b8", // Muted Slate
          "#cbd5e1", // Light Grey
          "#e2e8f0", // Subtle Base Grey
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#64748b",
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 11, weight: "500", family: "Inter, sans-serif" },
          padding: 14,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.98)",
        titleColor: "#94a3b8",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 10,
        boxPadding: 6,
        usePointStyle: true,
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] h-full flex flex-col justify-between">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#660033]/80 block mb-1">
          Institutional Analytics
        </span>
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
          Seat Share Density
        </h2>
        <p className="text-xs text-slate-400 mt-0.5 font-normal">
          Current semester enrollment distribution ratio
        </p>
      </div>
      <div className="h-[240px] w-full my-auto flex items-center justify-center pt-4">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

function MainDashboard() {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [presidentName, setPresidentName] = useState(
    "Loading Executive Profile...",
  );

  useEffect(() => {
    const fetchExecutiveOwner = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockBackendData = {
          name: "Dr. Diosdado P. Zulueta",
          role: "University President",
        };
        setPresidentName(mockBackendData.name);
      } catch (error) {
        console.error("Failed to clear executive telemetry data", error);
        setPresidentName("Dr. Diosdado P. Zulueta");
      }
    };

    fetchExecutiveOwner();
  }, []);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V16zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V16z"
          />
        </svg>
      ),
    },
    {
      id: "Academic Performance",
      label: "Academic Performance",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: "enrollment",
      label: "Enrollment",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "research",
      label: "Research & Extension",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen font-sans antialiased bg-[#f8f4f4ac] text-slate-800">
      {/* Sidebar Section */}
      <aside className="w-80 bg-[#600018] text-white flex flex-col justify-between sticky top-0 h-screen shadow-xl border-r border-[#D4AF37]/20 z-40">
        <div className="flex flex-col pt-8 px-6 space-y-8 overflow-y-auto flex-1">
          <div className="flex items-center gap-3.5 pb-6 border-b border-white/10">
            <div className="h-24 w-24 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-md flex-shrink-0">
              <img
                src={marsuLogo}
                alt="MarSU Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-m font-extrabold uppercase tracking-wide leading-tight font-oswald text-white">
                Marinduque State University
              </h1>
              <p className="text-[9px] font-bold text-[#D4AF37] tracking-widest uppercase mt-1">
                Performance Intelligence
              </p>
            </div>
          </div>

          <nav className="flex flex-col space-y-2 flex-1">
            {navigationItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-6 px-4 py-3.5 rounded-xl font-semibold tracking-wide transition-all group relative ${
                    isActive
                      ? "bg-white text-[#600018] shadow-md border-l-4 border-[#D4AF37]"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span
                    className={
                      isActive
                        ? "text-[#600018]"
                        : "text-[#D4AF37]/80 group-hover:text-[#D4AF37]"
                    }
                  >
                    {item.icon}
                  </span>
                  <span className="font-oswald tracking-wide text-sm">
                    {item.label}
                  </span>
                  {!isActive && (
                    <span className="absolute right-4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 pb-2 mt-auto border-t border-white/10">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-xs tracking-wide text-rose-200 hover:text-white bg-rose-500/10 hover:bg-rose-600/30 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-200 group"
            >
              <span className="text-rose-400 group-hover:text-rose-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span className="font-oswald tracking-wide text-sm uppercase">
                Logout
              </span>
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-white/10 bg-[#4a0012]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">
                System Date
              </span>
              <span className="text-xs text-white font-medium mt-0.5 font-oswald">
                {formattedDate}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
              <div className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span className="text-[10px] uppercase font-bold text-slate-200 tracking-wide font-oswald">
                Live Connection
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Panel Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <main className="p-8 lg:p-12 space-y-10 max-w-screen-2xl w-full mx-auto">
          {/* 🎯 HEADER ACTION CONTROL STRIP RESTORED */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="text-[#600018]">Command Center</span>
                <span className="text-slate-300">/</span>
                <span className="text-white bg-[#600018] px-2 py-0.5 rounded-md font-oswald">
                  {navigationItems.find((n) => n.id === currentTab)?.label}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight font-oswald uppercase text-[#600018]">
                Digital Organizational Diagnostics & Intelligence
              </h2>
            </div>

            {/* Restored Action Wrapper Containing Theme Switch, Divider, & Profiles */}
            <div className="flex items-center gap-4 self-end md:self-auto bg-white px-5 py-2.5 rounded-2xl border border-slate-200/60 shadow-sm">
              {/* RESTORED DARK MODE TOGGLE */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative flex items-center justify-between bg-slate-100 h-8 w-14 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none border border-slate-200/40 shadow-inner"
                aria-label="Toggle Theme Mode"
              >
                <span
                  className={`absolute top-[2px] left-[2px] h-[24px] w-[24px] rounded-full bg-white shadow border border-slate-200 transform transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {isDarkMode ? (
                    <svg
                      className="w-3 h-3 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.036l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 111.414 1.414zm0-10.113a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 text-slate-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </span>
              </button>

              <div className="h-6 w-[1px] bg-slate-200"></div>

              {/* RESTORED NOTIFICATION BELL */}
              <button className="relative text-slate-400 hover:text-[#600018] p-1.5 rounded-xl hover:bg-slate-50 transition-all group">
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white ring-1 ring-rose-300 animate-pulse"></span>
                <svg
                  className="w-5 h-5 transform group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="h-6 w-[1px] bg-slate-200"></div>

              {/* USER PROFILE INFO ROW */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-slate-900 font-oswald tracking-wide">
                    {presidentName}
                  </span>
                  <span className="text-[10px] text-[#D4AF37] bg-[#600018]/5 px-2 py-0.5 rounded-md font-extrabold tracking-wider uppercase inline-block self-end mt-0.5">
                    Executive Owner
                  </span>
                </div>
                <div className="h-10 w-10 bg-gradient-to-tr from-[#600018] to-[#660033] text-white font-oswald font-bold rounded-xl flex items-center justify-center text-sm shadow-sm ring-2 ring-[#D4AF37]/20">
                  DZ
                </div>
              </div>
            </div>
          </div>

          {/* Module Router View Render Portals */}
          {currentTab === "dashboard" && (
            <div className="space-y-10 animate-fade-in">
              <ExecutiveKPIs isDarkMode={isDarkMode} />

              <div>
                <EnrollmentChart isDarkMode={isDarkMode} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <ResearchMetrics isDarkMode={isDarkMode} />
                </div>
                <div>
                  <DistributionPieWidget isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
          )}

          {currentTab === "Academic Performance" && (
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] text-center py-20 animate-fade-in">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-[#600018]/5 text-[#600018] mx-auto flex items-center justify-center rounded-2xl border border-[#600018]/10 shadow-inner">
                  {navigationItems[1].icon}
                </div>
                <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                  Academic Performance
                </h3>
              </div>
            </div>
          )}

          {currentTab === "achievements" && (
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] text-center py-20 animate-fade-in">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-[#600018]/5 text-[#600018] mx-auto flex items-center justify-center rounded-2xl border border-[#600018]/10 shadow-inner">
                  {navigationItems[2].icon}
                </div>
                <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                  Institutional Accreditations & Honors
                </h3>
              </div>
            </div>
          )}

          {currentTab === "enrollment" && (
            <div className="space-y-10 animate-fade-in">
              <EnrollmentChart isDarkMode={isDarkMode} />
              <DistributionPieWidget isDarkMode={isDarkMode} />
            </div>
          )}

          {currentTab === "research" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in">
              <div className="lg:col-span-2">
                <ResearchMetrics isDarkMode={isDarkMode} />
              </div>
              <div>
                <DistributionPieWidget isDarkMode={isDarkMode} />
              </div>
            </div>
          )}
        </main>

        {/* Footer Area */}
        <footer className="mt-auto px-8 lg:px-12 py-6 border-t border-slate-200 bg-white flex flex-col sm:flex-row justify-between text-xs text-slate-400 font-medium font-oswald">
          <p>© 2026 Marinduque State University. All rights reserved.</p>
          <p className="tracking-wide text-[#600018] font-bold uppercase">
            Confidential / Governance Intelligence Matrix
          </p>
        </footer>
      </div>

      {/* LOGOUT OVERLAY MODAL */}
      {isLoggingOut && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 backdrop-blur-md animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-[#600018]/10 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-[#600018] rounded-full animate-spin"></div>
              <svg
                className="w-6 h-6 text-[#600018]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-oswald uppercase tracking-wide">
              Securing Session
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Logging out from MarSU Governance Matrix App...
            </p>
            <span className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase block mt-6">
              Clearing Telemetry Ledger
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainDashboard;
