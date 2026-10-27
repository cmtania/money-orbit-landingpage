import AppStoreButton from './AppStoreButton.jsx';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal, Title } from './Reveal.jsx';
import { Horizon, Meteors, Stars } from './Sky.jsx';
import { FAQ, PLANS, PRIVACY, SUPPORT_EMAIL } from '../data/site.js';

// A glowing lock with the app's orbit rings, then what stays on the iPhone.
export function Privacy() {
  return (
    <section className="privacy" id="privacy">
      <div className="wrap privacy__grid">
        <div className="privacy__visual" aria-hidden="true">
          <div className="orbit orbit--outer"><span className="orbit__moon" /></div>
          <div className="orbit orbit--inner"><span className="orbit__moon orbit__moon--lavender" /></div>
          <div className="privacy__core">
            <Icon name="lock" size={46} />
          </div>
        </div>
        <div className="privacy__copy">
          <Eyebrow>Private by design</Eyebrow>
          <Title className="section-title">Your finances stay on your iPhone</Title>
          <Reveal as="p" className="section-lede" delay={0.1}>
            No account to create, no bank to connect, nothing to sync. Money Orbit works for you, not for an
            ad network.
          </Reveal>
          <div className="privacy__list">
            {PRIVACY.map((p, i) => (
              <Reveal key={p.title} className="privacy__item" delay={0.1 + i * 0.07}>
                <span className="privacy__icon"><Icon name={p.icon} size={20} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pro() {
  const plan = (key, featured) => {
    const p = PLANS[key];
    return (
      <Reveal className={`plan ${featured ? 'plan--pro' : ''}`} delay={featured ? 0.12 : 0}>
        <div className="plan__head">
          <h3>{p.name}</h3>
          {featured && <span className="plan__badge"><Icon name="sparkle" size={12} /> Monthly or Lifetime</span>}
        </div>
        <p className="plan__tagline">{p.tagline}</p>
        <ul>
          {p.items.map((item) => (
            <li key={item}>
              <Icon name="check" size={14} weight="bold" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    );
  };
  return (
    <section className="pro" id="pro">
      <div className="wrap">
        <header className="centered-head">
          <Eyebrow>Free &amp; Pro</Eyebrow>
          <Title className="section-title">Start free. Go Pro when your orbit grows.</Title>
          <Reveal as="p" className="section-lede" delay={0.1}>
            If Pro ends, nothing you saved is lost. Prices are shown in the App Store for your country.
          </Reveal>
        </header>
        <div className="plans">
          {plan('free', false)}
          {plan('pro', true)}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq__wrap">
        <header className="centered-head">
          <Eyebrow>Questions</Eyebrow>
          <Title className="section-title">Good to know</Title>
        </header>
        <div className="faq__list">
          {FAQ.map(({ q, a }, i) => (
            <Reveal key={q} as="details" className="faq__item" delay={i * 0.04} y={16} blur={0}>
              <summary>
                <span>{q}</span>
                <span className="faq__plus" aria-hidden="true"><Icon name="plus" size={16} weight="bold" /></span>
              </summary>
              <p>{a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="closing">
      <Stars />
      <Meteors />
      <div className="wrap closing__content">
        <img className="closing__icon" src="/app-icon.png" alt="" width="96" height="96" />
        <Title className="hero__title closing__title">Put your money in orbit.</Title>
        <Reveal as="p" className="hero__lede" delay={0.1}>
          One calm view of everything you have, everything coming, and what’s safe to spend.
        </Reveal>
        <Reveal className="hero__actions" delay={0.2}>
          <AppStoreButton />
        </Reveal>
      </div>
      <Horizon className="horizon--closing" />
      <Footer />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <a className="footer__brand" href="/">
          <img src="/app-icon.png" alt="" width="26" height="26" />
          Money Orbit
        </a>
        <nav aria-label="Legal and support">
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        </nav>
        <small>© {new Date().getFullYear()} Money Orbit</small>
      </div>
    </footer>
  );
}
