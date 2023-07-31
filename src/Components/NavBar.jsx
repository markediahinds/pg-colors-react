import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/colors">Colors</Link>
      </h1>
      <button>
        <Link to="/colors/new">New Color</Link>
      </button>
    </nav>
  );
}
