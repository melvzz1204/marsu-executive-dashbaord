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

function ResearchMetrics({ isDarkMode }) {
  const labels = ["CICS", "CE", "CED", "CIT", "CBMA"];

  const data = {
    labels,
    datasets: [
      {
        label: "Published Research (Papers)",
        data: [58, 42, 31, 22, 19],
        backgroundColor: "#600018", // Hardcoded university maroon
        borderRadius: 6,
      },
      {
        label: "Grants Secured (M ₱)",
        data: [9, 13, 4, 6, 2],
        backgroundColor: "#D4AF37", // Hardcoded gold accent
        borderRadius: 6,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          color: "#475569", // Consistent slate text color
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 11, family: "Inter, sans-serif", weight: "500" },
        },
      },
      tooltip: {
        padding: 12,
        backgroundColor: "#ffffff",
        titleColor: "#0f172a",
        bodyColor: "#475569",
        borderColor: "rgba(0,0,0,0.06)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#64748b", font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#64748b", font: { size: 11 } },
        grid: {
          color: "rgba(0, 0, 0, 0.05)", // Clean, subtle grid lines on white canvas
          drawBorder: false,
        },
      },
    },
  };

  return (
    /* 🌟 FIXED: Card container background is now explicitly hardcoded to white (`bg-white text-slate-900`) */
    <div className="p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] border border-slate-100 bg-white text-slate-900 transition-all duration-300">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-dashed border-slate-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-[#660033]/80">
            Institutional Analytics
          </span>
          <h2 className="text-xl font-extrabold tracking-tight font-oswald uppercase text-slate-900">
            Research & Capital Efficiency
          </h2>
          <p className="text-xs mt-1 max-w-xl leading-relaxed text-slate-500">
            Institutional output comparing publication density against external
            funding allocations across active departments.
          </p>
        </div>

        {/* METRIC BADGES GRID */}
        <div className="flex gap-4 items-center">
          {/* Total Papers Card */}
          <div className="px-5 py-3 rounded-2xl min-w-[120px] bg-slate-50 border border-slate-100">
            <span className="text-[10px] uppercase tracking-wider block font-bold text-slate-500">
              Total Papers
            </span>
            <span className="text-2xl font-bold font-oswald tracking-tight block mt-0.5 text-slate-800">
              172
            </span>
          </div>

          {/* Total Funding Card */}
          <div className="px-5 py-3 rounded-2xl min-w-[140px] bg-slate-50 border border-slate-100">
            <span className="text-[10px] uppercase tracking-wider block font-bold text-slate-500">
              Total Funding
            </span>
            <span className="text-2xl font-bold font-oswald tracking-tight block mt-0.5 text-emerald-600">
              ₱32.8M
            </span>
          </div>
        </div>
      </div>

      {/* CHART CONTENT CONTAINER */}
      <div className="mt-8 h-[320px] w-full">
        <Bar data={data} options={chartOptions} />
      </div>
    </div>
  );
}

export default ResearchMetrics;
