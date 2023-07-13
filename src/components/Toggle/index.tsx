"use client";
import { DeleteIcon, MoreIcon, UpdateIcon } from "@live-config/images";
import React, { useEffect, useRef, useState } from "react";

const ToggleButton = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`popover ${isOpen ? "active" : ""}`}
      onClick={togglePopover}
    >
      <button className="popover-trigger">
        <MoreIcon />
      </button>
      <div className="relative" ref={popoverRef}>
        {isOpen && (
          <div className="absolute -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-sm border border-gray-100 w-52">
            <a
              href="#"
              className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:bg-opacity-70 hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
            >
              <UpdateIcon />
              Update
            </a>
            <a
              href="#"
              className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:bg-opacity-70 hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
            >
              <DeleteIcon />
              Delete
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleButton;
