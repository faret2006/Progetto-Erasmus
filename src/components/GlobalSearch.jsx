import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FloatingRelativeWindow from "./FloatingRelativeWindow";



const GlobalSearch = ( {isSearchWindowVisible, toggleSearchWindow}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    toggleSearchWindow();
  };

  const content = (
    <div className="p-2 flex flex-col space-y-2">
      <div>

      <span className="mr-1">
      Search results:
      </span>
      <span>
        {searchTerm}
      </span>
      </div>
    <div className="flex flex-col divide-y divide-gray-400">
      {searchTerm.length > 0 && (
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Search Result 1</span>
              <span className="text-xs text-gray-500">Description of result 1</span>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Search Result 2</span>
              <span className="text-xs text-gray-500">Description of result 2</span>
            </div>
          </div>
        </div>
      )
        }
    </div>
    </div>
  );

  return (
    <div className="relative flex space-x-2 h-8 md:h-10 w-full">
      {!isExpanded && (
        <button
          className="size-8 md:size-10 shrink-0 p-2 rounded-md text-dark-green-500 bg-gray-200 dark:bg-gray-900 hover:bg-dark-green-500 transition-colors hover:text-gray-100 items-center justify-center flex"
          onClick={toggleSearch}>
          <Icon className="size-full " icon="mdi:magnify" />
        </button>
      )}
      {isExpanded && (
        <div className="w-full flex flex-row space-x-2">
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            type="text"
            className="w-full px-2 py-1 bg-gray-100 dark:bg-gray-950 text-dark-green-600 dark:text-dark-green-300 rounded-md"
          />
          <button
            className="size-8 md:size-10 shrink-0 p-2 rounded-md text-dark-green-500 bg-gray-200 dark:bg-gray-900 hover:bg-dark-green-500 transition-colors hover:text-gray-100 items-center justify-center flex"
            onClick={toggleSearch}>
            <Icon className="size-full " icon="mdi:magnify" />
          </button>
        </div>
      )}
        {/* toggleWindow={toggleSearchWindow} */}
      <FloatingRelativeWindow
        toggleWindow={toggleSearchWindow}
        isVisible={isSearchWindowVisible}
        className="overflow-clip max-h-96 p-0 md:left-0 md:right-auto right-2 top-14"
        content={content}
    />
    </div>
  );
};

export default GlobalSearch;
