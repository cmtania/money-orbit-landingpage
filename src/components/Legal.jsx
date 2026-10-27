import { Footer } from './Sections.jsx';
import { FAQ, SUPPORT_EMAIL } from '../data/site.js';

const UPDATED = 'October 27, 2026';

function Document({ title, lede, children }) {
  return (
    <article className="legal__doc wrap">
      <header className="legal__head">
        <h1>{title}</h1>
        {lede && <p className="legal__lede">{lede}</p>}
        <p className="legal__updated">Last updated {UPDATED}</p>
      </header>
      <div className="legal__copy">{children}</div>
    </article>
  );
}

// Matches the app's own Privacy screen (Settings → Privacy) and what the code actually does.
function PrivacyPolicy() {
  return (
    <Document title="Privacy Policy" lede="Money Orbit is built so your finances stay with you.">
      <h2>What Money Orbit stores</h2>
      <p>Your accounts, balances, entries, recurring bills and income, goals, purchase plans, settings and any receipt photos you choose to keep are stored on your iPhone. Money Orbit has no sign-in, no Money Orbit server, no cloud sync, and no analytics, advertising or tracking. We cannot see your data.</p>

      <h2>Receipts, the camera and Apple Intelligence</h2>
      <p>When you scan a receipt, the camera or the photo you pick is read on your iPhone with Apple’s on-device text recognition. When you type an entry, it is read on your iPhone by Money Orbit’s own reader and, where available, by Apple Intelligence running on the device. Receipt photos and financial text are not uploaded for processing. Keeping a receipt photo with an entry is optional.</p>

      <h2>Exchange rates</h2>
      <p>If an account uses a currency other than your base currency, Money Orbit downloads public exchange-rate tables: European Central Bank reference rates via the Frankfurter service, and the open currency-api dataset for other currencies. The whole table is downloaded. Your account names, balances and transactions are not sent. These services, like any website, can see the network request itself, such as your IP address.</p>

      <h2>Purchases</h2>
      <p>Money Orbit connects to the App Store to show plans, make purchases and restore Pro. Apple processes payments; Money Orbit receives only the information needed to confirm your access to Pro and never sees your payment details.</p>

      <h2>App Lock</h2>
      <p>If you turn on App Lock, Money Orbit asks iOS to confirm it’s you with Face ID, Touch ID or your passcode. Biometric data never leaves Apple’s secure systems and is never available to Money Orbit.</p>

      <h2>Your choices</h2>
      <p>In Settings you can export your entries as a CSV file, save a backup file of your data (receipt photos are not included), and delete all data from your iPhone. You choose where exported and backup files go; once they leave the app, they are handled by the place you save or send them. Deleting the app also removes its data from your iPhone, but does not cancel a subscription.</p>

      <h2>Children</h2>
      <p>Money Orbit is not directed at children and does not knowingly collect information from anyone.</p>

      <h2>Support and changes</h2>
      <p>If you email support, we use your message and address only to reply. If this policy changes, the updated version will be posted here with a new date. Questions: <a href={`mailto:${SUPPORT_EMAIL}?subject=Money%20Orbit%20Privacy`}>{SUPPORT_EMAIL}</a>.</p>
    </Document>
  );
}

function Terms() {
  return (
    <Document title="Terms of Use" lede="The short version: use Money Orbit to understand your money, and keep your own judgment.">
      <h2>Using Money Orbit</h2>
      <p>Money Orbit is a personal-finance app for iPhone. By using the app or this website you agree to these terms and to Apple’s Licensed Application End User License Agreement, which also applies to apps from the App Store.</p>

      <h2>Not financial advice</h2>
      <p>Balances, forecasts, safe-to-spend amounts, insights and exchange-rate conversions are calculated from what you enter and from public reference rates. They are estimates to help you plan, not financial, tax, investment or legal advice, and they may be incomplete or out of date. Check important figures with your bank or a qualified professional before relying on them.</p>

      <h2>Your data</h2>
      <p>Your data is stored on your device and you are responsible for keeping it safe, including with the export and backup tools in Settings. Deleting the app or its data cannot be undone by us, because we never receive a copy.</p>

      <h2>Free and Pro</h2>
      <p>Money Orbit is free to use with limits on some features. Money Orbit Pro is optional and is offered as an auto-renewing Monthly subscription or a one-time Lifetime purchase. Prices are shown in the App Store before you buy and may vary by country. A subscription renews unless you cancel it in your Apple Account settings at least 24 hours before the end of the period; deleting the app does not cancel it. Apple handles payments, refunds and subscription management. Use Restore purchases in Settings to recover Pro with the same Apple Account. If Pro ends, nothing you saved is removed; only adding beyond the free limits is paused.</p>

      <h2>The app and this website</h2>
      <p>Money Orbit, its name, design and software are owned by its developer. Features may change over time. The app and this website are provided as available; to the extent the law allows, the developer is not liable for indirect losses or for decisions made from the app’s estimates. Nothing here limits rights you have that cannot be excluded by law.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${SUPPORT_EMAIL}?subject=Money%20Orbit%20Terms`}>{SUPPORT_EMAIL}</a>.</p>
    </Document>
  );
}

const MORE_FAQ = [
  {
    q: 'How do I restore Pro on a new iPhone?',
    a: 'Open Settings in Money Orbit and tap Restore purchases while signed in with the same Apple Account. To move your data, tap Back up in Settings on the old iPhone, then Restore from backup in Settings on the new one.',
  },
  {
    q: 'How do I cancel a Monthly subscription?',
    a: 'In the Settings app, tap your name, then Subscriptions, then Money Orbit. Deleting the app does not cancel it. Lifetime is a one-time purchase and never renews.',
  },
  {
    q: 'A scan or typed entry read something wrong. What now?',
    a: 'Every reading is a draft: Money Orbit marks anything it isn’t sure about, and nothing is saved until you check it and tap Save. Fix the field and save as usual.',
  },
];

function Support() {
  return (
    <Document title="Support & FAQ" lede="Quick answers about Money Orbit. Still stuck? Email us and we’ll help.">
      <div className="faq__list faq__list--legal">
        {[...FAQ, ...MORE_FAQ].map(({ q, a }) => (
          <details className="faq__item" key={q}>
            <summary>
              <span>{q}</span>
              <span className="faq__plus" aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <a className="legal__contact" href={`mailto:${SUPPORT_EMAIL}?subject=Money%20Orbit%20Support`}>
        <span>Email support</span>
        <strong>{SUPPORT_EMAIL}</strong>
      </a>
    </Document>
  );
}

export function LegalPage({ page }) {
  const views = { privacy: PrivacyPolicy, terms: Terms, support: Support };
  const View = views[page] ?? Support;
  return (
    <div className="legal-page">
      <header className="nav nav--solid nav--static">
        <a className="nav__brand" href="/">
          <img src="/app-icon.png" alt="" width="34" height="34" />
          <span>Money Orbit</span>
        </a>
        <nav className="nav__links nav__links--always" aria-label="Site">
          <a href="/">Home</a>
          <a href="/support" className={page === 'support' ? 'is-active' : ''}>Support</a>
          <a href="/privacy" className={page === 'privacy' ? 'is-active' : ''}>Privacy</a>
          <a href="/terms" className={page === 'terms' ? 'is-active' : ''}>Terms</a>
        </nav>
      </header>
      <main className="legal">
        <View />
      </main>
      <Footer />
    </div>
  );
}
