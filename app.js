// ACTIVITIES now lives in activities.js, loaded before this file.
// ── Hotels data ───────────────────────────────────────────────────────────────
const HOTELS = {
  'park-hyatt-shenzhen': {
    title: 'Park Hyatt Shenzhen',
    stars: '★★★★★',
    addr: '5023 Yi Tian Road, Futian District, Shenzhen',
    price: 'CHF ~150–180 / night',
    maps: 'https://maps.google.com/?q=Park+Hyatt+Shenzhen',
    img: 'hotel-park-hyatt-shenzhen.jpg',
    gallery: ['hotel-ph-lobby.jpg', 'hotel-ph-room.jpg', 'hotel-ph-suite-bed.jpg', 'hotel-ph-suite-living.jpg', 'hotel-ph-glasshouse.jpg', 'hotel-ph-pavilion.jpg'],
    desc: [
      `Park Hyatt Shenzhen occupies floors 36–44 of the KK100 Tower in Futian CBD — the geometric heart of Shenzhen and the city's most connected district. From the upper floors, floor-to-ceiling windows look out over Lianhuashan Park and the endless urban horizon beyond. The skyline views at night, with the city grid extending to every edge, are spectacular.`,
      `The top-floor sky pool runs along the edge of the building with unobstructed park views. The spa, gym and club lounge are all anchored on the same floors. Futian is also where you want to be for transport: the HSR station connecting to Hong Kong (45 min) and the rest of China sits directly beneath the district.`,
      `At CHF 150–180 per night, this is the most sensible luxury pick in Shenzhen — full Hyatt points earning, the best location in the city, and the kind of views that make checking in feel like an arrival.`
    ]
  },
  'raffles-shenzhen': {
    title: 'Raffles Shenzhen',
    stars: '★★★★★',
    addr: 'T7, One Shenzhen Bay, 3008 Zhongxin Road, Nanshan District, Shenzhen',
    price: 'CHF ~200–280 / night',
    maps: 'https://maps.google.com/?q=Raffles+Shenzhen',
    img: 'hotel-raffles-shenzhen.jpg',
    gallery: ['hotel-raffles-concert.jpg', 'hotel-raffles-bar.jpg', 'hotel-raffles-lobby.jpg', 'hotel-raffles-suite.jpg', 'hotel-raffles-room.jpg'],
    desc: [
      `Raffles Shenzhen occupies the upper floors of T7 at One Shenzhen Bay — the most dramatic address in the city. From floor 45 upwards, panoramic floor-to-ceiling windows look out over Shenzhen Bay toward Hong Kong. The Shenzhen Bay Bridge curves through the water far below. On a clear evening, you can see all the way to Lantau Island.`,
      `The hotel's sky concert hall at 350 metres is one of the most extraordinary spaces in China — a 200-seat auditorium with wraparound windows and a concert grand piano suspended above the bay. Evening performances here are unforgettable. The Michelin-starred restaurant and gold-bar lounge sit at the same altitude, with the entire Shenzhen skyline beneath you.`,
      `The lobby contains a decommissioned aircraft installed as sculpture, visible against a floor-to-ceiling window framing the KK100 tower. Rooms begin from the 45th floor — the standard suites have panoramic bay views from the bed. This is not a hotel you choose for location alone — it is a destination in its own right.`
    ]
  },
  'fashion-town-mgallery': {
    title: 'Fashion Town Hotel — MGallery',
    stars: '★★★★',
    addr: 'No. 8 Langyun Road, Dalang Street, Longhua District, Shenzhen 518110',
    price: 'CHF ~80–160 / night',
    maps: 'https://maps.google.com/?q=Fashion+Town+Hotel+Shenzhen+MGallery',
    img: 'hotel-fashion-town-shenzhen.jpg',
    gallery: ['hotel-fashion-town-g1.jpg', 'hotel-fashion-town-g2.jpg', 'hotel-fashion-town-g3.jpg'],
    desc: [
      `Shenzhen's first MGallery hotel by Accor opened in December 2024 in the Dalang fashion district of Longhua — adjacent to Shenzhen North Railway Station, giving you 30-minute HSR access to both Hong Kong and Guangzhou from the door. The 262-room boutique property is built around an emerald stone and metallic accent design language that reflects the fashion district's creative identity.`,
      `The centrepiece is a 188m² heated indoor pool — unusually generous for a 4-star boutique. Add a Cantonese restaurant, rooftop bar, and a design-forward lobby that doubles as an art installation space, and this is a hotel that punches significantly above its price point.`,
      `At CHF 80–160 per night it's the most affordable quality option in Shenzhen, and the Longhua location — right on Shenzhen North station — means you can be in Hong Kong before lunch and back for dinner. Smart choice for the days when the group splits: some heading south, others exploring northern Shenzhen.`
    ]
  },
  'four-seasons-kids': {
    title: 'Four Seasons — Little Prince Suite',
    stars: '★★★★★',
    addr: '🎉 Plot twist: this is at Four Seasons Beijing — which you ARE visiting! · No. 1 Wangfujing Dajie, Dongcheng, Beijing',
    price: 'From CNY ~4,288 / night (~CHF 580) · Koch kids would talk about this forever',
    maps: 'https://maps.google.com/?q=Four+Seasons+Hotel+Beijing',
    img: 'hotel-fs-lp-room.jpg',
    gallery: ['hotel-fs-lp-biplane.jpg', 'hotel-fs-lp-tent.jpg', 'hotel-fs-lp-stars.jpg'],
    desc: [
      `The Little Prince themed suite — officially the "Little Prince Kids Room" — is at Four Seasons Beijing. The Koch kids have no idea this exists. The suite features a red biplane bunk bed with a full-length slide, star-spangled blue carpet, and murals of the Little Prince and his rose across every wall.`,
      `One room has the biplane bed and slide; the adjoining children's bedroom has cloud wallpaper, a moon and star nightstand, a wooden teepee reading tent, and a rocking llama. Both rooms connect via a play corridor. The Great Wall of China is painted subtly into the clouds above the castle walls.`,
      `Four Seasons Beijing is at Wangfujing — walking distance from the Forbidden City and five minutes from the Grand Hyatt Beijing. At CHF ~580 per night, it's eye-watering — but booking it secretly for the Kochs and watching the kids discover the room would be a trip highlight money can't replace. The look on their faces is priceless.`
    ]
  },
  'grand-hyatt-shenzhen': {
    title: 'Grand Hyatt Shenzhen',
    stars: '★★★★★',
    addr: 'No. 1881 Bao\'an South Road, Luohu District, Shenzhen',
    price: 'CHF ~125–170 / night',
    maps: 'https://maps.google.com/?q=Grand+Hyatt+Shenzhen',
    img: 'hotel-grand-hyatt-shenzhen.jpg',
    gallery: ['hotel-grand-hyatt-g1.jpg', 'hotel-grand-hyatt-g2.jpg', 'hotel-grand-hyatt-g3.jpg', 'hotel-grand-hyatt-g4.jpg'],
    desc: [
      `The Grand Hyatt Shenzhen rises 38 stories above the MixC Shopping Mall in the heart of Luohu, with its glass-encased upper floors glowing like a lantern over the city skyline. Opened in 2009, the 491 rooms and 53 suites start well above street level — the lobby itself sits on the 33rd floor — combining warm wood finishes with floor-to-ceiling windows framing panoramic views across Shenzhen toward Hong Kong.`,
      `Eight distinct restaurants and bars span floors 33 to 38, from The Penthouse's rooftop cocktail lounge to the 226-seat Show Kitchen with four live open kitchens, and the landmark China Lodge Cantonese restaurant occupying floors 35–36 with 14 private dining rooms. The 3,132m² Shui Xiang Spa offers 13 individual treatment houses alongside a 25-metre heated outdoor pool, yoga studio, steam rooms, and hydrotherapy pool on the third-floor terrace.`,
      `For location it is hard to match: four metro lines converge directly beneath the hotel, putting every corner of Shenzhen within 30 minutes and the Lo Wu border crossing to Hong Kong just two stops away. The adjacent MixC mall connects directly to the tower. Rated #21 of 1,596 Shenzhen hotels on TripAdvisor — 4.8/5 across 2,835 reviews.`
    ]
  },
  'hyatt-place-dongmen': {
    title: 'Hyatt Place Shenzhen Dongmen',
    stars: '★★★★',
    addr: 'No. 3018 Jianshe Road (Dongmen), Luohu District, Shenzhen',
    price: 'CHF ~63–112 / night — breakfast included',
    maps: 'https://maps.google.com/?q=Hyatt+Place+Shenzhen+Dongmen',
    img: 'hotel-hyatt-place-dongmen.jpg',
    gallery: ['hotel-hyatt-place-dongmen-g1.jpg', 'hotel-hyatt-place-dongmen-g2.jpg', 'hotel-hyatt-place-dongmen-g3.jpg', 'hotel-hyatt-place-dongmen-g4.jpg'],
    desc: [
      `The Hyatt Place Shenzhen Dongmen sits directly above the Dongmen pedestrian shopping district (东门步行街), Shenzhen's most storied retail and street-food hub with a history stretching back 700 years. The hotel towers over the neon-lit lanes, and Laojie Metro Station (Lines 1 and 3) is literally steps from the entrance — making it one of the most walkable hotel locations in the city.`,
      `As the first Hyatt Place to open in Asia-Pacific (May 2014), the property set the brand template for the region: 138 rooms on floors 7–17 with the signature Cozy Corner sofa-sleeper, Hyatt Grand Bed, and complimentary high-speed WiFi throughout. The Gallery restaurant delivers a full hot breakfast each morning — both Chinese and Western — included in the room rate and consistently the #1 guest highlight.`,
      `Rates of CHF 63–112 per night with breakfast included make this the strongest value proposition for World of Hyatt members in Shenzhen. The rooftop terrace delivers open-air views across the Dongmen rooftops toward the Luohu skyline, and the hotel is just two metro stops from the Hong Kong Lo Wu border crossing.`
    ]
  }
};

// ── Config ────────────────────────────────────────────────────────────────────
// After deploying the Apps Script web app, paste its /exec URL here
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDkllCnL7N5pjPqfg42KgHmFRHvL6OHjzzZxFgUoiA46OM3oDASyKxjE6BlJ7U94Uh/exec';

// ── Auth & vote state ─────────────────────────────────────────────────────────
let currentUser = null;         // { email, name, picture, idToken }
const serverVotes = {};         // activityId → total count from server
const userVotedSet = new Set(); // activityIds current user has already voted on

function applyUserToUI(user) {
  const avatar = document.getElementById('user-avatar');
  const nameEl = document.getElementById('user-name');
  const chip = document.getElementById('user-chip');
  const signinBtn = document.getElementById('signin-btn');
  if (avatar) avatar.src = user.picture || '';
  if (nameEl) nameEl.textContent = user.name;
  if (chip) chip.style.display = 'flex';
  if (signinBtn) signinBtn.style.display = 'none';
}

function nudgeSignIn() {
  const btn = document.getElementById('signin-btn');
  if (!btn) return;
  btn.style.display = '';
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  btn.classList.add('signin-nudge');
  setTimeout(() => btn.classList.remove('signin-nudge'), 1200);
}

// Called by Google Identity Services after sign-in — must be global
function handleCredentialResponse(response) {
  try {
    const b64 = response.credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(b64));
    currentUser = {
      email: payload.email,
      name: payload.given_name || payload.name,
      picture: payload.picture,
      idToken: response.credential
    };
    localStorage.setItem('china_user', JSON.stringify({ email: currentUser.email, name: currentUser.name, picture: currentUser.picture }));
    applyUserToUI(currentUser);
    restoreUserVotes();
  } catch (e) { console.error('auth error', e); }
}

// Restore visual user state from localStorage on page load (before One Tap fires)
(function restoreSessionUser() {
  try {
    const saved = localStorage.getItem('china_user');
    if (!saved) return;
    const u = JSON.parse(saved);
    currentUser = { email: u.email, name: u.name, picture: u.picture, idToken: null };
    applyUserToUI(currentUser);
    restoreUserVotes();
  } catch (e) {}
})();

function restoreUserVotes() {
  if (!currentUser) return;
  const prefix = 'vote_' + currentUser.email + '_';
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix)) userVotedSet.add(k.slice(prefix.length));
  }
  document.querySelectorAll('.upvote-btn[data-id]').forEach(btn => refreshBtn(btn.dataset.id));
}

function getVotes(id) { return serverVotes[id] || 0; }

function refreshBtn(id) {
  document.querySelectorAll(`.upvote-btn[data-id="${id}"]`).forEach(btn => {
    const voted = userVotedSet.has(id);
    const count = btn.querySelector('.count');
    if (count) count.textContent = getVotes(id);
    btn.classList.toggle('user-voted', voted);
    btn.title = voted ? 'Click to remove your vote' : '';
  });
}

async function handleUpvote(id, btn) {
  if (!currentUser) {
    nudgeSignIn();
    return;
  }
  // Token missing (restored from localStorage) — nudge user to re-auth via the visible button
  if (!currentUser.idToken) {
    nudgeSignIn();
    return;
  }

  if (userVotedSet.has(id)) {
    // Unvote — optimistic
    serverVotes[id] = Math.max(0, (serverVotes[id] || 1) - 1);
    userVotedSet.delete(id);
    localStorage.removeItem('vote_' + currentUser.email + '_' + id);
    refreshBtn(id);
    if (APPS_SCRIPT_URL !== 'REPLACE_WITH_APPS_SCRIPT_URL') {
      const url = APPS_SCRIPT_URL + '?token=' + encodeURIComponent(currentUser.idToken)
                  + '&activityId=' + encodeURIComponent(id) + '&action=remove';
      fetch(url, { mode: 'no-cors' }).catch(() => {});
    }
    return;
  }

  // Vote — optimistic
  serverVotes[id] = (serverVotes[id] || 0) + 1;
  userVotedSet.add(id);
  localStorage.setItem('vote_' + currentUser.email + '_' + id, '1');
  btn.classList.add('voted');
  setTimeout(() => btn.classList.remove('voted'), 400);
  refreshBtn(id);

  if (APPS_SCRIPT_URL !== 'REPLACE_WITH_APPS_SCRIPT_URL') {
    const url = APPS_SCRIPT_URL + '?token=' + encodeURIComponent(currentUser.idToken)
                + '&activityId=' + encodeURIComponent(id);
    fetch(url, { mode: 'no-cors' }).catch(() => {});
  }
}

function setVoteButtonsLoading(loading) {
  document.querySelectorAll('.upvote-btn').forEach(btn => {
    btn.disabled = loading;
    btn.classList.toggle('votes-loading', loading);
  });
}

function loadVoteCounts() {
  setVoteButtonsLoading(true);
  if (APPS_SCRIPT_URL === 'REPLACE_WITH_APPS_SCRIPT_URL') { setVoteButtonsLoading(false); return; }
  // Fallback: enable buttons after 5s even if JSONP never fires
  const fallback = setTimeout(() => setVoteButtonsLoading(false), 5000);
  const cb = '__vc' + Date.now();
  window[cb] = data => {
    clearTimeout(fallback);
    try {
      if (data.ok && data.counts) {
        Object.assign(serverVotes, data.counts);
        document.querySelectorAll('.upvote-btn[data-id]').forEach(btn => refreshBtn(btn.dataset.id));
      }
    } finally {
      setVoteButtonsLoading(false);
      delete window[cb];
      const s = document.getElementById(cb);
      if (s) s.remove();
    }
  };
  const s = document.createElement('script');
  s.id = cb;
  s.onerror = () => { clearTimeout(fallback); setVoteButtonsLoading(false); delete window[cb]; s.remove(); };
  s.src = APPS_SCRIPT_URL + '?callback=' + cb;
  document.head.appendChild(s);
}

// The #signin-btn is now the rendered Google button — its click is handled by the GSI SDK.

document.getElementById('signout-btn')?.addEventListener('click', () => {
  currentUser = null;
  userVotedSet.clear();
  localStorage.removeItem('china_user');
  // Remove all vote_* keys
  Object.keys(localStorage).filter(k => k.startsWith('vote_')).forEach(k => localStorage.removeItem(k));
  const chip = document.getElementById('user-chip');
  const signinBtn = document.getElementById('signin-btn');
  if (chip) chip.style.display = 'none';
  if (signinBtn) signinBtn.style.display = '';
  document.querySelectorAll('.upvote-btn').forEach(btn => { btn.classList.remove('user-voted'); btn.title = ''; });
  if (window.google) google.accounts.id.disableAutoSelect();
});

loadVoteCounts();

// ── Deep-link / URL hash ─────────────────────────────────────────────────────
// Hash format: #section  or  #section-city  e.g. #hotels-shenzhen #food-beijing
const DL = {
  activities: { tabAttr: 'data-city',       idPrefix: 'act-', panelClass: 'city-section' },
  hotels:     { tabAttr: 'data-hotel-city', idPrefix: 'h-',   panelClass: 'hotel-city'   },
  food:       { tabAttr: 'data-food-city',  idPrefix: 'f-',   panelClass: 'food-city'    },
};

function setHash(section, city) {
  const h = city ? `${section}-${city}` : section;
  history.replaceState(null, '', '#' + h);
}

// ── Tab switching (generic) ──────────────────────────────────────────────────
function initTabs(tabAttr, panelClass, section) {
  document.querySelectorAll(`[${tabAttr}]`).forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('nav').querySelectorAll(`[${tabAttr}]`).forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.' + panelClass).forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute(tabAttr);
      const el = document.getElementById(target);
      if (el) el.classList.add('active');
      if (section && DL[section]) {
        const city = target.replace(DL[section].idPrefix, '');
        setHash(section, city);
      }
    });
  });
}

// Top nav
document.querySelectorAll('.top-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    const section = tab.dataset.section;
    const el = document.getElementById('section-' + section);
    if (el) el.classList.add('active');
    const cfg = DL[section];
    let city = null;
    if (cfg) {
      const activeCity = document.querySelector(`[${cfg.tabAttr}].active`);
      if (activeCity) city = activeCity.getAttribute(cfg.tabAttr).replace(cfg.idPrefix, '');
    }
    setHash(section, city);
  });
});

initTabs('data-hotel-city', 'hotel-city',   'hotels');
initTabs('data-city',       'city-section', 'activities');
initTabs('data-food-city',  'food-city',    'food');

// Apply hash on load and back/forward navigation
function activateSectionAndPanel(topSection, panelEl, tabAttr) {
  document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
  document.querySelector(`.top-tab[data-section="${topSection}"]`)?.classList.add('active');
  document.getElementById('section-' + topSection)?.classList.add('active');
  if (panelEl) {
    const panelId = panelEl.id;
    const cityTab = document.querySelector(`[${tabAttr}="${panelId}"]`);
    if (cityTab) {
      cityTab.closest('nav').querySelectorAll(`[${tabAttr}]`).forEach(t => t.classList.remove('active'));
      cityTab.classList.add('active');
    }
    panelEl.parentElement.querySelectorAll('[id]').forEach(p => p.classList.remove('active'));
    panelEl.classList.add('active');
  }
}

function applyHash() {
  const hash = location.hash.slice(1);
  if (!hash) return;

  if (hash.startsWith('entry-')) {
    const id = hash.slice(6);
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) {
      const actPanel  = card.closest('.city-section');
      const foodPanel = card.closest('.food-city');
      const hotelPanel = card.closest('.hotel-city');
      if (actPanel)   activateSectionAndPanel('activities', actPanel, 'data-city');
      else if (foodPanel) activateSectionAndPanel('food', foodPanel, 'data-food-city');
      else if (hotelPanel) activateSectionAndPanel('hotels', hotelPanel, 'data-hotel-city');
    }
    if (ACTIVITIES[id]) openModal(id, true);
    else if (HOTELS[id]) openHotelModal(id, true);
    return;
  }

  const [section, ...rest] = hash.split('-');
  const city = rest[0] || null;

  const topTab = document.querySelector(`.top-tab[data-section="${section}"]`);
  if (!topTab) return;
  document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
  topTab.classList.add('active');
  const panel = document.getElementById('section-' + section);
  if (panel) panel.classList.add('active');

  if (city && DL[section]) {
    const cfg = DL[section];
    const cityTab = document.querySelector(`[${cfg.tabAttr}="${cfg.idPrefix}${city}"]`);
    if (cityTab) {
      cityTab.closest('nav').querySelectorAll(`[${cfg.tabAttr}]`).forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.' + cfg.panelClass).forEach(p => p.classList.remove('active'));
      cityTab.classList.add('active');
      const cityPanel = document.getElementById(cfg.idPrefix + city);
      if (cityPanel) cityPanel.classList.add('active');
    }
  }
}

applyHash();
window.addEventListener('popstate', () => {
  if (modal.classList.contains('open') && !location.hash.startsWith('#entry-')) {
    closeModal({ fromPopstate: true });
  } else {
    applyHash();
  }
});

// ── Modal ────────────────────────────────────────────────────────────────────
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function openModal(id, skipHistory = false) {
  const a = ACTIVITIES[id];
  if (!a) return;
  if (!skipHistory) history.pushState({ isModalEntry: true, entryId: id }, '', '#entry-' + id);

  const galleryHtml = a.gallery.map(src =>
    `<img src="${src}" alt="${a.title}" loading="lazy" />`
  ).join('');

  const videoHtml = a.video
    ? `<video class="modal-video" controls playsinline preload="metadata" src="${a.video}"></video>`
    : '';

  const heroHtml = a.img
    ? `<img class="modal-hero" src="${a.img}" alt="${a.title}" />`
    : `<div class="modal-hero-emoji">${a.emoji || '🍽️'}</div>`;

  modalContent.innerHTML = `
    ${heroHtml}
    <h2>${a.title}</h2>
    ${a.addr ? `<p class="modal-addr">📍 ${a.addr}${a.maps ? ` · <a href="${a.maps}" target="_blank" rel="noopener" class="maps-link">Maps ↗</a>` : ''}</p>` : ''}
    ${videoHtml}
    <div class="modal-gallery">${galleryHtml}</div>
    ${a.desc.map(p => `<p>${p}</p>`).join('')}
    <div class="modal-upvote">
      <button class="upvote-btn modal-upvote-btn${userVotedSet.has(id) ? ' user-voted' : ''}" data-id="${id}">❤️ <span class="count">${getVotes(id)}</span> I want to go!</button>
    </div>
  `;

  modalContent.querySelector('.modal-upvote-btn').addEventListener('click', e => {
    handleUpvote(id, e.currentTarget);
  });

  modalContent.querySelectorAll('.modal-gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src));
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openHotelModal(id, skipHistory = false) {
  const h = HOTELS[id];
  if (!h) return;
  if (!skipHistory) history.pushState({ isModalEntry: true, entryId: id }, '', '#entry-' + id);

  const galleryHtml = (h.gallery || []).map(src =>
    `<img src="${src}" alt="${h.title}" loading="lazy" />`
  ).join('');

  modalContent.innerHTML = `
    <img class="modal-hero" src="${h.img}" alt="${h.title}" />
    <h2>${h.title} <span class="hotel-stars-modal">${h.stars}</span></h2>
    ${h.addr ? `<p class="modal-addr">📍 ${h.addr}${h.maps ? ` · <a href="${h.maps}" target="_blank" rel="noopener" class="maps-link">Maps ↗</a>` : ''}</p>` : ''}
    <p class="hotel-price-modal">${h.price}</p>
    ${galleryHtml ? `<div class="modal-gallery">${galleryHtml}</div>` : ''}
    ${h.desc.map(p => `<p>${p}</p>`).join('')}
  `;

  modalContent.querySelectorAll('.modal-gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src));
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(opts = {}) {
  const v = modalContent.querySelector('video');
  if (v) v.pause();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (!opts.fromPopstate) {
    if (history.state?.isModalEntry) {
      history.back();
    } else if (location.hash.startsWith('#entry-')) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLightbox(); closeModal(); } });

// ── Delegated card/button clicks ─────────────────────────────────────────────
document.addEventListener('click', e => {
  // Modal upvote (has its own listener added in openModal) — skip
  if (e.target.closest('.modal-upvote-btn')) return;

  // Details button
  const details = e.target.closest('.details-btn');
  if (details) { openModal(details.dataset.id); return; }

  // Card upvote
  const upvote = e.target.closest('.upvote-btn');
  if (upvote && upvote.dataset.id) { handleUpvote(upvote.dataset.id, upvote); return; }

  // Card click (not on a button)
  if (!e.target.closest('button')) {
    const card = e.target.closest('.card[data-id]');
    if (card) { openModal(card.dataset.id); return; }

    const hotelCard = e.target.closest('.hotel-card[data-hotel-id]');
    if (hotelCard) openHotelModal(hotelCard.dataset.hotelId);
  }
});

// ── Lightbox ─────────────────────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) { lightboxImg.src = src; lightbox.classList.add('open'); }
function closeLightbox() { lightbox.classList.remove('open'); }
lightbox.addEventListener('click', closeLightbox);

// Itinerary hotel row toggle
(() => {
  const btn = document.getElementById('itin-hotel-toggle');
  const itin = document.querySelector('.itinerary');
  if (!btn || !itin) return;
  btn.addEventListener('click', () => {
    const hidden = itin.classList.toggle('hide-hotels');
    btn.setAttribute('aria-expanded', String(!hidden));
    btn.textContent = hidden ? '🏨 Show hotels' : '🏨 Hide hotels';
  });
})();
