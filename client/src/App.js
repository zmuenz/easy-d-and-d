import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { CharacterPage } from "./pages/CharacterPage";
import { NewCharacter } from "./pages/NewCharacter";
import NavBar from "./components/NavBar";
import Landing  from './pages/Landing';
import './App.css';
import 'tachyons';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/characterpage" component={CharacterPage} />
        <Route exact path="/newcharacter" component={NewCharacter} />
        <Route exact path="/landing" component={Landing} />
      </Switch>
    </div>
  </Router>
);

export default App;