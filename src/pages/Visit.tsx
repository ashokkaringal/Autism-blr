import { useEffect, useState } from "react";
import { school } from "../config";
import { EnquiryForm } from "../components/EnquiryForm";
import { admissions, titles, visit } from "../content";
import { usePageTitle, useSite } from "../site";

const storageKey = "sampige-visit-prep";

export function Visit() {
  const { t } = useSite();
  usePageTitle(titles.visit);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as unknown;
      if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
        setChecked(parsed);
      }
    } catch {
      setChecked([]);
    }
  }, []);

  function toggle(id: string) {
    setChecked((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className="page wrap visit-layout">
      <header className="page-head">
        <p className="eyebrow">{t(school.city)}</p>
        <h1>{t(titles.visit)}</h1>
        <p className="lede">{t(visit.lede)}</p>
      </header>

      <div className="visit-grid">
        <section>
          <h2>{t(visit.expectTitle)}</h2>
          <ol className="see-list">
            {visit.expect.map((item) => (
              <li key={item.en}>
                <p>{t(item)}</p>
              </li>
            ))}
          </ol>
          <h2>{t(visit.addressTitle)}</h2>
          {school.address ? (
            <p>
              <strong>{t(visit.addressSet)}. </strong>
              {school.address}
            </p>
          ) : (
            <p>{t(visit.addressBody)}</p>
          )}
          <p>{t(school.hours)}</p>
          {school.phone ? (
            <p>
              <a href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a>
            </p>
          ) : (
            <p className="quiet-note">{t(visit.phoneSoon)}</p>
          )}

          <h2>{t(visit.prepTitle)}</h2>
          <p>{t(visit.prepLede)}</p>
          <ul className="prep">
            {visit.prep.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked.includes(item.id)}
                    onChange={() => toggle(item.id)}
                  />
                  {t(item.label)}
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section className="panel">
          <h2>{t(admissions.formTitle)}</h2>
          <EnquiryForm />
        </section>
      </div>
    </div>
  );
}
