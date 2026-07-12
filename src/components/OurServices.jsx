import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function OurServices() {
  return (
    <>
      <section className="bg-[#f6efe4] py-16 flex flex-col px-4 items-center">
        {/* Header Section */}
        <h2 className="font-extrabold text-[#27221F] tracking-tight text-6xl mb-13">
          OUR SERVICES
        </h2>

        {/* Service Card Container  */}
        <div className="flex bg-white rounded-3xl max-w-[768px] h-[360px] shadow-sm overflow-hidden">
          <div className="w-1/2 h-full">
            <img
              src="/ourServiceImage.png"
              alt="Our Services"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center px-[66px] leading-[20px] text-left">
            <h3 className="text-[#27221F] font-extrabold text-4xl tracking-tight uppercase mb-2">
              Dog Walking
            </h3>
            <p className="text-[#27221F] font-medium  leading-relaxed">
              Our experienced dog walkers provide tailored walks for your furry
              friend, ensuring they get the exercise and stimulation they need.
            </p>
          </div>
        </div>

        {/* Button and Navigation Section  */}
        <div className="flex  justify-between items-center w-full max-w-[768px] mt-6">
          <button className="bg-white text-[#27221F] font-extrabold text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-sm hover:bg-gray-50 transition">
            See All Services
          </button>

          <div className="flex  gap-2">
            <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-sm text-lg hover:bg-gray-50 transition">
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-sm text-lg hover:bg-gray-50 transition">
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
