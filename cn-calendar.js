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
    { icon: '⭐', text: '马旺子·川小馆 · 晚餐', id: 'mawangzi', note: '米其林一星，太古里 — 离太古里的茶馆几分钟。务必提前订位，通常要提前约2周。' },
  ],
  '2026-10-12': [
    { icon: '✈️', text: 'MU664 · 成都 → 北京大兴 · 12:40起飞', id: 'flight-mu664', note: '中国东方航空 · 成都天府 → 北京大兴' },
    { icon: '🍢', text: '很久以前羊肉串 · 晚餐', id: 'henjiu', note: '鼓楼店，鼓楼大街地铁A2口往北50米。营业至02:00，人均约¥93 — 赶路一天后轻松解决。' },
  ],
  '2026-10-13': [
    { icon: '🛍️', text: '购物日', id: 'shopping', note: '周二 — 逛这些的好日子。上午潘家园，午饭后秀水街或三里屯。' },
    { icon: '🏬', text: '三里屯太古里', id: 'sanlitun', note: '工作日中段去最好 — 周末下午15:00后人山人海。' },
    { icon: '🛒', text: '超市采购', id: 'supermarket', note: '盒马看热闹，物美/永辉买值得带回家的便宜零食。去之前先搞定支付宝。' },
  ],
  '2026-10-14': [
    { icon: '🛬', text: 'CA184 · 羽田 → 北京首都 · 08:30–11:20（Hisa 一家）', id: 'flight-ca184', note: 'Mario 和 Sonia。北京首都机场（PEK），不是大兴 — 在君悦酒店会合，不是机场。' },
    { icon: '🚶', text: '鼓楼 → 什刹海 → 南锣鼓巷 citywalk', id: 'citywalk', note: '平坦、免费、约2.5公里。傍晚最佳 — 湖边亮灯、旅游团散去。抵达日很轻松。' },
    { icon: '🏮', text: '胡同 — 老北京四合院巷子', id: 'hutong', note: 'citywalk 会穿过这些四合院。南锣鼓巷，地铁6/8号线。' },
  ],
  '2026-10-15': [{ icon: '🧱', text: '长城', id: 'wall' }],
  '2026-10-16': [
    { icon: '🏛️', text: '故宫', id: 'forbidden' },
    { icon: '🦆', text: '四季民福（故宫店）· 北京烤鸭', id: 'sijimingfu', note: '就在故宫东门口，楼上座位正对宫墙。出来时先取号 — 这家店整天都在排队。' },
    { icon: '🎤', text: '和 Emma 的朋友唱 KTV · 晚上', id: 'ktv', note: '周五，按周末价 — 提前在大众点评订团购。量贩式 KTV，不是商务KTV。王府井的魅KTV 从酒店步行可达。' },
  ],
  '2026-10-17': [
    { icon: '🚄', text: 'G17 · 北京南 → 上海站 · 13:00–17:35 · 一等座（Cami, Joe, Emma）· ✅ 已订（3张）', id: 'train', note: '智能复兴号，4小时35分。一等座 — 商务座已售罄。到达上海站（市中心），不是虹桥。订单 EB89322519，10月9日前可退。' },
    { icon: '🚄', text: 'G749 · 北京南 → 上海虹桥 · 13:19–19:04 · 商务座（Hisa, Olli, Mario, Sonia, Flo + 孩子们）· ✅ 已订', id: 'train', note: '智能复兴号，1+1 商务座舱，5小时45分。到达虹桥。6岁以下儿童可免费坐在大人腿上（每位大人限一名）— 若需单独座位则儿童票为5折。10月9日前可退。' },
  ],
  '2026-10-21': [
    { icon: '🛫', text: 'CA929 · 浦东 → 成田 · 10:00–14:00（Hisa 一家离开）', id: 'flight-ca929', note: '要早起 — 10:00起飞，06:30–07:00离开酒店。成田 T1，不是羽田。' },
  ],
  '2026-10-22': [{ icon: '🛫', text: '从上海飞回家' }],
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
