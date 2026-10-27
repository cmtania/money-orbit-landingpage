import { motion } from 'motion/react';
import AppStoreButton from './AppStoreButton.jsx';
import Icon from './Icon.jsx';
import { ease } from './Reveal.jsx';
import { Horizon, Meteors, Stars } from './Sky.jsx';
import { PROMISES } from '../data/site.js';
import { scrollToId } from '../lib/scroll.js';

const rise = (delay) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.1, delay, ease },
});

// Black sky, a pill, a two-line silver headline, two calls and a promise strip, with the Earth's
// rim lighting up below (after the reference design).
export default function Hero() {
  return (
    <section className="hero" id="top">
      <Stars />
      <Meteors />

      <div className="hero__content wrap">
        <motion.p className="pill" {...rise(0.1)}>
          <span className="pill__dot" aria-hidden="true" />
          Private by design · Made for iPhone
        </motion.p>

        <motion.h1 className="hero__title" {...rise(0.22)}>
          <span className="silver">Your money,</span>
          <br />
          <span className="bright">in one calm </span>
          <span className="silver silver--right">orbit.</span>
        </motion.h1>

        <motion.p className="hero__lede" {...rise(0.38)}>
          Every account, currency and bill in one view. See the next 30 days, know what’s safe to
          spend until payday, and keep it all on your iPhone.
        </motion.p>

        <motion.div className="hero__actions" {...rise(0.52)}>
          <AppStoreButton />
          <a
            className="button button--glass"
            href="#showcase"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('showcase');
            }}
          >
            See it in action
            <Icon name="arrow" size={16} weight="bold" />
          </a>
        </motion.div>

        <motion.ul className="promises" aria-label="Promises" {...rise(0.7)}>
          {PROMISES.map((p) => (
            <li key={p}>
              <Icon name="check" size={14} weight="bold" />
              {p}
            </li>
          ))}
        </motion.ul>
      </div>

      <Horizon />
    </section>
  );
}
