import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Formation.css";

const formationComponent = () => {

  return (
    <section className="formation__section page">
      <div className="formation">
        <article className="formation__educ">
          <h2 className="educ__formation section-title">Educacion</h2>
          <figure className="educ__formation-item">
            <figcaption className="formation__subtitle">Cursos</figcaption>
            <h4 className="formation__name">Oracle Next Education</h4>
            <h5>Oracle/Alura Latam</h5>
            <h6 className="formation__date">2024 - Ahora</h6>
          </figure>
          <figure className="educ__formation-item">
            <figcaption className="formation__subtitle">Formal</figcaption>
            <h4 className="formation__name">Ingeniería de Sistemas</h4>
            <h5 className="formation__info">
              Instituto Universitario Politécnico “Santiago Mariño”
            </h5>
            <h6 className="formation__date">2023 - Actualmente</h6>
          </figure>
        </article>

        <article>
          <h2 className="formation__title section-title">Experiencia</h2>
          <figure>
            <p>
              Aunque cuento con experiencia laboral previa, colaboré de manera
              efectiva con mis colegas, demostrando habilidades en organización,
              flexibilidad y capacidad para liderar equipos y tomar decisiones
              bajo presión. Esta experiencia me permitió desarrollar
              competencias valiosas que estoy seguro/a de que serán de gran
              utilidad en futuras oportunidades.
            </p>
          </figure>
        </article>
      </div>
    </section>
  );
};

const Formation = MotionHoc(formationComponent);

export default Formation;
