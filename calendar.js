// ── Trip calendar ──────────────────────────────────────────────────────────
// Single source of truth for what is planned on each day. Add an entry here
// and the calendar picks it up; days with no entry show as "no agenda yet".
const TRIP = { start: '2026-10-08', end: '2026-10-22' };

// City blocks — a day inherits its city + hotel from whichever block covers it.
const BLOCKS = [
  { from: '2026-10-08', to: '2026-10-12', city: 'Chengdu',  emoji: '🐼', hotel: 'Mercure Tianfu Square' },
  { from: '2026-10-12', to: '2026-10-17', city: 'Beijing',  emoji: '🏯', hotel: 'Grand Hyatt Beijing' },
  { from: '2026-10-17', to: '2026-10-22', city: 'Shanghai', emoji: '🏙️', hotel: 'Pullman Jing An' },
];

// Anything actually scheduled. Empty array => day is flagged as free.
const PLANS = {
  '2026-10-08': [
    { icon: '🛬', text: 'Arrive Shanghai' },
    { icon: '✈️', text: 'Onward flight to Chengdu' },
  ],
  '2026-10-12': [
    { icon: '✈️', text: 'MU664 · CTU → PKX · dep 12:40', note: 'China Eastern · Chengdu Tianfu → Beijing Daxing' },
  ],
  '2026-10-15': [{ icon: '🧱', text: 'Great Wall of China' }],
  '2026-10-16': [{ icon: '🏛️', text: 'Forbidden City' }],
  '2026-10-17': [{ icon: '🚄', text: 'Beijing → Shanghai' }],
  '2026-10-22': [{ icon: '🛫', text: 'Fly home from Shanghai' }],
};

// Format from LOCAL parts. toISOString() converts to UTC first, which in any
// timezone ahead of UTC shifts local midnight back a day and mis-keys everything.
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parse = s => new Date(s + 'T00:00:00');

function blockFor(dayIso) {
  // last block whose window contains the day; departure day belongs to the next city
  let found = null;
  for (const b of BLOCKS) if (dayIso >= b.from && dayIso < b.to) found = b;
  if (!found && dayIso === TRIP.end) found = BLOCKS[BLOCKS.length - 1];
  return found;
}

function build() {
  const grid = document.getElementById('cal-grid');
  const start = parse(TRIP.start), end = parse(TRIP.end);

  // pad to the Monday on or before the first trip day
  const pad = (start.getDay() + 6) % 7;
  for (let i = 0; i < pad; i++) {
    const c = document.createElement('div');
    c.className = 'cal-cell cal-cell--empty';
    grid.appendChild(c);
  }

  let free = 0, planned = 0;
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const key = iso(d);
    const items = PLANS[key] || [];
    const blk = blockFor(key);
    const isFree = items.length === 0;
    isFree ? free++ : planned++;

    const cell = document.createElement('div');
    cell.className = 'cal-cell' + (isFree ? ' cal-cell--free' : '');
    cell.innerHTML = `
      <div class="cal-date">
        <span class="cal-dnum">${d.getDate()}</span>
        <span class="cal-dow">${d.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
      </div>
      ${blk ? `<div class="cal-city">${blk.emoji} ${blk.city}</div>
               <div class="cal-hotel">🏨 ${blk.hotel}</div>` : ''}
      <div class="cal-items">
        ${items.length
          ? items.map(i => `<div class="cal-item" ${i.note ? `title="${i.note}"` : ''}>${i.icon} ${i.text}</div>`).join('')
          : '<div class="cal-free">No agenda yet</div>'}
      </div>`;
    grid.appendChild(cell);
  }

  document.getElementById('cal-summary').textContent =
    `${planned} day${planned === 1 ? '' : 's'} planned · ${free} still open`;
}

build();
