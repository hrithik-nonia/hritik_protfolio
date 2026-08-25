const languagesData = [
  {
    code: "IN",
    language: "Hindi",
    level: "Native",
    isActive: true, // Blue border highlight
  },
  {
    code: "GB",
    language: "English",
    level: "Intermediate",
    isActive: false,
  },
  {
    code: "BD",
    language: "Bengali",
    level: "Native",
    isActive: false,
  },
];

export default function Languages({ items = languagesData }) {
  return (
    <section className="relative w-full bg-[#070C1A] text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-10 z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Languages
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Language Cards Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center w-32 h-32 rounded-2xl bg-[#111A2E]/90 p-4 text-center shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                item.isActive
                  ? "border-2 border-[#3B82F6] shadow-blue-500/10"
                  : "border border-slate-800/90 hover:border-blue-500/60"
              }`}
            >
              {/* Country Code Abbreviation */}
              <span className="text-base font-extrabold tracking-widest text-slate-200 uppercase mb-1">
                {item.code}
              </span>

              {/* Language Name */}
              <span className="text-sm font-bold text-white">
                {item.language}
              </span>

              {/* Proficiency Level */}
              <span className="text-xs font-medium text-slate-400 mt-0.5">
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
