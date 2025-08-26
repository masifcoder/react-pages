import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ProtectedRoutes({ children }) {

    const navigator = useNavigate();

    useEffect(() => {

        let isLogin = localStorage.getItem("isLogin");

        if (isLogin == null || isLogin != "yes") {

            navigator("/login")

        }


    }, []);


    return (children)


}

export default ProtectedRoutes