import { Link } from "react-router-dom";
import './../../styles/nav.css';

export const Nav = (): JSX.Element => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__list-item">
          <Link to='/' className="header-nav__list-item__link">Home</Link>
        </li>
        <li className="header-nav__list-item">
          <Link to='/about' className="header-nav__list-item__link">About</Link>
        </li>
        <li className="header-nav__list-item">
          <Link to='/menu' className="header-nav__list-item__link">Menu</Link>
        </li>
        <li className="header-nav__list-item">
          <Link to='/reservations' className="header-nav__list-item__link">Reservations</Link>
        </li>
        <li className="header-nav__list-item">
          <Link to='/booking' className="header-nav__list-item__link">Order online</Link>
        </li>
        <li className="header-nav__list-item">
          <Link to='/login' className="header-nav__list-item__link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}