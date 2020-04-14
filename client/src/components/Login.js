import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const Login = ({ loginValues, inputChange, onLogin }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      

      <form>
        <label>
          username
          <input name="username" onChange={inputChange} />
        </label>
        <label>
          password
          <input name="password" onChange={inputChange} />
        </label>
        <button type="button" onClick={(e) => onLogin(loginValues, history)}>
          LOGIN
        </button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    loginValues: state.loginValues,
  };
}

export default connect(mapStateToProps, actionCreators)(Login);
