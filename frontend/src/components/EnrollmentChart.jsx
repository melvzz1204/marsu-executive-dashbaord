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
        label: "Info Technology (CICS)",
        data: [1100, 1250, 1380, 1510, 1690],
        borderColor: "#660033",
        fill: false,
        borderWidth: 2.25,
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#660033",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Engineering (CE)",
        data: [1200, 1310, 1420, 1490, 1580],
        borderColor: "#C5A059",
        fill: false,
        borderWidth: 1.75,
        borderDash: [6, 3],
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#C5A059",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Education (CED)",
        data: [1050, 1020, 1100, 1080, 1140],
        borderColor: "#94a3b8",
        fill: false,
        borderWidth: 1.25,
        borderDash: [3, 3],
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#94a3b8",
      },
      {
        label: "Industrial Tech (CIT)",
        data: [900, 940, 980, 1015, 1030],
        borderColor: "#cbd5e1",
        fill: false,
        borderWidth: 1.25,
        borderDash: [3, 3],
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#cbd5e1",
      },
      {
        label: "Business Mgmt (CBMA)",
        data: [600, 600, 600, 640, 680],
        borderColor: "#e2e8f0",
        fill: false,
        borderWidth: 1.25,
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#e2e8f0",
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
          color: "#64748b",
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
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.98)",
        titleColor: "#94a3b8",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 10,
        boxPadding: 6,
        mode: "index",
        intersect: false,
        usePointStyle: true,
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
        /* 🎯 FIXED: Turns off the inner canvas outer-bounding line box */
        border: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
            family: "Inter, sans-serif",
          },
          padding: 10,
        },
      },
      y: {
        grid: {
          color: "#f8fafc",
        },
        /* 🎯 FIXED: Turns off the inner canvas outer-bounding line box */
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
    /* 🎯 BORDER REMOVED: Clean slate white frame backed purely by soft cloud shadow definitions */
    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#660033]/80 block mb-1">
            Institutional Analytics
          </span>
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Enrollment Trajectory Model
          </h2>
          <p className="text-xs text-slate-400 mt-0.5 font-normal">
            Historical metric analysis across key departmental tracks over a
            5-year cycle.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">
            Peak Terminal Enrollment
          </span>
          <span className="text-2xl font-light text-slate-900 tracking-tight">
            1,690{" "}
            <span className="text-xs font-medium text-slate-400 ml-0.5">
              pax
            </span>
          </span>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EnrollmentChart;
