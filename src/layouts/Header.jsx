import './Header.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchBarComponent from "../features/searching/SearchBar_Component.jsx"


function Header({ onSendSearchQuery }) {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <header className={scrolled ? "scrolled" : ""}>
        <div className='head'>
          <Link to="/">
            <img 
            //   src="https://img.icons8.com/ios-filled/100/database--v1.png" 
                src="https://img.icons8.com/ios-filled/100/shopping-bag.png" 
              alt="Database Icon" 
              className="header_image"
            />
          </Link>
          <h1 className="site_name">
            <i>JolliBuy</i>
          </h1>
          <div className="headerSearch">
          <SearchBarComponent onSendSearchQuery={onSendSearchQuery} />
          </div>
        </div>
        <div className="subtitle"><i><a href="https://github.com/PSA-Tech-Team/">Built by: PSA Tech Team</a></i></div>
      </header>
    );
  }
  
  export default Header;