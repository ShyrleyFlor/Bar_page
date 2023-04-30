import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>React MySQL</h1>
      </Link>

      <ul >
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
