import React from "react";
import SidebarProfile from "../components/SidebarProfile";
import Navbar from "../components/Navbar";
import SessionCalender from "../components/SessionCalender";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SidebarProfile />
        <SessionCalender />
      </div>
    </>
  );
}
