import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { school, type Lang, type T } from "./config";

type SiteValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  calm: boolean;
  setCalm: (calm: boolean) => void;
  t: (value: T) => string;
};

const SiteContext = createContext<SiteValue | null>(null);

function readLang(): Lang {
  const saved = localStorage.getItem("sampige-lang");
  if (saved === "kn" || saved === "hi" || saved === "en") return saved;
  return "en";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [calm, setCalm] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLang(readLang());
    setCalm(localStorage.getItem("sampige-calm") === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("sampige-lang", lang);
    document.documentElement.lang = lang;
  }, [lang, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("sampige-calm", String(calm));
    document.documentElement.dataset.calm = calm ? "true" : "false";
  }, [calm, ready]);

  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      school.showSetupNote ? "noindex, nofollow" : "index, follow",
    );
  }, []);

  const value = useMemo<SiteValue>(
    () => ({
      lang,
      setLang,
      calm,
      setCalm,
      t: (copy) => copy[lang],
    }),
    [lang, calm],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export function usePageTitle(title: T) {
  const { lang, t } = useSite();
  useEffect(() => {
    document.title = `${t(title)} · ${t(school.fullName)}`;
  }, [lang, t, title]);
}
