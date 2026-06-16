import { LET_2025_TOP_SCHOOLS } from "./letPerformance";
export default function LetTopPerformingChart() {
  const targetSchool = LET_2025_TOP_SCHOOLS.find((item) => item.isTarget);
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col gap-6 font-oswald animate-fade-in">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#660033] font-bold block">
            National Board Exam Benchmark (PRC Data Ref: Screenshot 2026-06-16
            090401.png)
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
            LET Secondary Level National Rankings
          </h2>
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            March 2025 Board Performance • Category: 50 to 99 Examinees
          </p>
        </div>

        {/* Highlight Banner Pill */}
        <div className="bg-[#660033] text-white px-5 py-2.5 rounded-xl flex items-center gap-4 border-b-4 border-[#D4AF37] self-start lg:self-center">
          <div className="text-center border-r border-white/20 pr-4">
            <span className="block text-[8px] uppercase text-slate-300 tracking-widest font-bold">
              PRC Rank
            </span>
            <span className="text-2xl font-black text-[#FFD700] tracking-tight">
              #09
            </span>
          </div>
          <div>
            <span className="block text-[9px] uppercase text-slate-200 font-bold tracking-wider">
              Passing Rate
            </span>
            <span className="text-xl font-black tracking-tight">
              {targetSchool?.rate}%
            </span>
          </div>
        </div>
      </div>

      {/* CORE BAR GRAPH MATRIX */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-[11px] uppercase tracking-wider text-slate-400 font-bold px-1">
          <span>Institutions Ranked Nationwide</span>
          <span>Passing Percentage</span>
        </div>

        <div className="space-y-3">
          {LET_2025_TOP_SCHOOLS.map((school) => (
            <div
              key={school.rank}
              className={`group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-2 rounded-xl transition-all duration-200 ${
                school.isTarget
                  ? "bg-[#660033]/5 border border-[#660033]/20 shadow-sm"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              {/* Rank and Identity Frame */}
              <div className="flex items-center gap-3 w-full sm:w-[240px] shrink-0">
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded text-xs font-black shrink-0 ${
                    school.isTarget
                      ? "bg-[#660033] text-[#FFD700]"
                      : "bg-slate-100 text-slate-500 font-mono"
                  }`}
                >
                  {school.rank}
                </span>
                <span
                  className={`text-xs font-bold uppercase tracking-wide truncate ${
                    school.isTarget
                      ? "text-[#660033] text-sm"
                      : "text-slate-700"
                  }`}
                >
                  {school.school}
                </span>
              </div>

              {/* Dynamic Scaling Performance Bar */}
              <div className="w-full bg-slate-100 h-7 rounded-lg overflow-hidden relative flex items-center px-3">
                <div
                  className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-r-md ${
                    school.isTarget
                      ? "bg-gradient-to-r from-[#660033] to-[#800040]"
                      : "bg-gradient-to-r from-slate-400 to-slate-500 opacity-80 group-hover:opacity-100"
                  }`}
                  style={{ width: `${school.rate}%` }}
                />

                {/* Embedded Candidate Counter */}
                <span className="relative z-10 text-[10px] font-bold tracking-wider uppercase text-white drop-shadow-sm font-mono">
                  {school.passed}/{school.takers} Passed
                </span>
              </div>

              {/* Percentage Indicator */}
              <div className="text-right shrink-0 min-w-[60px] hidden sm:block">
                <span
                  className={`text-sm font-black tracking-tight ${
                    school.isTarget
                      ? "text-[#660033] text-base"
                      : "text-slate-600"
                  }`}
                >
                  {school.rate.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER AUDIT LOGO RECOGNITION */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase font-bold">
        <span>Data Pool Source: Professional Regulation Commission (PRC)</span>
        <span className="text-emerald-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
          Verified Institutional Top 10
        </span>
      </div>
    </div>
  );
}
