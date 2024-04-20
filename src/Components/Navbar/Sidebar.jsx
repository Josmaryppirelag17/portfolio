import { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./Sidebar.css";
import home from "../../assets/house-chimney-solid.svg";
import aboutme from "../../assets/user-solid.svg";
import blog from "../../assets/feather-pointed-solid.svg";
import formation from "../../assets/chalkboard-user-solid.svg";
import portfolio from "../../assets/ranking-star-solid.svg";
import contact from "../../assets/comments-regular.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = () => {
  const [clicked, setClicked] = useState(true);
  const [activeIcon, setActiveIcon] = useState(null);
  const sidebarControls = useAnimation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleItemClick = (icon) => {
    setActiveIcon(icon);
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      sidebarControls.start({
        opacity: 0,
        scale: 0.3,
        x: -50,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    } else {
      sidebarControls.start({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      });
    }
  }, [clicked, sidebarControls]);

  return (
    <div className="sidebar">
      <AnimatePresence>
        <motion.div
          className="sidebar__container"
          animate={{ width: 55, opacity: 1 }}
          exit={{ with: 0, opacity: 0 }}
        >
          <div className={`sidebar__text`}>
            <ul className="sidebar__list">
              <motion.li
                key="home"
                initial={{ opacity: 0, scale: 0.3, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                <Link
                  to="/"
                  className={`sidebar__icon`}
                  onClick={() => handleItemClick("home")}
                >
                  <img className="sidebar__icon-img" src={home} alt="" />
                </Link>
              </motion.li>
              <motion.li
                key="home"
                initial={{ opacity: 0, scale: 0.3, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                <Link
                  to="/aboutme"
                  className={`sidebar__icon`}
                  onClick={() => handleItemClick("aboutme")}
                >
                  <img className="sidebar__icon-img" src={aboutme} alt="" />
                </Link>{" "}
              </motion.li>
              <motion.li
                key="home"
                initial={{ opacity: 0, scale: 0.3, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                {" "}
                <Link
                  to="formation"
                  className={`sidebar__icon`}
                  onClick={() => handleItemClick("formation")}
                >
                  <img className="sidebar__icon-img" src={formation} alt="" />
                </Link>{" "}
              </motion.li>

              <motion.li
                key="home"
                initial={{ opacity: 0, scale: 0.3, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                {" "}
                <Link
                  to="/portfolio"
                  className={`sidebar__icon ${
                    activeIcon === "portfolio" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("portfolio")}
                >
                  <img className="sidebar__icon-img" src={portfolio} alt="" />
                </Link>
              </motion.li>
              <motion.li
                key="home"
                initial={{ opacity: 0, scale: 0.3, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                {" "}
                <Link
                  to="contact"
                  className={`sidebar__icon`}
                  onClick={() => handleItemClick("contact")}
                >
                  <img className="sidebar__icon-img" src={contact} alt="" />
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
