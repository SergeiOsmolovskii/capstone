import { Link } from "react-router-dom";
import footerLogo from "./../../assets/footer-logo.png"
import './../../styles/footer.css';


export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="container main-footer">
        {/* <div> */}
          <img className="footer-logo" src={footerLogo} alt="logo" />
        {/* </div> */}
        <div className="footer-navigation">
          <div className="footer-navigation__container">
            <h3 className="footer-navigation__title">Doormat Navigation</h3>
            <nav className="footer-nav">
              <ul className="footer-nav__list">
                <li className="footer-nav__list-item">
                  <Link to='/' className="footer-nav__list-item__link">Home</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/about' className="footer-nav__list-item__link">About</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/menu' className="footer-nav__list-item__link">Menu</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/reservations' className="footer-nav__list-item__link">Reservations</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/booking' className="footer-nav__list-item__link">Order online</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/login' className="footer-nav__list-item__link">Login</Link>
                </li>
              </ul>
            </nav>

          </div>

          <div className="footer-navigation__container">
            <h3 className="footer-navigation__title">Contact</h3>
            <nav className="footer-nav">
              <ul className="footer-nav__list">
                <li className="footer-nav__list-item">
                  <Link to='/home' className="footer-nav__list-item__link">Addres</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/about' className="footer-nav__list-item__link">Phone number</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/menu' className="footer-nav__list-item__link">email</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-navigation__container">
            <h3 className="footer-navigation__title">Social Media links</h3>
            <nav className="footer-nav">
              <ul className="footer-nav__list">
                <li className="footer-nav__list-item">
                  <Link to='/home' className="footer-nav__list-item__link">Addres</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/about' className="footer-nav__list-item__link">Phone number</Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link to='/menu' className="footer-nav__list-item__link">email</Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}