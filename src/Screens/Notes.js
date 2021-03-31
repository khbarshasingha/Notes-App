import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
export const Notes = ({ gnotes, setGnotes }) => {
  function deleteNote(id) {
    setGnotes(gnotes.filter(n => n.id !== id));
  }
  return (
    <div>
      <Row style={{ marginTop: "20px" }}>
        {" "}
        <form className="form-inline my-2 my-lg-0 ">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </Row>{" "}
      <Row style={{ marginTop: "20px" }}>
        {" "}
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
      </Row>
    </div>
  );
};
