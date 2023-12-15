import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Logout = () => {

    const { logout } = useAuth0();



    useEffect(() => {
        logout();
    } , []);




    return (
        <h1>Logout</h1>
    );

}


export default Logout;