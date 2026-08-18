import React, { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

const INITIAL_APPOINTMENTS = [
  {
    id: "VET-92814",
    serviceId: "checkup",
    serviceTitle: "General Health Checkup",
    doctorName: "Dr. Sarah Jenkins",
    petName: "Milo",
    petType: "dog",
    petBreed: "Golden Retriever",
    petAge: "3 years",
    ownerName: "Alex Turner",
    ownerEmail: "alex.turner@example.com",
    ownerPhone: "+1 (555) 234-5678",
    date: "2026-08-25",
    time: "10:15 AM",
    status: "Confirmed",
    createdAt: new Date().toISOString(),
    notes: "Annual wellness checkup and booster vaccines."
  }
];

export function BookingProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "success", isVisible: false });

  // Load stored appointments or fallback to demo appointment
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem("vetlio_appointments");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load appointments from localStorage", e);
    }
    return INITIAL_APPOINTMENTS;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("vetlio_appointments", JSON.stringify(appointments));
    } catch (e) {
      console.error("Failed to save appointments to localStorage", e);
    }
  }, [appointments]);

  const showToast = (message, type = "success") => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  const openBooking = (serviceId = null) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(null);
  };

  const addAppointment = (data) => {
    const randomCode = "VET-" + Math.floor(10000 + Math.random() * 90000);
    const newAppointment = {
      id: randomCode,
      ...data,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    setAppointments((prev) => [newAppointment, ...prev]);
    showToast(`Appointment booked successfully! Ref: ${randomCode}`, "success");
    return newAppointment;
  };

  const cancelAppointment = (appointmentId) => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === appointmentId ? { ...app, status: "Cancelled" } : app
      )
    );
    showToast(`Appointment ${appointmentId} has been cancelled.`, "info");
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        preselectedServiceId,
        openBooking,
        closeBooking,
        appointments,
        addAppointment,
        cancelAppointment,
        toast,
        showToast
      }}
    >
      {children}
      {/* Global Toast Notification */}
      {toast.isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-modal-in">
          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-bold tracking-wide ${
              toast.type === "success"
                ? "bg-[#27221F] text-white border-[#70A352]"
                : toast.type === "info"
                ? "bg-[#27221F] text-stone-200 border-sky-400"
                : "bg-red-950 text-white border-red-500"
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                toast.type === "success"
                  ? "bg-[#70A352] animate-pulse"
                  : toast.type === "info"
                  ? "bg-sky-400"
                  : "bg-red-400"
              }`}
            />
            {toast.message}
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

// oxlint-disable-next-line react/only-export-components
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
