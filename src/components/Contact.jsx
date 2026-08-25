import { Code2 } from "lucide-react";
import { ContactMethods } from "../constants/Constants";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      className="relative w-full overflow-hidden py-15 bg-[#070C1A] px-5 md:px-10 lg:px-20"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "0px 0px -30% 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Heading, Subtitle & Contact Cards */}
        <motion.div
          className="lg:col-span-6 space-y-6"
          variants={{
            hidden: {
              opacity: 0,
              y: 80,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* Header Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let's Connect
            </h2>
            <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2.5" />
            <p className="mt-3 text-sm font-medium text-slate-400">
              Open for collaborations and opportunities.
            </p>
          </div>

          {/* Contact Cards Stack */}
          <motion.div
            className="space-y-3.5 pt-2 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15, // Har card 0.15s ke delay se aayega
                },
              },
            }}
          >
            {ContactMethods.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-4 sm:p-5 shadow-lg transition-all duration-200 hover:border-blue-500/70 hover:bg-[#15213B] hover:-translate-y-0.5 group"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950/60 border border-blue-900/60 text-[#3B82F6] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                  )}

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      {contact.type}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white font-mono truncate group-hover:text-blue-400 transition-colors mt-0.5">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Glowing Code Symbol Graphic (</>) */}
        <motion.div
          className="lg:col-span-6 flex items-center justify-center py-8"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96">
            {/* Glowing Blue Radial Backdrop */}
            {/* <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" /> */}
            <motion.div
              className="bg-blue-600/40 absolute inset-0 rounded-full blur-[100px] pointer-events-none"
              animate={{
                opacity: [1, 0.4, 1],
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.4)",
                  "0 0 30px rgba(59, 130, 246, 0.9)",
                  "0 0 10px rgba(59, 130, 246, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Code Symbol Icon */}
            <Code2 className="relative h-36 w-36 sm:h-48 sm:w-48 text-[#3B82F6]/90 stroke-[1.8] drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
