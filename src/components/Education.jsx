import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Your College Name",
    duration: "2022 – 2025",
  },
];

export default function Education({ items = educationData }) {
  return (
    <section className="relative w-full bg-[#070C1A] text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-10 z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Education Cards List */}
        <div className="space-y-4 max-w-xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 sm:gap-5 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-6 sm:p-7 shadow-lg transition-all hover:border-slate-700 hover:-translate-y-0.5"
            >
              {/* Graduation Cap Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/60 border border-blue-900/60 text-[#3B82F6] shrink-0">
                <GraduationCap className="h-6 w-6 stroke-[2]" />
              </div>

              {/* Content Stack */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-blue-400">
                  {item.college}
                </p>
                <p className="text-xs font-medium text-slate-400 pt-0.5">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
