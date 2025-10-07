import React, { use, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuCircleParking } from "react-icons/lu";

const AdminBoard = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isAutherOpen, setIsAutherOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy data
  const posts = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      status: "PUBLISHED",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      status: "DRAFT",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      status: "PUBLISHED",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },
    {
      id: 4,
      title: "Noteworthy technology acquisitions 2024 ",
      status: "ARCHIVED",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },
    {
      id: 5,
      title: "Noteworthy technology acquisitions 2024 ",
      status: "ARCHIVED",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },

    {
      id: 6,
      title: "Noteworthy technology acquisitions 2024 ",
      status: "PUBLISHED",
      author: "John Doe",
      created: "2024-10-26",
      updated: "2025-04-20",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "PUBLISHED":
        return "bg-green-500";
      case "DRAFT":
        return "bg-gray-400";
      case "ARCHIVED":
        return "bg-red-400";
      default:
        return "bg-gray-300";
    }
  };
  const DisplayDeatils = (id) => {
    console.log("Navigating to:", `/post/view/${id}`);
    navigate("/post/view/" + id);
  };

  return (
    <div className="w-full h-full bg-gray-50">
      {/* Header */}
      <div className=" sticky top-0 z-50  flex  gap-3 justify-end items-center px-6 py-3 bg-white shadow-sm">
        <div className="pe-2 border-e">
          <IoNotifications className="text-xl hover:text-gray-600" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <h1>Israel Elisha</h1>
          <MdAccountCircle className="text-xl hover:text-gray-600" />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center p-3">
        <h1 className="text-sm md:text-xl lg:text-2xl font-sans font-medium">
          Admin DashBoard
        </h1>
        <Link
          to="/create"
          className="text-white flex items-center text-center gap-2 lg:gap-3 font-medium rounded-lg text-xs px-2 py-1.5 lg:text-sm lg:px-4 lg:py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
        >
          <FaCar />
          Valet Operations
        </Link>
      </div>

      <div>
        <div className="p-3 flex justify-between">
          <div
            href="#"
            className=" flex gap-1  justify-between items-center w-[300px] h-[100px] p-6 bg-white   border-l-4 border-blue-500 rounded shadow-sm hover:bg-gray-100"
          >
            <div  >
              <h1 className="text-xl text-blue-500">Total Cars Delivered</h1>
              <p className="text-4xl text">0</p>
            </div>

            <FaCarSide className="text-gray-600 text-5xl" />

          </div>

           <div
            href="#"
            className=" flex gap-1 justify-between items-center w-[300px] h-[100px] p-6 bg-white   border-l-4 border-green-500 rounded shadow-sm hover:bg-gray-100"
          >
            <div  >
              <h1 className="text-xl text-green-500">Vallet employees</h1>
              <p className="text-4xl text">0</p>
            </div>

            <FaPeopleGroup className="text-gray-600 text-5xl" />

          </div>


           <div
            href="#"
            className=" flex gap-1 justify-between items-center w-[300px] h-[100px] p-6 bg-white   border-l-4 border-purple-500 rounded shadow-sm hover:bg-gray-100"
          >
            <div  >
              <h1 className="text-xl text-purple-500">Availble Parking Spots</h1>
              <p className="text-4xl text">0</p>
            </div>

            <LuCircleParking className="text-gray-600 text-5xl" />

          </div>
        </div>
      </div>


      <div>
        creat host 
      </div>
    </div>
  );
};

export default AdminBoard;
