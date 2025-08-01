import React from 'react';
import { Link, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
function Sidebar() {
  /** Sidebar navigation for main entity sections. */
  const location = useLocation();
  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/projects" },
    { name: "Technologies", path: "/technologies" },
    { name: "Time Entries", path: "/time-entries" },
    { name: "Reports", path: "/reports" },
    { name: "Profile", path: "/profile" },
  ];
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span role="img" aria-label="Logo">
          ⏱️
        </span>
        <span className="sidebar-title">Time Tracker</span>
      </div>
      <ul>
        {navLinks.map(link => (
          <li key={link.name} className={location.pathname === link.path ? "active" : ""}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;
