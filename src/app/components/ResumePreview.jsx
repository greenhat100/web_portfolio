import { motion } from "framer-motion";
import { useState } from "react";

const ResumePreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      {/* Button to Show Resume */}
      <button
        onClick={() => setIsVisible(true)}
        className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
      >
        <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
          View Resume
        </span>
      </button>

      {/* Resume Preview Modal */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50"
        >
          <div className="bg-white w-[90%] sm:w-[50%] p-6 rounded-xl shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Resume Content */}
            <h2 className="text-2xl font-bold mb-4">Cleo Johnson - Resume</h2>
            <iframe
              src="/Cleo_Johnson_Resume.pdf"
              className="w-full h-[400px] border rounded-lg"
            ></iframe>

            {/* Download Button */}
            <a
              href="/Cleo_Johnson_Resume.pdf"
              download="Cleo_Johnson_Resume.pdf"
              className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResumePreview;
