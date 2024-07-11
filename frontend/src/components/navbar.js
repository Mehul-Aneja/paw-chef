import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link className="logo-text" to="/">PAW<br />CHEF</Link>
                <Link className="link" to="/"><img src="/DogCooking.png" alt="Dog Cooking" className="logo" /></Link>
            </div>
            <div className="navbar-right">
                <Link className="link link-text" to="/">Home</Link>
                <Link className="link link-text" to="/dishes">Top Dishes</Link>
                <Link className="link link-text" to="/team">Our Team</Link>
            </div>
        </nav>
    );
};

export default Navbar;
