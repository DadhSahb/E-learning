// import React from "react";
// import { Link } from "react-router-dom";

// const SessionModal = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed inset-0 flex items-center justify-center ${
//         isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//       } transition-opacity duration-300`}
//     >
//       <div className="bg-purple-700 w-[177px] h-[128px] p-4 rounded-lg shadow-lg">
//         <h2 className="text-white text-xl font-semibold mb-2">Book Session</h2>
//         <p className="text-white text-gray-300 mb-4">
//           Are you sure you want to book this session?
//         </p>
//         <div className="flex justify-end">
//           <button
//             className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 mr-2"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <Link to="demorequest">
//             <button className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
//               Confirm
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SessionModal;
