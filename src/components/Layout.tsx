import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { school } from "../config";
import { footer, langs, nav, ui } from "../content";
import { useSite } from "../site";
import { Mark } from "./Mark";

const links = [
  { to: "/", label: nav.home, end: true },
  { to: "/programmes", label: nav.programmes, end: false },
  { to: "/day", label: nav.day, end: false },
  { to: "/admissions", label: nav.admissions, end: false },
  { to: "/families", label: nav.families, end: false },
  { to: "/campus", label: nav.campus, end: false },
] as const;

export function Layout() {
  const { t, lang, setLang, calm, setCalm } = useSite();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const reduce =
      calm || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, calm]);

  return (
    <>
      <a className="skip" href="#main">
        {t(ui.skip)}
      </a>
      {school.showSetupNote ? <p className="setup-note">{t(ui.setup)}</p> : null}
      <header className="header">
        <div className="header-bar wrap">
          <NavLink className="brand" to="/" aria-label={t(school.fullName)}>
            <Mark />
            <span>
              <strong>{t(school.name)}</strong>
              <small>{t(school.city)}</small>
            </span>
          </NavLink>
          <nav className={open ? "nav open" : "nav"} aria-label={t(ui.navLabel)}>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {t(link.label)}
              </NavLink>
            ))}
            <NavLink className="nav-cta" to="/visit">
              {t(nav.visit)}
            </NavLink>
          </nav>
          <div className="tools">
            <div className="langs" role="group" aria-label={t(ui.language)}>
              {langs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={lang === item.id}
                  aria-label={item.label}
                  onClick={() => setLang(item.id)}
                >
                  {item.short}
                </button>
              ))}
            </div>
            <button
              className="calm"
              type="button"
              aria-pressed={calm}
              onClick={() => setCalm(!calm)}
            >
              {t(ui.calm)}
            </button>
            <button
              className="menu"
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? t(ui.close) : t(ui.menu)}
            </button>
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          {calm ? t(ui.calmOn) : ""}
        </p>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-mark">{t(school.name)}</p>
            <p>{t(footer.blurb)}</p>
          </div>
          <div>
            <p className="eyebrow">{t(school.fullName)}</p>
            <p>{t(school.hours)}</p>
            <p>{t(school.city)}, Karnataka</p>
            {school.phone ? (
              <p>
                <a href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a>
              </p>
            ) : null}
            <p>
              <NavLink to="/visit">{t(footer.visit)}</NavLink>
            </p>
            <SocialLinks />
          </div>
        </div>
        <div className="wrap footer-base">
          <p>{t(footer.privacy)}</p>
        </div>
      </footer>
    </>
  );
}

function SocialLinks() {
  const { t } = useSite();
  const whatsapp = school.whatsapp.replace(/\D/g, "");
  const items = [
    { id: "instagram", href: school.social.instagram, label: "Instagram" },
    { id: "facebook", href: school.social.facebook, label: "Facebook" },
    { id: "youtube", href: school.social.youtube, label: "YouTube" },
    { id: "whatsapp", href: whatsapp ? `https://wa.me/${whatsapp}` : "", label: "WhatsApp" },
  ];
  const waiting = items.some((item) => !item.href);

  return (
    <div>
      <p className="eyebrow">{t(footer.follow)}</p>
      <div className="social">
        {items.map((item) =>
          item.href ? (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <SocialIcon id={item.id} />
            </a>
          ) : (
            <span key={item.id} title={item.label} aria-label={item.label}>
              <SocialIcon id={item.id} />
            </span>
          ),
        )}
      </div>
      {waiting ? <p>{t(footer.socialPending)}</p> : null}
    </div>
  );
}

function SocialIcon({ id }: { id: string }) {
  if (id === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
      </svg>
    );
  }
  if (id === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM10 15.5v-6.6l5.2 3.3-5.2 3.3z" />
      </svg>
    );
  }
  if (id === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2A8.7 8.7 0 0 0 4.7 16.3L3.5 21l4.8-1.2A8.7 8.7 0 1 0 12 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.2-1.3-.5-2.2-1-3.7-3.2-3.8-3.4-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.4l-.2.3c-.1.1-.2.2-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.3.1.5-.1.1-.1.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.8-.1 1.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5zm8 1.6H8A2.9 2.9 0 0 0 5.1 8v8A2.9 2.9 0 0 0 8 18.9h8a2.9 2.9 0 0 0 2.9-2.9V8A2.9 2.9 0 0 0 16 5.1zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.2 7.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
    </svg>
  );
}
