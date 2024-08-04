import React from "react";
import "./NavBar.css";
import logo from "../../assets/Images/logo.png";
import { Routes, Route, Router } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-tot">
      <div className="navigation-section">
        <div className="navigation-body">
          <div className="navigation-head">
            <img src={logo} alt="no" />
          </div>
          <div className="navigation-elements">
            <nav>
              <ul>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/challenge"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Challenges
                </NavLink>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/shops"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Shops
                </NavLink>
                <NavLink
                  to="/nutrition"
                  style={({ isActive }) => ({
                    color: isActive ? "#fb5607" : "white",
                  })}
                >
                  Nutrition
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="navigation-profile">
            <a href="">
              <li>Profile</li>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
