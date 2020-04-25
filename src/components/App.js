import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Search, Info } from "./Routes";
import '../sass/index.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search}></Route>
        <Route path="/:user/info" component={Info}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
