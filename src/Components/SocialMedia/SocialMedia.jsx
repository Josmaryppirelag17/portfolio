import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SocialMedia = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`social__icons ${expanded ? "expanded" : ""}`}
      onClick={handleToggle}
    >
      <div className="menu">
        <li className="menu__icons">
          <a
            href="https://github.com/Josmaryppirelag17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
        <li className="menu__icons">
          <a
            href="https://www.linkedin.com/in/josmary-pirela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li className="menu__icons">
          <a
            href="https://codepen.io/Josmaryppirelag17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} className="icon" />
          </a>
        </li>
      </div>
      <div className="button">
        <FontAwesomeIcon icon={faShareNodes} />
      </div>
    </motion.div>
  );
};

export default SocialMedia;
