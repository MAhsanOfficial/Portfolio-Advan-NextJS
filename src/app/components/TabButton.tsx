

import React from 'react';
import { motion } from "framer-motion";



interface TabButtonProps {
    selectTab: () => void;
    active: boolean;
    children: React.ReactNode;
}
const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button
            onClick={selectTab}
            className={`px-4 py-2 ${active ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'} rounded-md mx-2`}
        >
           <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>

            <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
        </button>
    );
};

export default TabButton;
