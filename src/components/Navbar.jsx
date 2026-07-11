import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center h-[110px] px-30 bg-[#f6efe4]">
        <div className="w-36 h-15 flex justify-center items-center bg-white rounded-xl ">
          <img
            className="object-cover"
            src="\public\VetlioLogo.png"
            alt="logo"
          />
        </div>

        <ul className="flex items-center gap-6 bg-white rounded-lg px-[40px] py-[18px] font-medium">
          <li className="cursor-pointer hover:text-green-700 transition">ABOUT US</li>
          <li className="cursor-pointer hover:text-green-700 transition">SERVICES</li>
          <li className="cursor-pointer hover:text-green-700 transition">CONTACT</li>
          <li className="cursor-pointer hover:text-green-700 transition">TEAM</li>
          <li className="cursor-pointer hover:text-green-700 transition">BLOG</li>
        </ul>

        <button className="bg-[#70A352] hover:bg-[#5b943b] text-white px-5 py-2.5 rounded-lg font-medium cursor-pointer ">Book now</button>
      </nav>
    </>
  );
}

export default Navbar;
