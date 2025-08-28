import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


import AuthContext from "../context/AuthContext";

function ProtectedRoutes({ children }) {

    const auhtCtx = useContext(AuthContext);

    const navigator = useNavigate();

    useEffect(() => {

    

        if (auhtCtx.login == false) {

            navigator("/login")

        }


    }, []);


    return (children)


}

export default ProtectedRoutes