import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
