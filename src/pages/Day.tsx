import { useEffect, useState } from "react";
import { DayBuilder } from "../components/DayBuilder";
import { dayBlocks, dayPage, titles } from "../content";
import { usePageTitle, useSite } from "../site";
import { activeBlockId, bengaluruClock } from "../time";

export function Day() {
  const { t } = useSite();
  usePageTitle(titles.day);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const active = activeBlockId(now);

  return (
    <div className="page wrap">
      <header className="page-head">
        <p className="eyebrow">{t(dayPage.clockLabel)}</p>
        <h1>{t(titles.day)}</h1>
        <p className="lede">{t(dayPage.lede)}</p>
        <p className="clock">
          <time dateTime={now.toISOString()}>{bengaluruClock(now)}</time>
        </p>
        {active ? null : <p className="quiet-note">{t(dayPage.quietClock)}</p>}
      </header>

      <ol className="schedule">
        {dayBlocks.map((block) => (
          <li key={block.id} className={block.id === active ? "is-now" : undefined}>
            <time dateTime={block.time}>{block.time}</time>
            <div>
              {block.id === active ? <span className="now-pill">{t(dayPage.now)}</span> : null}
              <h2>{t(block.title)}</h2>
              <p>{t(block.body)}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="builder-section">
        <h2>{t(dayPage.builderTitle)}</h2>
        <p className="lede">{t(dayPage.builderLede)}</p>
        <DayBuilder />
      </section>
    </div>
  );
}
