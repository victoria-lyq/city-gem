import React from "react";

const SidebarToggle = ({ isOpen, toggleSidebar }) => {
  return (
    <button
      className="sidebar-toggle m-3 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={toggleSidebar}
    >
      {isOpen ? "Hide" : "Show"} Sidebar
    </button>
  );
};

export default SidebarToggle;
