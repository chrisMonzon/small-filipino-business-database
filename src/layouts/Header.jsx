import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        
        //what ever is written in here displays as the header of the website
        <header>
            <div className='head'>
            {/* replace with link to actual home page */}
            <Link to="/">
            <img 
            // src="https://img.icons8.com/ios-filled/50/000000/database.png" 
            src="https://img.icons8.com/ios-filled/100/database--v1.png" 
            alt="Database Icon" 
            className="header_image"
            />


                {/* {<img className='header_image' src="src/layouts/logo.png" alt="Philippine Student Association Logo"/>} */}
                {/* <img className='header_image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo"/> */}
            </Link>
                <h1 className="site_name">
                    <i>FilDB</i>
                </h1>
            <Link to="/login">
                <button className="logInButton"> </button>
            </Link>
                
            </div>
        </header>
    );
}

export default Header;