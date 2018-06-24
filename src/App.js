import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login } from "./pages/login";
import { signUp } from "./pages/signUp";
import { CharacterPage } from "./pages/CharacterPage";
import { NewCharacter } from "./pages/NewCharacter";
import { TopNav } from "./components/TopNav";

const App = () => (
  <Router>
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/" component={signUp} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/login" component={login} />
        <Route exact path="/characterpage" component={CharacterPage} />
        <Route exact path="/newcharacter" component={NewCharacter} />
      </Switch>
    </div>
  </Router>
);

export default App;