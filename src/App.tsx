import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import HomePage from "./Components/HomePage";
import Logout from "./Components/Logout";
import Register from "./Components/Register";

const App = () => {


  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>



  );
};

export default App;