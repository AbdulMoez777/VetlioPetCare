import React, { useState } from "react";
import { Menu, X, Calendar, Phone, Heart } from "lucide-react";

function Navbar({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "VALUES", href: "#values" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="w-full bg-[#f6efe4] sticky top-0 z-40 transition-all border-b border-[#ebdcc9]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "#about")}
            className="w-32 sm:w-36 h-12 sm:h-14 flex justify-center items-center bg-white rounded-xl shadow-xs px-3 hover:shadow-md transition-shadow"
          >
            <img
              className="max-h-8 w-auto object-contain"
              src="/VetlioLogo.png"
              alt="Vetlio Pet Care Logo"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white rounded-full px-6 lg:px-10 py-3 font-semibold text-xs lg:text-sm text-[#27221F] shadow-xs border border-[#ebdcc9]/40">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#70A352] transition-colors cursor-pointer tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#70A352] hover:bg-[#5b8c3d] active:scale-95 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#70A352] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" /> Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white text-[#27221F] shadow-xs border border-stone-200 hover:bg-stone-50 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#f6efe4] shadow-2xl p-6 flex flex-col justify-between border-l border-[#ebdcc9] animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-6 border-b border-[#ebdcc9]">
                <img
                  className="h-8 w-auto object-contain"
                  src="/VetlioLogo.png"
                  alt="Vetlio Logo"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white text-stone-700 hover:bg-stone-100 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="mt-8 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block p-3 rounded-xl bg-white/70 hover:bg-white text-[#27221F] font-bold text-sm tracking-wider uppercase transition shadow-2xs hover:text-[#70A352]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-6 border-t border-[#ebdcc9] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold py-3.5 px-4 rounded-xl text-center text-sm uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
              <div className="text-center text-xs text-stone-600 font-medium">
                Emergency & Same-Day slots available
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
