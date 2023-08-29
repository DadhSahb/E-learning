import React from "react";

const Navbar = () => {
  return (
    <header className="z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 ">
      <nav
        aria-label="GLOBAL"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white w-full overflow-hidden text-left text-xs text-black-100 font-sora flex justify-between items-center">
          <div className="top-[20px] md:top-[29px] left-[20px] md:left-[49px] text-[20px] md:text-[31.93px] leading-[170%] font-extrabold text-primary-color">
            DEMO
          </div>
          <div className="flex items-center space-x-4 py-2">
            <button className="cursor-pointer top-[20px] md:top-[29px] rounded-[57px] bg-primary-color py-2.5 px-[18px] md:px-[26px] text-base text-white leading-[150%]">
              Upgrade
            </button>
            <img
              className="top-[20px] md:top-[28px] left-[10px] md:left-[20px] rounded-[50%] w-8 h-8 md:w-12 md:h-12 object-cover"
              alt=""
              src="/ellipse-31@2x.png"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
