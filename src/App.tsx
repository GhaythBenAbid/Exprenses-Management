import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import authStore from "./Store/Auth";
import Bucket from "./Components/Bucket";
import Dashboard from "./Components/Dashboard";



export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = authStore();
      
  if (user) {
    return children
  }
    
  return <Navigate to="/login" />
}



const App = () => {
  


  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/bucket/:id" element={<PrivateRoute><Bucket/></PrivateRoute>} />
      <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />


    </Routes>



  );
};

export default App;