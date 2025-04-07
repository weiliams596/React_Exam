import React from "react";
import "./exam.css";

const props = {};

const Login = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (!JSON.parse(localStorage.getItem("userData"))) {
      setErrorMessage("Please register first");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    } else {
        props.username = JSON.parse(localStorage.getItem("userData")).username;
        props.email = JSON.parse(localStorage.getItem("userData")).email;
        props.password = JSON.parse(localStorage.getItem("userData")).password;
        props.setShowElement(<LogedIn />);
    }
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(userName, email, password);
    const locName = JSON.parse(localStorage.getItem("userData")).username;
    const locEmail = JSON.parse(localStorage.getItem("userData")).email;
    const locPassword = JSON.parse(localStorage.getItem("userData")).password;

    if (
      userName === locName &&
      email === locEmail &&
      password === locPassword
    ) {
      props.setShowElement(<LogedIn />);
    } else {
      setErrorMessage("Invalid credentials");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input id="name" type="text" placeholder="Username" />
        <input id="email" type="email" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button
          type="submit"
          onClick={() => props.setShowElement(<Register />)}>
          Register
        </button>
      </form>
    </div>
  );
};

const Register = () => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Please fill all fields");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }
    else{
        props.username = name;
        props.email = email;
        props.password = password;
        localStorage.setItem("userData", JSON.stringify({ username:props.username, email:props.email, password:props.password }));
        props.setShowElement(<logedIn />);
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <input name="name" id="name" type="text" placeholder="name" />
        <input name="email" id="email" type="email" placeholder="email" />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="password"
        />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

const Guest = () => {
  return <div></div>;
};

const LogedIn = () => {
  const handleRemove = () => {
    localStorage.removeItem("userData");
    props.setShowElement(<Home />);
  };

  React.useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userData"))){
      props.username = JSON.parse(localStorage.getItem("userData")).username;
      props.email = JSON.parse(localStorage.getItem("userData")).email;
    }
  });
  return (
    <div>
      <h1>Welcome, {props.username}</h1>
      <p>Email: {props.email}</p>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={() => props.setShowElement(<Home />)}>Logout</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <button onClick={() => props.setShowElement(<Login />)}>Login</button>
      <button onClick={() => props.setShowElement(<Guest />)}>Guest</button>
    </div>
  );
};

export default function Exam() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showElement, setShowElement] = React.useState(<Home />);

  props.username = username;
  props.email = email;
  props.password = password;
  props.setShowElement = setShowElement;
  return <div className="exam">{showElement}</div>;
}
