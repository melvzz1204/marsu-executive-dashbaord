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
  // Grouped by Core Colleges for comprehensive comparison
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
        backgroundColor: "#10b981", // Emerald Green
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        label: "Grants Secured (M ₱)",
        data: [12.4, 8.9, 3.5, 6.2, 1.8],
        backgroundColor: "#2dd4bf", // Teal Accent
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#94a3b8", // slate-400
          boxWidth: 12,
          boxHeight: 6,
          borderRadius: 2,
          usePointStyle: false,
          font: {
            size: 11,
            family: "sans-serif",
            weight: "600",
          },
          padding: 15,
        },
      },
      title: {
        display: false, // Dashboard handles global titles
      },
      tooltip: {
        backgroundColor: "#16223A",
        titleColor: "#94a3b8",
        bodyColor: "#fff",
        borderColor: "rgba(255, 255, 255, 0.05)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 12,
        boxPadding: 6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b", // slate-500
          font: {
            size: 11,
            weight: "500",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.02)",
        },
        border: {
          dash: [4, 4], // Dashed guidelines matching the dashboard grid
        },
        ticks: {
          color: "#64748b",
          font: {
            size: 11,
          },
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <div className="bg-[#111A2E] p-8 rounded-3xl border border-white/5 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Research & Capital Efficiency
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Institutional output comparing publication density against external
            funding allocations.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#16223A] px-4 py-2 rounded-xl border border-white/5 text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Total Papers
            </span>
            <span className="text-lg font-black text-emerald-400">172</span>
          </div>
          <div className="bg-[#16223A] px-4 py-2 rounded-xl border border-white/5 text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Total Funding
            </span>
            <span className="text-lg font-black text-teal-400">₱32.8M</span>
          </div>
        </div>
      </div>

      <div className="h-[360px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ResearchMetrics;
