import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";
import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Aboutme.css";

const AboutmeComponent = () => {
  return (
    <div className="aboutme__section page">
      <h1 className="section-title aboutme__title">Sobre mi</h1>
      <div className="description">
        <div className="description__info">
          <h2 className="section-subtitle">Descripción</h2>
          <p className="description__text">
            ¡Hola y bienvenido/a a mi mundo digital!
            <br />
            <br />
            Soy Josmary Pirela, una entusiasta desarrolladora front-end y
            estudiante de ingeniería en sistemas. Mi pasión por el desarrollo
            web es como una chispa que enciende mi creatividad y curiosidad.
            Disfruto cada línea de código que escribo y cada diseño que imagino,
            sabiendo que cada uno de ellos es una pieza de un rompecabezas que
            estoy construyendo con amor y dedicación. Estoy emocionada por
            compartir contigo mi trabajo, mi pasión y mi visión del mundo a
            través de este pequeño rincón digital. Espero que te sientas
            inspirado/a y motivado/a al explorar mi portafolio, ¡y que juntos
            podamos crear un futuro brillante y lleno de posibilidades! <br />
            <br />
            ¡Gracias por visitar mi espacio digital y por ser parte de esta
            increíble aventura!
          </p>
        </div>
        <div className="aboutme__contact">
          <div className="resume">
            <div className="skills">
              <h2 className="section-subtitle">Habilidades</h2>
              <InfiniteScroll />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Aboutme = MotionHoc(AboutmeComponent);

export default Aboutme;
