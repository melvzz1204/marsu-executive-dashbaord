import React from "react";

// Individual reusable KPI card with modern micro-interactions
const KPICard = ({
  title,
  value,
  change,
  isPositive,
  metricContext,
  icon: Icon,
  colorClass,
}) => {
  return (
    <div className="bg-[#111A2E] p-6 rounded-3xl border border-white/5 shadow-lg relative overflow-hidden group hover:border-white/10 transition-all duration-300">
      <div
        className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${colorClass}`}
      ></div>

      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white tracking-tight">
              {value}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {metricContext}
            </span>
          </div>

          {/* Executive Performance Badge */}
          <div className="flex items-center gap-1.5 pt-1">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${
                isPositive
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/10"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/10"
              }`}
            >
              {isPositive ? "▲" : "▼"} {change}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              vs last cycle
            </span>
          </div>
        </div>

        {/* Dynamic Icon Container */}
        <div
          className={`p-3 rounded-2xl border border-white/5 bg-[#16223A] text-xl shadow-inner group-hover:scale-105 transition-transform duration-300`}
        >
          <Icon />
        </div>
      </div>
    </div>
  );
};

export function ExecutiveKPIs() {
  // Institutional Core KPIs
  const kpiData = [
    {
      title: "Total System Enrollment",
      value: "6,120",
      metricContext: "Students",
      change: "+6.7%",
      isPositive: true,
      colorClass: "bg-emerald-500",
      icon: () => <span className="text-emerald-400">🎓</span>,
    },
    {
      title: "Research Funding Secured",
      value: "₱32.8M",
      metricContext: "PHP",
      change: "+14.2%",
      isPositive: true,
      colorClass: "bg-teal-500",
      icon: () => <span className="text-teal-400">₱</span>,
    },
    {
      title: "Active Institutional Grants",
      value: "45",
      metricContext: "Projects",
      change: "-3.1%",
      isPositive: false,
      colorClass: "bg-rose-500",
      icon: () => <span className="text-rose-400">🏆</span>,
    },
    {
      title: "Faculty Publication Rate",
      value: "84.2%",
      metricContext: "Retention",
      change: "+2.4%",
      isPositive: true,
      colorClass: "bg-indigo-500",
      icon: () => <span className="text-indigo-400">📄</span>,
    },
  ];
}

export default ExecutiveKPIs;
