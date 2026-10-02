import { approaches, fit, home, programs, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function Programmes() {
  const { t } = useSite();
  usePageTitle(titles.programmes);

  return (
    <div className="page wrap">
      <header className="page-head">
        <p className="eyebrow">{t(titles.programmes)}</p>
        <h1>{t(home.programmesTitle)}</h1>
        <p className="lede">{t(home.programmesLede)}</p>
      </header>

      <h2 className="approach-title">{t(approaches.title)}</h2>
      <p className="lede">{t(approaches.lede)}</p>
      <div className="approach-grid">
        {approaches.items.map((item) => (
          <article key={item.title.en}>
            <h2>{t(item.title)}</h2>
            <p>{t(item.body)}</p>
          </article>
        ))}
      </div>

      {programs.map((program, index) => (
        <article
          key={program.id}
          id={program.id}
          className={index % 2 === 1 ? "split split-reverse program" : "split program"}
        >
          <figure className="frame">
            <img src={program.image} alt={t(program.alt)} />
          </figure>
          <div>
            <p className="pill">{t(program.ages)}</p>
            <h2>{t(program.title)}</h2>
            <p>{t(program.summary)}</p>
            <ul>
              {program.points.map((point) => (
                <li key={point.en}>{t(point)}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <aside className="fit">
        <h2>{t(fit.title)}</h2>
        <p>{t(fit.body)}</p>
      </aside>
    </div>
  );
}
