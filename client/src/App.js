import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const [loginFormValues, setLoginFormValues] = useState({
    username: "",
    password: ""
  });

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login
            loginFormValues={loginFormValues}
            setLoginFormValues={setLoginFormValues}
          />
        </Route>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble">
          <BubblePage />
        </PrivateRoute>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const isTokenExist = !!localStorage.getItem("token");
  return (
    <Route {...rest}>{isTokenExist ? children : <Redirect to="/" />}</Route>
  );
}

export default App;
