import React, { useState } from "react";

const SideBar = () => {

  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="flex flex-col">
      <div className="bg-white h-[26rem] w-[4rem] rounded-2xl ml-6 mr-6 py-4 pl-4 border transition-all duration-500 border-solid relative shadow-lg">

        <div class="relative">
          <img class="w-9 h-9 rounded-full cursor-pointer mt-2 -ml-0.5 " src="/shaik.png" alt="" />
            <span class="bottom-0 left-7 absolute -ml-0.5  w-3 h-3 bg-green-600 border-2 border-white dark:border-gray-500 rounded-full"></span>
        </div>
        <div className={`text-center cursor-pointer  ${activeItem === "Dashboard" && "border-r-2  border-teal-700 bg-teal-500 bg-opacity-10 "}`}
          onClick={() => handleItemClick("Dashboard")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-2 mt-11 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
          <p
            className="text-gray-500 -ml-2"
            style={{

              fontSize: "0.55rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "-0.5rem",
              marginTop: "-0.5rem",
            }}>Dashboard</p>
        </div>
        <div className={`text-center cursor-pointer  ${activeItem === "Workspace" && "border-r-2  border-teal-700 bg-teal-500 bg-opacity-10"}`}
          onClick={() => handleItemClick("Workspace")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-2 mt-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>

          <p
            className="text-gray-500 -ml-2"
            style={{

              fontSize: "0.55rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "-0.5rem",
              marginTop: "-0.5rem",
            }}>Workspace</p>
        </div>
        <div className={`text-center cursor-pointer  ${activeItem === "Documents" && "border-r-2  border-teal-700 bg-teal-500 bg-opacity-10"}`}
          onClick={() => handleItemClick("Documents")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-2 mt-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>

          <p
            className="text-gray-500 -ml-2"
            style={{

              fontSize: "0.55rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "-0.5rem",
              marginTop: "-0.5rem",
            }}>Documents</p>
        </div>
        <div className={`text-center cursor-pointer  ${activeItem === "Report" && "border-r-2  border-teal-700 bg-teal-500 bg-opacity-10"}`}
          onClick={() => handleItemClick("Report")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mb-2 mt-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>

          <p
            className="text-gray-500 -ml-4"
            style={{

              fontSize: "0.55rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "-0.5rem",
              marginTop: "-0.5rem",
            }}>Report</p>
        </div>
      </div>
      <div className="bg-white cursor-pointer h-[4rem] w-[4rem] mt-2 rounded-2xl ml-6 mr-6 p-4 border transition-all duration-500 border-solid relative shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-8 text-teal-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>


      </div>
    </div>
  );
};

export default SideBar;
