import React from 'react';

// PUBLIC_INTERFACE
function TopBar({ onToggleTheme, theme }) {
  /** Top bar: quick actions, user/tenant, theme toggle. */
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-timer-btn">Start Timer</button>
      </div>
      <div className="topbar-right">
        <button
          onClick={onToggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <span className="topbar-user-info">
          {/* User and tenant name will be dynamic */}
          Demo User@Tenant
        </span>
      </div>
    </header>
  );
}
export default TopBar;
