import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import HowItWorks from "./components/HowItWorks";
import OurValuesSection from "./components/OurValuesSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6efe4] text-[#27221F] font-sans antialiased selection:bg-[#70A352] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <OurServices onOpenBooking={handleOpenBooking} />
        <HowItWorks />
        <OurValuesSection />
      </main>

      {/* Footer with Schedule Appointment CTA */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Multi-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}

export default App;