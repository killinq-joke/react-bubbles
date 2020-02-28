import React from "react";
import axios from "../axiosWithAuth";
import { useHistory } from "react-router-dom";

function Login({ loginFormValues, setLoginFormValues }) {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();

  const changeHandler = e => {
    setLoginFormValues({
      ...loginFormValues,
      [e.target.name]: e.target.value
    });
  };

  const onLogin = () => {
    axios()
      .post("http://localhost:5000/api/login", loginFormValues)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
        <label>username</label>
        <input
          name="username"
          value={loginFormValues.username}
          onChange={changeHandler}
        />
        <label>password</label>
        <input
          name="password"
          value={loginFormValues.password}
          onChange={changeHandler}
        />
        <button type="button" onClick={onLogin}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
