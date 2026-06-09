import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        window.location.href = "/dashboard";
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("Unable to establish a connection with the backend server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* 🎯 REFACTORED: Stripped h-screen, global bg-colors, and giant shadow layers to let the animated background breathe */
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-10 shadow-sm">
      {/* Top Decorative Branding Accent Rule Line (Gold Gradient) */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* Header & MarSU Institutional Shield Shell */}
      <div className="text-center">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 font-oswald uppercase">
          Welcome Back
        </h2>
        <p className="mt-2 text-xs text-slate-500 tracking-wide font-medium">
          Access your executive performance command center
        </p>
      </div>

      {/* Error Alert Banner Block */}
      {error && (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-medium text-rose-600 animate-in fade-in duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Login Submission Context Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* Email Input Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 font-oswald"
          >
            Email Address
          </label>
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#600018] transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@marsu.edu.ph"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#600018]/40 focus:bg-white focus:ring-4 focus:ring-[#600018]/[0.05]"
            />
          </div>
        </div>

        {/* Password Input Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 font-oswald"
            >
              Password
            </label>
            <a
              href="#forgot"
              className="text-xs font-semibold text-[#600018] hover:text-[#7a001e] hover:underline underline-offset-4 transition-all font-oswald"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#600018] transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-2.851 0a7.486 7.486 0 015.855-1.158m7.135 0A7.488 7.488 0 0121.147 11.3c.09.431-.213.823-.652.823H3.504c-.439 0-.742-.392-.652-.823a7.47 7.47 0 013.434-4.274"
                />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-12 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#600018]/40 focus:bg-white focus:ring-4 focus:ring-[#600018]/[0.05]"
            />

            {/* Password View/Hide Toggle Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Persistent Remember State Checklist Section */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-slate-300 bg-white text-[#600018] focus:ring-0 accent-[#600018] cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-xs font-medium text-slate-500 select-none cursor-pointer hover:text-slate-700 transition-colors"
          >
            Remember this executive device
          </label>
        </div>

        {/* Submit Action Button Core */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#660033] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#7a001e] border border-[#D4AF37]/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed font-oswald"
        >
          <span>
            {isLoading ? "Validating Credentials..." : "Authorize Sign In"}
          </span>
        </button>
      </form>

      {/* Visual Structural Rules Divider Section */}
      <div className="relative my-7 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200/80"></div>
        </div>
        {/* 🎯 CHANGED: Background to bg-white to merge seamlessly with the card container */}
        <span className="relative bg-white px-3 text-[9px] font-bold uppercase tracking-widest text-slate-400 font-oswald">
          Secured Matrix Node
        </span>
      </div>

      {/* Institutional Contact Support Footer Context */}
      <p className="text-center text-xs text-slate-500">
        Need higher terminal clearance?{" "}
        <a
          href="#admin"
          className="font-semibold text-[#600018] hover:text-[#7a001e] hover:underline underline-offset-4 transition-all font-oswald uppercase text-[11px] tracking-wide"
        >
          Contact Admin
        </a>
      </p>
    </div>
  );
};

export default Login;
