import { motion } from 'motion/react';
import Icon from './Icon.jsx';
import { COLORS, WALLET } from '../data/site.js';

// An iPhone outline with the Dynamic Island and a status bar; the screen is the children.
export function Phone({ children, className = '', label }) {
  return (
    <div className={`phone ${className}`} role="img" aria-label={label}>
      <div className="phone__screen">
        <div className="phone__status" aria-hidden="true">
          <span>9:41</span>
          <span className="phone__island" />
          <span className="phone__signal">
            <i />
            <i />
            <i />
            <b />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------------------------
// Wallet: the Accounts screen's cards in their pocket.

// The total matches the Timeline's starting balance (₱209,630.50 in pesos + €630 at about ₱66).
export function WalletStack({ accounts = WALLET, step = 60, cardHeight = 166, total = '≈ ₱251,210', className = '' }) {
  const pocketTop = (accounts.length - 1) * step + 62;
  return (
    <div className={`wallet ${className}`} style={{ height: pocketTop + 108 }}>
      <div className="wallet__glow" />
      {accounts.map((a, i) => (
        <motion.div
          key={a.name}
          className="wcard"
          style={{
            top: i * step,
            height: cardHeight,
            zIndex: i,
            background: `linear-gradient(135deg, ${a.colors[0]}, ${a.colors[1]})`,
          }}
          initial={{ y: pocketTop - i * step + 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ type: 'spring', duration: 0.9, bounce: 0.22, delay: 0.15 + (accounts.length - 1 - i) * 0.08 }}
        >
          <span className="wcard__tile">
            <Icon name={a.icon} size={13} />
          </span>
          <span className="wcard__name">
            <strong>{a.name}</strong>
            <small>{a.type}</small>
          </span>
          <span className="wcard__balance">
            <strong>{a.balance}</strong>
            <small>{a.currency}</small>
          </span>
          <span className="wcard__rings" />
        </motion.div>
      ))}
      <div className="wallet__pocket" style={{ top: pocketTop, zIndex: accounts.length }}>
        {/* High on the left where the total sits, dipping lower on the right (WalletPocketShape). */}
        <svg className="wallet__pocket-shape" viewBox="0 0 300 108" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="pocket-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1C2A45" />
              <stop offset="1" stopColor="#152235" />
            </linearGradient>
          </defs>
          <path
            d="M0 18 Q0 0 18 0 L126 0 C150 0 150 22 174 22 L282 22 Q300 22 300 40 L300 90 Q300 108 282 108 L18 108 Q0 108 0 90 Z"
            fill="url(#pocket-fill)"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <small>TOTAL BALANCE · PHP</small>
        <strong>{total}</strong>
      </div>
    </div>
  );
}

function WalletScreen() {
  return (
    <div className="screen screen--wallet">
      <div className="screen__head">
        <h3>Accounts</h3>
        <span className="glass-pill">
          <Icon name="receipt" size={10} /> View as list
        </span>
      </div>
      <WalletStack />
      <span className="mint-button">
        <Icon name="plus" size={11} weight="bold" /> Create account
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------------------------
// Timeline: the 30-day forecast with every bill, payday and plan marked.

// Balance (₱ thousands) before day 0 and the dated events after it.
const FORECAST_START = 251.2;
export const FORECAST_EVENTS = [
  { day: 2, amount: -18, label: 'Rent', kind: 'bill' },
  { day: 6, amount: -4.2, label: 'Electricity', kind: 'bill' },
  { day: 10, amount: -12.5, label: 'Credit card', kind: 'bill' },
  { day: 15, amount: 42, label: 'Salary', kind: 'income' },
  { day: 22, amount: -1.7, label: 'Internet', kind: 'bill' },
  { day: 26, amount: -24, label: 'New laptop', kind: 'plan' },
  { day: 30, amount: 42, label: 'Salary', kind: 'income' },
];

export function forecastPoints(days = 30) {
  let balance = FORECAST_START;
  return Array.from({ length: days + 1 }, (_, day) => {
    FORECAST_EVENTS.filter((e) => e.day === day).forEach((e) => (balance += e.amount));
    return { day, balance };
  });
}

const KIND_COLOR = { bill: COLORS.coral, income: COLORS.mint, plan: COLORS.lavender };

// Drawn as a soft wave: each day is averaged with its neighbours (display only), and the line
// curves smoothly from day to day.
function smoothed(points, reach = 2) {
  return points.map((p, i) => {
    const near = points.slice(Math.max(0, i - reach), i + reach + 1);
    return { day: p.day, balance: near.reduce((sum, n) => sum + n.balance, 0) / near.length };
  });
}

export function ForecastChart({ width = 260, height = 110, className = '', markers = true, id = 'f' }) {
  const points = smoothed(forecastPoints());
  const values = points.map((p) => p.balance);
  const low = Math.min(...values);
  const high = Math.max(...values);
  const pad = (high - low) * 0.18;
  const x = (day) => (day / 30) * width;
  const y = (v) => height - ((v - (low - pad)) / (high + pad - (low - pad))) * height;
  let line = `M ${x(0)} ${y(points[0].balance)}`;
  for (let i = 1; i < points.length; i += 1) {
    const [a, b] = [points[i - 1], points[i]];
    const mid = (x(a.day) + x(b.day)) / 2;
    line += ` C ${mid} ${y(a.balance)} ${mid} ${y(b.balance)} ${x(b.day)} ${y(b.balance)}`;
  }
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg className={`chart ${className}`} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-area`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={COLORS.mint} stopOpacity="0.32" />
          <stop offset="1" stopColor={COLORS.mint} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${id}-area)`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={COLORS.mint}
        strokeWidth="2.4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
      />
      {markers &&
        FORECAST_EVENTS.filter((e) => e.day < 30).map((e, i) => {
          const point = points[e.day];
          const color = KIND_COLOR[e.kind];
          return (
            <motion.g
              key={`${e.day}-${e.label}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
            >
              <line x1={x(e.day)} x2={x(e.day)} y1={0} y2={height} stroke={color} strokeOpacity="0.45" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
              {e.kind === 'plan' ? (
                <rect x={x(e.day) - 4} y={y(point.balance) - 4} width="8" height="8" fill={color} transform={`rotate(45 ${x(e.day)} ${y(point.balance)})`} />
              ) : (
                <circle cx={x(e.day)} cy={y(point.balance)} r="4" fill={color} />
              )}
            </motion.g>
          );
        })}
    </svg>
  );
}

function TimelineScreen() {
  return (
    <div className="screen screen--timeline">
      <div className="screen__head">
        <div>
          <h3>Timeline</h3>
          <small>Next 30 days · forecast</small>
        </div>
        <span className="glass-pill glass-pill--lavender">Planning to buy?</span>
      </div>
      <div className="scrubber" aria-hidden="true">
        <span className="scrubber__labels">
          <i>TODAY</i>
          <i>NOV 1</i>
          <i>NOV 15</i>
          <i>NOV 26</i>
        </span>
        <span className="scrubber__track">
          <span className="scrubber__fill" />
          <span className="scrubber__thumb" />
        </span>
      </div>
      <div className="mini-card">
        <small>Sun, Nov 15</small>
        <strong className="mini-card__balance">₱258,500.00</strong>
        <span className="chip chip--mint">↑ ₱7,300 vs. today</span>
        <ForecastChart id="phone" width={240} height={96} />
        <div className="chips">
          <span className="chip chip--mint">Salary +₱42,000</span>
          <span className="chip chip--amber">Lowest ₱216,500 · Nov 10</span>
        </div>
      </div>
      <div className="range">
        <span>7 days</span>
        <span className="is-on">30 days</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------------------------
// Add an entry: one sentence becomes an expense.

function EntryScreen() {
  return (
    <div className="screen screen--entry">
      <div className="screen__head">
        <h3>Add an entry</h3>
        <span className="close-dot">
          <Icon name="x" size={9} weight="bold" />
        </span>
      </div>
      <div className="modes">
        <span className="is-on">
          <Icon name="text" size={10} /> Type
        </span>
        <span>
          <Icon name="receipt" size={10} /> Scan
        </span>
        <span>
          <Icon name="plus" size={10} weight="bold" /> Manual
        </span>
      </div>
      <div className="sentence">
        ₱850 dinner with Anna, split equally<span className="caret" />
      </div>
      <p className="ai-note">
        <Icon name="sparkle" size={10} /> Apple Intelligence · on this iPhone
      </p>
      <small className="screen__label">Here’s what I got</small>
      <div className="chips chips--wrap">
        <span className="chip chip--coral">
          <Icon name="dining" size={10} /> Dining
        </span>
        <span className="chip chip--lavender">
          <Icon name="split" size={10} /> Your half ₱425
        </span>
        <span className="chip">
          <Icon name="calendar" size={10} /> Today
        </span>
        <span className="chip">
          <Icon name="bank" size={10} /> Everyday
        </span>
      </div>
      <span className="mint-button mint-button--bottom">Review entry</span>
    </div>
  );
}

export function WalletPhone(props) {
  return (
    <Phone label="Money Orbit's Accounts screen: four account cards in a wallet with the total balance" {...props}>
      <WalletScreen />
    </Phone>
  );
}

export function TimelinePhone(props) {
  return (
    <Phone label="Money Orbit's Timeline: a 30-day balance forecast with bills, salary and a planned purchase" {...props}>
      <TimelineScreen />
    </Phone>
  );
}

export function EntryPhone(props) {
  return (
    <Phone label="Adding an entry by typing one sentence; Money Orbit turns it into a split dining expense" {...props}>
      <EntryScreen />
    </Phone>
  );
}
