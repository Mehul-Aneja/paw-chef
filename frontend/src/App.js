import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Dishes from "./pages/dishes";
import './App.css';
import Team from "./pages/team";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dishes" element={<Dishes />} />
              <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
