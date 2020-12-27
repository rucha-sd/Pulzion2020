import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "./right-menu-bars.svg";
import closeIcon from "./cancel.svg";
import "./Navbar.css";
const variants = {
  open: { opacity: 1, display: "flex" },
  closed: { opacity: 0, display: "none" },
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  return (
    <>
      <motion.div
        className="mobile-menu"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <img
          src={closeIcon}
          alt=""
          width="20px"
          className="close-menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul>
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "selected nav-link" : "nav-link"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "selected nav-link"
                  : "nav-link"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={
                location.pathname === "/team" ? "selected nav-link" : "nav-link"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={
                location.pathname === "/events"
                  ? "selected nav-link"
                  : "nav-link"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/previous-glimpses"
              className={
                location.pathname === "/previous-glimpses"
                  ? "selected nav-link"
                  : "nav-link"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Previous Glimpses
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="nav-bar">
        <div className="main-logo">
          <b>Pulzion</b>
        </div>
        <div className="nav-links">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "selected nav-link" : "nav-link"
            }
          >
            Home
          </Link>

          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "selected nav-link" : "nav-link"
            }
          >
            About
          </Link>

          <Link
            to="/team"
            className={
              location.pathname === "/team" ? "selected nav-link" : "nav-link"
            }
          >
            Team
          </Link>

          <Link
            to="/events"
            className={
              location.pathname === "/events" ? "selected nav-link" : "nav-link"
            }
          >
            Events
          </Link>

          <Link
            to="/previous-glimpses"
            className={
              location.pathname === "/previous-glimpses"
                ? "selected nav-link"
                : "nav-link"
            }
          >
            Previous Glimpses
          </Link>
        </div>
        <div className="login-btn-div">
          <Link
            to="/login"
            className={
              location.pathname === "/login" ||
              location.pathname === "/register"
                ? "selected login-btn"
                : "login-btn"
            }
          >
            Login
          </Link>

          <img
            className={"navbar-toggle-icon"}
            src={menuIcon}
            alt=""
            width="30px"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
