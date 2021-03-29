import React from "react";
import { Card, Button } from "react-bootstrap";
export const Notes = ({ gnotes }) => {
  console.log(gnotes);
  return (
    <div>
      {gnotes.map(note => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
