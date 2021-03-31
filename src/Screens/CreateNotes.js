import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import uniqid from "uniqid";

export const CreateNotes = ({ setGnotes }) => {
  const [notes, setNotes] = useState({
    id: uniqid(),
    title: "",
    text: "",
    date: ""
  });
  //const [id, setId] = useState(uniqid());
  const inputEvent = event => {
    const { value, name } = event.target;
    setNotes({ ...notes, id: uniqid(), [name]: value });
  };
  function addNote() {
    if (notes.title !== "" || notes.text !== "") {
      setGnotes(note => [...note, notes]);
      // setId(uniqid());
      setNotes({ id: uniqid(), title: "", text: "", date: "" });
    }
  }
  return (
    <Container>
      <Form style={{ width: "50%" }}>
        <Form.Group controlId="exampleForm.ControlDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            onChange={inputEvent}
            value={notes.date}
            type="date"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlText">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            onChange={inputEvent}
            value={notes.title}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Note</Form.Label>
          <Form.Control
            name="text"
            onChange={inputEvent}
            value={notes.text}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
      <Button type="submit" onClick={addNote}>
        Add
      </Button>
    </Container>
  );
};
