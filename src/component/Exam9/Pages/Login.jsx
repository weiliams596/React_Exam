import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const emailInvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordInvalid = /^[a-zA-Z0-9!@#$%^&*_]{4,}$/;
    useEffect(()=>{
        if(email.length > 0 && !emailInvalid.test(email)){
            setError("Invalid email format");
        }
        else if(password.length > 0 && !passwordInvalid.test(password)){
            setError("Password should be at least 4 characters long and should contain at least one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&*)");
        }
        else{
            setError("");
        }
    },[email, password])
    
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!error.length){
        localStorage.setItem("status", "loggedIn");
        setEmail('');
        setPassword('');
        navigate("/exam9");
    }
  };
  return (
    <div>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
