import { useEffect, useState, type FormEvent } from "react";
import { school } from "../config";
import { ages, formCopy } from "../content";
import { useSite } from "../site";

const homeLanguages = ["ಕನ್ನಡ", "English", "हिन्दी", "தமிழ்", "తెలుగు", "اردو"];

type Props = {
  presetAge?: string;
};

export function EnquiryForm({ presetAge = "" }: Props) {
  const { t, lang } = useSite();
  const [parent, setParent] = useState("");
  const [phone, setPhone] = useState("");
  const [child, setChild] = useState("");
  const [age, setAge] = useState(presetAge);
  const [language, setLanguage] = useState("ಕನ್ನಡ");
  const [hope, setHope] = useState("");
  const [slot, setSlot] = useState("weekday-am");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (presetAge) setAge(presetAge);
  }, [presetAge]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setCopied(false);
    if (!parent.trim()) {
      setError(t(formCopy.needName));
      return;
    }
    const digits = phone.replace(/\D/g, "");
    const local = digits.length > 10 ? digits.slice(-10) : digits;
    if (local.length !== 10) {
      setError(t(formCopy.needPhone));
      return;
    }
    if (!age) {
      setError(t(formCopy.needAge));
      return;
    }
    const ageLabel = ages.find((item) => item.id === age);
    const slotLabel = formCopy.slotOptions.find((item) => item.id === slot);
    const lines = [
      t(school.fullName),
      "",
      `${t(formCopy.parent)}: ${parent.trim()}`,
      `${t(formCopy.phone)}: ${local}`,
      `${t(formCopy.child)}: ${child.trim() || "—"}`,
      `${t(formCopy.age)}: ${ageLabel ? t(ageLabel.label) : age}`,
      `${t(formCopy.language)}: ${language}`,
      `${t(formCopy.hope)}: ${hope.trim() || "—"}`,
      `${t(formCopy.slot)}: ${slotLabel ? t(slotLabel.label) : slot}`,
    ];
    setError("");
    setMessage(lines.join("\n"));
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function openWhatsApp() {
    const digits = school.whatsapp.replace(/\D/g, "");
    const url = digits
      ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (message) {
    const mail = school.email
      ? `mailto:${school.email}?subject=${encodeURIComponent(t(formCopy.subject))}&body=${encodeURIComponent(message)}`
      : "";
    return (
      <div className="success" aria-live="polite">
        <h3>{t(formCopy.successTitle)}</h3>
        <p>{t(formCopy.successBody)}</p>
        <pre lang={lang}>{message}</pre>
        <div className="actions">
          <button className="btn btn-primary" type="button" onClick={copy}>
            {copied ? t(formCopy.copied) : t(formCopy.copy)}
          </button>
          <button className="btn btn-ghost" type="button" onClick={openWhatsApp}>
            {t(formCopy.whatsapp)}
          </button>
          {mail ? (
            <a className="btn btn-ghost" href={mail}>
              {t(formCopy.email)}
            </a>
          ) : null}
        </div>
        <button
          className="text-btn"
          type="button"
          onClick={() => {
            setMessage("");
            setCopied(false);
          }}
        >
          {t(formCopy.another)}
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          {t(formCopy.parent)}
          <input
            value={parent}
            onChange={(event) => setParent(event.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label>
          {t(formCopy.phone)}
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label>
          {t(formCopy.child)}{" "}
          <span className="optional">({t(formCopy.optional)})</span>
          <input value={child} onChange={(event) => setChild(event.target.value)} />
        </label>
        <label>
          {t(formCopy.age)}
          <select value={age} onChange={(event) => setAge(event.target.value)} required>
            <option value="">{t(formCopy.choose)}</option>
            {ages.map((item) => (
              <option key={item.id} value={item.id}>
                {t(item.label)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t(formCopy.language)}
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            {homeLanguages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t(formCopy.slot)}
          <select value={slot} onChange={(event) => setSlot(event.target.value)}>
            {formCopy.slotOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {t(item.label)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        {t(formCopy.hope)}
        <textarea
          rows={4}
          value={hope}
          onChange={(event) => setHope(event.target.value)}
        />
      </label>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-primary" type="submit">
        {t(formCopy.submit)}
      </button>
    </form>
  );
}
