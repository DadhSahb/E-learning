import React from "react";
import Navbar from "../components/Navbar";
import img from "./../rectangle-932@2x.png";

export default function DemoRequesttFeilds() {
  return (
    <>
      <Navbar />
      <div className="ml-[187px] mt-[32px]">
        <div className="">
          <div className="overlap-group ">
            <div className="text-wrapper text-primary text-2xl font-semibold mt-2">
              <h3 className="text-purple-800 font-semibold text-3xl mt-2">
                Create a Demo Request:
              </h3>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <div className="text-wrapper">
                    <h4 className="text-primary text-purple-800 font-semibold">
                      Tutor Info
                    </h4>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <img
                        className="img h-32 w-32"
                        alt="Rectangle"
                        src={img}
                      />
                      <div className="ml-4">
                        <div className="text-wrapperr text-black text-base font-normal">
                          <p>Anna Doe</p>
                        </div>
                        <div className="text-wrapperr text-black text-base font-normal">
                          <p>Expertise: BCS</p>
                        </div>
                        <div className="text-wrapperr text-black text-base font-normal">
                          <p>Location: Canada</p>
                        </div>
                        <div className="flex flex-row mb-2">
                          <img
                            className="w-[72px] h-3 my-1 "
                            alt=""
                            src="/group-1.svg"
                          />
                          <div className="opacity-[0.5] mx-4  ">4.5</div>
                        </div>
                        <div className="text-wrapperr text-black text-base font-normal">
                          <p>$15/h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l border-gray-300 h-full"></div>
                <div className="w-1/2">
                  <h4 className="text-primary text-purple-800 font-semibold">
                    Info
                  </h4>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="text-wrapperr text-black text-base font-normal">
                        <p>Name:</p>
                      </div>
                      <div className="text-wrapperr text-black text-base font-normal ml-2">
                        <p>John Doe</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="text-wrapperr text-black text-base font-normal">
                        <p>UserName:</p>
                      </div>
                      <div className="text-wrapper text-black text-base font-normal ml-2">
                        <p>JDoe234</p>
                      </div>
                    </div>
                    <div></div>
                    <div className="flex flex-row">
                      <div className="text-wrapperr text-black text-base font-normal">
                        <p>Location:</p>
                      </div>
                      <div className="text-wrapperr text-black text-base font-normal ml-2">
                        <p>UK</p>
                      </div>
                    </div>
                    <p className="text-wrapperr text-black text-base font-normal">
                      30 min
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-wrapper text-primary">
              <h3 className="text-primary text-purple-800 font-semibold">
                {" "}
                Other details:
              </h3>
              <div className="flex flex-wrap ">
                <div className="w-full md:w-1/2">
                  <div className="bg-white border border-gray-300 h-50 p-2">
                    <label htmlFor="subject">Enter Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="block rounded-sm bg-white w-[86%] h-[42px] border-[0.5px] border-solid border-gainsboro mt-1"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white border border-gray-300 h-50 p-2">
                    <label htmlFor="grade">Grade / Class</label>
                    <input
                      id="grade"
                      type="text"
                      className="block rounded-sm bg-white w-[86%] h-[42px] border-[0.5px] border-solid border-gainsboro mt-1"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white border border-gray-300 h-50 p-2">
                    <label htmlFor="startTime">Start Time</label>
                    <input
                      id="startTime"
                      type="text"
                      className="block rounded-sm bg-white w-[86%] h-[42px] border-[0.5px] border-solid border-gainsboro mt-1"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white border border-gray-300 h-50 p-2">
                    <label htmlFor="sessionDate">Choose Session Date</label>
                    <input
                      id="sessionDate"
                      type="text"
                      className="block rounded-sm bg-white w-[86%] h-[42px] border-[0.5px] border-solid border-gainsboro mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons mt-4 flex justify-center">
              <button className="square-11xl box-border w-[150px] h-8 cursor-pointer border-[1px] border-solid border-primary-color mb-2 bg-white text-blue-800">
                Back
              </button>
              <button className="square-11xl bg-primary-color box-border cursor-pointer w-[150px] h-8 border-[1px] border-solid border-primary-color mb-2 text-white mx-2.5">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
