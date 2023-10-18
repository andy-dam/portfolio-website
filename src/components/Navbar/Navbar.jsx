import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            className="desktopMenuListItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            to="intro"
          >
            Home
          </Link>
          <Link
            className="desktopMenuListItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            to="about"
          >
            About
          </Link>
          <Link
            className="desktopMenuListItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            to="portfolio"
          >
            Portfolio
          </Link>
          {/* <Link
            className="desktopMenuListItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            to="clients"
          >
            Clients
          </Link> */}
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="contactimg" className="desktopMenuImg" />{" "}
          Contact
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu ? "flex" : "none"}}>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            to="intro"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            to="skills"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </Link>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            to="portfolio"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Portfolio
          </Link>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            to="clients"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Clients
          </Link>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            to="contact"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Clients
          </Link>
          <Link
            className="listItem"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            to="contact"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
