import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");

  const handelTitle = (e) => {
    setTitle(e.target.value);
    e.preventDefault();
  };
  const handelDescription = (e) => {
    setDescription(e.target.value);
    e.preventDefault();
  };
  const handelPosterUrl = (e) => {
    setPosterUrl(e.target.value);
    e.preventDefault();
  };
  const handelRate = (e) => {
    setRate(e.target.value);
    e.preventDefault();
  };
  const newMovie = {
    title: title,
    description: description,
    posterUrl: posterUrl,
    rate: rate,
    frameUrl: "https://www.youtube.com/embed/qtRKdVHc-cE",
    id: Math.random(),
  };
  return (
    <div
      style={{
        backgroundColor: "#C8AD7F",
        margin: "30px auto",
        width: "50%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10%",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add A New Movie </h2>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Title Movie"
          aria-label="title"
          aria-describedby="basic-addon1"
          onChange={handelTitle}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Description</InputGroup.Text>
        <Form.Control
          placeholder="Description Movie"
          aria-label="description"
          aria-describedby="basic-addon2"
          onChange={handelDescription}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">Poster URL</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="url"
          placeholder="Exemple : https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg"
          onChange={handelPosterUrl}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Rating</InputGroup.Text>
        <Form.Control onChange={handelRate} />
      </InputGroup>

      <Button
        variant="primary"
        type="submit"
        onClick={() => addMovie(newMovie)}
      >
        Add Movie
      </Button>
    </div>
  );
};

export default AddMovie;
