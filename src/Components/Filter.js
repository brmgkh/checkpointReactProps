import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const Filter = ({ handelChange, searchMovie }) => {
  return (
    <div>
      <Form
        style={{
          display: "flex",
          gap: "30px",
          margin: "20px",
        }}
      >
        <FormControl onChange={handelChange}></FormControl>
        <Button variant="info" onClick={searchMovie}>
          {" "}
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
