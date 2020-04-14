import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" >
          <Login />
        </Route>

        <PrivateRoute path="/bubble">
          <BubblePage />
        </PrivateRoute>

        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

function PrivateRoute({child, ...rest}) {
  const tokenExists = !!localStorage.getItem("token")
  return(
    <Route {...rest}>{tokenExists ? child : <Redirect to="/"/> }</Route>
  )
}

export default App;
