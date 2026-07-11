import React from "react";

function HeroSection() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#f6efe4] pt-14 pb-16 px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mb-[140px]">
          <h1 className="text-[#1E1E1E] font-extrabold text-7xl leading-[1.05] tracking-tighter uppercase ">
            Care That Feels Like <br />
            Home for Your Pets
          </h1>

          <p className="text-[#27221F] w-[450px] text-[15px] mt-13 font-medium  leading-relaxed">
            We provide gentle, personalized veterinary care in a calm and
            welcoming environment so your pets feel safe, comfortable, and truly
            cared for.
          </p>
        </div>

        <div className="w-[500px]">
          <img
            src="/HeroSectionImage.png"
            alt="HeroImage"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
