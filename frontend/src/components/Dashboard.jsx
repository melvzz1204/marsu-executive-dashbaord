import { useNavigate } from "react-router-dom";
import { EnrollmentChart } from "./EnrollmentChart"; // Import here

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen w-screen bg-[#800020] font-sans text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Layer */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              University Command Center
            </h1>
            <p className="text-sm text-slate-400">
              Welcome to your secure administrative session.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-all"
          >
            Log Out
          </button>
        </div>

        {/* Render Chart Framework */}
        <EnrollmentChart />
      </div>
    </div>
  );
};

export default Dashboard;
