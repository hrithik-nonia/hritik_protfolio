import { Box, Layers, BookOpen, User } from "lucide-react";

export default function About({
  profileImage = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
}) {
  return (
    <section className="relative w-full bg-[#070C1A] text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column: Title, Description & Feature Cards */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              About Me
            </h2>
            <div className="h-1 w-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2.5" />
          </div>

          {/* About Paragraphs */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              I am a passionate Full Stack Developer dedicated to building
              real-world projects that solve complex problems. With expertise
              bridging both frontend and backend technologies, I specialize in
              creating seamless, scalable architectures using React, FastAPI,
              and MongoDB.
            </p>
            <p>
              My approach combines technical precision with high-end design
              aesthetics, ensuring that every application is not only robust
              under the hood but also intuitive and visually striking for the
              user.
            </p>
          </div>

          {/* 3 Key Highlights Cards Row */}
          <div className="pt-4 grid grid-cols-3 gap-3.5 sm:gap-4 max-w-lg">
            {/* Card 1: 5+ Projects Built */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-[#111A2E]/80 p-4 sm:p-5 text-center shadow-md transition-transform hover:-translate-y-0.5">
              <Box className="h-6 w-6 text-blue-500 stroke-[2]" />
              <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-tight">
                5+ Projects Built
              </span>
            </div>

            {/* Card 2: Full Stack */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-[#111A2E]/80 p-4 sm:p-5 text-center shadow-md transition-transform hover:-translate-y-0.5">
              <Layers className="h-6 w-6 text-purple-400 stroke-[2]" />
              <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-tight">
                Full Stack
              </span>
            </div>

            {/* Card 3: Always Learning */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-[#111A2E]/80 p-4 sm:p-5 text-center shadow-md transition-transform hover:-translate-y-0.5">
              <BookOpen className="h-6 w-6 text-cyan-400 stroke-[2]" />
              <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-tight">
                Always Learning
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Circular Profile Image with Blue Glow Ring */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-full p-1.5 border-2 border-blue-500/80 shadow-[0_0_50px_rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(59,130,246,0.5)]">
            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0F172A] border border-slate-800">
              <img
                src={profileImage}
                alt="Hrithik Developer"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Overlay Icon Badge */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700/80 text-white shadow-lg backdrop-blur-xs">
                  <User className="h-6 w-6 stroke-[2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
