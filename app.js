const ACTIVITIES = {
  spa: {
    title: '24-Hour Spa Experience',
    img: 'shanghai-spa.png',
    city: 'Shanghai',
    gallery: ['shanghai-spa-2.png', 'shanghai-spa-3.png', 'shanghai-spa-4.png'],
    desc: [
      `Shanghai's luxury spa scene is unlike anything in the world. Operating around the clock, these temple-like sanctuaries offer everything from volcanic stone massages to herbal steam baths infused with traditional Chinese medicine. You walk in stressed and leave a different person.`,
      `Many top spas feature rooftop thermal pools with panoramic views of the glittering Pudong skyline. After midnight, the crowds thin and the city lights reflect off steaming water in an almost otherworldly calm — one of Shanghai's best-kept secrets. The contrast of warm water against cold night air while skyscrapers glitter around you is unforgettable.`,
      `Treatments blend ancient TCM rituals with modern luxury: jade rollers, gua sha facials, fire cupping and bamboo massages performed by practitioners trained for decades. Budget 3–4 hours minimum. This is not a quick pamper — it's a full reset.`
    ]
  },
  bund: {
    title: 'The Bund Waterfront',
    img: 'shanghai-bund.png',
    city: 'Shanghai',
    gallery: ['shanghai-bund-2.png', 'shanghai-bund-3.png', 'shanghai-bund-4.png'],
    desc: [
      `Stretching 1.5 km along the western bank of the Huangpu River, the Bund is Shanghai's greatest stage. On one side, 52 Art Deco and colonial-era buildings from the 1920s–30s glow with golden light. On the other, the Pudong skyline — one of the world's most dramatic — reflects in the river below. This view never gets old.`,
      `At dusk, both sides light up simultaneously and the promenade fills with locals, street performers and visitors from every corner of the world. The energy is electric — romantic yet buzzing, historic yet relentlessly modern. Grab a cocktail from a rooftop bar and watch the nightly show unfold.`,
      `Come back at dawn too. The early morning mist sits low on the river, the city is quiet, and you'll have entire sections of the promenade nearly to yourself. Two completely different experiences — both unmissable.`
    ]
  },
  pandas: {
    title: 'Giant Panda Baby Zone',
    img: 'chengdu-pandas.png',
    city: 'Chengdu',
    gallery: ['chengdu-pandas-2.png', 'chengdu-pandas-3.png', 'chengdu-pandas-4.png'],
    desc: [
      `Nothing on earth quite prepares you for seeing a baby giant panda in real life. At the Chengdu Research Base of Giant Panda Breeding, over 150 pandas live in lush naturalistic enclosures — but the nursery is where hearts melt. Tiny fluffy cubs, born blind and pink, grow into the ridiculously photogenic creatures you see everywhere. Watching one tumble through bamboo is pure magic.`,
      `Arrive before 9 AM when the pandas are most active and the cubs are brought out for feeding. The keepers are passionate and knowledgeable — ask them anything. You'll learn that pandas spend 14 hours a day eating, sleep the rest, and are somehow still universally adored for it.`,
      `Don't miss the red pandas either. Smaller, fox-like, with magnificent fluffy tails — they dart through treetop walkways in their own quieter section of the base. If the giant pandas steal your heart, the red pandas will steal your camera roll.`
    ]
  },
  hotpot: {
    title: 'Authentic Sichuan Hotpot',
    img: 'chengdu-hotpot.png',
    city: 'Chengdu',
    gallery: ['chengdu-hotpot-2.png', 'chengdu-hotpot-3.png', 'chengdu-hotpot-4.png'],
    desc: [
      `Sichuan hotpot is one of the great eating experiences of the world. A dark, fragrant cauldron of dried chillies, Sichuan peppercorns, fermented black beans and beef tallow arrives at your table still bubbling furiously. The signature sensation is mala — mouth-numbing heat that builds slowly and lingers beautifully for hours after.`,
      `The ritual is communal and deeply unhurried. Order wave after wave of raw ingredients — paper-thin wagyu beef, silky lamb, lotus root, tofu skin, leafy greens, mushrooms — and cook them directly in the broth. Everything gets dipped in a cooling sesame and garlic sauce that tempers the fire just enough to keep you going.`,
      `For the real experience, head to a local spot in the Yulin neighbourhood rather than a tourist-facing restaurant. Zero English menu, laminated picture cards, waitstaff who will cheerfully judge your technique. Block out the whole evening. Come hungry, come ready to sweat, and come with people you like — hotpot is not a solo sport.`
    ]
  },
  forbidden: {
    title: 'The Forbidden City',
    img: 'beijing-forbidden-city.png',
    city: 'Beijing',
    gallery: ['beijing-forbidden-city-2.png', 'beijing-forbidden-city-3.png', 'beijing-forbidden-city-4.png'],
    desc: [
      `The numbers alone are staggering: 980 buildings, 8,704 rooms, 720,000 m² of imperial splendour. Completed in 1420 under the Yongle Emperor, the Forbidden City served as the home of 24 emperors for nearly 500 years. No other palace complex on earth matches it in scale, preservation or sheer drama.`,
      `Enter through the Meridian Gate and walk north through successive ceremonial courtyards — the Hall of Supreme Harmony where emperors received kowtows from the entire court, the Hall of Central Harmony, the Hall of Preserving Harmony — each grander than the last. The golden rooftiles blazing against Beijing's blue sky are unlike anything you've seen.`,
      `Allow a full day. The outer courts are impressive, but the inner residential quarters to the north are where the real stories live: imperial bedchambers, the Empress's garden, the Clock Gallery with its 18th-century European automata, the treasury. Book timed entry tickets weeks in advance — daily limits sell out fast.`
    ]
  },
  wall: {
    title: 'The Great Wall',
    img: 'beijing-great-wall.png',
    city: 'Beijing',
    gallery: ['beijing-great-wall-2.png', 'beijing-great-wall-3.png', 'beijing-great-wall-4.png'],
    desc: [
      `Over 21,000 km of ancient stone snaking across mountains, deserts and plateaus — the Great Wall of China is one of humanity's most audacious achievements. The Mutianyu section near Beijing offers the best combination of dramatic scenery and manageable crowds: steep forested ridges, a watchtower every 300 metres, and in autumn, a blaze of orange and red that makes the landscape look on fire.`,
      `Start at sunrise. The early light turns the stone gold, mist fills the valleys below, and for the first hour you may have entire sections to yourself. The silence up there — just wind, birdsong and the ancient stonework — is something you carry with you long after you leave.`,
      `For the adventurous, the unrestored Jiankou section is wild and vertiginous — crumbling parapets, near-vertical climbs, and views that stretch to the horizon in both directions. Not for small children or anyone who hasn't packed proper shoes. For everyone else, Mutianyu's cable car takes the hard work out of it.`
    ]
  },
  duck: {
    title: 'Peking Duck at Da Dong',
    img: 'beijing-duck.png',
    city: 'Beijing',
    gallery: ['beijing-duck-2.png', 'beijing-duck-3.png', 'beijing-duck-4.png'],
    desc: [
      `Peking Duck is Beijing's greatest culinary gift to the world, and eating it in the city where it was perfected is a completely different experience. Da Dong — Beijing's most celebrated duck restaurant — has elevated the dish to high art. Their ducks are roasted in fruit-wood ovens until the skin is impossibly thin and crackling, the fat rendered clean beneath, the meat succulent throughout.`,
      `The tableside carving ceremony is a performance in itself. A white-gloved chef slices the duck into exactly 108 pieces — skin and meat in perfect ratio — while explaining the technique. Each piece is wrapped in a gossamer-thin pancake with spring onion, cucumber and a brush of hoisin. One bite and you understand why this dish has lasted 600 years.`,
      `Book well in advance — Da Dong fills up weeks ahead, and for good reason. Go hungry. Order the signature crispy skin served first with sugar (yes, really), then the wrapped duck, then the rich bone broth at the end. It's a full two-hour meal and one of the great eating experiences in China.`
    ]
  },
  temple: {
    title: 'Temple of Heaven',
    img: 'beijing-temple-heaven.png',
    city: 'Beijing',
    gallery: ['beijing-temple-heaven-2.png', 'beijing-temple-heaven-3.png', 'beijing-temple-heaven-4.png'],
    desc: [
      `Built in 1420 and more architecturally perfect than anything else in Beijing, the Temple of Heaven complex was where the Emperor came each winter solstice to pray for a good harvest. The Hall of Prayer for Good Harvests — a triple-roofed circular masterpiece in deep blue tile — is considered the finest example of Chinese religious architecture in existence. Standing beneath it, you understand why.`,
      `The surrounding park is as much of a draw as the temple itself. Every morning from 6 AM, thousands of Beijing locals gather here to practise tai chi, play traditional instruments, fly kites, sing opera, play cards and walk backwards (an old health practice). It's a living window into daily Beijing life that no amount of tourist attractions can replicate.`,
      `Don't miss the Echo Wall — a circular wall around the Imperial Vault of Heaven where whispers travel all the way around the circumference. The ancient acoustics still work perfectly after 600 years. Arrive early, walk slowly, and budget half a day minimum.`
    ]
  },
  summerpalace: {
    title: 'Summer Palace',
    img: 'beijing-summer-palace.png',
    city: 'Beijing',
    gallery: ['beijing-summer-palace-2.png', 'beijing-summer-palace-3.png', 'beijing-summer-palace-4.png'],
    desc: [
      `The Summer Palace is Beijing's most beautiful imperial retreat — 290 hectares of lakes, gardens, palaces and pavilions built as an escape from the summer heat. At its heart, Kunming Lake was hand-dug by 100,000 workers on the orders of Empress Cixi, who also used navy funds to build a marble boat that never sailed. The audacity is imperial.`,
      `The Long Corridor stretches 728 metres along the northern shore of the lake, its painted beams covered in over 14,000 individual scenes from Chinese history, mythology and literature. Walking it slowly takes 30 minutes. Every panel tells a story. It's one of the most extraordinary painted spaces on earth.`,
      `Hire a rowing boat on Kunming Lake and drift past willow trees and lotus flowers toward the Seventeen Arch Bridge — 150 metres long, 544 stone lions, perfectly reflected in still water at dusk. This is the side of Beijing that most visitors miss entirely. Come late afternoon and stay for the sunset.`
    ]
  },
  sijimingfu: {
    title: 'Sijimingfu — Imperial Duck',
    img: 'beijing-sijimingfu.png',
    city: 'Beijing',
    gallery: ['beijing-sijimingfu-2.png', 'beijing-sijimingfu-3.png', 'beijing-sijimingfu-4.png'],
    desc: [
      `Sijimingfu is Beijing's most storied Peking Duck restaurant — a converted Qing dynasty courtyard house steps from the Forbidden City, where the recipe has been passed down through the same family for four generations. The setting alone justifies the visit: red lanterns in a carved wooden courtyard, the smell of hickory smoke drifting from century-old ovens, waitstaff in traditional dress gliding between tables.`,
      `The ducks here are raised on a specific grain diet for 65 days, then air-dried for 24 hours before roasting in a closed oven over jujube and pear wood — a technique that produces skin so thin and crackling it shatters at a touch. The chef carves it at the table in under two minutes: 108 slices, every one skin-on, presented on antique blue-and-white porcelain.`,
      `Order the full duck set: start with the crispy skin dipped in fine sugar, move through the wrapped pancakes, then finish with a bowl of silky duck bone congee that has been simmering since morning. Book the courtyard room if you can — eating under paper lanterns with the roofline of the Forbidden City visible beyond the walls is the kind of moment you don't forget.`
    ]
  },
  hutong: {
    title: 'Hutong Neighbourhood Tour',
    img: 'beijing-hutong.png',
    city: 'Beijing',
    gallery: ['beijing-hutong-2.png', 'beijing-hutong-3.png', 'beijing-hutong-4.png'],
    desc: [
      `Beijing's hutongs are the ancient grey-walled alleyways that formed the city's residential fabric for 700 years. Narrow, interconnected, often smelling of coal smoke and street food, they are the opposite of everything modern Beijing projects — and they are completely unmissable. The areas around Nanluoguxiang, Gulou and Shichahai are the most atmospheric.`,
      `Explore by rickshaw or on foot. Peer through open courtyard gates into siheyuan — traditional family compounds where three or four generations may still live together around a shared stone courtyard. Buy a jianbing (egg crepe) from a street cart. Follow the smell of grilled lamb skewers into a lantern-lit alley at night.`,
      `The hutongs are disappearing fast — Beijing has lost over 90% of them to modernisation. The ones that remain are living history, and experiencing them now, while they still exist, feels urgent. End the evening at one of the rooftop bars overlooking the Drum Tower: cold beer, ancient skyline, the sound of Beijing at night.`
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

// Top nav (Hotels / Activities)
document.querySelectorAll('.top-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('section-' + tab.dataset.section).classList.add('active');
  });
});

// Hotel city tabs
document.querySelectorAll('[data-hotel-city]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-hotel-city]').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.hotel-city').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.hotelCity).classList.add('active');
  });
});

// City tabs
document.querySelectorAll('.tab:not([data-hotel-city])').forEach(tab => {
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

// Open modal via details btn or card click
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.dataset.id); });
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

  const galleryHtml = a.gallery.map(src =>
    `<img src="${src}" alt="${a.title}" loading="lazy" />`
  ).join('');

  modalContent.innerHTML = `
    <img class="modal-hero" src="${a.img}" alt="${a.title}" />
    <h2>${a.title}</h2>
    <div class="modal-gallery">${galleryHtml}</div>
    ${a.desc.map(p => `<p>${p}</p>`).join('')}
    <div class="modal-upvote">
      <button class="upvote-btn" data-id="${id}">❤️ <span class="count">${getVotes(id)}</span> I want to go!</button>
    </div>
  `;

  modalContent.querySelector('.upvote-btn').addEventListener('click', e => {
    handleUpvote(id, e.currentTarget);
  });

  // Lightbox on gallery image click
  modalContent.querySelectorAll('.modal-gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src));
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
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLightbox(); closeModal(); } });

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
}
function closeLightbox() {
  lightbox.classList.remove('open');
}
lightbox.addEventListener('click', closeLightbox);
