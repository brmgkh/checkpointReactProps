import React from "react";
import { Card, Button } from "react-bootstrap";
const MovieCard = ({ movie }) => {
  return (
    <Card
      className="MovieCard"
      style={{
        width: "20rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "30px",
      }}
    >
      <Card.Img
        className="imgCard"
        src={movie.posterUrl}
        style={{
          width: "200px",
          height: "250px",
          marginTop: "10px",
          borderRadius: "20px",
        }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "#3E3737" }}>
          {movie.title}
        </Card.Title>
        <Card.Text style={{ fontWeight: "bold", color: "#3E3737" }}>
          {" "}
          {movie.description}
        </Card.Text>
        <div id="btnLink" style={{ width: "80px" }}>
          <Button variant="outline-success">
            <a
              href={movie.frameUrl}
              target="blanck"
              style={{ color: "#3E3737", textDecoration: "none" }}
            >
              Watch{" "}
            </a>
          </Button>
        </div>
      </Card.Body>

      <div className="star">{"⭐".repeat(movie.rate)}</div>
    </Card>
  );
};

export default MovieCard;
