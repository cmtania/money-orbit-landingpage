import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Icon from './Icon.jsx';
import { ForecastChart, WalletStack } from './Phones.jsx';
import { Eyebrow, Reveal, Title } from './Reveal.jsx';
import { COLORS, FEATURES } from '../data/site.js';

// A bento of what Money Orbit does, each card with a small live picture of the feature.
export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <header className="features__head">
          <Eyebrow>Features</Eyebrow>
          <Title className="section-title">Everything your money does, in one place</Title>
        </header>
        <div className="bento">
          {FEATURES.map((f, i) => (
            <Reveal key={f.id} className={`tile tile--${f.size} tile--${f.id}`} delay={(i % 3) * 0.08}>
              <div className="tile__art" aria-hidden="true">
                <Art id={f.id} />
              </div>
              <div className="tile__copy">
                <p className="tile__eyebrow">{f.eyebrow}</p>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Art({ id }) {
  switch (id) {
    case 'wallet':
      return <WalletStack className="wallet--tile" step={50} cardHeight={150} />;
    case 'forecast':
      return <ForecastArt />;
    case 'entry':
      return <TypingArt />;
    case 'safe':
      return <SafeArt />;
    case 'currencies':
      return <CurrencyArt />;
    case 'insights':
      return <DonutArt />;
    case 'whatif':
      return <WhatIfArt />;
    case 'goals':
      return <GoalArt />;
    default:
      return null;
  }
}

function ForecastArt() {
  return (
    <div className="forecast-art">
      <div className="forecast-art__legend">
        <span><i style={{ background: COLORS.coral }} />Bills</span>
        <span><i style={{ background: COLORS.mint }} />Income</span>
        <span><i className="diamond" style={{ background: COLORS.lavender }} />Plans</span>
      </div>
      <ForecastChart id="tile" width={300} height={170} />
      <div className="forecast-art__axis">
        <span>Today</span>
        <span>Nov 8</span>
        <span>Nov 16</span>
        <span>Nov 24</span>
      </div>
    </div>
  );
}

const SENTENCE = '₱850 dinner with Anna, split equally';

// Types the sentence once it's in view, then shows what Money Orbit read from it.
function TypingArt() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? SENTENCE.length : 0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started || reduce || count >= SENTENCE.length) return undefined;
    const timer = setTimeout(() => setCount((c) => c + 1), 45);
    return () => clearTimeout(timer);
  }, [started, count, reduce]);
  const done = count >= SENTENCE.length;
  return (
    <motion.div className="typing-art" onViewportEnter={() => setStarted(true)} viewport={{ once: true }}>
      <div className="sentence sentence--big">
        {SENTENCE.slice(0, count)}
        <span className="caret" />
      </div>
      <div className={`chips chips--wrap typing-art__chips ${done ? 'is-done' : ''}`}>
        <span className="chip chip--coral"><Icon name="dining" size={12} /> Dining</span>
        <span className="chip chip--lavender"><Icon name="split" size={12} /> Your half ₱425</span>
        <span className="chip"><Icon name="sparkle" size={12} /> On this iPhone</span>
      </div>
    </motion.div>
  );
}

function SafeArt() {
  return (
    <div className="safe-art">
      <small>Safe to spend</small>
      <strong>₱12,480</strong>
      <span className="safe-art__until">until payday · Nov 15</span>
      <div className="safe-art__bar">
        <motion.span
          initial={{ width: '0%' }}
          whileInView={{ width: '64%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>
      <div className="safe-art__rows">
        <span>Bills before payday <b>₱34,700</b></span>
        <span>Protected <b>₱20,000</b></span>
      </div>
    </div>
  );
}

const CURRENCIES = ['₱ PHP', '$ USD', '€ EUR', '¥ JPY', '£ GBP', '₩ KRW', 'S$ SGD', '฿ THB', '₹ INR', 'A$ AUD', 'د.إ AED', 'C$ CAD'];

function CurrencyArt() {
  return (
    <div className="currency-art">
      {[0, 1].map((row) => (
        <div key={row} className={`marquee ${row ? 'marquee--reverse' : ''}`}>
          <div className="marquee__track">
            {[...CURRENCIES, ...CURRENCIES].map((c, i) => (
              <span key={i} className="currency-chip">{c}</span>
            ))}
          </div>
        </div>
      ))}
      <div className="currency-art__total">
        <small>Total in PHP</small>
        <strong>≈ ₱251,210</strong>
      </div>
    </div>
  );
}

// Spending by category this month, in the app's chart colours.
const SLICES = [
  { label: 'Dining', share: 0.28, color: COLORS.coral },
  { label: 'Groceries', share: 0.22, color: COLORS.mint },
  { label: 'Bills', share: 0.18, color: '#F58FB8' },
  { label: 'Transport', share: 0.14, color: COLORS.blue },
  { label: 'Shopping', share: 0.1, color: COLORS.lavender },
  { label: 'Utilities', share: 0.08, color: '#B4E36F' },
];

function DonutArt() {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="donut-art">
      <svg viewBox="0 0 120 120" className="donut">
        {SLICES.map((s, i) => {
          const length = s.share * circumference - 3;
          const dash = (
            <motion.circle
              key={s.label}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDashoffset={-offset}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              whileInView={{ strokeDasharray: `${length} ${circumference}` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              transform="rotate(-90 60 60)"
            />
          );
          offset += s.share * circumference;
          return dash;
        })}
      </svg>
      <div className="donut-art__center">
        <strong>₱38,240</strong>
        <small>Spent in Oct</small>
      </div>
      <ul className="donut-art__legend">
        {SLICES.slice(0, 4).map((s) => (
          <li key={s.label}><i style={{ background: s.color }} />{s.label}</li>
        ))}
      </ul>
    </div>
  );
}

function WhatIfArt() {
  const bar = (label, value, width, color, delay) => (
    <div className="whatif-art__row">
      <span className="whatif-art__label">
        <b>{value}</b>
        <small style={{ color }}>{label}</small>
      </span>
      <span className="whatif-art__track">
        <motion.span
          style={{ background: color }}
          initial={{ width: '0%' }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
    </div>
  );
  return (
    <div className="whatif-art">
      <small>New laptop · ₱24,000 · Nov 26</small>
      {bar('Without purchase', '₱256,800', '100%', COLORS.mint, 0.1)}
      {bar('With purchase', '₱232,800', '90%', COLORS.lavender, 0.3)}
    </div>
  );
}

function GoalArt() {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="goal-art">
      <svg viewBox="0 0 100 100" className="goal-art__ring">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={COLORS.lavender}
          strokeWidth="9"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          initial={{ strokeDasharray: `0 ${circumference}` }}
          whileInView={{ strokeDasharray: `${circumference * 0.68} ${circumference}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="goal-art__copy">
        <strong>Japan trip</strong>
        <small>₱54,400 of ₱80,000</small>
        <span className="chip chip--lavender">68% · by Mar 2027</span>
      </div>
    </div>
  );
}
