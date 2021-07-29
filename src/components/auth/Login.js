import React from "react";
import "./login.css";
import Logo from "../../assets/loginLogo.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        auth && history.push("/");
      })
      .catch((error) => alert(error.massage));
  };
  return (
    <div className="login">
        <Link to="/">
        <img src={Logo} alt="logo" className="login__logo" />
        </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you need to agree Amazon clone's Conditions of Use and
          Privacy Notice
        </p>
        <p>
          NOTE :- **For create account, use any demo ( fake ) email and password and
          click on create account & For log in, use registered email and password**
        </p>
      </div>
      <button onClick={register} className="login__registerButton">
        Create your Amazon Account
      </button>
    </div>
  );
};

export default Login;
