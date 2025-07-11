import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/Photo.jpg";
import logo from "../assets/HRMS_Logo.png";

const items = [
  { name: "Dashboard", icon: "bi-speedometer2", path: "/" },
  { name: "Chat", icon: "bi-chat-dots", path: "/chat" },
  { name: "Employees", icon: "bi-people", path: "/employees" },
  { name: "Feed", icon: "bi-newspaper", path: "/feed" },
  { name: "Recognition", icon: "bi-award", path: "/recognition" },
  { name: "Event", icon: "bi-calendar-event", path: "/event" },
  { name: "Profile", icon: "bi-person", path: "/profile" },
  { name: "Settings", icon: "bi-gear", path: "/settings" },
];

export default function SideBar() {
  return (
    <div
      className="sidebar d-flex flex-column text-white vh-100 p-3"
      style={{ width: "250px", backgroundColor: "#697CE8" }}
    >
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="HRMS Logo"
          className="mb-3"
          style={{ width: "200px" }}
        />
        <br />
        <div className="d-flex align-items-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h6 className="fw-bold mb-1">Maria</h6>
            <small>HR Manager</small>
          </div>
        </div>
      </div>

      <div className="nav-links mt-3">
        {items.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `py-2 px-3 rounded d-flex align-items-center text-decoration-none ${
                isActive ? "bg-light text-dark fw-bold" : "text-white"
              }`
            }
            style={{ marginBottom: "30px" }}
          >
            <i className={`bi ${item.icon} me-2`}></i>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
