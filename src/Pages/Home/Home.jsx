import CopyToClipboard from "react-copy-to-clipboard";
import Button from "../../Components/Button/Button";
import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Home.css";
import swal from "sweetalert";
const homeComponent = () => {
  return (
    <div className="home__section pages">
      <div className="home__bg-container"></div>
      <div className="home__section-card">
        <div className="home__section-info">
          <h1 className="section-title home__title">Josmary Pirela</h1>
          <div className="subtitle__content">
            <h2 className="section-subtitle home__subtitle">
              Desarrolladora Frontend.
            </h2>
          </div>
          <p className="home__description">
            ¡Bienvenido a mi mundo digital! Aquí encontrarás un reflejo de mi
            pasión y dedicación. ¡Explora y conoce más sobre mí y mi trabajo!
          </p>{" "}
          <div className="resume">
            <div className="resume__cv">
              <a href="./JosmaryPirelaCV.pdf" download>
                <Button text="Descargar CV" padding="10px 20px"></Button>
              </a>
            </div>
            <div className="copy__email">
              <p>josmarypireladev@gmail.com</p>

              <CopyToClipboard text="josmarypireladev@gmail.com">
                <div
                  onClick={() =>
                    swal({
                      title: "¡Copiado!",
                      buttons: false,
                      timer: 1000,
                      className: "copy__alert",
                    })
                  }
                >
                  <Button text="Copiar" padding="9px 0px" />
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="home__illustration"></div>
      </div>
    </div>
  );
};

const Home = MotionHoc(homeComponent);

export default Home;
