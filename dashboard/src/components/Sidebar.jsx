import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div>
      <div className="side-bar">
        <ul className="sidebar-menu">
          <li>
            <NavLink className="nav-link" to={`/dashboard/subcription`}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={`/post-management`}>
              Posts Management
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={`/setting`}>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
