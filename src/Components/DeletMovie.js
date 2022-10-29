import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const DeletMovie = (deletMovie) => {
  const [title, setTitle] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
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
        alignItems: "space arround",
        borderRadius: "10%",
      }}
    >
      <FormControl onChange={changeTitle} />
      <Button variant="danger" onClick={() => deletMovie(title)}>
        {" "}
        Delet Movie
      </Button>
    </div>
  );
};

export default DeletMovie;
