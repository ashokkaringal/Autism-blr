import { useState } from "react";
import { Link } from "react-router-dom";
import { admissions, ages, hopes, programs, recommend } from "../content";
import { useSite } from "../site";

type Props = {
  onAge: (age: string) => void;
};

export function Finder({ onAge }: Props) {
  const { t } = useSite();
  const [age, setAge] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string[] | null>(null);
  const [error, setError] = useState(false);

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function show() {
    if (!age) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);
    onAge(age);
    setResult(recommend(age, selected));
  }

  const chosen = (result ?? [])
    .map((id) => programs.find((program) => program.id === id))
    .filter((program) => program !== undefined);

  return (
    <div className="finder">
      <fieldset>
        <legend>{t(admissions.ageLegend)}</legend>
        <div className="age-row">
          {ages.map((item) => (
            <label key={item.id} className={age === item.id ? "choice on" : "choice"}>
              <input
                type="radio"
                name="age"
                value={item.id}
                checked={age === item.id}
                onChange={() => {
                  setAge(item.id);
                  setError(false);
                }}
              />
              <span>{t(item.label)}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>{t(admissions.hopeLegend)}</legend>
        <div className="hope-row">
          {hopes.map((item) => (
            <label key={item.id} className={selected.includes(item.id) ? "choice on" : "choice"}>
              <input
                type="checkbox"
                checked={selected.includes(item.id)}
                onChange={() => toggle(item.id)}
              />
              <span>{t(item.label)}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button className="btn btn-primary" type="button" onClick={show}>
        {t(admissions.show)}
      </button>
      {error ? (
        <p className="form-error" role="alert">
          {t(admissions.pickAge)}
        </p>
      ) : null}
      {chosen.length > 0 ? (
        <div className="finder-result" aria-live="polite">
          <h3>{t(admissions.resultTitle)}</h3>
          <ol>
            {chosen.map((program, index) => (
              <li key={program.id}>
                <Link to={`/programmes#${program.id}`}>
                  {index === 0 ? null : <span>{t(admissions.also)} · </span>}
                  {t(program.title)}
                </Link>
                <small>{t(program.ages)}</small>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
