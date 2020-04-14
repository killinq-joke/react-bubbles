import * as types from "./actionTypes";
import axios from "axios";

export const inputChange = (e) => (dispatch) => {
  dispatch({ type: types.INPUT_CHANGE, payload: e.target });
};

export const onLogin = (values, history) => (dispatch) => {
  dispatch({ type: types.LOGIN });
  axios
    .post("http://localhost:5000/api/login", values)
    .then((res) => {
      history.push("/logged")  
      localStorage.setItem("token", res.data.payload);
    })
    .catch((err) => {
      
    });
};
