import Filter from "./Filter";

function NavBar({ handelChange }) {
  return (
    <div
      style={{
        backgroundColor: "#c8ad7f",
        display: "flex",
      }}
    >
      <ul
        style={{
          maxHeight: "100px",
          width: "400px",
          height: "20px",
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
      <Filter handelChange={handelChange} />
    </div>
  );
}
export default NavBar;
