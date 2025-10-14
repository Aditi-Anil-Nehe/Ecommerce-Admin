import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary border-bottom shadow-sm px-4">
      {/* Left Side - Logo / Brand */}
      <a className="navbar-brand fw-bold text-light" href="/">
        🛒 Ecommerce Admin
      </a>

      {/* Right Side */}
      <div className="ms-auto d-flex align-items-center">
        {/* User Info */}
        <div className="d-flex align-items-center me-3">
          <FaUserCircle size={22} className="me-2 text-light" />
          <span className="fw-semibold text-light">Admin</span>
        </div>

        {/* Logout Button */}
        <button className="btn btn-outline-light btn-sm d-flex align-items-center">
          <FaSignOutAlt className="me-2 text-light" /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;