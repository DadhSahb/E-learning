import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Tutor from "../components/Tutor";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const TutorsList = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Tutor />
      </div>
      <Footer />
    </>
  );
};

export default TutorsList;
