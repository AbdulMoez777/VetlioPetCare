import React from "react";
import { Link } from "react-router-dom";
import { Dog, Home, Search } from "lucide-react";

function NotFound() {
  return (
    <div className="bg-[#f6efe4] min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#ebdcc9] shadow-sm">
        {/* Playful Icon */}
        <div className="w-20 h-20 rounded-full bg-[#70A352]/20 text-[#70A352] flex items-center justify-center mx-auto mb-6">
          <Dog className="w-10 h-10" />
        </div>

        <span className="text-xs font-black text-[#70A352] uppercase tracking-widest bg-[#f6efe4] px-3.5 py-1 rounded-full border border-[#ebdcc9] inline-block mb-3">
          Error 404 • Lost in the Yard
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#27221F] uppercase tracking-tight mb-3">
          This Page Took a Walk
        </h1>

        <p className="text-stone-600 text-sm sm:text-base font-medium leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto bg-[#70A352] hover:bg-[#5b8c3d] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-[#27221F] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
