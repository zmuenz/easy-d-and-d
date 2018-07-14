import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import { NewCharacter } from "./pages/NewCharacter";
import { Dashboard } from "./pages/Dashboard";
import NavBar from "./components/landingComponents/NavBar";
import Landing from './pages/Landing';
import './App.css';
import 'tachyons';

let user = {}
let userName = {}
let userid = {}

function storeUser(newUser) {
  user = newUser;
  console.log(user);
}


const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Landing {...props} storeUser={storeUser} />} />
        <Route exact path="/characterpage" component={(props) => <CharacterPage {...props} user={user} />} />
        <Route exact path="/newcharacter" component={(props) => <NewCharacter {...props} user={user} />} />
        <Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={user} />} />
        <Route exact path="/landing" render={(props) => <Landing {...props} storeUser={storeUser} />} />
      </Switch>
    </div>
  </Router >
);

export default App;