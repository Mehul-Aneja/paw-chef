import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo-text">PAW<br />CHEF</span>
                <Link className="link" to="/"><img src="/DogCooking.png" alt="Dog Cooking" className="logo" /></Link>
            </div>
            <div className="navbar-right">
                <Link className="link link-text" to="/">Home</Link>
                <Link className="link link-text" to="/dishes">Dishes</Link>
            </div>
        </nav>
    );
};

export default Navbar;
