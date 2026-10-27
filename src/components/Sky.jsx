// The night sky shared by the hero and the closing call: stars, the app's meteor shower, and the
// low-Earth-orbit horizon (NASA's Black Marble night lights, the texture the app's Home uses).

export function Stars({ className = '' }) {
  return (
    <div className={`stars ${className}`} aria-hidden="true">
      <div className="stars__layer stars__layer--a" />
      <div className="stars__layer stars__layer--b" />
    </div>
  );
}

// Thin streaks crossing the sky now and then, like the app's meteor shower.
const METEORS = [
  { top: '8%', left: '18%', delay: '0.6s', length: 150 },
  { top: '14%', left: '6%', delay: '3.4s', length: 110 },
  { top: '4%', left: '62%', delay: '5.8s', length: 170 },
  { top: '22%', left: '78%', delay: '8.1s', length: 120 },
];

export function Meteors() {
  return (
    <div className="meteors" aria-hidden="true">
      {METEORS.map((m) => (
        <span
          key={m.left}
          className="meteor"
          style={{ top: m.top, left: m.left, animationDelay: m.delay, '--length': `${m.length}px` }}
        />
      ))}
    </div>
  );
}

// The curve of the Earth at night with a sunrise on its rim. The city lights drift slowly east.
export function Horizon({ className = '' }) {
  return (
    <div className={`horizon ${className}`} aria-hidden="true">
      <div className="horizon__flare" />
      <div className="horizon__globe">
        <div className="horizon__lights" />
        <div className="horizon__clouds" />
        <div className="horizon__shade" />
      </div>
      <div className="horizon__rim" />
    </div>
  );
}
