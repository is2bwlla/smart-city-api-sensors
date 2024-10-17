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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
