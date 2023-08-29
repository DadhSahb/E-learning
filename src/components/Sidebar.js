import React from "react";

export default function Sidebar() {
  const subjects = ["Math", "Science", "History", "English", "Art"];
  return (
    <div className="flex">
      <div className="w-[320px] bg-whitesmoke p-4 md:p-8 relative h-screen">
        <div className="text-base md:text-lg capitalize text-black-200">
          Filters
        </div>
        <div className="mb-2 md:mb-3 leading-[130%] capitalize text-black-200">
          Select Subject
        </div>
        <div className="mb-4 md:mb-5 text-gray-color">
          <select className="rounded-sm bg-white w-full h-[42px] border-[0.5px] border-solid border-gainsboro">
            <option value="">All subjects</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2 md:mb-3 leading-[130%] capitalize text-black-200">
          <label htmlFor="startDate">Preferred Start Date</label>
          <input
            id="startDate"
            type="text"
            className="block rounded-sm bg-white w-full h-[42px] border-[0.5px] border-solid border-gainsboro mt-1"
          />
        </div>
        <div className="mb-2 md:mb-3 leading-[130%] capitalize text-black-200">
          Skill Level
        </div>
        <div className="mb-1.5 md:mb-2.5 text-gray-color">
          <label htmlFor="low" className="flex items-center">
            <input id="low" type="checkbox" className="mr-1" />
            Low
          </label>
        </div>
        <div className="mb-1.5 md:mb-2.5 text-gray-color">
          <label htmlFor="medium" className="flex items-center">
            <input id="medium" type="checkbox" className="mr-1" />
            Medium
          </label>
        </div>
        <div className="mb-1.5 md:mb-2.5 text-gray-color">
          <label htmlFor="high" className="flex items-center">
            <input id="high" type="checkbox" className="mr-1" />
            High
          </label>
        </div>
        <div className="mb-1.5 md:mb-2.5 text-gray-color">
          <label htmlFor="expert" className="flex items-center">
            <input id="expert" type="checkbox" className="mr-1" />
            Expert
          </label>
        </div>
        {/* <div className="w-[1px] h-[1202px] border-r-[1px] border-solid border-lavender" />
      <div className="w-[323px] h-[1px] border-t-[1px] border-solid border-lavender" />
      <div className="w-[323px] h-[1px] border-t-[1px] border-solid border-lavender" /> */}

        {/* Boundary Lines
      <div className="top-[100.5px] left-[321.5px] box-border w-px h-[1202px] border-r-[1px] border-solid border-lavender" />
      <div className="top-[143.5px] left-[-0.5px] box-border w-[323px] h-px border-t-[1px] border-solid border-lavender" />
      <div className="top-[513.5px] left-[-0.5px] box-border w-[323px] h-px border-t-[1px] border-solid border-lavender" /> */}
      </div>
    </div>
  );
}
