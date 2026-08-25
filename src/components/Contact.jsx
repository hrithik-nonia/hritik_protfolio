import { Mail, Code2 } from "lucide-react";

const contactMethods = [
  {
    type: "EMAIL",
    value: "hello@hrithik.dev",
    href: "mailto:hello@hrithik.dev",
    icon: Mail,
  },
  {
    type: "LINKEDIN",
    value: "in/hrithik-dev",
    href: "https://linkedin.com/in/hrithik-dev",
    icon: Mail,
  },
  {
    type: "GITHUB",
    value: "github.com/hrithik",
    href: "https://github.com/hrithik",
    icon: Mail,
  },
];

export default function Contact({ contacts = contactMethods }) {
  return (
    <section className="relative w-full bg-[#070C1A] text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Heading, Subtitle & Contact Cards */}
        <div className="lg:col-span-6 space-y-6">
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
          <div className="space-y-3.5 pt-2 max-w-lg">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-800/90 bg-[#111A2E]/90 p-4 sm:p-5 shadow-lg transition-all duration-200 hover:border-blue-500/70 hover:bg-[#15213B] hover:-translate-y-0.5 group"
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
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Glowing Code Symbol Graphic (</>) */}
        <div className="lg:col-span-6 flex items-center justify-center py-8">
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96">
            {/* Glowing Blue Radial Backdrop */}
            <div className="absolute inset-0 bg-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

            {/* Code Symbol Icon */}
            <Code2 className="relative h-36 w-36 sm:h-48 sm:w-48 text-[#3B82F6]/90 stroke-[1.8] drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
