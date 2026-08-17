import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Sparkles } from "lucide-react";

const SERVICES_DATA = [
  {
    id: "walking",
    title: "Dog Walking",
    image: "/ourServiceImage.png",
    tag: "Exercise & Play",
    description:
      "Our experienced dog walkers provide tailored walks for your furry friend, ensuring they get the daily exercise, socialization, and stimulation they need.",
    features: ["GPS Tracked Routes", "Hydration Included", "Custom Pace & Duration"],
  },
  {
    id: "checkup",
    title: "Health Checkups",
    image: "/HeroSectionImage.png",
    tag: "Preventive Medicine",
    description:
      "Comprehensive physical examinations, diagnostic screenings, and wellness plans to catch minor health concerns before they become serious problems.",
    features: ["Vitals & Organ Check", "Weight & Nutrition", "Doctor Consultation"],
  },
  {
    id: "grooming",
    title: "Pet Grooming & Spa",
    image: "/Step1Image.png",
    tag: "Hygiene & Comfort",
    description:
      "Gentle bath therapies with hypoallergenic organic shampoos, breed-specific hair styling, paw pad balm, and stress-free nail trimming.",
    features: ["Warm Water Bath", "Nail & Ear Care", "Coat Conditioning"],
  },
];

function OurServices({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/70 px-3.5 py-1 rounded-full border border-[#ebdcc9]">
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
        <div className="flex flex-col md:flex-row bg-white rounded-3xl max-w-4xl w-full h-auto md:h-[400px] shadow-sm overflow-hidden border border-[#ebdcc9]/60 transition-all duration-300">
          {/* Image side */}
          <div className="w-full md:w-1/2 h-64 md:h-full bg-stone-100 relative overflow-hidden flex items-center justify-center p-4">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover md:object-contain rounded-2xl transition-all duration-500"
            />
            <span className="absolute top-4 left-4 bg-[#27221F]/80 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
              {currentService.tag}
            </span>
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest">
                  Service 0{currentIndex + 1} / 0{SERVICES_DATA.length}
                </span>
              </div>
              <h3 className="text-[#27221F] font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase mb-3">
                {currentService.title}
              </h3>
              <p className="text-[#27221F]/80 font-medium text-sm sm:text-base leading-relaxed">
                {currentService.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 flex flex-wrap gap-2">
                {currentService.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs bg-[#f6efe4] text-[#27221F] font-semibold px-2.5 py-1 rounded-lg border border-[#ebdcc9]"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" /> Book This Service
              </button>
            </div>
          </div>
        </div>

        {/* Button and Navigation Section */}
        <div className="flex justify-between items-center w-full max-w-4xl mt-6 px-2">
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

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="w-11 h-11 flex justify-center items-center bg-white rounded-full shadow-sm text-stone-700 hover:bg-[#70A352] hover:text-white transition cursor-pointer border border-stone-200"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next service"
              className="w-11 h-11 flex justify-center items-center bg-white rounded-full shadow-sm text-stone-700 hover:bg-[#70A352] hover:text-white transition cursor-pointer border border-stone-200"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
