import { Link } from 'react-router-dom';

export default function MainNavBar() {
  return (
    <ul className="navbar-nav ml-5 mt-5">
      <Link className="navbar-text" to="/">
        Naslovna
      </Link>
      <Link className="navbar-text" to="/repertoar">
        Repertoar
      </Link>
      <Link className="navbar-text" to="/uskoro">
        Uskoro
      </Link>
      <Link className="navbar-text" to="/cenovnik">
        Cenovnik
      </Link>
      <Link className="navbar-text" to="/onama">
        O nama
      </Link>
      <Link className="navbar-text" to="/kontakt">
        Kontakt
      </Link>
    </ul>
  );
}
