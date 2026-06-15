import React from "react";
import { GLOBAL_RANKINGS } from "../staticData/achievements/impactRankings";
import { LICENSURE_DATA } from "../staticData/achievements/licensureData";

// Native ES Module Import for Local Assets
import theLogo from "../assets/higher-education.png";
import wuriLogo from "../assets/wuri-logo.png";

export default function AchievementsCharts() {
  return (
    <div className="space-y-8 animate-fade-in font-oswald">
      {/* ==========================================
          GLOBAL INSTITUTIONAL IMPACT RANKINGS SECTION
         ========================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {GLOBAL_RANKINGS.map((ranking) => (
          <div
            key={ranking.id}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(102,0,51,0.05)] hover:border-slate-200"
          >
            {/* Header Content */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 mb-6 gap-6">
                {/* High-Emphasis Branding Block */}
                <div className="flex flex-col gap-3 justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#660033] font-bold block">
                    Global Recognition Matrix
                  </span>

                  {/* High-impact Transparent Logo Slot */}
                  <div className="h-16 md:h-20 max-w-[240px] flex items-center justify-start overflow-hidden mix-blend-multiply">
                    <img
                      src={ranking.type === "THE" ? theLogo : wuriLogo}
                      alt="Global Ranking Authority Logo"
                      className="h-full w-auto object-contain object-left filter contrast-125"
                    />
                  </div>

                  <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1">
                    {ranking.edition}
                  </p>
                </div>

                {/* 30% Structural Accent Premium Pill */}
                <div className="bg-[#660033] text-white px-6 py-4 rounded-xl text-center sm:text-right shrink-0 min-w-[145px] border-b-4 border-[#D4AF37] self-start sm:self-center">
                  <span className="block text-[9px] uppercase tracking-widest text-slate-300 font-bold">
                    Overall Status
                  </span>
                  <span className="text-3xl font-black text-[#FFD700] leading-none block mt-1 tracking-tight">
                    {ranking.overallRank}
                  </span>
                  <span className="text-[10px] font-medium text-slate-200 block mt-1 truncate max-w-[140px] opacity-90">
                    {ranking.overallTotal}
                  </span>
                </div>
              </div>

              {/* Sub-metrics Performance Grids */}
              {ranking.type === "THE" ? (
                /* Times Higher Education Grid Layout */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[240px] overflow-y-auto no-scrollbar pr-1">
                  {ranking.sdgMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-slate-50/60 border border-slate-100 p-3 rounded-xl flex items-center justify-between transition-colors hover:bg-slate-50"
                    >
                      <span className="font-bold text-slate-700 tracking-wide text-xs truncate pr-2">
                        {metric.sdg}
                      </span>
                      <div className="text-right shrink-0">
                        <span className="font-black text-[#660033] block text-sm uppercase">
                          RANK {metric.rank}
                        </span>
                        <span className="text-[9px] text-slate-400 block uppercase tracking-wider">
                          out of {metric.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* WURI Rankings Metric Cards */
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ranking.categories.map((cat, i) => (
                    <div
                      key={i}
                      className="bg-slate-50/60 border border-slate-100 p-4 rounded-xl flex flex-col justify-between text-center transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-sm"
                    >
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        {cat.tier}
                      </span>
                      <span className="text-2xl font-black text-[#660033] my-2.5 block tracking-tight uppercase">
                        RANK {cat.rank}
                      </span>
                      <span className="text-xs font-bold text-slate-800 leading-snug uppercase tracking-wide">
                        {cat.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Verification Live Strip Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] tracking-wider text-slate-400 uppercase font-bold">
              <span>
                Source Ref:{" "}
                {ranking.type === "THE"
                  ? "THE Impact Data Desk"
                  : "WURI Innovation Registry"}
              </span>
              <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
                Certified Official
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ==========================================
          LICENSURE EXAMINATION AUDIT BREAKDOWN SECTION
         ========================================== */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col gap-8">
        {/* UPPER BANNER SECTION: KPIs & Targets */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-[#660033] font-bold block">
              Higher Education Program Milestone
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">
              Performance in the Licensure Examination
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Percentage of first-time licensure exam-takers that pass the
              institutional board exams.
              <span className="text-[#660033] block mt-1 font-bold font-oswald text-xs uppercase tracking-wider">
                Institutional Context Metrics: 167 out of 229 first-time
                candidates verified passed.
              </span>
            </p>
          </div>

          {/* Variance Matrix Grid Layout */}
          <div className="grid grid-cols-3 gap-1 bg-[#660033] p-1 rounded-xl shrink-0 shadow-sm border border-[#660033]">
            <div className="text-center px-5 py-3 bg-[#660033] text-white rounded-lg">
              <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                Target
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                64.00%
              </span>
            </div>
            <div className="text-center px-5 py-3 bg-[#5c002e] text-white rounded-lg border-x border-white/5">
              <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                Actual
              </span>
              <span className="text-xl font-bold text-[#FFD700] tracking-tight">
                72.93%
              </span>
            </div>
            <div className="text-center px-5 py-3 bg-[#660033] text-white rounded-lg">
              <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                Variance
              </span>
              <span className="text-xl font-black text-emerald-400 tracking-tight">
                +8.93%
              </span>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Integrated Program Registry List */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold text-[#660033] uppercase tracking-widest">
              Program Registry Breakdown
            </h3>
            <p className="text-xs text-slate-400 tracking-wide">
              Live accredited course metrics for systemic internal audits
            </p>
          </div>

          {/* Responsive Double Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto no-scrollbar pr-1">
            {LICENSURE_DATA.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50/60 border border-slate-100 text-xs transition-all duration-200 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-sm"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                    {item.program}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                    {item.passed} / {item.takers} Candidates Passed
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`font-black text-base tracking-tight ${
                      item.rate >= 75
                        ? "text-emerald-600"
                        : item.rate >= 50
                          ? "text-amber-500"
                          : "text-rose-500"
                    }`}
                  >
                    {item.rate}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
