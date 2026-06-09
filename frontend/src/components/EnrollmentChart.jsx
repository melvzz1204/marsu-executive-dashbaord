import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // 1. Imported Filler plugin
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // 2. Registered Filler plugin
);

const EnrollmentChart = () => {
  const labels = [
    "2021-2022",
    "2022-2023",
    "2023-2024",
    "2024-2025",
    "2025-2026",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Engineering (CE)",
        data: [1200, 1310, 1420, 1490, 1580],
        borderColor: "#10b981", // Emerald
        backgroundColor: "rgba(16, 185, 129, 0.12)", // Translucent fill
        fill: true, // 3. Enabled area fill
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "Info Technology (CICS)",
        data: [1100, 1250, 1380, 1510, 1690],
        borderColor: "#2dd4bf", // Teal
        backgroundColor: "rgba(45, 212, 191, 0.12)",
        fill: true,
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "Education (CED)",
        data: [1050, 1020, 1100, 1080, 1140],
        borderColor: "#6366f1", // Indigo
        backgroundColor: "rgba(99, 102, 241, 0.12)",
        fill: true,
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "Industrial Tech (CIT)",
        data: [900, 940, 980, 1015, 1030],
        borderColor: "#a855f7", // Purple
        backgroundColor: "rgba(168, 85, 247, 0.12)",
        fill: true,
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "Business Mgmt (CBMA)",
        data: [600, 600, 600, 640, 680],
        borderColor: "#f43f5e", // Rose
        backgroundColor: "rgba(244, 63, 94, 0.12)",
        fill: true,
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          color: "#cbd5e1",
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
            family: "sans-serif",
            weight: "500",
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#94a3b8",
        bodyColor: "#fff",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 6,
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
        },
      },
      y: {
        stacked: false, // Keeps true independent values readable instead of stacking heights
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        border: {
          dash: [4, 4],
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <div className="bg-[#111A2E] p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Enrollment Trajectory Model
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Historical comparison of core college enrollment over a 5-Year Cycle
          </p>
        </div>
        <div className="bg-[#16223A] px-4 py-2 rounded-xl border border-white/5 self-start sm:self-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Current Peak Enrollment
          </span>
          <span className="text-lg font-black text-emerald-400">1,690 Pax</span>
        </div>
      </div>

      <div className="h-[360px] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EnrollmentChart;
