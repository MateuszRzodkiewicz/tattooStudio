import Newsletter from "../../../Newsletter/Newsletter";
import "../../../../../Css/HomeSection.css";
import { articles } from "../../../../constants/articles";

function Article() {
  return (
    <section className="sectionArticle">
      {articles.map((article) => (
        <article key={article.title}>
          <h1>{article.title}</h1>
          <p>{article.articleText}</p>
        </article>
      ))}
    </section>
  );
}

function HomeSection() {
  return (
    <div id="article" className="article">
      <Article />
      <Newsletter />
      <Article />
    </div>
  );
}

export default HomeSection;
