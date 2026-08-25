import {
  Code2,
  FileCode2,
  Cpu,
  Atom,
  Palette,
  Server,
  Terminal,
  Zap,
  Boxes,
  Database,
  HardDrive,
  Layers,
} from "lucide-react";

const skillsData = [
  {
    category: "FRONTEND",
    skills: [
      { name: "HTML", icon: Code2, color: "text-orange-500" },
      { name: "CSS", icon: FileCode2, color: "text-blue-500" },
      { name: "JS", icon: Cpu, color: "text-yellow-400" },
      { name: "React", icon: Atom, color: "text-cyan-400" },
      { name: "Tailwind", icon: Palette, color: "text-teal-400" },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", icon: Server, color: "text-emerald-500" },
      { name: "Python", icon: Terminal, color: "text-blue-400" },
      { name: "FastAPI", icon: Zap, color: "text-emerald-400" },
      { name: "Express", icon: Boxes, color: "text-slate-300" },
    ],
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MongoDB", icon: Database, color: "text-emerald-500" },
      { name: "Postgres", icon: HardDrive, color: "text-indigo-400" },
      { name: "Redis", icon: Layers, color: "text-rose-500" },
    ],
  },
];

export default function Skill({ categories = skillsData }) {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background Ambient Glows */}
      {/* <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" /> */}

      <div className="">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Skills
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              {/* Category Header */}
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                {cat.category}
              </h3>

              {/* Skill Cards Grid */}
              <div className="flex flex-wrap gap-3.5 sm:gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="group flex flex-col items-center justify-center h-24 w-22 sm:h-28 sm:w-26 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-3 shadow-md hover:border-blue-500/70 hover:bg-[#15213B] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                    >
                      {/* Skill Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-blue-500/40 transition-colors mb-2">
                        <Icon className={`h-5 w-5 ${skill.color}`} />
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
