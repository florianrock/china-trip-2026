const ACTIVITIES = {
  // ── SHANGHAI ACTIVITIES ──────────────────────────────────────────────────
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

  // ── BEIJING ACTIVITIES ───────────────────────────────────────────────────
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
    addr: 'Yang\'s Fry Dumplings: 269 Wujiang Road, Jing\'an District · Da Hu Chun: 6 Sichuan Middle Rd, Shanghai',
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
    title: 'Sijimingfu — Imperial Duck',
    addr: 'Sijimingfu (四季民福): Near Wangfujing / Forbidden City, Dongcheng District, Beijing',
    img: 'beijing-sijimingfu.png',
    city: 'Beijing',
    maps: 'https://maps.google.com/?q=Sijimingfu+Beijing',
    gallery: ['beijing-sijimingfu-2.png', 'beijing-sijimingfu-3.png', 'beijing-sijimingfu-4.png'],
    desc: [
      `Sijimingfu is Beijing's most storied Peking Duck restaurant — a converted Qing dynasty courtyard house steps from the Forbidden City, where the recipe has been passed down through the same family for four generations. The setting alone justifies the visit: red lanterns in a carved wooden courtyard, the smell of hickory smoke drifting from century-old ovens.`,
      `The ducks here are raised on a specific grain diet for 65 days, then air-dried for 24 hours before roasting in a closed oven over jujube and pear wood — a technique that produces skin so thin and crackling it shatters at a touch. The chef carves it at the table in under two minutes: 108 slices, every one skin-on, presented on antique blue-and-white porcelain.`,
      `Order the full duck set: crispy skin dipped in fine sugar, wrapped pancakes, then a bowl of silky duck bone congee that has been simmering since morning. Book the courtyard room if you can — eating under paper lanterns with the roofline of the Forbidden City visible beyond the walls is the kind of moment you don't forget.`
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

  // ── SHENZHEN ACTIVITIES ──────────────────────────────────────────────────
  'szx-drones': {
    title: 'Drone Delivery & DJI Experience',
    emoji: '🚁',
    addr: 'DJI Sky Store: 中海信达广场 B1, Nanshan District · Drone delivery zones: OCT Bay, Futian',
    img: 'act-szx-drones.jpg',
    city: 'Shenzhen',
    maps: 'https://maps.google.com/?q=DJI+Sky+City+Shenzhen',
    gallery: ['act-szx-drones-g1.jpg', 'act-szx-drones-g2.jpg'],
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
    addr: "Chen Mapo Dofu (陈麻婆豆腐): 197 Yulin West Road, Jinjiang District, Chengdu",
    img: 'food-mapotofu.png',
    city: 'Chengdu',
    maps: 'https://maps.google.com/?q=Chen+Mapo+Dofu+Chengdu',
    gallery: ['food-mapotofu-2.png', 'food-mapotofu-3.png', 'food-mapotofu-4.png'],
    desc: [
      `Chen Mapo Dofu (陈麻婆豆腐) has been making mapo tofu on the same street in Chengdu since 1862. The dish was invented here — by the pockmarked-faced (mapo) wife of a tofu seller named Chen — and 160 years later her descendants are still running the restaurant. Eating it here, in the city of its birth, is one of those rare food experiences where history and flavour arrive simultaneously.`,
      `The dish itself is a study in extremes: silken white tofu, barely holding together, swimming in a sauce of scorching chili oil, fermented black beans, Sichuan peppercorns, minced beef and a glossy layer of bright red oil. The mala sensation — simultaneously numbing and burning — builds slowly and peaks about ten minutes after you stop eating. Deeply addictive.`,
      `Order the original recipe (传统麻婆豆腐) rather than any modified version. Add a bowl of plain steamed rice — essential for tempering the heat — and a cold Tsingtao. The restaurant is always busy at lunch; arrive at 11:30 AM or be prepared to queue.`
    ]
  }
};

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
      `The Little Prince themed suite — officially the "Little Prince Kids Room" — is at Four Seasons Beijing, not Shenzhen. The good news: Beijing is on the itinerary. The better news: the Koch kids have no idea. The suite features a red biplane bunk bed with a full-length slide, star-spangled blue carpet, and murals of the Little Prince and his rose across every wall.`,
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
    const avatar = document.getElementById('user-avatar');
    const nameEl = document.getElementById('user-name');
    const chip = document.getElementById('user-chip');
    const signinBtn = document.getElementById('signin-btn');
    if (avatar) avatar.src = payload.picture || '';
    if (nameEl) nameEl.textContent = currentUser.name;
    if (chip) chip.style.display = 'flex';
    if (signinBtn) signinBtn.style.display = 'none';
    restoreUserVotes();
  } catch (e) { console.error('auth error', e); }
}

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
    if (window.google) google.accounts.id.prompt();
    return;
  }

  if (userVotedSet.has(id)) {
    // Unvote — optimistic
    serverVotes[id] = Math.max(0, (serverVotes[id] || 1) - 1);
    userVotedSet.delete(id);
    localStorage.removeItem('vote_' + currentUser.email + '_' + id);
    refreshBtn(id);
    if (APPS_SCRIPT_URL !== 'REPLACE_WITH_APPS_SCRIPT_URL') {
      try {
        const url = APPS_SCRIPT_URL + '?token=' + encodeURIComponent(currentUser.idToken)
                    + '&activityId=' + encodeURIComponent(id) + '&action=remove';
        const res = await fetch(url);
        const data = await res.json();
        console.log('[unvote]', data);
      } catch (e) { console.error('[unvote error]', e); }
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
    try {
      const url = APPS_SCRIPT_URL + '?token=' + encodeURIComponent(currentUser.idToken)
                  + '&activityId=' + encodeURIComponent(id);
      const res = await fetch(url);
      const data = await res.json();
      console.log('[vote]', data);
    } catch (e) { console.error('[vote error]', e); }
  }
}

async function loadVoteCounts() {
  if (APPS_SCRIPT_URL === 'REPLACE_WITH_APPS_SCRIPT_URL') return;
  try {
    const res = await fetch(APPS_SCRIPT_URL);
    const data = await res.json();
    if (data.ok && data.counts) {
      Object.assign(serverVotes, data.counts);
      document.querySelectorAll('.upvote-btn[data-id]').forEach(btn => refreshBtn(btn.dataset.id));
    }
  } catch (e) { /* offline — counts show as 0 */ }
}

document.getElementById('signin-btn')?.addEventListener('click', () => {
  if (window.google) google.accounts.id.prompt();
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
function applyHash() {
  const hash = location.hash.slice(1);
  if (!hash) return;
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
window.addEventListener('popstate', applyHash);

// ── Modal ────────────────────────────────────────────────────────────────────
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
  const a = ACTIVITIES[id];
  if (!a) return;

  const galleryHtml = a.gallery.map(src =>
    `<img src="${src}" alt="${a.title}" loading="lazy" />`
  ).join('');

  const heroHtml = a.img
    ? `<img class="modal-hero" src="${a.img}" alt="${a.title}" />`
    : `<div class="modal-hero-emoji">${a.emoji || '🍽️'}</div>`;

  modalContent.innerHTML = `
    ${heroHtml}
    <h2>${a.title}</h2>
    ${a.addr ? `<p class="modal-addr">📍 ${a.addr}${a.maps ? ` · <a href="${a.maps}" target="_blank" rel="noopener" class="maps-link">Maps ↗</a>` : ''}</p>` : ''}
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

function openHotelModal(id) {
  const h = HOTELS[id];
  if (!h) return;

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

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
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
