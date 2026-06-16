import ImpactRankings from "../staticData/achievements/impactRankings.jsx";
import LicensureExam from "../staticData/achievements/licensureData.jsx";
import LetPerformanceExam from "../staticData/achievements/letPerformance.jsx";
import Enrollments from "../staticData/enrollments/undergradEnrollmentData.jsx";

export default function AchievementsCharts() {
  return (
    <div className="space-y-8 animate-fade-in font-oswald">
      {/* Global University Matrix */}
      <ImpactRankings />
      {/* Program Registry Breakdown Audit */}
      <LicensureExam />
      {/* PRC National LET Top 10 Benchmark Chart */}
      <LetPerformanceExam />
      <Enrollments />
    </div>
  );
}
