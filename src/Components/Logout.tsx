import { useEffect } from "react";
import authStore from "../Store/Auth";

const Logout = () => {

    const { logout } = authStore();



    useEffect(() => {
        logout();
        window.location.href = "/login";
    } , []);




    return (
        <h1>Logout</h1>
    );

}


export default Logout;