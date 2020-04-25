import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../sass/index.scss'

const Search = lazy(() => import('./Routes/Search'));
const Info = lazy(() => import('./Routes/Info'));

  function App() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route path="/:user/info" component={Info}></Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    );
  }

export default App;
