import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { useBooking } from "../context/BookingContext";

function HeroSection({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleOpen = onOpenBooking || openBooking;

  return (
    <>
      <section
        id="hero"
        className="flex flex-col justify-center items-center bg-[#f6efe4] pt-8 md:pt-14 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mb-10 md:mb-16">
          {/* Pet Care Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#ebdcc9] rounded-full px-4 py-1.5 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#70A352] animate-pulse"></span>
            <span className="text-xs font-bold text-[#27221F] tracking-wider uppercase">
              Top-Rated Veterinary & Pet Wellness
            </span>
          </div>

          <h1 className="text-[#1E1E1E] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-tighter uppercase">
            Care That Feels Like <br className="hidden sm:inline" />
            Home for Your Pets
          </h1>

          <p className="text-[#27221F]/80 max-w-xl text-sm sm:text-base md:text-lg mt-6 sm:mt-8 font-medium leading-relaxed">
            We provide gentle, personalized veterinary care in a calm and
            welcoming environment so your pets feel safe, comfortable, and truly
            cared for.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleOpen()}
              className="bg-[#70A352] hover:bg-[#5b8c3d] text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
            <Link
              to="/services"
              className="bg-white hover:bg-stone-50 text-[#27221F] border border-stone-300 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl flex justify-center px-4">
          <img
            src="/HeroSectionImage.png"
            alt="Happy dog and caring veterinarian"
            className="w-full h-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
