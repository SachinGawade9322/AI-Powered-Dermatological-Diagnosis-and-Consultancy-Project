import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreButtonRef = useRef(null);
  const moreMenuRef = useRef(null);

  const handleMoreClick = () => setIsMoreOpen(!isMoreOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        moreButtonRef.current &&
        !moreButtonRef.current.contains(e.target) &&
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target)
      ) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <span>HEALTHCARE APP</span>
        </div>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/diseases">Diseases</Link>
          <Link to="/chatbot">Chatbot</Link>
          <Link to="/feedback">Feedback</Link>

          <div className="more-dropdown">
            <button
              className="more-button"
              onClick={handleMoreClick}
              ref={moreButtonRef}
            >
              More <FaChevronDown />
            </button>
            {isMoreOpen && (
              <div className="more-menu" ref={moreMenuRef}>
                <div className="category">
                  <h4>Media</h4>
                  <Link to="/video-player">Video Player</Link>
                </div>
                <div className="category">
                  <h4>Components</h4>
                  <Link to="/notifications">Notifications</Link>
                </div>
                <div className="category">
                  <h4>User</h4>
                  <Link to="/profile">Profile</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch />
            </button>
          </div>
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/profile" className="profile-menu">
            <FaUserCircle className="profile-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
