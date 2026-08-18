import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { SERVICES_DATA } from "../data/servicesData";
import { useBooking } from "../context/BookingContext";

function Services() {
  const { openBooking } = useBooking();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "medical", label: "Medical & Preventive" },
    { id: "wellness", label: "Wellness & Activity" },
    { id: "grooming", label: "Spa & Grooming" },
    { id: "emergency", label: "Emergency & Urgent" },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tag.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-[#f6efe4] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold text-[#70A352] uppercase tracking-widest bg-white/80 px-4 py-1.5 rounded-full border border-[#ebdcc9] inline-block mb-3 shadow-2xs">
            Veterinary & Wellness Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#27221F] uppercase tracking-tight leading-tight">
            Our Services & Care Programs
          </h1>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg mt-3 font-medium">
            From routine checkups and mobile dog walking to specialized surgical diagnostics, explore all veterinary care solutions tailored for your furry family member.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#ebdcc9] shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#70A352] text-white shadow-xs"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services (e.g., dental, walking)..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-[#27221F] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#70A352] focus:bg-white"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#ebdcc9]">
            <p className="text-lg font-bold text-stone-700 mb-2">
              No services found matching "{searchTerm}"
            </p>
            <p className="text-sm text-stone-500 mb-4">
              Try searching for different keywords or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="bg-[#70A352] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#ebdcc9] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Image & Price Tag */}
                <div className="h-56 bg-stone-100 relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#27221F]/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                    {service.tag}
                  </span>
                  <span className="absolute top-4 right-4 bg-white/95 text-[#27221F] font-extrabold text-sm px-3 py-1 rounded-xl shadow-xs border border-stone-200">
                    {service.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-semibold mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Estimated {service.duration}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#27221F] uppercase tracking-tight mb-2 group-hover:text-[#70A352] transition-colors">
                      <Link to={`/services/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-stone-600 text-sm font-medium leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-6">
                      {service.features.slice(0, 3).map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-xs text-[#27221F] font-semibold"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#70A352] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openBooking(service.id)}
                      className="bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Book Now
                    </button>
                    <Link
                      to={`/services/${service.id}`}
                      className="text-stone-700 hover:text-[#70A352] font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#ebdcc9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#70A352]/20 text-[#70A352] flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl text-[#27221F] uppercase tracking-tight">
                Transparent & Fear-Free Guarantee
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-medium">
                No hidden clinic fees. Digital post-appointment health cards emailed instantly.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBooking()}
            className="bg-[#27221F] hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4" /> Book an Exam Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
