import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Electronics Store",
    description:
      "A full-stack e-commerce platform for electronics. Features include user authentication, product search, cart management, and payment integration.",
    technologies: ["REACT", "NODE.JS", "MONGODB"],
    githubUrl: "#github",
    liveUrl: "#live",
    gradient: "from-blue-500 to-purple-500",
    techStyle: "bg-blue-950/80 text-blue-400 border-blue-900/60",
  },
  {
    id: 2,
    title: "Snip.ly",
    description:
      "A URL shortener service with detailed analytics. Built for high performance and quick redirects using modern backend technologies.",
    technologies: ["FASTAPI", "PYTHON", "REDIS"],
    githubUrl: "#github",
    liveUrl: "#live",
    gradient: "from-purple-500 to-cyan-500",
    techStyle: "bg-purple-950/80 text-purple-300 border-purple-900/60",
  },
];

export default function Projects({ items = projects }) {
  return (
    <section className="relative w-full bg-[#070C1A] text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-10 z-10">
        {/* Section Title */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 shadow-xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
            >
              {/* Top Colored Accent Bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
              />

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-4">
                {/* Header: Title & Action Links */}
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Links */}
                    <div className="flex items-center gap-3 text-slate-400">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="View Source Code"
                      >
                        <Code2 className="h-5 w-5 stroke-[2]" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="Visit Live Demo"
                      >
                        <ExternalLink className="h-5 w-5 stroke-[2]" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`rounded-md border px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${project.techStyle}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
