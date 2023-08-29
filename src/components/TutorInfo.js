import React from "react";
import { Link } from "react-router-dom";

export default function TutorInfo() {
  return (
    <div className="flex-start w-[324px] h-[322px] bg-white p-4 ">
      <div className="flex flex-col justify-center items-center">
        <img
          className="rounded-[50%] w-[78px] h-[78px] object-cover mb-4"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <h2 className="text-3xl leading-[170%] font-semibold mb-2">Name</h2>
        <div className="leading-[170%] text-gray-color mb-2">
          <span>skill level:</span>
          <span className="text-black-100"> Medium</span>
        </div>

        <div className="flex flex-row mb-2">
          <img className="w-[72px] h-3 my-1 " alt="" src="/group-1.svg" />
          <div className="opacity-[0.5] mx-4  ">4.5</div>
        </div>
        <div className="mt-5">
          <Link to="demorequest">
            <button className=" rounded-11xl box-border w-[126px] h-8 cursor-pointer border-[1px] border-solid border-primary-color mb-2 bg-white text-blue-800">
              Request a demo
            </button>
          </Link>
          <Link to="Profile">
            <button className="rounded-11xl bg-primary-color box-border cursor-pointer w-[126px] h-8 border-[1px] border-solid border-primary-color mb-2 text-white mx-2.5">
              Hire
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="rounded-[50%] bg-mediumseagreen box-border w-3 border-[1px] border-solid border-whitesmoke" /> */}
    </div>
  );
}
