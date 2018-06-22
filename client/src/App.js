import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import UserLogin from './pages/UserLogin';
import UserCreate from './pages/UserCreate';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/create" component={UserCreate} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
