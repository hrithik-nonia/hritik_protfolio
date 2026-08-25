import { motion } from "framer-motion";
import { LanguagesData } from "../constants/Constants";

export default function Languages() {
  return (
    <section className="relative w-full overflow-hidden py-15">
      <div>
        {/* Section Title (Smooth Top Slide In) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center pb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Languages
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-2.5" />
        </motion.div>

        {/* Language Cards Row (Staggered Pop-In Animation) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // Har card 0.15s ke gap se aayega
              },
            },
          }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto"
        >
          {LanguagesData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
              className={`flex flex-col items-center justify-center w-32 h-32 rounded-2xl bg-[#111A2E]/90 p-4 text-center 
                shadow-lg cursor-pointer transition-colors ${
                  item.isActive
                    ? "border-2 border-[#3B82F6] shadow-blue-500/20"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
