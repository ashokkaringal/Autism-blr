import { campus, gallery, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function Campus() {
  const { t } = useSite();
  usePageTitle(titles.campus);

  return (
    <div className="page wrap">
      <header className="page-head">
        <p className="eyebrow">{t(titles.campus)}</p>
        <h1>{t(campus.roomsTitle)}</h1>
        <p className="lede">{t(campus.lede)}</p>
      </header>

      <div className="gallery">
        {gallery.map((item) => (
          <figure key={item.src} className={item.wide ? "wide" : undefined}>
            <img src={item.src} alt={t(item.alt)} />
            <figcaption>{t(item.caption)}</figcaption>
          </figure>
        ))}
      </div>

      <div className="room-grid">
        {campus.rooms.map((room) => (
          <article key={room.title.en}>
            <h2>{t(room.title)}</h2>
            <p>{t(room.body)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
