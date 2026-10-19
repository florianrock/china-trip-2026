// ── 行程日历 ──────────────────────────────────────────────────────────────
// 每天安排的唯一数据源。在此添加一项，日历会自动识别；没有任何条目的日子显示为"暂无安排"。
const TRIP = { start: '2026-10-08', end: '2026-10-22' };

// 城市区块 — 某一天的城市与酒店继承自覆盖它的区块。
const BLOCKS = [
  { from: '2026-10-08', to: '2026-10-12', city: '成都',  emoji: '🐼', hotel: '天府广场美居酒店', hotelId: 'hotel-mercure-chengdu' },
  { from: '2026-10-12', to: '2026-10-17', city: '北京',  emoji: '🏯', hotel: '北京东方君悦大酒店', hotelId: 'hotel-grand-hyatt-beijing' },
  { from: '2026-10-17', to: '2026-10-22', city: '上海', emoji: '🏙️', hotel: '静安铂尔曼酒店', hotelId: 'hotel-pullman-jingan' },
];

// 一日游 — 当天在另一座城市度过，但仍住在本区块的酒店，因此这里只覆盖城市标签，
// 刻意保留酒店那一行不变；这种搭配正说明这是当天往返的一天。
const DAYTRIPS = {
  '2026-10-10': { city: '重庆', emoji: '🚄' },
  '2026-10-11': { city: '重庆 → 成都', emoji: '🚄' },
};

// 所有真正安排好的事。空数组 => 这一天标记为空闲。
const PLANS = {
  '2026-10-08': [
    { icon: '🛬', text: '抵达上海' },
    { icon: '✈️', text: 'CA4592 · 浦东 → 天府 · 09:30–12:40（全员，含 Cami 和 Joe）', id: 'flight-ca4592', note: '中国国航 · 浦东机场 T2 → 成都天府机场 T2 · 全员同一航班' },
    { icon: '🌃', text: '双子塔灯光秀（可选）', id: 'lightshow', note: '约19:30起，在交子之环。地铁1号线 → 金融城，20分钟。可选 — 如果大家都累垮了就跳过。' },
    { icon: '🥡', text: '外卖送到房间', id: 'roomdelivery', note: '通过支付宝小程序用美团或饿了么。备好酒店的中文地址。' },
  ],
  '2026-10-09': [
    { icon: '🐼', text: '成都大熊猫基地', id: 'pandas', note: '大熊猫幼儿园 · 成华区熊猫大道1375号 · 距市中心约30分钟。尽早去 — 幼崽在10:00前最活跃。' },
    { icon: '🥩', text: '和牛火锅晚餐', id: 'wagyu', note: '锦城印象火锅（彩虹店）· 武侯区武侯祠大街19号 · 米其林入选 + 黑珍珠 · 营业至02:00，看完熊猫后从容吃晚饭。' },
  ],
  '2026-10-10': [
    { icon: '🚄', text: 'G8613 · 成都东 11:18 → 重庆北 12:37 · ✅ 已订（9张）', id: 'chongqing', note: '10月1日已订，9张票。复兴号1小时19分。整天：解放碑、李子坝、入夜后的洪崖洞 — 现在我们在重庆过夜（周日13:24返回）。入住洪崖洞旁的逸扉酒店（UrCove），已预订。' },
    { icon: '🏨', text: '重庆洪崖洞逸扉酒店（UrCove）· 过夜', id: 'hotel-urcove-chongqing', note: '已预订。就在洪崖洞旁，轻轨站在楼下，步行约10分钟到解放碑。携程9.6/10。' },
    { icon: '🍜', text: '阿福板凳面 街头小面 · 午餐', id: 'xiaomian', note: '坐在人行道的红色板凳上吃。去解放碑那家，不是帖子里的观音桥那家。' },
    { icon: '🍖', text: '丁老头烤肉 · 南山晚餐', id: 'nanshanbbq', note: '沿山坡层层而下的烧烤，俯瞰灯火天际线。日落18:30 — 17:30前就座。地铁6号线到上新街3号口。' },
  ],
  '2026-10-11': [
    { icon: '🚄', text: 'G3424 · 重庆北 13:24 → 成都东 14:51 · ✅ 已订（9张）', id: 'chongqing', note: '返程，10月1日已订，9张票。1小时27分。上午在重庆自由活动；回成都喝茶、吃马旺子晚餐。' },
    { icon: '🍵', text: '熹玥盒子 · 茶 + 甜点 @ 下浩里（上午）', id: 'xiyuehezi', note: '南岸下浩里老巷里一家精致、安静的茶与甜品店，下浩里老街128号（55号店）。紧邻龙门浩老街；从洪崖洞过东水门大桥步行约21分钟。正好填满13:24 G3424发车前的重庆上午空档。' },
    { icon: '🍵', text: '下午茶 — 放松', id: 'afternoontea', note: '想要本地味道就去人民公园的鹤鸣茶社，想要安静就去太古里旁的谧寻/元古。没什么可看的，这正是重点。' },
    { icon: '⭐', text: '马旺子·川小馆 · 晚餐 · 17:30', id: 'mawangzi', note: '米其林一星川菜，锦江/太古里（东糠市街1号，距地铁东门大桥站D2口500米）。人均¥119，4.8分 / 3.1万条点评，2026必吃榜。晚市17:00–20:30，所以17:30是早场——一开门就去，很火。可预订——致电028-64231923或在大众点评订位。有宝宝椅。' },
  ],
  '2026-10-12': [
    { icon: '✈️', text: 'MU6644 · 成都 → 北京大兴 · 12:40起飞', id: 'flight-mu664', note: '中国东方航空 · 成都双流(CTU) → 北京大兴 · ⚠️从双流起飞，不是降落的天府（相距约70公里）' },
    { icon: '🍢', text: '很久以前羊肉串 · 晚餐', id: 'henjiu', note: '鼓楼店，鼓楼大街地铁A2口往北50米。营业至02:00，人均约¥93 — 赶路一天后轻松解决。' },
  ],
  '2026-10-13': [
    { icon: '🛍️', text: '购物日', id: 'shopping', note: '周二 — 逛这些的好日子。上午潘家园，午饭后秀水街或三里屯。' },
    { icon: '🏬', text: '三里屯太古里', id: 'sanlitun', note: '工作日中段去最好 — 周末下午15:00后人山人海。' },
    { icon: '🛒', text: '超市采购', id: 'supermarket', note: '盒马看热闹，物美/永辉买值得带回家的便宜零食。去之前先搞定支付宝。' },
    { icon: '🍜', text: '方砖厂69号炸酱面（王府井食品商场店）· 老北京炸酱面 · 午饭 13:30', id: 'fangzhuanchang', note: '午饭13:30。米其林必比登老北京炸酱面——还有焖肚、烤鸭丝。东城区王府井大街186号食品商场3层。这是个市场——在门口会合。' },
    { icon: '🍲', text: '新京熙·北京涮肉（三里屯耀莱店）· 景泰蓝铜锅涮肉 · 晚餐 18:00', id: 'xinjingxi', note: '晚餐18:00（Emma 选的）。高档老北京景泰蓝铜锅涮肉——大众点评三里屯/工体火锅销量榜第1名，口味4.8/环境4.8，1.29万+评价，人均约¥230。朝阳区幸福二村二巷耀莱中心C座（挨着工体）——距君悦约15分钟车程。有包间+宝宝椅。' },
  ],
  '2026-10-14': [
    { icon: '🛬', text: 'CA184 · 羽田 → 北京首都 · 08:30–11:20（Hisa 一家）', id: 'flight-ca184', note: 'Mario 和 Sonia。北京首都机场（PEK），不是大兴 — 在君悦酒店会合，不是机场。' },
    { icon: '🚶', text: '鼓楼 → 什刹海 → 南锣鼓巷 citywalk', id: 'citywalk', note: '平坦、免费、约2.5公里。傍晚最佳 — 湖边亮灯、旅游团散去。抵达日很轻松。' },
    { icon: '🏮', text: '胡同 — 老北京四合院巷子', id: 'hutong', note: 'citywalk 会穿过这些四合院。南锣鼓巷，地铁6/8号线。' },
  ],
  '2026-10-15': [
    { icon: '🚗', text: '出发去长城 · 06:30 · 君悦酒店门口上车', id: 'wall-departure', note: '包车（往返）早上6:30在君悦酒店门口出发——早点走避开堵车和人流（到长城约1.5小时）。大家提前准备好早餐：最好今晚先在美团上点好，6:30前拿了就走。' },
    { icon: '🧱', text: '长城', id: 'wall' },
    { icon: '🍢', text: '晚餐 · 很久以前羊肉串（王府井apm店）· 19:00', id: 'henjiuyiqian', note: '老北京风格烤串——4.9分（1272条），人均约¥91，东城区烧烤榜第1名。北京apm商场6层L607（王府井大街138号），离酒店步行约14分钟（960米），打车也很近。招牌呼伦贝尔羊肉串、烤面包片、肥牛卷（金针菇）。有包厢、有宝宝椅，营业到午夜。' },
  ],
  '2026-10-16': [
    { icon: '🏛️', text: '✅ 故宫 — 跟团 09:30', id: 'forbidden', note: '已订（Discover Beijing Tours）— 天安门 + 故宫，含门票。09:30 在老舍茶馆门口集合（找熊猫旗），提前10分钟到。务必带齐9人护照！打车：请带我去老舍茶馆。地铁：2号线前门站C口，向西300米。导游 Qing +86 13522069857。' },
    { icon: '🦆', text: '四季民福（西单华威约饭街店）· 北京烤鸭 · ✅ 已订 18:30', id: 'sijimingfu', note: '已订18:30 — 注意：是西单店，不是故宫店。西城区西单北大街130号华威大厦8层39号。从君悦酒店出发：地铁1号线 王府井站（东方广场地下）西行3站到西单站，门到门约20–25分钟，¥3 · 滴滴/出租车沿长安街约4公里，周五晚高峰15–25分钟，约¥20–30。告诉司机：西单北大街130号华威大厦。' },
    { icon: '🎤', text: '和 Emma 的朋友唱 KTV · 晚上', id: 'ktv', note: '周五，按周末价 — 提前在大众点评订团购。量贩式 KTV，不是商务KTV。王府井的魅KTV 从酒店步行可达。' },
  ],
  '2026-10-17': [
    { icon: '🚄', text: 'G17 · 北京南 → 上海站 · 13:00–17:35 · 商务座 · ✅ 已订', id: 'train', note: '全家都在G17商务座，1车（01车）——对号入座：Noah 05F（儿童）· Sonja 06A · Mario 06F · Hisa 07A · Olli 07F · Cami 08A · Joe 08F · Andre 09A · Florian 10A · Emma（楼梦斯）10F · + 小Koch Adam（免票坐腿上）。成人每张¥2337（儿童¥1870）。到达上海站（市中心），不是虹桥。' },
    { icon: '🥟', text: '点心晚餐 · 晚上 · 餐厅待定（占位）', note: '到达当晚的占位——17:35 到上海站，先去铂尔曼放行李，再在附近吃点心。餐厅还没定；候选：静安大悦城的誉八仙（粤式茶楼，步行约20分钟/打车5分钟）、人民广场的莱莱小笼（米其林蟹粉小笼，打车约10分钟）、家全七福（米其林一星，威海路500号，打车约15分钟，人均约¥300–450）。Florian 定了以后替换。' },
  ],
  '2026-10-18': [
    { icon: '🎨', text: '田子坊 · 上午（今天，较干的一天）', note: 'Cami 的推荐②——石库门弄堂里的咖啡馆、手作小店和画廊（泰康路210弄）。改到周六：今天是较干的一天（中午前0%，约15:00起才有小雨概率）。田子坊、新天地和今晚的INS都在1–2公里内，一天就在派对地附近结束。1号线 上海火车站 → 徐家汇，换9号线 → 打浦桥1号口（步行3分钟），或打车约20分钟。' },
    { icon: '🏛️', text: '新天地 · 上午晚些（适合躲雨）', note: '修复过的石库门街区，往东北打车10分钟/步行20分钟——商场和有顶的廊道，适合下雨时逛一小时、喝杯咖啡。' },
    { icon: '🌳', text: '原法租界漫步 武康路 · 安福路 · 永康路 · 下午（看天气）', id: 'frenchconcession', note: '梧桐树街道、武康大楼、话梅（安福路308号）和小店。如果下大雨：改成话梅+安福路的咖啡馆，或去只二仓库（室内，虹桥，25分钟）。' },
    { icon: '🍽️', text: '晚餐 · HOMES 上海本帮菜（襄阳公园店）· 约18:30（Joe 选的）', note: '大众点评核实：2026必吃榜，24,657条评价，口味/环境/服务 4.7，人均约¥168，收录21年——地道本帮菜：红烧肉、本帮熏鲳鱼、鳝丝、油爆虾。徐汇区新乐路47号，襄阳公园旁；晚市 17:00–21:00（午市 11:00–14:00）。有包厢、大桌、宝宝椅。怎么去：从武康路/安福路打车10分钟；从铂尔曼打车约20分钟，或1号线 → 陕西南路（3站）10号口，步行490米。饭后去INS打车10分钟（2公里）。在大众点评订座——Emma。' },
    { icon: '🍸', text: 'INS 前喝一杯 · 酿青 Herbal Bar · 可选', id: 'herbalbar', note: '酿青 Herbal Bar，襄阳北路100号2楼（中药鸡尾酒，17:00起），离丰盛里10分钟、离INS 10分钟——去夜店前先文明地喝一轮。' },
    { icon: '🎉', text: 'INS 新乐园（复兴公园）· 周六晚 · 派对', id: 'bars', note: '我们的派对夜。INS新乐园，黄浦区雁荡路109号复兴公园内，从丰盛里打车10分钟——6层、2万平米的夜店综合体（Freshman、HUSH、RADi 等），营业 20:00–04:00。全馆通票周六 ¥288；带护照原件或清晰照片。回铂尔曼：滴滴15–20分钟，整晚有车。' },
  ],
  '2026-10-19': [
    { icon: '☕', text: '慢早晨 · 酒店早餐到10:30，然后自由活动（苏州河散步、天安千树，或下面的无人机）', note: 'Florian 把今天的重点都挪到了晚上，所以上午随意。从铂尔曼出发的轻松选择：苏州河步道（步行10分钟）、天安千树露台（11分钟）、静安大悦城（20分钟）。午饭就近解决——往南去的话 粤来记/日月光，留在北边就天安千树。' },
    { icon: '🚁', text: '西岸无人机取餐 + 滨江 · 上午晚些/午饭 · 仅限不下雨', note: '美团无人机航线（麦当劳等约20个品牌 → 西岸滑板公园旁取餐柜，龙腾大道）下雨或大风停飞——周日预报断续小雨，先在App里看能不能下单。从豫园打车约20分钟（6公里）往西南；美团App下单（Emma），无人机配送 + 西岸滑板公园取餐点，每单最多2.4公斤。然后回东北去外滩看灯：打车约25分钟，或11号线云锦路 → 徐家汇 → 1号线人民广场（约40分钟）。14:30前搞定，15:30能到豫园；从西岸到豫园打车约20分钟。' },
    { icon: '🏮', text: '豫园 · 16:30 → 城隍庙 · 九曲桥 · 老街 看黄昏', id: 'yugarden', note: '16:30 豫园集合（Florian 定的时间）。提醒：园林本身是白天开放（约16:00停止入园，约16:30关门），所以16:30多半是逛周边而不是进园——有人想进园子的话约15:45到（¥40，周一闭园）。周围的商城不关门：城隍庙（¥10，到约16:30）、九曲桥、湖心亭茶楼和老街一直开着，10月约17:30起亮灯——这才是要拍的画面。从铂尔曼出发：打车约15分钟，或1号线 → 人民广场再步行15分钟 / 10号线到豫园。' },
    { icon: '🥟', text: '早点吃晚饭 · 约17:30 商城里的南翔小笼，或去外滩路上的莱莱小笼（天津路504号）', id: 'lailai', note: '两个小笼选择：南翔馒头店（豫园路85号，商城内——要排队，楼上清静些，人均约¥60–100），17:30人就在那；或者莱莱小笼（米其林必比登蟹粉小笼，人均约¥50–100，不接受预订），往北走离外滩步行10分钟。18:15前吃完，好赶上江边亮灯。' },
    { icon: '🌊', text: '外滩夜景 · 18:30–19:30', id: 'bund', note: 'Florian 的规矩：外滩要晚上看。从豫园往北步行15分钟（从莱莱10分钟）。18:30前到步行道；对岸陆家嘴19:00亮灯。由南往北走，上海中心就在正前方——一小时后你们就能上去。' },
    { icon: '🏙️', text: '上海中心 118层 上海之巅 · 约20:30 · 今晚可选', id: 'tower', note: '08:30–22:00开放，21:30停止入场，成人¥180 / 儿童¥90。从外滩：2号线 南京东路 → 陆家嘴（1站）或金陵东路轮渡，再步行10分钟到银城中路501号B1；门到门约25分钟，19:45离开外滩约20:30到顶，能看一小时夜景。今晚预报断续小雨20–25%——观光厅在室内，只怕雾霾。今晚上了的话，周一的观光厅时段就变成谷歌参观前后的自由时间。' },
    { icon: '🚢', text: '黄浦江游船 · 可选，替代上观光厅 · 从浦西十六铺码头', id: 'rivercruise', note: '可选：45–60分钟游船；在十六铺（浦西）或这边的东方明珠码头上船。下小雨就跳过——下面的水疗是雨天方案。' },
  ],
  '2026-10-20': [
    { icon: '🏢', text: '谷歌上海办公室 · 环球金融中心 · 周一上午晚些', note: '周一是工作日，办公室才真的开门。谷歌上海办公室在上海环球金融中心（世纪大道100号，“开瓶器”）——Florian 找上海同事接待；非谷歌员工需有人带。从铂尔曼出发：滴滴约25分钟（约¥35）或1号线 上海火车站 → 人民广场，换2号线 → 陆家嘴（约25分钟）。今天所有点都在陆家嘴步行5分钟内，是个不怕下雨的日子。' },
    { icon: '🥟', text: '午餐 · 醉辉皇 上海中心店（上海中心3层）点心 · 备选 利苑 国金中心F3', note: '就在你们要上的楼里吃粤式点心：醉辉皇上海中心店，银城中路501号上海中心大厦L3，午市手工虾饺/肠粉/叉烧包，烧腊，大桌（午市人均约¥150–250；套餐更高）。升级版：利苑，国金中心商场F3（世纪大道8号），港式经典，人均¥300+，要订位。快捷便宜：正斗粥面专家，国金中心F3。' },
    { icon: '🏙️', text: '上海中心 — 118层观光厅 上海之巅 · 午饭后（周一）— 仅限周日晚没上过', id: 'tower', note: '118层（546米），08:30–22:00（21:30停止入场），成人¥180 / 儿童¥90（2026年）。入口银城中路501号B1。周一是预报里最湿的一天（阵雨，68%）——可能有雾霾；午饭后最亮的时段上去，反正观光厅在室内。要是完全没能见度，东方明珠也一样；票留着，看云也行。备选：东方明珠¥199。' },
    { icon: '💆', text: '晚上 · 曲水兰亭 24小时水疗（周一=最湿的一天）— 在里面吃晚饭', id: 'spa', note: '雨天方案，放在最可能下雨的那天：曲水兰亭，24小时温泉/水疗综合体——上海店在虹梅路3337号（闵行虹桥）。门票约¥368起/人，含泡汤、休息区、无限水果饮料；里面有餐饮（自助/单点），所以这就是晚饭。家庭区可带孩子；带泳衣。在上海最西边：从陆家嘴滴滴约45分钟，从铂尔曼约30分钟——从上海中心直接过去，什么时候回都行（24小时）。不去的话：酒店附近 汕苑（步行3分钟）或天安千树吃晚饭。' },
    { icon: '🍲', text: '备选晚餐（不去水疗的话）· 吉士酒家 — 本帮菜经典 · 天平路41号', id: 'shanghainese', note: '法租界里的经典本帮菜馆（徐汇区天平路41号）：红烧肉、葱油鸡、熏鱼、醉蟹；店很小很有名，要订位——或者附近的新吉士分店。人均约¥200。从武康路打车10分钟，回铂尔曼约25分钟。' },
  ],
  '2026-10-21': [
    { icon: '🛫', text: 'CA929 · 浦东 → 成田 · 10:00–14:00（Hisa 一家离开）', id: 'flight-ca929', note: '要早起 — 10:00起飞，06:30–07:00离开酒店。成田 T1，不是羽田。' },
    { icon: '🏘️', text: '七宝古镇 · 留下的人可选半天', note: 'Cami 的推荐③，市区里最方便的水乡（免费；1号线 上海火车站 → 徐家汇，换9号线 → 七宝，再步行10分钟，约50分钟；打车约40分钟）。预报：转凉（15–22°C），约50%小雨——穿件外套就行。老街小吃当午饭：七宝汤团、海棠糕、白切羊肉。如果大家更想慢悠悠过最后一天，就跳过。' },
    { icon: '🛍️', text: '可选 · 只二透明仓（虹桥天地）· 回程顺路', id: 'zzer', note: '二手奢侈品仓库，虹桥天地（绍虹路52号B1），从七宝打车15分钟。想购物的人去。' },
    { icon: '🍜', text: '午餐 · 七宝老街小吃 — 或留在酒店附近的人去金融街购物中心 松鹤楼面馆（步行9分钟）', note: '分两路：七宝组在南大街边走边吃；酒店组去金融街购物中心（恒丰路，步行9分钟）吃松鹤楼面馆的苏式面或小南国。' },
    { icon: '🍽️', text: '告别晚餐 · 汕苑 静安店 · 离铂尔曼3分钟 · 约19:00', note: '最后一顿集体晚餐，走路就到，谁都不用动脑：汕苑（嘉里企业中心），潮汕海鲜和卤鹅，圆桌，人均约¥230–300。按 Hisa 一家走后的人数订位。备选：天安千树（步行11分钟），想分头吃的话；饭后收拾行李——明天磁悬浮+飞机。' },
  ],
  '2026-10-22': [
    { icon: '🚄', text: '坐磁悬浮去机场（浦东出发的话）· 龙阳路 → 浦东机场', id: 'maglev', note: '上海磁悬浮——全球唯一商业运营的磁悬浮列车。坐地铁2号线（或打车）到龙阳路，换乘磁悬浮：30公里只要约7.5分钟，时速最高300公里，每15–20分钟一班，单程约¥50（出示当天登机牌¥40）。只到浦东机场（PVG），虹桥出发用不上。' },
    { icon: '🛫', text: '从上海飞回家', id: 'fly-home' },
  ],
};

// 用本地时间各部分格式化。toISOString() 会先转成 UTC，在任何早于 UTC 的时区都会把本地午夜回退一天，导致全部错位。
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parse = s => new Date(s + 'T00:00:00');

function blockFor(dayIso) {
  // 窗口包含该日的最后一个区块；出发当天归入下一座城市
  let found = null;
  for (const b of BLOCKS) if (dayIso >= b.from && dayIso < b.to) found = b;
  if (!found && dayIso === TRIP.end) found = BLOCKS[BLOCKS.length - 1];
  return found;
}

function build() {
  const grid = document.getElementById('cal-grid');
  const start = parse(TRIP.start), end = parse(TRIP.end);

  // 补齐到第一天当天或之前的周一
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
        <span class="cal-dow">${d.toLocaleDateString('zh-CN', { weekday: 'short' })}</span>
      </div>
      ${blk ? `<div class="cal-city">${trip ? `${trip.emoji} ${trip.city} <span class="cal-daytrip">当天往返</span>` : `${blk.emoji} ${blk.city}`}</div>
               ${blk.hotelId && typeof ACTIVITIES !== 'undefined' && ACTIVITIES[blk.hotelId]
                 ? `<button class="cal-hotel cal-hotel--link" data-open="${blk.hotelId}">🏨 ${blk.hotel} <span class="cal-more">›</span></button>`
                 : `<div class="cal-hotel">🏨 ${blk.hotel}</div>`}` : ''}
      <div class="cal-items">
        ${items.length
          ? items.map(i => i.id && typeof ACTIVITIES !== 'undefined' && ACTIVITIES[i.id]
              ? `<button class="cal-item cal-item--link" data-open="${i.id}" ${i.note ? `title="${i.note}"` : ''}>${i.icon} ${i.text} <span class="cal-more">›</span></button>`
              : `<div class="cal-item" ${i.note ? `title="${i.note}"` : ''}>${i.icon} ${i.text}</div>`).join('')
          : '<div class="cal-free">暂无安排</div>'}
      </div>`;
    grid.appendChild(cell);
  }

  document.getElementById('cal-summary').textContent =
    `已规划 ${planned} 天 · 还有 ${free} 天空闲`;
}

build();


// ── 详情弹窗 ───────────────────────────────────────────────────────────────
// 主页弹窗的只读版本：内容相同，但没有投票按钮
// （日历页刻意不加载登录 / 投票那套）。
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
    ${a.addr ? `<p class="modal-addr">📍 ${a.addr}${a.maps ? ` · <a href="${a.maps}" target="_blank" rel="noopener" class="maps-link">地图 ↗</a>` : ''}</p>` : ''}
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
