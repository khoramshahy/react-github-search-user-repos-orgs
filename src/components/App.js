import React, { Suspense, lazy } from 'react';
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../sass/index.scss'

const Search = lazy(() => import('./Routes/Search'));
const Info = lazy(() => import('./Routes/Info'));


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route path="/:user/info" component={Info}></Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
