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
    { icon: '🍲', text: '新京熹·北京涮肉 (三里屯耀莱店) · 景泰蓝铜锅涮肉 · dinner 18:00', id: 'xinjingxi', note: "Dinner 18:00 (Emma's pick). Upscale old-Beijing copper-pot lamb in cloisonné pots — #1 on Dianping's Sanlitun/Gongti hotpot list, 口味4.8/环境4.8, 12,900+ reviews, ~¥230pp. Yaolai Center Bldg C, 幸福二村二巷, Chaoyang (by Workers' Stadium / 工体) — ~15 min taxi from the Grand Hyatt. 包间 + baby chairs." },
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
    { icon: '🎨', text: 'Tianzifang 田子坊 · morning (today, drier day)', note: 'Cami\'s pick #2 — shikumen lanes of cafés, craft shops and galleries (泰康路210弄). Moved to Saturday: today is the drier day (0% till noon, drizzle risk only from ~15:00). Tianzifang, Xintiandi and tonight\'s INS are all within 1–2 km, so the day ends where the party is. L1 上海火车站 → 徐家汇, L9 → 打浦桥 exit 1 (3 min walk), or ~20 min taxi.' },
    { icon: '🏛️', text: 'Xintiandi 新天地 · late morning (indoor-friendly)', note: 'Restored shikumen blocks 10 min taxi / 20 min walk north-east — malls and covered arcades, good for a wet hour and a coffee.' },
    { icon: '🌳', text: 'French Concession stroll 武康路 · 安福路 · 永康路 · afternoon (weather permitting)', id: 'frenchconcession', note: 'Plane-tree streets, the Wukang Building, Harmay (安福路308号) and the little shops. If it\'s pouring: swap for Harmay + the cafés on 安福路, or the ZZER warehouse (indoor, Hongqiao, 25 min).' },
    { icon: '🍽️', text: 'DINNER · HOMES 上海本帮菜 (襄阳公园店) · ~18:30 (Joe\'s pick)', note: 'Verified on Dianping: 必吃榜 2026 must-eat list, 24,657 reviews, 口味/环境/服务 4.7, ~¥168 pp, listed 21 years — proper Shanghainese: 红烧肉, 本帮熏鲳鱼, 鳝丝, 油爆虾. 新乐路47号, Xuhui (徐汇区新乐路47号), by 襄阳公园; dinner service 17:00–21:00 (lunch 11:00–14:00). Private rooms, big tables, baby chairs. Getting there: 10 min taxi from 武康路/安福路; from the Pullman ~20 min taxi or L1 → 陕西南路 (3 stops) exit 10, 490 m walk. After dinner INS is 10 min by taxi (2 km). Book (订座) via Dianping — Emma.' },
    { icon: '🍸', text: 'Pre-INS drink · 酿青 Herbal Bar · optional', id: 'herbalbar', note: '酿青 Herbal Bar, 襄阳北路100号 2F (TCM cocktails, from 17:00), 10 min from 丰盛里, 10 min to INS — a civilised first round before the club.' },
    { icon: '🎉', text: 'INS 新乐园 (Fuxing Park) · Saturday night · party', id: 'bars', note: 'Our party night. INS Land 新乐园, 109 Yandang Rd (雁荡路109号) inside 复兴公园, 10 min taxi from 丰盛里 — a 6-floor, 20,000 m² club complex (Freshman, HUSH, RADi and more) open 20:00–04:00. All-access pass 全馆通票 ¥288 Sat; bring passport or a clear photo of it. Back to the Pullman: Didi 15–20 min, taxis all night.' },
  ],
  '2026-10-19': [
    { icon: '☕', text: 'Slow morning · hotel breakfast till 10:30, then free (Suhe Creek walk, 1000 Trees, or the drone run below)', note: 'Everything today is pushed to the evening per Florian, so the morning is yours. Easy options from the Pullman: Suzhou Creek promenade (10 min walk), 天安千树 terraces (11 min), 静安大悦城 (20 min). Lunch wherever you are — 粤来记/日月光 if you go south, 1000 Trees if you stay north.' },
    { icon: '🚁', text: 'West Bund drone pickup + riverside · late morning / lunch · only if dry', note: 'Meituan\'s drone route (McDonald\'s + ~20 brands → kiosk by 西岸滑板公园, 龙腾大道) is grounded in rain or wind — Monday forecast is light drizzle on and off, so check the app first. From Yu Garden ~20 min taxi (6 km) south-west; order in Meituan (Emma), 无人机配送 + 西岸滑板公园 pickup, 2.4 kg max. Then back north-east to the Bund for the lights: ~25 min taxi, or L11 云锦路 → 徐家汇 → L1 人民广场 (~40 min). Do it before 14:30 so you reach Yu Garden by 15:30; from the West Bund to Yu Garden ~20 min taxi.' },
    { icon: '🏮', text: '豫园 bazaar · 九曲桥 · 湖心亭 · 老街 at dusk · ~17:00 (garden CLOSED Mondays → Tue 09:30; 城隍庙 closed 16:30)', note: 'The classical garden itself is closed every Monday — my miss. Tonight is the surroundings only, and they are the evening show anyway: 九曲桥 zigzag bridge, 湖心亭 teahouse (till 22:00), the 老街 lanes and 南翔馒头店 (till 20:00), lit from ~17:30. City God Temple itself shuts at 16:30 (tickets till 16:00), so skip it tonight. The garden interior is now tomorrow 09:30. From the Pullman: ~15 min taxi or L10 to 豫园; 15 min walk north to the Bund afterwards.' },
    { icon: '🌊', text: 'The Bund at NIGHT 外滩夜景 · 18:30–19:30', id: 'bund', note: 'Florian\'s rule: Bund at night. 15 min walk north from Yu Garden. Be on the promenade by 18:30; the Lujiazui towers light up at 19:00. Walk south-to-north so the Shanghai Tower is in front of you; dinner is right on the strip when you\'re done.' },
    { icon: '🥢', text: 'DINNER · 来意艺术中餐厅 Laiyi (外滩店) · ~19:30 · Cantonese on the Bund', note: 'Florian\'s pick. Dianping 4.6 (4.5-star tier), ¥218 pp, Cantonese with an art-gallery dining room, on 中山东一路 — the Bund strip itself, so you walk straight in after the lights (exact building: see the Dianping link). Hours 11:00–14:00 / 17:00–22:00. Dim sum is mainly the lunch menu; evenings are roast meats, seafood and Cantonese classics. 12 people → book ahead (Emma via Dianping/phone). https://m.dianping.com/shop/1035643525' },
    { icon: '🏙️', text: 'Shanghai Tower 118F 上海之巅 · ~21:00 · optional tonight (last entry 21:30)', id: 'tower', note: 'Open 08:30–22:00, last entry 21:30, adult ¥180 / child ¥90. From the Bund: L2 南京东路 → 陆家嘴 (1 stop) or the 金陵东路 ferry, then 10 min walk to 银城中路501号 B1; ~25 min door to door, so leaving 来意 by 20:45 puts you up top by ~21:10, last entry 21:30 — tight; the cruise or Tuesday\'s slot is the relaxed alternative. Forecast tonight: light drizzle, 20–25% — the deck is indoors, haze is the only risk. If you do it tonight, Tuesday\'s tower slot becomes free time around the Google visit.' },
    { icon: '🚢', text: 'Huangpu River cruise · optional alternative to the tower · from 十六铺 on the Bund side', id: 'rivercruise', note: 'Optional: 45–60 min cruise; boards at 十六铺 (Puxi) or the 东方明珠 pier on this side. Skip if it\'s drizzling — the spa below is the wet-weather plan.' },
  ],
  '2026-10-20': [
    { icon: '🏘️', text: 'Zhujiajiao 朱家角 water town · all morning · Didi from the Pullman ~09:30 (48 km, 50–60 min) → drop at 朱家角古镇游客中心 课植园路555号', id: 'zhujiajiao', note: 'Florian\'s call Tue morning. Door to door by Didi is the only sane way for the group: 48.5 km, 36 min without traffic, 50–60 min at this hour, fixed fare shown in the app (~¥150–200 per car, estimate). Aim point for the driver: 朱家角古镇游客中心, 课植园路555号 — the official entrance with the car park; the old town is pedestrian from there. Route on foot: 课植园 garden (¥20) → 北大街 (the main lane, 阿婆粽, 扎肉, 大清邮局) → 放生桥 (the big stone bridge, the photo) → 漕河街 back. Town is free; paid sights ~08:30–16:30; boat rides from 放生桥. Forecast (09:20 today): dry and 25–26 °C through the afternoon, rain only after ~22:00 — no umbrella needed. Metro alternative L1 → L2 → L17 朱家角 takes ~1 h 40 + 1.7 km walk.' },
    { icon: '🥟', text: 'LUNCH · 冰城老于家 (延平路店) · 延平路128号, 静安 · Dongbei home cooking · on the way back from 朱家角', note: 'Florian\'s pick. Meituan 4.5 ★ (6,952 reviews), open till 00:00. 冰城 = Harbin-style 东北菜: mapo tofu ✓, pork dumplings ✓ (no beef/chicken dumplings), 锅包肉, 地三鲜, big portions, cheap (~¥80 pp at the sister branch). 延平路 × 武定路, 曹家渡: 3.8 km / 10 min taxi from the Pullman; from 朱家角 it\'s ~45 km, 50–60 min — the driver can drop you straight there. Amap: https://surl.amap.com/1ar9eXO21i7SS' },
    { icon: '🕐', text: 'Afternoon · OPEN — options: Google office SWFC (needs a host), Shanghai Tower 118F (08:30–22:00, last entry 21:30), Yu Garden interior (last entry 16:00, closed Mon), or hotel rest before the spa', note: 'Left open per Florian. If Google + Tower: Didi back from 朱家角 to Lujiazui is ~55 km / 60–70 min, so leave the water town by 13:30. Lunch idea in Lujiazui: 醉辉皇 上海中心店 (3F, dim sum 11–14 / 16:30–22) or 世纪100 on 87F of the Google building (¥288, 11:30–14 / 17:30–21). Yu Garden interior: ¥40, 1–1.5 h, enter from the bazaar — it was moved here from Monday (closed Mondays).' },
    { icon: '💆', text: 'EVENING · Chinese massage + foot massage · place TBD (Florian sends it)', note: 'Spa scratched per Florian (Tue 16:20). Tonight = a proper 中式推拿 + 足疗 session instead; the venue comes from Florian — the entry gets the address, Dianping score and hours as soon as it lands. Rain arrives ~22:00, so an indoor evening anyway.' },
    { icon: '🍽️', text: 'DINNER · open — option 吉士酒家 Jesse (Shanghainese classics, 天平路41号, 11–14:30 / 17–21:30)', id: 'shanghainese', note: 'No fixed dinner since the spa (which had dinner inside) is gone. Jesse is the ready-made option: tiny, book ahead, 红烧肉, 葱烤大排, ~¥200 pp. Or eat near the massage place once we know where it is.' },
  ],
  '2026-10-21': [
    { icon: '🛫', text: "CA929 · PVG → NRT · 10:00–14:00 (Hisa's family out)", id: 'flight-ca929', note: 'Early start — leave the hotel 06:30–07:00 for a 10:00 departure. Narita T1, not Haneda.' },
    { icon: '🏢', text: 'Google Shanghai office · SWFC 环球金融中心 世纪大道100号 · late morning (host needed)', note: 'Wednesday = workday. Florian arranges a Shanghai Googler as host; non-Googlers need one at reception. From the Pullman: Didi ~25 min (~¥35) or L1 上海火车站 → 人民广场, L2 → 陆家嘴 (~25 min). Calendar for Wed cleared per Florian (16:20 Tue) — only Google, lunch and the drone are fixed; evening open.' },
    { icon: '🍽️', text: 'LUNCH at the Google office · ~12:00 (with the host) · fallback 世纪100, Park Hyatt 87F, same building', note: 'Florian: lunch at the office. If the host can\'t sign guests into the café, 世纪100 (Park Hyatt 87F, Cantonese, Dianping 4.6, ¥288, 11:30–14:00) is in the same tower; 醉辉皇 (3F Shanghai Tower, dim sum 11–14) is 5 min away.' },
    { icon: '🚁', text: 'West Bund drone delivery 美团无人机 · ~14:00–15:30 · 西岸滑板公园 kiosk, 瑞宁路 (by 龙美术馆) · order before 15:30', note: 'No public drone landing point exists in Pudong/Lujiazui (the only Pudong locker is a residential one in 张江), so it\'s the West Bund network — the closest to Google: 11 km, 20–25 min taxi via 卢浦大桥 from SWFC. At the kiosk scan the QR, order (McDonald\'s, M Stand, 阿嬷手作 … ~20 brands), drone lands in ~10–12 min. Daylight only; Shanghai ops stop ~16:45 — be ordering by 15:30. Other landing points on the same network: 西岸梦中心, 模速空间, McDonald\'s 龙腾大道. Metro alternative from Lujiazui: L2 → 人民广场, L1 → 徐家汇, L11 → 云锦路, 10-min walk (~45 min).' },
    { icon: '🕐', text: 'Rest of Wed · open (farewell dinner to be re-planned)', note: 'Cleared per Florian. Previous ideas if wanted back: 七宝古镇 half-day, ZZER 只二 warehouse (虹桥天地, 10–22), farewell dinner 汕苑 静安店 (3 min from the Pullman, Chaoshan seafood). Thursday is the Maglev + flight home.' },
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
