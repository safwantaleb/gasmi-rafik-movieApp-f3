import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Rating from "../Rating/Rating";

const AddMovie = ({ Addfilm }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);

  const HandleChange = () => {
    let newmovie = {
      name: name,
      url: image,
      rate: rate,
      id: Math.random()
    };

    Addfilm(newmovie);
    setShow(false);
    setName("");
    setImage("");
    setRate("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <div className="news">
          <figure className="article">
            <img
              src="https://www.freeiconspng.com/uploads/green-plus-icon-7.png"
              alt="plusmovies"
            />

            <figcaption>
              <h3>New Item</h3>
            </figcaption>
          </figure>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label> Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label> URL Picture :</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your name"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label> Rate :</Form.Label>
              <Rating rate={rate} setRate={setRate} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
