import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <h1 className="welcome-text">PAW-CHEF</h1>
                <p className="tagline-text">Find the <span className="pawfect">PAWFECT</span> Recipe<br /> for your Next Cooking Adventure!</p>
            </div>
            <div className="home-right">
                <img src="/DogServing.png" alt="Dog Serving" className="dog-serving" />
            </div>
        </div>
    );
};

export default Home;
