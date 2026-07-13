import React from "react";

function OurValuesSection() {
  return (
    <>
      <section className="bg-[#f6efe4] flex flex-col items-center py-16 px-40  ">
        <div>
          <h2 className="font-extrabold text-[#27221F] tracking-tighter text-6xl mb-25 uppercase text-center">
            Our values
          </h2>
        </div>

        {/* Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl w-full ">
          {/* Column 1 */}
          {/* Item1 */}
          <div className="max-w-sm">
            <h3 className="text-[#A0DF6D] font-extrabold text-2xl tracking-tighter uppercase mb-3">
              Compassion
            </h3>
            <p className="text-[#27221F] leading-relaxed">
              We treat every pet with kindness and empathy, ensuring they feel
              safe and comforted.
            </p>
          </div>

          {/* Item2  */}
          <div className="max-w-sm">
            <h3 className="text-[#FB7E46] font-extrabold text-2xl tracking-tighter uppercase mb-2">
              Personalized Care
            </h3>
            <p className="text-[#27221F] leading-relaxed">
              Each pet receives tailored treatments based on their unique needs
              and health condition.
            </p>
          </div>

          {/* Column 2 */}
          {/* Item3  */}
          <div className="max-w-sm">
            <h3 className="text-[#FEBF03] font-extrabold text-2xl tracking-tighter uppercase mb-2">
              Trusted Expertise
            </h3>
            <p className="text-[#27221F] leading-relaxed">
              Our skilled team delivers reliable veterinary care using moder and
              proven medical practices.
            </p>
          </div>

          {/* Item4  */}
          <div className="max-w-sm">
            <h3 className="text-[#8FB3F7] font-extrabold text-2xl tracking-tighter uppercase mb-2">
              Commitment to Wellbeing
            </h3>
            <p className="text-[#27221F] leading-relaxed">
              We focus on long-term health through preventive car and support
              for pet owners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurValuesSection;
