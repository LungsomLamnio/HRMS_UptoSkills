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
import "/src/App.css";

const navItems = [
  { name: "Dashboard", icon: <MdSpaceDashboard />, path: "/" },
  { name: "Chat", icon: <FaComments />, path: "/chat" },
  { name: "Employees", icon: <FaUsers />, path: "/employees" },
  { name: "Feed", icon: <FaNewspaper />, path: "/feed" },
  { name: "Recognition", icon: <FaAward />, path: "/recognition" },
  { name: "Event", icon: <FaCalendarAlt />, path: "/event" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="user-info">
        <img src={userImg} alt="User" className="avatar" />
        <div>
          <div className="user-name">Maria</div>
          <div className="user-role">HR Manager</div>
        </div>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;