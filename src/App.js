import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom ';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"></Route>
        <Route path="/places/new"></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
