import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigator = useNavigate();


useEffect( () => {
   
    let isLogin = localStorage.getItem("isLogin");

    if(isLogin == null || isLogin != "yes" ) {

        navigator("/login")

    } 


}, []);    

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard