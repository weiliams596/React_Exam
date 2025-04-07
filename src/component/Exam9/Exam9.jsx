import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from "./Components/Header";

import './home.css'

export default function Exam9() {
  const [status, setStatus] = useState("logout");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setStatus(localStorage.getItem("status"));
  }, []);

  useEffect(() => {
    if (status === "loggedIn") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status]);

  useEffect(() => {
    setStatus(localStorage.getItem("status"));
    if (!isLoggedIn) {
      navigate("/exam9/login");
    }
  }, [window.location]);

  useEffect(()=>{
    if(isLoggedIn){
      navigate('/exam9/home');
    }
    else{
      navigate('/exam9/login');
    }
  },[isLoggedIn]);
  return (
    <div>
      {isLoggedIn && <Header />}
      <Outlet />
    </div>
  );
}
