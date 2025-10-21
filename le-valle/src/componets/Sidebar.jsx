import React, { useState } from "react";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // ✅ Import the Auth hook

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth(); // ✅ Access logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Clears token and user data
    toast.info("Logged out successfully");
    navigate("/"); // ✅ Redirect to login page
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hidden md:block h-screen">
        <div
          className={`h-screen border-e border-t border-gray-400 p-3 shadow-xl transition-all duration-300
        ${isOpen ? "w-[250px]" : "w-[60px]"} 
        block sm:flex flex-col justify-between`}
        >
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between">
              {isOpen && (
                <h1 className="text-xl font-sans font-medium">Parking Solutions</h1>
              )}
              <button
                onClick={toggleSidebar}
                className="hover:bg-gray-100 p-1 rounded-xl"
              >
                <FiSidebar className="text-black text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="mt-10 flex flex-col gap-2">
              <Link
                to={"/"}
                className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-xl"
              >
                <FaDownload className="text-xl" />
                {isOpen && <span>Generate Report</span>}
              </Link>

              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-xl"
              >
                <MdOutlinePeopleAlt className="text-xl" />
                {isOpen && <span>Add New Employee</span>}
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-xl"
              >
                <IoSettingsOutline className="text-xl" />
                {isOpen && <span>Settings</span>}
              </a>

              {/* ✅ Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-xl text-left"
              >
                <IoLogOutOutline className="text-xl" />
                {isOpen && <span>Logout</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
