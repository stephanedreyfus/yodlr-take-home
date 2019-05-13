import React, { Component } from 'react'
import { Route, NavLink, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <body>
        <h1>Welcome to Yodlr</h1>
        <nav>
          <NavLink exact to="/signup">Registration Page</NavLink>
          <NavLink exact to="/admin">Admin Page</NavLink>
        </nav>
        <Switch>
          <Route exact path="/signup"
                 render={(props) => <Signup {...props}/>} />
          <Route exact path="/admin"
                 render={(props) => <Admin {...props}/>} />
        </Switch>
      </body>
    )
  }
}

export default App;
