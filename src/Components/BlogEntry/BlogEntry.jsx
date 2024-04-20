import "./BlogEntry.css";
import Button from "../Button/Button";

const BlogEntry = ({ title, date, img, content, author }) => {
  return (
    <section className="blog__section section">
      <div className="blog__section-card">
        <div className="blog__card-header">
          <img src={img} alt="article-img" />
        </div>
        <div className="blog__card-content">
          <a className="blog__card-title" href="#">
            {title}
          </a>
          <p>{content}</p>
        </div>
        <div className="blog__card-footer">
          <div className="blog__card-author">
            <p>{author}</p>
            <small>{date}</small>
          </div>

          <a href="">
            <Button text="Ver mas" />
          </a>
        </div>
      </div>
    </section>
  ); 
};

export default BlogEntry;
