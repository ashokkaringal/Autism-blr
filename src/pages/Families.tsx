import { useState } from "react";
import { families, home, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function Families() {
  const { t } = useSite();
  usePageTitle(titles.families);
  const [open, setOpen] = useState(0);

  return (
    <div className="page wrap">
      <header className="page-head">
        <p className="eyebrow">{t(titles.families)}</p>
        <h1>{t(families.weeksTitle)}</h1>
        <p className="lede">{t(families.lede)}</p>
      </header>

      <div className="accordion">
        {families.weeks.map((week, index) => {
          const expanded = open === index;
          return (
            <div key={week.title.en} className={expanded ? "item open" : "item"}>
              <h2>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {t(week.title)}
                </button>
              </h2>
              {expanded ? <p>{t(week.body)}</p> : null}
            </div>
          );
        })}
      </div>

      <section className="section-tight">
        <h2>{t(families.fundsTitle)}</h2>
        <p className="lede">{t(families.fundsLede)}</p>
        <div className="card-grid">
          {families.funds.map((fund) => (
            <article key={fund.title.en} className="card card-plain">
              <h3>{t(fund.title)}</h3>
              <p>{t(fund.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split sibling">
        <figure className="frame">
          <img
            src="/images/parent-circle.jpg"
            alt={t(home.parentAlt)}
          />
        </figure>
        <div>
          <h2>{t(families.siblingTitle)}</h2>
          <p>{t(families.siblingBody)}</p>
          <h2>{t(families.langTitle)}</h2>
          <p>{t(families.langBody)}</p>
        </div>
      </section>
    </div>
  );
}
