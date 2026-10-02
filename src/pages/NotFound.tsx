import { Link } from "react-router-dom";
import { notFound, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function NotFound() {
  const { t } = useSite();
  usePageTitle(titles.missing);

  return (
    <div className="page wrap page-head">
      <h1>{t(titles.missing)}</h1>
      <p className="lede">{t(notFound.body)}</p>
      <Link className="btn btn-primary" to="/">
        {t(notFound.home)}
      </Link>
    </div>
  );
}
