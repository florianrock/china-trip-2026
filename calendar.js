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
  '2026-10-11': { city: 'Chongqing → Chengdu', emoji: '🚄' },
};

// Anything actually scheduled. Empty array => day is flagged as free.
const PLANS = {
  '2026-10-08': [
    { icon: '🛬', text: 'Arrive Shanghai' },
    { icon: '✈️', text: 'CA4592 · PVG → TFU · 09:30–12:40 (everyone, incl. Cami & Joe)', id: 'flight-ca4592', note: 'Air China · Pudong T2 → Chengdu Tianfu T2 · all on one flight' },
    { icon: '🌃', text: 'Twin Towers light show (optional)', id: 'lightshow', note: 'From ~19:30 at 交子之环. Metro Line 1 → 金融城, 20 min. Optional — skip it if everyone is wrecked.' },
    { icon: '🥡', text: 'Food delivery to the room', id: 'roomdelivery', note: 'Meituan or Ele.me via the Alipay mini-program. Have the hotel address in Chinese ready.' },
  ],
  '2026-10-09': [
    { icon: '🐼', text: 'Chengdu Panda Base', id: 'pandas', note: 'Giant Panda Baby Zone · 1375 Panda Avenue, Chenghua District · ~30 min from the centre. Go early — the cubs are most active before 10:00.' },
    { icon: '🥩', text: 'Wagyu Hotpot dinner', id: 'wagyu', note: '锦城印象火锅 (彩虹店) · 武侯祠大街19号, Wuhou · Michelin Selected + Black Pearl · open till 02:00, so an easy dinner after the pandas.' },
  ],
  '2026-10-10': [
    { icon: '🚄', text: 'G8613 · 成都东 11:18 → 重庆北 12:37 · ✅ booked (9)', id: 'chongqing', note: 'Booked 1 Oct, 9 tickets. 1h19 on a 复兴号. Full day: Jiefangbei, 李子坝, Hongyadong after dark — and we now sleep in Chongqing (return is Sunday 13:24). We sleep at UrCove by Hyatt (Hongyadong) — booked.' },
    { icon: '🏨', text: 'UrCove by Hyatt Chongqing (Hongyadong) · overnight', id: 'hotel-urcove-chongqing', note: 'Booked. Right at Hongyadong, monorail downstairs, ~10 min walk to Jiefangbei. 9.6/10 on Trip.com.' },
    { icon: '🍜', text: '阿福板凳面 street noodles · lunch', id: 'xiaomian', note: 'Eat on red stools on the pavement. Go to the 解放碑 branch, not the 观音桥 one in the post.' },
    { icon: '🍖', text: '丁老头烤肉 · dinner on 南山', id: 'nanshanbbq', note: 'BBQ terraced down the hillside over the lit skyline. Sunset 18:30 — be seated by 17:30. Line 6 to 上新街 exit 3.' },
  ],
  '2026-10-11': [
    { icon: '🚄', text: 'G3424 · 重庆北 13:24 → 成都东 14:51 · ✅ booked (9)', id: 'chongqing', note: 'Return leg, booked 1 Oct, 9 tickets. 1h27. Morning free in Chongqing; back in Chengdu for tea and the 马旺子 dinner.' },
    { icon: '🍵', text: '熹玥盒子 Xi Yue He Zi · tea + dessert @ 下浩里 (morning)', id: 'xiyuehezi', note: 'Pretty, calm tea-and-dessert house in the 下浩里 old lanes on the south bank (Nan\'an), 下浩里老街128号 (55号店). Next to 龙门浩老街; ~21 min walk over the 东水门 bridge from 洪崖洞. Fits the free Chongqing morning before G3424 at 13:24.' },
    { icon: '🍵', text: 'Afternoon tea — chill', id: 'afternoontea', note: '鹤鸣茶社 in People\'s Park for the local version, or 谧寻/元古 by Taikoo Li if you want quiet. Nothing to see, that is the point.' },
    { icon: '⭐', text: '马旺子·川小馆 · dinner · 17:30', id: 'mawangzi', note: 'Michelin ★ Sichuan, Jinjiang / Taikoo Li (东糠市街1号, 500 m from metro 东门大桥 exit D2). ¥119pp, 4.8★ / 31k reviews, 必吃榜 2026. Kitchen 17:00–20:30, so 17:30 is an early seating — go right on open, it gets packed. 可预订 — call 028-64231923 or reserve on Dianping. Has baby chairs.' },
  ],
  '2026-10-12': [
    { icon: '✈️', text: 'MU6644 · CTU → PKX · dep 12:40', id: 'flight-mu664', note: 'China Eastern · Chengdu Shuangliu (CTU) → Beijing Daxing · ⚠️ departs SHUANGLIU, not the Tianfu you landed at (~70 km apart)' },
    { icon: '🍢', text: '很久以前羊肉串 · dinner', id: 'henjiu', note: 'Gulou branch, 50 m north of Gulou Dajie exit A2. Open till 02:00, ~¥93 a head — easy after a travel day.' },
  ],
  '2026-10-13': [
    { icon: '🛍️', text: 'Shopping day', id: 'shopping', note: 'Tuesday — the good day for all of it. Panjiayuan in the morning, Silk Street or Sanlitun after lunch.' },
    { icon: '🏬', text: '三里屯太古里', id: 'sanlitun', note: 'Midweek is the time to go — weekend afternoons after 15:00 are a wall of people.' },
    { icon: '🛒', text: 'Supermarket run', id: 'supermarket', note: '盒马 Hema for the spectacle, 物美/永辉 for the cheap snacks worth taking home. Sort Alipay before you go.' },
    { icon: '🍜', text: '方砖厂69号炸酱面 (王府井食品商场店) · old-Beijing zhajiangmian · lunch 13:30', id: 'fangzhuanchang', note: 'Lunch 13:30. MICHELIN Bib Gourmand old-Beijing fried-sauce noodles (炸酱面) — plus braised tripe (焖肚) & shredded roast duck. 3F, Beijing Food Mall, 186 Wangfujing St, Dongcheng. It\'s a market — meet out front.' },
    { icon: '🍲', text: '新京熙·北京涮肉 (三里屯耀莱店) · 景泰蓝铜锅涮肉 · dinner 18:00', id: 'xinjingxi', note: "Dinner 18:00 (Emma's pick). Upscale old-Beijing copper-pot lamb in cloisonné pots — #1 on Dianping's Sanlitun/Gongti hotpot list, 口味4.8/环境4.8, 12,900+ reviews, ~¥230pp. Yaolai Center Bldg C, 幸福二村二巷, Chaoyang (by Workers' Stadium / 工体) — ~15 min taxi from the Grand Hyatt. 包间 + baby chairs." },
  ],
  '2026-10-14': [
    { icon: '🛬', text: "CA184 · HND → PEK · 08:30–11:20 (Hisa's family)", id: 'flight-ca184', note: 'Mario & Sonia. Beijing CAPITAL (PEK), not Daxing — meet at the Grand Hyatt, not an airport.' },
    { icon: '🚶', text: 'Gulou → Shichahai → Nanluoguxiang citywalk', id: 'citywalk', note: 'Flat, free, ~2.5 km. Evening is best — lakes lit, tour groups gone. Easy on an arrival day.' },
    { icon: '🏮', text: '胡同 — old Beijing courtyard lanes', id: 'hutong', note: 'The siheyuan courtyard houses the citywalk runs through. Nanluoguxiang, Line 6/8.' },
  ],
  '2026-10-15': [
    { icon: '🚗', text: 'Depart for the Great Wall · 06:30 · cars in front of the Grand Hyatt', id: 'wall-departure', note: 'Private cars (round trip) leave at 06:30 from in front of the Grand Hyatt — a bit earlier to beat the traffic and crowds (~1.5 h to the wall). Everyone sort breakfast in advance: ideally order it on Meituan (美团) the night before so it is ready to grab before 6:30.' },
    { icon: '🧱', text: 'Great Wall of China', id: 'wall' },
    { icon: '🍢', text: 'Dinner · 很久以前羊肉串 (王府井apm店) · 19:00', id: 'henjiuyiqian', note: 'Old-Beijing lamb-skewer BBQ — 4.9★ (1,272 reviews), ~¥91pp, #1 grill in Dongcheng. Beijing apm mall, 6F L607 (王府井大街138号), ~14 min (960 m) walk from the hotel or a short taxi. Signature 呼伦贝尔 lamb skewers, grilled bread slices, beef-roll with enoki. Private rooms + baby chairs; open to midnight.' },
  ],
  '2026-10-16': [
    { icon: '🏛️', text: '✅ Forbidden City — guided tour 09:30', id: 'forbidden', note: 'BOOKED (Discover Beijing Tours) — Tian\'anmen + Forbidden City, tickets incl. Meet 09:30 at 老舍茶馆 Laoshe Teahouse (panda flag), arrive 10 min early. Bring everyone\'s passport! Taxi: 请带我去老舍茶馆. Subway: Line 2 → Qianmen Exit C, 300 m west. Guide Qing +86 13522069857.' },
    { icon: '🦆', text: '四季民福 (西单华威约饭街店) · Peking duck · ✅ 18:30 reservation', id: 'sijimingfu', note: "RESERVED 18:30 — NOTE: the XIDAN branch, not the Forbidden City one. 8F, Huawei Building, 130 Xidan North St (西单北大街130号华威大厦8层39号), Xicheng. From the Grand Hyatt: Metro Line 1 from 王府井 (under Oriental Plaza) 3 stops west to 西单, ~20–25 min door to door, ¥3 · Didi/taxi ~4 km along Chang'an Ave, 15–25 min in Friday-evening traffic, ~¥20–30. Tell the driver: 西单北大街130号华威大厦." },
    { icon: '🎤', text: "KTV with Emma's friends · evening", id: 'ktv', note: 'Friday, so weekend rates — book a 团购 on Dianping ahead. 量贩式 KTV, not 商务KTV. 魅KTV on Wangfujing is walkable from the hotel.' },
  ],
  '2026-10-17': [
    { icon: '🚄', text: 'G17 · Beijing South → Shanghai Station · 13:00–17:35 · Business 商务座 · ✅ booked', id: 'train', note: "Everyone's on G17 in BUSINESS (商务座), Car 1 (01车) — find your seat: Noah 05F (child) · Sonja 06A · Mario 06F · Hisa 07A · Olli 07F · Cami 08A · Joe 08F · Andre 09A · Florian 10A · Emma 10F · + little Koch Adam (free, on a lap). ¥2337 each (child ¥1870). Smart Fuxing set, 4h35. Arrives 上海站 (city centre), NOT Hongqiao." },
    { icon: '🥟', text: 'Dim sum dinner · evening · restaurant TBD (placeholder)', note: 'Placeholder for the arrival evening — train in at 17:35 (上海站), drop bags at the Pullman, then dim sum nearby. Restaurant not chosen yet; shortlist: 誉八仙 Cantonese teahouse at 静安大悦城 (~20 min walk / 5 min taxi), 莱莱小笼 Michelin crab-roe xiaolongbao at People\'s Square (~10 min taxi), or Seventh Son 家全七福 (Michelin 1★, 威海路500号, ~15 min taxi, ~¥300–450pp). Will be replaced once Florian picks.' },
  ],
  '2026-10-18': [
    { icon: '🏮', text: 'Nanshi / Old City — Yu Garden, City God Temple, Old Street · morning · draft', id: 'yugarden', note: 'Cami\'s pick #1 — the old walled city (南市/老城厢). Start ~09:30: Yu Garden (豫园), the City God Temple (城隍庙, ¥10, 08:30–16:30) and 上海老街 lanes around them. From the Pullman: ~15 min taxi, or Metro L1 上海火车站 → 人民广场 then 15 min walk / L10 to 豫园 station. Weekend crowds — go early.' },
    { icon: '🥟', text: 'Lunch · 南翔小笼 in the Yu Garden bazaar · draft', id: 'dimsum', note: 'Nanxiang Xiaolongbao, 85 Yuyuan Rd inside the bazaar — the classic (queues; upstairs rooms are calmer). Alt if the line is silly: 莱莱小笼 is 10 min taxi north (moved to Sun 19 Oct as the French-Concession-day lunch option).' },
    { icon: '🌊', text: 'The Bund waterfront · afternoon · draft', id: 'bund', note: 'From Yu Garden it\'s a 15 min walk north-east to the Bund promenade (外滩) — colonial skyline on one side, Lujiazui towers across the river. Best light late afternoon; the towers light up from ~19:00.' },
    { icon: '🏙️', text: 'Shanghai Tower — 118F observation deck · sunset · draft', id: 'tower', note: '上海之巅 observatory on floor 118 (546 m), 08:30–22:00 (last entry 21:30), adult ¥180 / child ¥90 (2026). Cross from the Bund: Metro L2 南京东路 → 陆家嘴 (1 stop) or the ferry from 金陵东路 pier; entrance at 银城中路501号 B1. Sunset slot = day + night views on one ticket. Alt: Oriental Pearl two-sphere ticket ¥199.' },
    { icon: '🏢', text: 'Google Shanghai office — maybe · draft', note: 'Optional. Google\'s Shanghai office is in the Shanghai World Financial Center (环球金融中心, 100 Century Ave 世纪大道100号), the bottle-opener tower next to Shanghai Tower — 5 min walk, so it slots before/after the observation deck. Florian to arrange with a local Googler for building access; non-Googlers need a host.' },
    { icon: '🚢', text: 'Huangpu River night cruise · optional · draft', id: 'rivercruise', note: 'Optional closer: 45–60 min night cruise from 十六铺 Shiliupu Wharf (中山东二路479号), 10 min walk south of the Bund / next to Yu Garden — so it fits either before the Tower or instead of it. Boats run until ~21:30.' },
    { icon: '🎉', text: 'INS 新乐园 (Fuxing Park) · Saturday night · party', id: 'bars', note: 'Our party night (moved from Fri 17 to Sat 18). INS Land 新乐园, 109 Yandang Rd (雁荡路109号) inside 复兴公园 Fuxing Park, Huangpu — a 6-floor, 20,000 m² club complex (Freshman, HUSH, RADi and more) open 20:00–04:00. All-access pass 全馆通票 ¥288 Fri/Sat (¥168 Sun–Thu); bring passport or a clear photo of it. From the Pullman ~4 km: Didi/taxi 15–20 min (~¥25), tell the driver 复兴公园 雁荡路109号 INS; Metro L1 上海火车站 → 黄陂南路 then 10 min walk. Taxis back run all night.' },
  ],
  '2026-10-19': [
    { icon: '🎨', text: 'Tianzifang 田子坊 · morning · draft', note: 'Cami\'s pick #2 — shikumen lanes turned into cafés, craft shops and small galleries (泰康路210弄). Touristy but fun for an hour or two; go before 11:00 for space. From the Pullman: ~20 min taxi, or Metro L1 上海火车站 → 徐家汇, L9 → 打浦桥 exit 1, 3 min walk. Grouped with the rest of the former French Concession below — all within 1–2 km.' },
    { icon: '🏛️', text: 'Xintiandi 新天地 · late morning · draft', note: 'Restored shikumen blocks, 10 min taxi / 20 min walk north-east of Tianzifang — a polished version of the same architecture, good for a coffee stop and the 中共一大 museum next door if anyone\'s curious.' },
    { icon: '🥟', text: 'Lunch · 莱莱小笼 (Michelin crab-roe) or Seventh Son 家全七福 (Michelin 1★ dim sum) · draft', id: 'lailai', note: 'Two options, both ~10 min taxi from Xintiandi: 莱莱小笼 (504 Tianjin Rd, Michelin Bib crab-roe xiaolongbao, ~¥50–100pp, no reservations, queues) or Seventh Son 家全七福 (2/F, 500 Weihai Rd, Cantonese dim sum lunch ~¥300–450pp — book ahead for 12, ask for a private room). Florian to pick.' },
    { icon: '🌳', text: 'Former French Concession stroll — 武康路 · 安福路 · 永康路 · afternoon · draft', id: 'frenchconcession', note: 'Plane-tree streets, the Wukang Building, Harmay (安福路308号) and the little shops along 安福路/五原路. 15 min taxi west from lunch. Easy, flat, kid-friendly wandering; ice cream and coffee everywhere.' },
    { icon: '🚁', text: 'West Bund 徐汇滨江 — Meituan drone delivery + riverside · late afternoon · draft', note: 'Meituan\'s drone route (opened 10 Sep 2026): McDonald\'s + ~20 brands fly from 龙腾大道 to the pickup kiosk by the 西岸滑板公园 skate park / 西岸梦中心. ~15 min taxi south from 武康路. Order in the Meituan app (Chinese payment — Emma), choose 无人机配送 + the 西岸滑板公园 pickup point; ~10 min in good weather, grounded in rain/wind, max 2.4 kg per order — a snack run for the kids, not dinner. The riverside itself is worth the stop: skate park, galleries, lawns. Back to the Pullman ~30 min taxi or L11 云锦路 → 徐家汇 → L1.' },
    { icon: '🍸', text: 'Evening · 酿青 Herbal Bar / INS · optional · draft', id: 'herbalbar', note: 'Optional for the grown-ups: 酿青 Herbal Bar (襄阳北路100号 2F, TCM cocktails, open 17:00) is in the same neighbourhood; INS 新乐园 in Fuxing Park is the louder option. Both ~10–15 min taxi back to the Pullman.' },
  ],
  '2026-10-20': [
    { icon: '🏘️', text: 'Qibao Ancient Town 七宝古镇 · morning · draft', note: 'Cami\'s pick #3 — a small Song-dynasty canal town inside the city, free entry, old street split by the canal (north = shops, south = snacks: 汤团, 海棠糕, 臭豆腐). Half a day is plenty. Metro L1 上海火车站 → 徐家汇, L9 → 七宝 station, then 10 min walk — ~45–50 min total; taxi ~40 min (17 km). It\'s the close, easy water town — Zhujiajiao (popup) is the bigger, prettier one but 30 km out and a full day; pick one, not both.' },
    { icon: '🍜', text: 'Lunch in Qibao — old-street snacks · draft', note: 'Graze along 七宝老街 south street: 七宝汤团 (sweet/savory glutinous dumplings), 海棠糕, 白切羊肉. Cash-free, WeChat Pay everywhere.' },
    { icon: '🛍️', text: 'Optional on the way back — ZZER 只二 transparent warehouse (Hongqiao Hub) · draft', id: 'zzer', note: 'Second-hand luxury warehouse at Hongqiao The Hub (绍虹路52号 B1), on the L9/L10 corridor back from Qibao — 15 min taxi. For anyone who wants to shop; others go straight back to the hotel.' },
    { icon: '💆', text: 'Afternoon · foot massage / spa near the hotel · draft', id: 'footmassage', note: 'Wind-down afternoon before the last full day: 足疗 near the Pullman (popup has the shortlist) or the 24 h Qushui Langting spa. Book a slot for the group via Dianping/Emma.' },
    { icon: '🍲', text: 'Dinner · Shanghainese classics · draft', id: 'shanghainese', note: 'Last proper group dinner: 本帮菜 — red-braised pork (红烧肉), 熏鱼, 醉鸡, 葱油拌面 (popup has the restaurant notes). Keep it near the hotel/People\'s Square so the latecomers from the spa can join.' },
  ],
  '2026-10-21': [
    { icon: '🛫', text: "CA929 · PVG → NRT · 10:00–14:00 (Hisa's family out)", id: 'flight-ca929', note: 'Early start — leave the hotel 06:30–07:00 for a 10:00 departure. Narita T1, not Haneda.' },
  ],
  '2026-10-22': [
    { icon: '🚄', text: 'Ride the Maglev to the airport (if flying from PVG) · 龙阳路 → 浦东机场', id: 'maglev', note: 'The Shanghai Transrapid — the only commercial maglev in the world. Metro Line 2 (or a taxi) to Longyang Road 龙阳路, then the maglev: 30 km in ~7.5 min at up to 300 km/h, a train every ~15–20 min, ~¥50 one-way (¥40 if you show a same-day boarding pass). Only serves Pudong (PVG) — no good if you fly out of Hongqiao.' },
    { icon: '🛫', text: 'Fly home from Shanghai', id: 'fly-home' },
  ],
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
