import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { CharacterPage } from "./pages/CharacterPage";
import { NewCharacter } from "./pages/NewCharacter";
import { Dashboard } from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Landing from './pages/Landing';

import './App.css';
import 'tachyons';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/characterpage" component={CharacterPage} />
        <Route exact path="/newcharacter" component={NewCharacter} />
        <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/landing" component={Landing} />
      </Switch>
    </div>
  </Router >
);

export default App;