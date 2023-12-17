import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Bucket from "./Components/Bucket";
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
      <Route path="/bucket/:id" element={<Bucket />} />
      
    </Routes>



  );
};

export default App;