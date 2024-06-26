import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/paw-print.svg";

function Header() {
  return (
    <header className="header">
      <NavLink className="header__home-link" to="/">
        <div className="header__logo-container">
          <img src={logo} alt="paw print" className="header__logo" />
          <h1 className="header__title">SCIENCE WITH MR.FLUFF</h1>
        </div>
      </NavLink>

      <div className="header__login"></div>
    </header>
  );
}

export default Header;
