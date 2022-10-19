import { Button, Form } from "react-bootstrap";

function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#c8ad7f",
        display: "flex",
        height: "60px",
        width: "1200px",
        margin: " auto",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <ul
        style={{
          maxHeight: "100px",
          width: "500px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
        }}
      >
        <li>Home</li>
        <li>About As</li>
        <li>Contact Me</li>
      </ul>
      <Form className="d-flex" style={{ width: "300px", margin: "auto" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          border="none"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
export default NavBar;
