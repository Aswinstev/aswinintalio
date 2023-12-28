import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Board');
  return (
    <nav className={`bg-gray-70 dark:bg-gray-70 border-b-2 border-gr mt-4`}>
      <div className="py-3.5">
        <div className="flex  justify-between ">
          <ul className="flex flex-row font-medium mt-0 text-sm">
            <li>
              <a
                href="#"
                onClick={() => setActiveItem('Board')}

                className={`text-gray-400 hover:text-gray-600 px-4 py-3 hover:border-b-1  ${activeItem === 'Board' && 'border-b-4 border-teal-700 text-teal-700'}`}
              >
                <span className="inline-block">Board</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveItem('List')}

                className={`text-gray-400 hover:text-gray-600 px-4 py-3 hover:border-b-1  ${activeItem === 'List' && 'border-b-4 border-teal-700 text-teal-700'}`}
              >
                <span className="inline-block">List</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveItem('Calendar')}

                className={`text-gray-400 hover:text-gray-600 px-4 py-3 hover:border-b-1  ${activeItem === 'Calendar' && 'border-b-4 border-teal-700 text-teal-700'}`}
              >
                <span className="inline-block">Calendar</span>
              </a>
            </li>
          </ul>
          <div className="flex flex-row space-x-2 font-medium mt-0 -mb-3 text-sm">
            <span className="inline-block text-sm px-1 pt-1 bg-white border rounded-md h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
            </span>
            <span className="inline-block text-sm px-1 pt-1 bg-white border rounded-md h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>

            </span>

          </div>
          
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
