// ── Trip calendar ──────────────────────────────────────────────────────────
// Single source of truth for what is planned on each day. Add an entry here
// and the calendar picks it up; days with no entry show as "no agenda yet".
const TRIP = { start: '2026-10-08', end: '2026-10-22' };

// City blocks — a day inherits its city + hotel from whichever block covers it.
const BLOCKS = [
  { from: '2026-10-08', to: '2026-10-12', city: 'Chengdu',  emoji: '🐼', hotel: 'Mercure Tianfu Square', hotelId: 'hotel-mercure-chengdu' },
  { from: '2026-10-12', to: '2026-10-17', city: 'Beijing',  emoji: '🏯', hotel: 'Grand Hyatt Beijing', hotelId: 'hotel-grand-hyatt-beijing' },
  { from: '2026-10-17', to: '2026-10-22', city: 'Shanghai', emoji: '🏙️', hotel: 'Pullman Jing An', hotelId: 'hotel-pullman-jingan' },
];

// Day trips — the day is spent in another city but we still sleep in the block's
// hotel, so this overrides the CITY label only and deliberately leaves the hotel
// line alone; that pairing is what tells you it's a there-and-back day.
const DAYTRIPS = {
  '2026-10-10': { city: 'Chongqing', emoji: '🚄' },
};

// Anything actually scheduled. Empty array => day is flagged as free.
const PLANS = {
  '2026-10-08': [
    { icon: '🛬', text: 'Arrive Shanghai' },
    { icon: '✈️', text: 'CA4592 · PVG → TFU · 09:30–12:40', id: 'flight-ca4592', note: 'Air China · Pudong T2 → Chengdu Tianfu T2' },
    { icon: '✈️', text: 'CA4504 · PVG → CTU · 11:25–14:40 (Cami & Joe)', id: 'flight-ca4504', note: 'Different Chengdu airport — Shuangliu, ~60 km from Tianfu. Meet at the hotel, not the airport.' },
    { icon: '🌃', text: 'Twin Towers light show (optional)', id: 'lightshow', note: 'From ~19:30 at 交子之环. Metro Line 1 → 金融城, 20 min. Optional — skip it if everyone is wrecked.' },
    { icon: '🥡', text: 'Food delivery to the room', id: 'roomdelivery', note: 'Meituan or Ele.me via the Alipay mini-program. Have the hotel address in Chinese ready.' },
  ],
  '2026-10-09': [
    { icon: '🐼', text: 'Chengdu Panda Base', id: 'pandas', note: 'Giant Panda Baby Zone · 1375 Panda Avenue, Chenghua District · ~30 min from the centre. Go early — the cubs are most active before 10:00.' },
    { icon: '🥩', text: 'Wagyu Hotpot dinner', id: 'wagyu', note: '锦城印象火锅 (彩虹店) · 武侯祠大街19号, Wuhou · Michelin Selected + Black Pearl · open till 02:00, so an easy dinner after the pandas.' },
  ],
  '2026-10-10': [
    { icon: '🚄', text: 'G8613 · 成都东 11:18 → 重庆北 12:37', id: 'chongqing', note: '1h19 on a 复兴号, from ¥174. Full day: Jiefangbei, 李子坝, Hongyadong after dark. Return train still to pick — aim 21:00–22:00.' },
    { icon: '🍜', text: '阿福板凳面 street noodles · lunch', id: 'xiaomian', note: 'Eat on red stools on the pavement. Go to the 解放碑 branch, not the 观音桥 one in the post.' },
    { icon: '🍖', text: '丁老头烤肉 · dinner on 南山', id: 'nanshanbbq', note: 'BBQ terraced down the hillside over the lit skyline. Sunset 18:30 — be seated by 17:30. Line 6 to 上新街 exit 3.' },
  ],
  '2026-10-12': [
    { icon: '✈️', text: 'MU664 · CTU → PKX · dep 12:40', id: 'flight-mu664', note: 'China Eastern · Chengdu Tianfu → Beijing Daxing' },
  ],
  '2026-10-14': [
    { icon: '🛬', text: "CA184 · HND → PEK · 08:30–11:20 (Olli's family)", id: 'flight-ca184', note: 'Mario & Sonia. Beijing CAPITAL (PEK), not Daxing — meet at the Grand Hyatt, not an airport.' },
  ],
  '2026-10-15': [{ icon: '🧱', text: 'Great Wall of China', id: 'wall' }],
  '2026-10-16': [{ icon: '🏛️', text: 'Forbidden City', id: 'forbidden' }],
  '2026-10-17': [{ icon: '🚄', text: 'Beijing → Shanghai', id: 'train' }],
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
    const trip = DAYTRIPS[key];
    const isFree = items.length === 0;
    isFree ? free++ : planned++;

    const cell = document.createElement('div');
    cell.className = 'cal-cell' + (isFree ? ' cal-cell--free' : '');
    cell.innerHTML = `
      <div class="cal-date">
        <span class="cal-dnum">${d.getDate()}</span>
        <span class="cal-dow">${d.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
      </div>
      ${blk ? `<div class="cal-city">${trip ? `${trip.emoji} ${trip.city} <span class="cal-daytrip">day trip</span>` : `${blk.emoji} ${blk.city}`}</div>
               ${blk.hotelId && typeof ACTIVITIES !== 'undefined' && ACTIVITIES[blk.hotelId]
                 ? `<button class="cal-hotel cal-hotel--link" data-open="${blk.hotelId}">🏨 ${blk.hotel} <span class="cal-more">›</span></button>`
                 : `<div class="cal-hotel">🏨 ${blk.hotel}</div>`}` : ''}
      <div class="cal-items">
        ${items.length
          ? items.map(i => i.id && typeof ACTIVITIES !== 'undefined' && ACTIVITIES[i.id]
              ? `<button class="cal-item cal-item--link" data-open="${i.id}" ${i.note ? `title="${i.note}"` : ''}>${i.icon} ${i.text} <span class="cal-more">›</span></button>`
              : `<div class="cal-item" ${i.note ? `title="${i.note}"` : ''}>${i.icon} ${i.text}</div>`).join('')
          : '<div class="cal-free">No agenda yet</div>'}
      </div>`;
    grid.appendChild(cell);
  }

  document.getElementById('cal-summary').textContent =
    `${planned} day${planned === 1 ? '' : 's'} planned · ${free} still open`;
}

build();


// ── Detail popup ───────────────────────────────────────────────────────────
// Read-only version of the main page's modal: same content, no vote button
// (the calendar page deliberately does not load the sign-in / voting stack).
const modal = document.getElementById('cal-modal');
const modalContent = document.getElementById('cal-modal-content');

function openDetail(id) {
  const a = (typeof ACTIVITIES !== 'undefined') ? ACTIVITIES[id] : null;
  if (!a) return;
  const hero = a.img
    ? `<img class="modal-hero" src="${a.img}" alt="${a.title}" />`
    : `<div class="modal-hero-emoji">${a.emoji || '📍'}</div>`;
  modalContent.innerHTML = `
    ${hero}
    <h2>${a.title}</h2>
    ${a.addr ? `<p class="modal-addr">📍 ${a.addr}${a.maps ? ` · <a href="${a.maps}" target="_blank" rel="noopener" class="maps-link">Maps ↗</a>` : ''}</p>` : ''}
    <div class="modal-gallery">${(a.gallery || []).map(src => `<img src="${src}" alt="${a.title}" loading="lazy" />`).join('')}</div>
    ${a.desc.map(p => `<p>${p}</p>`).join('')}`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  const open = e.target.closest('[data-open]');
  if (open) { openDetail(open.dataset.open); return; }
  if (e.target.id === 'cal-modal' || e.target.closest('#cal-modal-close')) closeDetail();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
