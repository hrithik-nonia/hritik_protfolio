// built in imports
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const WORDS = ["React Developer", "FastAPI Developer", "Full Stack Developer"];
const TYPING_SPEED = 180; // Time per character when typing
const DELETING_SPEED = 90; // Time per character when deleting
const PAUSE_AFTER_WORD = 1000; // Pause when word is completely typed
const PAUSE_AFTER_DELETE = 300; // Pause before typing next word

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timer;
    if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        // Fully deleted -> Pause then switch to next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, PAUSE_AFTER_DELETE);
      }
    } else {
      // Typing characters
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        // Word complete -> Pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_WORD);
      }
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section
      className="relative w-full min-h-screen bg-[#070C1A] text-white flex flex-col justify-center 
    overflow-hidden px-5 md:px-10 lg:px-20"
      id="hero"
    >
      {/* BACKGROUND GLOW LAYERS */}

      {/* 1. Left Blue Spotlight Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-blue-600/25 blur-[140px] pointer-events-none" />

      {/* 2. Right Purple Nebula Glow */}
      <div className="absolute top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[150px] pointer-events-none" />

      {/* 3. Bottom Left Cyan/Blue Glow */}
      <div className="absolute -bottom-[15%] left-[5%] w-[550px] h-[550px] rounded-full bg-cyan-600/20 blur-[130px] pointer-events-none" />

      {/* 4. Smooth Radial Overlay Mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 35%, rgba(37, 99, 235, 0.3) 0%, transparent 55%),
            radial-gradient(circle at 82% 45%, rgba(147, 51, 234, 0.28) 0%, transparent 50%),
            radial-gradient(circle at 30% 90%, rgba(6, 182, 212, 0.18) 0%, transparent 60%)
          `,
        }}
      />

      {/* HERO CONTENT */}

      <div className="relative space-y-6 z-10">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-none">
          Hi, I'm <span className="text-[#3B82F6]">Hrithik</span>
        </h1>

        {/* Vertical Blue Indicator Line */}
        <div className="inline-flex items-center text-[18px] text-purple-600/65 font-semibold tracking-tight min-w-[7ch]">
          {/* Animated Characters */}
          {displayedText.split("").map((char, index) => (
            <motion.span
              key={`${wordIndex}-${index}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="inline-block whitespace-pre"
            >
              {/* Fix: Normal space ko \u00A0 se replace kiya taaki space visible rahe */}
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {/* Blinking Cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block text-[#3B82F6] font-light ml-0.5 select-none"
          >
            |
          </motion.span>
        </div>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-2">
          I build clean, scalable web apps from frontend to backend. Focused on
          delivering premium digital experiences with modern web technologies.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center gap-4">
          {/* View Projects Button */}
          <a
            href="#projects"
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:from-[#2563EB] hover:to-[#1D4ED8] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <span>View Projects</span>
          </a>

          {/* Download Resume Button */}
          <a
            href="/Hrithik_Nonia_Resume.pdf"
            download="Hrithik_Nonia_Resume.pdf"
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-[#3B82F6]/70 bg-[#0F172A]/80 px-7 py-3.5 text-sm font-bold text-[#60A5FA] hover:bg-[#1E293B] hover:border-[#3B82F6] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
