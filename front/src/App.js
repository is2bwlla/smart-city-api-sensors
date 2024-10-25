import React from "react";
import "./styles/styles.css";
import "./styles/App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import './input.css';

// IMPORTAÇÕES DE ROUTER:
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sensors from "./pages/sensors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/sensors" element={<Sensors/>}/>
      </Routes>
    </Router>
  );
}

export default App;
