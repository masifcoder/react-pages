

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("isLogin");
        navigate("/login");
    }, [])
}

export default Logout