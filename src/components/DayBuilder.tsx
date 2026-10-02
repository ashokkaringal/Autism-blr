import { useEffect, useState } from "react";
import { dayPage, routinePieces } from "../content";
import { useSite } from "../site";
import { Glyph } from "./Glyph";

type Piece = { key: string; id: string };

export function DayBuilder() {
  const { t } = useSite();
  const [strip, setStrip] = useState<Piece[]>([]);

  useEffect(() => {
    const clear = () => {
      document.body.dataset.printing = "";
    };
    window.addEventListener("afterprint", clear);
    return () => window.removeEventListener("afterprint", clear);
  }, []);

  function add(id: string) {
    setStrip((current) =>
      current.length >= 8 ? current : [...current, { key: `${id}-${Date.now()}`, id }],
    );
  }

  function remove(key: string) {
    setStrip((current) => current.filter((item) => item.key !== key));
  }

  function printStrip() {
    document.body.dataset.printing = "strip";
    window.print();
  }

  return (
    <div className="builder">
      <div className="palette" role="group" aria-label={t(dayPage.builderTitle)}>
        {routinePieces.map((piece) => (
          <button key={piece.id} type="button" className="chip" onClick={() => add(piece.id)}>
            <Glyph id={piece.id} />
            <span>{t(piece.label)}</span>
          </button>
        ))}
      </div>
      <div className="print-strip">
        <h3>{t(dayPage.printHeading)}</h3>
        {strip.length === 0 ? (
          <p className="empty">{t(dayPage.empty)}</p>
        ) : (
          <ol className="strip">
            {strip.map((item, index) => {
              const piece = routinePieces.find((entry) => entry.id === item.id);
              if (!piece) return null;
              return (
                <li key={item.key}>
                  <span className="strip-index">{index + 1}</span>
                  <Glyph id={item.id} />
                  <span>{t(piece.label)}</span>
                  <button type="button" onClick={() => remove(item.key)}>
                    {t(dayPage.remove)}
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </div>
      <div className="actions no-print">
        <button className="btn btn-primary" type="button" onClick={printStrip} disabled={strip.length === 0}>
          {t(dayPage.print)}
        </button>
        <button className="btn btn-ghost" type="button" onClick={() => setStrip([])} disabled={strip.length === 0}>
          {t(dayPage.clear)}
        </button>
      </div>
    </div>
  );
}
