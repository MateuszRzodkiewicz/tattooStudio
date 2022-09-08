import Newsletter from "../../../Newsletter/Newsletter";
import "../../../../../Css/HomeSection.css";
import { articles } from "../../../../constants/articles";

function HomeSection() {
  const article = articles.map((article) => (
    <article key={article.title}>
      <h1>{article.title}</h1>
      <p>{article.articleTekst}</p>
    </article>
  ));
  return (
    <div id="article" className="article">
      <section className="sectionArticle">{article}</section>
      <Newsletter />
      <section className="sectionArticle">{article}</section>
    </div>
  );
}

export default HomeSection;
