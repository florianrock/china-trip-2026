const ACTIVITIES = {
  spa: {
    title: '24-Hour Spa Experience',
    img: 'shanghai-spa.png',
    city: 'Shanghai',
    desc: [
      `Shanghai's luxury spa scene is unlike anything in the world. Operating around the clock, these temple-like sanctuaries offer everything from volcanic stone massages to herbal steam baths infused with traditional Chinese medicine. The city never sleeps, and neither does the wellness experience.`,
      `Many top spas feature rooftop thermal pools with panoramic views of the glittering Pudong skyline. After midnight, the crowds thin and the city lights reflect off steaming water in an almost otherworldly calm — one of Shanghai's best-kept secrets.`,
      `Treatments blend ancient TCM rituals with modern luxury: jade rollers, gua sha facials, fire cupping and bamboo massages performed by practitioners trained for decades. Budget 3–4 hours minimum to experience the full circuit.`
    ]
  },
  bund: {
    title: 'The Bund Waterfront',
    img: 'shanghai-bund.png',
    city: 'Shanghai',
    desc: [
      `Stretching 1.5 km along the western bank of the Huangpu River, the Bund is Shanghai's greatest stage. On one side, 52 colonial-era buildings from the 1920s–30s showcase Art Deco, Gothic and Romanesque grandeur. On the other, the futuristic Pudong skyline punctuates the horizon.`,
      `At dusk, both sides light up simultaneously and the promenade fills with locals, street performers and visitors from every corner of the world. The energy is electric — romantic yet buzzing, historic yet relentlessly modern.`,
      `Take a ferry across to Pudong for the reverse angle, or climb to one of the rooftop bars on the Bund side to watch the nightly light show over cocktails. Come back again at dawn — the early morning mist on the river is something else entirely.`
    ]
  },
  pandas: {
    title: 'Giant Panda Baby Zone',
    img: 'chengdu-pandas.png',
    city: 'Chengdu',
    desc: [
      `The Chengdu Research Base of Giant Panda Breeding is home to over 150 giant and red pandas in lush, naturalistic enclosures. The star attraction is the nursery — a dedicated area where baby cubs born that season are cared for by keepers around the clock.`,
      `Arrive before 9 AM when the pandas are most active and the cubs are brought out for feeding and play. Watching a 3-month-old cub tumble through bamboo while its mother snoozes against a tree is one of those genuinely life-altering wildlife moments.`,
      `The base covers over 100 acres of bamboo forest designed to mimic the pandas' natural Sichuan mountain habitat. Beyond the giant pandas, the red panda enclosures are quieter and equally magical — tiny fox-like creatures darting through treetop walkways.`
    ]
  },
  hotpot: {
    title: 'Authentic Sichuan Hotpot',
    img: 'chengdu-hotpot.png',
    city: 'Chengdu',
    desc: [
      `Chengdu is the hotpot capital of China, and Sichuan hotpot is in a league of its own. The defining feature is the mala ("numbing-spicy") broth made from dried chillies, Sichuan peppercorns, fermented black beans and rendered beef tallow — a dark, fragrant cauldron that tingles your lips for hours.`,
      `The ritual is communal and unhurried: order wave after wave of raw ingredients — thinly sliced beef and lamb, tripe, lotus root, tofu skin, leafy greens — and cook them directly at your table. Dip everything in a sesame-garlic sauce that tempers the heat.`,
      `For the full experience, head to Shuangliu or the old Yulin neighbourhood where locals go. The best spots have zero English menus, laminated picture cards instead, and waitstaff who will cheerfully correct your dunking technique. Come hungry, wear layers you don't mind getting fragrant, and block out the whole evening.`
    ]
  },
  forbidden: {
    title: 'The Forbidden City',
    img: 'beijing-forbidden-city.png',
    city: 'Beijing',
    desc: [
      `The Palace Museum — known as the Forbidden City — served as the Chinese imperial palace for 24 emperors across the Ming and Qing dynasties. Completed in 1420, it covers 720,000 m² and contains 980 surviving buildings across 8,704 rooms. No complex on earth compares in scale or preservation.`,
      `Enter through the Meridian Gate and walk north through successive ceremonial courtyards — the Hall of Supreme Harmony, the Hall of Central Harmony, the Hall of Preserving Harmony — each grander than the last, their golden roofs blazing under Beijing's northern sky.`,
      `Allow a full day. The outer courts take 2 hours, but the inner residential quarters to the north are where the real stories live: imperial bedchambers, the Empress's garden, the Clock Gallery, and the treasury containing thousands of jade, gold and porcelain masterpieces. Book timed tickets in advance — daily visitor limits sell out weeks ahead.`
    ]
  },
  wall: {
    title: 'The Great Wall',
    img: 'beijing-great-wall.png',
    city: 'Beijing',
    desc: [
      `The Great Wall of China stretches over 21,000 km across northern China, but the sections near Beijing offer the most dramatic scenery. Mutianyu (90 min north of Beijing) is the best balance of restoration, crowds and landscape — steep forested ridges, watchtowers every 300 metres and a cable car for those who prefer not to hike.`,
      `For the adventurous, the Jiankou section (wild, unrestored) gives you the wall as it truly is: crumbling, overgrown and magnificent, with near-vertical climbs rewarded by views that stretch to the horizon in both directions. Not for small children.`,
      `Start at sunrise. The early light turns the stone golden, the mist sits low in the valleys below, and for the first hour you may have entire sections entirely to yourself. Bring layers — the ridge gets cold and windy even in summer — and better shoes than you think you'll need.`
    ]
  }
};

const votes = {};

function getVotes(id) {
  if (votes[id] === undefined) votes[id] = 0;
  return votes[id];
}

function renderCount(id) {
  document.querySelectorAll(`.upvote-btn[data-id="${id}"] .count`).forEach(el => {
    el.textContent = getVotes(id);
  });
}

function handleUpvote(id, btn) {
  votes[id] = (votes[id] || 0) + 1;
  btn.classList.add('voted');
  setTimeout(() => btn.classList.remove('voted'), 400);
  renderCount(id);
}

// City tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.city-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.city).classList.add('active');
  });
});

// Upvote buttons (cards)
document.querySelectorAll('.upvote-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    handleUpvote(btn.dataset.id, btn);
  });
});

// Open modal
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openModal(btn.dataset.id);
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.id));
});

// Modal
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
  const a = ACTIVITIES[id];
  if (!a) return;

  modalContent.innerHTML = `
    <img class="modal-hero" src="${a.img}" alt="${a.title}" />
    <h2>${a.title}</h2>
    <div class="modal-gallery">
      <img src="${a.img}" alt="${a.title} 2" />
      <img src="${a.img}" alt="${a.title} 3" />
      <img src="${a.img}" alt="${a.title} 4" />
    </div>
    ${a.desc.map(p => `<p>${p}</p>`).join('')}
    <div class="modal-upvote">
      <button class="upvote-btn" data-id="${id}">❤️ <span class="count">${getVotes(id)}</span> Upvote</button>
    </div>
  `;

  modalContent.querySelector('.upvote-btn').addEventListener('click', e => {
    handleUpvote(id, e.currentTarget);
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
