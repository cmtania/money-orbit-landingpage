// Set this to the App Store URL once the listing is live. While it is empty,
// every store button reads "Coming soon to the App Store" and is not a link.
export const APP_STORE_URL = '';
export const SUPPORT_EMAIL = 'tania.dev.ph@gmail.com';

export const NAV = [
  { id: 'features', label: 'Features' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'pro', label: 'Pro' },
  { id: 'faq', label: 'FAQ' },
];

// The hero's promise strip (the reference design's logo row).
export const PROMISES = ['No sign-in', 'No ads', 'No tracking', 'On-device intelligence', '150+ currencies'];

// The app's accent colours (Theme.swift) and its account-card gradients (AccountCardPalette).
export const COLORS = {
  mint: '#67E8C7',
  coral: '#FF9C95',
  lavender: '#BDA5FF',
  blue: '#7FA8FF',
  amber: '#F5C451',
  cyan: '#6FD3E8',
};

export const WALLET = [
  { name: 'Everyday', type: 'Bank · Checking', icon: 'bank', balance: '₱62,480.00', currency: 'PHP', colors: ['#E5653F', '#C93C78'] },
  { name: 'Digital wallet', type: 'Digital bank', icon: 'phone', balance: '₱18,250.50', currency: 'PHP', colors: ['#1499B8', '#1C6FD0'] },
  { name: 'Travel', type: 'Wallet', icon: 'wallet', balance: '€630.00', currency: 'EUR', colors: ['#3E6BF0', '#2A3FB8'] },
  { name: 'Savings', type: 'Bank · Savings', icon: 'bank', balance: '₱128,900.00', currency: 'PHP', colors: ['#8467EC', '#5640C9'] },
];

export const FEATURES = [
  {
    id: 'wallet',
    eyebrow: 'Accounts',
    title: 'Every account, one wallet',
    text: 'Banks, digital banks, cash, credit cards and wallets in any currency, stacked like cards in a pocket. Tap one to see its balance over time and every transaction.',
    size: 'wide',
  },
  {
    id: 'forecast',
    eyebrow: 'Timeline',
    title: 'See the next 30 days',
    text: 'Your balance, day by day, with every bill, payday and planned purchase marked on the line. Drag to any day.',
    size: 'tall',
  },
  {
    id: 'entry',
    eyebrow: 'Add an entry',
    title: 'Type it. Scan it. Done.',
    text: '“₱850 dinner with Anna, split equally” becomes a clean entry. Receipts are read on your iPhone with Apple Intelligence, never uploaded.',
    size: 'regular',
  },
  {
    id: 'safe',
    eyebrow: 'Safe to spend',
    title: 'Know what’s safe until payday',
    text: 'Money Orbit sets aside upcoming bills and what you protect, then tells you what’s really free to spend.',
    size: 'regular',
  },
  {
    id: 'currencies',
    eyebrow: 'Currencies',
    title: '150+ currencies, one total',
    text: 'Hold pesos, dollars and euros side by side. Daily public exchange rates turn them into one total in your base currency.',
    size: 'regular',
  },
  {
    id: 'insights',
    eyebrow: 'Insights',
    title: 'Where it went, where it came from',
    text: 'Expense and income reports by month or year, by category and by source. Your own categories even get their own icons.',
    size: 'wide',
  },
  {
    id: 'whatif',
    eyebrow: 'Planning to buy?',
    title: 'Try a purchase before you make it',
    text: 'See how a new phone or a trip changes your balance on the day you’d pay, then save the plan to your Timeline.',
    size: 'regular',
  },
  {
    id: 'goals',
    eyebrow: 'Goals',
    title: 'Goals that fill up',
    text: 'Set money aside for what matters and watch each goal fill, without moving a cent between accounts.',
    size: 'wide',
  },
];

// From the app's own Privacy screen.
export const PRIVACY = [
  {
    icon: 'lock',
    title: 'Stays on this iPhone',
    text: 'Accounts, entries, bills, goals and receipt photos are stored on your iPhone. No sign-in, cloud sync, analytics, ads or tracking.',
  },
  {
    icon: 'cpu',
    title: 'Read on the device',
    text: 'Receipt text recognition and Apple Intelligence run on your iPhone. Receipt photos and financial text aren’t uploaded.',
  },
  {
    icon: 'face',
    title: 'Locked with Face ID',
    text: 'Turn on App Lock and Money Orbit opens only for you.',
  },
  {
    icon: 'export',
    title: 'Yours to take or erase',
    text: 'Export a CSV, save a backup file wherever you choose, or delete everything from your iPhone in one step.',
  },
];

export const PLANS = {
  free: {
    name: 'Free',
    tagline: 'Everything you need to see your money clearly.',
    items: [
      'Up to 5 accounts in any currency',
      'Wallet, Timeline and Insights',
      '7-day forecast',
      '8 receipt scans a month',
      '2 savings goals and 1 saved plan',
      'Smart category icons',
    ],
  },
  pro: {
    name: 'Pro',
    tagline: 'For every account, goal and plan you have.',
    items: [
      'Unlimited accounts and goals',
      '30-day forecast',
      'Unlimited receipt scans',
      'Type entries with Apple Intelligence',
      'Unlimited purchase plans',
      'Monthly, or once with Lifetime',
    ],
  },
};

export const FAQ = [
  {
    q: 'Do I need an account or a bank login?',
    a: 'No. Money Orbit has no sign-in and never connects to your bank. You add your accounts and their balances yourself, then log entries by typing, scanning or filling in a quick form.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On your iPhone. There is no Money Orbit server and no cloud sync. Receipt scanning and Apple Intelligence run on the device. The only downloads are public exchange-rate tables, and nothing about you or your accounts is sent with them.',
  },
  {
    q: 'How does the forecast work?',
    a: 'It projects only what you’ve entered: today’s balances plus your scheduled bills, income and, if you include them, saved purchase plans. It never guesses your future spending.',
  },
  {
    q: 'Does it work with more than one currency?',
    a: 'Yes. Each account keeps its own currency from 150+ choices, and totals are shown in your base currency using daily reference rates, which keep working offline with the last rates downloaded.',
  },
  {
    q: 'What does Pro add?',
    a: 'Unlimited accounts, goals, scans and purchase plans, a 30-day forecast and Apple Intelligence for typed entries. Choose Monthly or a one-time Lifetime purchase. If Pro ends, nothing you saved is lost.',
  },
  {
    q: 'Which iPhones are supported?',
    a: 'Money Orbit needs iOS 26. Apple Intelligence features need an iPhone that supports Apple Intelligence; on other iPhones entries are read with Money Orbit’s own on-device reader.',
  },
];
