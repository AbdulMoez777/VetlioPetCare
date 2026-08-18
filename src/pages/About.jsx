import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  Calendar,
  Building2,
  Microscope
} from "lucide-react";
import { VETS_DATA, CLINIC_STATS } from "../data/vetsData";
import { useBooking } from "../context/BookingContext";

function About() {
  const { openBooking } = useBooking();

  const facilities = [
    {
      title: "Fear-Free Low-Stress Suites",
      desc: "Sound-dampened exam rooms, soothing pheromone diffusers, and warm non-slip mats so your pet never feels anxious on the examination table.",
      icon: Heart,
      color: "#6E9B49"
    },
    {
      title: "State-of-the-Art Surgical Theatre",
      desc: "Equipped with positive-pressure HEPA air filtration, multi-parameter anesthetic monitors, heated surgical surfaces, and precision digital monitoring.",
      icon: Microscope,
      color: "#8FB3FC"
    },
    {
      title: "Separate Dog & Cat Wards",
      desc: "Cats and dogs have distinct sensory needs. Our dedicated quiet feline wing keeps curious pups and purring felines peacefully segregated.",
      icon: Building2,
      color: "#FB7E46"
    },
    {
      title: "On-Site High-Resolution Digital Lab",
      desc: "Complete in-house blood chemistry, digital digital radiography (X-ray), and ultrasonography for results in minutes rather than days.",
      icon: Stethoscope,
      color: "#A0DF6D"
    }
  ];

  return (
    <div className="bg-[#f6efe4] min-h-screen">
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-4 py-1.5 rounded-full border border-[#ebdcc9] inline-block mb-4 shadow-2xs">
          About Vetlio Pet Care
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#27221F] uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          Compassionate Care Rooted in Modern Science
        </h1>
        <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
          Founded on the belief that veterinary visits should be comforting rather than stressful, we blend clinical excellence with warmth and empathy.
        </p>
      </section>

      {/* 2. Story Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#ebdcc9] shadow-sm flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight mt-2 mb-6">
              Redefining the Animal Hospital Experience
            </h2>
            <div className="space-y-4 text-stone-700 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                In 2012, Dr. Sarah Jenkins observed a troubling trend: pet parents often dreaded clinic visits because their pets experienced intense sensory fear and anxiety. Vetlio was born to completely transform that dynamic.
              </p>
              <p>
                We re-engineered every touchpoint — from quiet reception zones with natural lighting to certified Fear-Free gentle handling techniques and unhurried consultations where pet parents are heard.
              </p>
              <p>
                Today, our team of board-certified veterinary clinicians, licensed nurses, and pet behaviorists serves thousands of beloved canine, feline, and exotic companions across the metropolitan region.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-100">
              {CLINIC_STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#70A352]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-stone-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <img
                src="/AppointmentImage.png"
                alt="Vetlio veterinarians in clinic"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6E9B49] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-[#27221F] uppercase">
                      100% Fear-Free Hospital
                    </h5>
                    <p className="text-[11px] text-stone-500">
                      Standardized low-stress animal handling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full border border-[#ebdcc9] inline-block mb-3">
            Our Facility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight">
            Designed for Comfort & Medical Precision
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Explore the specialized spaces built from the ground up for our furry patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.title}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ebdcc9] shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${fac.color}25`, color: fac.color }}
                  >
                    <Icon className="w-6 h-6" style={{ color: fac.color }} />
                  </div>
                  <h3 className="font-extrabold text-xl text-[#27221F] uppercase tracking-tight">
                    {fac.title}
                  </h3>
                </div>
                <p className="text-stone-600 text-sm sm:text-base font-medium leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Meet the Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full border border-[#ebdcc9] inline-block mb-3">
            Medical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27221F] uppercase tracking-tight">
            Meet Our Veterinary Doctors
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Passionate clinical professionals devoted to your pet's lifelong health and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VETS_DATA.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-3xl border border-[#ebdcc9] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="h-56 bg-stone-100 relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#27221F]/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                  {vet.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#27221F] tracking-tight">
                    {vet.name}
                  </h3>
                  <p className="text-xs font-bold text-[#70A352] mt-0.5">
                    {vet.title}
                  </p>
                  <p className="text-xs text-stone-500 font-semibold mt-1">
                    🎯 {vet.specialty}
                  </p>
                  <p className="text-xs text-stone-600 font-medium leading-relaxed mt-3 line-clamp-3">
                    {vet.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-500">
                    {vet.experience}
                  </span>
                  <button
                    onClick={() => openBooking()}
                    className="text-xs font-bold text-[#70A352] hover:underline uppercase tracking-wider cursor-pointer"
                  >
                    Book with Vet &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-white border-t border-[#ebdcc9] py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight">
            Experience the Vetlio Difference
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium mt-3 mb-6">
            Join thousands of happy pet parents who trust our licensed veterinary doctors and modern facilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
            <Link
              to="/services"
              className="bg-[#f6efe4] hover:bg-stone-200 text-[#27221F] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition border border-[#ebdcc9]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
