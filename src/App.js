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
          <Col sm="12" md="6" lg="6" xl="6">
            <Home />

            <CreateNotes setGnotes={setGnotes} />
          </Col>
          <Col sm="12" md="6" l="6" xl="6">
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
