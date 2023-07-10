import React from 'react';

function page() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex space-x-4 p-4">
        <li>
            <a className="text-white hover:bg-gray-700 px-2 py-1 rounded">Home</a>
        </li>
        <li>
            <a className="text-white hover:bg-gray-700 px-2 py-1 rounded">About</a>
        </li>
        <li>
            <a className="text-white hover:bg-gray-700 px-2 py-1 rounded">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default page
