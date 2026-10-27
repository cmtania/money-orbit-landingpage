import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { EntryPhone, TimelinePhone, WalletPhone } from './Phones.jsx';
import { Eyebrow, Reveal, Title } from './Reveal.jsx';

// Three phones rise over the horizon: the Timeline, the wallet of accounts in the middle, and
// typing an entry. The side phones fan out as the page scrolls.
export default function Showcase() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const side = useTransform(scrollYProgress, [0, 0.5], reduce ? [0, 0] : [80, 0]);
  const tiltLeft = useTransform(scrollYProgress, [0, 0.5], reduce ? [-6, -6] : [0, -6]);
  const tiltRight = useTransform(scrollYProgress, [0, 0.5], reduce ? [6, 6] : [0, 6]);
  const center = useTransform(scrollYProgress, [0, 0.5], reduce ? [0, 0] : [60, -10]);

  return (
    <section className="showcase" id="showcase" ref={ref}>
      <div className="wrap showcase__head">
        <Eyebrow>Meet Money Orbit</Eyebrow>
        <Title className="section-title">Calm, clear and always on your side</Title>
        <Reveal as="p" className="section-lede" delay={0.1}>
          A wallet for every account, a forecast for every day ahead, and entries that take one sentence.
        </Reveal>
      </div>

      <div className="showcase__stage">
        <motion.div className="showcase__phone showcase__phone--left" style={{ y: side, rotate: tiltLeft }}>
          <TimelinePhone />
        </motion.div>
        <motion.div className="showcase__phone showcase__phone--center" style={{ y: center }}>
          <WalletPhone />
        </motion.div>
        <motion.div className="showcase__phone showcase__phone--right" style={{ y: side, rotate: tiltRight }}>
          <EntryPhone />
        </motion.div>
      </div>
    </section>
  );
}
