// built in imports
import { useState } from "react";
import { Menu, X } from "lucide-react";

// custom imports
import { NavItems } from "../constants/Constants";

export default function Navbar({ activeSection = "About" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed  top-0 z-50 w-full border-b border-blue-900/40 backdrop-blur-md bg-black/10 ">
      <div className="px-10 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Left Brand Logo */}
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition-colors"
          >
            Hrithik
          </a>

          {/* Right Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === item.name
                    ? "text-blue-400 font-bold"
                    : "text-slate-200 hover:text-blue-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-blue-900/40 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-3">
            {NavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-blue-400 py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
