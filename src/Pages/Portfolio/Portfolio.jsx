import MotionHoc from "../../Components/MotionHoc/MotionHoc";
import "./Portfolio.css";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import { Work } from "../../Data/WorkData";

const portfolioComponent = () => {
  return (
    <div className="portfolio__section page">
      <div className="portfolio__info">
        <h1 className="portfolio__section-title section-title">Portfolio</h1>
        <h2 className="portfolio__section-subtitle section-subtitle">
          ¡Mi galería de trofeos digitales!
        </h2>
      </div>
      <div className="portfolio__grid">
        {Work.map((project) => (
          <PortfolioCard
            key={project.id}
            image={project.image}
            title={project.name}
            tags={project.tags}
            description={project.description}
            demo={project.demo}
            code={project.github}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = MotionHoc(portfolioComponent);

export default Portfolio;
