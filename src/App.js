import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Notes } from "./Screens/Notes";
import { CreateNotes } from "./Screens/CreateNotes";
import { Row, Col, Container } from "react-bootstrap";
function App() {
  const [gnotes, setGnotes] = useState([]);
  return (
    <Router>
      <NavBar />
      <Container>
        {" "}
        <Row>
          <Col sm="12" md="7" lg="8" xl="9">
            <Home />

            <CreateNotes setGnotes={setGnotes} />
          </Col>
          <Col sm="12" md="5" lg="4" xl="3">
            <Switch>
              <Route path="/notes">
                <Notes gnotes={gnotes} setGnotes={setGnotes} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
