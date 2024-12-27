import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, className }) => {
  return (
    <button
      onClick={selectTab}
      className={`flex items-center focus:outline-none ${
        active
          ? "text-white bg-primary-500 rounded-full"
          : "text-[#ADB7BE] bg-transparent"
      } px-4 py-2 transition-colors duration-300 ease-in-out ${className}`}
    >
      <p className="mr-3 font-semibold">{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;
