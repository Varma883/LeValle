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
import QRCode from "react-qr-code"; //
import { v4 as uuidv4 } from "uuid"; //

const ValletBoard = () => {
  const [qrValue, setQrValue] = useState("");
  const [submissions, setSubmissions] = useState([]);


  const [showDropdown, setShowDropdown] = useState(false);

  const handleGenerateQR = () => {
    const uniqueId = uuidv4(); // Generate unique ID
    setQrValue(uniqueId); // Set QR value
    // Optional: store in DB or localStorage here
    console.log("Generated QR ID:", uniqueId);
  };

  const [formData, setFormData] = useState({
    parkingID: "",
    car_make: "",
    car_model: "",
    car_num: "",
    phone: "",
  });

  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
 

  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmissions((prev) => [...prev, formData]);
  // Reset the form (optional)
  setFormData({
    parkingID: "",
    car_make: "",
    car_model: "",
    car_num: "",
    phone: "",
  });
};


  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="sticky top-0 z-50   flex  gap-3 justify-end items-center px-6 py-3 bg-white shadow-sm">
        <div className="pe-2 border-e">
          <IoNotifications className="text-xl hover:text-gray-600" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <h1>Mahi Teja</h1>
          <MdAccountCircle className="text-xl hover:text-gray-600" />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center p-3">
        <h1 className="text-sm md:text-xl lg:text-2xl font-sans font-medium">
          Vallet Dashboard
        </h1>
        {/* <Link
          to="/create"
          className="text-white flex items-center text-center gap-2 lg:gap-3 font-medium rounded-lg text-xs px-2 py-1.5 lg:text-sm lg:px-4 lg:py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
        >
          <FaCar />
          Valet Operations
        </Link> */}
      </div>

      {/* <div className="grid grid-cols-2 gap-4  p-5">
        <div className="flex items-center justify-center">
        
          <div className="flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl shadow-md border border-gray-200 w-full max-w-sm mx-auto">
            <button
              onClick={handleGenerateQR}
              className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition duration-200"
            >
              Generate QR
            </button>

          
            <div className="relative w-64 h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              {qrValue && (
                //   Placeholder with centered QR 
                <div className="absolute inset-0 flex flex-col  gap-2 items-center justify-center">
                  <div className="bg-white p-2 rounded shadow">
                    <QRCode value={qrValue} size={200} />
                  </div>
                  <p className="text-xs text-gray-500 text-center break-words">
                    {qrValue}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center  border-l">
          <form action="" className="border w-full max-w-sm mx-auto p-5 ">
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Base input
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Base input
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Base input
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Base input
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Base input
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="flex justify-center">
              <button
              type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            >
              Purple
            </button>
            </div>
            
          </form>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left: QR Generator */}
        <div className="flex  justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-md w-full max-w-md h-[600px]">
            <h2 className="text-lg font-semibold text-gray-700 ">
              Generate Parking QR
            </h2>
            <button
              onClick={handleGenerateQR}
              className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition duration-200"
            >
              Generate QR
            </button>

            <div className="relative w-64 h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              {qrValue ? (
                <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
                  <div className="bg-white p-2 rounded shadow">
                    <QRCode value={qrValue} size={200} />
                  </div>
                  <p className="text-xs text-gray-500 text-center break-words px-2">
                    {qrValue}
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
                  QR will appear here
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex justify-center h-full ">
          <form
            className="w-full max-w-md bg-white rounded-xl shadow-md border p-6 h-[600px] overflow-auto"
            onSubmit={handleSubmit}
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Car Information
            </h2>

            <div className="mb-4">
              <label
                htmlFor="parking-id"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Parking Space ID
              </label>
              <input
                type="text"
                id="parking-id"
                name="parkingID"
                onChange={handlechange}
                value={formData.parkingID}
                placeholder="e.g., P001"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="car-make"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Car Make
              </label>
              <input
                type="text"
                id="car-make"
                name="car_make"
                onChange={handlechange}
                value={formData.car_make}
                placeholder="Toyota"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="car-model"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Car Model
              </label>
              <input
                type="text"
                id="car-model"
                name="car_model"
                onChange={handlechange}
                value={formData.car_model}
                placeholder="Camry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="car-number"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Car Number
              </label>
              <input
                type="text"
                id="car-number"
                name="car_num"
                onChange={handlechange}
                value={formData.car_num}
                placeholder="ABC 1234"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="customer-phone"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Customer Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handlechange}
                value={formData.phone}
                id="customer-phone"
                placeholder="+91XXXXXXXXXX"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="sumbit"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 
                     focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5"
              >
                Park Car
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left: QR Generator */}
        <div className="flex  justify-center h-full">
          <div className="flex flex-col  gap-4 p-6 bg-white rounded-xl shadow-md   w-full max-w-md overflow-y-auto max-h-[600px]">
             <div className="p-5 flex flex-col gap-5 items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  {submissions.map((entry, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Parking ID: {entry.parkingID}
      </h2>
      <p className="text-sm text-gray-600">Car Make: {entry.car_make}</p>
      <p className="text-sm text-gray-600">Car Model: {entry.car_model}</p>
      <p className="text-sm text-gray-600">Car Number: {entry.car_num}</p>
      <p className="text-sm text-gray-600">Phone: {entry.phone}</p>
    </div>
  ))}
</div>

      </div>
            
          </div>
         
        </div>

        {/* Right: Form */}
      </div>

    </div>
  );
};

export default ValletBoard;
