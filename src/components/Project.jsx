import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { ProjectData } from "../constants/Constants";

export default function Projects() {
  return (
    <section className="relative w-full overflow-hidden py-15" id="projects">
      <div>
        {/* Section Title (Left se Smooth Fade In) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5" />
        </motion.div>

        {/* Projects Grid (Staggered Bottom Slide In) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Har project card 0.2s ke gap se aayega
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {ProjectData.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 16,
                  },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 shadow-xl hover:border-slate-700 transition-colors"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
