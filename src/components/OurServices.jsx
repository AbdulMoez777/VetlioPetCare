import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../data/servicesData";
import { useBooking } from "../context/BookingContext";

function OurServices({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openBooking } = useBooking();
  const handleOpen = onOpenBooking || openBooking;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? SERVICES_DATA.length - 1 : prev - 1
    );
  };

  const currentService = SERVICES_DATA[currentIndex];

  return (
    <>
      <section
        id="services"
        className="bg-[#f6efe4] py-16 md:py-24 flex flex-col px-4 sm:px-6 lg:px-8 items-center"
      >
        {/* Header Section */}
        <div className="text-center max-w-2xl mb-10 md:mb-14">
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full border border-[#ebdcc9]">
            Comprehensive Pet Wellness
          </span>
          <h2 className="font-extrabold text-[#27221F] tracking-tight text-4xl sm:text-5xl md:text-6xl mt-4 uppercase">
            OUR SERVICES
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Tailored veterinary and wellness solutions designed to keep your pets happy, healthy, and thriving.
          </p>
        </div>

        {/* Service Card Container */}
        <div className="flex flex-col md:flex-row bg-white rounded-3xl max-w-4xl w-full h-auto md:min-h-[420px] shadow-sm overflow-hidden border border-[#ebdcc9]/60 transition-all duration-300">
          {/* Image side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 relative overflow-hidden flex items-center justify-center p-4">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover md:object-contain rounded-2xl transition-all duration-500"
            />
            <span className="absolute top-4 left-4 bg-[#27221F]/80 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
              {currentService.tag}
            </span>
            <span className="absolute bottom-4 right-4 bg-white/90 text-[#27221F] font-extrabold text-sm px-3 py-1 rounded-xl shadow-xs border border-stone-200">
              {currentService.price}
            </span>
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-10 text-left">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest">
                  Service 0{currentIndex + 1} / 0{SERVICES_DATA.length}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  ⏳ {currentService.duration}
                </span>
              </div>
              <h3 className="text-[#27221F] font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mb-3">
                {currentService.title}
              </h3>
              <p className="text-[#27221F]/80 font-medium text-sm leading-relaxed line-clamp-3">
                {currentService.shortDesc || currentService.fullDesc}
              </p>

              {/* Highlights */}
              <div className="mt-4 flex flex-wrap gap-2">
                {currentService.features.slice(0, 3).map((feat) => (
                  <span
                    key={feat}
                    className="text-xs bg-[#f6efe4] text-[#27221F] font-semibold px-2.5 py-1 rounded-lg border border-[#ebdcc9]"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleOpen(currentService.id)}
                className="bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" /> Book This Service
              </button>
              <Link
                to={`/services/${currentService.id}`}
                className="text-[#27221F] hover:text-[#70A352] font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                Full Details <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation & Explore All Link */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl mt-6 px-2 gap-4">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {SERVICES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to service ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#70A352]"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#70A352] hover:underline underline-offset-4"
            >
              Browse All {SERVICES_DATA.length} Services &rarr;
            </Link>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous service"
                className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-sm text-stone-700 hover:bg-[#70A352] hover:text-white transition cursor-pointer border border-stone-200"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next service"
                className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-sm text-stone-700 hover:bg-[#70A352] hover:text-white transition cursor-pointer border border-stone-200"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
