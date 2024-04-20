import { useState } from "react";
import "./Sidebar.css";
import home from "../../assets/house-chimney-solid.svg";
import aboutme from "../../assets/user-solid.svg";
import blog from "../../assets/feather-pointed-solid.svg";
import formation from "../../assets/chalkboard-user-solid.svg";
import portfolio from "../../assets/ranking-star-solid.svg";
import contact from "../../assets/comments-regular.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [clicked, setClicked] = useState(true);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = (icon) => {
    setActiveIcon(icon);
    setClicked(true);
  };

  return (
    <div className="sidebar">
      <button
        className={`sidebar__button ${clicked ? "clicked" : ""}`}
        onClick={handleClick}
      ></button>
      <div className="sidebar__container">
        <div className={`sidebar__text ${clicked ? "hidden" : "clicked"}`}>
          <ul className="sidebar__list">
            <Link
              to="/"
              className={`sidebar__icon ${
                activeIcon === "home" ? "active" : ""
              }`}
              onClick={() => handleItemClick("home")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={home} alt="" />
                  <span>Home</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={home} alt="" />
              )}
            </Link>
            <Link
              to="/aboutme"
              className={`sidebar__icon ${
                activeIcon === "aboutme" ? "active" : ""
              }`}
              onClick={() => handleItemClick("aboutme")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={aboutme} alt="" />
                  <span>Sobre mi</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={aboutme} alt="" />
              )}
            </Link>{" "}
            <Link
              to="formation"
              className={`sidebar__icon ${
                activeIcon === "formation" ? "active" : ""
              }`}
              onClick={() => handleItemClick("formation")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={formation} alt="" />
                  <span>Formacion</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={formation} alt="" />
              )}
            </Link>{" "}
            <Link
              to="/portfolio"
              className={`sidebar__icon ${
                activeIcon === "portfolio" ? "active" : ""
              }`}
              onClick={() => handleItemClick("portfolio")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={portfolio} alt="" />
                  <span>Portafolio</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={portfolio} alt="" />
              )}
            </Link>
{/*            <Link
              to="/blog"
              className={`sidebar__icon ${
                activeIcon === "blog" ? "active" : ""
              }`}
              onClick={() => handleItemClick("blog")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={blog} alt="" />
                  <span>Blog</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={blog} alt="" />
              )}
              </Link>*/}
            <Link
              to="contact"
              className={`sidebar__icon ${
                activeIcon === "contact" ? "active" : ""
              }`}
              onClick={() => handleItemClick("contact")}
            >
              {!clicked && (
                <>
                  <img className="sidebar__icon-img" src={contact} alt="" />
                  <span>Contacto</span>
                </>
              )}
              {clicked && (
                <img className="sidebar__icon-img" src={contact} alt="" />
              )}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
