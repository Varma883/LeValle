import React, { useEffect, useRef, useState } from "react";

const PerformanceDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Today");
  const filters = ["Today", "Yesterday", "Last 5 Days"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dashboard = [
    {
      icon: "MJ",
      icon_colour: "bg-blue-500",
      name: "Michael Johnson",
      v_id: "ID: V001",
      status: "Active",
      parked_cars_today: 23,
      parked_cars_metric: "+5 from yesterday",
      avg_time: 2.8,
      avg_time_metric: -0.3,
      performance: 92,
      rating: 4.5,
    },
    {
      icon: "SR",
      icon_colour: "bg-green-500",
      name: "Sarah Rodriguez",
      v_id: "ID: V002",
      status: "On Break",
      parked_cars_today: 19,
      parked_cars_metric: "+2 from yesterday",
      avg_time: 3.1,
      avg_time_metric: +0.2,
      performance: 85,
      rating: 3,
    },
    {
      icon: "AW",
      icon_colour: "bg-red-500",
      name: "Alex Wilson",
      v_id: "ID: V003",
      status: "Offline",
      parked_cars_today: 14,
      parked_cars_metric: "-3 from yesterday",
      avg_time: 3.7,
      avg_time_metric: +0.6,
      performance: 65,
      rating: 2.5,
    },
     {
      icon: "AW",
      icon_colour: "bg-red-500",
      name: "Alex Wilson",
      v_id: "ID: V003",
      status: "Offline",
      parked_cars_today: 14,
      parked_cars_metric: "-3 from yesterday",
      avg_time: 3.7,
      avg_time_metric: +0.6,
      performance: 65,
      rating: 2.5,
    },
     {
      icon: "AW",
      icon_colour: "bg-red-500",
      name: "Alex Wilson",
      v_id: "ID: V003",
      status: "Offline",
      parked_cars_today: 14,
      parked_cars_metric: "-3 from yesterday",
      avg_time: 3.7,
      avg_time_metric: +0.6,
      performance: 80,
      rating: 4.5,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "On Break":
        return "bg-yellow-100 text-yellow-700";
      case "Offline":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex space-x-1 justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.288 3.97a1 1 0 00.95.69h4.18c.97 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.288 3.97c.3.921-.755 1.688-1.54 1.118l-3.387-2.46a1 1 0 00-1.175 0l-3.387 2.46c-.785.57-1.84-.197-1.54-1.118l1.288-3.97a1 1 0 00-.364-1.118L2.043 9.397c-.783-.57-.382-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.288-3.97z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.288 3.97a1 1 0 00.95.69h4.18c.97 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.288 3.97c.3.921-.755 1.688-1.54 1.118l-3.387-2.46a1 1 0 00-1.175 0l-3.387 2.46c-.785.57-1.84-.197-1.54-1.118l1.288-3.97a1 1 0 00-.364-1.118L2.043 9.397c-.783-.57-.382-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.288-3.97z"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Valet Performance Dashboard
        </h1>

        {/* Dropdown */}
        <div className="relative inline-block w-full sm:w-40" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            {selected}
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
              {filters.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition ${
                    selected === option ? "bg-indigo-100 text-indigo-700" : ""
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
            <tr>
              <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Valet</th>
              <th className="px-4 sm:px-6 py-3">Status</th>
              <th className="px-4 sm:px-6 py-3">Cars</th>
              <th className="px-4 sm:px-6 py-3">Avg. Time</th>
              <th className="px-4 sm:px-6 py-3">Performance</th>
              <th className="px-4 sm:px-6 py-3">Rating</th>
              <th className="px-4 sm:px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dashboard.map((valet, i) => (
              <tr
                key={i}
                className="bg-white border-b hover:bg-gray-50 transition-all"
              >
                <td className="px-4 sm:px-6 py-4 font-medium text-gray-900 flex items-center gap-3 min-w-[160px]">
                  <div
                    className={`p-3 w-10 h-10 flex items-center justify-center rounded-full ${valet.icon_colour} text-white font-bold`}
                  >
                    {valet.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {valet.name}
                    </p>
                    <p className="text-xs text-gray-500">{valet.v_id}</p>
                  </div>
                </td>

                <td className="px- sm:px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      valet.status
                    )}`}
                  >
                    {valet.status}
                  </span>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <p className="font-semibold text-gray-800">
                    {valet.parked_cars_today}
                  </p>
                  <p
                    className={`text-xs ${
                      valet.parked_cars_metric.includes("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {valet.parked_cars_metric}
                  </p>
                </td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {valet.avg_time} min
                  </p>
                  <p
                    className={`text-xs ${
                      valet.avg_time_metric < 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {valet.avg_time_metric > 0
                      ? `+${valet.avg_time_metric}`
                      : valet.avg_time_metric}{" "}
                    min
                  </p>
                </td>

                <td className="px-4 sm:px-6 py-4 min-w-[140px]">
                  <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-in-out"
                      style={{ width: `${valet.performance}%` }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold text-white">
                      {valet.performance}%
                    </span>
                  </div>
                </td>

                <td className="px-4 sm:px-6 py-4 text-center">
                  {renderStars(valet.rating)}
                  <p className="text-xs text-gray-500 mt-1">{valet.rating} / 5</p>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <button className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 shadow-sm transition-all">
                      View
                    </button>
                    <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2 shadow-sm transition-all">
                      Suspend
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
