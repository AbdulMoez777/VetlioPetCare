import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import ScrollToTop from "../components/layout/ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6efe4] text-[#27221F] font-sans antialiased selection:bg-[#70A352] selection:text-white">
      {/* Scroll restoration on route navigation */}
      <ScrollToTop />

      {/* Global Top Navigation Bar */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer & Emergency CTAs */}
      <Footer />

      {/* Global Interactive Booking Wizard Modal */}
      <BookingModal />
    </div>
  );
}

export default MainLayout;
