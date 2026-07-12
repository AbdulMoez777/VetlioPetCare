import React from "react";

function HowItWorks() {
  return (
    <>
      <section className="bg-[#f6efe4] py-32 px-60 max-w-7xl flex gap-16 items-start mx-auto">
        {/* Left Column  */}
        <div className="w-5/12 sticky top-32">
          <h2 className="text-[#27221F] text-6xl font-extrabold tracking-tighter uppercase mb-6 leading-[0.9] ">
            How It Works?
          </h2>

          <p className="text-gray-700 font-medium text-lg leading-relaxed ">
            At Vetlio, we make it easy for you to provide the best care for your
            furry friends. Our process is simple and tailored to meet your
            unique needs.
          </p>
        </div>

        {/* Right Column  */}
        <div className="w-7/12 flex flex-col gap-24 pb-32">
          {/* Card 1  */}
          <div className="sticky top-24 bg-white rounded-[32px] shadow-sm flex flex-col overflow-hidden h-[450px] border border-gray-100">
            <div className="p-12 h-1/2 flex flex-col justify-center">
              <span className="text-[#8FB3FC] font-extrabold text-sm tracking-widest uppercase block mb-2">
                Step 01
              </span>
              <h3 className="text-5xl font-extrabold text-[#27221F] uppercase tracking-tighter mb-4 leading-none">
                Fill Out
                <br />
                The Form
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Provide your information and your pet care needs.
              </p>
            </div>

            <div className="bg-[#8FB3F7] h-1/2 flex items-center justify-center">
              <img src="/Step1Image.png" alt="Step 1 Card" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky top-32 bg-white rounded-[32px] shadow-sm flex flex-col overflow-hidden h-[450px] border border-gray-100">
            <div className="p-12 h-1/2 flex flex-col justify-center">
              <span className="text-[#FDBD10] font-extrabold text-sm tracking-widest uppercase mb-2">
                Step 02
              </span>
              <h3 className="text-5xl font-extrabold text-[#27221F] uppercase tracking-tighter mb-4 leading-none">
                Get Matched
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Based on your profile, we'll connect you with nearby members.
              </p>
            </div>
            <div className="bg-[#FDBD10] h-1/2 flex items-center justify-center">
              <img
                src="/Step2Image.png"
                alt="Phone match illustration"
                className="h-full object-contain p-6"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky top-40 bg-white rounded-[32px] shadow-sm flex flex-col overflow-hidden h-[450px] border border-gray-100">
            <div className="p-12 h-1/2 flex flex-col justify-center">
              <span className="text-[#6BA34B] font-extrabold text-sm tracking-widest uppercase mb-2">
                Step 03
              </span>
              <h3 className="text-5xl font-extrabold text-[#27221F] uppercase tracking-tighter mb-4 leading-[0.9]">
                Receive Top-
                <br />
                Tier Service
              </h3>
              <p className="text-sm font-medium text-gray-600 max-w-sm">
                Prioritizing safety and satisfaction, we encourage members to
                build strong connections before entrusting their dog.
              </p>
            </div>
            <div className="bg-[#6BA34B] h-1/2 flex items-center justify-center">
              <img
                src="/Step3Image.png"
                alt="Step 3 Card"
                className="h-full object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
