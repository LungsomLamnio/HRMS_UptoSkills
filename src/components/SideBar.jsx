import React from "react";
import {
  FaComments,
  FaUsers,
  FaNewspaper,
  FaAward,
  FaCalendarAlt,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import userImg from "../assets/client.jpg";
import "/src/App.css"; // Keep your custom CSS if needed

const navItems = [
  { name: "Dashboard", icon: <MdSpaceDashboard />, path: "/" },
  { name: "Chat", icon: <FaComments />, path: "/chat" },
  { name: "Employees", icon: <FaUsers />, path: "/employees" },
  { name: "Feed", icon: <FaNewspaper />, path: "/feed" },
  { name: "Recognition", icon: <FaAward />, path: "/recognition" },
  { name: "Event", icon: <FaCalendarAlt />, path: "/event" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
]; // ✅ FIXED missing closing bracket

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="d-flex flex-column text-white vh-100 p-3"
      style={{ width: "250px", backgroundColor: "#8481e2", position: "fixed" }}
    >
      {/* Logo and User Info */}
      <div className="text-center mb-4">
        <img src={logo} alt="HRMS Logo" style={{ width: "180px" }} className="mb-3" />
      </div>

      <div className="d-flex align-items-center mb-4 px-2">
        <img
          src={userImg}
          alt="User"
          className="rounded-circle me-3 border border-light"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div>
          <h6 className="mb-0 fw-bold">Maria</h6>
          <small className="text-white-50">HR Manager</small>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links mt-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`d-flex align-items-center px-3 py-2 rounded mb-3 ${
                isActive ? "bg-light text-dark fw-bold" : "text-white"
              }`}
              style={{ cursor: "pointer", transition: "0.2s" }}
            >
              <span className="me-2">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
