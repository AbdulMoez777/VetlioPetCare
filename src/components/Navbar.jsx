import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { useBooking } from "../context/BookingContext";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking, appointments } = useBooking();

  const activeBookingsCount = appointments.filter(
    (a) => a.status === "Confirmed"
  ).length;

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "SERVICES", to: "/services" },
    { label: "HOW IT WORKS", to: "/how-it-works" },
    {
      label: "MY BOOKINGS",
      to: "/my-appointments",
      badge: activeBookingsCount > 0 ? activeBookingsCount : null
    },
    { label: "CONTACT", to: "/contact" }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="w-full bg-[#f6efe4]/95 backdrop-blur-md sticky top-0 z-40 transition-all border-b border-[#ebdcc9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="w-32 sm:w-36 h-11 sm:h-13 flex justify-center items-center bg-white rounded-xl shadow-xs px-3 hover:shadow-md transition-all group border border-[#ebdcc9]/50"
          >
            <img
              className="max-h-7 sm:max-h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="/VetlioLogo.png"
              alt="Vetlio Pet Care Logo"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white rounded-full px-4 xl:px-6 py-2 font-semibold text-xs xl:text-sm text-[#27221F] shadow-xs border border-[#ebdcc9]/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer tracking-wider flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#70A352] text-white font-bold shadow-xs"
                      : "text-[#27221F]/80 hover:text-[#70A352] hover:bg-stone-50"
                  }`
                }
              >
                {link.label}
                {link.badge && (
                  <span className="bg-amber-400 text-[#27221F] text-[10px] font-black px-1.5 py-0.5 rounded-full leading-none shadow-2xs">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openBooking()}
              className="bg-[#70A352] hover:bg-[#5b8c3d] active:scale-95 text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openBooking()}
              className="bg-[#70A352] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              <Calendar className="w-3.5 h-3.5" /> Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white text-[#27221F] shadow-xs border border-stone-200 hover:bg-stone-50 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden backdrop-blur-xs transition-opacity duration-300"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#f6efe4] shadow-2xl p-6 flex flex-col justify-between border-l border-[#ebdcc9] animate-modal-in overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-5 border-b border-[#ebdcc9]">
                <img
                  className="h-7 w-auto object-contain"
                  src="/VetlioLogo.png"
                  alt="Vetlio Logo"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl bg-white text-stone-700 hover:bg-stone-100 transition shadow-2xs"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="mt-6 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-3.5 rounded-2xl font-bold text-sm tracking-wider uppercase transition shadow-2xs ${
                          isActive
                            ? "bg-[#70A352] text-white shadow-xs"
                            : "bg-white/80 hover:bg-white text-[#27221F] hover:text-[#70A352]"
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="bg-amber-400 text-[#27221F] text-xs font-black px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-6 border-t border-[#ebdcc9] space-y-3 mt-6">
              <button
                onClick={() => {
                  closeMobileMenu();
                  openBooking();
                }}
                className="w-full bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
