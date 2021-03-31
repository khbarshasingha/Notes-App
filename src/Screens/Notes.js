import React from "react";
import { Card, Button } from "react-bootstrap";
export const Notes = ({ gnotes, setGnotes }) => {
  function deleteNote(id) {
    setGnotes(gnotes.filter(n => n.id !== id));
  }
  return (
    <div>
      {gnotes.map(note => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>

              <Card.Text>{note.text}</Card.Text>
              <i
                className="fas fa-trash float-right"
                onClick={() => {
                  deleteNote(note.id);
                }}
              />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
