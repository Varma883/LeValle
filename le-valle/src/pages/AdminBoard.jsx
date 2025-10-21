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
import Buttons from "../componets/Buttons";
import PerformanceDashboard from '../componets/PerformanceDashboard'
import Activity from "../componets/Activity";

const AdminBoard = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isAutherOpen, setIsAutherOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy data

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
    <div className="p-5 bg-blue-50 ">
      {/* Header
      <div className=" sticky top-0 z-50  flex  gap-3 justify-end items-center px-6 py-3 bg-white shadow-sm">
        <div className="pe-2 border-e">
          <IoNotifications className="text-xl hover:text-gray-600" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <h1>Israel Elisha</h1>
          <MdAccountCircle className="text-xl hover:text-gray-600" />
        </div>
      </div> */}

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
      <Buttons />
      <PerformanceDashboard/>
      <Activity/>

      

    </div>
  );
};

export default AdminBoard;
