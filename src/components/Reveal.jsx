import { Fragment } from 'react';
import { motion } from 'motion/react';

export const ease = [0.16, 1, 0.3, 1];

// Fades and lifts its children into view once, with a soft blur.
export function Reveal({ as = 'div', delay = 0, y = 28, blur = 8, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// The small pill above a section title: a glowing dot and a label.
export function Eyebrow({ children, className = '' }) {
  return (
    <Reveal as="p" className={`eyebrow ${className}`} blur={0} y={12}>
      <span className="eyebrow__dot" aria-hidden="true" />
      {children}
    </Reveal>
  );
}

// A heading whose words rise in one after another. `soft` words take the silver gradient.
export function Title({ as = 'h2', children, className = '', delay = 0 }) {
  const Tag = motion[as];
  const words = String(children).split(' ');
  return (
    <Tag
      className={`title ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={children}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="title__mask" aria-hidden="true">
            <motion.span
              className="title__word"
              variants={{ hidden: { y: '110%' }, shown: { y: '0%' } }}
              transition={{ duration: 0.9, ease }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  );
}
