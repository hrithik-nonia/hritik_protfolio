import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EducationData } from "../constants/Constants";

export default function Education() {
  return (
    <section className="relative w-full overflow-hidden py-15">
      <div>
        {/* Section Title (Top se Smooth Fade In) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center pb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </motion.div>

        {/* Education Cards List (Staggered Bottom Slide In) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Multiple cards 1-by-1 smooth aayenge
              },
            },
          }}
          className="space-y-4 max-w-xl mx-auto"
        >
          {EducationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 sm:gap-5 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-6 sm:p-7 shadow-lg hover:border-blue-500/60 transition-colors cursor-pointer"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
