import { Link } from "react-router-dom";
import { home, programs, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function Home() {
  const { t } = useSite();
  usePageTitle(titles.home);
  const preview = programs.slice(0, 4);

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">{t(home.eyebrow)}</p>
          <h1>{t(home.title)}</h1>
          <p className="lede">{t(home.lede)}</p>
          <div className="actions">
            <Link className="btn btn-primary" to="/visit">
              {t(home.book)}
            </Link>
            <Link className="btn btn-ghost" to="/admissions">
              {t(home.find)}
            </Link>
          </div>
          <ul className="facts">
            {home.facts.map((fact) => (
              <li key={fact.en}>{t(fact)}</li>
            ))}
          </ul>
        </div>
        <figure className="hero-media">
          <img src="/images/hero-classroom.jpg" alt={t(home.heroAlt)} />
          <figcaption>{t(home.heroCaption)}</figcaption>
        </figure>
      </section>

      <section className="plain wrap">
        <p className="eyebrow">{t(home.plainLabel)}</p>
        <p>{t(home.plain)}</p>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <h2>{t(home.programmesTitle)}</h2>
          <p>{t(home.programmesLede)}</p>
        </div>
        <div className="card-grid">
          {preview.map((program) => (
            <article key={program.id} className="card">
              <img src={program.image} alt="" />
              <p className="pill">{t(program.ages)}</p>
              <h3>
                <Link to={`/programmes#${program.id}`}>{t(program.title)}</Link>
              </h3>
              <p>{t(program.summary)}</p>
            </article>
          ))}
        </div>
        <p className="section-link">
          <Link to="/programmes">{t(home.seeProgrammes)}</Link>
        </p>
      </section>

      <section className="section wrap split">
        <figure className="frame">
          <img src="/images/garden.jpg" alt={t(home.seeAlt)} />
        </figure>
        <div>
          <h2>{t(home.seeTitle)}</h2>
          <ol className="see-list">
            {home.see.map((item) => (
              <li key={item.title.en}>
                <h3>{t(item.title)}</h3>
                <p>{t(item.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section wrap">
        <h2>{t(home.willNotTitle)}</h2>
        <ol className="willnot">
          {home.willNot.map((item) => (
            <li key={item.title.en}>
              <h3>{t(item.title)}</h3>
              <p>{t(item.body)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta wrap">
        <figure>
          <img src="/images/parent-circle.jpg" alt={t(home.parentAlt)} />
        </figure>
        <div>
          <h2>{t(home.ctaTitle)}</h2>
          <p>{t(home.ctaBody)}</p>
          <Link className="btn btn-primary" to="/visit">
            {t(home.book)}
          </Link>
        </div>
      </section>
    </>
  );
}
