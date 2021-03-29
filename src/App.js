import "./App.css";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Notes } from "./Screens/Notes";
import { CreateNotes } from "./Screens/CreateNotes";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notes" exact component={Notes} />
        <Route path="/create" exact component={CreateNotes} />
      </Switch>
    </Router>
  );
}

export default App;
