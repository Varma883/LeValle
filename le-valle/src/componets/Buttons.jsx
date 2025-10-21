import React from "react";
import { motion } from "framer-motion";

const InfoButtons = () => {
  const infoButtons = [
    {
      number: 8,
      description: "Total Valets",
      gradient: "from-purple-500 via-purple-600 to-purple-700",
    },
    {
      number: 6,
      description: "Currently Active",
      gradient: "from-green-400 via-green-500 to-emerald-600",
    },
    {
      number: 127,
      description: "Cars Parked Today",
      gradient: "from-yellow-400 via-yellow-500 to-orange-500",
    },
    {
      number: 3.2,
      description: "Avg Park Time (mins)",
      gradient: "from-red-400 via-rose-500 to-pink-600",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-4">
      {/* Changed default grid to col-2, then lg:col-4 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {infoButtons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`w-full max-w-[200px] sm:max-w-none h-[100px] sm:h-[120px] 
              bg-gradient-to-br ${item.gradient} text-white rounded-2xl 
              shadow-md hover:shadow-xl p-4 flex flex-col justify-center items-center
              transition-all duration-300 hover:brightness-110`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-sm">
              {item.number}
            </h1>
            <p className="text-sm sm:text-base font-medium mt-2 opacity-90 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoButtons;