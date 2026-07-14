import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-[#f6efe4] flex flex-col items-center justify-center">
        <div className="bg-[#27221F] flex max-w-[1000px] w-full rounded-[20px] p-10 gap-10 mb-30 ">
          <div className="w-1/2 flex flex-col items-start justify-center ">
            <h3 className="text-[#FFFFFF] font-extrabold text-5xl tracking-tight leading-[0.9] uppercase">
              Schedule your appointment today
            </h3>
            <button className="bg-[#6E9B49] text-white font-bold px-12 py-3 mt-6 rounded-lg shadow-sm hover:bg-[#5f8d43] transition-colors">
              Book Now
            </button>
          </div>

          <div className="w-1/2 ">
            <img
              src="/AppointmentImage.png"
              alt="Appointment Image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#6E9B49]  w-full rounded-t-[40px] pt-20 pb-10 px-10 md:px-20 flex flex-col items-center">
          <div className="flex justify-between w-full max-w-[1000px]">
            {/* left Logo Text  */}
            <div className="w-1/2">
              <h1 className="text-white font-extrabold text-7xl md:text-[90px] uppercase tracking-tighter leading-none ">
                VETLIO
              </h1>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex gap-20">
              {/* Menu Column */}
              <div>
                <h4 className="text-white font-extrabold text-xl mb-6 uppercase tracking-tight">
                  Menu
                </h4>
                <ul className="text-white space-y-4 text-sm font-medium">
                  <li className="hover:text-[#f6efe4] cursor-pointer transition-colors">
                    ABOUT US
                  </li>
                  <li className="hover:text-[#f6efe4] cursor-pointer transition-colors">
                    SERVICES
                  </li>
                  <li className="hover:text-[#f6efe4] cursor-pointer transition-colors">
                    CONTACT
                  </li>
                  <li className="hover:text-[#f6efe4] cursor-pointer transition-colors">
                    TEAM
                  </li>
                  <li className="hover:text-[#f6efe4] cursor-pointer transition-colors">
                    BLOG
                  </li>
                </ul>
              </div>

              {/* Contact Info Column */}
              <div>
                <h4 className="text-white font-extrabold text-xl mb-6 uppercase tracking-tight">
                  Contact Info
                </h4>
                <ul className="text-white space-y-4 text-sm font-medium">
                  <li>648-423-2785.</li>
                  <li className="uppercase">CONTACT@VETLIO.COM</li>
                  <li className="leading-relaxed">
                    Lahore, Punjab,
                    <br />
                    Pakistan
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom Social Icons Row */}
          <div className="flex justify-center gap-4 mt-20">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] transition-colors">
              f
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] transition-colors">
              ig
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#6E9B49] transition-colors">
              tk
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
