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
    { icon: '🏮', text: '南市/老城厢 — 豫园、城隍庙、上海老街 · 上午 · 草稿', id: 'yugarden', note: 'Cami 的推荐①——老城厢（南市）。约09:30开始：豫园、城隍庙（¥10，08:30–16:30）和周边的上海老街。从铂尔曼出发：打车约15分钟，或地铁1号线 上海火车站 → 人民广场再步行15分钟 / 10号线到豫园站。周末人多——尽量早到。' },
    { icon: '🥟', text: '午餐 · 豫园商城里的南翔小笼 · 草稿', id: 'dimsum', note: '南翔馒头店，豫园路85号（商城内）——经典之选（要排队；楼上包间清静些）。排队太夸张的话：莱莱小笼在北边打车10分钟（已移到10月19日法租界日作为午餐选项）。' },
    { icon: '🌊', text: '外滩 · 下午 · 草稿', id: 'bund', note: '从豫园往东北步行15分钟到外滩步行道——一边是万国建筑群，对岸是陆家嘴高楼。傍晚光线最好；约19:00起对岸亮灯。' },
    { icon: '🏙️', text: '上海中心 — 118层观光厅 · 日落 · 草稿', id: 'tower', note: '上海之巅观光厅在118层（546米），08:30–22:00（21:30停止入场），成人¥180 / 儿童¥90（2026年）。从外滩过江：地铁2号线 南京东路 → 陆家嘴（1站）或金陵东路轮渡；入口在银城中路501号B1。卡日落时段，一张票看白天和夜景。备选：东方明珠二球观光¥199。' },
    { icon: '🏢', text: '谷歌上海办公室 — 看情况 · 草稿', note: '可选。谷歌上海办公室在上海环球金融中心（世纪大道100号），上海中心旁边那座“开瓶器”——步行5分钟，可安排在观光厅前后。需要 Florian 找上海同事安排进楼；非谷歌员工需有人接待。' },
    { icon: '🚢', text: '黄浦江夜游 · 可选 · 草稿', id: 'rivercruise', note: '可选收尾：45–60分钟夜游，从十六铺码头（中山东二路479号）出发，外滩往南步行10分钟/紧挨豫园——所以可以排在上海中心之前，或代替它。船开到约21:30。' },
  ],
  '2026-10-19': [
    { icon: '🎨', text: '田子坊 · 上午 · 草稿', note: 'Cami 的推荐②——石库门弄堂改成的咖啡馆、手作小店和小画廊（泰康路210弄）。游客多但逛一两个小时挺有意思；11:00前去比较宽松。从铂尔曼出发：打车约20分钟，或地铁1号线 上海火车站 → 徐家汇，换9号线 → 打浦桥1号口，步行3分钟。和下面的原法租界几站放在一起——都在1–2公里内。' },
    { icon: '🏛️', text: '新天地 · 上午晚些 · 草稿', note: '修复过的石库门街区，在田子坊东北方向，打车10分钟/步行20分钟——同类建筑的精致版，适合喝杯咖啡；有兴趣的话旁边是中共一大纪念馆。' },
    { icon: '🥟', text: '午餐 · 莱莱小笼（米其林蟹粉）或 家全七福（米其林一星点心）· 草稿', id: 'lailai', note: '两个选项，从新天地打车都约10分钟：莱莱小笼（天津路504号，米其林必比登蟹粉小笼，人均约¥50–100，不接受预订，要排队）或家全七福（威海路500号2楼，粤式点心午市人均约¥300–450——12人需提前订位，要包间）。Florian 定。' },
    { icon: '🌳', text: '原法租界漫步 — 武康路 · 安福路 · 永康路 · 下午 · 草稿', id: 'frenchconcession', note: '梧桐树街道、武康大楼、话梅（安福路308号）和安福路/五原路的小店。从午餐处往西打车15分钟。轻松、平坦、适合带孩子闲逛；到处是冰淇淋和咖啡。' },
    { icon: '🚁', text: '徐汇滨江（西岸）— 美团无人机取餐 + 江边散步 · 下午晚些 · 草稿', note: '美团无人机航线（2026年9月10日开航）：麦当劳等约20个品牌从龙腾大道飞到西岸滑板公园/西岸梦中心旁的取餐柜。从武康路往南打车约15分钟。在美团App下单（需国内支付——Emma），选“无人机配送”+ 西岸滑板公园取餐点；天气好约10分钟送到，下雨/大风停飞，每单最多2.4公斤——给孩子们买点零食可以，不够当晚饭。滨江本身也值得一走：滑板公园、美术馆、草坪。回铂尔曼打车约30分钟，或11号线云锦路 → 徐家汇 → 1号线。' },
    { icon: '🍸', text: '晚上 · 酿青 Herbal Bar / INS · 可选 · 草稿', id: 'herbalbar', note: '大人可选：酿青 Herbal Bar（襄阳北路100号2楼，中药鸡尾酒，17:00开门）就在同一片区；复兴公园的 INS 新乐园是更热闹的选择。回铂尔曼都约10–15分钟车程。' },
  ],
  '2026-10-20': [
    { icon: '🏘️', text: '七宝古镇 · 上午 · 草稿', note: 'Cami 的推荐③——市区里的宋代小水乡，免门票，老街被河分成两段（北大街店铺，南大街小吃：汤团、海棠糕、臭豆腐）。半天足够。地铁1号线 上海火车站 → 徐家汇，换9号线 → 七宝站，再步行10分钟——全程约45–50分钟；打车约40分钟（17公里）。这是近而方便的水乡——朱家角（弹窗）更大更美，但在30公里外、要一整天；二选一。' },
    { icon: '🍜', text: '七宝午餐 — 老街小吃 · 草稿', note: '沿七宝老街南大街边走边吃：七宝汤团（甜/咸）、海棠糕、白切羊肉。微信支付到处可用。' },
    { icon: '🛍️', text: '回程可选 — 只二透明仓（虹桥天地）· 草稿', id: 'zzer', note: '二手奢侈品仓库，虹桥天地（绍虹路52号B1），在从七宝回来的9/10号线沿线——打车15分钟。想购物的人去；其他人直接回酒店。' },
    { icon: '💆', text: '下午 · 酒店附近足疗/水疗 · 草稿', id: 'footmassage', note: '最后一个完整日前的放松下午：铂尔曼附近的足疗（弹窗里有推荐）或24小时的曲水兰亭。通过大众点评/Emma 给大家订时段。' },
    { icon: '🍲', text: '晚餐 · 本帮菜经典 · 草稿', id: 'shanghainese', note: '最后一顿正式的集体晚餐：本帮菜——红烧肉、熏鱼、醉鸡、葱油拌面（弹窗里有餐厅说明）。尽量选在酒店/人民广场附近，让做水疗晚到的人也能赶上。' },
  ],
  '2026-10-21': [
    { icon: '🛫', text: 'CA929 · 浦东 → 成田 · 10:00–14:00（Hisa 一家离开）', id: 'flight-ca929', note: '要早起 — 10:00起飞，06:30–07:00离开酒店。成田 T1，不是羽田。' },
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
