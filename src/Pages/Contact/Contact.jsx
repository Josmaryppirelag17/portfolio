import "./Contact.css";
import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import github from "../../assets/github-black.svg";
import codepen from "../../assets/codepen-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-161-svgrepo-com.svg";
import linktree from "../../assets/linktree-svgrepo-com.svg";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";

const contactComponent = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    // Mostrar mensaje de error si el correo electrónico no es válido
    swal("Error", "Por favor, introduce un correo electrónico válido", "error");
    return;
  }

  if (message.trim().length < 30) {
    // Mostrar mensaje de error si el mensaje es demasiado corto
    swal("Error", "El mensaje debe tener al menos 50 caracteres", "error");
    return;
  }

  try {
    await emailjs.sendForm(
      "service_kqewfng",
      "template_8bdz4tm",
      e.target,
      "0dqReoIznBc66IJ3C"
    );
    swal("Mensaje enviado");
  } catch (error) {
    console.error("Error:", error);
    swal("Error al enviar el mensaje");
  }
};


  return (
    <section className="contact__section page">
      <h1 className="contact__title section-title">Contacto</h1>
      <div className="contact-wrapper">
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div>
              <input
                type="text"
                className="form__item form-control"
                id="name"
                name="name"
                placeholder="NOMBRE"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                type="email"
                className="form__item form-control"
                id="email"
                name="email"
                placeholder="CORREO ELECTRONICO"
                required
              />
            </div>
          </div>
          <textarea
            className="form-control form__item"
            rows="10"
            placeholder="MENSAJE"
            name="message"
            required
          ></textarea>
          <button className="btn send-button" id="submit" type="submit">
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="send-text">ENVIAR</span>
            </div>
          </button>
        </form>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon className="contact__svg" icon={faLocationDot} />
              <span className="contact-text place">Maracaibo, Venezuela</span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon className="contact__svg" icon={faWhatsapp} />
              <span className="contact-text phone">
                <a href="tel:58-424-605-2566" title="Espero tu whatsapp">
                  (424) 605-2566
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon className="contact__svg" icon={faEnvelope} />
              <span className="contact-text gmail">
                <a
                  href="mailto:josmarypireladev@gmail.com"
                  title="Espero tu mensaje"
                >
                  josmarypireladev@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <ul className="social__media">
              <li className="social__media-item">
                <a
                  className="social__media-link"
                  href="https://github.com/Josmaryppirelag17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social__media-svg"
                    src={github}
                    alt="github"
                  />
                </a>
              </li>

              <li className="social__media-item">
                <a
                  className="social__media-link"
                  href="https://codepen.io/Josmaryppirelag17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={codepen}
                    alt="codepen"
                  />
                </a>
              </li>

              <li className="social__media-item">
                <a
                  className="social__media-link"
                  href="https://www.linkedin.com/in/josmary-pirela/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </li>

              <li className="social__media-item">
                <a
                  className="social__media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linktr.ee/josmarypg"
                >
                  {" "}
                  <img
                    className="social__media-svg"
                    src={linktree}
                    alt="linktree"
                  />
                </a>
              </li>
            </ul>
          </ul>
          <hr />
          <div className="copyright">&copy; TODOS LOS DERECHOS RESERVADOS</div>
        </div>
      </div>
    </section>
  );
};

const Contact = MotionHoc(contactComponent);

export default Contact;
