import React from "react";
import "./styles/header.css";
import "./styles/styles.css";
import "./styles/App.css";
import Login from "./pages/login";
import "./styles/login.css";
import Home from "./pages/home";
import SignUp from "./pages/signup";

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
