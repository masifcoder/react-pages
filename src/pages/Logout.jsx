

import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const Logout = () => {

    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        authCtx.setIsLogin(false);
        navigate("/login");
    }, [])
}

export default Logout