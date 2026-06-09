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
 * FIXED: Moved outside the components and safely checks if document exists.
 * This runs exactly ONCE when the file is parsed, not on every render.
 */
if (typeof document !== "undefined") {
  const styleId = "oswald-font-import";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
      /* Apply Oswald globally to specified class */
      .font-oswald {
        font-family: 'Oswald', sans-serif;
      }
    `;
    document.head.appendChild(style);
  }
}

const DistributionPieWidget = () => {
  const data = {
    labels: [
      "Engineering",
      "Computing",
      "Education",
      "Industrial Tech",
      "Business",
    ],
    datasets: [
      {
        data: [1580, 1690, 1140, 1030, 680],
        backgroundColor: [
          "#10b981",
          "#2dd4bf",
          "#6366f1",
          "#a855f7",
          "#f43f5e",
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
          color: "#475569",
          boxWidth: 12,
          font: { size: 11, weight: "600", family: "Oswald" },
          padding: 12,
        },
      },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#D4AF37",
        bodyColor: "#1e293b",
        borderColor: "rgba(212, 175, 55, 0.2)",
        borderWidth: 1,
        titleFont: { family: "Oswald" },
        bodyFont: { family: "Oswald" },
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm h-full flex flex-col justify-between transition-colors duration-300">
      <div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight font-oswald uppercase">
          Seat Share Density
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Current semester enrollment distribution ratio
        </p>
      </div>
      <div className="h-[260px] w-full my-auto flex items-center justify-center">
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

  const handleLogout = () => {
    alert("Logging out from MarSU Governance Matrix App...");
    window.location.href = "/";
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
      id: "instruction",
      label: "Instruction",
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
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-[#D4AF37] selection:text-slate-900 transition-colors duration-300">
      <aside className="w-80 bg-[#600018] text-white flex flex-col justify-between sticky top-0 h-screen shadow-xl border-r border-[#D4AF37]/20 z-40">
        <div className="flex flex-col pt-8 px-6 space-y-8 overflow-y-auto flex-1">
          <div className="flex items-center gap-3.5 pb-6 border-b border-white/10">
            <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-md flex-shrink-0">
              <img
                src={marsuLogo}
                alt="MarSU Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-base font-extrabold uppercase tracking-wide leading-tight font-oswald text-white">
                Marinduque State <br /> University
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
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all group relative ${
                    isActive
                      ? "bg-white text-[#600018] shadow-md border-l-4 border-[#D4AF37]"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`${isActive ? "text-[#600018]" : "text-[#D4AF37]/80 group-hover:text-[#D4AF37]"}`}
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

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <main className="p-8 lg:p-12 space-y-10 max-w-screen-2xl w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="text-[#600018]">Command Center</span>
                <span className="text-slate-300">/</span>
                <span className="text-[#D4AF37] bg-[#600018] px-2 py-0.5 rounded-md font-oswald">
                  {navigationItems.find((n) => n.id === currentTab)?.label}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 font-oswald uppercase">
                Digital Organizational Diagnostics & Intelligence
              </h2>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto bg-white px-5 py-2.5 rounded-2xl border border-slate-200/60 shadow-sm transition-colors duration-300">
              {/* THEME ICON TOGGLE BUTTON (Purely functional state visual switch) */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative flex items-center justify-between bg-slate-100 h-9 w-16 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none border border-slate-200/40 shadow-inner"
                aria-label="Toggle Theme Mode"
              >
                <span
                  className={`absolute top-[3px] left-[3px] h-[28px] w-[28px] rounded-full bg-white shadow border border-slate-200 transform transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode ? "translate-x-7" : "translate-x-0"
                  }`}
                >
                  {isDarkMode ? (
                    <svg
                      className="w-3.5 h-3.5 text-[#600018]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.036l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 111.414 1.414zm0-10.113a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div className="h-6 w-[1px] bg-slate-200"></div>

              <button className="relative text-slate-400 hover:text-[#600018] p-1.5 rounded-xl hover:bg-slate-50 transition-all group">
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white ring-1 ring-rose-300 animate-pulse"></span>
                <svg
                  className="w-6 h-6 transform group-hover:rotate-12 transition-transform"
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

              <div className="flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-slate-900 font-oswald tracking-wide">
                    {presidentName}
                  </span>
                  <span className="text-[10px] text-[#D4AF37] bg-[#600018]/5 px-2 py-0.5 rounded-md font-extrabold tracking-wider uppercase inline-block self-end mt-0.5">
                    Executive Owner
                  </span>
                </div>
                <div className="h-10 w-10 bg-gradient-to-tr from-[#600018] to-[#800020] text-white font-oswald font-bold rounded-xl flex items-center justify-center text-sm shadow-sm ring-2 ring-[#D4AF37]/20">
                  DZ
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Dynamic Module Router Engine */}
          {currentTab === "dashboard" && (
            <div className="space-y-10 animate-fade-in">
              <ExecutiveKPIs isDarkMode={false} />

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/10 to-[#600018]/5 rounded-3xl opacity-30 blur transition duration-1000 group-hover:opacity-50"></div>
                <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden transition-colors duration-300">
                  <EnrollmentChart isDarkMode={false} />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden transition-colors duration-300">
                  <ResearchMetrics isDarkMode={false} />
                </div>
                <div>
                  <DistributionPieWidget />
                </div>
              </div>
            </div>
          )}

          {currentTab === "instruction" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm text-center py-20 animate-fade-in transition-colors duration-300">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-[#600018]/5 text-[#600018] mx-auto flex items-center justify-center rounded-2xl border border-[#600018]/10 shadow-inner">
                  {navigationItems[1].icon}
                </div>
                <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                  Instructional Intelligence Registry
                </h3>
                <p className="text-sm text-slate-500">
                  Curriculum compliance metrics, faculty loading data charts,
                  and student satisfaction index summaries are compiling for
                  this sector.
                </p>
              </div>
            </div>
          )}

          {currentTab === "achievements" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm text-center py-20 animate-fade-in transition-colors duration-300">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-[#600018]/5 text-[#600018] mx-auto flex items-center justify-center rounded-2xl border border-[#600018]/10 shadow-inner">
                  {navigationItems[2].icon}
                </div>
                <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                  Institutional Accreditations & Honors
                </h3>
                <p className="text-sm text-slate-500">
                  Real-time SUC leveling progress, CHED COEs/CODs status
                  trackers, and board examination performance statistics ledger.
                </p>
              </div>
            </div>
          )}

          {currentTab === "enrollment" && (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-sm space-y-10 animate-fade-in transition-colors duration-300">
              <EnrollmentChart isDarkMode={false} />
              <div className="px-4 pb-4">
                <DistributionPieWidget />
              </div>
            </div>
          )}

          {currentTab === "research" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-sm transition-colors duration-300 lg:col-span-2">
                <ResearchMetrics isDarkMode={false} />
              </div>
              <div>
                <DistributionPieWidget />
              </div>
            </div>
          )}
        </main>

        <footer className="mt-auto px-8 lg:px-12 py-6 border-t border-slate-200 bg-white flex flex-col sm:flex-row justify-between text-xs text-slate-400 font-medium font-oswald transition-colors duration-300">
          <p>© 2026 Marinduque State University. All rights reserved.</p>
          <p className="tracking-wide text-[#600018] font-bold uppercase">
            Confidential / Governance Intelligence Matrix
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MainDashboard;
