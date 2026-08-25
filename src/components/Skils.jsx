import { motion } from "framer-motion";
import { SkillsData } from "../constants/Constants";

export default function Skill() {
  return (
    <section className="relative w-full overflow-hidden py-15">
      <div>
        {/* Section Heading (Smooth Top Fade In) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center pb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Skills
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </motion.div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {SkillsData.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              {/* Category Header */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xs font-bold tracking-widest text-slate-400 uppercase"
              >
                {cat.category}
              </motion.h3>

              {/* Skill Cards Grid (Staggered Pop-In Animation) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08, // Tezi se ek-ek karke cards pop honge
                    },
                  },
                }}
                className="flex flex-wrap gap-3.5 sm:gap-4"
              >
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85, y: 25 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 110,
                            damping: 14,
                          },
                        },
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                        transition: { duration: 0.2 },
                      }}
                      className="group flex flex-col items-center justify-center h-24 w-22 sm:h-28 sm:w-26 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-3 shadow-md hover:border-blue-500/70 hover:bg-[#15213B] transition-colors cursor-pointer"
                    >
                      {/* Skill Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-blue-500/40 transition-colors mb-2">
                        <Icon className={`h-5 w-5 ${skill.color}`} />
                      </div>

                      {/* Skill Name */}
                      <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
