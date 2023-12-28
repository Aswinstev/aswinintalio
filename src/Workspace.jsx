import React, { useState } from "react";
import MyModal from "./MyModal";

const Workspace = () => {
   
  const [showPopup, setShowPopup] = useState(false);

  const handleOnClose = () => setShowPopup(false);
        
  return (
    <div
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
    >
      <img
        src="/bgbg.png"
        alt="Background"
        style={{
          width: '15%', // Adjust the size as needed
          height: 'auto',
          position: 'absolute',
          top: '19%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="text-gray-500 -mt-44 text-center">
        <div className="text-lg font-bold mb-2">
          No Space is Created
        </div>
        <p className="text-sm -mt-2">
          Create a space to start your task management experience
        </p>
        <button 
        onClick={() => setShowPopup(true)}
         type="button" class="h-8 mt-7 border-dotted  text-gray-900  border border-gray-800 hover:bg-gray-300   font-medium rounded-lg text-sm px-5 pb-0 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-500  dark:hover:bg-gray-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-14 mr-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

        </button>

      </div>

      <MyModal onClose={handleOnClose} visible={showPopup} />
    </div>
  );
};

export default Workspace;
