import Login from "../components/Login";
import LoginBackground from "../components/LoginBackground";

function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 overflow-hidden">
      <LoginBackground />
      <div className="relative z-10 w-full max-w-md px-4 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}

export default Home;
