import React from "react";

// Local static data block to prevent import errors
const ENROLLMENT_GROWTH_KPI = {
  percentage: "5.34%",
  direction: "UP",
  compareTerm: "1st Semester of AY 2025-2026",
  baseTerm: "1st Semester of AY 2024-2025",
};

const CAMPUS_ENROLLMENT_DATA = [
  {
    semester: "AY 22-23 S1",
    main: 7343,
    stacruz: 479,
    torrijos: 110,
    gasan: 315,
    total: 8247,
  },
  {
    semester: "AY 22-23 S2",
    main: 6971,
    stacruz: 472,
    torrijos: 112,
    gasan: 283,
    total: 7838,
  },
  {
    semester: "AY 23-24 S1",
    main: 7313,
    stacruz: 983,
    torrijos: 243,
    gasan: 387,
    total: 8926,
  },
  {
    semester: "AY 23-24 S2",
    main: 7084,
    stacruz: 960,
    torrijos: 215,
    gasan: 347,
    total: 8606,
  },
  {
    semester: "AY 24-25 S1",
    main: 7719,
    stacruz: 982,
    torrijos: 347,
    gasan: 430,
    total: 9478,
  },
  {
    semester: "AY 24-25 S2",
    main: 7505,
    stacruz: 965,
    torrijos: 338,
    gasan: 396,
    total: 9204,
  },
  {
    semester: "AY 25-26 S1",
    main: 8090,
    stacruz: 918,
    torrijos: 298,
    gasan: 390,
    total: 9696,
  },
];

export default function UndergradEnrollment() {
  // Chart height capacity setup (Matches image ceiling max limit scale)
  const absoluteMaxCapacity = 10000;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col gap-6 font-oswald animate-fade-in">
      {/* EXECUTIVE HEADER BLOCK */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-widest text-[#660033] font-bold block">
            Institutional Growth Parameters (Ref: Screenshot 2026-06-16
            092429.png)
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">
            Higher Education Program Enrollment
          </h2>
          <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">
            Undergraduate registration distribution metrics per semester branch
            audit
          </p>
        </div>

        {/* GROWTH KPI BANNER FLAG */}
        <div className="bg-[#660033] text-white px-5 py-3 rounded-xl flex items-center gap-4 border-b-4 border-[#D4AF37] self-start lg:self-center shrink-0">
          <div className="flex items-center justify-center bg-white/10 w-10 h-10 rounded-lg text-lg font-bold text-emerald-400 shadow-inner">
            ▲
          </div>
          <div>
            <span className="block text-2xl font-black text-emerald-400 leading-none tracking-tight">
              +{ENROLLMENT_GROWTH_KPI?.percentage || "0.00%"}
            </span>
            <span className="block text-[9px] uppercase tracking-wider text-slate-200 mt-1 font-sans font-semibold">
              Growth vs 1st Sem AY 2024-25
            </span>
          </div>
        </div>
      </div>

      {/* DATA IDENTIFIER LEGEND ROW */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs font-bold uppercase tracking-wide">
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#660033]" />
            <span className="text-slate-700">Main Campus</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-sky-600" />
            <span className="text-slate-700">Sta. Cruz</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-emerald-600" />
            <span className="text-slate-700">Torrijos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-amber-700" />
            <span className="text-slate-700">Gasan</span>
          </div>
        </div>
        <span className="text-slate-400 font-mono text-[11px]">
          Axis Limit: 10,000 Cap
        </span>
      </div>

      {/* VERTICAL STACKED GRAPH CONTAINER */}
      <div className="overflow-x-auto no-scrollbar pt-4">
        {/* Graph Core Viewport Frame */}
        <div className="min-w-[700px] h-[340px] flex items-end justify-between border-b border-slate-200 pb-2 px-4 relative">
          {/* BACKGROUND Y-AXIS GRIDLINES */}
          <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none select-none">
            <div className="w-full border-t border-dashed border-slate-100 relative">
              <span className="absolute -top-2.5 left-0 text-[9px] font-bold text-slate-300 font-mono">
                10,000
              </span>
            </div>
            <div className="w-full border-t border-dashed border-slate-100 relative">
              <span className="absolute -top-2.5 left-0 text-[9px] font-bold text-slate-300 font-mono">
                7,500
              </span>
            </div>
            <div className="w-full border-t border-dashed border-slate-100 relative">
              <span className="absolute -top-2.5 left-0 text-[9px] font-bold text-slate-300 font-mono">
                5,000
              </span>
            </div>
            <div className="w-full border-t border-dashed border-slate-100 relative">
              <span className="absolute -top-2.5 left-0 text-[9px] font-bold text-slate-300 font-mono">
                2,500
              </span>
            </div>
          </div>

          {/* DYNAMIC VERTICAL BARS ENGINE */}
          {CAMPUS_ENROLLMENT_DATA.map((row, idx) => {
            // Proportional layout mathematics (Height logic)
            const mainPct = ((row.main || 0) / absoluteMaxCapacity) * 100;
            const cruzPct = ((row.stacruz || 0) / absoluteMaxCapacity) * 100;
            const torrijosPct =
              ((row.torrijos || 0) / absoluteMaxCapacity) * 100;
            const gasanPct = ((row.gasan || 0) / absoluteMaxCapacity) * 100;
            const totalPct = (row.total / absoluteMaxCapacity) * 100;

            return (
              <div
                key={idx}
                className="flex flex-col items-center flex-1 group z-10"
              >
                {/* POP OVER TOTAL METRIC */}
                <div className="mb-2 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-black font-mono text-slate-800 block">
                    {row.total.toLocaleString()}
                  </span>
                </div>

                {/* THE VERTICAL COLUMN BASE */}
                <div
                  style={{ height: `${totalPct * 3}px` }} // Scaled matrix spacing multiplier
                  className="w-14 bg-slate-100 rounded-t-lg overflow-hidden flex flex-col-reverse relative shadow-md group-hover:shadow-lg transition-all duration-300"
                >
                  {/* Gasan (Bottom Layer in stacked context when building bottom-up) */}
                  <div
                    style={{ height: `${gasanPct * 3}px` }}
                    className="bg-amber-700 w-full relative group/tooltip border-t border-black/10"
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9px] font-bold font-mono text-white opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity bg-black/60 py-0.5">
                      G:{row.gasan}
                    </span>
                  </div>

                  {/* Torrijos */}
                  <div
                    style={{ height: `${torrijosPct * 3}px` }}
                    className="bg-emerald-600 w-full relative group/tooltip border-t border-black/10"
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9px] font-bold font-mono text-white opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity bg-black/60 py-0.5">
                      T:{row.torrijos}
                    </span>
                  </div>

                  {/* Sta Cruz */}
                  <div
                    style={{ height: `${cruzPct * 3}px` }}
                    className="bg-sky-600 w-full relative group/tooltip border-t border-black/10"
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9px] font-bold font-mono text-white opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity bg-black/60 py-0.5">
                      SC:{row.stacruz}
                    </span>
                  </div>

                  {/* Main Campus (Dominant stack) */}
                  <div
                    style={{ height: `${mainPct * 3}px` }}
                    className="bg-[#660033] w-full relative group/tooltip"
                  >
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9px] font-bold font-mono text-white opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity bg-black/60 py-0.5">
                      M:{row.main}
                    </span>
                  </div>
                </div>

                {/* X-AXIS DATA LABEL */}
                <div className="mt-3 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block whitespace-nowrap">
                    {row.semester}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RECOGNITION CERTIFICATE REFERENCE BLOCK */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase font-bold">
        <span>Information Stream: Office of the Institutional Registrar</span>
        <span className="text-emerald-600 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
          Verified Enrollment Audit
        </span>
      </div>
    </div>
  );
}
