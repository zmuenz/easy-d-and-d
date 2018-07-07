import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import { NewCharacter } from "./pages/NewCharacter";
import { Dashboard } from "./pages/Dashboard";
import NavBar from "./components/landingComponents/NavBar";
import Landing from './pages/Landing';

import './App.css';
import 'tachyons';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/characterpage" component={CharacterPage} />
        <Route exact path="/newcharacter" component={NewCharacter} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/landing" component={Landing} />
      </Switch>
    </div>
  </Router >
);

export default App;