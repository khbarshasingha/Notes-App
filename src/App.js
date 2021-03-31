import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Notes } from "./Screens/Notes";
import { CreateNotes } from "./Screens/CreateNotes";
function App() {
  const [gnotes, setGnotes] = useState([]);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notes">
          <Notes gnotes={gnotes} setGnotes={setGnotes} />
        </Route>
        <Route path="/create">
          <CreateNotes setGnotes={setGnotes} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
