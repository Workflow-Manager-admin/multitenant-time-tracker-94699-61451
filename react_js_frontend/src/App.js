import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

// Placeholder pages (to be replaced with real implementations)
function Dashboard() {
  // PUBLIC_INTERFACE
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome! See summary widgets here.</p>
    </main>
  );
}
function Clients() { return <main><h2>Clients</h2><p>Manage clients for your tenant.</p></main>; }
function Projects() { return <main><h2>Projects</h2><p>Projects CRUD.</p></main>; }
function Technologies() { return <main><h2>Technologies</h2><p>Manage Tags/Techs.</p></main>; }
function TimeEntries() { return <main><h2>Time Entries</h2><p>Track and view work sessions.</p></main>; }
function Reports() { return <main><h2>Reports</h2><p>Export or filter tracked time.</p></main>; }
function Profile() { return <main><h2>Profile / Settings</h2><p>User/tenant management.</p></main>; }
function NotFound() { return <main><h2>404 Not Found</h2></main>; }

// PUBLIC_INTERFACE
function App() {
  /** Root application: applies theming, layout, and routing. */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Router>
      <div className={`App layout`}>
        <Sidebar />
        <div className="main-content">
          <TopBar onToggleTheme={toggleTheme} theme={theme} />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/time-entries" element={<TimeEntries />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
