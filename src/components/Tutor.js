import React from "react";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import TutorInfo from "./TutorInfo";

export default function Tutor() {
  return (
    <>
      <div className="flex flex-column md:flex-row justify-center">
        <Sidebar />
        <div className="bg-whitesmoke p-4 md:p-8 flex flex-wrap">
          <TutorInfo />
          <TutorInfo />
          <TutorInfo />
          <TutorInfo />
          <TutorInfo />
        </div>
      </div>

      {/* <Pagination /> */}
    </>
  );
}
