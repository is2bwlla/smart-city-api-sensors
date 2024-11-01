import React from "react";
import "./styles/styles.css";
import "./styles/App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import './input.css';
import Umidity from "./pages/umidity";
import PrivateRoute from "./components/privateRoute";
import TemperatureTable from "./pages/temperature";
import Luminosity from "./pages/luminosity";
import Counter from "./pages/counter";

// IMPORTAÇÕES DE ROUTER:
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/umidity" element={<PrivateRoute><Umidity/></PrivateRoute>}/>
        <Route path="/temperature" element={<PrivateRoute><TemperatureTable/></PrivateRoute>}/>
        <Route path="/luminosity" element={<PrivateRoute><Luminosity/></PrivateRoute>}/>
        <Route path="/counter" element={<PrivateRoute><Counter/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
