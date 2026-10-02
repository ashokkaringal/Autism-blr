import { useState } from "react";
import { EnquiryForm } from "../components/EnquiryForm";
import { Finder } from "../components/Finder";
import { admissions, titles } from "../content";
import { usePageTitle, useSite } from "../site";

export function Admissions() {
  const { t } = useSite();
  usePageTitle(titles.admissions);
  const [age, setAge] = useState("");

  return (
    <div className="page wrap">
      <header className="page-head">
        <p className="eyebrow">{t(titles.admissions)}</p>
        <h1>{t(admissions.stepsTitle)}</h1>
        <p className="lede">{t(admissions.lede)}</p>
      </header>
      <ol className="steps">
        {admissions.steps.map((step, index) => (
          <li key={step.title.en}>
            <span>0{index + 1}</span>
            <h2>{t(step.title)}</h2>
            <p>{t(step.body)}</p>
          </li>
        ))}
      </ol>

      <section className="panel">
        <h2>{t(admissions.finderTitle)}</h2>
        <p>{t(admissions.finderLede)}</p>
        <Finder onAge={setAge} />
      </section>

      <section className="panel">
        <h2>{t(admissions.formTitle)}</h2>
        <EnquiryForm presetAge={age} />
      </section>
    </div>
  );
}
