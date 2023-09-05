"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

const Dropdown = ({ title, children, imgSrc,imgClassName, adjust }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(title);
  };

  const closeDropdowns = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", closeOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block dropdown-container">
      <button
        onClick={toggleDropdown}
        className={"px-2 py-1 rounded flex items-center"}
      >
         <span className="mr-1">{title} <img src={imgSrc} className={imgClassName} /></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && activeDropdown === title && (
        <ul className={`absolute bg-gray-700 text-white py-2 px-3 rounded shadow z-50 mt-3  ${adjust}`}>
          {children.map((child, index) => (
            <li key={index} className="mb-3">
              {child}
            </li>
          ))}    
        </ul>
      )}
    </div>
  );
};

export default Dropdown;