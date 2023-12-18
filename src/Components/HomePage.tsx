import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log(import.meta.env);
    }, []);
  
    return(
        <div>
            
        </div>
    

    );
};


export default HomePage;