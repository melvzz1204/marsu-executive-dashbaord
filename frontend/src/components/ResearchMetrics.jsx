import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ResearchMetrics = () => {
  const labels = [
    "Engineering (CE)",
    "Computing (CICS)",
    "Education (CED)",
    "Industrial Tech (CIT)",
    "Business (CBMA)",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Published Research (Papers)",
        data: [42, 58, 31, 22, 19],
        backgroundColor: "#660033", // 🎯 BRANDED IDENTITY: Primary Burgundy
        hoverBackgroundColor: "#4d0026",
        borderRadius: 4, // Clean, subtle rounding for a premium data look
        borderSkipped: false,
        barPercentage: 0.55, // Leaner bar profile for an airy layout aesthetic
        categoryPercentage: 0.7,
      },
      {
        label: "Grants Secured (M ₱)",
        data: [12.4, 8.9, 3.5, 6.2, 1.8],
        backgroundColor: "#C5A059", // 🎯 BRANDED IDENTITY: Matte Satin Gold
        hoverBackgroundColor: "#b38f4b",
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.55,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end", // Elegant side placement alignment
        labels: {
          color: "#64748b", // Slate-500 typography scaling
          boxWidth: 6,
          boxHeight: 6,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 11,
            family: "Inter, sans-serif",
            weight: "500",
          },
          padding: 20,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.98)", // Premium dark slate tooltip box
        titleColor: "#94a3b8",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 10,
        boxPadding: 6,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Architectural baseline display logic
        },
        /* 🎯 FIXED: Explicitly turns off injected canvas boundary line */
        border: {
          display: false,
        },
        ticks: {
          color: "#94a3b8", // Clean slate labels
          font: {
            size: 11,
            family: "Inter, sans-serif",
          },
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#f8fafc", // Ultra-thin elegant alignment tracks
        },
        /* 🎯 FIXED: Explicitly turns off injected canvas boundary line */
        border: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
            family: "Inter, sans-serif",
          },
          padding: 12,
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    /* 🎯 BORDER REMOVED: Structured purely on the premium shadow depth profile */
    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#660033]/80 block mb-1">
            Institutional Analytics
          </span>
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Research & Capital Efficiency
          </h2>
          <p className="text-xs text-slate-400 mt-0.5 font-normal">
            Institutional output comparing publication density against external
            funding allocations.
          </p>
        </div>

        {/* Clean, borderless KPI metric readouts aligned to typography grid */}
        <div className="flex items-center gap-6 sm:gap-8 self-start lg:self-auto">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">
              Total Papers
            </span>
            <span className="text-2xl font-light text-slate-900 tracking-tight">
              172
            </span>
          </div>
          <div className="h-8 w-[1px] bg-slate-100 self-end mb-1" />{" "}
          {/* Minimalist structural divider */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">
              Total Funding
            </span>
            <span className="text-2xl font-light text-slate-900 tracking-tight">
              ₱32.8M
            </span>
          </div>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ResearchMetrics;
