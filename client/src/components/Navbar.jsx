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
        <li>
          <Link to="/profesiones">
            Profesiones
          </Link>
        </li>
        <li>
          <Link to="/profesiones/new">
            Nueva Profesion
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
