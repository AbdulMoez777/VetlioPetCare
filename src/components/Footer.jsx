import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

// Clean brand SVG icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

function Footer({ onOpenBooking }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer
        id="contact"
        className="bg-[#f6efe4] flex flex-col items-center justify-center pt-8 sm:pt-16"
      >
        {/* Schedule Appointment Banner */}
        <div className="w-full max-w-5xl px-4 sm:px-6 mb-16 md:mb-24">
          <div className="bg-[#27221F] flex flex-col md:flex-row items-center justify-between rounded-3xl p-6 sm:p-10 md:p-12 gap-8 shadow-xl">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
              <span className="text-xs font-bold text-[#A0DF6D] uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full mb-3">
                Ready to get started?
              </span>
              <h3 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] uppercase">
                Schedule your appointment today
              </h3>
              <p className="text-stone-300 text-sm mt-3 font-medium">
                Give your furry companion the personalized attention and veterinary excellence they deserve.
              </p>
              <button
                onClick={onOpenBooking}
                className="bg-[#6E9B49] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 mt-6 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Now
              </button>
            </div>

            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-72 overflow-hidden rounded-2xl">
              <img
                src="/AppointmentImage.png"
                alt="Vet examining pet with care"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Main Footer Green Section */}
        <div className="bg-[#6E9B49] w-full rounded-t-[32px] sm:rounded-t-[48px] pt-14 md:pt-20 pb-10 px-6 sm:px-12 md:px-20 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-10 md:gap-16">
            {/* Left Brand Area */}
            <div className="w-full md:w-5/12">
              <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-tighter leading-none mb-4">
                VETLIO
              </h1>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-sm">
                Gentle, modern, and compassionate veterinary healthcare for dogs, cats, and all cherished pets.
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/90 text-xs font-semibold bg-white/10 px-3.5 py-2 rounded-xl w-fit">
                <Clock className="w-4 h-4 text-[#f6efe4]" />
                Mon - Sat: 8:00 AM - 8:00 PM • Sun: Emergencies
              </div>
            </div>

            {/* Right Links & Contact Area */}
            <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {/* Quick Navigation Menu */}
              <div>
                <h4 className="text-white font-extrabold text-lg sm:text-xl mb-4 sm:mb-6 uppercase tracking-tight">
                  Menu
                </h4>
                <ul className="text-white space-y-3 text-sm font-medium">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleLinkClick(e, "#about")}
                      className="hover:text-[#f6efe4] hover:underline underline-offset-4 cursor-pointer transition-colors block"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => handleLinkClick(e, "#services")}
                      className="hover:text-[#f6efe4] hover:underline underline-offset-4 cursor-pointer transition-colors block"
                    >
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      onClick={(e) => handleLinkClick(e, "#how-it-works")}
                      className="hover:text-[#f6efe4] hover:underline underline-offset-4 cursor-pointer transition-colors block"
                    >
                      HOW IT WORKS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#values"
                      onClick={(e) => handleLinkClick(e, "#values")}
                      className="hover:text-[#f6efe4] hover:underline underline-offset-4 cursor-pointer transition-colors block"
                    >
                      OUR VALUES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleLinkClick(e, "#contact")}
                      className="hover:text-[#f6efe4] hover:underline underline-offset-4 cursor-pointer transition-colors block"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info Column */}
              <div>
                <h4 className="text-white font-extrabold text-lg sm:text-xl mb-4 sm:mb-6 uppercase tracking-tight">
                  Contact Info
                </h4>
                <ul className="text-white space-y-3.5 text-sm font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>648-423-2785</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="uppercase">CONTACT@VETLIO.COM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>
                      Lahore, Punjab, Pakistan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-4 mt-12 pt-8 border-t border-white/20 w-full max-w-5xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] hover:border-white transition-all shadow-2xs"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] hover:border-white transition-all shadow-2xs"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] hover:border-white transition-all shadow-2xs"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] hover:border-white transition-all shadow-2xs"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>

          <div className="mt-6 text-center text-white/70 text-xs font-medium">
            © {new Date().getFullYear()} Vetlio Pet Care. All rights reserved. Compassionate Care for Every Pet.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
