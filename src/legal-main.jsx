import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/nunito';
import { LegalPage } from './components/Legal.jsx';
import './styles.css';

// /privacy, /privacy/ and /privacy/index.html all show the privacy policy.
const page = window.location.pathname.split('/').filter((part) => part && part !== 'index.html').at(-1) ?? 'support';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LegalPage page={page} />
  </StrictMode>,
);
