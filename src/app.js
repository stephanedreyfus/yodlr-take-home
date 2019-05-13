import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <body>
        <h1>Welcome to Yodlr</h1>
        <Switch>
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/admin" render={() => <Admin />} />
        </Switch>
          <a href="/signup.html">Registration Page</a><br/>
          <a href="/admin.html">Admin Page</a>
      </body>
    )
  }
}

export default App;
