import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [loginFormValues, setLoginFormValues] = useState({
    username: "",
    password: ""
  })

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login loginFormValues={loginFormValues} setLoginFormValues={setLoginFormValues}/>
          </Route>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        
      </div>
    </Router>
  );
}

export default App;
