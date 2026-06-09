import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ExecutiveKPIs from "../components/ExecutiveKPIs";
import EnrollmentChart from "../components/EnrollmentChart";
import ResearchMetrics from "../components/ResearchMetrics";
import BudgetUtilization from "../components/BudgetUtilization";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

if (typeof document !== "undefined") {
  const styleId = "oswald-font-import";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
      .font-oswald { font-family: 'Oswald', sans-serif; }
    `;
    document.head.appendChild(style);
  }
}

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
          "#660033",
          "#C5A059",
          "#94a3b8",
          "#cbd5e1",
          "#e2e8f0",
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
          font: { size: 11, family: "Inter, sans-serif" },
        },
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
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchExecutiveOwner = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setPresidentName("Dr. Diosdado P. Zulueta");
      } catch (error) {
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
    setIsLoggingOut(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="flex min-h-screen font-sans antialiased bg-[#f8f4f4ac] text-slate-800">
      {/* Sidebar Injection Layer */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        handleLogout={handleLogout}
        formattedDate={formattedDate}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Panel Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <main className="p-8 lg:p-12 space-y-10 max-w-screen-2xl w-full mx-auto">
          {/* HEADER STRIP ROW */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="text-[#600018]">Command Center</span>
                <span className="text-slate-300">/</span>
                <span className="text-white bg-[#600018] px-2 py-0.5 rounded-md font-oswald capitalize">
                  {currentTab}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight font-oswald uppercase text-[#600018]">
                Digital Organizational Diagnostics & Intelligence
              </h2>
            </div>

            {/* Profile User Toolbar Actions Wrapper */}
            <div className="flex items-center gap-4 self-end md:self-auto bg-white px-5 py-2.5 rounded-2xl border border-slate-200/60 shadow-sm">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative flex items-center justify-between bg-slate-100 h-8 w-14 rounded-full p-1 cursor-pointer border border-slate-200/40 shadow-inner"
              >
                <span
                  className={`absolute top-[2px] left-[2px] h-[24px] w-[24px] rounded-full bg-white shadow border border-slate-200 transform transition-transform duration-300 flex items-center justify-center ${isDarkMode ? "translate-x-6" : "translate-x-0"}`}
                >
                  {isDarkMode ? "🌙" : "☀️"}
                </span>
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
                <div className="h-10 w-10 bg-gradient-to-tr from-[#600018] to-[#660033] text-white font-oswald font-bold rounded-xl flex items-center justify-center text-sm shadow-sm ring-2 ring-[#D4AF37]/20">
                  DZ
                </div>
              </div>
            </div>
          </div>

          {/* Core Navigation Tab Display Interfaces */}
          {currentTab === "dashboard" && (
            <div className="space-y-10 animate-fade-in">
              <ExecutiveKPIs isDarkMode={isDarkMode} />
              <EnrollmentChart isDarkMode={isDarkMode} />
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
              <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                Academic Performance Analytics
              </h3>
            </div>
          )}

          {currentTab === "achievements" && (
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] text-center py-20 animate-fade-in">
              <h3 className="text-xl font-bold font-oswald text-slate-900 uppercase">
                Institutional Accreditations & Honors
              </h3>
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

          {currentTab === "budget" && (
            <div className="animate-fade-in">
              <BudgetUtilization isDarkMode={isDarkMode} />
            </div>
          )}
        </main>

        <footer className="mt-auto px-8 lg:px-12 py-6 border-t border-slate-200 bg-white flex flex-col sm:flex-row justify-between text-xs text-slate-400 font-medium font-oswald">
          <p>© 2026 Marinduque State University. All rights reserved.</p>
          <p className="tracking-wide text-[#600018] font-bold uppercase">
            Confidential / Governance Intelligence Matrix
          </p>
        </footer>
      </div>

      {isLoggingOut && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 backdrop-blur-md animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 text-center">
            <div className="relative w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-[#600018]/10 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-[#600018] rounded-full animate-spin"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-oswald uppercase tracking-wide">
              Securing Session
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainDashboard;
