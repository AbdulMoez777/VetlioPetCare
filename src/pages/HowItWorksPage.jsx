import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Heart,
  Smartphone,
  Stethoscope
} from "lucide-react";
import { FAQ_CATEGORIES } from "../data/faqData";
import { useBooking } from "../context/BookingContext";

function HowItWorksPage() {
  const { openBooking } = useBooking();
  const [openQuestionIndex, setOpenQuestionIndex] = useState("0-0");

  const steps = [
    {
      step: "01",
      title: "Schedule in Seconds",
      desc: "Select your desired service, date, time slot, and tell us about your pet's temperament, symptoms, or routine care requirements online.",
      icon: Smartphone,
      color: "#8FB3FC",
      image: "/Step1Image.png"
    },
    {
      step: "02",
      title: "Fear-Free Arrival",
      desc: "Arrive at our clinic where quiet cat & dog wings, soothing pheromones, and low-stress handlers greet your pet with warmth and zero rushing.",
      icon: Heart,
      color: "#FDBD10",
      image: "/Step2Image.png"
    },
    {
      step: "03",
      title: "Personalized Treatment",
      desc: "Our board-certified vets conduct unhurried examinations, preventive screenings, or gentle grooming using evidence-based standards.",
      icon: Stethoscope,
      color: "#6E9B49",
      image: "/Step3Image.png"
    },
    {
      step: "04",
      title: "Digital Health Passport",
      desc: "Receive digital consultation notes, immunization updates, and medication guidelines instantly on your pet parent portal.",
      icon: ShieldCheck,
      color: "#FB7E46",
      image: "/AppointmentImage.png"
    }
  ];

  const comparisons = [
    {
      feature: "Waiting Room Experience",
      traditional: "Noisy, crowded waiting rooms with barking dogs and stressed cats.",
      vetlio: "Dedicated quiet species zones, natural lighting, and zero wait delays."
    },
    {
      feature: "Animal Handling Philosophy",
      traditional: "Physical restraint and hurried examinations.",
      vetlio: "100% Fear-Free certified gentle handling and tasty organic treat rewards."
    },
    {
      feature: "Booking & Records",
      traditional: "Phone calls during business hours, paper vaccination cards.",
      vetlio: "24/7 instant online booking, automated SMS reminders, and digital health records."
    },
    {
      feature: "Pricing Transparency",
      traditional: "Unexpected hospital surcharges revealed at checkout.",
      vetlio: "Upfront transparent pricing with zero surprise add-ons."
    }
  ];

  const handleToggleQuestion = (id) => {
    setOpenQuestionIndex(openQuestionIndex === id ? null : id);
  };

  return (
    <div className="bg-[#f6efe4] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-4 py-1.5 rounded-full border border-[#ebdcc9] inline-block mb-3 shadow-2xs">
            Simple, Transparent, Compassionate
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#27221F] uppercase tracking-tight leading-tight">
            How Vetlio Works
          </h1>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg mt-3 font-medium">
            From the moment you book to aftercare at home, discover our low-stress four-step care journey designed for your pet's ultimate comfort.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 border border-[#ebdcc9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-widest text-white"
                      style={{ backgroundColor: s.color }}
                    >
                      Step {s.step}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${s.color}25`, color: s.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="h-36 rounded-2xl bg-stone-50 overflow-hidden flex items-center justify-center p-3 mb-4 border border-stone-100">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <h3 className="font-extrabold text-xl text-[#27221F] uppercase tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#ebdcc9] shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-[#f6efe4] px-3.5 py-1 rounded-full border border-[#ebdcc9] inline-block mb-2">
              Why We Are Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight">
              The Vetlio Difference
            </h2>
            <p className="text-stone-600 text-sm mt-2 font-medium">
              A side-by-side look at how our gentle philosophy contrasts with conventional clinics.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#ebdcc9] text-xs uppercase tracking-wider text-stone-500">
                  <th className="py-4 px-4 font-bold">Care Aspect</th>
                  <th className="py-4 px-4 font-bold text-stone-400">Traditional Vet Clinic</th>
                  <th className="py-4 px-4 font-extrabold text-[#70A352] bg-[#f6efe4]/50 rounded-t-xl">
                    Vetlio Experience
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                {comparisons.map((c, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-stone-100 hover:bg-stone-50/60 transition-colors"
                  >
                    <td className="py-4 px-4 font-extrabold text-[#27221F]">
                      {c.feature}
                    </td>
                    <td className="py-4 px-4 text-stone-500 font-medium">
                      ✕ {c.traditional}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#27221F] bg-[#f6efe4]/30">
                      ✓ {c.vetlio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global FAQs Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#ebdcc9] shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-[#f6efe4] px-3.5 py-1 rounded-full border border-[#ebdcc9] inline-block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-sm mt-2 font-medium">
              Everything you need to know about booking, insurance, emergency care, and records.
            </p>
          </div>

          <div className="space-y-8">
            {FAQ_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.category} className="space-y-3">
                <h3 className="font-extrabold text-lg text-[#27221F] uppercase tracking-tight border-b border-stone-100 pb-2">
                  {cat.category}
                </h3>
                <div className="space-y-2.5">
                  {cat.items.map((item, qIdx) => {
                    const qId = `${catIdx}-${qIdx}`;
                    const isOpen = openQuestionIndex === qId;
                    return (
                      <div
                        key={qIdx}
                        className="border border-stone-200 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => handleToggleQuestion(qId)}
                          className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#27221F] flex items-center justify-between gap-4 bg-stone-50/50 hover:bg-stone-50 transition cursor-pointer"
                        >
                          <span>{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#70A352] shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 sm:p-5 bg-white text-sm font-medium text-stone-700 leading-relaxed border-t border-stone-100">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#27221F] text-white rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-3">
            Ready to Give Your Pet the Care They Deserve?
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mb-6">
            Book an appointment online in less than 2 minutes. Same-day wellness exams and emergency triage available.
          </p>
          <button
            onClick={() => openBooking()}
            className="bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition cursor-pointer"
          >
            Schedule Your Visit Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
