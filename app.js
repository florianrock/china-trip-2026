const ACTIVITIES = {
  // ── SHANGHAI ACTIVITIES ──────────────────────────────────────────────────
  train: {
    title: 'Bullet Train Business Class',
    img: 'train-business.png',
    city: 'Shanghai',
    gallery: ['train-business-2.png', 'train-business-3.png', 'train-business-4.png'],
    desc: [
      `The Shanghai–Beijing high-speed train is one of the great travel experiences in the world — and business class on the Fuxing G-series makes it genuinely extraordinary. The seats recline fully flat into a lie-flat bed, each in its own private pod with a wide personal screen, noise-cancelling headrests and a full-length footrest. At 350 km/h, you barely feel the speed. The 1,318 km journey takes just 4.5 hours.`,
      `Meals are served at your seat on white linen with real cutlery — hot dim sum, noodle dishes, Chinese desserts and a proper tea service. The carriage is quiet, the staff attentive without being intrusive, and the panoramic window beside each seat frames a constantly shifting canvas of Chinese countryside: rice paddies, river valleys, ancient hill towns and slowly emerging urban skylines.`,
      `Compare this to flying: no airport security theatre, no baggage carousel, city centre to city centre — Shanghai Hongqiao station to Beijing South station, both fully metro-connected. Business class tickets run around CHF 90–120 per person. It is, without question, the right way to make this journey. Book weeks ahead — business class sells out fast on this route.`
    ]
  },
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
  yugarden: {
    title: 'Yu Garden & Old City',
    img: 'shanghai-yugarden.png',
    city: 'Shanghai',
    gallery: ['shanghai-yugarden-2.png', 'shanghai-yugarden-3.png', 'shanghai-yugarden-4.png'],
    desc: [
      `Built in 1559 during the Ming dynasty, Yu Garden is a 2-hectare masterpiece of classical Chinese garden design in the heart of old Shanghai. Rockery mountains, lotus ponds, zigzag bridges, dragon-topped walls and 30 individual pavilions are packed into a space that somehow feels infinite. The famous Huxinting Tea House — a wooden pavilion perched on a lotus pond — is one of the most photographed spots in China.`,
      `Arrive at opening time (8:30 AM) to beat the crowds and experience the garden in rare quiet. Morning mist over the koi ponds, the sound of water and birdsong, the smell of incense from the nearby temple — it is completely transportive. An hour here feels like a journey back four centuries.`,
      `Just outside the garden walls, the Old City Bazaar stretches through narrow lanes selling everything from jade jewellery to hand-painted silk fans. Stop at a street stall for fresh-fried sesame pastries and a pot of tea before heading in.`
    ]
  },
  tower: {
    title: 'Shanghai Tower — Floor 118',
    img: 'shanghai-tower.png',
    city: 'Shanghai',
    gallery: ['shanghai-tower-2.png', 'shanghai-tower-3.png', 'shanghai-tower-4.png'],
    desc: [
      `At 632 metres, Shanghai Tower is the second tallest building in the world — and its observation deck on floor 118 delivers one of the most breathtaking urban views on earth. On a clear day you see the entire city spread to every horizon, the Huangpu River snaking silver through it, and the East China Sea glinting in the distance. On a cloudy day, you are literally above the clouds.`,
      `The journey up takes 55 seconds in the world's fastest elevator — 20.5 metres per second, with a pressure-equalising cabin to keep your ears comfortable. The deck itself wraps around the full circumference with floor-to-ceiling glass. There is a glass floor section that looks 580 metres straight down to the street. Not for the faint-hearted.`,
      `Come at dusk to catch the city in golden hour light and then watch it transition to the full neon spectacle of Shanghai at night — both from the same spot, in one visit. Book tickets online in advance; queues at the door can be 90 minutes.`
    ]
  },
  frenchconcession: {
    title: 'The French Concession',
    img: 'shanghai-frenchconcession.png',
    city: 'Shanghai',
    gallery: ['shanghai-frenchconcession-2.png', 'shanghai-frenchconcession-3.png', 'shanghai-frenchconcession-4.png'],
    desc: [
      `The Former French Concession is Shanghai's most liveable, most beautiful neighbourhood — and the one most visitors fall hardest for. Wulumuqi Road, Anfu Road and Fuxing Road are lined with towering plane trees that create a canopy of dappled light over Art Deco villas, independent bookshops, specialist coffee roasters and boutiques run by local designers. It looks like a dream version of Paris crossed with 1930s Shanghai.`,
      `Xintiandi — a cluster of restored Shikumen stone lane houses — is the neighbourhood's most famous set piece: narrow alleys now lined with restaurants, wine bars and concept stores, the stone facades perfectly preserved. Just south, Tianzifang is the more bohemian counterpart: tighter alleyways, art studios, handmade jewellery, vintage finds and excellent coffee at tiny hidden cafes.`,
      `The French Concession rewards slow walking. No itinerary — just turn down whichever lane looks interesting. You'll find a perfect croissant next to a dumpling shop next to a gallery showing contemporary Chinese photography. Block out a full afternoon and just wander.`
    ]
  },
  zhujiajiao: {
    title: 'Zhujiajiao Water Town',
    img: 'shanghai-zhujiajiao.png',
    city: 'Shanghai',
    gallery: ['shanghai-zhujiajiao-2.png', 'shanghai-zhujiajiao-3.png', 'shanghai-zhujiajiao-4.png'],
    desc: [
      `Just 30 km from central Shanghai, Zhujiajiao is a perfectly preserved Ming and Qing dynasty water town — 1,700 years old, threaded by canals, connected by 36 ancient stone bridges. Gondolas glide past whitewashed walls and terracotta rooftops, willows trail in the green water, and the pace of life drops to something closer to a Sunday afternoon than a city trip. It is exactly the China you imagined before you arrived.`,
      `The five-arch Fangsheng Bridge — 72 metres long, built in 1571 — is the town's centrepiece and the most beautiful bridge in the Shanghai region. Walk it at dawn before the tour groups arrive and you'll have it almost to yourself, the mist still sitting low on the canal and the sound of the water the only noise.`,
      `The side streets reward exploration: tofu sellers, hand-pressed rice cakes, a maker of traditional oil-paper umbrellas whose family has been doing the same thing for six generations, a small temple that smells of sandalwood. Allow a full day. Take the bus or metro (Line 17 to Zhujiajiao) rather than a tour group — arriving independently means you can stay until the crowds leave and the town feels like itself again.`
    ]
  },
  rivercruise: {
    title: 'Huangpu River Night Cruise',
    img: 'shanghai-rivercruise.png',
    city: 'Shanghai',
    gallery: ['shanghai-rivercruise-2.png', 'shanghai-rivercruise-3.png', 'shanghai-rivercruise-4.png'],
    desc: [
      `The Bund looks spectacular from the promenade — but from the water, on a slow boat drifting down the Huangpu at night, it is something else entirely. The colonial facades glow warm gold on your left; on your right, the Pudong skyline — Pearl Tower, Jin Mao, the Shanghai Tower, the SWFC — pulses with coloured light shows that reflect in the black water below. This is the best single view in Shanghai and possibly in all of China.`,
      `One-hour cruises depart from the Bund ferry terminal every 30 minutes from dusk. Get a spot on the open top deck and bring a jacket — it's colder on the water than it looks. The boat makes a slow sweep past the full length of the Bund, out past the shipyards where the river widens, and back again. Every angle produces a different photograph.`,
      `For something more memorable, book a private dinner cruise: a two-hour round trip with a Shanghainese meal served on the water. The combination of excellent food, uninterrupted skyline views and the gentle rock of the boat makes for one of the great evenings of the trip.`
    ]
  },
  disneyland: {
    title: 'Shanghai Disneyland',
    img: 'shanghai-disneyland.png',
    city: 'Shanghai',
    gallery: ['shanghai-disneyland-2.png', 'shanghai-disneyland-3.png', 'shanghai-disneyland-4.png'],
    desc: [
      `Shanghai Disneyland is not just another Disney park — it is the newest, the most technologically advanced, and in many ways the most spectacular Disney park on earth. Opened in 2016 and already expanded twice, it features rides and lands that exist nowhere else in the world. The TRON Lightcycle Power Run is the fastest coaster in any Disney park. The Enchanted Storybook Castle is the tallest and largest Disney castle ever built.`,
      `What makes Shanghai Disneyland special beyond the rides is the sheer ambition of the theming. Treasure Cove is an entire Pirate-themed land built around a genuine full-size galleon floating in a lagoon — the detail is extraordinary. Zootopia Land, opened in 2023, is the world's only Zootopia-themed area and uses projection mapping and animatronics at a level that has to be seen to be believed.`,
      `October is perfect timing: post-Golden Week means the crowds have thinned significantly but the park is still running full autumn programming with special night shows and Halloween theming. Book FastPass for TRON and Pirates before you arrive. The fireworks spectacular over the castle at 9 PM is the best in any Disney park — save your spot on the castle steps 20 minutes early.`
    ]
  },

  // ── BEIJING ACTIVITIES ───────────────────────────────────────────────────
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
  },

  // ── CHENGDU ACTIVITIES ───────────────────────────────────────────────────
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

  // ── FOOD: SHANGHAI ───────────────────────────────────────────────────────
  dimsum: {
    title: 'Nanxiang Xiaolongbao',
    img: 'food-dimsum.png',
    city: 'Shanghai',
    gallery: ['food-dimsum-2.png', 'food-dimsum-3.png', 'food-dimsum-4.png'],
    desc: [
      `Nanxiang Xiaolongbao has been making soup dumplings in the same spot inside Yu Garden since 1900. These are the original — the benchmark against which every other xiaolongbao on earth is judged. Each dumpling is hand-pleated with exactly 18 folds, filled with a nugget of minced pork and a spoonful of rich, gelatinised pork stock that melts into scalding soup as it steams. One bite, properly executed, is one of the great food experiences of the trip.`,
      `The technique matters. Place the dumpling on a soup spoon, bite a tiny hole in the side, let the soup cool for five seconds, drink the broth first, then eat the rest with a dab of aged Zhenjiang vinegar and a sliver of fresh ginger. Do not attempt to eat it whole — the soup is boiling and you will regret it immediately.`,
      `The restaurant has three floors; the ground floor counter does takeaway baskets to eat standing by the canal — the most atmospheric and cheapest way to eat them. The upper floors have table service and a broader menu of Shanghainese dim sum: steamed pork buns, turnip pastries, glutinous rice dumplings. Queue early or wait — it is always worth it.`
    ]
  },
  shanghainese: {
    title: 'Shanghainese Classics',
    img: 'food-shanghainese.png',
    city: 'Shanghai',
    gallery: ['food-shanghainese-2.png', 'food-shanghainese-3.png', 'food-shanghainese-4.png'],
    desc: [
      `Shanghainese cuisine is the sweetest, richest and most wine-forward of all Chinese regional traditions — a direct result of the city's history of trade, excess and cosmopolitan influence. The signature dish is hong shao rou: pork belly braised for hours in Shaoxing rice wine, dark soy, sugar and star anise until the fat turns to yielding silk and the sauce coats a spoon. It is extraordinary.`,
      `October is hairy crab season — possibly the single best reason to visit Shanghai in autumn. These small, intensely flavoured freshwater crabs from Yangcheng Lake are eaten steamed, tied with reeds, accompanied by small cups of warm Shaoxing wine and thin ginger dipping sauce. Eating them is slow, messy and completely absorbing. The roe in the females and the creamy fat in the males are unlike anything else in Chinese food.`,
      `For the full experience, head to Jesse Restaurant (吉士酒家) in the French Concession — a no-frills Shanghainese home-cooking institution that has been feeding the city's food obsessives for decades. Order the hong shao rou, the drunken chicken, the stir-fried water spinach and whatever the crab preparation of the day is. No English menu, but the staff are patient and the food makes up for everything.`
    ]
  },
  noodles: {
    title: 'Shanghai Noodles & Street Food',
    img: 'food-noodles.png',
    city: 'Shanghai',
    gallery: ['food-noodles-2.png', 'food-noodles-3.png', 'food-noodles-4.png'],
    desc: [
      `Shanghai's street food and noodle culture is one of the city's great pleasures, and the most accessible way into it is yangchun mian — scallion oil noodles. Thin wheat noodles tossed in darkly caramelised scallion oil with soy sauce and sugar: four ingredients, decades of technique, total perfection. Da Hu Chun on Sichuan Road has been making them since 1932 and the recipe has not changed.`,
      `Shengjian bao — pan-fried pork buns — are Shanghai's other signature street food. The bottoms are fried until golden and crackling in a giant iron skillet; the tops are soft and pillowy, sprinkled with sesame seeds and chopped spring onion. Inside: soup and pork, like a xiaolongbao but bigger and more sizzling. Yang's Fry Dumplings on Wujiang Road is the definitive spot — always a queue, always worth it.`,
      `For a full street-food crawl, start on Wujiang Road (scallion oil noodles, shengjian bao, egg tarts), then move to the Old City Bazaar for sesame pastries and red bean soup, then finish at any 7-Eleven for a scallion pork floss rice ball — not glamorous, genuinely delicious, eaten by every Shanghai local for breakfast. Total cost for all three stops: under CHF 5.`
    ]
  },

  // ── FOOD: BEIJING ───────────────────────────────────────────────────────
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
  manhengji: {
    title: '满恒记 — Instant Boiled Mutton',
    img: 'food-manhengji.png',
    city: 'Beijing',
    gallery: ['food-manhengji-2.png', 'food-manhengji-3.png', 'food-manhengji-4.png'],
    desc: [
      `满恒记 (Mǎn Héng Jì) is one of Beijing's most beloved old-school restaurants, famous for shuanyangrou — instant boiled mutton, Beijing's winter hot pot tradition. A polished copper chafing dish arrives at the table glowing with charcoal, filled with clear broth. Paper-thin slices of Inner Mongolian lamb — almost translucent — are swirled through the broth for precisely ten seconds, then dipped in a thick sesame paste sauce with fermented tofu, chive flower paste and a drop of soy.`,
      `The sesame dipping sauce is the secret weapon. 满恒记's version is legendary in Beijing: intensely nutty, slightly sweet, perfectly balanced against the clean mineral flavour of the lamb. The restaurant makes it fresh every morning and it bears no resemblance to anything from a jar. You will want to eat it with a spoon.`,
      `The restaurant has been operating in the same neighbourhood for decades and the crowd tells the story: local Beijing families, groups of friends who have been coming here since university, older couples who know exactly what they want. Order the lamb first, then add tofu, cabbage and glass noodles as the broth enriches. Finish with a bowl of the now deeply flavoured broth as soup. This is Beijing eating at its most honest.`
    ]
  },

  // ── FOOD: CHENGDU ───────────────────────────────────────────────────────
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
  mapotofu: {
    title: 'Mapo Tofu at Chen\'s',
    img: 'food-mapotofu.png',
    city: 'Chengdu',
    gallery: ['food-mapotofu-2.png', 'food-mapotofu-3.png', 'food-mapotofu-4.png'],
    desc: [
      `Chen Mapo Dofu (陈麻婆豆腐) has been making mapo tofu on the same street in Chengdu since 1862. The dish was invented here — by the pockmarked-faced (mapo) wife of a tofu seller named Chen — and 160 years later her descendants are still running the restaurant. Eating it here, in the city of its birth, at the place that invented it, is one of those rare food experiences where the history and the flavour arrive simultaneously.`,
      `The dish itself is a study in extremes: silken white tofu, barely holding together, swimming in a sauce of scorching chili oil, fermented black beans, Sichuan peppercorns, minced beef and a glossy layer of bright red oil. The mala sensation — simultaneously numbing and burning — builds slowly over the meal and peaks about ten minutes after you stop eating. It is deeply addictive.`,
      `Order the original recipe (传统麻婆豆腐) rather than any modified version. Add a bowl of plain steamed rice — essential for tempering the heat — and a cold Tsingtao. The restaurant is always busy at lunch; arrive at 11:30 AM or be prepared to queue. The mapo tofu you've had anywhere else, however good, will never be quite the same after this.`
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

// Top nav (Hotels / Activities / Food)
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

// Activity city tabs
document.querySelectorAll('[data-city]').forEach(tab => {
  tab.addEventListener('click', () => {
    const parent = tab.closest('.top-section');
    parent.querySelectorAll('[data-city]').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.city-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    parent.querySelector('#' + tab.dataset.city).classList.add('active');
  });
});

// Food city tabs
document.querySelectorAll('[data-food-city]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-food-city]').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.food-city').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.foodCity).classList.add('active');
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
