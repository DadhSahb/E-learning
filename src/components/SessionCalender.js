import React, { useState, useEffect } from "react";

export default function SessionCalender() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const times = Array.from({ length: 11 }, (_, i) => i + 1);

  const availabilityStatus = [
    [true, true, false, true, false, true, true, false, true, false, true],
    [
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
    ],
    [true, true, true, true, true, true, true, true, false, true, false, true],
    [
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ],
    [true, true, true, true, true, false, true, true, false, true, false, true],
  ];

  const [startDate, setStartDate] = useState(new Date("2023-07-10")); // Initial start date

  const incrementDate = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 7);
    setStartDate(newDate);
  };

  const decrementDate = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 7);
  };

  useEffect(() => {
    const startingDayIndex = startDate.getDay();
    const daysOfWeek = days
      .slice(startingDayIndex)
      .concat(days.slice(0, startingDayIndex));
    setTableDays(daysOfWeek);
  }, [startDate]);

  const [tableDays, setTableDays] = useState(days);

  return (
    <div>
      <div className="div flex justify-between items-center mx-5">
        <div className="text-2xl font-semibold font-sora-semi text-black-100 mx-5">
          <h3>Book your online session</h3>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-zinc-50 cursor-pointer"
            onClick={decrementDate}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <p className="text-wrapper-184 mx-2">
            {startDate.toLocaleDateString()} -{" "}
            {new Date(
              startDate.getTime() + 6 * 24 * 60 * 60 * 1000
            ).toLocaleDateString()}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-zinc-50 cursor-pointer"
            onClick={incrementDate}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <table className="table-auto w-[125%] h-[734px] bg-white border border-collapse border-gray-300 rounded-lg shadow-lg overflow-y-auto">
          <thead>
            <tr>
              <th className="border border-collapse px-4 py-2"></th>
              {tableDays.map((day, index) => (
                <th key={index} className="border border-collapse px-4 py-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr key={index}>
                <td className="border border-collapse px-4 py-2">{time} AM</td>
                {availabilityStatus.map((statusRow, rowIndex) => (
                  <td
                    key={rowIndex}
                    className={`border border-collapse px-4 py-2 ${
                      statusRow[index]
                        ? "text-blue-500 cursor-pointer hover:bg-gray-100 relative"
                        : ""
                    }`}
                  >
                    {statusRow[index] ? (
                      <>
                        Available
                        <div className="hidden absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                          <div className="box">
                            <div className="rectangle"></div>
                            <div className="absolute top-2 left-2 text-white">
                              <p className="text-sm">Available Slot</p>
                              <button className="mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                                Book Session
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overlap-5">
        <div className="text-2xl font-semibold font-sora-semi text-black-100 mx-5">
          <h3>Experience</h3>
        </div>
        <div className="text-2xl font-semibold font-sora-semi text-black-100 mx-5">
          <h3>Education</h3>
        </div>
        <div className="text-2xl font-semibold font-sora-semi text-black-100 mx-5">
          <h3>Certificates</h3>
        </div>
      </div>
    </div>
  );
}
