export default function HeroSection({ onViewProjects, onDownloadResume }) {
  return (
    <section className="relative w-full min-h-screen bg-[#070C1A] text-white flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-20 overflow-hidden">
      {/* BACKGROUND GLOW LAYERS */}

      {/* 1. Left Blue Spotlight Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-blue-600/25 blur-[140px] pointer-events-none" />

      {/* 2. Right Purple Nebula Glow */}
      <div className="absolute top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[150px] pointer-events-none" />

      {/* 3. Bottom Left Cyan/Blue Glow */}
      <div className="absolute -bottom-[15%] left-[5%] w-[550px] h-[550px] rounded-full bg-cyan-600/20 blur-[130px] pointer-events-none" />

      {/* 4. Smooth Radial Overlay Mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 35%, rgba(37, 99, 235, 0.3) 0%, transparent 55%),
            radial-gradient(circle at 82% 45%, rgba(147, 51, 234, 0.28) 0%, transparent 50%),
            radial-gradient(circle at 30% 90%, rgba(6, 182, 212, 0.18) 0%, transparent 60%)
          `,
        }}
      />

      {/* HERO CONTENT */}

      <div className="relative space-y-6 z-10">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-none">
          Hi, I'm <span className="text-[#3B82F6]">Hrithik</span>
        </h1>

        {/* Vertical Blue Indicator Line */}
        <div className="py-1">
          <span className="h-8 w-1 bg-[#3B82F6] rounded-full inline-block animate-pulse" />
        </div>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-2">
          I build clean, scalable web apps from frontend to backend. Focused on
          delivering premium digital experiences with modern web technologies.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center gap-4">
          {/* View Projects Button */}
          <button
            type="button"
            onClick={onViewProjects}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:from-[#2563EB] hover:to-[#1D4ED8] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <span>View Projects</span>
          </button>

          {/* Download Resume Button */}
          <button
            type="button"
            onClick={onDownloadResume}
            className="inline-flex items-center gap-2 rounded-xl border border-[#3B82F6]/70 bg-[#0F172A]/80 px-7 py-3.5 text-sm font-bold text-[#60A5FA] hover:bg-[#1E293B] hover:border-[#3B82F6] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
