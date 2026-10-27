# Money Orbit landing page

The website for **Money Orbit**, the private personal-finance app for iPhone, at
<https://moneyorbit.guruchanworks.com>. It's built with React and Vite, uses [motion](https://motion.dev)
for animation and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling. The font
is self-hosted (SF Pro Rounded on Apple devices, Nunito elsewhere), so the site makes no
third-party requests.

```sh
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve dist/ locally
```

## Pages

- `/`: the landing page (hero, showcase, features, privacy, Free & Pro, FAQ).
- `/privacy`: the privacy policy. The app links here from Settings and the paywall
  (`AppLinks.privacy`), so it must be live before App Store submission.
- `/terms` and `/support`: terms of use, and support with the FAQ.

## Before launch

- Set `APP_STORE_URL` in `src/data/site.js`. Until it's set, every store button reads
  "Coming soon to the App Store" and isn't a link.
- Deploy `dist/` to Cloudflare with `wrangler.jsonc` (`npx wrangler deploy`, or connect
  the repo in the Cloudflare dashboard), then add the custom domain
  `moneyorbit.guruchanworks.com`.
- If plans, limits or data handling change in the app, update `src/data/site.js` and
  `src/components/Legal.jsx` to match.

## Structure

- `src/data/site.js`: copy, features, privacy points, plans and FAQ.
- `src/components/`: `Hero` (with `Sky`: stars, meteors and the Earth horizon), `Showcase`
  and `Phones` (the app screens rebuilt in HTML/CSS), `Features` (the bento grid),
  `Sections` (Privacy, Pro, FAQ, closing, footer) and `Legal`.
- `src/styles.css`: the design tokens (from the app's `Theme.swift`) and every section's styles.
- `public/img/earth-night.webp` and `earth-clouds.webp` are crops of the textures the app's
  Home uses (NASA Black Marble 2016 and a cloud map); `public/app-icon.png` is the app icon.

The site respects **Reduce Motion**: meteors, drifting lights, marquees and smooth scrolling
stop.
