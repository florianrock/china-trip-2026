// Shared activity/detail data — consumed by app.js (main page) and
// calendar.js (calendar page). Pure data, no side effects.
const ACTIVITIES = {
  peoplespark: {
    title: '人民公园 — Marriage Market & Heming Tea House',
    addr: "People's Park (人民公园): 祠堂街9号, Qingyang District, Chengdu · Metro Line 2 → People's Park station, exit H, 250 m · Park free · Marriage corner daily 09:00–17:00, busiest Wed/Fri/Sat afternoons",
    img: 'chengdu-peoples-park.jpg',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=人民公园+相亲角+成都',
    gallery: ['chengdu-peoples-park-1.jpg', 'chengdu-peoples-park-2.jpg', 'chengdu-peoples-park-3.jpg', 'chengdu-peoples-park-4.jpg', 'chengdu-peoples-park-5.jpg'],
    desc: [
      `The 相亲角 (xiāngqīnjiǎo, "marriage corner") is the strangest and most human thing in Chengdu. Parents advertise their unmarried adult children on sheets hung along curved racks under the trees: birth year, height, salary, whether there is a flat and a car, hukou, education — and what they expect in return. Then they stand around bargaining with each other on their children's behalf. The children themselves are frequently unaware any of this is happening.`,
      `Since the park took the corner over, listings are centrally managed rather than self-posted, and colour-coded: <strong>pink sheets for women, teal for men</strong>. Each rack panel holds 56 sheets and is signed with its number range — 女生 1441–1496, 男生 785–824 — so the numbering runs past 1,490 on both sides. That is roughly three thousand people on display at once.`,
      `You do not need any Chinese to enjoy it. Half the crowd is foreigners holding phones up to the sheets with translation apps open, and the aunties will happily try to recruit you: one recent visitor sat down on a bench to watch and was immediately asked whether she'd like to hear about somebody's daughter. Do note the park's own warning board — commercial matchmakers work the crowd and their pitch is a scam. Ignore the stalls.`,
      `⏰ Timing matters more than for anything else on this list. The corner is nominally open 09:00–17:00 daily, but it only really happens on <strong>Wednesday, Friday and Saturday afternoons</strong>, with weekend afternoons the peak. On a quiet weekday morning there is almost nothing to see.`,
      `While you're in the park: 鹤鸣茶社 (Heming Tea House), founded 1923, is one of the oldest surviving tea houses in the city — a Republican-era pavilion with carved doors and blue brick paving, and an open-air terrace of bamboo chairs that is the defining image of Chengdu daily life. Tea is ¥12–30 (Zhuyeqing, Mengding Ganlu, jasmine) with free refills, and 采耳 ear-cleaners work the tables with tuning forks for about ¥30–50. It is the exact opposite of the two design tea houses in Taikoo Li — this one is loud, cheap and full of locals playing cards.`,
      `🚶 Pairs naturally with 宽窄巷子 (Kuanzhai Alley), about 10 minutes' walk away, and Chen Mapo's Qinghua Road flagship is ~10 minutes by taxi — so marriage corner, tea, lunch and the alleys make one unhurried half-day.`
    ]
  },
  teahouses: {
    title: 'Chengdu Tea Houses',
    img: 'chengdu-teahouses.jpg',
    addr: 'Mi Xun: The Temple House, 81 Bitieshi St, Jinjiang · Yuangu: Taikoo Li, 2F–3F — both a short walk apart',
    emoji: '🍵',
    city: 'Chengdu',
    gallery: ['chengdu-teahouses-1.jpg','chengdu-teahouses-2.jpg','chengdu-teahouses-3.jpg','chengdu-teahouses-4.jpg','chengdu-teahouses-5.jpg','chengdu-teahouses-6.jpg'],
    maps: 'https://maps.google.com/?q=谧寻茶室+博舍+成都',
    desc: [
      `In Chengdu the invitation is <strong>“出来喝茶撒”</strong> — <em>come out for tea</em>. It arrives whenever the weather is decent, and it usually means nothing in particular: no agenda, no important conversation, not even strong feelings about the tea. Just somewhere to sit lazily with a pot and stare into space. The city has thousands of teahouses and this is what they are for.`,
      `<strong>谧寻茶室 · Mi Xun Teahouse</strong> — inside The Temple House, 81 Bitieshi Street, Jinjiang. <strong>Michelin one star</strong> three years running, and Chengdu's <strong>first Michelin Green Star</strong> for its zero-waste kitchen. Entirely vegetarian, set in a historic courtyard building — the vegan mapo tofu with chanterelles is the dish people talk about. The afternoon tea set is the thing to book. ☎ 028-62974193`,
      `<strong>元古 · Yuangu</strong> — Taikoo Li, second and third floors. New-Chinese creative tea and Chinese pastry, from a group that also runs spaces in Beijing and Shanghai. The dim sum is the draw and, usefully, it isn't sweet.`,
      `<strong>集活 · Jihuo</strong> — a small room down an alley, run on <em>客随主人茶</em>: the host brews whatever they feel like and that is what you drink. Once a few strangers are sitting together it tends to turn into a conversation, which is rather the point.`,
      `Mi Xun and Yuangu are both in the Taikoo Li / Temple House area, so the two pair naturally into one afternoon. Oct 10 and 11 are still open on the calendar.`
    ]
  },
  'hotel-mercure-chengdu': {
    title: 'Mercure Chengdu Tianfu Square',
    addr: 'Jinli East Road, Qingyang District, Chengdu',
    img: 'hotel-mercure-chengdu.png',
    emoji: '🏨', city: 'Chengdu', gallery: [],
    maps: 'https://all.accor.com/hotel/C3D3/index.en.shtml',
    desc: [
      `Our pick for Chengdu — <strong>CHF ~50/night, about CHF 200 for the four nights per room</strong>. Opened August 2025, so everything in it is new.`,
      `Position is the main argument: Jinli East Road puts you walking distance from Jinli Ancient Street and Wuhou Temple, with Tianfu Square close by. That is the touristy heart of Chengdu, and you can walk to most of it.`,
      `Florian has stayed here: basic but very clean, modern, Japanese toilets, laundry room. The trade-off is that it is a 4-star with no Hyatt points — but it saves roughly CHF 320–380 per room against the Grand Hyatt.`
    ]
  },
  'hotel-grand-hyatt-beijing': {
    title: 'Grand Hyatt Beijing',
    addr: 'Wangfujing, Dongcheng District, Beijing',
    img: 'hotel-grand-hyatt-beijing.png',
    emoji: '🏨', city: 'Beijing', gallery: [],
    desc: [
      `Our pick for Beijing — <strong>CHF ~115–120/night, roughly CHF 575–600 for the five nights per room</strong>.`,
      `The location is the reason: Wangfujing is walking distance from the Forbidden City, which matters on the 16th when that is the plan. Same price as the Sofitel and it earns Hyatt points, which the Sofitel does not.`,
      `Caveats worth knowing: the neighbourhood is touristy, and the building is a little older than the newer Beijing luxury stock.`
    ]
  },
  'hotel-pullman-jingan': {
    title: 'Pullman Jing An',
    addr: "Jing'an District, Shanghai",
    img: 'hotel-pullman-jingan.png',
    emoji: '🏨', city: 'Shanghai', gallery: [],
    desc: [
      `Our pick for Shanghai — <strong>CHF ~90/night, about CHF 450 for the five nights per room</strong>. The best value of the Shanghai options.`,
      `Jing'an is central with a strong metro connection, which is what you want across five nights and four still-open days: Disneyland, Zhujiajiao and the French Concession are all straightforward from here.`,
      `Trade-offs: it has a business-hotel feel rather than a boutique one, and there is no Bund view — the Hyatt on the Bund is the alternative if the view matters more than the price.`
    ]
  },
  chongqing: {
    title: 'Chongqing day trip',
    addr: '🎫 G8613 · 成都东 Chengdu East 11:18 → 重庆北 Chongqing North 12:37 · 1h19 · 复兴号 · from ¥174 · Metro Line 2 from Tianfu Square to Chengdu East, ~20 min',
    emoji: '🚄',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=解放碑+重庆',
    gallery: [],
    desc: [
      `<strong>Out on G8613</strong>: 成都东 Chengdu East <strong>11:18</strong> → 重庆北 Chongqing North <strong>12:37</strong>, 1h19 on a 复兴号, from ¥174. That lands us in time for a late lunch and leaves the whole afternoon and evening. Metro Line 2 runs from Tianfu Square to Chengdu East in about 20 minutes, so leaving the hotel around 10:15 is comfortable.`,
      `⚠️ Those times are off a search for a different Saturday — G-train timetables are stable but not guaranteed, so re-check G8613 when actually booking for 10 October. Same for the return: nothing is picked yet, and 洪崖洞 is only worth it after dark, so we want a train somewhere around 21:00–22:00 rather than an afternoon one.`,
      `There are 100+ trains a day on the route in any case — 319 km, the fastest doing it in just over an hour — so nothing collapses if we miss one.`,
      `It is a completely different city from Chengdu despite the proximity. Built on cliffs above the confluence of the Yangtze and the Jialing, it stacks vertically — roads running over rooftops, and a metro line that goes straight through an apartment block at 李子坝. Chengdu is flat and slow; Chongqing is vertical and loud.`,
      `The obvious stops for one day: 解放碑 (Jiefangbei, the central junction), 洪崖洞 (Hongyadong, the stilt-house complex that lights up and is the reason half the photographs of Chongqing exist), 李子坝 for the train-through-the-building, and 磁器口 old town if there is time. Hongyadong is best after dark, which argues for a late train home.`,
      `🎫 Book through Trip.com or 12306 — passports work on both, and you scan in with the passport itself. Chengdu East is on Metro Lines 2 and 7.`
    ]
  },
  xiaomian: {
    title: '重庆小面 — street noodles for lunch',
    addr: '阿福板凳面 Afu Bench Noodles — Jiefangbei branch (解放碑店), and a second at 十八梯/较场口. The one in the post is the 观音桥 branch, Jiangbei, across the river · Alternative: 花市豌杂面, 渝中区民生路85号',
    emoji: '🍜',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=阿福板凳面+解放碑+重庆',
    gallery: ['cq-afu-1.jpg', 'cq-afu-2.jpg', 'cq-afu-3.jpg', 'cq-afu-4.jpg', 'cq-afu-5.jpg', 'cq-afu-6.jpg'],
    desc: [
      `<strong>阿福板凳面 (Ā Fú Bǎndèng Miàn — "Afu Bench Noodles")</strong>. The name is the concept: 板凳 means stool, and you eat sitting on a little red plastic one on the pavement, using a second stool as your table. Half the street outside is seating. This is street noodles in the literal sense.`,
      `The bowls are wide flat noodles under chilli oil with greens, often with a fried egg on top — heavier and chewier than the thin round 小面 noodle. Order a 凉糕 with it: the cold rice-cake pudding in brown-sugar syrup you can see on the stools in the photos, which is the standard local antidote when the chilli gets away from you. Diced watermelon does the same job.`,
      `📍 <strong>Go to the 解放碑 (Jiefangbei) branch, not the one in the post.</strong> The photos are from the 观音桥 branch, which is in Jiangbei across the river; there is a Jiefangbei branch — Trip.com ranks it among the city's top restaurants — plus one at 十八梯/较场口. Either puts you a short walk from where we'll already be for Hongyadong.`,
      `<strong>Alternative if the queue is grim:</strong> 花市豌杂面 at 渝中区民生路85号, also minutes from 解放碑, which tops most local rankings for the classic 豌杂面 — stewed yellow peas and minced pork over the noodles. Ask for it 干馏 (dry-mixed, no soup).`,
      `Either way a bowl is about ¥10–15. Say <strong>微辣 (wēi là)</strong> for mild or <strong>不要辣 (bú yào là)</strong> for none — Chongqing runs hotter than Chengdu by default. The city has roughly 84,000 noodle shops, so nobody agrees on the best one; both of these survive every list.`
    ]
  },

  nanshanbbq: {
    title: '丁老头烤肉 — BBQ over the night skyline',
    addr: '丁老头烤肉·听民谣看夜景, 南山, Nan\'an District · Metro Line 6 to 上新街 Shangxinjie, exit 3, straight then left · Or bus 346 toward 悠山路, off at 一天门, then ~921 m / 14 min on foot · Sunset on 10 Oct is 18:30',
    emoji: '🍖',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=丁老头烤肉+南山+重庆',
    gallery: ['cq-nanshan-1.jpg', 'cq-nanshan-2.jpg', 'cq-nanshan-3.jpg', 'cq-nanshan-4.jpg', 'cq-nanshan-5.jpg', 'cq-nanshan-6.jpg', 'cq-nanshan-7.jpg', 'cq-nanshan-8.jpg', 'cq-nanshan-9.jpg'],
    desc: [
      `Wooden tables terraced down the hillside on 南山 (Nanshan), each with its own charcoal grill and an oil lantern, under trees strung with hundreds more lanterns — and below you the whole of Chongqing, lit. Its full name on the listings is 丁老头烤肉·听民谣看夜景: "Old Ding's BBQ — listen to folk songs, watch the night view". There is live music.`,
      `Chongqing has plenty of night-view platforms, but this one you eat at. You're on the Nan'an side looking across the river at the Yuzhong peninsula, which is the postcard angle on the city — the same skyline everyone photographs, seen whole instead of from underneath.`,
      `⏰ <strong>Get there before sunset.</strong> On 10 October the sun sets at <strong>18:30</strong>, and the whole point is watching it go from sunset through dusk to full city lights. Aim to be sitting by 17:30.`,
      `🚇 Metro <strong>Line 6 to 上新街 (Shangxinjie), exit 3</strong>, straight ahead then left. Or bus 346 toward 悠山路, off at 一天门, then about 921 m on foot. ⚠️ It is genuinely uphill — the walk is the one complaint in every write-up, so wear something you can climb in.`,
      `⚠️ <strong>This clashes with Hongyadong, and that is fine.</strong> Hongyadong is across the river and lights up at the same hour. You cannot stand in it and look at it. From up here you see it, and the towers behind it, all at once — which is the better version. If someone wants Hongyadong up close, do it in the afternoon before coming up.`,
      `🚄 <strong>Watch the last train.</strong> Getting from Nanshan back down and across to 重庆北站 is 40–50 minutes. A dinner running to 21:00 means a 22:00-ish departure at the earliest — worth checking that a train that late exists before committing, or deciding to stay the night in Chongqing instead.`
    ]
  },
  lightshow: {
    title: '天府双塔 Twin Towers Light Show',
    addr: '成都双子塔 / 天府双塔, 天府国际金融中心, 天府大道北段966号, Gaoxin District · Best viewpoint: 交子之环 (Jiaozi Ring, the orange circular footbridge) on 交子大道 · Free, no booking · Metro Line 1 from Tianfu Square to 金融城 Financial City, 8 stops, ~20 min',
    emoji: '🌃',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=交子之环+成都',
    gallery: [],
    desc: [
      `Two 220 m towers whose entire facades are LED screens — about 52,000 m² of display built from roughly 162 km of LED strip. After dark they run animated shows across both buildings together: pandas, cityscapes, characters, the lot. It is free, needs no booking, and is the single most impressive thing to do in Chengdu after dark without planning anything.`,
      `<strong>Where to stand:</strong> not at the foot of the towers — you want distance to see both facades at once. The spot everyone uses is <strong>交子之环</strong>, an orange circular pedestrian bridge on 交子大道 a few minutes away, which frames both towers head-on.`,
      `<strong>Timing:</strong> Chinese sources disagree slightly — some say nightly 19:30–22:30, others give Thursday–Sunday 19:30–22:00 as the regular schedule, with extra shows on public holidays. <strong>8 October is a Thursday</strong>, so it should be running either way, and we arrive just after Golden Week when holiday programming often still lingers. Worth having the hotel confirm the evening's times before we set off.`,
      `<strong>Getting there:</strong> Metro Line 1 runs directly from Tianfu Square (under the hotel) to 金融城 Financial City in about 20 minutes, no changes. Coming back, note the last trains run around 22:30 and the show ends about then — budget for a Didi home rather than sprinting for the metro.`,
      `Optional extra in the same district: the 生机之塔 at Chengdu SKP, a 39 m illuminated water column, lit from 19:30 and best around 20:00–21:00.`,
      `⚠️ If anyone suggests the <strong>339 / 天府熊猫塔</strong> observation tower instead — it has been shut since 2025 after its operating company went into bankruptcy liquidation. Don't build an evening around it.`
    ]
  },
  roomdelivery: {
    title: 'Food delivery to the room',
    addr: 'Meituan 美团 or Ele.me 饿了么, both reachable as mini-programs inside Alipay · Typical delivery fee ¥3–6 · Most Chengdu kitchens deliver until at least 22:00, many far later',
    emoji: '🥡',
    city: 'Chengdu',
    gallery: [],
    desc: [
      `Landing at Tianfu at 12:40 and getting into town takes an hour, so the first evening will be a tired one. Food delivery in China is extraordinarily good and cheap, and getting it to a hotel room is completely normal — this is the low-effort plan for night one.`,
      `<strong>The easy route for foreigners:</strong> open <strong>Alipay</strong> and use the <strong>Meituan (美团)</strong> or <strong>Ele.me (饿了么)</strong> mini-program inside it rather than installing the standalone apps. The mini-programs have built-in translation and accept international cards through Alipay, so you avoid needing a Chinese bank account.`,
      `<strong>What to have ready:</strong> the hotel's address in Chinese characters (get it from reception or the booking confirmation — copy-paste it, don't retype it), the room number, and a phone number the driver can call. Delivery fees run about ¥3–6, and the food itself is a fraction of restaurant prices.`,
      `<strong>How it actually arrives:</strong> most Chinese hotels have the driver leave orders at reception or a locker rather than coming to the door, so expect a call or a message and a short trip to the lobby. Tell reception you're expecting a delivery when you check in.`,
      `Worth ordering the local thing rather than hotel food: 串串香 skewers, 冒菜 (mala hotpot in a bowl, made for one person), or 钟水饺 dumplings all travel well and are exactly what Chengdu does best.`
    ]
  },
  'flight-ca929': {
    title: "CA929 · Shanghai → Tokyo (Hisa's family out)",
    addr: 'Shanghai Pudong (PVG) T2 → Tokyo Narita (NRT) T1 · dep 10:00, arr 14:00 · Wed 21 Oct 2026 · 3h in the air, A350-900',
    emoji: '🛫',
    city: 'Shanghai',
    gallery: [],
    desc: [
      `Air China <strong>CA929</strong>, Pudong Terminal 2 <strong>10:00</strong> → Narita <strong>Terminal 1</strong> <strong>14:00</strong> on Wednesday 21 October 2026. Three hours, on an A350-900.`,
      `Presumably the return half of the same trip as <strong>CA184</strong> on the 14th — Mario and Sonia came in from Haneda and go back out to Narita — so they're with us for the Beijing leg and most of Shanghai, leaving the day before we do.`,
      `⏰ <strong>A 10:00 departure from Pudong is an early start.</strong> PVG is about 50 km from the Pullman Jing An — 45–60 minutes by car, and international check-in wants three hours. That means leaving the hotel around <strong>06:30–07:00</strong>. Either book a car the night before, or use the Maglev from Longyang Road, which covers the airport run in 8 minutes.`,
      `Note it is <strong>Narita, not Haneda</strong> — the opposite Tokyo airport from the one they arrived through. Anyone meeting them at the other end needs to know that.`,
      `🔒 Booking reference deliberately left off this page — it's public.`
    ]
  },
  'flight-ca184': {
    title: "CA184 · Tokyo → Beijing (Hisa's family)",
    addr: 'Tokyo Haneda (HND) T3 → Beijing Capital (PEK) T3 · dep 08:30, arr 11:20 · Wed 14 Oct 2026 · Mario & Sonia Correa',
    emoji: '🛬',
    city: 'Beijing',
    gallery: [],
    desc: [
      `Air China <strong>CA184</strong>, Haneda Terminal 3 <strong>08:30</strong> → Beijing Capital Terminal 3 <strong>11:20</strong> on Wednesday 14 October 2026, about 4h in the air on an A321. Mario and Sonia.`,
      `⚠️ <strong>This is Beijing Capital (PEK), not Daxing.</strong> We fly into <strong>Daxing (PKX)</strong> on the 12th; PEK is the old airport on the opposite side of the city, roughly 60 km from Daxing. Nobody should plan to meet at an airport — the Grand Hyatt is the meeting point.`,
      `Getting them in from PEK T3: the Capital Airport Express runs to Dongzhimen in about 20 minutes, then Line 2 to Line 1 for Wangfujing. A taxi is ~25 km and 30–40 minutes outside rush hour, longer inside it. Landing at 11:20 they should be at the hotel comfortably by 13:00.`,
      `🔒 Booking reference and eTicket numbers deliberately left off this page — it is public. They're in the confirmation email.`
    ]
  },
  'flight-ca4592': {
    title: 'CA4592 · Shanghai → Chengdu',
    addr: 'Shanghai Pudong (PVG) T2 → Chengdu Tianfu (TFU) T2 · dep 09:30, arr 12:40',
    emoji: '✈️',
    city: 'Chengdu',
    gallery: [],
    desc: [
      `Air China <strong>CA4592</strong>, Pudong Terminal 2 <strong>09:30</strong> → Chengdu Tianfu Terminal 2 <strong>12:40</strong> on Thursday 8 October 2026. About 3h10 in the air, 1,660 km, usually an A321neo or A320neo.`,
      `This lands at <strong>Tianfu (TFU)</strong>, the newer airport roughly 50 km south-east of the city — allow an hour to the centre, more at rush hour. It is the same airport MU664 leaves from on the 12th, so the whole Chengdu leg is Tianfu.`,
      `⚠️ Cami and Joe are on <strong>CA4504, which lands at Shuangliu (CTU)</strong> — a different Chengdu airport, about 60 km away, and two hours later. Meeting at the airport does not work; meet at the hotel.`
    ]
  },
  'flight-ca4504': {
    title: 'CA4504 · Shanghai → Chengdu (Cami & Joe)',
    addr: 'Shanghai Pudong (PVG) T2 → Chengdu Shuangliu (CTU) T2 · dep 11:25, arr 14:40',
    emoji: '✈️',
    city: 'Chengdu',
    gallery: [],
    desc: [
      `Air China <strong>CA4504</strong> for Cami and Joe: Pudong Terminal 2 <strong>11:25</strong> → Chengdu <strong>Shuangliu</strong> Terminal 2 <strong>14:40</strong> on Thursday 8 October 2026. About 3h15, usually an A321.`,
      `⚠️ <strong>Different airport from the rest of us.</strong> Shuangliu (CTU) is the old city airport, close in to the south-west; the family's CA4592 lands at Tianfu (TFU), roughly 60 km away on the other side of the city. The two arrivals are also two hours apart — 12:40 versus 14:40.`,
      `The upside is that Shuangliu is much closer to town: Metro Line 10 runs from the terminal into the centre, and a taxi is 30–40 minutes rather than an hour. Simplest plan is that everyone makes their own way to the Mercure and meets there.`
    ]
  },
  'flight-mu664': {
    title: 'MU664 · Chengdu → Beijing',
    addr: 'Chengdu Tianfu (TFU) → Beijing Daxing (PKX)',
    emoji: '✈️',
    city: 'Chengdu',
    gallery: [],
    desc: [
      `China Eastern <strong>MU664</strong>, departing <strong>12:40 on Monday 12 October 2026</strong>. Chengdu Tianfu (TFU) to Beijing Daxing (PKX), roughly 2h45 in the air.`,
      `Note both airports are the newer ones. Chengdu Tianfu opened in 2021 and sits about 50 km southeast of the city — allow an hour from the centre, longer at rush hour. Beijing Daxing is likewise well south of Beijing, around 46 km from Tiananmen, but the Daxing Airport Express gets you to Caoqiao in 19 minutes.`,
      `Star Alliance Gold gets one extra checked bag of up to 20 kg on Chinese domestic routes — but as a separate piece, not added weight. Two bags at 20 kg go free; one at 40 kg does not.`
    ]
  },
  // ── SHANGHAI ACTIVITIES ──────────────────────────────────────────────────
  herbalbar: {
    title: '🌿 酿青 Herbal Bar — the TCM cocktail bar',
    addr: '酿青 Herbal Bar: 襄阳北路100号 2楼 (Xiangyang North Road 100, 2F), former French Concession · Second branch: 杨浦区大学路248号16楼1603室 · Open 17:00–03:00 · ~10 min taxi from the Pullman Jing An',
    img: 'shanghai-herbalbar.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=酿青+Herbal+Bar+襄阳北路100号+上海',
    gallery: ['shanghai-herbalbar-1.jpg', 'shanghai-herbalbar-2.jpg', 'shanghai-herbalbar-3.jpg', 'shanghai-herbalbar-4.jpg', 'shanghai-herbalbar-5.jpg', 'shanghai-herbalbar-6.jpg'],
    desc: [
      `A bar where you see a doctor before you see a menu. Two qualified Chinese-medicine physicians sit at the entrance and give you a real consultation — they take your pulse, look at your tongue, and ask the usual questions (望闻问切, the four TCM diagnostics: look, listen, ask, touch). It runs about ten minutes.`,
      `You come away with a written prescription naming your constitution type — 阳虚 yang-deficient, 阴虚 yin-deficient, 湿热 damp-heat, 气郁 qi-stagnation, and so on. You carry the slip to the bar, where they pull the matching herbs out of the apothecary drawers and build your drink around them. Everyone's is different.`,
      `The room is the other half of the appeal: a full wall of Chinese-medicine drawers with 悬壶济世 carved in gold above it — "hang up the gourd and heal the world", the old idiom for practising medicine — spirits shelved either side, dark sandalwood, low light, and a pin board of other customers' prescriptions.`,
      `Billed as Shanghai's first traditional-medicine bar. The drinks split into herbal tea-liquors and the pulse-diagnosis cocktails. Open <strong>17:00 to 03:00</strong>.`,
      `📍 Two branches. The one worth going to is <strong>襄阳北路100号, 2nd floor</strong>, in the former French Concession — the same neighbourhood as the French Concession walk already on this page, so it slots naturally into that evening. The other is out in Yangpu on University Road.`
    ]
  },
  train: {
    title: 'Bullet Train Business Class',
    addr: 'Departs: Shanghai Hongqiao Railway Station, Minhang District, Shanghai',
    img: 'train-business.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Shanghai+Hongqiao+Railway+Station',
    gallery: ['train-business-2.png', 'train-business-3.png', 'train-business-4.png'],
    desc: [
      `The Shanghai–Beijing high-speed train is one of the great travel experiences in the world — and business class on the Fuxing G-series makes it genuinely extraordinary. The seats recline fully flat into a lie-flat bed, each in its own private pod with a wide personal screen, noise-cancelling headrests and a full-length footrest. At 350 km/h, you barely feel the speed. The 1,318 km journey takes just 4.5 hours.`,
      `Meals are served at your seat on white linen with real cutlery — hot dim sum, noodle dishes, Chinese desserts and a proper tea service. The carriage is quiet, the staff attentive without being intrusive, and the panoramic window beside each seat frames a constantly shifting canvas of Chinese countryside: rice paddies, river valleys, ancient hill towns and slowly emerging urban skylines.`,
      `Compare this to flying: no airport security theatre, no baggage carousel, city centre to city centre — Shanghai Hongqiao station to Beijing South station, both fully metro-connected. Business class tickets run around CHF 90–120 per person. It is, without question, the right way to make this journey. Book weeks ahead — business class sells out fast on this route.`
    ]
  },
  harmay: {
    title: 'Harmay 话梅 — Anfu Road',
    addr: '308 Anfu Road, Xuhui District, Shanghai (安福路308号)',
    img: 'shanghai-harmay.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=HARMAY+话梅+安福路308号+上海',
    gallery: [],
    desc: [
      `Harmay (话梅) started life in 2008 as a Taobao seller and opened this, its first physical store, on Anfu Road in 2017 — and effectively reinvented what a beauty shop looks like in China. The interior is deliberately unfinished: raw concrete, exposed steel racking, industrial trolleys and warehouse crates, designed by AIM Architecture. It looks more like a parts depot than a cosmetics counter, which is exactly the point.`,
      `The draw is the format. Harmay sells luxury beauty in sample and miniature sizes — you take a basket, walk the racks and pick decants of brands that would cost a fortune in full size. It's the cheapest possible way to try La Mer, Creed, SK-II and dozens of others, and it makes for genuinely good small gifts to bring home. Each Harmay store runs a different theme, so this one is worth seeing even if you've been to another.`,
      `Anfu Road itself is the other reason to come. It's the prettiest street in the former French Concession — plane trees, low Art Deco houses, independent coffee shops and boutiques — and it's a five-minute walk from Wukang Mansion. Pair it with the French Concession card: this is the same neighbourhood, so do both in one afternoon.`
    ]
  },
  zzer: {
    title: 'ZZER 只二 — Transparent Warehouse',
    addr: 'B1, Hongqiao The Hub, 52 Shaohong Road, Minhang District, Shanghai (只二透明仓)',
    img: 'shanghai-zzer.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=只二+透明仓+绍虹路52号+虹桥天地+上海',
    gallery: [],
    desc: [
      `ZZER (只二) is China's largest offline second-hand luxury store, and the scale is the attraction. The "Transparent Warehouse" (透明仓) holds around 100,000 authenticated pre-owned pieces from more than 5,000 brands, and takes in roughly 5,000 new items every day. It is laid out like a warehouse rather than a boutique — long racks, floor-to-ceiling shelving, everything out and browsable.`,
      `The inventory runs across Hermès, Chanel, Louis Vuitton, Dior and Gucci, plus rare collaboration pieces that never reach European resale. Everything is authenticated in-house before it goes on the floor. Prices sit well below European second-hand levels for the same items, which is what makes it worth a dedicated trip rather than a browse.`,
      `Location is the one catch: it's at Hongqiao, out west by the transport hub, not central. The upside is that it sits directly at Hongqiao The Hub next to the railway station and Terminal 2 — so it works well as a stop on the way to or from the airport or a high-speed train, rather than a special journey from the Bund.`
    ]
  },
  footmassage: {
    title: '💆 足疗 — Foot massage',
    addr: "Near the Pullman Jing An: 感智盲人按摩 (静安寺店), 愚园东路20号2号楼4楼 — top-rated in Jing'an, from about ¥125 · Dragonfly 悠庭 (several branches, English-speaking, upscale) · Green Massage 青籁养身 (chain since 2001) · Most open late into the evening",
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=足疗+静安寺+上海',
    gallery: [],
    desc: [
      `A proper Chinese 足疗 (zúliáo) is not a ten-minute rub. It usually starts with your feet in a bucket of hot herbal water while someone works on your neck and shoulders, then 45–90 minutes of genuinely firm work on the feet and lower legs — often with the back and arms thrown in. You stay dressed, in a reclining chair, frequently in a room with other people and a television on. It is completely ordinary here, and after days of walking it is the best-value thing in the city.`,
      `<strong>Where to go near our hotel.</strong> <em>感智盲人按摩 (静安寺店)</em> at 愚园东路20号, 4th floor — the top-rated massage place in Jing'an across thousands of reviews, from about ¥125. It's a 盲人按摩 house: blind masseurs, a long-standing tradition in China and usually the strongest technique you'll find. <em>Dragonfly 悠庭</em> is the polished option with English-speaking staff and several branches, priced accordingly. <em>Green Massage 青籁养身</em>, going since 2001, sits between the two.`,
      `💰 Roughly ¥125–200 at a good local place for 60–90 minutes, ¥300+ at the expat-facing chains. Tipping is not expected.`,
      `🗣️ Useful words: <strong>足疗 zúliáo</strong> (foot massage), <strong>按摩 ànmó</strong> (massage), <strong>推拿 tuīná</strong> (therapeutic massage), <strong>轻一点 qīng yìdiǎn</strong> ("lighter please") — you will want that last one, because the default pressure is serious.`,
      `⚠️ Stick to places with a printed menu of fixed treatments and prices at the door, which all three above have. If a place has no visible price list, walk on — that is the reliable way to tell a genuine 足疗 shop from the other kind.`,
      `📸 No photo on this one yet — I did not have a picture I could vouch for, and did not want to put a stock shot of the wrong shop on here.`
    ]
  },
  spa: {
    title: 'Qushui Langting — 24h Luxury Spa',
    addr: 'Multiple locations: e.g. 2090 Shennan Rd, Changning District, Shanghai',
    img: 'shanghai-spa.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=曲水朗庭+上海',
    gallery: ['shanghai-spa-2.png', 'shanghai-spa-3.png', 'shanghai-spa-4.png', 'shanghai-spa-5.png', 'shanghai-spa-6.png', 'shanghai-spa-7.png'],
    desc: [
      `Qushui Langting (曲水朗庭) is Shanghai's most celebrated 24-hour spa resort — a sprawling, lantern-lit sanctuary where you check in, change into robes and simply don't leave for as long as you want. Operating around the clock across multiple floors, it combines a thermal hot spring park, professional treatment rooms, a full-service restaurant, a cinema, a gym, sleeping pods and more under one roof.`,
      `The thermal pools are the centrepiece. Outdoor rooftop mineral baths steam against the Shanghai night sky while the city glitters below. Indoor pools range from near-scalding to cold plunge, with dedicated herb-infusion pools, a salt cave, and a series of interconnected Jacuzzi grottos. Between soaks, wander to the full-service massage wing — book a treatment slot on arrival as prime times fill up.`,
      `After midnight is when Qushui Langting reveals its best side. The rooftop empties out, the food hall switches to late-night congee and dim sum, the cinema screens films in private recliner pods and the vibe shifts from buzzy to deeply, gloriously quiet. Around CHF 40–60 per person for the full night including towels and robes.`
    ]
  },
  bund: {
    title: 'The Bund Waterfront',
    addr: 'The Bund (Zhongshan East 1st Road), Huangpu District, Shanghai',
    img: 'shanghai-bund.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=The+Bund+Shanghai',
    gallery: ['shanghai-bund-2.png', 'shanghai-bund-3.png', 'shanghai-bund-4.png'],
    desc: [
      `Stretching 1.5 km along the western bank of the Huangpu River, the Bund is Shanghai's greatest stage. On one side, 52 Art Deco and colonial-era buildings from the 1920s–30s glow with golden light. On the other, the Pudong skyline — one of the world's most dramatic — reflects in the river below. This view never gets old.`,
      `At dusk, both sides light up simultaneously and the promenade fills with locals, street performers and visitors from every corner of the world. The energy is electric — romantic yet buzzing, historic yet relentlessly modern. Grab a cocktail from a rooftop bar and watch the nightly show unfold.`,
      `Come back at dawn too. The early morning mist sits low on the river, the city is quiet, and you'll have entire sections of the promenade nearly to yourself. Two completely different experiences — both unmissable.`
    ]
  },
  yugarden: {
    title: 'Yu Garden & Old City',
    addr: 'No. 218 Anren Street, Huangpu District, Shanghai (metro: Yuyuan Garden, Line 10)',
    img: 'shanghai-yugarden.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Yu+Garden+Shanghai',
    gallery: ['shanghai-yugarden-2.png', 'shanghai-yugarden-3.png', 'shanghai-yugarden-4.png'],
    desc: [
      `Built in 1559 during the Ming dynasty, Yu Garden is a 2-hectare masterpiece of classical Chinese garden design in the heart of old Shanghai. Rockery mountains, lotus ponds, zigzag bridges, dragon-topped walls and 30 individual pavilions are packed into a space that somehow feels infinite. The famous Huxinting Tea House — a wooden pavilion perched on a lotus pond — is one of the most photographed spots in China.`,
      `Arrive at opening time (8:30 AM) to beat the crowds and experience the garden in rare quiet. Morning mist over the koi ponds, the sound of water and birdsong, the smell of incense from the nearby temple — it is completely transportive. An hour here feels like a journey back four centuries.`,
      `Just outside the garden walls, the Old City Bazaar stretches through narrow lanes selling everything from jade jewellery to hand-painted silk fans. Stop at a street stall for fresh-fried sesame pastries and a pot of tea before heading in.`
    ]
  },
  tower: {
    title: 'Shanghai Tower — Floor 118',
    addr: '501 Yincheng Middle Road, Pudong New Area, Shanghai (metro: Lujiazui, Line 2)',
    img: 'shanghai-tower.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Shanghai+Tower',
    gallery: ['shanghai-tower-2.png', 'shanghai-tower-3.png', 'shanghai-tower-4.png'],
    desc: [
      `At 632 metres, Shanghai Tower is the second tallest building in the world — and its observation deck on floor 118 delivers one of the most breathtaking urban views on earth. On a clear day you see the entire city spread to every horizon, the Huangpu River snaking silver through it, and the East China Sea glinting in the distance. On a cloudy day, you are literally above the clouds.`,
      `The journey up takes 55 seconds in the world's fastest elevator — 20.5 metres per second, with a pressure-equalising cabin to keep your ears comfortable. The deck itself wraps around the full circumference with floor-to-ceiling glass. There is a glass floor section that looks 580 metres straight down to the street. Not for the faint-hearted.`,
      `Come at dusk to catch the city in golden hour light and then watch it transition to the full neon spectacle of Shanghai at night — both from the same spot, in one visit. Book tickets online in advance; queues at the door can be 90 minutes.`
    ]
  },
  frenchconcession: {
    title: 'The French Concession',
    addr: 'Anfu Road / Wulumuqi Road / Xintiandi, Xuhui & Luwan Districts, Shanghai',
    img: 'shanghai-frenchconcession.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=French+Concession+Shanghai',
    gallery: ['shanghai-frenchconcession-2.png', 'shanghai-frenchconcession-3.png', 'shanghai-frenchconcession-4.png'],
    desc: [
      `The Former French Concession is Shanghai's most liveable, most beautiful neighbourhood — and the one most visitors fall hardest for. Wulumuqi Road, Anfu Road and Fuxing Road are lined with towering plane trees that create a canopy of dappled light over Art Deco villas, independent bookshops, specialist coffee roasters and boutiques run by local designers.`,
      `Xintiandi — a cluster of restored Shikumen stone lane houses — is the neighbourhood's most famous set piece: narrow alleys now lined with restaurants, wine bars and concept stores, the stone facades perfectly preserved. Just south, Tianzifang is the more bohemian counterpart: tighter alleyways, art studios, handmade jewellery and excellent coffee at tiny hidden cafes.`,
      `The French Concession rewards slow walking. No itinerary — just turn down whichever lane looks interesting. You'll find a perfect croissant next to a dumpling shop next to a gallery showing contemporary Chinese photography. Block out a full afternoon and just wander.`
    ]
  },
  zhujiajiao: {
    title: 'Zhujiajiao Water Town',
    addr: 'Zhujiajiao Ancient Town, Qingpu District, Shanghai (~30km from city centre, Metro Line 17)',
    img: 'shanghai-zhujiajiao.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Zhujiajiao+Water+Town+Shanghai',
    gallery: ['shanghai-zhujiajiao-2.png', 'shanghai-zhujiajiao-3.png', 'shanghai-zhujiajiao-4.png'],
    desc: [
      `Just 30 km from central Shanghai, Zhujiajiao is a perfectly preserved Ming and Qing dynasty water town — 1,700 years old, threaded by canals, connected by 36 ancient stone bridges. Gondolas glide past whitewashed walls and terracotta rooftops, willows trail in the green water, and the pace of life drops to something closer to a Sunday afternoon.`,
      `The five-arch Fangsheng Bridge — 72 metres long, built in 1571 — is the town's centrepiece and the most beautiful bridge in the Shanghai region. Walk it at dawn before the tour groups arrive and you'll have it almost to yourself, the mist still sitting low on the canal.`,
      `The side streets reward exploration: tofu sellers, hand-pressed rice cakes, a maker of traditional oil-paper umbrellas whose family has been doing the same thing for six generations, a small temple that smells of sandalwood. Take Metro Line 17 to Zhujiajiao station — 50 minutes from People's Square. Allow a full day.`
    ]
  },
  rivercruise: {
    title: 'Huangpu River Night Cruise',
    addr: 'Shiliupu Wharf, 479 Zhongshan East 2nd Road, Huangpu District, Shanghai',
    img: 'shanghai-rivercruise.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Shiliupu+Wharf+Shanghai',
    gallery: ['shanghai-rivercruise-2.png', 'shanghai-rivercruise-3.png', 'shanghai-rivercruise-4.png'],
    desc: [
      `The Bund looks spectacular from the promenade — but from the water, on a slow boat drifting down the Huangpu at night, it is something else entirely. The colonial facades glow warm gold on your left; on your right, the Pudong skyline pulses with coloured light shows reflecting in the black water below. The best single view in Shanghai.`,
      `One-hour cruises depart from Shiliupu Wharf every 30 minutes from dusk. Get a spot on the open top deck and bring a jacket — it's colder on the water than it looks. The boat makes a slow sweep past the full length of the Bund, out past the shipyards where the river widens, and back again.`,
      `For something more memorable, book a private dinner cruise: a two-hour round trip with a Shanghainese meal served on the water. The combination of excellent food, uninterrupted skyline views and the gentle rock of the boat makes for one of the great evenings of the trip.`
    ]
  },
  disneyland: {
    title: 'Shanghai Disneyland',
    addr: '310 Shendi West Road, Pudong New Area, Shanghai (Metro Line 11, Disney Resort station)',
    img: 'shanghai-disneyland.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Shanghai+Disneyland',
    gallery: ['shanghai-disneyland-2.png', 'shanghai-disneyland-3.png', 'shanghai-disneyland-4.png'],
    desc: [
      `Shanghai Disneyland is not just another Disney park — it is the newest, the most technologically advanced, and in many ways the most spectacular Disney park on earth. The TRON Lightcycle Power Run is the fastest coaster in any Disney park. The Enchanted Storybook Castle is the tallest and largest Disney castle ever built.`,
      `What makes Shanghai Disneyland special beyond the rides is the sheer ambition of the theming. Treasure Cove is an entire Pirate-themed land built around a genuine full-size galleon floating in a lagoon. Zootopia Land, opened in 2023, uses projection mapping and animatronics at a level that has to be seen to be believed.`,
      `October is perfect timing: post-Golden Week means the crowds have thinned significantly but the park is still running full autumn programming. Book FastPass for TRON and Pirates before you arrive. The fireworks spectacular over the castle at 9 PM is the best in any Disney park — save your spot 20 minutes early.`
    ]
  },
  legoland: {
    title: 'Shanghai LEGOLAND Resort',
    addr: 'Jinshan District, Shanghai (~60 km SW of the centre, near Hangzhou Bay) · dedicated rail/shuttle link, allow ~1.5 h each way',
    img: 'shanghai-legoland.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Shanghai+LEGOLAND+Resort+Jinshan',
    gallery: ['shanghai-legoland-2.jpg', 'shanghai-legoland-3.jpg'],
    desc: [
      `Shanghai LEGOLAND Resort opened in July 2025 in Jinshan District — China's first LEGOLAND and the largest in the world. This is a full outdoor theme park (not the small indoor Discovery Center): eight themed lands across a huge site with dozens of rides, shows and hands-on build zones, plus the on-site LEGOLAND Hotel where every room is themed — pirates, ninjas, LEGO Friends — and the kids get their own bunk nook.`,
      `The heart of the park is MINILAND — a miniature China rebuilt entirely in LEGO bricks: the Shanghai Bund and Oriental Pearl skyline, Yu Garden, the Beijing skyline and more, with day-night lighting and tiny moving trains and boats. Around it, LEGO Castle, LEGO City (kids drive their own cars and earn a "licence"), Brick Dimension and the LEGO Friends zones split cleanly across age ranges — ideal for our family group with the little ones.`,
      `Practical: it's ~60 km southwest of central Shanghai (Jinshan, near Hangzhou Bay), so treat it as a full day — allow about 1.5 hours each way via the dedicated rail/shuttle link. Aimed at roughly ages 2–12. Buy timed tickets online in advance (cheaper than the gate) and arrive at opening to beat queues. Our October dates are perfect — mild autumn weather, post-summer crowds.`
    ]
  },

  // ── BEIJING ACTIVITIES ───────────────────────────────────────────────────
  sanlitun: {
    title: '🛍️ 三里屯太古里 Taikoo Li Sanlitun',
    addr: '朝阳区三里屯路19号 · Metro Line 17 to Workers\' Stadium (工人体育场), or Line 10 to Tuanjiehu exit B and ~15 min walk · Open 10:00–22:00 · Free',
    img: 'beijing-sanlitun.jpg',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=三里屯太古里+北京',
    gallery: ['beijing-sanlitun-1.jpg', 'beijing-sanlitun-2.jpg', 'beijing-sanlitun-3.jpg'],
    desc: [
      `Beijing's open-air shopping district, and free to walk into — an outdoor grid of glass-and-steel blocks whose layout deliberately references old Beijing hutong alleys. It's the same Swire development as the 太古里 in Chengdu that 马旺子 sits beside, so it will feel familiar by the time we get here.`,
      `<strong>The two halves are completely different.</strong> <em>South</em> is streetwear and youth culture: Popcorn (genuine Supreme), Edison Chen's JUICE with its green courtyard, SOULGOODS for guochao labels, Page One bookshop, Moleskine. <em>North</em> is luxury: Chanel, Dior and Prada flagships, and the all-glass Apple store. Know which you want before you set off — they're a walk apart.`,
      `📸 The photogenic bits: the north-side glass box (much better after dark), the graffiti wall at the Nike flagship, the south central plaza where art installations and pop-ups appear, and <strong>红馆 THE RED</strong> — a Kengo Kuma building with 7.5 m ceilings, worth going into for the architecture alone.`,
      `☕ Coffee is everywhere: %Arabica is the famous one and gets mobbed, so go in the morning; Blue Bottle is calmer; Manner is the cheap and good option.`,
      `🌃 <strong>It doubles as the nightlife district.</strong> Migas Mercado has a roof terrace over the Sanlitun neon, D Lounge does proper cocktails, and the Workers' Stadium (工体) area next door is where Beijing's night actually happens. Worth pairing an evening here rather than treating it purely as shopping.`,
      `💡 Local tips worth having: the vintage shops on the 2nd floor of 3.3 Mall, 那里花园 Nali Patio for Mediterranean food, and a cheap food street in the hutong behind Uniqlo. ⚠️ <strong>Avoid weekend afternoons</strong> — after 15:00 on a Saturday or Sunday it is a wall of people. Mornings or evenings are far better.`
    ]
  },
  supermarket: {
    title: 'Supermarket run',
    addr: '盒马鲜生 Hema (Freshippo) — Dongcheng branch at 东打磨厂街7号 新活馆2层, plus Sanlitun and Guomao · Everyday chains: 物美 Wumart, 永辉 Yonghui, 京客隆 — everywhere, including under most malls',
    emoji: '🛒',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=盒马鲜生+东打磨厂街+北京',
    gallery: [],
    desc: [
      `Genuinely one of the better hours you can spend in China, and the right place to buy things to take home — a Chinese supermarket is cheaper, stranger and more interesting than any souvenir shop.`,
      `<strong>Two different errands.</strong> For actually buying stuff: a normal <strong>物美 (Wumart)</strong>, <strong>永辉</strong> or <strong>京客隆</strong> — they sit under most shopping centres and that is where the cheap snacks are. For the spectacle: <strong>盒马鲜生 (Hema / Freshippo)</strong>, Alibaba's supermarket — live seafood tanks you pick from, bags travelling overhead on ceiling conveyors to the packing room, everything scannable for 30-minute delivery. The Dongcheng branch is at 东打磨厂街7号, and there are others at Sanlitun and Guomao.`,
      `🛒 <strong>What's worth carrying home:</strong> loose tea and tea sets, 花椒 Sichuan peppercorns and chilli oil, 老干妈 chilli crisp, 辣条 and 卫龙 snacks, 大白兔 milk sweets, dried fruit and nuts, and the regional Oreo/KitKat/Lay's flavours that don't exist in Europe. Baijiu if anyone is brave.`,
      `⚠️ <strong>Payment is the one thing to sort first.</strong> Hema is app-first and has historically been awkward with Alipay, being Alibaba's own ecosystem. Cash must legally be accepted everywhere, and since the 2024 rules foreigners can bind international cards to Alipay and WeChat Pay — worth setting that up before the trip rather than discovering it at a till. Ordinary supermarkets take cash and cards without drama.`,
      `📦 This is also where the parcel-to-hotel plan pays off: buy the heavy, bulky things here rather than carrying them from Beijing to Chengdu to Shanghai.`
    ]
  },
  shopping: {
    title: 'Beijing shopping day',
    addr: '王府井 Wangfujing — at the hotel door · 三里屯太古里 Sanlitun — Line 17 to Workers\' Stadium · 秀水街 Silk Street, 秀水东街8号, daily 09:30–21:00, Line 1 to Yong\'anli · 潘家园 Panjiayuan flea market, 潘家园路华威里18号, mornings only in practice',
    emoji: '🛍️',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=三里屯太古里+北京',
    gallery: [],
    desc: [
      `A free day before the others land, and <strong>Tuesday happens to be the best possible day for this</strong> — every one of these places is unpleasant at the weekend and civilised midweek.`,
      `<strong>潘家园 Panjiayuan</strong> — the sprawling antiques and bric-a-brac market, 3,000-odd stalls of calligraphy, porcelain, furniture, Mao-era junk and outright fakes. Go in the <strong>morning</strong>: stalls are fullest between roughly 09:00 and 11:30 and it winds down in the afternoon. At weekends it takes 60–70,000 visitors a day, so a Tuesday morning is exactly when you want to be there. Nothing is what it claims to be and that is fine — buy things you like the look of, not things you think are old.`,
      `<strong>秀水街 Silk Street</strong>, 秀水东街8号, daily 09:30–21:00, Metro Line 1 to Yong'anli. Silk, tailoring, clothing, souvenirs and a great deal of counterfeit. <strong>Everything is negotiable</strong> — open well under the asking price and be willing to walk away, which is the only technique that reliably works here.`,
      `<strong>三里屯太古里</strong> for the actual brands — see its own entry on this page. It's the one place on this list where the price on the label is the price, and midweek it's genuinely pleasant rather than the weekend crush.`,
      `<strong>王府井</strong> is downstairs from the Grand Hyatt, which makes it the obvious fallback but the least interesting of the four: mostly chains and tourist tat. Fine for an hour, not a day.`,
      `🚕 Realistic plan: Panjiayuan first thing while the stalls are full, Silk Street or Sanlitun after lunch, back near the hotel by evening. They're spread across the city, so pick two rather than all four.`
    ]
  },
  ktv: {
    title: '🎤 KTV with Emma\'s Beijing friends',
    addr: "Ask for a 量贩式 KTV (liàngfànshì) — the self-service kind · Nearest to the Grand Hyatt: 魅KTV, 王府井大街253号 5楼, a few minutes' walk · Big chains: 麦乐迪 Melody, 温莎 Windsor, 纯K, 唱吧麦颂 · Book through Dianping or Meituan, never walk-in",
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=魅KTV+王府井大街253号+北京',
    gallery: [],
    desc: [
      `An evening in a private KTV room with Emma's university friends is the single most Chinese thing on this whole itinerary, and the one nobody will forget. You get your own room, a screen, two microphones and a tablet to queue songs, and you stay as long as you've booked for. Nobody is watching except your own group, which is the point — it is nothing like a karaoke bar in Europe.`,
      `⚠️ <strong>One word matters when booking: 量贩式 (liàngfànshì).</strong> That's the self-service, all-ages, buy-your-own-drinks kind — the format that replaced the old disreputable song-and-dance halls and made KTV a normal family outing. The other kind, <strong>商务KTV</strong> ("business KTV"), is a hostess club and is emphatically not what we want. Emma's friends will know this instinctively; it's written here for whoever ends up doing the booking.`,
      `💰 <strong>Timing changes the price enormously.</strong> Afternoon 欢唱 (huānchàng) packages run from around ¥38 for a couple of hours for the whole room; evenings and weekends cost several times that. Book a 团购 deal through Dianping or Meituan rather than turning up — walk-in rates are the worst you can pay.`,
      `🍺 Drinks and snacks come from a counter, usually as a package with free-flow soft drinks, sometimes with beer bundles. Some places let you bring your own; policies vary, so ask.`,
      `🎶 English catalogues exist but are thin and heavy on the obvious. Lean into it — let Emma and her friends run the Mandopop and take the songs you're handed. 朋友, 月亮代表我的心 and anything by 周杰伦 will come up.`,
      `📍 Closest to us: <strong>魅KTV</strong> at 王府井大街253号, 5th floor — a few minutes on foot from the Grand Hyatt, so nobody needs a taxi home. That said, Emma's friends should pick: they'll know which places have the good sound systems and current song libraries, and this is their city.`
    ]
  },
  citywalk: {
    title: '🚶 Gulou → Shichahai → Nanluoguxiang citywalk',
    addr: 'Start: 鼓楼大街 Gulou Dajie metro (Lines 2/8) · Route: 什刹海 Shichahai → 烟袋斜街 Yandai Xiejie → 南锣鼓巷 Nanluoguxiang metro (Lines 6/8) · Roughly 2.5 km, flat, an afternoon or evening · Free',
    img: 'beijing-citywalk.jpg',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=烟袋斜街+北京',
    gallery: ['beijing-citywalk-1.jpg', 'beijing-citywalk-2.jpg', 'beijing-citywalk-3.jpg', 'beijing-citywalk-4.jpg', 'beijing-citywalk-5.jpg', 'beijing-citywalk-6.jpg', 'beijing-citywalk-7.jpg', 'beijing-citywalk-8.jpg'],
    desc: [
      `The walk that visitors to Beijing consistently end up loving most, and it costs nothing: out of <strong>鼓楼大街 Gulou Dajie</strong> metro, down past the Drum and Bell Towers, along the <strong>什刹海 Shichahai</strong> lakes, through <strong>烟袋斜街</strong> and out at <strong>南锣鼓巷</strong>. About 2.5 km, flat, and you can stretch it over a whole afternoon without getting tired.`,
      `<strong>烟袋斜街 (Yandai Xiejie, "Tobacco Pouch Slanted Street")</strong> is the piece worth slowing down for. It is Beijing's oldest commercial hutong street, and it runs on a diagonal — genuinely odd in a city laid out on a strict grid — which is why it feels different from everything around it.`,
      `Shichahai itself is a chain of lakes with willows down to the water and grey-brick courtyard walls behind them, crossed at the narrow point by the 银锭桥 Silver Ingot Bridge. The old courtyard houses along here have been turned into cafés, so 四合院 coffee is the thing to do: sit in a 500-year-old courtyard with a flat white.`,
      `A local writing about this route pointed out that "citywalk" is just the English rebrand of <strong>遛弯儿 (liūwānr)</strong> — the Beijing habit of going out for an aimless wander. That is the correct way to do it. There is no sight to tick off.`,
      `🍢 Handy overlaps with the rest of our plan: <strong>很久以前羊肉串</strong>, our dinner on the 12th, is right at Gulou Dajie metro where this walk starts. And <strong>烤肉季</strong> — the 1848 Beijing barbecue house — sits on Shichahai directly on the route, if anyone wants the old-school 炙子烤肉 version.`,
      `⏰ Evening suits it: the lakes light up, the bars along the water open, and the daytime tour groups have gone. It is also flat and needs no tickets, which makes it a forgiving thing to do on an arrival day.`
    ]
  },
  forbidden: {
    title: 'The Forbidden City',
    addr: '4 Jingshan Front Street, Dongcheng District, Beijing (metro: Tiananmen East/West, Line 1)',
    img: 'beijing-forbidden-city.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Forbidden+City+Beijing',
    gallery: ['beijing-forbidden-city-2.png', 'beijing-forbidden-city-3.png', 'beijing-forbidden-city-4.png'],
    desc: [
      `The numbers alone are staggering: 980 buildings, 8,704 rooms, 720,000 m² of imperial splendour. Completed in 1420 under the Yongle Emperor, the Forbidden City served as the home of 24 emperors for nearly 500 years. No other palace complex on earth matches it in scale, preservation or sheer drama.`,
      `Enter through the Meridian Gate and walk north through successive ceremonial courtyards — the Hall of Supreme Harmony where emperors received kowtows from the entire court, the Hall of Central Harmony, the Hall of Preserving Harmony — each grander than the last. The golden rooftiles blazing against Beijing's blue sky are unlike anything you've seen.`,
      `Allow a full day. The outer courts are impressive, but the inner residential quarters to the north are where the real stories live: imperial bedchambers, the Empress's garden, the Clock Gallery with its 18th-century European automata, the treasury. Book timed entry tickets weeks in advance — daily limits sell out fast.`
    ]
  },
  wall: {
    title: 'The Great Wall — Mutianyu',
    addr: 'Mutianyu Village, Huairou District, Beijing (~70km from city centre, ~1.5h by car)',
    img: 'beijing-great-wall.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Mutianyu+Great+Wall+Beijing',
    gallery: ['beijing-great-wall-2.png', 'beijing-great-wall-3.png', 'beijing-great-wall-4.png'],
    desc: [
      `Over 21,000 km of ancient stone snaking across mountains, deserts and plateaus — the Great Wall of China is one of humanity's most audacious achievements. The Mutianyu section near Beijing offers the best combination of dramatic scenery and manageable crowds: steep forested ridges, a watchtower every 300 metres, and in autumn, a blaze of orange and red that makes the landscape look on fire.`,
      `Start at sunrise. The early light turns the stone gold, mist fills the valleys below, and for the first hour you may have entire sections to yourself. The silence up there — just wind, birdsong and the ancient stonework — is something you carry with you long after you leave.`,
      `For the adventurous, the unrestored Jiankou section is wild and vertiginous — crumbling parapets, near-vertical climbs, and views that stretch to the horizon in both directions. For everyone else, Mutianyu's cable car takes the hard work out of it.`
    ]
  },
  temple: {
    title: 'Temple of Heaven',
    addr: '1 Tiantan East Road, Dongcheng District, Beijing (metro: Tiantan Dongmen, Line 5)',
    img: 'beijing-temple-heaven.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Temple+of+Heaven+Beijing',
    gallery: ['beijing-temple-heaven-2.png', 'beijing-temple-heaven-3.png', 'beijing-temple-heaven-4.png'],
    desc: [
      `Built in 1420, the Temple of Heaven complex was where the Emperor came each winter solstice to pray for a good harvest. The Hall of Prayer for Good Harvests — a triple-roofed circular masterpiece in deep blue tile — is considered the finest example of Chinese religious architecture in existence. Standing beneath it, you understand why.`,
      `The surrounding park is as much of a draw as the temple itself. Every morning from 6 AM, thousands of Beijing locals gather here to practise tai chi, play traditional instruments, fly kites, sing opera, play cards and walk backwards (an old health practice). It's a living window into daily Beijing life.`,
      `Don't miss the Echo Wall — a circular wall around the Imperial Vault of Heaven where whispers travel all the way around the circumference. The ancient acoustics still work perfectly after 600 years. Arrive early, walk slowly, and budget half a day minimum.`
    ]
  },
  summerpalace: {
    title: 'Summer Palace',
    addr: '19 Xingjian Road, Haidian District, Beijing (metro: Beigongmen, Line 4)',
    img: 'beijing-summer-palace.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Summer+Palace+Beijing',
    gallery: ['beijing-summer-palace-2.png', 'beijing-summer-palace-3.png', 'beijing-summer-palace-4.png'],
    desc: [
      `The Summer Palace is Beijing's most beautiful imperial retreat — 290 hectares of lakes, gardens, palaces and pavilions built as an escape from the summer heat. At its heart, Kunming Lake was hand-dug by 100,000 workers on the orders of Empress Cixi, who also used navy funds to build a marble boat that never sailed.`,
      `The Long Corridor stretches 728 metres along the northern shore of the lake, its painted beams covered in over 14,000 individual scenes from Chinese history, mythology and literature. Walking it slowly takes 30 minutes. Every panel tells a story. It's one of the most extraordinary painted spaces on earth.`,
      `Hire a rowing boat on Kunming Lake and drift past willow trees and lotus flowers toward the Seventeen Arch Bridge — 150 metres long, 544 stone lions, perfectly reflected in still water at dusk. Come late afternoon and stay for the sunset.`
    ]
  },
  hutong: {
    title: 'Hutong Neighbourhood Tour',
    addr: 'Start at Nanluoguxiang, Dongcheng District, Beijing (metro: Nanluoguxiang, Line 6/8)',
    img: 'beijing-hutong.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Nanluoguxiang+Hutong+Beijing',
    gallery: ['beijing-hutong-2.png', 'beijing-hutong-3.png', 'beijing-hutong-4.png'],
    desc: [
      `Beijing's hutongs are the ancient grey-walled alleyways that formed the city's residential fabric for 700 years. Narrow, interconnected, often smelling of coal smoke and street food, they are the opposite of everything modern Beijing projects — and they are completely unmissable. The areas around Nanluoguxiang, Gulou and Shichahai are the most atmospheric.`,
      `Explore by rickshaw or on foot. Peer through open courtyard gates into siheyuan — traditional family compounds where three or four generations may still live together around a shared stone courtyard. Buy a jianbing (egg crepe) from a street cart. Follow the smell of grilled lamb skewers into a lantern-lit alley at night.`,
      `The hutongs are disappearing fast — Beijing has lost over 90% of them to modernisation. The ones that remain are living history, and experiencing them now, while they still exist, feels urgent. End the evening at one of the rooftop bars overlooking the Drum Tower.`
    ]
  },

  // ── CHENGDU ACTIVITIES ───────────────────────────────────────────────────
  pandas: {
    title: 'Giant Panda Baby Zone',
    addr: '1375 Panda Avenue, Chenghua District, Chengdu (taxi/bus from city centre, ~30 min)',
    img: 'chengdu-pandas.png',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=Chengdu+Research+Base+Giant+Panda+Breeding',
    gallery: ['chengdu-pandas-2.png', 'chengdu-pandas-3.png', 'chengdu-pandas-4.png'],
    desc: [
      `Nothing on earth quite prepares you for seeing a baby giant panda in real life. At the Chengdu Research Base of Giant Panda Breeding, over 150 pandas live in lush naturalistic enclosures — but the nursery is where hearts melt. Tiny fluffy cubs, born blind and pink, grow into the ridiculously photogenic creatures you see everywhere. Watching one tumble through bamboo is pure magic.`,
      `Arrive before 9 AM when the pandas are most active and the cubs are brought out for feeding. The keepers are passionate and knowledgeable — ask them anything. You'll learn that pandas spend 14 hours a day eating, sleep the rest, and are somehow still universally adored for it.`,
      `Don't miss the red pandas either. Smaller, fox-like, with magnificent fluffy tails — they dart through treetop walkways in their own quieter section of the base. If the giant pandas steal your heart, the red pandas will steal your camera roll.`
    ]
  },

  // ── FOOD: SHANGHAI ───────────────────────────────────────────────────────
  bars: {
    title: '🍸 Shanghai Bars — INS, the Bund & the quiet ones',
    addr: 'INS 新乐园: inside 复兴公园 Fuxing Park, Huangpu · COA: 复兴中路580号 (5 min walk from INS) · Leo Roof Bar: House of Roosevelt, Bund 27, 中山东一路27号 · Punch Room: The Shanghai EDITION, 南京东路199号 · All ~10 min by taxi from the Pullman Jing An',
    img: 'shanghai-bars.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=INS新乐园+复兴公园+上海',
    gallery: ['shanghai-bars-1.jpg', 'shanghai-ins-2f-hush.jpg', 'shanghai-ins-3f-kezee.jpg', 'shanghai-ins-3f-radi.jpg', 'shanghai-ins-4f-culture.jpg', 'shanghai-ins-5f-friends.jpg', 'shanghai-ins-6f-lafin.jpg', 'shanghai-bars-3.jpg', 'shanghai-bars-leo.jpg', 'shanghai-bars-4.jpg', 'shanghai-bars-5.jpg'],
    desc: [
      `<strong>INS 新乐园 — the whole building.</strong> A dozen-odd bars stacked in one block inside Fuxing Park, on the site of the old Park 97 / Muse complex that defined Shanghai nightlife in the 2000s. One pass gets you into most of them: roughly ¥168–208 midweek, ¥248–288 at weekends, with about a free drink at each bar. Arrive before 21:00, drop your bag, and collect the wristbands and drink vouchers early — the queues form later.`,
      `Floor by floor: <strong>5F Friends</strong> is the busiest — Mandopop and K-pop, huge dancefloor, the easy one if you've never done this. <strong>3F</strong> holds two: KEZEE, really a livehouse with concert-grade sound and genuinely good singers, for sitting and listening rather than dancing; and 新RADI, a proper club room with a wall-sized screen. <strong>2F Hush</strong> is a cave-like hip-hop room full of students. <strong>6F Lafin</strong> plays Western pop and hip-hop and has the most international crowd. <strong>4F</strong> holds two: Dirty, dark and prison-themed, and Culture, a rainbow bar with good K-pop. There's a B1 lounge ("Oasis") where pass-holders gather.`,
      `<strong>For the view.</strong> <em>Leo Roof Bar</em> sits on the roof of the House of Roosevelt at Bund 27, looking straight across the river at the Oriental Pearl and the Lujiazui three — go at blue hour, just after sunset. <em>Punch Room</em> at The Shanghai EDITION is the opposite mood: a modern take on a 19th-century London private club, wood-slatted and low-lit, with Pudong close up through the glass. It's <strong>reservations only</strong>.`,
      `<strong>For an actual conversation.</strong> <em>Sober Company</em> is Shingo Gokan's place (the man behind Speak Low) — World's 50 Best Bars No. 39 and Asia's No. 5 in 2021. It's three venues stacked: Sober Café from 8am, Sober Kitchen doing modern Chinese, and Sober Society upstairs for cocktails. There's a fourth, hidden room called Tipsy — you get in by drinking one in each of the other three and collecting the three tokens.`,
      `<em>COA</em> is the Shanghai sister of Hong Kong's COA, which was Asia's Best Bar three years running (2021–23). Agave-focused — mezcal and tequila — in a four-storey lanehouse at 复兴中路580号, five minutes' walk from INS, with Mexican food and a deliberately unmarked door. <strong>No reservations, and closed Mondays</strong>; Tue–Thu and Sun 18:30–01:00, Fri–Sat until 02:00.`,
      `🚕 Everything here is 10 minutes or so by taxi from the Pullman Jing An. INS and COA are five minutes' walk apart on Fuxing Park, so those two make one evening; the Bund rooftops are the other direction and better paired with a walk along the waterfront.`
    ]
  },
  dimsum: {
    title: 'Nanxiang Xiaolongbao',
    addr: '85 Yuyuan Road (within Yu Garden Bazaar), Huangpu District, Shanghai',
    img: 'food-dimsum.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Nanxiang+Xiaolongbao+Yu+Garden+Shanghai',
    gallery: ['food-dimsum-2.png', 'food-dimsum-3.png', 'food-dimsum-4.png'],
    desc: [
      `Nanxiang Xiaolongbao has been making soup dumplings in the same spot inside Yu Garden since 1900. These are the original — the benchmark against which every other xiaolongbao on earth is judged. Each dumpling is hand-pleated with exactly 18 folds, filled with a nugget of minced pork and a spoonful of rich, gelatinised pork stock that melts into scalding soup as it steams.`,
      `The technique matters. Place the dumpling on a soup spoon, bite a tiny hole in the side, let the soup cool for five seconds, drink the broth first, then eat the rest with a dab of aged Zhenjiang vinegar and a sliver of fresh ginger. Do not attempt to eat it whole — the soup is boiling and you will regret it immediately.`,
      `The restaurant has three floors; the ground floor counter does takeaway baskets to eat standing by the canal — the most atmospheric and cheapest way to eat them. The upper floors have table service and a broader menu of Shanghainese dim sum. Queue early or wait — it is always worth it.`
    ]
  },
  shanghainese: {
    title: 'Shanghainese Classics',
    addr: 'Jesse Restaurant (吉士酒家): 41 Tianping Road, Xuhui District, Shanghai',
    img: 'food-shanghainese.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Jesse+Restaurant+Shanghai',
    gallery: ['food-shanghainese-2.png', 'food-shanghainese-3.png', 'food-shanghainese-4.png'],
    desc: [
      `Shanghainese cuisine is the sweetest, richest and most wine-forward of all Chinese regional traditions. The signature dish is hong shao rou: pork belly braised for hours in Shaoxing rice wine, dark soy, sugar and star anise until the fat turns to yielding silk. It is extraordinary.`,
      `October is hairy crab season — possibly the single best reason to visit Shanghai in autumn. These small, intensely flavoured freshwater crabs from Yangcheng Lake are eaten steamed, tied with reeds, accompanied by small cups of warm Shaoxing wine and thin ginger dipping sauce. Eating them is slow, messy and completely absorbing.`,
      `For the full experience, head to Jesse Restaurant (吉士酒家) in the French Concession — a no-frills Shanghainese home-cooking institution that has been feeding the city's food obsessives for decades. Order the hong shao rou, the drunken chicken, the stir-fried water spinach and whatever the crab preparation of the day is.`
    ]
  },
  noodles: {
    title: 'Shanghai Noodles & Street Food',
    addr: 'Yang\'s Fry Dumplings: 269 Wujiang Road, Jing\'an District · Da Hu Chun: 136 Sichuan Middle Road, Huangpu District',
    img: 'food-noodles.png',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=Yang%27s+Fry+Dumplings+Wujiang+Road+Shanghai',
    gallery: ['food-noodles-2.png', 'food-noodles-3.png', 'food-noodles-4.png'],
    desc: [
      `Shanghai's street food and noodle culture is one of the city's great pleasures, and the most accessible way into it is yangchun mian — scallion oil noodles. Thin wheat noodles tossed in darkly caramelised scallion oil with soy sauce and sugar: four ingredients, decades of technique, total perfection. Da Hu Chun on Sichuan Road has been making them since 1932.`,
      `Shengjian bao — pan-fried pork buns — are Shanghai's other signature street food. The bottoms are fried until golden and crackling in a giant iron skillet; the tops are soft and pillowy, sprinkled with sesame seeds and chopped spring onion. Inside: soup and pork. Yang's Fry Dumplings on Wujiang Road is the definitive spot — always a queue, always worth it.`,
      `For a full street-food crawl: start on Wujiang Road (shengjian bao, egg tarts), then move to the Old City Bazaar for sesame pastries and red bean soup. Total cost for all three stops: under CHF 5.`
    ]
  },
  panfried: {
    title: '大壶春 — Pan-fried Pork Buns',
    addr: 'Da Hu Chun (大壶春): 136 Sichuan Middle Road, Huangpu District, Shanghai · Open 7:00–19:30 daily',
    img: 'food-panfried.jpg',
    city: 'Shanghai',
    maps: 'https://maps.google.com/?q=大壶春+四川中路136号+上海',
    gallery: ['food-panfried-2.jpg', 'food-panfried-3.jpg'],
    desc: [
      `大壶春 (Da Hu Chun) was founded in 1932 and has held a Michelin Bib Gourmand every year since 2016. It is the home of the "清水派" — the clear-water school of shengjian bao, which uses a leavened, fermented dough that puffs up like a small mantou. This makes the skin chewier and more bread-like than the thinner-wrapped competitors; less oily, more absorptive, and it holds the soup inside better. The bottoms are fried in giant cast-iron skillets until golden and crackling; the tops steam soft, dusted with sesame and spring onion. Four buns cost ~¥11 (about CHF 1.40). Order the curry beef soup alongside — it's been on the menu since the 1930s.`,
      `The fillings go beyond the classic pork: prawn (虾仁), crab roe (蟹粉) and — the modern signature — foie gras (鹅肝) buns at ~¥8 each. The foie gras version sounds wrong and tastes completely right. The original pork remains the benchmark. Come at breakfast or lunch: the kitchen starts fresh each morning and the buns are noticeably better hot from the skillet, straight into your hands.`,
      `136 Sichuan Middle Road, Huangpu District — a 10-minute walk from the Bund. Open daily 7:00–19:30. No English menu, none needed — point at the bun tray, pay at the counter. This is the place from Florian's Instagram reel (@zoe_shanghailocal, #panfried, "$3 Michelin Shanghai"). She's right.`
    ]
  },

  // ── FOOD: BEIJING ────────────────────────────────────────────────────────
  duck: {
    title: 'Peking Duck at Da Dong',
    addr: 'Da Dong (大董): 22 Dongsishitiao, Dongcheng District, Beijing (multiple branches)',
    img: 'beijing-duck.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Da+Dong+Peking+Duck+Beijing',
    gallery: ['beijing-duck-2.png', 'beijing-duck-3.png', 'beijing-duck-4.png'],
    desc: [
      `Peking Duck is Beijing's greatest culinary gift to the world, and eating it in the city where it was perfected is a completely different experience. Da Dong — Beijing's most celebrated duck restaurant — has elevated the dish to high art. Their ducks are roasted in fruit-wood ovens until the skin is impossibly thin and crackling, the fat rendered clean beneath, the meat succulent throughout.`,
      `The tableside carving ceremony is a performance in itself. A white-gloved chef slices the duck into exactly 108 pieces — skin and meat in perfect ratio — while explaining the technique. Each piece is wrapped in a gossamer-thin pancake with spring onion, cucumber and a brush of hoisin. One bite and you understand why this dish has lasted 600 years.`,
      `Book well in advance — Da Dong fills up weeks ahead, and for good reason. Order the signature crispy skin served first with sugar, then the wrapped duck, then the rich bone broth at the end. It's a full two-hour meal.`
    ]
  },
  sijimingfu: {
    title: '四季民福 — Peking Duck by the Forbidden City',
    addr: '四季民福烤鸭店 (故宫店): 南池子大街11号, Dongcheng — right by the Forbidden City east gate (东华门) · Tables on the upper floor look out at the palace wall and corner tower',
    img: 'beijing-sijimingfu.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=四季民福烤鸭店+故宫店+南池子大街+北京',
    gallery: ['beijing-sijimingfu-2.png', 'beijing-sijimingfu-3.png', 'beijing-sijimingfu-4.png'],
    desc: [
      `四季民福 (Sìjì Mínfú) is the Peking duck everyone actually queues for now, and the 故宫店 is the branch worth the trouble: it sits at the Forbidden City's east gate, and the upstairs tables look straight out at the palace wall and the corner tower. Eating duck with that view is the entire point of coming to this branch rather than any other.`,
      `The chain was founded in 2008 and grew fast on the strength of the duck rather than any imperial pedigree. The birds go into a sealed steel oven that holds its heat hard, and are turned continuously so the skin colours evenly — you can watch it happening in the atrium while you wait, which you will.`,
      `⚠️ <strong>The queue is the whole problem.</strong> This branch is notorious for queueing from opening to closing; on public holidays the waiting list has run past a thousand parties, and the other branches start backing up from about 16:00. Take a queue number the moment you come out of the Forbidden City rather than after wandering, or eat early. They hand out snacks and hot tea to people waiting, which tells you how normal the wait is.`,
      `Order the duck, obviously, and the sides are genuinely good rather than filler — the mustard duck web (芥末鸭掌) and the cold dishes are worth ordering while you wait for the bird.`,
      `Alternative: <strong>大董 Da Dong</strong>, also on this page, does a leaner, more modern "crisp-skin" duck and takes bookings — the sensible fallback if the queue here is absurd on the day.`
    ]
  },

  manhengji: {
    title: '满恒记 — Instant Boiled Mutton',
    addr: '满恒记 (Mǎn Héng Jì): Xicheng District, Beijing — search on Dianping/Google Maps for nearest branch',
    img: 'food-manhengji.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=满恒记+北京',
    gallery: ['food-manhengji-2.png', 'food-manhengji-3.png', 'food-manhengji-4.png'],
    desc: [
      `满恒记 (Mǎn Héng Jì) is one of Beijing's most beloved old-school restaurants, famous for shuanyangrou — instant boiled mutton, Beijing's winter hot pot tradition. A polished copper chafing dish arrives at the table glowing with charcoal, filled with clear broth. Paper-thin slices of Inner Mongolian lamb are swirled through the broth for precisely ten seconds, then dipped in a thick sesame paste sauce.`,
      `The sesame dipping sauce is the secret weapon. 满恒记's version is legendary in Beijing: intensely nutty, slightly sweet, perfectly balanced against the clean mineral flavour of the lamb. The restaurant makes it fresh every morning and it bears no resemblance to anything from a jar.`,
      `The restaurant has been operating in the same neighbourhood for decades and the crowd tells the story: local Beijing families, groups of friends who have been coming here since university. Order the lamb first, then add tofu, cabbage and glass noodles as the broth enriches. Finish with a bowl of the deeply flavoured broth as soup.`
    ]
  },
  henjiu: {
    title: '很久以前羊肉串 — Mutton Skewers',
    addr: '很久以前羊肉串 (鼓楼店): 旧鼓楼外大街甲1号, Xicheng — 50 m north of Gulou Dajie metro exit A2 (Lines 2/8) · Open 11:30–14:30 and 16:30–02:00 · about ¥93 a head',
    img: 'food-henjiu.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=很久以前羊肉串+旧鼓楼外大街+北京',
    gallery: ['food-henjiu-2.png', 'food-henjiu-3.png', 'food-henjiu-4.png'],
    desc: [
      `很久以前羊肉串 ("Long Time Ago Mutton Skewers") was founded in 2008 by Song Ji, an Inner Mongolian native who set out to build the Haidilao of lamb BBQ — same obsessive service standards, same no-franchising discipline, applied to a single product done to perfection. Each skewer uses lamb sourced exclusively from 6-month-old Hulunbuir grassland sheep, skewered in a precise sequence (rib → lean → fat → lean → lean) and seasoned only with cumin and chili — nothing else, so the clean, milky sweetness of the lamb comes through. The gaminess that puts people off cheaper skewers is completely absent.`,
      `The table setup is the other thing: a 360° rotating smokeless electric grill that turns continuously so every skewer chars evenly without manual tending. Staff monitor the grill and add or remove skewers — you drink beer and eat, they cook. Cumin packets come individually sealed. Ice towels arrive in summer. Milk candy on the way out. Five consecutive years on Dianping's 必吃榜 Must-Eat List at the Gulou branch, which is the hardest restaurant recognition in China to sustain.`,
      `Order the lamb skewers (obviously), grilled scallops with vermicelli, the chicken wings and at least one round of the fried rice as a base. ~¥100–150 per person. Book ahead in the evening — walk-in queues at peak hours are long and the wait is not managed gently. The Gulou branch near the Drum Tower is the flagship; the Guijie (Ghost Street) branch at 209 Dongzhimen Neidajie is also excellent and slightly easier to get into.`
    ]
  },

  // ── SHENZHEN ACTIVITIES ──────────────────────────────────────────────────
  'szx-robot6s': {
    title: '全球首家机器人6S店 — World\'s First Robot Dealership',
    emoji: '🤖',
    addr: '6S Robotics Flagship Store · Xinghe World, Longgang District, Shenzhen (星河世界·龙岗)',
    img: 'act-szx-robot6s.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=6S+Robotics+星河世界+深圳龙岗',
    video: 'act-szx-robot6s.mp4',
    gallery: [],
    desc: [
      `Shenzhen's Longgang district is now home to the world's first Robot 6S Store — a dealership for humanoid and service robots modelled exactly on the automotive 6S concept (Sales, Service, Spare parts, Survey, Second-hand, Safety). You walk in and test-drive robots the way you'd test-drive a car: assistants demo home models, commercial delivery robots navigate the showroom floor, and the service centre behind the glass wall does live maintenance on customer units.`,
      `The robots on sale range from wheeled service models (hotel concierge, restaurant delivery) to early-stage bipedal humanoids from startups operating just a few kilometres away in Longhua's robot R&D corridor. Several of the brands on the showroom floor don't exist yet as consumer products — this is the spec sheet before mass production. Prices range from a few thousand RMB for basic units to hundreds of thousands for advanced bipeds.`,
      `This is the most concentrated glimpse of where personal robotics is actually heading — not the renders from tech presentations, but the physical, clunky, occasionally impressive reality of robots that exist in 2026. Shenzhen is the only city in the world where you could open this store, and it opened here first. The 40-minute metro ride from central Shenzhen (Line 3 to Yijing, then Line 14) is completely worth it.`
    ]
  },
  'szx-drones': {
    title: 'Drone Delivery & DJI Experience',
    emoji: '🚁',
    addr: 'DJI Sky Store: 中海信达广场 B1, Nanshan District · Drone delivery zones: OCT Bay, Futian',
    img: 'act-szx-drones.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=DJI+Sky+City+Shenzhen',
    gallery: ['act-szx-drones-g1.jpg', 'act-szx-drones-g2.jpg', 'act-szx-drones-g3.jpg'],
    desc: [
      `Shenzhen is the drone capital of earth — and DJI, the company that invented the modern consumer drone, is headquartered here. The DJI Sky Store (their flagship retail experience) is unlike any tech store you've been to: demo units fly indoors, staff can configure any drone on the spot, and the full product range from Mavic to Matrice is on display. You can also visit DJI Sky City, their campus in Nanshan, to see their architectural showpiece.`,
      `The more mind-bending experience is simply ordering food by drone delivery. Meituan and SF Express run active drone corridors over Shenzhen Bay and the OCT Bay area — you can order food, coffee or packages from designated rooftop pickup points and watch a DJI delivery drone arrive in under 10 minutes. This is not a demo. It's live, operational, and completely normal to locals.`,
      `The whole experience is a window into where every city is going in 10 years. Shenzhen is already there. Standing on a rooftop watching a drone land a meal next to you, with the bay and the Hong Kong skyline in the background, is one of the most "future is now" moments you can have anywhere on earth.`
    ]
  },
  'szx-huaqiangbei': {
    title: 'Huaqiangbei Electronics Market',
    emoji: '💻',
    addr: '华强北商业步行街, Futian District, Shenzhen (metro: Huaqianglu, Line 1/7)',
    img: 'act-szx-huaqiangbei.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=Huaqiangbei+Electronics+Market+Shenzhen',
    gallery: ['act-szx-huaqiangbei-g1.jpg', 'act-szx-huaqiangbei-g2.jpg'],
    desc: [
      `Huaqiangbei (华强北) is the largest electronics market on earth — a kilometre-long pedestrian street flanked by seven-storey towers of stalls selling every electronic component, gadget, accessory and assembled device imaginable. Makers, engineers and wholesale buyers come from 70 countries to source here. It is simultaneously a tourist attraction, an industrial supply chain, and the beating heart of Shenzhen's manufacturing ecosystem.`,
      `Spend time inside the Huaqiangbei Electronics Market building (华强北电子市场): floors of stalls selling iPhone screens, logic boards, custom PCBs, LED arrays, sensors and motors at prices that will make your jaw drop. The upper floors are less tourist-facing — factories selling direct to builders. Buy a custom keyboard kit. Buy a programmable RGB light strip for a quarter of what it costs anywhere else. Have someone solder something for you on the spot.`,
      `The best thing to do is wander slowly. Every 20 metres is something you've never seen before — a 5-millimetre drone motor, a fold-flat LCD display, a haptic feedback module the size of a coin. Bring a shopping list but leave room to be surprised. Budget a full half-day and bring a bag. Do NOT buy counterfeit electronics for home use; the legit components are remarkable value.`
    ]
  },

  'szx-seaworld': {
    title: '海上世界 — Sea World Shekou',
    emoji: '⚓',
    addr: 'Sea World, Shekou, Nanshan District, Shenzhen (metro: Sea World, Line 2)',
    img: 'act-szx-seaworld.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=Sea+World+Shekou+Shenzhen',
    gallery: ['act-szx-seaworld-g1.jpg', 'act-szx-seaworld-g2.jpg'],
    desc: [
      `Sea World (海上世界) in Shekou is Shenzhen's most charismatic waterfront district — a pedestrianised plaza centred on the Ming Hua, a real retired ocean liner permanently docked here and converted into restaurants, bars and a luxury hotel. The surrounding streets are lined with outdoor terraces, international restaurants, independent coffee shops and live music venues that spill onto the promenade in the evenings.`,
      `The area has undergone a full creative transformation in recent years. The new Sea World Culture & Arts Centre — designed by Fumihiko Maki — hosts major international exhibitions and is architecturally one of the most striking buildings in Shenzhen. On weekends, the entire district becomes a destination: families, expats and young Shenzhenites pack the waterfront for brunch, sunset drinks and evening markets.`,
      `It is the most European-feeling neighbourhood in Shenzhen — relaxed, walkable and international, with a genuine sense of community. Come for dinner and stay for drinks on the deck of the Ming Hua as the sun sets over the Pearl River Delta. Pair it with Nantou Ancient City (15 minutes by metro) for a perfect half-day loop.`
    ]
  },
  'szx-nantou': {
    title: '南头古城 — Nantou Ancient City',
    emoji: '🏯',
    addr: '南头古城, Nanshan District, Shenzhen (metro: Nantou Ancient City, Line 12)',
    img: 'act-szx-nantou.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=Nantou+Ancient+City+Shenzhen',
    gallery: ['act-szx-nantou-g1.jpg', 'act-szx-nantou-g2.jpg'],
    desc: [
      `Nantou Ancient City (南头古城) is one of the strangest and most fascinating places in China: a 1,700-year-old walled city that has been completely swallowed by Shenzhen's urban growth, with tower blocks rising directly behind its Ming dynasty gates. The contrast is jarring and beautiful — ancient stone archways framing glass skyscrapers, cobblestone lanes threading between modern apartments whose residents hang laundry above Ming-era walls.`,
      `The old city was comprehensively restored by the Urbanus architecture firm in 2019 and has become one of Shenzhen's most creative neighbourhoods. The lanes are now lined with independent galleries, concept stores, craft beer bars, specialty coffee roasters and a remarkable density of excellent small restaurants. Local designers, artists and ceramicists have set up studios here. The Nantou Biennale uses the entire historic district as its exhibition space.`,
      `Don't miss the 报德广场 (Baode Square) at the heart of the old city, the 关帝庙 (Guan Di Temple) still in active use, and the rooftop viewpoint looking out over the juxtaposition of ancient and ultra-modern. Come hungry — the food scene is exceptional. Combine with Sea World (two stops by metro) for a full Nanshan afternoon.`
    ]
  },
  'szx-snowworld': {
    title: '前海华发冰雪世界 — Indoor Snow Park',
    emoji: '⛷️',
    addr: '前海华发冰雪世界 · Jingcong Road, Bao\'an District, Shenzhen (search 前海华发冰雪世界 on maps)',
    img: 'act-szx-snowworld.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=前海华发冰雪世界+深圳+宝安',
    gallery: ['act-szx-snowworld-g1.jpg', 'act-szx-snowworld-g2.jpg'],
    desc: [
      `前海华发冰雪世界 (Qianhai Huafa Snow World) in Bao'an is one of Shenzhen's indoor snow parks — a fully climate-controlled mountain environment with real snow where it's 25°C outside. The facility opened in 2025 and features a main ski slope designed for all levels, from wide beginner runs to a longer intermediate course. Snowboards, skis and full winter gear are included or available for hire.`,
      `Beyond skiing, the complex includes an ice skating rink, snow play areas designed for children (sledding, snow tubing, snow castle building), and a dedicated section for very young children experiencing snow for the first time. For a child who has never seen snow in Guangdong province, this is a genuinely magical experience. The temperature is kept at around -5°C on the slopes.`,
      `This is an ideal half-day activity — particularly for Felix's age group — that breaks up the intensity of city sightseeing with something physically fun and genuinely novel. Book online to avoid the weekend queue. Arriving at opening time is recommended as weekend afternoons can get crowded. Allow 3–4 hours minimum. Note: Shenzhen also has 阿尔卑斯冰雪世界 (Alps Snow World) in Guangming District as another option.`
    ]
  },
  'szx-bambulab': {
    title: 'Bambu Lab Flagship Store',
    emoji: '🖨️',
    addr: 'Bambu Lab (拓竹) Flagship Store, near inno100, Nanshan District, Shenzhen',
    img: 'act-szx-bambulab.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=Bambu+Lab+Shenzhen+flagship',
    gallery: ['act-szx-bambulab-g1.jpg', 'act-szx-bambulab-g2.jpg'],
    desc: [
      `Bambu Lab (拓竹科技) is the Shenzhen company that upended the consumer 3D printing market with the X1 Carbon — a fully automated, multi-material, insanely fast desktop printer that made every other machine on the market look obsolete. Their Shenzhen flagship store is not just a shop but a working showcase: every machine running, printing in real time, surrounded by finished models in every material imaginable — carbon fibre, flexible TPU, translucent resins, wood composites.`,
      `The store sits near the inno100 tech hub in Nanshan, an area that has become the hardware startup capital of the world — within walking distance you'll also find the Meituan drone delivery pickup station (try ordering a coffee by drone) and a cluster of robotics companies including 6s Robotics. The whole neighbourhood is a live demonstration that Shenzhen isn't just making the world's electronics — it's designing its future too.`,
      `Even if you're not in the market for a 3D printer, the store is worth visiting for what it represents: a homegrown Chinese brand that now leads a global category, designed and built entirely in this city. For anyone interested in technology, manufacturing or design, it is one of the most inspiring retail spaces in Shenzhen. The staff are knowledgeable and happy to demo any machine.`
    ]
  },
  'szx-sciencemuseum': {
    title: '深圳科学馆 — Shenzhen Science Museum',
    emoji: '🔬',
    addr: '深圳科学馆, Futian District, Shenzhen — free entry, no reservation (metro: Lianhuashan Park, Line 4)',
    img: 'act-szx-sciencemuseum.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=深圳科学馆+福田',
    gallery: ['act-szx-sciencemuseum-g1.jpg', 'act-szx-sciencemuseum-g2.jpg'],
    desc: [
      `The Shenzhen Science Museum (深圳科学馆) in Futian is one of the most hands-on, interactive science centres in southern China — and uniquely, it is free to enter with no advance booking required. The permanent collection covers physics, biology, astronomy, environmental science and technology through exhibits that visitors can touch, activate and experiment with. It is the kind of museum where children have to be dragged out at closing time.`,
      `Key exhibits include a full-scale astronomy section with a working planetarium, a physics hall where every exhibit demonstrates a principle through direct interaction (pendulums, optics, electrostatics, fluid dynamics), and a technology floor covering AI, robotics and Shenzhen's own manufacturing story. The museum is clearly designed for school groups but is genuinely engaging for adults too — particularly anyone curious about how Shenzhen built its technology ecosystem from scratch.`,
      `Note: there are two science venues in Shenzhen — this one (深圳科学馆, Futian, free, no reservation) and the newer 深圳科学技术馆 in Guangming which requires booking and is much further out. For a visit with children, the Futian museum is the right call — central location, free, immediately rewarding. Combine it with a walk in Lianhuashan Park directly behind the museum.`
    ]
  },
  'szx-maotai': {
    title: 'Moutai Shenzhen — Brand Experience Store',
    emoji: '🥃',
    addr: '深圳市福田区福华三路8-2号 · Futian District, Shenzhen (13 locations across the city — main experience center at Fuhua 3rd Rd)',
    img: 'act-szx-maotai.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=22.532997,114.066196',
    gallery: ['act-szx-maotai-g1.jpg', 'act-szx-maotai-g2.jpg'],
    desc: [
      `Kweichow Moutai's Shenzhen network of 13 specialty stores — opened simultaneously across the city in November 2022 — represents the brand's third-generation retail concept: cultural embassies for China's national spirit, not mere liquor shops. Inside, smart illuminated wine cabinets display Moutai's most coveted bottles, multimedia interactive walls narrate the distillery's history in Maotai Town, Guizhou, and dedicated tasting zones let staff guide you through the aromas and flavors of sauce-aroma (酱香) baijiu. Sound, light, and digital technology create an atmosphere that feels closer to a luxury boutique or museum than a conventional spirits retailer.`,
      `The tasting is the highlight. Staff walk guests through Moutai's extraordinary production process — twelve rounds of fermentation, nine rounds of distillation, a minimum three-year aging — before pouring the signature 53% ABV spirit into small traditional cups. The iconic 78-step pouring ritual, used at ceremonial Moutai tastings globally, is often demonstrated. For shoppers: bottles must be reserved through the official "i茅台" app and collected in-store, a process that adds to the sense of occasion. It's genuinely educational, genuinely delicious, and unlike any spirits experience you'll have elsewhere.`,
      `Shenzhen also became globally famous in 2022 as the site of Moutai's baijiu ice cream craze: the i茅台冰淇淋 flagship at Mixc World in Nanshan opened to hour-long queues and scalper prices. The ice cream — laced with genuine 53% Moutai baijiu in classic milk, vanilla, and green plum flavors — became a cultural moment that introduced younger Chinese consumers to the brand. While the ice cream concept has mostly wound down, any Moutai store visit today carries the same energy: irreverence and reverence in equal measure. A standard 500ml Flying Fairy (飞天茅台) bottle runs around ¥1,500 at retail — buy one to bring home.`
    ]
  },

  // ── FOOD: SHENZHEN ───────────────────────────────────────────────────────
  'szx-taotao': {
    title: '陶陶居 — Traditional Cantonese Dim Sum',
    emoji: '🥟',
    addr: '陶陶居 (Tao Tao Ju) — search on Dianping for nearest Shenzhen branch',
    img: 'food-szx-taotaoju.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=陶陶居+深圳',
    gallery: ['food-szx-taotaoju-g1.jpg', 'food-szx-taotaoju-g2.jpg', 'food-szx-taotaoju-g3.jpg'],
    desc: [
      `陶陶居 (Tao Tao Ju) is one of the most famous Cantonese restaurants in southern China — a century-old institution originally from Guangzhou that has become the benchmark for traditional dim sum in the region. The Shenzhen branches replicate the old-school Guangzhou experience: hand-pushed trolleys, white-uniformed staff, a roar of Cantonese conversation, and dim sum made the way it was before anyone started optimising for efficiency over craft.`,
      `Order the har gow (steamed shrimp dumplings), siu mai (pork and shrimp), cheung fun (rice noodle rolls with various fillings), and the baked egg tarts. Everything is made in-house. The wonton soup — a light broth with hand-folded wontons in thin skin — is a perfect thing.`,
      `Arrive at 10 AM when the kitchen is at peak production and the trolleys are fully loaded. The energy in the room at that hour — three generations at the same round table, sharing clay pots of pu-erh tea and arguing over the last har gow — is a window into Cantonese family culture that no amount of "cultural experience" tourism can replicate.`
    ]
  },
  'szx-dongwan': {
    title: '東灣 — Modern Cantonese Fine Dining',
    emoji: '🍽️',
    addr: '東灣 · Mandarin Oriental Shenzhen, 7 Fuhua 3rd Road, Futian District, Shenzhen',
    img: 'food-szx-dongwan.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=The+Bay+Chef+Fei+Mandarin+Oriental+Shenzhen',
    gallery: ['food-szx-dongwan-g1.jpg', 'food-szx-dongwan-g2.jpg'],
    desc: [
      `東灣 (Dōng Wān) is the signature Cantonese restaurant at the Mandarin Oriental Shenzhen — a refined, calm counterpoint to the city's frenetic energy. The kitchen works with seasonal Cantonese ingredients treated with precision: delicate wok-fried lobster, slow-steamed grouper, roasted suckling pig with impossibly crisp skin, and desserts that reference Guangdong's traditional sweet soups in contemporary form.`,
      `The setting inside the Mandarin Oriental amplifies the experience — understated elegance, flawless service, a wine list that takes Cantonese food pairing seriously. This is fine dining in the European sense applied to a Chinese culinary tradition that deserves it.`,
      `Book for dinner. Request a window table if available — the Futian CBD skyline at night provides a backdrop worthy of the food. Plan CHF 100–150 per person including wine. This is the meal for an occasion — the group dinner where you want everyone to remember both the food and the company.`
    ]
  },
  'szx-jiayuan': {
    title: '嘉苑飯店 — Chaoshan Seafood',
    emoji: '🦞',
    addr: '嘉苑飯店 · near 中深花园大厦, Luohu District, Shenzhen',
    img: 'food-szx-jiayuan.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=嘉苑飯店+深圳',
    gallery: ['food-szx-jiayuan-g1.jpg', 'food-szx-jiayuan-g2.jpg', 'food-szx-jiayuan-g3.jpg'],
    desc: [
      `嘉苑飯店 specialises in 潮汕菜 (Cháoshàn cuisine) — the coastal cooking tradition of eastern Guangdong, renowned for its obsessive focus on ingredient quality and its light, clear-flavoured approach to seafood. Chaoshan cuisine is to Cantonese what Kyoto kaiseki is to Japanese food: restrained, precise, ingredient-first.`,
      `The seafood here is ordered live from the tanks: grouper, geoduck clam, mantis shrimp, abalone. The kitchen's job is to cook them as simply as possible and not get in the way. Steamed fish with soy, ginger and spring onion. Geoduck eaten raw, sliced paper-thin, with a dab of wasabi. Mantis shrimp boiled for three minutes in salted water and split at the table.`,
      `Also order the Chaoshan-style oyster omelette (蚵仔煎) and the braised goose (卤水鹅). Save room for Chaoshan-style congee — thin, silky, almost liquid — with dried shrimp and crispy shallots. A deeply regional meal that you can only really eat in this corner of China.`
    ]
  },
  'szx-kaoya': {
    title: '花悅庭·果木烤鴨 — Fruit Wood Roast Duck',
    emoji: '🦆',
    addr: '花悅庭·果木烤鴨 — search on Dianping for nearest Shenzhen branch',
    img: 'food-szx-roastduck.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=花悅庭果木烤鴨+深圳',
    gallery: ['food-szx-roastduck-g1.jpg', 'food-szx-roastduck-g2.jpg', 'food-szx-roastduck-g3.jpg'],
    desc: [
      `花悅庭·果木烤鴨 is Shenzhen's answer to the Peking Duck obsession — but cooked over fruit wood (果木, guǒ mù) rather than the traditional jujube wood of Beijing. The distinction matters: fruit wood burns sweeter and cooler, producing a duck with slightly lacquered skin and a more floral fat. It is a different but equally compelling bird.`,
      `The restaurant scores on presentation as much as technique — carved tableside, presented on beautiful porcelain, wrapped in gossamer pancakes with the standard accompaniments. The skin is the centrepiece: blistered, brittle, golden, with a thin layer of perfectly rendered fat beneath. The meat is deeply succulent.`,
      `The difference from a Peking Duck experience in Beijing is the local context: this is how Shenzhen does it — newer, slightly more frenetic, less ceremonial, with a broader menu of southern Chinese supporting dishes. Order the roast duck, then fill the table with Cantonese stir-fries from the full menu.`
    ]
  },
  'szx-roastgoose': {
    title: '下村新强记 — Gongming Roast Goose',
    emoji: '🪿',
    addr: '下村新强记烧鹅店 · Gongming (公明), Guangming District, Shenzhen (original location)',
    img: 'food-szx-roastgoose.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=下村新强记烧鹅+公明+深圳',
    gallery: ['food-szx-roastgoose-g1.jpg', 'food-szx-roastgoose-g2.jpg'],
    desc: [
      `Gongming roast goose (公明烧鹅) is a Shenzhen institution — a specific preparation of roast goose developed in the Gongming township of Guangming District that became so celebrated it gave the whole style its own name. 下村新强记 is one of the most famous places to eat it, and it looks exactly like it should: a small, unpretentious storefront with a row of burnished geese hanging in the window and a queue that never quite goes away.`,
      `The geese are raised locally, marinated in a house blend of five-spice and fermented bean curd, then roasted whole in wood-burning ovens until the skin achieves an amber lacquer and the meat stays deeply juicy beneath. Served chopped over rice with a bright, acidic plum sauce that cuts through the rich fat.`,
      `This is the kind of place where the food is so good it has outgrown its humble setting by several orders of magnitude, but the setting never changed and that's part of the point. Arrive early — they sell out. Make the 40-minute trip from central Shenzhen. It is very worth it.`
    ]
  },
  'szx-beefhotpot': {
    title: '潮汕大目牛肉火锅 — Chaoshan Beef Hotpot',
    emoji: '🔥',
    addr: '潮汕大目牛肉火锅 — multiple locations in Shenzhen (search Dianping for nearest)',
    img: 'food-szx-beefhotpot.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=潮汕大目牛肉火锅+深圳',
    gallery: ['food-szx-beefhotpot-g1.jpg', 'food-szx-beefhotpot-g2.jpg'],
    desc: [
      `潮汕牛肉火锅 (Chaoshan beef hotpot) is one of the most intensely local food experiences in southern China — nothing like Sichuan hotpot, nothing like Mongolian hot pot. The broth is clear and lightly salted, boiled from beef bones for hours. The beef is slaughtered the same morning, never frozen, and hand-cut to order in cuts that have no equivalent in Western butchery: 匙仁 (spoon-tender), 嫩肉 (neck), 脖仁 (neck steak), 五花趾 (flank sinew).`,
      `Each cut gets between 5 and 15 seconds in the broth — no more. A timer on the table keeps you honest. The result is beef with a texture between sashimi and a perfect medium-rare steak — something that doesn't exist anywhere else. The dipping sauce is a raw garlic, soy and chilli oil blend that you mix yourself at the table.`,
      `The experience is communal, fast-paced and completely absorbing. You will forget about everything else for two hours. Order the full range of cuts, start with the most delicate ones, and save the richer marbled cuts for when your broth has had time to develop flavour. Finish with the traditional Chaoshan-style satay noodles cooked in the enriched broth.`
    ]
  },
  'szx-cqhotpot': {
    title: '长安亭院火锅 — Chongqing Hotpot in a Courtyard',
    emoji: '🌶️',
    addr: '长安亭院火锅 · Shenzhen (search on Dianping — multiple locations)',
    img: 'food-szx-cqhotpot.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=长安亭院火锅+深圳',
    gallery: ['food-szx-cqhotpot-g1.jpg', 'food-szx-cqhotpot-g2.jpg', 'food-szx-cqhotpot-g3.jpg'],
    desc: [
      `长安亭院火锅 brings Chongqing-style hotpot into a setting that Shenzhen almost never has: a traditional Chinese courtyard (亭院) environment, with carved wooden screens, lanterns, roof tiles and the kind of architectural care that takes the meal out of the transactional and into the atmospheric.`,
      `The hotpot itself is Chongqing orthodox — a dark, almost black broth built from dried chillies, Sichuan peppercorns, beef tallow, fermented black beans and doubanjiang. The mala sensation (numbingly spicy) builds across the meal. The dual-pot option (one spicy, one clear) makes it manageable for mixed groups.`,
      `Order the classic accompaniments: thinly sliced wagyu beef, duck intestine (for texture), lotus root, tofu skin, chrysanthemum greens. The courtyard setting slows you down in a way a regular Chongqing hotpot shop doesn't — you're not just eating, you're sitting in a space designed to make the experience feel like something worth lingering in. Plan 2–3 hours. Bring a full appetite.`
    ]
  },

  'szx-heytea': {
    title: '喜茶 — Heytea',
    emoji: '🧋',
    addr: 'Heytea (喜茶) — multiple Shenzhen locations; original flagship: 益田假日广场, Futian District',
    img: 'act-szx-heytea.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=喜茶+深圳+福田',
    gallery: ['act-szx-heytea-g1.jpg', 'act-szx-heytea-g2.jpg'],
    desc: [
      `喜茶 (Heytea) is the brand that single-handedly transformed Chinese milk tea from a street snack into a design-forward lifestyle product — and it was born in Shenzhen. Founded in 2012 in the city's Jiangmen district, Heytea's signature innovation was replacing powder-based milk tea with real loose-leaf tea, fresh dairy cream and seasonal fruit — a quality jump that created a queue-around-the-block phenomenon before queues became a product feature.`,
      `The crispy cheese tea (芝士茗茶) is the flagship drink: a strong green or oolong tea base topped with a thick layer of salted cream cheese foam — sweet and savoury, cool and warming at the same time. The seasonal fruit teas (mango, strawberry, lychee, watermelon depending on the time of year) use whole fresh fruit and are exceptional. The egg tarts (波波蛋挞) are equally famous: flaky pastry, soft custard centre, perfect with any tea.`,
      `There are dozens of Heytea locations across Shenzhen — the Futian Yitian Holiday Plaza branch (near the Four Seasons and COCO Park) is the most central. Expect a 15–30 minute queue at peak times on weekends; the app allows pre-ordering. Total cost: CHF 5–8 per person including drinks and a pastry. Non-negotiable Shenzhen experience.`
    ]
  },

  // ── FOOD: CHENGDU ────────────────────────────────────────────────────────
  hotpot: {
    title: 'Authentic Sichuan Hotpot',
    addr: 'Best area: Yulin neighbourhood, Wuhou District, Chengdu (try Dezhuang or local spots on Yulin East Rd)',
    img: 'chengdu-hotpot.png',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=Yulin+Hotpot+Chengdu',
    gallery: ['chengdu-hotpot-2.png', 'chengdu-hotpot-3.png', 'chengdu-hotpot-4.png'],
    desc: [
      `Sichuan hotpot is one of the great eating experiences of the world. A dark, fragrant cauldron of dried chillies, Sichuan peppercorns, fermented black beans and beef tallow arrives at your table still bubbling furiously. The signature sensation is mala — mouth-numbing heat that builds slowly and lingers beautifully for hours after.`,
      `The ritual is communal and deeply unhurried. Order wave after wave of raw ingredients — paper-thin wagyu beef, silky lamb, lotus root, tofu skin, leafy greens, mushrooms — and cook them directly in the broth. Everything gets dipped in a cooling sesame and garlic sauce that tempers the fire just enough to keep you going.`,
      `For the real experience, head to a local spot in the Yulin neighbourhood rather than a tourist-facing restaurant. Zero English menu, laminated picture cards, waitstaff who will cheerfully judge your technique. Block out the whole evening. Come hungry, come ready to sweat.`
    ]
  },
  mapotofu: {
    title: "Mapo Tofu at Chen's",
    addr: "陈麻婆豆腐 (旗舰店) Chen Mapo Dofu flagship: 青华路10号附10-12号, Qingyang District, Chengdu · Next to Du Fu's Thatched Cottage · ☎ 028-87317216 · Open 11:00–21:00",
    img: 'food-mapotofu.png',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=陈麻婆豆腐旗舰店+青华路+成都',
    gallery: ['food-mapotofu-5.jpg', 'food-mapotofu-6.jpg', 'food-mapotofu-2.png', 'food-mapotofu-3.png', 'food-mapotofu-4.png'],
    desc: [
      `Chen Mapo Dofu (陈麻婆豆腐) has been making mapo tofu on the same street in Chengdu since 1862. The dish was invented here — by the pockmarked-faced (mapo) wife of a tofu seller named Chen — and 160 years later her descendants are still running the restaurant. Eating it here, in the city of its birth, is one of those rare food experiences where history and flavour arrive simultaneously.`,
      `Go to the <strong>flagship on Qinghua Road</strong> (旗舰店), not the Luomashi head store and not the Yulin Road branch — this is the one carrying the Michelin Bib Gourmand, awarded again in the 2026 Chengdu guide and every year since the guide launched. It sits directly beside Du Fu's Thatched Cottage and Huanhuaxi Park, so it pairs naturally with a morning at the poet's garden. Around ¥70–80 per person.`,
      `The dish itself is a study in extremes: silken white tofu, barely holding together, swimming in a sauce of scorching chili oil, fermented black beans, Sichuan peppercorns, minced beef and a glossy layer of bright red oil. The mala sensation — simultaneously numbing and burning — builds slowly and peaks about ten minutes after you stop eating. Deeply addictive.`,
      `Order the original recipe (传统麻婆豆腐) rather than any modified version. Add a bowl of plain steamed rice — essential for tempering the heat — and a cold Tsingtao. The restaurant is always busy at lunch; arrive at 11:30 AM or be prepared to queue.`
    ]
  },
  mawangzi: {
    title: '马旺子·川小馆 — Michelin ★ Sichuan',
    addr: '马旺子·川小馆 Ma Wangzi (Ma\'s Kitchen): 东糠市街1号, Jinjiang District, Chengdu · 3 min walk from Taikoo Li · ☎ 028-64231923 · Mon–Thu 11:00–14:00 & 17:00–20:30, Fri–Sun 11:30–14:30 & 17:00–20:30',
    img: 'food-mawangzi.jpg',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=马旺子川小馆+东糠市街+成都',
    gallery: ['food-mawangzi-3.jpg', 'food-mawangzi-4.jpg', 'food-mawangzi-2.jpg', 'food-mawangzi-5.jpg', 'food-mawangzi-6.jpg', 'food-mawangzi-7.jpg', 'food-mawangzi-8.jpg', 'food-mawangzi-9.jpg', 'food-mawangzi-10.jpg', 'food-mawangzi-11.jpg'],
    desc: [
      `马旺子 (Mǎ Wàngzi, "Ma's Kitchen") started in 1923 in Meishan, the town an hour south of Chengdu, and is now run by the fourth generation of the family. It took a Michelin star in the very first Chengdu guide in 2022 and has held it every year since — and in 2023 it was named a Chinese Time-Honored Brand (中华老字号). What makes it unusual is the price: a Michelin-starred kitchen where the average bill lands around ¥100 per person, roughly CHF 12.`,
      `The cooking is refined Sichuan rather than fiery Sichuan — traditional recipes cleaned up and re-plated without losing the point of them. The room is new-Chinese minimal: pale wood, warm light, private rooms upstairs. Portions are generous and the bill stays small, which is why it gets called the cheapest Michelin star in Chengdu.`,
      `<strong>🌶️ The mapo tofu is the one to order.</strong> It arrives in a clay pot still bubbling over its own burner, and local write-ups routinely rank it the best thing on the table — 麻辣鲜香 and built for eating over rice. Get the 银丝卷 (silver-thread rolls, the griddled white buns) alongside to mop it up. Worth knowing we have <strong>two mapo tofus on this trip</strong>: this one, and the original at Chen Mapo's Qinghua Road flagship. They are not the same dish — Chen's is the 1862 recipe, this is a starred kitchen's version of it.`,
      `The rest of the order, from people who eat there often: <strong>毛血旺</strong> (máo xuè wàng — the duck-blood and offal stew that is the century-old house signature; every table orders it), <strong>乐山甜皮鹅</strong> (Leshan sweet-skin goose — sweet, tender and one of the rare <em>non-spicy</em> Sichuan dishes, so a good opener for anyone struggling with the heat), <strong>宫保茄香虾球</strong> (kung pao prawn balls with aubergine, sweet-sour and only mildly hot), <strong>鲜菌拌饭</strong> (mushroom rice), and 香煎油冻粑 or 担担面 on the side.`,
      `⚠️ Book early. Reports from recent diners describe tables going half a month in advance, with touts outside reselling queue numbers. This is the one restaurant on this page worth reserving before we fly, not after we land.`,
      `It sits beside Taikoo Li — the same block as the 谧寻茶室 and 元古 tea houses — so lunch here, tea in the afternoon and a wander through Daci Temple all fit into one walkable afternoon.`
    ]
  },
  wagyu: {
    title: '锦城印象火锅(彩虹店) — Wagyu Hotpot',
    addr: '锦城印象火锅 Rainbow Bridge Branch: 武侯祠大街19号（近彩虹桥头）, Wuhou District, Chengdu · Near Wuhou Temple · Open 11:00–02:00',
    img: 'food-wagyu.png',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=锦城印象火锅+武侯祠大街+成都',
    gallery: ['food-wagyu-2.png', 'food-wagyu-3.png', 'food-wagyu-4.png'],
    desc: [
      `锦城印象火锅 (Jǐnchéng Yìnxiàng Hotpot) at the Rainbow Bridge branch in Wuhou sits five minutes from the Wuhou Temple, Chengdu's most visited historic site. The restaurant holds a Michelin Selected listing (2024 and 2025 Chengdu Guide) and a Black Pearl designation — a rare combination that marks it as the city's most decorated hotpot address. The décor is warm, the service attentive by Sichuan hotpot standards, and the kitchen takes the ingredients seriously.`,
      `The signature is the 和牛嫩肩M9+ (Australian M9+ wagyu shoulder), sliced thin and cooked for no more than 15 seconds in the beef-tallow Sichuan broth. M9 is the highest commercial marbling grade in the Australian grading system — heavily intramuscular fat that melts on contact with the hot oil and practically dissolves on the palate. The broth itself is the other star: a classic Chengdu-style mala base built on beef tallow, dried chillies, Sichuan peppercorn, and doubanjiang fermented bean paste, aged for months before service.`,
      `Order strategy: start with the wagyu shoulder (和牛嫩肩, ~¥88/plate), then fill out the table with bean curd skin, lotus root, oyster mushrooms, and duck blood (a Chengdu staple). The sesame dipping sauce cuts the fat without competing with the heat. Budget ¥120–162 per person for a proper meal. The restaurant opens at 11:00 and stays open until 02:00 — one of the few premium hotpot spots in Chengdu worth visiting for a late dinner.`
    ]
  }
};
