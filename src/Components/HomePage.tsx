import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
  
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/profile");
        }else{
            navigate("/login");
        }
    }, []);
  
  
  
    return(
        <div>
            
        </div>
    

    );
};


export default HomePage;