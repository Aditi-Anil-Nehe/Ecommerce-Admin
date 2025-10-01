import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4">
      {/* Left Side - Logo / Brand */}
      <a className="navbar-brand fw-bold text-primary" href="/">
        🛒 Ecommerce Admin
      </a>

      {/* Right Side */}
      <div className="ms-auto d-flex align-items-center">
        {/* User Info */}
        <div className="d-flex align-items-center me-3">
          <FaUserCircle size={22} className="me-2 text-primary" />
          <span className="fw-semibold">Admin</span>
        </div>

        {/* Logout Button */}
        <button className="btn btn-outline-danger btn-sm d-flex align-items-center">
          <FaSignOutAlt className="me-2" /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;