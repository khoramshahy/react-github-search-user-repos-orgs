import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Footer, Header } from './Layout';
import { Home, Info } from "./Pages";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:user/info" component={Info}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
