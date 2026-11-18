/* Домилия Про — стартовый справочник работ и материалов (ориентир по Екатеринбургу; замените своими ценами в «Справочнике»).
   geo: floor — площадь пола, wall — площадь стен за вычетом проёмов, ceil — потолок, perim — периметр, '' — вручную. */
window.DSEED = {
  works: [
    ['Демонтаж', 'Демонтаж напольного покрытия', 'м²', 250, 140, 'floor'],
    ['Демонтаж', 'Демонтаж плитки со стен', 'м²', 380, 210, ''],
    ['Демонтаж', 'Демонтаж обоев и шпаклёвки', 'м²', 140, 80, 'wall'],
    ['Демонтаж', 'Демонтаж перегородок (кирпич)', 'м²', 900, 500, ''],
    ['Демонтаж', 'Демонтаж сантехники', 'шт', 900, 500, ''],
    ['Демонтаж', 'Вынос и вывоз мусора', 'меш', 120, 70, ''],
    ['Стены', 'Грунтовка стен', 'м²', 70, 40, 'wall'],
    ['Стены', 'Штукатурка стен по маякам', 'м²', 750, 420, 'wall'],
    ['Стены', 'Шпаклёвка стен под покраску (2 слоя)', 'м²', 550, 300, 'wall'],
    ['Стены', 'Шпаклёвка стен под обои', 'м²', 380, 210, 'wall'],
    ['Стены', 'Шлифовка стен', 'м²', 120, 70, 'wall'],
    ['Стены', 'Поклейка обоев', 'м²', 380, 210, 'wall'],
    ['Стены', 'Покраска стен (2 слоя)', 'м²', 380, 210, 'wall'],
    ['Стены', 'Монтаж перегородки из ГКЛ', 'м²', 1500, 820, ''],
    ['Стены', 'Устройство откосов', 'м.п.', 900, 500, ''],
    ['Пол', 'Стяжка пола до 50 мм', 'м²', 750, 420, 'floor'],
    ['Пол', 'Наливной пол', 'м²', 450, 250, 'floor'],
    ['Пол', 'Гидроизоляция пола', 'м²', 450, 250, 'floor'],
    ['Пол', 'Укладка ламината', 'м²', 550, 300, 'floor'],
    ['Пол', 'Укладка кварцвинила', 'м²', 750, 420, 'floor'],
    ['Пол', 'Монтаж плинтуса', 'м.п.', 350, 190, 'perim'],
    ['Пол', 'Тёплый пол (электрический)', 'м²', 1200, 650, ''],
    ['Потолок', 'Натяжной потолок (матовый)', 'м²', 650, 0, 'ceil'],
    ['Потолок', 'Шпаклёвка и покраска потолка', 'м²', 950, 520, 'ceil'],
    ['Потолок', 'Потолок из ГКЛ', 'м²', 1600, 880, ''],
    ['Потолок', 'Потолочный плинтус', 'м.п.', 400, 220, 'perim'],
    ['Плитка', 'Укладка плитки на пол', 'м²', 2000, 1100, 'floor'],
    ['Плитка', 'Укладка плитки на стены', 'м²', 2200, 1200, 'wall'],
    ['Плитка', 'Укладка керамогранита 60×120', 'м²', 3000, 1650, ''],
    ['Плитка', 'Затирка швов', 'м²', 250, 140, ''],
    ['Плитка', 'Запил под 45°', 'м.п.', 1200, 650, ''],
    ['Плитка', 'Короб под инсталляцию с облицовкой', 'шт', 6500, 3500, ''],
    ['Электрика', 'Штробление и прокладка кабеля', 'м.п.', 280, 150, ''],
    ['Электрика', 'Установка подрозетника', 'шт', 350, 190, ''],
    ['Электрика', 'Установка розетки / выключателя', 'шт', 350, 190, ''],
    ['Электрика', 'Сборка электрощита', 'шт', 9000, 5000, ''],
    ['Электрика', 'Установка светильника', 'шт', 600, 330, ''],
    ['Сантехника', 'Разводка водоснабжения (точка)', 'шт', 3500, 1900, ''],
    ['Сантехника', 'Разводка канализации (точка)', 'шт', 2800, 1500, ''],
    ['Сантехника', 'Монтаж инсталляции и унитаза', 'шт', 6500, 3500, ''],
    ['Сантехника', 'Установка ванны', 'шт', 5500, 3000, ''],
    ['Сантехника', 'Установка смесителя', 'шт', 1800, 1000, ''],
    ['Сантехника', 'Установка раковины с тумбой', 'шт', 3500, 1900, ''],
    ['Сантехника', 'Монтаж полотенцесушителя', 'шт', 3500, 1900, ''],
    ['Сантехника', 'Душевой трап', 'шт', 5000, 2700, ''],
    ['Двери и окна', 'Установка межкомнатной двери', 'шт', 5500, 3000, ''],
    ['Двери и окна', 'Установка входной двери', 'шт', 6500, 3500, ''],
    ['Двери и окна', 'Монтаж подоконника', 'шт', 1800, 1000, ''],
    ['Прочее', 'Укрытие и защита помещения', 'м²', 60, 30, 'floor'],
    ['Прочее', 'Финальная уборка', 'м²', 150, 80, 'floor']
  ],
  mats: [
    ['Грунт глубокого проникновения 10 л', 'кан', 950, [['Грунтовка стен', 0.012]]],
    ['Штукатурка гипсовая 30 кг', 'меш', 520, [['Штукатурка стен по маякам', 0.33]]],
    ['Шпаклёвка финишная 25 кг', 'меш', 780, [['Шпаклёвка стен под покраску (2 слоя)', 0.06], ['Шпаклёвка стен под обои', 0.04], ['Шпаклёвка и покраска потолка', 0.06]]],
    ['Краска интерьерная 9 л', 'ведро', 4200, [['Покраска стен (2 слоя)', 0.03], ['Шпаклёвка и покраска потолка', 0.03]]],
    ['Пескобетон М300 40 кг', 'меш', 310, [['Стяжка пола до 50 мм', 1.6]]],
    ['Смесь наливная 20 кг', 'меш', 690, [['Наливной пол', 0.5]]],
    ['Подложка под ламинат', 'м²', 90, [['Укладка ламината', 1.05]]],
    ['Клей плиточный 25 кг', 'меш', 650, [['Укладка плитки на пол', 0.24], ['Укладка плитки на стены', 0.24], ['Укладка керамогранита 60×120', 0.3]]],
    ['Гидроизоляция обмазочная 15 кг', 'ведро', 3900, [['Гидроизоляция пола', 0.1]]],
    ['Кабель ВВГнг 3×2,5', 'м', 95, [['Штробление и прокладка кабеля', 1.1]]],
    ['Профиль и ГКЛ (комплект на м²)', 'м²', 650, [['Монтаж перегородки из ГКЛ', 2.1], ['Потолок из ГКЛ', 1.1]]],
    ['Плинтус напольный', 'м.п.', 260, [['Монтаж плинтуса', 1.05]]],
    ['Мешки для мусора', 'шт', 15, [['Вынос и вывоз мусора', 1]]]
  ],
  rooms: ['Комната', 'Спальня', 'Гостиная', 'Кухня', 'Детская', 'Коридор', 'Ванная', 'Санузел', 'Балкон', 'Кабинет', 'Гардеробная'],
  /* готовые наборы работ: в комнату одной кнопкой */
  packs: {
    'Жилая — под покраску': ['Укрытие и защита помещения', 'Грунтовка стен', 'Штукатурка стен по маякам', 'Шпаклёвка стен под покраску (2 слоя)', 'Шлифовка стен', 'Покраска стен (2 слоя)', 'Стяжка пола до 50 мм', 'Укладка ламината', 'Монтаж плинтуса', 'Натяжной потолок (матовый)', 'Финальная уборка'],
    'Жилая — под обои': ['Укрытие и защита помещения', 'Грунтовка стен', 'Штукатурка стен по маякам', 'Шпаклёвка стен под обои', 'Поклейка обоев', 'Стяжка пола до 50 мм', 'Укладка ламината', 'Монтаж плинтуса', 'Натяжной потолок (матовый)', 'Финальная уборка'],
    'Косметика': ['Укрытие и защита помещения', 'Демонтаж обоев и шпаклёвки', 'Грунтовка стен', 'Шпаклёвка стен под обои', 'Поклейка обоев', 'Монтаж плинтуса', 'Натяжной потолок (матовый)', 'Финальная уборка'],
    'Ванная под ключ': ['Демонтаж сантехники', 'Гидроизоляция пола', 'Разводка водоснабжения (точка)', 'Разводка канализации (точка)', 'Укладка плитки на пол', 'Укладка плитки на стены', 'Затирка швов', 'Монтаж инсталляции и унитаза', 'Установка смесителя', 'Установка раковины с тумбой', 'Монтаж полотенцесушителя', 'Натяжной потолок (матовый)']
  },
  stages: [['Демонтаж и подготовка', 10], ['Черновые работы: электрика, сантехника, стяжка, штукатурка', 35], ['Плитка и шпаклёвка', 25], ['Чистовая отделка', 20], ['Сдача объекта', 10]]
};

;
/* ДОМИЛИЯ ПРО — приложение компании: сметы, объекты, бригады, клиенты, деньги, склад.
   Работает в браузере, данные в localStorage этого устройства; резервная копия — JSON. */
(function(){
'use strict';
var KEY = 'dpro1', D = window.DSEED;
var $ = function(s, r){ return (r || document).querySelector(s); };
var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
function h(tag, a, kids){
  var e = document.createElement(tag); a = a || {};
  for (var k in a){ var v = a[k]; if (v == null || v === false) continue;
    if (k === 'text') e.textContent = v; else if (k === 'html') e.innerHTML = v; else if (k.slice(0, 2) === 'on') e[k] = v; else if (k === 'value') e.value = v; else e.setAttribute(k, v === true ? '' : v); }
  (kids || []).forEach(function(c){ if (c != null && c !== false) e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c); });
  return e;
}
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
function toast(t){ var e = h('div', { class:'toast', text:t }); document.body.appendChild(e); setTimeout(function(){ e.remove(); }, 2800); }
function copy(t, what){ (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function(){ toast('Скопировано' + (what ? ': ' + what : '')); }, function(){ var ta = h('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast('Скопировано'); }); }
function rub(n){ return Math.round(n || 0).toLocaleString('ru-RU') + ' ₽'; }
function num(n, d){ return (+n || 0).toLocaleString('ru-RU', { maximumFractionDigits:d == null ? 2 : d }); }
function r2(n){ return Math.round((+n || 0) * 100) / 100; }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function today(){ return new Date().toISOString().slice(0, 10); }
function fdate(d){ return d ? new Date(d).toLocaleDateString('ru-RU') : '—'; }
function download(name, data, type){ var b = data instanceof Blob ? data : new Blob([data], { type:type || 'text/plain;charset=utf-8' }); var a = h('a', { href:URL.createObjectURL(b), download:name }); document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500); }
function clone(o){ return JSON.parse(JSON.stringify(o)); }

/* ================= состояние ================= */
function fresh(){
  var mats = D.mats.map(function(m){ return { id:uid(), name:m[0], unit:m[1], price:m[2] }; });
  var works = D.works.map(function(w){ return { id:uid(), sec:w[0], name:w[1], unit:w[2], price:w[3], mprice:w[4], geo:w[5], mats:[] }; });
  D.mats.forEach(function(m, i){ m[3].forEach(function(l){ var w = works.filter(function(x){ return x.name === l[0]; })[0]; if (w) w.mats.push([mats[i].id, l[1]]); }); });
  return { v:1, co:{ name:'Домилия', full:'ООО «Домилия»', phone:'+7 (992) 001-43-88', email:'zakaz-domilia@yandex.ru', city:'Екатеринбург', addr:'', inn:'', site:'domilia.ru', valid:14, guarantee:'3 года', note:'Цена фиксируется в договоре. Оплата по этапам: вы платите только за принятые работы.' },
    set:{ markup:10, matsInPdf:true, num:1 }, cat:{ works:works, mats:mats }, clients:[], deals:[], objs:[], crew:[], stock:[], gexp:[], log:[], tasks:[], depts:[], mreq:[], suppliers:[], orders:[] };
}
var S; try { S = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch(e){}
if (!S || !S.cat) S = fresh();
(function(){ (S.deals || []).forEach(function(d){ if (d.stage === 'Смета') d.stage = 'КП отправлено'; d.tasks = d.tasks || []; }); (S.objs || []).forEach(function(o){ if (o.status === 'Смета') o.status = 'Черновик'; if (o.status === 'Договор') o.status = 'Утверждена'; }); })();
(function(){ if (S.mig2) return; var G = { 'Укладка плитки на пол':'floor', 'Укладка плитки на стены':'wall', 'Гидроизоляция пола':'floor', 'Затирка швов':'', 'Тёплый пол (электрический)':'' }; S.cat.works.forEach(function(w){ if (G[w.name] && !w.geo) w.geo = G[w.name]; }); S.mig2 = 1; })();
var saveT = null;
function save(){ clearTimeout(saveT); saveT = setTimeout(function(){ try { localStorage.setItem(KEY, JSON.stringify(S)); var sv = $('#saved'); if (sv) sv.textContent = 'Сохранено · ' + new Date().toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' }); } catch(e){ toast('Мало места в браузере: удалите фото или сделайте копию и очистите старые объекты'); } }, 250);  if (typeof cabAuto === "function") cabAuto(); }
function logA(t){ S.log.unshift({ at:new Date().toISOString(), t:t }); S.log = S.log.slice(0, 400); }
function byId(list, id){ for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
function client(id){ return byId(S.clients, id) || { name:'—', phone:'' }; }
function crewName(id){ var c = byId(S.crew, id); return c ? c.name : ''; }

/* ================= расчёт сметы ================= */
function polyPts(r){ var x = 0, y = 0, hd = 0, P = [[0, 0]]; (r.poly || []).forEach(function(w2, i){ x += (+w2.len || 0) * Math.cos(hd * Math.PI / 180); y += (+w2.len || 0) * Math.sin(hd * Math.PI / 180); P.push([x, y]); hd += +w2.turn || 0; }); return P; }
function polyGeo(r){ var P = polyPts(r), A = 0, per = 0; for (var i = 0; i < P.length; i++){ var a = P[i], b = P[(i + 1) % P.length]; A += a[0] * b[1] - b[0] * a[1]; per += Math.hypot(b[0] - a[0], b[1] - a[1]); } var last = P[P.length - 1]; return { area:Math.abs(A) / 2, perim:per, close:Math.hypot(last[0], last[1]), pts:P }; }
function geo(r){ var hh = +r.h || 0, op = (r.op || []).reduce(function(a, o){ return a + (+o.w || 0) * (+o.h || 0); }, 0), fl, pe, wall;
  if (r.mode === 'area'){ fl = +r.af || 0; pe = +r.ap || (fl ? 4 * Math.sqrt(fl) : 0); wall = +r.aw ? +r.aw : Math.max(0, pe * hh - op); }
  else if (r.mode === 'poly'){ var g = polyGeo(r); fl = g.area; pe = g.perim; wall = Math.max(0, pe * hh - op); }
  else { var l = +r.l || 0, w = +r.w || 0; fl = l * w; pe = 2 * (l + w); wall = Math.max(0, pe * hh - op); }
  return { floor:r2(fl), ceil:r2(+r.ac || fl), perim:r2(pe), wall:r2(wall), op:r2(op) }; }
function qty(ln, r){ if (ln.manual || !ln.geo) return +ln.qty || 0; return geo(r)[ln.geo] || 0; }
function workCat(id){ return byId(S.cat.works, id); }
/* схемы оплаты сотрудников */
var PAY = [
  ['piece', 'Сдельно по ставкам справочника', 'За каждую выполненную работу — ставка мастера из справочника × коэффициент'],
  ['pctWork', '% от стоимости своих работ', 'Процент от цены для клиента за выполненные им работы'],
  ['pctObj', '% от суммы объекта', 'Прораб/менеджер: процент от итога сметы объекта'],
  ['pctProfit', '% от прибыли объекта', 'Процент от прибыли объекта (итог − мастера − материалы)'],
  ['perObj', 'Фикс за объект', 'Фиксированная сумма за каждый объект'],
  ['salary', 'Оклад в месяц', 'Фиксированная сумма каждый месяц'],
  ['day', 'Ставка за день', 'Начисление по табелю: дни × ставка']
];
function payOf(c){ c.pay = c.pay || { type:/Прораб|Менеджер|Дизайнер|Замерщик/.test(c.role || '') ? 'pctObj' : 'piece', k:1, pct:/Прораб/.test(c.role || '') ? 5 : 3, fix:0, day:0 }; return c.pay; }
function payName(c){ var p = payOf(c), t = PAY.filter(function(x){ return x[0] === p.type; })[0][1]; return p.type === 'piece' ? t + (p.k && +p.k !== 1 ? ' ×' + p.k : '') : /pct/.test(p.type) ? t.replace('%', p.pct + '%') : p.type === 'day' ? num(p.day, 0) + ' ₽/день' : t + ' ' + rub(p.fix); }
function discText(o){ var on = o.discOn === 'works' ? ' на работы' : o.discOn === 'mats' ? ' на материалы' : ''; return 'Скидка' + (o.discType === 'rub' ? '' : ' ' + (+o.disc || 0) + '%') + on + (o.discWhy ? ' (' + o.discWhy + ')' : ''); }
function kW(o){ return 1 + (+o.wm || 0) / 100; }
function lp(ln, o){ return (+ln.price || 0) * kW(o); }
/* сколько стоит работа строки для компании (зарплата исполнителю) */
function lineLabor(ln, q, o){ var c = ln.who ? byId(S.crew, ln.who) : null, p = c ? payOf(c) : null;
  if (!p || p.type === 'piece') return q * (+ln.mprice || 0) * (p ? (+p.k || 1) : 1);
  if (p.type === 'pctWork') return q * lp(ln, o) * (+p.pct || 0) / 100;
  return q * (+ln.mprice || 0); }
function objCalc(o){
  var C = { works:0, worksBase:0, master:0, mats:0, matsCost:0, rooms:[], matList:{}, byMaster:{}, done:0 }, k = kW(o);
  (o.rooms || []).forEach(function(r){ var rs = 0;
    (r.lines || []).forEach(function(ln){ var q = qty(ln, r), s = q * (+ln.price || 0) * k, m = lineLabor(ln, q, o); rs += s; C.master += m; if (ln.done) C.done += s;
      var who = ln.who || ''; var b = C.byMaster[who] || (C.byMaster[who] = { earned:0, all:0 }); b.all += m; if (ln.done) b.earned += m;
      var w = workCat(ln.wid); if (w) (w.mats || []).forEach(function(mr){ var mt = byId(S.cat.mats, mr[0]); if (!mt) return; var x = C.matList[mt.id] || (C.matList[mt.id] = { m:mt, q:0 }); x.q += q * mr[1]; }); });
    C.works += rs; C.rooms.push({ r:r, sum:rs }); });
  C.worksBase = C.works / k; C.wm = C.works - C.worksBase;
  Object.keys(C.matList).forEach(function(kk){ var x = C.matList[kk]; x.q = Math.ceil(x.q * 100) / 100; C.matsCost += x.q * x.m.price; });
  (o.extraMats || []).forEach(function(x){ C.matsCost += (+x.q || 0) * (+x.price || 0); });
  C.mm = o.mm === '' || o.mm == null ? (+S.set.markup || 0) : +o.mm;
  C.mats = o.noMats ? 0 : C.matsCost * (1 + C.mm / 100);
  C.sub = C.works + C.mats;
  var base = o.discOn === 'works' ? C.works : o.discOn === 'mats' ? C.mats : C.sub;
  C.disc = o.discType === 'rub' ? Math.min(base, +o.disc || 0) : base * (+o.disc || 0) / 100; C.total = C.sub - C.disc;
  var area = (o.rooms || []).reduce(function(a, r){ return a + geo(r).floor; }, 0); C.area = area; C.perM = area ? C.total / area : 0;
  /* прораб, менеджер и др. по проценту/фиксу */
  C.roles = [];
  var pre = C.total - C.master - C.matsCost, dn = (o.stages || []).filter(function(s){ return s.done; }).reduce(function(a, s){ return a + (+s.pct || 0); }, 0) / 100;
  [['prorab', 'Прораб'], ['manager', 'Менеджер'], ['designer', 'Дизайнер']].forEach(function(rr){ var c = o[rr[0]] ? byId(S.crew, o[rr[0]]) : null; if (!c) return; var p = payOf(c), plan = 0;
    if (p.type === 'pctObj') plan = C.total * (+p.pct || 0) / 100; else if (p.type === 'pctProfit') plan = Math.max(0, pre) * (+p.pct || 0) / 100; else if (p.type === 'perObj') plan = +p.fix || 0; else return;
    var earned = rr[0] === 'manager' ? (o.contractAt ? plan : 0) : plan * dn;
    C.roles.push({ role:rr[1], c:c, plan:plan, earned:earned }); var b = C.byMaster[c.id] || (C.byMaster[c.id] = { earned:0, all:0 }); b.all += plan; b.earned += earned; });
  C.rolesPlan = C.roles.reduce(function(a, x){ return a + x.plan; }, 0);
  var pays = o.pays || []; C.inc = pays.filter(function(p){ return p.kind === 'in'; }).reduce(function(a, p){ return a + (+p.sum || 0); }, 0);
  C.out = pays.filter(function(p){ return p.kind === 'out'; }).reduce(function(a, p){ return a + (+p.sum || 0); }, 0);
  C.labor = C.master + C.rolesPlan;
  C.debt = C.total - C.inc; C.planProfit = C.total - C.labor - C.matsCost; C.factProfit = C.inc - C.out;
  return C;
}

/* ================= иконки ================= */
var ICO = {
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>',
  layers:'<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 12l10 5 10-5M2 16l10 5 10-5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  funnel:'<path d="M3 4h18l-7 8.5V20l-4-2v-5.5z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20a6.5 6.5 0 0 0-4-6"/>',
  build:'<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6M9 11h.01M15 11h.01"/>',
  hard:'<path d="M3 17h18v2H3zM5 17a7 7 0 0 1 14 0M12 6V3M9 7.5 8 4.5M15 7.5l1-3"/>',
  wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  coin:'<circle cx="12" cy="12" r="9"/><path d="M10 7h3.5a2.5 2.5 0 0 1 0 5H10V7zM10 12v5M8 15h5"/>',
  box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  book:'<path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  moon:'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
  out:'<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5M15 12H3"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  pdf:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  xls:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h12l2-8H6.2"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
  alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.5"/>',
  check:'<path d="m5 12 5 5 9-10"/>',
  phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  ruler:'<path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>'
};
function ic(n){ var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('class', 'ic'); s.innerHTML = ICO[n] || ''; return s; }
function btn(icon, text, cls, fn){ return h('button', { class:'btn ' + (cls || ''), onclick:fn }, [icon ? ic(icon) : null, text]); }

/* ================= навигация ================= */
var V = {}, view = 'home', arg = null;
var NAV = [
  ['', [['home', 'home', 'Главная']]],
  ['Продажи', [['crm', 'funnel', 'Заявки'], ['clients', 'users', 'Клиенты'], ['stats', 'chart', 'Аналитика']]],
  ['Производство', [['objs', 'build', 'Объекты и сметы'], ['crew', 'hard', 'Сотрудники и бригады']]],
  ['Финансы', [['money', 'wallet', 'Деньги'], ['salary', 'coin', 'Зарплаты'], ['stock', 'box', 'Склад']]],
  ['Настройки', [['cat', 'book', 'Справочник цен'], ['company', 'gear', 'Компания']]]
];
function go(v, a){ view = v; arg = a == null ? null : a; var hl = ({ obj:'objs', deal:'crm', emp:'salary', client:'clients', person:'crew' })[v] || v; $$('#side [data-v]').forEach(function(b){ b.classList.toggle('on', b.dataset.v === hl); }); var w = $('#view'); w.innerHTML = ''; $('#barR').innerHTML = ''; V[v](w, a); window.scrollTo(0, 0); document.body.classList.remove('nav'); try { history.replaceState(null, '', '#' + v + (a ? ':' + a : '')); } catch(e){} }
function title(t){ $('#ttl').textContent = t; }
function renderNav(){
  var nav = $('#nav'); nav.innerHTML = '';
  NAV.forEach(function(g){ if (g[0]) nav.appendChild(h('div', { class:'ng', text:g[0] })); g[1].forEach(function(it){ nav.appendChild(h('button', { class:'ni', 'data-v':it[0], onclick:function(){ go(it[0]); } }, [ic(it[1]), h('span', { text:it[2] })])); }); });
  var ft = $('#navf'); ft.innerHTML = '';
  ft.appendChild(h('button', { class:'ni sm', 'data-v':'data', onclick:function(){ go('data'); } }, [ic('db'), h('span', { text:'Данные и копия' })]));
  ft.appendChild(h('button', { class:'ni sm', onclick:function(){ var d = document.documentElement.classList.toggle('dark'); localStorage.setItem('dproUI', JSON.stringify({ dark:d })); } }, [ic('moon'), h('span', { text:'Тёмная тема' })]));
  ft.appendChild(h('button', { class:'ni sm', onclick:function(){ if (confirm('Выйти? На этом устройстве снова понадобится пароль.')){ localStorage.removeItem('dprokey'); location.reload(); } } }, [ic('out'), h('span', { text:'Выйти' })]));
  var mb = $('#mnu'); mb.appendChild(ic('menu')); mb.onclick = function(){ document.body.classList.toggle('nav'); };
  $('#scrim').onclick = function(){ document.body.classList.remove('nav'); };
}

/* ================= элементы форм ================= */
function fieldD(label, input, sm){ return h('div', { class:'f' }, [h('span', { class:'fl', text:label }), input, sm ? h('small', { class:'muted sm', text:sm }) : null]); }
function field(label, input, sm){ return h('label', { class:'f' }, [h('span', { class:'fl', text:label }), input, sm ? h('small', { class:'muted sm', text:sm }) : null]); }
function inp(obj, key, type, onch, attrs){ var i = h('input', Object.assign({ type:type || 'text' }, attrs || {})); i.value = obj[key] == null ? '' : obj[key]; i.oninput = function(){ obj[key] = type === 'number' ? (i.value === '' ? '' : +i.value) : i.value; save(); if (onch) onch(i.value); }; return i; }
function sel(obj, key, opts, onch){ var s = h('select'); opts.forEach(function(o){ var v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : o; s.appendChild(h('option', { value:v, text:t })); }); s.value = obj[key] == null ? '' : obj[key]; s.onchange = function(){ obj[key] = s.value; save(); if (onch) onch(s.value); }; return s; }
function area(obj, key, ph){ var t = h('textarea', { placeholder:ph || '' }); t.value = obj[key] || ''; t.oninput = function(){ obj[key] = t.value; save(); }; return t; }
function kpi(b, s, cls){ return h('div', { class:'kpi ' + (cls || '') }, [h('b', { text:b }), h('span', { text:s })]); }
function card(titleText, kids, cls){ return h('div', { class:'card ' + (cls || '') }, [titleText ? (typeof titleText === 'string' ? h('h3', { text:titleText }) : titleText) : null].concat(kids || [])); }
function table(head, rows, numCols, cls){
  var t = h('table', { class:'t ' + (cls || '') }), tr = h('tr'); head.forEach(function(x, i){ tr.appendChild(h('th', { class:(numCols || []).indexOf(i) > -1 ? 'n' : '', text:x })); }); t.appendChild(h('thead', {}, [tr]));
  var tb = h('tbody'); rows.forEach(function(r){ var row = h('tr'); r.forEach(function(c, i){ var td = h('td', { class:(numCols || []).indexOf(i) > -1 ? 'n' : '' }); if (c && c.nodeType) td.appendChild(c); else td.textContent = c == null ? '' : c; row.appendChild(td); }); tb.appendChild(row); }); t.appendChild(tb);
  return h('div', { class:'tw' }, [t]);
}
function empty(t){ return h('p', { class:'empty', text:t }); }

/* ================= ГЛАВНАЯ ================= */
function attention(){
  var A = [], td = today();
  S.deals.forEach(function(d){ if (['Отказ', 'Договор'].indexOf(d.stage) > -1) return; if (d.stage === 'Новая') return; if ((d.tasks || []).some(function(t){ return !t.done; })) return; if (d.next && d.next <= td) A.push([d.next < td ? 'r' : 'y', 'funnel', (d.next < td ? 'Просрочено: ' : 'Сегодня: ') + (d.todo || 'связаться') + ' — ' + client(d.cid).name, function(){ go('deal', d.id); }]); else if (!d.next) A.push(['y', 'funnel', 'Нет следующего шага по заявке: ' + client(d.cid).name, function(){ go('deal', d.id); }]); });
  S.objs.forEach(function(o){ if (o.status !== 'В работе') return; var C = objCalc(o); (o.stages || []).forEach(function(st){ if (!st.done && st.plan && st.plan < td) A.push(['r', 'cal', o.name + ': этап «' + st.name + '» просрочен (план ' + fdate(st.plan) + ')', function(){ go('obj', o.id + '|stages'); }]); if (st.done && !st.paid) A.push(['y', 'wallet', o.name + ': этап «' + st.name + '» сдан, ждём оплату ' + rub(C.total * st.pct / 100), function(){ go('obj', o.id + '|money'); }]); }); });
  var bal = stockBal(); Object.keys(bal).forEach(function(k){ if (bal[k] < 0){ var m = byId(S.cat.mats, k); A.push(['y', 'box', 'Склад ушёл в минус: ' + (m ? m.name : k), function(){ go('stock'); }]); } });
  return A;
}
V.home = function(w){
  title('Главная');
  $('#barR').appendChild(btn('plus', 'Заявка', 'lt', function(){ newDeal(); }));
  $('#barR').appendChild(btn('plus', 'Смета', '', function(){ newObj(); }));
  var act = S.objs.filter(function(o){ return o.status === 'В работе'; }), deals = S.deals.filter(function(d){ return ['Отказ', 'Договор'].indexOf(d.stage) < 0; });
  var debt = 0, monthIn = 0, monthOut = 0, m = today().slice(0, 7);
  S.objs.forEach(function(o){ var C = objCalc(o); if (['В работе', 'Сдан'].indexOf(o.status) > -1) debt += Math.max(0, C.debt); (o.pays || []).forEach(function(p){ if ((p.d || '').slice(0, 7) === m){ if (p.kind === 'in') monthIn += +p.sum || 0; else monthOut += +p.sum || 0; } }); });
  S.gexp.forEach(function(p){ if ((p.d || '').slice(0, 7) === m) monthOut += +p.sum || 0; });
  w.appendChild(h('div', { class:'grid4' }, [kpi(num(act.length, 0), 'объектов в работе'), kpi(num(deals.length, 0) + ' · ' + rub(deals.reduce(function(a, d){ return a + (+d.sum || 0); }, 0)), 'заявок в воронке'), kpi(rub(monthIn - monthOut), 'итог месяца: +' + rub(monthIn) + ' / −' + rub(monthOut), monthIn - monthOut >= 0 ? 'g' : 'r'), kpi(rub(debt), 'клиенты должны', debt ? 'y' : 'g')]));
  var wait = S.deals.filter(function(d){ return d.stage === 'Новая'; }).sort(function(a, b){ return (a.ts || 0) - (b.ts || 0); });
  var tdy = []; S.deals.forEach(function(d){ (d.tasks || []).forEach(function(t){ if (!t.done && t.due <= today()) tdy.push([d, t]); }); });
  var meas = S.deals.filter(function(d){ return d.measure && d.measure.slice(0, 10) >= today() && d.stage !== 'Отказ'; }).sort(function(a, b){ return a.measure < b.measure ? -1 : 1; }).slice(0, 8);
  var tg = h('div', { class:'grid3 today' });
  tg.appendChild(card(h('h3', {}, ['Ждут ответа', h('span', { class:'badge ' + (wait.some(function(d){ return waitMin(d) > 15; }) ? 'r' : 'g'), text:wait.length })]), wait.length ? wait.slice(0, 8).map(function(d){ var m = waitMin(d); return h('button', { class:'att ' + (m > 15 ? 'r' : ''), onclick:function(){ go('deal', d.id); } }, [ic('phone'), h('span', { text:client(d.cid).name + ' · ' + d.src }), h('b', { class:'tmr' + (m > 15 ? ' r' : ''), text:ago(m) })]); }) : [empty('Все новые заявки обработаны.')]));
  tg.appendChild(card(h('h3', {}, ['Задачи на сегодня', h('span', { class:'badge', text:tdy.length })]), tdy.length ? tdy.slice(0, 8).map(function(x){ var late = x[1].due < today(); return h('button', { class:'att ' + (late ? 'r' : ''), onclick:function(){ go('deal', x[0].id); } }, [ic('check'), h('span', { text:x[1].title + ' — ' + client(x[0].cid).name })]); }) : [empty('На сегодня задач нет.')]));
  tg.appendChild(card(h('h3', {}, ['Ближайшие замеры', h('span', { class:'badge', text:meas.length })]), meas.length ? meas.map(function(d){ return h('button', { class:'att', onclick:function(){ go('deal', d.id); } }, [ic('cal'), h('span', { text:new Date(d.measure).toLocaleString('ru-RU', { weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' }) + ' · ' + client(d.cid).name + (client(d.cid).addr ? ', ' + client(d.cid).addr : '') })]); }) : [empty('Замеров не назначено.')]));
  w.appendChild(tg);
  var A = attention();
  var box = card(h('h3', {}, [ic('alert'), 'Требует внимания', h('span', { class:'badge ' + (A.some(function(a){ return a[0] === 'r'; }) ? 'r' : 'g'), text:A.length || 'всё в порядке' })]));
  if (!A.length) box.appendChild(empty('Срочных дел нет.'));
  A.slice(0, 15).forEach(function(a){ box.appendChild(h('button', { class:'att ' + a[0], onclick:a[3] }, [ic(a[1]), h('span', { text:a[2] })])); });
  w.appendChild(box);
  /* объекты в работе */
  var ob = card('Объекты в работе');
  if (!act.length) ob.appendChild(empty('Нет объектов в работе. Создайте смету и переведите объект в статус «В работе».'));
  act.forEach(function(o){ var C = objCalc(o), st = o.stages || [], dn = st.filter(function(s){ return s.done; }).reduce(function(a, s){ return a + (+s.pct || 0); }, 0);
    ob.appendChild(h('button', { class:'orow', onclick:function(){ go('obj', o.id); } }, [h('div', {}, [h('b', { text:o.name }), h('small', { text:client(o.cid).name + ' · прораб ' + (crewName(o.prorab) || '—') })]), h('div', { class:'prog' }, [h('i', { style:'width:' + dn + '%' })]), h('span', { class:'n', text:dn + '%' }), h('span', { class:'n', text:rub(C.total) })])); });
  w.appendChild(ob);
  if (!S.objs.length && !S.deals.length) w.appendChild(card('С чего начать', [h('ol', { class:'steps', html:'<li><b>Компания</b> — проверьте реквизиты и телефон: они попадут в смету для клиента.</li><li><b>Справочник цен</b> — поставьте свои цены на работы и материалы и ставки мастеров.</li><li><b>Бригады</b> — добавьте прорабов и мастеров.</li><li><b>Заявки</b> — ведите каждого клиента от звонка до договора. Из заявки одной кнопкой создаётся смета.</li>' })]));
};

/* ================= ЗАЯВКИ (CRM) ================= */
var STAGES = ['Новая', 'На связи', 'Замер', 'КП отправлено', 'Думает', 'Договор', 'Отказ'];
var SRC = ['Сайт', 'Квиз на сайте', 'Яндекс Директ', 'Авито', 'VK', 'МАКС', 'Звонок', 'Рекомендация', 'Повторный', 'Другое'];
var LOST = ['Дорого', 'Выбрали других', 'Отложили ремонт', 'Не дозвонились', 'Не наш объект', 'Сделают сами', 'Другое'];
var TPL_DEF = {
  followups:'2|Отправить кейс похожей квартиры|{name}, добрый день! Посмотрите, как мы сделали похожую квартиру — пришлю фото и смету. Если удобно, покажу этот объект вживую.\n5|Пригласить на живой объект|{name}, у нас сейчас идёт ремонт рядом с вами. Можем показать объект в процессе — так лучше всего видно качество. Когда вам удобно?\n10|Напомнить о сроке расчёта|{name}, напоминаю: расчёт по вашей квартире действует до {until}. Дальше цены на материалы могут измениться. Записать вас на бесплатный замер?',
  quick:'Приветствие|{name}, здравствуйте! Меня зовут {manager}, я менеджер компании «{company}». Подскажите, какой ремонт планируете и какая площадь квартиры?\nЗамер|{name}, давайте назначим бесплатный замер — инженер приедет, всё измерит и за 1 день подготовит точную смету. Когда вам удобно?\nСсылка на смету|{name}, подготовил смету по вашей квартире и всё о том, как мы работаем: {link}\nПосле замера|{name}, спасибо за встречу! Точную смету подготовлю сегодня и пришлю ссылкой. Если появятся вопросы — пишите, я на связи.\nЖивой объект|{name}, можем показать объект, где сейчас идёт ремонт — так лучше всего видно качество работ. Когда вам удобно?\nПопросить отзыв|{name}, как вам результат? Нам очень важно ваше мнение — это 1 минута: {link}',
  guarantees:'Гарантия на все работы — прописана в договоре\nФиксированная смета: цена не растёт в процессе\nОплата поэтапно — платите только за выполненный этап\nФото- и видеоотчёты с объекта\nСобственные бригады, без субподряда\nВывоз мусора и уборка после ремонта',
  steps:'Бесплатный замер|Инженер приезжает в удобное время, делает обмеры и фото, обсуждает пожелания\nТочная смета за 1 день|Фиксируем цену и сроки — дальше они не меняются\nДоговор|Гарантия, этапы, сроки и штрафы за просрочку — на бумаге\nРемонт с отчётами|Фото и видео с объекта, доступ к странице объекта\nПриёмка по этапам|Принимаете каждый этап, платите только за готовое',
  welcome:'Мы подготовили смету по вашей квартире и собрали всё о том, как мы работаем. Если что-то непонятно — напишите вашему менеджеру, он на связи.',
  hours:'Ежедневно 9:00–21:00', offerDays:7
};
function tpl(k){ S.tpl = S.tpl || {}; return S.tpl[k] != null && S.tpl[k] !== '' ? S.tpl[k] : TPL_DEF[k]; }
function lines3(k){ return String(tpl(k)).split(/\n/).map(function(l){ return l.split('|').map(function(x){ return x.trim(); }); }).filter(function(p){ return p[0]; }); }
function firstName(n){ return String(n || '').trim().split(/\s+/)[0] || ''; }
function dealLink(d){ var o = d.oid ? byId(S.objs, d.oid) : null; return (o && o.lastLink) || ''; }
function fillT(t, d){ var c = client(d.cid), mg = d.mgr ? byId(S.crew, d.mgr) : null, nm = firstName(c.name), until = d.kpAt ? fdate(new Date(new Date(d.kpAt).getTime() + (+tpl('offerDays') || 7) * 864e5)) : fdate(new Date(Date.now() + 7 * 864e5));
  if (!nm || /клиент/i.test(nm)) t = t.replace(/\{name\},\s*(\S)/g, function(m, ch){ return ch.toUpperCase(); });
  return t.replace(/\{name\}/g, nm).replace(/\{link\}/g, dealLink(d) || '(ссылка на смету)').replace(/\{until\}/g, until).replace(/\{company\}/g, S.co.name).replace(/\{phone\}/g, S.co.phone).replace(/\{manager\}/g, mg ? firstName(mg.name) : 'менеджер').replace(/\{hours\}/g, tpl('hours')); }
/* ================= МЕССЕНДЖЕРЫ: MAX по умолчанию ================= */
var CH = [['max', 'MAX'], ['wa', 'WhatsApp'], ['tg', 'Telegram'], ['vk', 'ВКонтакте'], ['ig', 'Instagram'], ['sms', 'СМС']];
function chName(k){ var x = CH.filter(function(c){ return c[0] === k; })[0]; return x ? x[1] : 'MAX'; }
function chOf(c){ return c.ch || S.set.defCh || 'max'; }
function digits(p){ return String(p || '').replace(/\D/g, '').replace(/^8/, '7'); }
function handle(v){ return String(v || '').trim().replace(/^@/, '').replace(/^https?:\/\/[^\/]+\//, ''); }
function waUrl(phone, text){ return 'https://wa.me/' + digits(phone) + (text ? '?text=' + encodeURIComponent(text) : ''); }
function sendMsg(c, text, ch){ ch = ch || chOf(c); var url = '', note = '';
  if (ch === 'wa'){ if (!c.phone) return copy(text, 'текст (нет телефона)'); url = waUrl(c.phone, text); }
  else if (ch === 'sms'){ url = 'sms:' + String(c.phone || '').replace(/[^\d+]/g, '') + '?body=' + encodeURIComponent(text); }
  else { if (text){ copy(text, ''); note = 'Текст скопирован — вставьте его в чат ' + chName(ch); }
    if (ch === 'max') url = /^https?:/.test(c.max || '') ? c.max : 'https://web.max.ru/';
    if (ch === 'tg') url = c.tg ? 'https://t.me/' + handle(c.tg) : 'https://t.me/share/url?url=' + encodeURIComponent(' ') + '&text=' + encodeURIComponent(text);
    if (ch === 'vk') url = c.vk ? 'https://vk.me/' + handle(c.vk) : 'https://vk.com/im';
    if (ch === 'ig') url = c.ig ? 'https://ig.me/m/' + handle(c.ig) : 'https://www.instagram.com/direct/inbox/'; }
  if (url) window.open(url, '_blank'); if (note) setTimeout(function(){ toast(note); }, 300); }
function sendWA(d, text){ var c = client(d.cid); sendMsg(c, text); logD(d, chName(chOf(c)) + ': ' + text.slice(0, 60) + '…'); }
function chPicker(c, after){ var box = h('div', { class:'chs' }); CH.forEach(function(x){ box.appendChild(h('button', { class:'chip sm' + (chOf(c) === x[0] ? ' on' : ''), text:x[1], onclick:function(){ c.ch = x[0]; save(); if (after) after(); } })); }); return box; }
function chFields(c){ var k = chOf(c); if (k === 'max') return field('Ссылка на профиль MAX (если есть)', inp(c, 'max', 'url', null, { placeholder:'https://max.ru/u/…' }), 'Клиент: Профиль → «Пригласить по ссылке». Без ссылки откроется MAX, текст будет скопирован');
  if (k === 'tg') return field('Telegram: @ник', inp(c, 'tg')); if (k === 'vk') return field('ВКонтакте: id или ник', inp(c, 'vk')); if (k === 'ig') return field('Instagram: @ник', inp(c, 'ig')); return h('span'); }

function logD(d, t){ (d.hist = d.hist || []).unshift({ at:new Date().toISOString(), t:t }); d.hist = d.hist.slice(0, 100); save(); }
function newClient(name, phone){ var c = { id:uid(), name:name || 'Новый клиент', phone:phone || '', email:'', addr:'', note:'', at:today(), kind:'fl' }; S.clients.unshift(c); return c; }
function newDeal(){ var c = newClient(); var mg = S.crew.filter(function(x){ return x.role === 'Менеджер' && !x.to; })[0]; var d = { id:uid(), cid:c.id, stage:'Новая', src:'Сайт', camp:'', sum:'', what:'', area:'', next:today(), todo:'Перезвонить', notes:'', at:today(), ts:Date.now(), mgr:mg ? mg.id : '', maxSt:0, tasks:[] }; S.deals.unshift(d); logA('Новая заявка'); save(); go('deal', d.id); }
function schedFollow(d){ d.tasks = d.tasks || []; if (d.tasks.some(function(t){ return t.auto && !t.done; })) return; lines3('followups').forEach(function(p){ if (!+p[0]) return; d.tasks.push({ id:uid(), due:new Date(Date.now() + (+p[0]) * 864e5).toISOString().slice(0, 10), title:p[1], text:p[2] || '', auto:true, done:false }); }); }
function setStage(d, st, reason){
  if (d.stage === st) return; var old = d.stage; d.stage = st; if (old === 'Новая' && !d.firstAt) d.firstAt = Date.now(); d.maxSt = Math.max(d.maxSt || 0, STAGES.indexOf(st) < 6 ? STAGES.indexOf(st) : 0);
  if (st === 'КП отправлено'){ d.kpAt = d.kpAt || today(); schedFollow(d); }
  if (st === 'Договор' || st === 'Отказ') (d.tasks || []).forEach(function(t){ if (t.auto && !t.done){ t.done = true; t.doneAt = today(); t.closed = true; } });
  if (st === 'Отказ') d.lost = reason || d.lost || '';
  if (st === 'Договор' && d.oid){ var o = byId(S.objs, d.oid); if (o && isDraft(o)){ o.status = 'Утверждена'; o.approved = o.approved || { at:today(), by:'договор подписан', total:Math.round(objCalc(o).total) }; if (!o.contractAt) o.contractAt = today(); } }
  logD(d, old + ' → ' + st + (reason ? ' (' + reason + ')' : '')); logA('Заявка ' + client(d.cid).name + ' → ' + st); save(); }
function askStage(d, st, after){ if (st !== 'Отказ'){ setStage(d, st); after(); return; }
  var box = dlg('Почему отказ?', [h('div', { class:'col' }, LOST.map(function(r){ return h('button', { class:'pk', onclick:function(){ var rr = r === 'Другое' ? prompt('Причина', '') : r; if (rr === null) return; box.remove(); setStage(d, 'Отказ', rr); after(); } }, [h('b', { text:r })]); }))]); }
function waitMin(d){ return Math.round((Date.now() - (d.ts || new Date(d.at).getTime())) / 6e4); }
function ago(m){ return m < 60 ? m + ' мин' : m < 1440 ? Math.floor(m / 60) + ' ч ' + (m % 60) + ' мин' : Math.floor(m / 1440) + ' дн'; }
V.crm = function(w){
  title('Заявки');
  $('#barR').appendChild(btn('', 'Аналитика', 'lt', function(){ go('stats'); })); $('#barR').appendChild(btn('plus', 'Новая заявка', '', newDeal));
  var tot = S.deals.length, dog = S.deals.filter(function(d){ return d.stage === 'Договор'; });
  w.appendChild(h('div', { class:'grid4' }, [kpi(num(tot, 0), 'заявок всего'), kpi(num(dog.length, 0), 'договоров'), kpi(tot ? Math.round(dog.length / tot * 100) + '%' : '—', 'конверсия в договор'), kpi(rub(dog.reduce(function(a, d){ return a + (+d.sum || 0); }, 0)), 'сумма договоров')]));
  var board = h('div', { class:'kb k7' });
  STAGES.forEach(function(st){
    var L = S.deals.filter(function(d){ return d.stage === st; });
    var col = h('div', { class:'kc', 'data-st':st }, [h('div', { class:'kh' }, [h('b', { text:st }), h('span', { class:'badge', text:L.length }), h('span', { class:'muted sm', text:L.length ? rub(L.reduce(function(a, d){ return a + (+d.sum || 0); }, 0)) : '' })])]);
    col.ondragover = function(e){ e.preventDefault(); col.classList.add('ov'); }; col.ondragleave = function(){ col.classList.remove('ov'); };
    col.ondrop = function(e){ e.preventDefault(); var d = byId(S.deals, e.dataTransfer.getData('text')); if (d) askStage(d, st, function(){ go('crm'); }); };
    L.forEach(function(d){ var c = client(d.cid), late = d.next && d.next < today(), wt = st === 'Новая' ? waitMin(d) : 0, mg = d.mgr ? byId(S.crew, d.mgr) : null, ot = (d.tasks || []).filter(function(t){ return !t.done && t.due <= today(); }).length;
      var cd = h('div', { class:'kd' + (wt > 15 ? ' hot' : ''), draggable:'true', onclick:function(){ go('deal', d.id); } }, [h('b', { text:c.name }), h('small', { text:[d.what, d.area ? d.area + ' м²' : '', d.src].filter(Boolean).join(' · ') }),
        wt ? h('span', { class:'tmr' + (wt > 15 ? ' r' : ''), text:'ждёт ' + ago(wt) }) : null, d.lost && st === 'Отказ' ? h('small', { class:'bad', text:d.lost }) : null,
        h('div', { class:'kf' }, [h('span', { class:'n', text:d.sum ? rub(d.sum) : '' }), ot ? h('span', { class:'dt late', text:ot + ' задач' }) : d.next ? h('span', { class:'dt' + (late ? ' late' : ''), text:fdate(d.next) }) : null]), mg ? h('small', { class:'muted', text:mg.name }) : null]);
      cd.ondragstart = function(e){ e.dataTransfer.setData('text', d.id); };
      col.appendChild(cd); });
    board.appendChild(col);
  });
  w.appendChild(board);
  w.appendChild(h('p', { class:'muted sm', text:'Перетаскивайте карточки между колонками. В «КП отправлено» программа сама ставит дожим на 2-й, 5-й и 10-й день. Красные — ждут ответа больше 15 минут.' }));
};
V.deal = function(w, id){
  var d = byId(S.deals, id); if (!d){ go('crm'); return; } var c = client(d.cid); d.tasks = d.tasks || [];
  title('Заявка: ' + c.name);
  $('#barR').appendChild(btn('', '← Все заявки', 'lt', function(){ go('crm'); }));
  var stb = h('div', { class:'seg' }); STAGES.forEach(function(st){ stb.appendChild(h('button', { class:st === d.stage ? 'on' : '', text:st + (st === 'Отказ' && d.stage === 'Отказ' && d.lost ? ': ' + d.lost : ''), onclick:function(){ askStage(d, st, function(){ go('deal', d.id); }); } })); });
  w.appendChild(stb);
  if (d.stage === 'Новая'){ var wt = waitMin(d); w.appendChild(h('div', { class:'hint ' + (wt > 15 ? 'r' : 'y'), html:'Клиент ждёт ответа <b>' + ago(wt) + '</b>. Норма — 15 минут: кто ответил первым, тот и получил заказ.' })); }
  var lay = h('div', { class:'sm-lay' }), main = h('div'), side = h('div', { class:'sm-side' }); lay.appendChild(main); lay.appendChild(side); w.appendChild(lay);
  var chBox = h('div');
  function chDraw(){ chBox.innerHTML = ''; chBox.appendChild(h('div', { class:'grid2' }, [fieldD('Где удобно общаться', chPicker(c, chDraw)), chFields(c)])); }
  chDraw();
  main.appendChild(card('Клиент', [h('div', { class:'grid3' }, [field('Имя', inp(c, 'name', 'text', function(){ title('Заявка: ' + c.name); })), field('Телефон', inp(c, 'phone', 'tel')), field('Адрес объекта', inp(c, 'addr'))]), chBox,
    h('div', { class:'row' }, [c.phone ? h('a', { class:'btn lt', href:'tel:' + c.phone.replace(/[^\d+]/g, ''), onclick:function(){ if (d.stage === 'Новая') setStage(d, 'На связи'); } }, [ic('phone'), 'Позвонить']) : null, btn('', 'Написать в ' + chName(chOf(c)), 'lt', function(){ sendMsg(c, ''); if (d.stage === 'Новая') setStage(d, 'На связи'); })])]));
  main.appendChild(card('Заявка', [h('div', { class:'grid4' }, [field('Откуда', sel(d, 'src', SRC)), field('Кампания / метка', inp(d, 'camp', 'text', null, { placeholder:'например директ-ванные' })), field('Менеджер', whoSelect(d.mgr, function(v){ d.mgr = v; save(); }, false)), field('Сумма, ₽', inp(d, 'sum', 'number'))]),
    h('div', { class:'grid4' }, [field('Что нужно', inp(d, 'what', 'text', null, { placeholder:'капитальный, новостройка…' })), field('Площадь, м²', inp(d, 'area', 'number')), field('Замер', inp(d, 'measure', 'datetime-local', function(){ if (d.measure && ['Новая', 'На связи'].indexOf(d.stage) > -1) setStage(d, 'Замер'); })), field('Следующий шаг, дата', inp(d, 'next', 'date'))]),
    field('Что сделать', inp(d, 'todo', 'text', null, { placeholder:'перезвонить, отправить смету…' })), field('Заметки', area(d, 'notes', 'Что обсудили, пожелания, бюджет, сроки…'))]));
  /* задачи и дожим */
  var tb = h('div', { class:'col' });
  d.tasks.slice().sort(function(a, b){ return (a.done - b.done) || (a.due < b.due ? -1 : 1); }).forEach(function(t){ var late = !t.done && t.due < today(), now2 = !t.done && t.due === today(), txt = fillT(t.text || '', d);
    tb.appendChild(h('div', { class:'task' + (t.done ? ' done' : late ? ' p1' : now2 ? ' p2' : '') }, [h('span', { class:'tn', text:t.done ? '✓' : late ? '!' : '•' }), h('div', {}, [h('b', { text:t.title }), h('small', { text:fdate(t.due) + (t.auto ? ' · дожим' : '') + (t.closed ? ' · закрыта автоматически' : '') }), txt ? h('small', { class:'pre', text:txt }) : null]),
      !t.done && txt ? btn('', 'Отправить', 'xs', function(){ sendWA(d, txt); t.done = true; t.doneAt = today(); save(); go('deal', d.id); }) : null, !t.done && txt ? btn('copy', '', 'lt xs', function(){ copy(txt, 'текст'); }) : null,
      h('button', { class:'btn lt xs', text:t.done ? '↺' : 'Готово', onclick:function(){ t.done = !t.done; t.doneAt = t.done ? today() : ''; save(); go('deal', d.id); } }), h('button', { class:'x', text:'×', onclick:function(){ d.tasks.splice(d.tasks.indexOf(t), 1); save(); go('deal', d.id); } })])); });
  if (!d.tasks.length) tb.appendChild(empty('Задач нет. Когда переведёте заявку в «КП отправлено», дожим поставится сам.'));
  var nt = { t:'', due:today() };
  main.appendChild(card(h('h3', {}, ['Задачи и дожим', h('span', { class:'sp' }), d.stage !== 'Договор' && d.stage !== 'Отказ' ? btn('', 'Поставить дожим', 'lt xs', function(){ schedFollow(d); save(); go('deal', d.id); }) : null]), [tb, h('div', { class:'row' }, [inp(nt, 't', 'text', null, { placeholder:'Новая задача…' }), inp(nt, 'due', 'date'), btn('plus', 'Добавить', 'lt', function(){ if (!nt.t) return; d.tasks.push({ id:uid(), title:nt.t, due:nt.due, text:'', auto:false, done:false }); save(); go('deal', d.id); })])]));
  /* быстрые ответы */
  side.appendChild(card('Быстрые ответы', [h('div', { class:'col' }, lines3('quick').map(function(p){ var txt = fillT(p[1] || '', d); return h('div', { class:'qa' }, [h('b', { text:p[0] }), h('small', { text:txt }), h('div', { class:'row' }, [btn('', 'В ' + chName(chOf(client(d.cid))), 'xs', function(){ sendWA(d, txt); if (d.stage === 'Новая') setStage(d, 'На связи'); }), btn('copy', 'Копировать', 'lt xs', function(){ copy(txt, 'текст'); })])]); })), h('small', { class:'muted', text:'Тексты меняются в «Компания» → «Тексты для клиентов».' })]));
  var o = d.oid ? byId(S.objs, d.oid) : null;
  side.appendChild(card('Смета', [o ? h('div', { class:'col' }, [h('span', { text:'№' + o.num + ' · ' + o.status + ' · ' + rub(objCalc(o).total) }), btn('build', 'Открыть смету', '', function(){ go('obj', o.id); }), btn('link', 'Ссылка для клиента', 'lt', function(){ go('obj', o.id + '|client'); })])
    : btn('plus', 'Создать смету по заявке', '', function(){ var no = newObj(d, true); d.oid = no.id; save(); go('obj', no.id); })]));
  side.appendChild(card('История', [(d.hist || []).length ? h('div', { class:'col hist' }, d.hist.slice(0, 30).map(function(x){ return h('small', {}, [h('b', { text:new Date(x.at).toLocaleString('ru-RU', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }) + ' ' }), x.t]); })) : empty('Пока пусто.')]));
  w.appendChild(h('button', { class:'btn red', text:'Удалить заявку', onclick:function(){ if (confirm('Удалить заявку?')){ S.deals.splice(S.deals.indexOf(d), 1); save(); go('crm'); } } }));
};
/* ================= АНАЛИТИКА ================= */
var stP = 30;
V.stats = function(w){
  title('Аналитика продаж');
  var seg = h('div', { class:'seg' }); [[30, '30 дней'], [90, '3 месяца'], [365, 'Год'], [0, 'Всё время']].forEach(function(x){ seg.appendChild(h('button', { class:x[0] === stP ? 'on' : '', text:x[1], onclick:function(){ stP = x[0]; go('stats'); } })); }); w.appendChild(seg);
  var from = stP ? new Date(Date.now() - stP * 864e5).toISOString().slice(0, 10) : '', L = S.deals.filter(function(d){ return !from || d.at >= from; });
  var dog = L.filter(function(d){ return d.stage === 'Договор'; }), fr = L.filter(function(d){ return d.firstAt && d.ts; }).map(function(d){ return (d.firstAt - d.ts) / 6e4; }).sort(function(a, b){ return a - b; }), med = fr.length ? fr[Math.floor(fr.length / 2)] : 0;
  w.appendChild(h('div', { class:'grid4' }, [kpi(num(L.length, 0), 'заявок'), kpi(num(dog.length, 0) + ' · ' + (L.length ? Math.round(dog.length / L.length * 100) : 0) + '%', 'договоров · конверсия'), kpi(rub(dog.reduce(function(a, d){ return a + (+d.sum || 0); }, 0)), 'сумма договоров', 'g'), kpi(fr.length ? ago(Math.round(med)) : '—', 'первый ответ (медиана)', med && med <= 15 ? 'g' : med ? 'r' : '')]));
  /* по дням */
  var days = Math.min(stP || 60, 60), cnt = {}, mx = 1; L.forEach(function(d){ cnt[d.at] = (cnt[d.at] || 0) + 1; }); var ks = []; for (var i = days - 1; i >= 0; i--){ var k = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10); ks.push(k); mx = Math.max(mx, cnt[k] || 0); }
  w.appendChild(card('Заявки по дням', [h('div', { class:'dchart' }, ks.map(function(k){ return h('i', { title:fdate(k) + ': ' + (cnt[k] || 0), style:'height:' + Math.round((cnt[k] || 0) / mx * 100) + '%' }); }))]));
  /* воронка */
  var fun = STAGES.slice(0, 6).map(function(st, i){ return [st, L.filter(function(d){ return (d.maxSt || STAGES.indexOf(d.stage)) >= i && (i === 0 || d.stage !== 'Отказ' || (d.maxSt || 0) >= i); }).length]; });
  w.appendChild(card('Воронка', [h('div', { class:'fun' }, fun.map(function(f){ return h('div', { class:'fr' }, [h('span', { text:f[0] }), h('div', {}, [h('i', { style:'width:' + (L.length ? f[1] / L.length * 100 : 0) + '%' })]), h('b', { text:f[1] + (L.length ? ' · ' + Math.round(f[1] / L.length * 100) + '%' : '') })]); }))]));
  function grp(key, lab){ var G = {}; L.forEach(function(d){ var k = (typeof key === 'function' ? key(d) : d[key]) || '—'; var o = G[k] || (G[k] = { n:0, dog:0, sum:0, fr:[] }); o.n++; if (d.stage === 'Договор'){ o.dog++; o.sum += +d.sum || 0; } if (d.firstAt && d.ts) o.fr.push((d.firstAt - d.ts) / 6e4); }); return Object.keys(G).sort(function(a, b){ return G[b].n - G[a].n; }).map(function(k){ var o = G[k], f = o.fr.sort(function(a, b){ return a - b; }); return [k, o.n, o.dog, o.n ? Math.round(o.dog / o.n * 100) + '%' : '—', rub(o.sum), f.length ? ago(Math.round(f[Math.floor(f.length / 2)])) : '—']; }); }
  w.appendChild(card('Источники и рекламные кампании', [L.length ? table(['Источник', 'Заявки', 'Договоры', 'Конверсия', 'Сумма', 'Первый ответ'], grp(function(d){ return d.src + (d.camp ? ' · ' + d.camp : ''); }), [1, 2, 3, 4]) : empty('Нет заявок за период.')]));
  w.appendChild(card('Менеджеры', [L.length ? table(['Менеджер', 'Заявки', 'Договоры', 'Конверсия', 'Сумма', 'Первый ответ'], grp(function(d){ return d.mgr ? crewName(d.mgr) : 'не назначен'; }), [1, 2, 3, 4]) : empty('—')]));
  var lost = {}; L.forEach(function(d){ if (d.stage === 'Отказ'){ var k = d.lost || 'не указана'; lost[k] = (lost[k] || 0) + 1; } }); var lk = Object.keys(lost).sort(function(a, b){ return lost[b] - lost[a]; });
  w.appendChild(card('Почему отказываются', [lk.length ? h('div', { class:'fun' }, lk.map(function(k){ return h('div', { class:'fr' }, [h('span', { text:k }), h('div', {}, [h('i', { class:'r', style:'width:' + lost[k] / lost[lk[0]] * 100 + '%' })]), h('b', { text:lost[k] })]); })) : empty('Отказов нет.')]));
};

/* ================= КЛИЕНТЫ ================= */
V.clients = function(w){
  title('Клиенты');
  $('#barR').appendChild(btn('plus', 'Клиент', '', function(){ var c = newClient(); save(); go('client', c.id); }));
  var q = h('input', { type:'search', placeholder:'Поиск по имени или телефону…' }), box = h('div');
  function draw(){ box.innerHTML = ''; var s = q.value.toLowerCase(); var L = S.clients.filter(function(c){ return !s || (c.name + ' ' + c.phone).toLowerCase().indexOf(s) > -1; });
    if (!L.length){ box.appendChild(empty('Клиентов пока нет — они появляются из заявок.')); return; }
    box.appendChild(table(['Клиент', 'Телефон', 'Заявки', 'Объекты', 'Сумма объектов'], L.map(function(c){ var ob = S.objs.filter(function(o){ return o.cid === c.id; }); return [h('a', { href:'#', text:c.name, onclick:function(e){ e.preventDefault(); go('client', c.id); } }), c.phone, S.deals.filter(function(d){ return d.cid === c.id; }).length, ob.length, rub(ob.reduce(function(a, o){ return a + objCalc(o).total; }, 0))]; }), [2, 3, 4])); }
  q.oninput = draw; w.appendChild(card(null, [q, box])); draw();
};
V.client = function(w, id){
  var c = byId(S.clients, id); if (!c){ go('clients'); return; } title('Клиент: ' + c.name);
  $('#barR').appendChild(btn('', '← Все клиенты', 'lt', function(){ go('clients'); }));
  w.appendChild(card('Данные', [clientFields(c), h('div', { class:'grid2' }, [field('Почта', inp(c, 'email', 'email')), field('Адрес объекта', inp(c, 'addr'))]), field('Заметки', area(c, 'note'))]));
  var D2 = S.deals.filter(function(d){ return d.cid === c.id; }), O = S.objs.filter(function(o){ return o.cid === c.id; });
  w.appendChild(card('Заявки и объекты', [D2.length || O.length ? table(['Что', 'Статус', 'Сумма', ''], D2.map(function(d){ return ['Заявка ' + fdate(d.at), d.stage, d.sum ? rub(d.sum) : '', btn('', 'Открыть', 'lt xs', function(){ go('deal', d.id); })]; }).concat(O.map(function(o){ return [o.name, o.status, rub(objCalc(o).total), btn('', 'Открыть', 'lt xs', function(){ go('obj', o.id); })]; })), [2]) : empty('Пока ничего.')]));
  w.appendChild(h('button', { class:'btn red', text:'Удалить клиента', onclick:function(){ if (O.length || D2.length) return toast('Сначала удалите его заявки и объекты'); if (confirm('Удалить?')){ S.clients.splice(S.clients.indexOf(c), 1); save(); go('clients'); } } }));
};

/* ================= ОБЪЕКТЫ И СМЕТЫ ================= */
var OST = ['Черновик', 'Отправлена', 'Утверждена', 'В работе', 'Сдан', 'Отказ'];
function isDraft(o){ return o.status === 'Черновик' || o.status === 'Отправлена'; }
function newObj(deal, quiet){
  var c = deal ? client(deal.cid) : newClient();
  var o = { id:uid(), num:S.set.num++, name:(c.addr || c.name || 'Объект') + (deal && deal.what ? ' · ' + deal.what : ''), cid:c.id, addr:c.addr || '', status:'Черновик', at:today(), disc:0, rooms:[], stages:D.stages.map(function(s){ return { id:uid(), name:s[0], pct:s[1], plan:'', done:false, paid:false }; }), pays:[], prorab:'', note:'' };
  S.objs.unshift(o); logA('Новая смета №' + o.num); save(); if (!quiet) go('obj', o.id); return o;
}
V.objs = function(w){
  title('Объекты и сметы');
  $('#barR').appendChild(btn('plus', 'Новая смета', '', function(){ newObj(); }));
  var f = { st:'Все' }, box = h('div');
  var seg = h('div', { class:'seg' }); ['Все'].concat(OST).forEach(function(s){ var n = s === 'Все' ? S.objs.length : S.objs.filter(function(o){ return o.status === s; }).length; seg.appendChild(h('button', { class:s === 'Все' ? 'on' : '', text:s + ' ' + n, onclick:function(e){ $$('button', seg).forEach(function(b){ b.classList.remove('on'); }); e.target.classList.add('on'); f.st = s; draw(); } })); });
  function draw(){ box.innerHTML = ''; var L = S.objs.filter(function(o){ return f.st === 'Все' || o.status === f.st; });
    if (!L.length){ box.appendChild(empty('Здесь пока пусто. Нажмите «Новая смета».')); return; }
    box.appendChild(table(['№', 'Объект', 'Клиент', 'Статус', 'Площадь', 'Сумма', 'Оплачено', 'Прибыль (план)'], L.map(function(o){ var C = objCalc(o); return [o.num, h('a', { href:'#', text:o.name, onclick:function(e){ e.preventDefault(); go('obj', o.id); } }), client(o.cid).name, h('span', { class:'st st' + OST.indexOf(o.status), text:o.status }), num(C.area, 1) + ' м²', rub(C.total), rub(C.inc), rub(C.planProfit)]; }), [0, 4, 5, 6, 7])); }
  w.appendChild(seg); w.appendChild(card(null, [box])); draw();
};
var OTABS = [['smeta', 'Смета'], ['docs', 'Документы'], ['stages', 'Этапы и график'], ['money', 'Деньги'], ['mats', 'Материалы'], ['team', 'Мастера'], ['client', 'Кабинет клиента']];
V.obj = function(w, a){
  var p = String(a || '').split('|'), o = byId(S.objs, p[0]); if (!o){ go('objs'); return; } var tab = p[1] || 'smeta';
  title('№' + o.num + ' · ' + o.name);
  $('#barR').appendChild(btn('', '← Объекты', 'lt', function(){ go('objs'); }));
  var C = objCalc(o);
  var head = card(null, [h('div', { class:'grid4' }, [field('Название объекта', inp(o, 'name', 'text', function(){ title('№' + o.num + ' · ' + o.name); })), field('Статус', sel(o, 'status', OST, function(v){ if ((v === 'Договор' || v === 'В работе') && !o.contractAt) o.contractAt = today(); logA('Объект №' + o.num + ' → ' + v); save(); })), field('Клиент', sel(o, 'cid', S.clients.map(function(c){ return [c.id, c.name + (c.phone ? ' · ' + c.phone : '')]; }))), ]), h('div', { class:'grid4' }, [field('Прораб', sel(o, 'prorab', [['', '—']].concat(S.crew.map(function(c){ return [c.id, c.name + ' · ' + payName(c)]; })))), field('Менеджер', sel(o, 'manager', [['', '—']].concat(S.crew.map(function(c){ return [c.id, c.name + ' · ' + payName(c)]; })))), field('Дизайнер', sel(o, 'designer', [['', '—']].concat(S.crew.map(function(c){ return [c.id, c.name]; })))), h('span')]),
    h('div', { class:'grid4' }, [field('Адрес', inp(o, 'addr')), field('Начало', inp(o, 'start', 'date')), field('Сдача (план)', inp(o, 'end', 'date')), h('span')])]);
  if (o.approved && Math.round(C.total) !== o.approved.total) w.appendChild(h('div', { class:'hint y', html:'Смета изменена после утверждения клиентом (было ' + rub(o.approved.total) + ', стало ' + rub(C.total) + '). Оформите доп. соглашение во вкладке «Документы».' }));
  w.appendChild(head);
  var tabs = h('div', { class:'tabs' }); OTABS.forEach(function(t){ tabs.appendChild(h('button', { class:t[0] === tab ? 'on' : '', text:t[1], onclick:function(){ go('obj', o.id + '|' + t[0]); } })); });
  w.appendChild(tabs);
  var totBox = h('div', { class:'tot' });
  function refreshTot(){ C = objCalc(o); totBox.innerHTML = '';
    function row(t, v, cls){ totBox.appendChild(h('div', { class:cls || '' }, [h('span', { text:t }), h('b', { text:rub(v) })])); }
    row('Работы' + (+o.wm ? ' (вкл. наценку ' + o.wm + '%)' : ''), C.works); row('Материалы' + (o.noMats ? ' — не включены' : ' (+' + C.mm + '%)'), C.mats); if (C.disc) totBox.appendChild(h('div', { class:'disc' }, [h('span', { text:discText(o) }), h('b', { text:'−' + rub(C.disc) })])); row('Итого клиенту', C.total, 'big');
    row('За м² пола (' + num(C.area, 1) + ' м²)', C.perM, 'muted');
    totBox.appendChild(h('div', { class:'sep' }));
    row('Мастера по смете', C.master, 'muted'); if (C.rolesPlan) row('Прораб / менеджер', C.rolesPlan, 'muted'); row('Материалы — закупка', C.matsCost, 'muted');
    totBox.appendChild(h('div', { class:'muted' }, [h('span', { text:'Прибыль по смете' }), h('b', { class:C.planProfit >= 0 ? 'ok' : 'bad', text:rub(C.planProfit) + (C.total ? ' · ' + Math.round(C.planProfit / C.total * 100) + '%' : '') })])); }
  (OTF[tab] || OTF.smeta)(w, o, totBox, refreshTot);
  refreshTot();
  if (tab === 'smeta') w.appendChild(h('div', { class:'row' }, [btn('copy', 'Копия сметы', 'lt', function(){ var n = clone(o); n.id = uid(); n.num = S.set.num++; n.name += ' (копия)'; n.status = 'Черновик'; delete n.approved; n.pays = []; n.stages.forEach(function(s){ s.done = s.paid = false; }); S.objs.unshift(n); save(); go('obj', n.id); }), h('span', { class:'sp' }), h('button', { class:'btn red', text:'Удалить объект', onclick:function(){ if (confirm('Удалить объект и смету безвозвратно?')){ S.objs.splice(S.objs.indexOf(o), 1); S.deals.forEach(function(d){ if (d.oid === o.id) d.oid = null; }); save(); go('objs'); } } })]));
};
/* --- смета: комнаты и работы --- */
function catOptions(){ var g = {}; S.cat.works.forEach(function(w){ (g[w.sec] = g[w.sec] || []).push(w); }); var s = h('select', { class:'addw' }); s.appendChild(h('option', { value:'', text:'+ Добавить работу…' })); Object.keys(g).forEach(function(k){ var og = h('optgroup', { label:k }); g[k].forEach(function(w){ og.appendChild(h('option', { value:w.id, text:w.name + ' — ' + num(w.price, 0) + ' ₽/' + w.unit })); }); s.appendChild(og); }); s.appendChild(h('option', { value:'__custom', text:'Своя работа (вне справочника)…' })); return s; }
function lineFrom(w){ return { id:uid(), wid:w.id, name:w.name, unit:w.unit, price:w.price, mprice:w.mprice, geo:w.geo || '', qty:w.geo ? 0 : 1, manual:false, who:'', done:false }; }
/* --- смета: удобный редактор --- */
var SEC2ROLE = { 'Плитка':['Плиточник'], 'Электрика':['Электрик'], 'Сантехника':['Сантехник'], 'Стены':['Маляр', 'Мастер-универсал'], 'Потолок':['Маляр', 'Монтажник ГКЛ', 'Мастер-универсал'], 'Пол':['Мастер-универсал'], 'Демонтаж':['Подсобник', 'Мастер-универсал'], 'Двери и окна':['Мастер-универсал'], 'Прочее':['Подсобник', 'Мастер-универсал'] };
function lineSec(ln){ var w = workCat(ln.wid); return w ? w.sec : 'Прочее'; }
function autoAssign(o, force){ var n = 0; o.rooms.forEach(function(r){ r.lines.forEach(function(l){ if (l.who && !force) return; var roles = SEC2ROLE[lineSec(l)] || ['Мастер-универсал']; for (var i = 0; i < roles.length; i++){ var c = S.crew.filter(function(x){ return x.role === roles[i] && !x.to; })[0]; if (c){ l.who = c.id; n++; break; } } }); }); return n; }
function quickCrew(cb){ var n = prompt('Имя нового сотрудника'); if (!n) return; var roleI = prompt('Должность: ' + ROLES.map(function(r, i){ return (i + 1) + ' — ' + r; }).join(', ') + '\nВпишите номер', '4'); var role = ROLES[(+roleI || 4) - 1] || 'Мастер-универсал'; var c = { id:uid(), name:n, role:role, phone:'', brig:'', note:'', from:today() }; payOf(c); S.crew.push(c); logA('Новый сотрудник: ' + n); save(); toast('Добавлен: ' + n + ' (' + role + '). Схему оплаты можно поменять в «Сотрудниках»'); cb(c); }
function whoSelect(val, onch, allowNew){ var s = h('select', { class:'wsel' }); s.appendChild(h('option', { value:'', text:'— мастер —' })); S.crew.filter(function(c){ return !c.to || c.id === val; }).forEach(function(c){ s.appendChild(h('option', { value:c.id, text:c.name + ' · ' + c.role })); }); if (allowNew !== false) s.appendChild(h('option', { value:'__new', text:'+ Новый сотрудник…' })); s.value = val || '';
  s.onchange = function(){ if (s.value === '__new'){ s.value = val || ''; quickCrew(function(c){ onch(c.id, true); }); return; } onch(s.value); }; return s; }
function workSearch(onPick){
  var dl = h('datalist', { id:'wl' + uid() }); S.cat.works.forEach(function(w){ dl.appendChild(h('option', { value:w.name, label:w.sec + ' · ' + num(w.price, 0) + ' ₽/' + w.unit })); });
  var i = h('input', { type:'search', class:'wsrch', placeholder:'Найти работу и нажать Enter…', list:dl.id });
  function pick(){ var v = i.value.trim(); if (!v) return; var w = S.cat.works.filter(function(x){ return x.name.toLowerCase() === v.toLowerCase(); })[0] || S.cat.works.filter(function(x){ return x.name.toLowerCase().indexOf(v.toLowerCase()) > -1; })[0]; if (w) onPick(w); else if (confirm('Работы «' + v + '» нет в справочнике. Добавить как свою?')) onPick(null, v); i.value = ''; }
  i.onkeydown = function(e){ if (e.key === 'Enter'){ e.preventDefault(); pick(); } }; i.onchange = function(){ if (S.cat.works.some(function(x){ return x.name === i.value; })) pick(); };
  return h('span', { class:'wsw' }, [ic('plus'), i, dl]);
}

function packItems(k){ var P = allPacks()[k] || []; return P.map(function(x){ return typeof x === 'string' ? { n:x } : x; }); }
function packApply(r, k){ var n = 0; packItems(k).forEach(function(it){ var w = S.cat.works.filter(function(x){ return x.name === it.n; })[0]; if (!w || r.lines.some(function(l){ return l.wid === w.id; })) return; var ln = lineFrom(w); if (!w.geo && it.q) ln.qty = +it.q; r.lines.push(ln); n++; }); return n; }
function addPack(r, k){ toast('Добавлено работ: ' + packApply(r, k)); }
function allPacks(){ if (!S.packsInit){ S.packs = S.packs || {}; Object.keys(D.packs).forEach(function(k){ if (!S.packs[k]) S.packs[k] = D.packs[k].map(function(n){ return { n:n }; }); }); S.packsInit = 1; } return S.packs; }
function dlg(titleText, kids, wide){ var box = h('div', { class:'dlg' }), c = card(h('h3', {}, [titleText, h('span', { class:'sp' }), h('button', { class:'x', text:'×', onclick:function(){ box.remove(); } })]), kids, wide ? 'wide' : ''); box.appendChild(c); box.onclick = function(e){ if (e.target === box) box.remove(); }; document.body.appendChild(box); return box; }
function packPicker(r, after, o){
  var P = allPacks(), list = h('div', { class:'col' }), f = { all:false };
  Object.keys(P).forEach(function(k){ var it = packItems(k); list.appendChild(h('button', { class:'pk', onclick:function(){ var n = 0; if (f.all && o) o.rooms.forEach(function(rr){ n += packApply(rr, k); }); else n = packApply(r, k); box.remove(); after(); toast('Добавлено работ: ' + n); } }, [h('b', { text:k + ' · ' + it.length + ' работ' }), h('small', { text:it.slice(0, 6).map(function(x){ return x.n + (x.q ? ' (' + x.q + ')' : ''); }).join(', ') + (it.length > 6 ? '…' : '') })])); });
  var allC = h('input', { type:'checkbox' }); allC.onchange = function(){ f.all = allC.checked; };
  var box = dlg('Набор работ → «' + r.name + '»', [o && o.rooms.length > 1 ? h('label', { class:'chk' }, [allC, 'Применить ко всем помещениям сметы']) : null, list, h('div', { class:'row' }, [btn('plus', 'Сохранить работы помещения как набор', 'lt', function(){ if (!r.lines.length) return toast('В помещении пока нет работ'); var n = prompt('Название набора', r.name + ' — мой набор'); if (!n) return; S.packs[n] = r.lines.map(function(l){ return { n:l.name, q:l.geo ? '' : (+l.qty || '') }; }); save(); box.remove(); toast('Набор сохранён'); }), btn('book', 'Редактор наборов', 'lt', function(){ box.remove(); go('cat', 'packs'); })]), h('small', { class:'muted', text:'Работы, которые уже есть в помещении, не дублируются. Объёмы «из размеров» подставятся сами, у штучных — количество из набора.' })]);
}
function catPicker(r, after, onAdd){
  var secs = []; S.cat.works.forEach(function(w){ if (secs.indexOf(w.sec) < 0) secs.push(w.sec); });
  var cur = { sec:secs[0], q:'' }, picked = {}, listBox = h('div', { class:'cpl' }), cnt = h('b');
  var tabs = h('div', { class:'cps' });
  function drawTabs(){ tabs.innerHTML = ''; secs.forEach(function(sc){ var n = S.cat.works.filter(function(w){ return w.sec === sc && picked[w.id]; }).length; tabs.appendChild(h('button', { class:sc === cur.sec && !cur.q ? 'on' : '', onclick:function(){ cur.sec = sc; cur.q = ''; qi.value = ''; drawTabs(); drawList(); } }, [sc, n ? h('span', { class:'badge g', text:n }) : null])); }); }
  function drawList(){ listBox.innerHTML = ''; var q = cur.q.toLowerCase(); var L = S.cat.works.filter(function(w){ return q ? (w.name + ' ' + w.sec).toLowerCase().indexOf(q) > -1 : w.sec === cur.sec; });
    if (!L.length) listBox.appendChild(empty('Ничего не найдено.'));
    L.forEach(function(w){ var has = (r.lines || []).some(function(l){ return l.wid === w.id; }), c = h('input', { type:'checkbox' }); c.checked = !!picked[w.id]; c.disabled = has; c.onchange = function(){ if (c.checked) picked[w.id] = 1; else delete picked[w.id]; upd(); drawTabs(); };
      listBox.appendChild(h('label', { class:'cpi' + (has ? ' has' : '') }, [c, h('span', { class:'cpn' }, [h('b', { text:w.name }), h('small', { text:(q ? w.sec + ' · ' : '') + (w.geo ? 'считается из размеров' : 'кол-во вручную') + (has ? ' · уже в помещении' : '') })]), h('span', { class:'cpp', text:num(w.price, 0) + ' ₽/' + w.unit })])); }); }
  function upd(){ var n = Object.keys(picked).length; cnt.textContent = n; addB.disabled = !n; }
  var qi = h('input', { type:'search', placeholder:'Поиск по всему справочнику…' }); qi.oninput = function(){ cur.q = qi.value; drawTabs(); drawList(); };
  var addB = btn('plus', 'Добавить выбранные', '', function(){ S.cat.works.forEach(function(w){ if (picked[w.id]){ if (onAdd) onAdd(w); else r.lines.push(lineFrom(w)); } }); box.remove(); after(); toast('Добавлено работ: ' + Object.keys(picked).length); });
  var box = dlg('Справочник работ → «' + r.name + '»', [qi, h('div', { class:'cpw' }, [tabs, listBox]), h('div', { class:'row' }, [h('span', { class:'muted', text:'Выбрано: ' }), cnt, h('span', { class:'sp' }), addB])], true);
  drawTabs(); drawList(); upd(); setTimeout(function(){ qi.focus(); }, 50);
}
function tabSmeta(w, o, totBox, refreshTot){
  S.set.showPay = S.set.showPay !== false;
  var lay = h('div', { class:'sm-lay' }), main = h('div'), side = h('div', { class:'sm-side' });
  lay.appendChild(main); lay.appendChild(side); w.appendChild(lay);
  var teamBox = h('div');
  function drawTeam(){ var C = objCalc(o); teamBox.innerHTML = ''; var ks = Object.keys(C.byMaster).sort(function(a, b){ return C.byMaster[b].all - C.byMaster[a].all; });
    if (!ks.length){ teamBox.appendChild(empty('Назначьте мастеров на работы — здесь появится, кто сколько заработает.')); return; }
    ks.forEach(function(k){ var b = C.byMaster[k], c = byId(S.crew, k); teamBox.appendChild(h('div', { class:'tm' + (k ? '' : ' none') }, [h('div', {}, [h('b', { text:c ? c.name : 'Не назначен' }), h('small', { text:c ? payName(c) : 'по ставкам справочника' })]), h('div', { class:'n' }, [h('b', { text:rub(b.all) }), h('small', { text:b.earned ? 'сделано на ' + rub(b.earned) : '' })])])); });
    teamBox.appendChild(h('div', { class:'tm tot2' }, [h('b', { text:'Всего зарплаты' }), h('b', { text:rub(C.labor) })])); }
  var rt = function(){ refreshTot(); drawTeam(); };
  side.appendChild(card('Итог сметы', [totBox, h('label', { class:'chk' }, [(function(){ var c = h('input', { type:'checkbox' }); c.checked = !o.noMats; c.onchange = function(){ o.noMats = !c.checked; save(); rt(); }; return c; })(), 'Материалы закупаем мы'])]));
  side.appendChild(card(h('h3', {}, ['Зарплаты по смете', h('span', { class:'sp' }), btn('', 'Расставить', 'lt xs', function(){ if (!S.crew.length) return toast('Сначала добавьте сотрудников'); var n = autoAssign(o); save(); toast(n ? 'Назначено работ: ' + n : 'Нет свободных строк или подходящих мастеров'); go('obj', o.id); })]), [teamBox, h('small', { class:'muted', text:'«Расставить» — назначит мастеров на работы без исполнителя по специальности: плитка — плиточнику, электрика — электрику и т. д.' })]));
  var oS = function(){ save(); rt(); };
  side.appendChild(card('Наценки и скидка', [
    h('div', { class:'grid2' }, [field('Наценка на работы, %', inp(o, 'wm', 'number', oS), 'срочность, сложность'), field('Наценка на материалы, %', inp(o, 'mm', 'number', oS, { placeholder:String(S.set.markup) }), 'пусто — ' + S.set.markup + '% из справочника')]),
    h('div', { class:'grid2' }, [field('Скидка', inp(o, 'disc', 'number', oS)), field('В чём', sel(o, 'discType', [['pct', '%'], ['rub', '₽']], oS))]),
    h('div', { class:'grid2' }, [field('На что', sel(o, 'discOn', [['all', 'на всё'], ['works', 'на работы'], ['mats', 'на материалы']], oS)), field('Причина', inp(o, 'discWhy', 'text', oS, { placeholder:'постоянному клиенту' }))])]));
  side.appendChild(card('Документы', [h('div', { class:'col' }, [btn('pdf', 'Смета клиенту — PDF', '', function(){ pdfDialog(o); }), btn('xls', 'Смета клиенту — Excel', 'lt', function(){ xlsClient(o); }), btn('xls', 'Задание мастерам — Excel', 'lt', function(){ xlsMasters(o); }), btn('cart', 'Закупка материалов — Excel', 'lt', function(){ xlsBuy(o); }), btn('link', 'Ссылка для клиента', 'lt', function(){ go('obj', o.id + '|client'); })])]));
  /* версии */
  o.vers = o.vers || [];
  side.appendChild(card('Версии сметы', [o.vers.length ? h('div', { class:'col' }, o.vers.slice().reverse().map(function(v){ return h('div', { class:'tm' }, [h('div', {}, [h('b', { text:v.name }), h('small', { text:fdate(v.at) + ' · ' + rub(v.total) })]), btn('', 'Вернуть', 'lt xs', function(){ if (!confirm('Вернуть смету к версии «' + v.name + '»? Текущее состояние сохраню отдельной версией.')) return; o.vers.push({ name:'Перед возвратом', at:new Date().toISOString(), total:Math.round(objCalc(o).total), rooms:clone(o.rooms) }); o.rooms = clone(v.rooms); save(); go('obj', o.id); })]); })) : empty('Сохраняйте версию перед торгом с клиентом — можно вернуться.'),
    btn('copy', 'Сохранить версию', 'lt', function(){ var n = prompt('Название версии', 'Вариант ' + (o.vers.length + 1)); if (!n) return; o.vers.push({ name:n, at:new Date().toISOString(), total:Math.round(objCalc(o).total), rooms:clone(o.rooms) }); o.vers = o.vers.slice(-15); save(); go('obj', o.id); })]));
  /* панель инструментов */
  var pay = h('input', { type:'checkbox' }); pay.checked = S.set.showPay; pay.onchange = function(){ S.set.showPay = pay.checked; save(); go('obj', o.id); };
  var allWho = whoSelect('', function(v){ if (!v) return; o.rooms.forEach(function(r){ r.lines.forEach(function(l){ l.who = v; }); }); save(); go('obj', o.id); });
  allWho.options[0].text = 'Мастер на всю смету…';
  main.appendChild(h('div', { class:'smbar' }, [h('label', { class:'chk' }, [pay, 'Показывать зарплаты и маржу']), allWho,
    btn('', o.collapsed ? 'Развернуть всё' : 'Свернуть всё', 'lt xs', function(){ o.collapsed = !o.collapsed; o.rooms.forEach(function(r){ r.fold = o.collapsed; }); save(); go('obj', o.id); }),
    btn('', o.bySec ? 'Без разделов' : 'По разделам', 'lt xs', function(){ o.bySec = !o.bySec; if (o.bySec){ var ord = {}; S.cat.works.forEach(function(w2, i){ if (ord[w2.sec] == null) ord[w2.sec] = i; }); o.rooms.forEach(function(r){ r.lines.sort(function(x, y){ return (ord[lineSec(x)] || 999) - (ord[lineSec(y)] || 999); }); }); } save(); go('obj', o.id); }),
    btn('', 'Обновить цены из справочника', 'lt xs', function(){ if (!confirm('Подставить во все строки текущие цены и ставки из справочника?')) return; var n = 0; o.rooms.forEach(function(r){ r.lines.forEach(function(l){ var c = workCat(l.wid); if (c){ l.price = c.price; l.mprice = c.mprice; n++; } }); }); logA('№' + o.num + ': цены обновлены из справочника'); save(); toast('Обновлено строк: ' + n); go('obj', o.id); })]));
  var roomsBox = h('div');
  function drawRooms(){ roomsBox.innerHTML = ''; (o.rooms || []).forEach(function(r, ri){ roomsBox.appendChild(roomCard(o, r, ri, drawRooms, rt)); }); if (!o.rooms.length) roomsBox.appendChild(card(null, [empty('Добавьте первое помещение: размеры → программа сама посчитает площади пола, стен и потолка.')])); }
  var nr = sel({ v:'' }, 'v', [['', '+ Помещение…']].concat(D.rooms));
  nr.onchange = function(){ if (!nr.value) return; o.rooms.push({ id:uid(), name:nr.value, l:'', w:'', h:2.7, op:[{ w:0.8, h:2.0 }], lines:[] }); save(); drawRooms(); rt(); nr.value = ''; };
  main.appendChild(roomsBox); main.appendChild(h('div', { class:'row' }, [nr]));
  drawRooms(); drawTeam();
}

var SHAPES = {
  'Г-образная':[[5, 90], [3, 90], [2, -90], [2, 90], [3, 90], [5, 0]],
  'П-образная':[[6, 90], [4, 90], [2, 90], [2, -90], [2, -90], [2, 90], [2, 90], [4, 0]],
  'Эркер / срезанный угол':[[4, 90], [3, 45], [1.41, 45], [3, 90], [4, 0]],
  'Треугольник':[[4, 90], [3, 0]],
  'Трапеция':[[5, 90], [3, 45], [2.83, 45], [3, 90], [5, 0]]
};
var TURNS = [[90, '↰ налево 90°'], [-90, '↱ направо 90°'], [45, '↰ налево 45°'], [-45, '↱ направо 45°'], [135, '↰ налево 135°'], [-135, '↱ направо 135°'], [60, '↰ налево 60°'], [-60, '↱ направо 60°'], [120, '↰ налево 120°'], [-120, '↱ направо 120°'], [30, '↰ налево 30°'], [-30, '↱ направо 30°']];
function polySvg(r){ var g = polyGeo(r), P = g.pts.slice(); if (P.length < 3) return h('div', { class:'muted sm', text:'Добавьте хотя бы 2 стены' });
  var xs = P.map(function(p){ return p[0]; }), ys = P.map(function(p){ return p[1]; }), mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys), W = 300, H = 200, pad = 28, k = Math.min((W - 2 * pad) / Math.max(mxx - mnx, .1), (H - 2 * pad) / Math.max(mxy - mny, .1));
  function X(p){ return pad + (p[0] - mnx) * k; } function Y(p){ return H - pad - (p[1] - mny) * k; }
  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="psvg"><polygon points="' + P.map(function(p){ return X(p).toFixed(1) + ',' + Y(p).toFixed(1); }).join(' ') + '" />';
  for (var i = 0; i < P.length; i++){ var a = P[i], b = P[(i + 1) % P.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]); if (len < .01) continue; var mx = (X(a) + X(b)) / 2, my = (Y(a) + Y(b)) / 2; svg += '<circle cx="' + X(a).toFixed(1) + '" cy="' + Y(a).toFixed(1) + '" r="3"/><text x="' + mx.toFixed(1) + '" y="' + (my - 4).toFixed(1) + '">' + (i + 1) + ': ' + num(len) + '</text>'; }
  svg += '</svg>'; return h('div', { class:'psw', html:svg }); }
function shapeEditor(r, onGeo){
  var box = h('div', { class:'shape' }), mode = r.mode || 'rect';
  var seg = h('div', { class:'seg sm' }); [['rect', 'Прямоугольная'], ['poly', 'Любая форма (по стенам)'], ['area', 'Знаю площадь']].forEach(function(m){ seg.appendChild(h('button', { class:mode === m[0] ? 'on' : '', text:m[1], onclick:function(){ r.mode = m[0]; if (m[0] === 'poly' && !(r.poly || []).length){ var l = +r.l || 4, w = +r.w || 3; r.poly = [{ len:l, turn:90 }, { len:w, turn:90 }, { len:l, turn:90 }, { len:w, turn:0 }]; } if (m[0] === 'area' && !r.af) r.af = r2((+r.l || 0) * (+r.w || 0)) || ''; save(); var nb = shapeEditor(r, onGeo); box.replaceWith(nb); onGeo(); } })); });
  box.appendChild(seg);
  var hI = field('Высота потолка, м', inp(r, 'h', 'number', onGeo, { step:'0.01' }));
  if (mode === 'rect') box.appendChild(h('div', { class:'dims' }, [ic('ruler'), field('Длина, м', inp(r, 'l', 'number', onGeo, { step:'0.01' })), h('span', { class:'x', text:'×' }), field('Ширина, м', inp(r, 'w', 'number', onGeo, { step:'0.01' })), h('span', { class:'x', text:'×' }), hI]));
  else if (mode === 'area') box.appendChild(h('div', { class:'dims' }, [field('Площадь пола, м²', inp(r, 'af', 'number', onGeo, { step:'0.01' })), field('Периметр, м', inp(r, 'ap', 'number', onGeo, { step:'0.01', placeholder:'≈ посчитаю' })), field('Площадь стен, м²', inp(r, 'aw', 'number', onGeo, { step:'0.01', placeholder:'посчитаю' })), field('Потолок, м²', inp(r, 'ac', 'number', onGeo, { step:'0.01', placeholder:'= пол' })), hI]));
  else {
    r.poly = r.poly || []; var pv = h('div'), lst = h('div', { class:'walls' });
    function redrawP(){ pv.innerHTML = ''; pv.appendChild(polySvg(r)); var g = polyGeo(r); var cl = $('.wclose', box); if (cl) cl.textContent = num(g.close) + ' м'; onGeo(); }
    function drawW(){ lst.innerHTML = ''; r.poly.forEach(function(w2, i){ var last = i === r.poly.length - 1;
      var t = sel(w2, 'turn', TURNS.map(function(x){ return [x[0], x[1]]; }), function(){ w2.turn = +w2.turn; redrawP(); }); t.value = String(w2.turn);
      lst.appendChild(h('div', { class:'wrow' }, [h('b', { text:'Стена ' + (i + 1) }), inp(w2, 'len', 'number', redrawP, { step:'0.01', placeholder:'м' }), h('span', { class:'muted sm', text:'м, затем' }), last ? h('span', { class:'muted sm', text:'—' }) : t, h('button', { class:'x', text:'×', onclick:function(){ r.poly.splice(i, 1); save(); drawW(); redrawP(); } })])); });
      lst.appendChild(h('div', { class:'wrow cl' }, [h('b', { text:'Стена ' + (r.poly.length + 1) }), h('span', { class:'wclose', text:num(polyGeo(r).close) + ' м' }), h('span', { class:'muted sm', text:'замыкающая — считается сама' })]));
      lst.appendChild(h('div', { class:'row' }, [btn('plus', 'Стена', 'lt xs', function(){ if (r.poly.length) r.poly[r.poly.length - 1].turn = r.poly[r.poly.length - 1].turn || 90; r.poly.push({ len:'', turn:0 }); save(); drawW(); redrawP(); })])); }
    var tp = h('div', { class:'row' }, [h('span', { class:'muted sm', text:'Шаблон:' })].concat(Object.keys(SHAPES).map(function(k){ return h('button', { class:'chip sm', text:k, onclick:function(){ r.poly = SHAPES[k].map(function(x){ return { len:x[0], turn:x[1] }; }); save(); drawW(); redrawP(); } }); })));
    box.appendChild(tp);
    box.appendChild(h('div', { class:'polyw' }, [h('div', {}, [h('small', { class:'muted', text:'Идите вдоль стен по кругу: длина стены и куда поворачиваете после неё. Последняя стена посчитается сама.' }), lst, hI]), pv]));
    drawW(); redrawP();
  }
  return box;
}
function roomCard(o, r, ri, redraw, refreshTot){
  var g = geo(r), gBox = h('div', { class:'geo' }), body = h('div'), showPay = S.set.showPay;
  function gDraw(){ g = geo(r); gBox.innerHTML = ''; [['Пол', g.floor, 'м²'], ['Стены', g.wall, 'м²'], ['Потолок', g.ceil, 'м²'], ['Периметр', g.perim, 'м']].forEach(function(x){ gBox.appendChild(h('span', {}, [x[0] + ' ', h('b', { text:num(x[1]) }), ' ' + x[2]])); }); }
  var sumEl = h('b', { class:'rs' }), labEl = h('small', { class:'rl' });
  function rsum(){ var s = 0, lb = 0; r.lines.forEach(function(ln){ var q = qty(ln, r); s += q * lp(ln, o); lb += lineLabor(ln, q, o); }); sumEl.textContent = rub(s); labEl.textContent = showPay && s ? 'зарплата ' + rub(lb) + ' · маржа ' + Math.round((1 - lb / s) * 100) + '%' : r.lines.length + ' работ'; }
  function onGeo(){ gDraw(); $$('.ln', body).forEach(function(tr){ if (tr._upd) tr._upd(); }); rsum(); refreshTot(); }
  var nm = h('input', { type:'text', class:'rn', value:r.name }); nm.oninput = function(){ r.name = nm.value; save(); };
  var dims = shapeEditor(r, onGeo);
  var opBox = h('div', { class:'ops' });
  function opDraw(){ opBox.innerHTML = ''; opBox.appendChild(h('span', { class:'muted sm', text:'Проёмы (окна, двери):' })); (r.op || []).forEach(function(op, i){ opBox.appendChild(h('span', { class:'op' }, [inp(op, 'w', 'number', onGeo, { step:'0.01' }), '×', inp(op, 'h', 'number', onGeo, { step:'0.01' }), h('button', { class:'x', text:'×', onclick:function(){ r.op.splice(i, 1); save(); opDraw(); onGeo(); } })])); }); opBox.appendChild(h('button', { class:'btn lt xs', text:'+ окно', onclick:function(){ (r.op = r.op || []).push({ w:1.4, h:1.5 }); save(); opDraw(); onGeo(); } })); opBox.appendChild(h('button', { class:'btn lt xs', text:'+ дверь', onclick:function(){ (r.op = r.op || []).push({ w:0.8, h:2.0 }); save(); opDraw(); onGeo(); } })); }
  opDraw();
  function addW(w, custom){ if (w) r.lines.push(lineFrom(w)); else { var u = prompt('Единица измерения (м², шт, м.п.)', 'шт') || 'шт', pr2 = +prompt('Цена для клиента за ' + u, '0') || 0; r.lines.push({ id:uid(), wid:'', name:custom, unit:u, price:pr2, mprice:Math.round(pr2 * 0.55), geo:'', qty:1, manual:true, who:'', done:false }); } }
  function after(){ save(); drawLines(); rsum(); refreshTot(); }
  function drawLines(){ body.innerHTML = '';
    var list = h('div', { class:'lns' }), lastSec = null;
    r.lines.forEach(function(ln, li){ var sec = lineSec(ln); if (o.bySec && sec !== lastSec){ list.appendChild(h('div', { class:'secr', text:sec })); lastSec = sec; }
      var row = h('div', { class:'ln' + (ln.done ? ' dn' : '') + (ln.extra ? ' ex' : '') });
      var q = h('input', { type:'number', step:'0.01', class:'qi' + (ln.geo && !ln.manual ? ' auto' : ''), inputmode:'decimal' }); q.value = r2(qty(ln, r));
      var auto = ln.geo ? h('button', { class:'ab' + (ln.manual ? '' : ' on'), title:'Считать из размеров помещения', text:'авто', onclick:function(){ ln.manual = false; save(); q.classList.add('auto'); auto.classList.add('on'); upd(); } }) : null;
      q.oninput = function(){ ln.manual = true; ln.qty = +q.value; q.classList.remove('auto'); if (auto) auto.classList.remove('on'); save(); upd(); };
      var pr = h('input', { type:'number', class:'pi', inputmode:'decimal' }); pr.value = ln.price; pr.oninput = function(){ ln.price = +pr.value; save(); upd(); };
      var sm = h('b', { class:'lsum' }), lab = h('b', { class:'llab' });
      function upd(){ if (!ln.manual && ln.geo) q.value = r2(qty(ln, r)); var qq = qty(ln, r), s = qq * lp(ln, o), l = lineLabor(ln, qq, o); sm.textContent = rub(s); lab.textContent = rub(l); lab.title = s ? 'маржа ' + Math.round((1 - l / s) * 100) + '%' : ''; rsum(); refreshTot(); }
      row._upd = upd;
      var who = whoSelect(ln.who, function(v, isNew){ ln.who = v; save(); if (isNew) redraw(); else upd(); });
      var dn = h('input', { type:'checkbox' }); dn.checked = !!ln.done; dn.onchange = function(){ ln.done = dn.checked; ln.doneAt = dn.checked ? today() : ''; row.classList.toggle('dn', dn.checked); save(); refreshTot(); };
      var nmI = h('textarea', { class:'lname', rows:'1' }); nmI.value = ln.name; function grow(){ nmI.style.height = 'auto'; nmI.style.height = nmI.scrollHeight + 'px'; } nmI.oninput = function(){ ln.name = nmI.value; save(); grow(); }; setTimeout(grow, 0);
      var menu = h('select', { class:'lmenu', title:'Действия со строкой' }, [h('option', { value:'', text:'⋯' }), h('option', { value:'up', text:'↑ Выше' }), h('option', { value:'down', text:'↓ Ниже' }), h('option', { value:'dup', text:'Дублировать' }), h('option', { value:'note', text:'Комментарий для клиента' }), h('option', { value:'extra', text:ln.extra ? 'Убрать «доп. работа»' : 'Отметить как доп. работу' }), h('option', { value:'cat', text:'Цена из справочника' }), h('option', { value:'del', text:'Удалить' })]);
      menu.onchange = function(){ var a = menu.value; menu.value = ''; if (a === 'up' && li > 0){ r.lines.splice(li - 1, 0, r.lines.splice(li, 1)[0]); } else if (a === 'down' && li < r.lines.length - 1){ r.lines.splice(li + 1, 0, r.lines.splice(li, 1)[0]); } else if (a === 'dup'){ var c = clone(ln); c.id = uid(); c.done = false; r.lines.splice(li + 1, 0, c); } else if (a === 'note'){ var n = prompt('Комментарий (виден клиенту в смете)', ln.note || ''); if (n === null) return; ln.note = n; } else if (a === 'extra'){ ln.extra = !ln.extra; ln.extraAt = ln.extra ? today() : ''; } else if (a === 'cat'){ var cw = workCat(ln.wid); if (!cw) return toast('Этой работы нет в справочнике'); ln.price = cw.price; ln.mprice = cw.mprice; } else if (a === 'del'){ if (!confirm('Удалить «' + ln.name + '»?')) return; r.lines.splice(li, 1); } else return; after(); };
      function fld(lbl, el, cls){ return h('label', { class:'lf ' + (cls || '') }, [h('span', { text:lbl }), el]); }
      row.appendChild(h('div', { class:'ln-top' }, [h('span', { class:'lno', text:li + 1 }), h('div', { class:'ln-nm' }, [nmI, ln.extra ? h('span', { class:'exb', text:'доп. работа' }) : null, ln.note ? h('small', { class:'lnote', text:ln.note }) : null]), h('button', { class:'x', title:'Удалить', text:'×', onclick:function(){ if (confirm('Удалить «' + ln.name + '»?')){ r.lines.splice(li, 1); after(); } } }), menu]));
      row.appendChild(h('div', { class:'ln-f' }, [fld('Кол-во, ' + ln.unit, h('span', { class:'qw' }, [q, auto]), 'q'), fld(+o.wm ? 'Цена (+' + o.wm + '%)' : 'Цена, ₽', pr, 'p'), fld('Сумма', sm, 's'), fld('Мастер', who, 'w'), showPay ? fld('Зарплата', lab, 'z') : null, h('label', { class:'lf d' }, [h('span', { text:'Готово' }), dn])]));
      upd(); list.appendChild(row); });
    body.appendChild(list);
    /* добавление работ */
    var srch = workSearch(function(w, custom){ addW(w, custom); after(); setTimeout(function(){ var x = $('.wsrch', body); if (x) x.focus(); }, 30); });
    var rw = whoSelect('', function(v){ if (!v) return; r.lines.forEach(function(l){ l.who = v; }); after(); }); rw.options[0].text = 'Мастер на всё помещение…';
    var az = h('div', { class:'addz' }, [srch, h('div', { class:'row' }, [btn('book', 'Из справочника', 'lt', function(){ catPicker(r, after); }), btn('layers', 'Набор работ', 'lt', function(){ packPicker(r, after, o); }), btn('plus', 'Своя работа', 'lt', function(){ var n = prompt('Название работы'); if (n){ addW(null, n); after(); } }), rw])]);
    if (!r.lines.length) body.appendChild(h('div', { class:'packq' }, [h('b', { text:'Быстрый старт — набор работ:' })].concat(Object.keys(allPacks()).map(function(k){ return h('button', { class:'chip sm', text:k + ' · ' + packItems(k).length, onclick:function(){ addPack(r, k); after(); } }); })).concat([h('button', { class:'chip sm', text:'+ создать набор', onclick:function(){ go('cat', 'packs'); } })])));
    body.appendChild(az);
  }
  drawLines(); gDraw(); rsum();
  var inner = h('div', { class:'rbody' }, [dims, opBox, gBox, body]); if (r.fold) inner.style.display = 'none';
  var tg = h('button', { class:'btn lt xs', title:r.fold ? 'Развернуть' : 'Свернуть', text:r.fold ? '▸' : '▾', onclick:function(){ r.fold = !r.fold; inner.style.display = r.fold ? 'none' : ''; tg.textContent = r.fold ? '▸' : '▾'; save(); } });
  return h('div', { class:'card room' }, [h('div', { class:'rh' }, [tg, nm, h('div', { class:'rsw' }, [sumEl, labEl]), h('span', { class:'sp' }),
    h('button', { class:'btn lt xs', title:'Выше', text:'↑', onclick:function(){ if (ri > 0){ o.rooms.splice(ri - 1, 0, o.rooms.splice(ri, 1)[0]); save(); redraw(); } } }),
    h('button', { class:'btn lt xs', title:'Копия помещения', onclick:function(){ var c = clone(r); c.id = uid(); c.name += ' (копия)'; c.lines.forEach(function(l){ l.id = uid(); l.done = false; }); o.rooms.splice(ri + 1, 0, c); save(); redraw(); refreshTot(); } }, [ic('copy')]), h('button', { class:'btn red xs', title:'Удалить помещение', onclick:function(){ if (confirm('Удалить «' + r.name + '»?')){ o.rooms.splice(ri, 1); save(); redraw(); refreshTot(); } } }, [ic('trash')])]), inner]);
}
/* --- этапы и график --- */
function tabStages(w, o, totBox, refreshTot){
  var C = objCalc(o), box = h('div');
  function draw(){ C = objCalc(o); box.innerHTML = ''; var sum = o.stages.reduce(function(a, s){ return a + (+s.pct || 0); }, 0);
    var t = h('table', { class:'t' }); t.appendChild(h('thead', {}, [h('tr', {}, ['Этап', '% оплаты', 'Сумма', 'Срок (план)', 'Выполнен', 'Оплачен', ''].map(function(x, i){ return h('th', { class:[1, 2].indexOf(i) > -1 ? 'n' : '', text:x }); }))]));
    var tb = h('tbody'); o.stages.forEach(function(s, i){ var late = !s.done && s.plan && s.plan < today(), sm = h('td', { class:'n', text:rub(C.total * (+s.pct || 0) / 100) });
      var d = h('input', { type:'checkbox' }); d.checked = !!s.done; d.onchange = function(){ s.done = d.checked; s.doneAt = d.checked ? today() : ''; logA('№' + o.num + ': этап «' + s.name + '» ' + (s.done ? 'выполнен' : 'снят')); save(); draw(); };
      var p = h('input', { type:'checkbox' }); p.checked = !!s.paid; p.onchange = function(){ s.paid = p.checked; if (s.paid && confirm('Записать поступление ' + rub(C.total * s.pct / 100) + ' в деньги объекта?')) o.pays.push({ id:uid(), d:today(), kind:'in', cat:'Оплата клиента', sum:Math.round(C.total * s.pct / 100), note:'Этап: ' + s.name }); save(); draw(); };
      tb.appendChild(h('tr', { class:late ? 'late' : s.done ? 'dn' : '' }, [h('td', {}, [inp(s, 'name')]), h('td', { class:'n' }, [inp(s, 'pct', 'number', function(){ sm.textContent = rub(C.total * (+s.pct || 0) / 100); })]), sm, h('td', {}, [inp(s, 'plan', 'date')]), h('td', { class:'c' }, [d]), h('td', { class:'c' }, [p]), h('td', {}, [h('button', { class:'x', text:'×', onclick:function(){ o.stages.splice(i, 1); save(); draw(); } })])])); });
    t.appendChild(tb); box.appendChild(h('div', { class:'tw' }, [t]));
    if (sum !== 100) box.appendChild(h('div', { class:'hint y', text:'Сумма процентов этапов — ' + sum + '%, должно быть 100%.' }));
    box.appendChild(btn('plus', 'Этап', 'lt xs', function(){ o.stages.push({ id:uid(), name:'Новый этап', pct:0, plan:'', done:false, paid:false }); save(); draw(); }));
    var dn = o.stages.filter(function(s){ return s.done; }).reduce(function(a, s){ return a + (+s.pct || 0); }, 0);
    box.appendChild(h('div', { class:'bars' }, [h('div', { class:'barl' }, [h('span', { text:'Готовность объекта' }), h('div', {}, [h('i', { style:'width:' + dn + '%' })]), h('b', { text:dn + '%' })])])); }
  w.appendChild(card('Этапы работ и оплаты', [h('div', { class:'hint', text:'Клиент платит по этапам: отметили «выполнен» — клиент принимает, отметили «оплачен» — деньги попадают в кассу объекта. Просроченные этапы подсвечиваются и выходят на Главную.' }), box])); draw();
  w.appendChild(card('Заметки по объекту', [area(o, 'note', 'Ключи, доступ, пожелания, договорённости с клиентом…')]));
}
/* --- деньги объекта --- */
var PCAT = { in:['Оплата клиента', 'Доплата', 'Прочий приход'], out:['Материалы', 'Зарплата', 'Субподряд', 'Доставка и вывоз', 'Инструмент', 'Прочее'] };
function payForm(list, onAdd, withObj){
  var f = { d:today(), kind:'out', cat:'Материалы', sum:'', note:'', who:'', oid:'' }, catS = h('select');
  function cats(){ catS.innerHTML = ''; PCAT[f.kind].forEach(function(c){ catS.appendChild(h('option', { text:c })); }); f.cat = PCAT[f.kind][0]; } catS.onchange = function(){ f.cat = catS.value; whoF.style.display = f.cat === 'Зарплата' ? '' : 'none'; };
  var kS = sel(f, 'kind', [['out', 'Расход'], ['in', 'Приход']], function(){ cats(); }); cats();
  var whoF = field('Кому', sel(f, 'who', [['', '—']].concat(S.crew.map(function(c){ return [c.id, c.name]; })))); whoF.style.display = 'none';
  return card('+ Операция', [h('div', { class:'grid4' }, [field('Дата', inp(f, 'd', 'date')), field('Тип', kS), field('Статья', catS), field('Сумма, ₽', inp(f, 'sum', 'number'))]),
    h('div', { class:'grid3' }, [field('Комментарий', inp(f, 'note')), whoF, withObj ? field('Объект', sel(f, 'oid', [['', 'Общие расходы компании']].concat(S.objs.map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; })))) : h('span')]),
    btn('plus', 'Добавить', '', function(){ if (!+f.sum) return toast('Впишите сумму'); onAdd({ id:uid(), d:f.d, kind:f.kind, cat:f.cat, sum:+f.sum, note:f.note, who:f.cat === 'Зарплата' ? f.who : '' }, f.oid); })]);
}
function payTable(L, onDel){ if (!L.length) return empty('Операций пока нет.'); return table(['Дата', 'Статья', 'Комментарий', 'Приход', 'Расход', ''], L.slice().sort(function(a, b){ return a.d < b.d ? 1 : -1; }).map(function(p){ return [fdate(p.d), p.cat + (p.who ? ' · ' + crewName(p.who) : ''), p.note || '', p.kind === 'in' ? rub(p.sum) : '', p.kind === 'out' ? rub(p.sum) : '', h('button', { class:'x', text:'×', onclick:function(){ if (confirm('Удалить операцию?')) onDel(p); } })]; }), [3, 4]); }
function tabMoney(w, o){
  var C = objCalc(o);
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(C.total), 'сумма по смете'), kpi(rub(C.inc), 'получено от клиента', 'g'), kpi(rub(C.out), 'потрачено'), kpi(rub(C.debt), 'клиент должен', C.debt > 0 ? 'y' : 'g')]));
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(C.inc - C.out), 'на руках по объекту', C.inc - C.out >= 0 ? 'g' : 'r'), kpi(rub(C.planProfit), 'прибыль по смете'), kpi(rub(C.labor), 'зарплаты по смете (мастера + прораб/менеджер)'), kpi(rub(C.matsCost), 'материалы по смете (закупка)')]));
  w.appendChild(payForm(o.pays, function(p){ o.pays.push(p); logA('№' + o.num + ': ' + (p.kind === 'in' ? '+' : '−') + rub(p.sum) + ' ' + p.cat); save(); go('obj', o.id + '|money'); }));
  w.appendChild(card('Движение денег', [payTable(o.pays, function(p){ o.pays.splice(o.pays.indexOf(p), 1); save(); go('obj', o.id + '|money'); })]));
}
/* --- материалы объекта --- */
function tabMats(w, o){
  var C = objCalc(o), out = {}; S.stock.forEach(function(m){ if (m.oid === o.id && m.kind === 'out') out[m.mid] = (out[m.mid] || 0) + m.qty; }); var bal = stockBal();
  var L = Object.keys(C.matList).map(function(k){ return C.matList[k]; });
  w.appendChild(card('Материалы по смете', [h('div', { class:'hint', text:'Количество считается из объёмов работ и норм расхода в справочнике. «Выдано» — списано со склада на этот объект.' }),
    L.length ? table(['Материал', 'Нужно', 'Ед', 'Цена', 'Сумма', 'Выдано', 'На складе', ''], L.map(function(x){ var need = Math.ceil(x.q), got = out[x.m.id] || 0; return [x.m.name, num(need), x.m.unit, rub(x.m.price), rub(need * x.m.price), num(got), num(bal[x.m.id] || 0), need > got ? btn('', 'Выдать ' + num(need - got), 'lt xs', function(){ S.stock.push({ id:uid(), d:today(), mid:x.m.id, qty:need - got, kind:'out', oid:o.id, note:'по смете' }); logA('Выдано на №' + o.num + ': ' + x.m.name); save(); go('obj', o.id + '|mats'); }) : h('span', { class:'ok', text:'✓' })]; }), [1, 3, 4, 5, 6]) : empty('Добавьте работы в смету — материалы посчитаются сами.'),
    h('div', { class:'row' }, [btn('cart', 'Список закупки — Excel', '', function(){ xlsBuy(o); })])]));
  o.extraMats = o.extraMats || [];
  var ex = h('div'); function exDraw(){ ex.innerHTML = ''; o.extraMats.forEach(function(x, i){ ex.appendChild(h('div', { class:'grid4' }, [field('Материал', inp(x, 'name')), field('Кол-во', inp(x, 'q', 'number')), field('Цена', inp(x, 'price', 'number')), h('button', { class:'btn red xs', text:'×', onclick:function(){ o.extraMats.splice(i, 1); save(); exDraw(); } })])); }); }
  exDraw();
  w.appendChild(card('Дополнительные материалы (не из справочника)', [ex, btn('plus', 'Материал', 'lt xs', function(){ o.extraMats.push({ name:'', q:1, price:0 }); save(); exDraw(); })]));
}
/* --- мастера объекта --- */
function tabTeam(w, o){
  var C = objCalc(o), paid = {}; o.pays.forEach(function(p){ if (p.cat === 'Зарплата') paid[p.who || ''] = (paid[p.who || ''] || 0) + p.sum; });
  var rows = Object.keys(C.byMaster).map(function(k){ var b = C.byMaster[k], c = byId(S.crew, k); return [k ? (c ? c.name : '—') : 'Не назначен', c ? payName(c) : 'ставки справочника', rub(b.all), rub(b.earned), rub(paid[k] || 0), k ? btn('coin', 'Расчёт', 'lt xs', function(){ go('emp', k); }) : '']; });
  w.appendChild(card('Команда объекта и заработок', [h('div', { class:'hint', text:'Мастеров назначайте на работы в смете и отмечайте «Готово». Прораб получает свой процент по мере сдачи этапов, менеджер — в день договора. Схемы оплаты — в карточке сотрудника.' }), rows.length ? table(['Сотрудник', 'Схема', 'По смете', 'Заработано', 'Выплачено с объекта', ''], rows, [2, 3, 4]) : empty('Работ пока нет.'), btn('xls', 'Задание мастерам — Excel', 'lt', function(){ xlsMasters(o); })]));
}
/* --- кабинет клиента (ссылка без сервера: данные зашиты в саму ссылку) --- */
function b64u(u8){ var s = ''; for (var i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function pack(obj){ var txt = new TextEncoder().encode(JSON.stringify(obj)); if (!window.CompressionStream) return Promise.resolve('j' + b64u(txt)); var cs = new Blob([txt]).stream().pipeThrough(new CompressionStream('deflate-raw')); return new Response(cs).arrayBuffer().then(function(b){ return 'z' + b64u(new Uint8Array(b)); }); }
function clientData(o, detail){
  var C = objCalc(o), pr = byId(S.crew, o.prorab);
  return extData(o, detail, { v:1, co:{ n:S.co.name, p:S.co.phone, s:S.co.site }, o:{ n:o.name, a:o.addr, st:o.status, s:o.start, e:o.end, num:o.num }, cl:client(o.cid).name, pr:pr ? { n:pr.name, p:pr.phone } : null, upd:new Date().toISOString(),
    stg:o.stages.map(function(s){ return [s.name, +s.pct || 0, s.done ? 1 : 0, s.paid ? 1 : 0, s.plan || '']; }), tot:Math.round(C.total), inc:Math.round(C.inc), area:r2(C.area),
    ap:o.approved ? { ok:o.approved.at } : { code:apCode(o) }, rooms:C.rooms.map(function(x){ return detail ? [x.r.name, Math.round(x.sum), x.r.lines.map(function(l){ return [l.name, r2(qty(l, x.r)), l.unit, Math.round(qty(l, x.r) * lp(l, o)), l.done ? 1 : 0]; })] : [x.r.name, Math.round(x.sum)]; }), mats:Math.round(C.mats), disc:Math.round(C.disc), note:o.clientNote || '', g:lines3('guarantees').map(function(p){ return p[0]; }), steps:lines3('steps').map(function(p){ return [p[0], p[1] || '']; }), wel:tpl('welcome'), mg:(function(){ var dd = S.deals.filter(function(x){ return x.oid === o.id; })[0], m = dd && dd.mgr ? byId(S.crew, dd.mgr) : (o.manager ? byId(S.crew, o.manager) : null); return m ? { n:m.name, p:m.phone } : null; })(), rv:{ ym:S.co.ymaps || '', gis:S.co.gis || '' }, ch:companyCh(), pays:o.pays.filter(function(p){ return p.kind === 'in'; }).map(function(p){ return [p.d, Math.round(p.sum), p.cat || '']; }), live:o.cab ? 1 : 0 });
}
/* --- постоянный кабинет: зашифрованный файл в GitHub (ветка cab), ссылка не меняется --- */
var GHK = 'dproGH';
function gh(){ try { return JSON.parse(localStorage.getItem(GHK) || '{}'); } catch(e){ return {}; } }
function ghSet(g){ localStorage.setItem(GHK, JSON.stringify(g)); }
function ghRepo(){ return gh().repo || 'skvesna010-create/app'; }
function rnd(n){ var a = new Uint8Array(n); crypto.getRandomValues(a); return a; }
function u8b(s){ s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; var b = atob(s), a = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
function ghApi(path, opt){ opt = opt || {}; opt.headers = Object.assign({ Authorization:'Bearer ' + gh().tok, Accept:'application/vnd.github+json' }, opt.headers || {}); return fetch('https://api.github.com/repos/' + ghRepo() + path, opt); }
function ghBranch(){ return ghApi('/branches/cab').then(function(r){ if (r.ok) return; return ghApi('/git/ref/heads/main').then(function(r2){ if (!r2.ok) throw new Error('Нет доступа к репозиторию (' + r2.status + ')'); return r2.json(); }).then(function(j){ return ghApi('/git/refs', { method:'POST', body:JSON.stringify({ ref:'refs/heads/cab', sha:j.object.sha }) }); }).then(function(r3){ if (!r3.ok) throw new Error('Не удалось создать ветку cab (' + r3.status + ')'); }); }); }
function cabUrl(o){ return location.origin + location.pathname.replace(/[^\/]*$/, '') + 'klient.html#c.' + o.cab.id + '.' + o.cab.key; }
function cabSig(o){ var d = clientData(o, o.cab.detail !== false); delete d.upd; return JSON.stringify(d); }
function cabPublish(o, quiet){
  if (!REMOTE.ready()) return Promise.reject(new Error('Кабинеты не подключены — Компания → «Сервер»'));
  if (!o.cab) o.cab = { id:b64u(rnd(9)), key:b64u(rnd(16)), detail:true };
  if (REMOTE.chatReady() && !o.cab.issue && !o.cab.noib) return REMOTE.thread(o).catch(function(e){ console.warn(e); o.cab.noib = 1; toast(e.message); }).then(function(){ return cabPublish(o, quiet); });
  if (!o.cab.ph || o.cab.on !== REMOTE.kind){ o.cab.ph = 1; o.cab.on = REMOTE.kind; photosSync(o, true).catch(function(){}); docsSync(o).catch(function(){}); }
  var sig = cabSig(o);
  return encT(o.cab.key, JSON.stringify(clientData(o, o.cab.detail !== false)), true).then(function(t){ return REMOTE.put('c/' + o.cab.id + '.txt', t, 'кабинет №' + o.num); })
    .then(function(){ o.cab.sig = sig; o.cab.at = new Date().toISOString(); localStorage.setItem(KEY, JSON.stringify(S)); if (typeof syncSoon === 'function') syncSoon(); if (!quiet) toast('Кабинет клиента обновлён'); return cabUrl(o); });
}
var cabT = null, cabBusy = false;
function cabAuto(){ clearTimeout(cabT); cabT = setTimeout(function(){ if (cabBusy || !gh().tok || !navigator.onLine) return; var L = S.objs.filter(function(o){ return o.cab && o.cab.sig && o.cab.sig !== cabSig(o); }); if (!L.length) return; cabBusy = true;
  L.reduce(function(p, o){ return p.then(function(){ return cabPublish(o, true); }); }, Promise.resolve()).then(function(){ var sv = $('#saved'); if (sv) sv.textContent += ' · кабинеты обновлены'; }, function(e){ console.warn(e); }).then(function(){ cabBusy = false; }); }, 6000); }
function companyCh(){ var c = S.co, L = [];
  if (c.chMax) L.push(['max', c.chMax]); if (c.chWa) L.push(['wa', 'https://wa.me/' + digits(c.chWa)]); if (c.chTg) L.push(['tg', 'https://t.me/' + handle(c.chTg)]);
  if (c.chVk) L.push(['vk', 'https://vk.me/' + handle(c.chVk)]); if (c.chIg) L.push(['ig', 'https://ig.me/m/' + handle(c.chIg)]);
  var d = S.set.defCh || 'max'; L.sort(function(a, b){ return (a[0] === d ? -1 : 0) - (b[0] === d ? -1 : 0); }); return L; }
function apCode(o){ var t = o.num + '|' + Math.round(objCalc(o).total) + '|' + o.id, hs = 5381; for (var i = 0; i < t.length; i++) hs = ((hs << 5) + hs + t.charCodeAt(i)) >>> 0; return hs.toString(36).toUpperCase().slice(-6); }
function approve(o, by, code){ var C = objCalc(o); o.approved = { at:today(), by:by, total:Math.round(C.total), code:code || '' }; o.status = 'В работе'; if (!o.contractAt) o.contractAt = today(); if (!o.start) o.start = today(); logA('№' + o.num + ': смета утверждена (' + by + '), объект в работе'); save(); }
function approvalCard(o){
  var C = objCalc(o), A = o.approved, box = h('div', { class:'col' });
  if (A){ box.appendChild(h('div', { class:'hint g', html:'<b>Смета утверждена ' + fdate(A.at) + '</b> — ' + esc(A.by) + ', на сумму ' + rub(A.total) + '.' }));
    if (Math.round(C.total) !== A.total) box.appendChild(h('div', { class:'hint y', html:'Смета изменилась после утверждения: сейчас <b>' + rub(C.total) + '</b>. Оформите доп. соглашение или отправьте клиенту новую ссылку на утверждение.' }));
    box.appendChild(h('div', { class:'row' }, [btn('', 'Снять утверждение (в черновик)', 'lt xs', function(){ if (!confirm('Вернуть смету в черновик?')) return; delete o.approved; o.status = 'Черновик'; save(); go('obj', o.id + '|client'); })])); }
  else { var f = { code:'' };
    box.appendChild(h('p', { class:'muted', text:'Клиент открывает ссылку, проверяет смету и нажимает «Утверждаю» — ему показывается код, и он отправляет его вам в мессенджер (MAX, WhatsApp, Telegram — какие вы указали в настройках Компании) или СМС. Введите код — смета утвердится, и объект встанет «В работе». Если смету подписали на бумаге — нажмите вторую кнопку.' }));
    box.appendChild(h('div', { class:'row' }, [inp(f, 'code', 'text', null, { placeholder:'Код от клиента', style:'max-width:180px;text-transform:uppercase' }), btn('check', 'Подтвердить код', '', function(){ var c = String(f.code || '').trim().toUpperCase(); if (!c) return toast('Введите код'); if (c !== apCode(o)) return toast('Код не совпадает: возможно, смета менялась после отправки ссылки. Отправьте клиенту новую ссылку.'); approve(o, 'клиент по ссылке, код ' + c, c); go('obj', o.id + '|client'); toast('Смета утверждена, объект в работе'); }), btn('pdf', 'Подписана на бумаге', 'lt', function(){ approve(o, 'подписана на бумаге'); go('obj', o.id + '|client'); toast('Объект в работе'); })])); }
  return card('Утверждение сметы', [box]);
}
function linkBox(o, u){ var c = client(o.cid); return h('div', { class:'linkbox' }, [h('input', { type:'text', value:u, readonly:true }), btn('copy', 'Скопировать', '', function(){ copy(u, 'ссылка'); }), h('a', { class:'btn lt', href:u, target:'_blank', rel:'noopener', text:'Открыть' }), btn('', 'Отправить в ' + chName(chOf(c)), 'lt', function(){ sendMsg(c, 'Здравствуйте! Ваш личный кабинет в ' + S.co.name + ' — тут смета, этапы и оплаты, всё обновляется само: ' + u); })]); }
function sentLink(o, u){ o.lastLink = u; if (o.status === 'Черновик') o.status = 'Отправлена'; S.deals.forEach(function(dd){ if (dd.oid === o.id && ['Новая', 'На связи', 'Замер'].indexOf(dd.stage) > -1) setStage(dd, 'КП отправлено'); }); save(); }
function tabClient(w, o){
  w.appendChild(approvalCard(o));
  var c = client(o.cid);
  w.appendChild(card('Как писать клиенту', [h('div', { class:'grid2' }, [fieldD('Где ему удобно общаться', chPicker(c, function(){ go('obj', o.id + '|client'); })), chFields(c)])]));
  var live = h('div', { class:'col' });
  if (!REMOTE.ready()) live.appendChild(h('div', { class:'hint y', html:'<b>Постоянный кабинет ещё не подключён.</b> Подключите сервер в разделе Компания → «Сервер Домилии» — и у каждого клиента будет одна ссылка навсегда, которая сама обновляется при любых изменениях сметы, этапов и оплат.' }), btn('', 'Подключить', 'lt', function(){ go('company'); }));
  else if (!o.cab) live.appendChild(h('div', { class:'col' }, [h('p', { class:'muted', text:'Одна ссылка на весь ремонт: клиент сохраняет её и в любой момент видит актуальную смету, готовность, этапы, оплаты. Данные зашифрованы — без ссылки их не прочитать.' }),
    btn('link', 'Создать кабинет клиента', '', function(b){ var bt = this; bt.disabled = true; bt.textContent = 'Создаю…'; cabPublish(o).then(function(u){ sentLink(o, u); logA('№' + o.num + ': создан кабинет клиента'); go('obj', o.id + '|client'); }, function(e){ bt.disabled = false; bt.textContent = 'Создать кабинет клиента'; toast(e.message); }); })]));
  else { var u = cabUrl(o), fresh = o.cab.sig === cabSig(o);
    live.appendChild(h('div', { class:'hint ' + (fresh ? 'g' : 'y'), html:fresh ? '<b>Кабинет актуален</b> · обновлён ' + new Date(o.cab.at).toLocaleString('ru-RU') + '. Дальше обновляется сам после любых изменений.' : '<b>Есть изменения</b> — кабинет обновится автоматически через несколько секунд или нажмите «Обновить сейчас».' }));
    live.appendChild(linkBox(o, u));
    var det = h('input', { type:'checkbox' }); det.checked = o.cab.detail !== false; det.onchange = function(){ o.cab.detail = det.checked; save(); };
    live.appendChild(h('div', { class:'row' }, [h('label', { class:'chk' }, [det, 'Показывать работы по каждому помещению']), h('span', { class:'sp' }), btn('', 'Обновить сейчас', 'lt xs', function(){ cabPublish(o).then(function(){ go('obj', o.id + '|client'); }, function(e){ toast(e.message); }); }),
      btn('', 'Закрыть доступ', 'lt xs', function(){ if (!confirm('Старая ссылка перестанет работать. Создать новую можно в любой момент.')) return; REMOTE.del('c/' + o.cab.id + '.txt').then(function(){ delete o.cab; save(); toast('Доступ закрыт'); go('obj', o.id + '|client'); }); })])); }
  w.appendChild(card('Кабинет клиента — постоянная ссылка', [live, field('Сообщение клиенту (покажется вверху кабинета)', area(o, 'clientNote', 'Например: «На этой неделе заканчиваем плитку в ванной, в пятницу приёмка этапа»'))]));
  var out = h('div'), f = { detail:true };
  w.appendChild(card('Разовая ссылка-снимок', [h('p', { class:'muted', text:'Работает без настройки, но показывает данные на момент создания — после изменений нужно отправить новую. Удобно для быстрого КП.' }),
    h('div', { class:'row' }, [h('label', { class:'chk' }, [(function(){ var x = h('input', { type:'checkbox', checked:true }); x.onchange = function(){ f.detail = x.checked; }; return x; })(), 'С работами по помещениям']), btn('link', 'Создать снимок', 'lt', function(){ pack(clientData(o, f.detail)).then(function(p){ var u = location.origin + location.pathname.replace(/[^\/]*$/, '') + 'klient.html#' + p; sentLink(o, u); out.innerHTML = ''; out.appendChild(linkBox(o, u)); logA('№' + o.num + ': ссылка-снимок для клиента'); }); })]), out]));
}

/* ================= ДОКУМЕНТЫ ================= */
function rubWords(n){ n = Math.round(+n || 0); var u = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'], uf = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'], t = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'], d = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'], hh = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
  function tri(x, fem){ var r = []; r.push(hh[Math.floor(x / 100)]); var y = x % 100; if (y >= 10 && y < 20) r.push(t[y - 10]); else { r.push(d[Math.floor(y / 10)]); r.push((fem ? uf : u)[y % 10]); } return r.filter(Boolean).join(' '); }
  function form(x, f){ x = x % 100; if (x > 10 && x < 20) return f[2]; x = x % 10; return x === 1 ? f[0] : x >= 2 && x <= 4 ? f[1] : f[2]; }
  if (!n) return 'ноль рублей'; var parts = [], mil = Math.floor(n / 1e6), th = Math.floor(n / 1000) % 1000, rest = n % 1000;
  if (mil) parts.push(tri(mil) + ' ' + form(mil, ['миллион', 'миллиона', 'миллионов'])); if (th) parts.push(tri(th, true) + ' ' + form(th, ['тысяча', 'тысячи', 'тысяч'])); if (rest) parts.push(tri(rest));
  var s = parts.join(' '); return s.charAt(0).toUpperCase() + s.slice(1) + ' ' + form(n, ['рубль', 'рубля', 'рублей']); }
function money(n){ return rub(n) + ' (' + rubWords(n) + ')'; }
function blank(v, w){ return v ? esc(v) : '<span class="bl" style="min-width:' + (w || 160) + 'px"></span>'; }
function ldate(d){ return d ? new Date(d).toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric' }) : '«___» ____________ 20__ г.'; }
function ctr(o){ o.contract = o.contract || {}; return o.contract; }
/* ================= ЮРЛИЦА: от кого договор, кто заказчик ================= */
var EK = { ooo:'ООО', ip:'ИП', sz:'Самозанятый' }, CK = { fl:'Физлицо', ooo:'ООО / организация', ip:'ИП' };
function ents(){ if (!S.ents || !S.ents.length){ var c = S.co; S.ents = [{ id:'e1', kind:'ooo', full:c.full || 'ООО «Домилия»', inn:c.inn || '', ogrn:c.ogrn || '', kpp:'', dir:c.dir || '', dirPos:c.dirPos || '', basis:c.basis || '', addr:c.addr || '', rs:c.rs || '', bank:c.bank || '', bik:c.bik || '', ks:c.ks || '', vat:'none', logo:'' }]; S.set.defEnt = 'e1'; } return S.ents; }
function entOf(o){ var L = ents(); return byId(L, o && o.ent) || byId(L, S.set.defEnt) || L[0]; }
var CO = null;
function entCo(o){ var e = entOf(o), c = S.co, r = Object.assign({}, c, e); r.name = c.name; r.phone = e.phone || c.phone; r.email = e.email || c.email; r.logo = e.logo || c.logo || ''; CO = r; return r; }
function logoHtml(co){ return co && co.logo ? '<img class="lgi" src="' + co.logo + '" alt="">' : MARK; }
function vatText(co, total){ if (co.vat === '20') return 'в том числе НДС 20% — ' + rub(total * 20 / 120) + '.'; if (co.kind === 'sz') return 'НДС не облагается: Подрядчик применяет специальный налоговый режим «Налог на профессиональный доход» и выдаёт чек из приложения «Мой налог» на каждый платёж.'; return 'НДС не облагается в связи с применением Подрядчиком упрощённой системы налогообложения.'; }
function cname(cl){ return cl.kind && cl.kind !== 'fl' ? (cl.org || cl.name) : cl.name; }
function partyIsp(){ var c = CO || entCo(null);
  if (c.kind === 'ip') return 'Индивидуальный предприниматель <b>' + esc(c.full) + '</b>, ОГРНИП ' + blank(c.ogrn, 140) + ', ИНН ' + blank(c.inn, 120) + ', именуемый(ая) в дальнейшем «Подрядчик»';
  if (c.kind === 'sz') return 'гражданин(ка) РФ <b>' + esc(c.full) + '</b>, ИНН ' + blank(c.inn, 120) + ', паспорт ' + blank(c.pass, 120) + ', применяющий(ая) специальный налоговый режим «Налог на профессиональный доход», именуемый(ая) в дальнейшем «Подрядчик»';
  return '<b>' + esc(c.full) + '</b>, ИНН ' + blank(c.inn, 110) + (c.kpp ? ', КПП ' + esc(c.kpp) : '') + ', ОГРН ' + blank(c.ogrn, 130) + ', в лице ' + esc(c.dirPos || 'директора') + ' ' + blank(c.dir) + ', действующего на основании ' + esc(c.basis || 'Устава') + ', именуемое в дальнейшем «Подрядчик»'; }
function partyZak(cl){
  if (cl.kind === 'ooo') return '<b>' + esc(cl.org || cl.name) + '</b>, ИНН ' + blank(cl.inn, 110) + (cl.kpp ? ', КПП ' + esc(cl.kpp) : '') + ', ОГРН ' + blank(cl.ogrn, 130) + ', в лице ' + esc(cl.dirPos || 'директора') + ' ' + blank(cl.dir) + ', действующего на основании ' + esc(cl.basis || 'Устава') + ', именуемое в дальнейшем «Заказчик»';
  if (cl.kind === 'ip') return 'Индивидуальный предприниматель <b>' + esc(cl.org || cl.name) + '</b>, ОГРНИП ' + blank(cl.ogrn, 140) + ', ИНН ' + blank(cl.inn, 120) + ', именуемый(ая) в дальнейшем «Заказчик»';
  return 'гражданин(ка) <b>' + esc(cl.name) + '</b>, паспорт ' + blank(cl.pass, 120) + ', выдан ' + blank(cl.passBy, 220) + ', зарегистрирован(а) по адресу: ' + blank(cl.reg, 260) + ', именуемый(ая) в дальнейшем «Заказчик»'; }
function reqLines(x, isClient){ var L = [];
  if (isClient && (!x.kind || x.kind === 'fl')){ L.push(esc(x.name)); L.push('Паспорт ' + blank(x.pass, 100)); L.push('Адрес: ' + blank(x.reg, 180)); }
  else { L.push(esc(isClient ? (x.org || x.name) : x.full)); var ids = [x.inn ? 'ИНН ' + esc(x.inn) : '', x.kpp ? 'КПП ' + esc(x.kpp) : '', x.ogrn ? (x.kind === 'ooo' ? 'ОГРН ' : x.kind === 'ip' ? 'ОГРНИП ' : '') + esc(x.ogrn) : ''].filter(Boolean).join(', '); if (ids) L.push(ids); if (!isClient && x.kind === 'sz') L.push('Плательщик налога на профессиональный доход'); var ad = isClient ? (x.addrJ || x.reg) : x.addr; if (ad) L.push('Адрес: ' + esc(ad)); if (x.rs) L.push('р/с ' + esc(x.rs) + (x.bank ? ' в ' + esc(x.bank) : '') + (x.bik ? ', БИК ' + esc(x.bik) : '') + (x.ks ? ', к/с ' + esc(x.ks) : '')); }
  if (x.phone) L.push('Тел.: ' + esc(x.phone)); return L.join('<br>'); }
function signLine(x, isClient){ var k = x.kind || 'fl';
  if (k === 'ooo') return esc(x.dirPos ? x.dirPos.replace(/а$/, '') : 'Директор') + ' ____________ / ' + blank(x.dir, 120) + '<br><small>М. П.</small>';
  if (k === 'ip') return 'ИП ____________ / ' + esc(isClient ? (x.org || x.name) : x.full) + '<br><small>М. П. (при наличии)</small>';
  return '____________ / ' + esc(isClient ? x.name : x.full); }
function sigBlock(cl){ var c = CO || entCo(null); return '<div class="sig2"><div><b>Подрядчик</b><p>' + reqLines(c, false) + '</p><div class="ln2">' + signLine(c, false) + '</div></div><div><b>Заказчик</b><p>' + reqLines(cl, true) + '</p><div class="ln2">' + signLine(cl, true) + '</div></div></div>'; }
function logoPick(target, key, after){ var fi = h('input', { type:'file', accept:'image/*', hidden:true }); fi.onchange = function(){ var f = fi.files[0]; if (!f) return; var img = new Image(); img.onload = function(){ var k = Math.min(1, 320 / Math.max(img.width, img.height)), cv = document.createElement('canvas'); cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k); cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height); target[key] = cv.toDataURL('image/png'); save(); after(); }; img.src = URL.createObjectURL(f); }; document.body.appendChild(fi); fi.click(); setTimeout(function(){ fi.remove(); }, 60000); }
function entCard(e, i){
  var isDef = S.set.defEnt === e.id, box = h('div');
  function draw(){ box.innerHTML = ''; var k = e.kind;
    var rows = [h('div', { class:'grid3' }, [field('Форма', sel(e, 'kind', [['ooo', 'ООО (организация)'], ['ip', 'ИП'], ['sz', 'Самозанятый']], draw)), field(k === 'ooo' ? 'Полное название' : 'ФИО полностью', inp(e, 'full', 'text', null, { placeholder:k === 'ooo' ? 'ООО «Домилия»' : 'Иванов Иван Иванович' })), field('ИНН', inp(e, 'inn'))])];
    if (k === 'ooo') rows.push(h('div', { class:'grid4' }, [field('ОГРН', inp(e, 'ogrn')), field('КПП', inp(e, 'kpp')), field('Директор (ФИО)', inp(e, 'dir')), field('Должность в родительном падеже', inp(e, 'dirPos', 'text', null, { placeholder:'директора' }))]));
    if (k === 'ip') rows.push(h('div', { class:'grid3' }, [field('ОГРНИП', inp(e, 'ogrn'))]));
    if (k === 'sz') rows.push(h('div', { class:'grid3' }, [field('Паспорт (серия, номер)', inp(e, 'pass'))]));
    rows.push(h('div', { class:'grid3' }, [field(k === 'ooo' ? 'Юридический адрес' : 'Адрес', inp(e, 'addr')), field('Телефон (если другой)', inp(e, 'phone', 'tel')), field('НДС', sel(e, 'vat', [['none', k === 'sz' ? 'Без НДС (НПД)' : 'Без НДС (УСН)'], ['20', 'НДС 20%']]))]));
    rows.push(h('div', { class:'grid4' }, [field('Расчётный счёт', inp(e, 'rs')), field('Банк', inp(e, 'bank')), field('БИК', inp(e, 'bik')), field('Корр. счёт', inp(e, 'ks'))]));
    if (k === 'sz') rows.push(h('div', { class:'hint y', text:'Самозанятый: доход не больше 2,4 млн ₽ в год, нельзя нанимать сотрудников по трудовому договору, на каждый платёж — чек из «Мой налог». Этот текст автоматически попадает в договор.' }));
    rows.push(h('div', { class:'row' }, [h('div', { class:'lgp', html:e.logo ? '<img src="' + e.logo + '">' : '<span class="muted sm">логотип как у бренда</span>' }), btn('', e.logo ? 'Сменить логотип' : 'Свой логотип для этого лица', 'lt xs', function(){ logoPick(e, 'logo', draw); }), e.logo ? btn('', 'Убрать', 'lt xs', function(){ e.logo = ''; save(); draw(); }) : null, h('span', { class:'sp' }),
      isDef ? h('span', { class:'badge g', text:'по умолчанию' }) : btn('check', 'Сделать основным', 'lt xs', function(){ S.set.defEnt = e.id; save(); go('company'); }),
      S.ents.length > 1 ? h('button', { class:'btn red xs', text:'Удалить', onclick:function(){ if (S.objs.some(function(o){ return o.ent === e.id; })) return toast('Это лицо выбрано в объектах — сначала поменяйте там'); if (confirm('Удалить?')){ S.ents.splice(i, 1); if (isDef) S.set.defEnt = S.ents[0].id; save(); go('company'); } } }) : null]));
    rows.forEach(function(x){ box.appendChild(x); }); }
  draw(); return card(h('h3', {}, [h('span', { class:'st st' + (e.kind === 'ooo' ? 3 : e.kind === 'ip' ? 1 : 2), text:EK[e.kind] }), e.full || 'Без названия']), [box], isDef ? 'hl' : '');
}
function clientFields(c, after){ var box = h('div');
  function draw(){ box.innerHTML = ''; var k = c.kind || 'fl';
    box.appendChild(h('div', { class:'grid3' }, [field('Тип заказчика', sel(c, 'kind', [['fl', 'Физическое лицо'], ['ooo', 'Организация (ООО, АО)'], ['ip', 'Индивидуальный предприниматель']], function(){ draw(); if (after) after(); })), field(k === 'fl' ? 'ФИО' : 'Контактное лицо', inp(c, 'name')), field('Телефон', inp(c, 'phone', 'tel'))]));
    box.appendChild(h('div', { class:'grid2' }, [fieldD('Где удобно общаться', chPicker(c, draw)), chFields(c)]));
    if (k === 'fl') box.appendChild(h('div', { class:'grid3' }, [field('Паспорт (серия, номер)', inp(c, 'pass')), field('Кем и когда выдан', inp(c, 'passBy')), field('Адрес регистрации', inp(c, 'reg'))]));
    else { box.appendChild(h('div', { class:'grid3' }, [field(k === 'ooo' ? 'Полное название' : 'ФИО предпринимателя', inp(c, 'org', 'text', null, { placeholder:k === 'ooo' ? 'ООО «Ромашка»' : 'Петров Пётр Петрович' })), field('ИНН', inp(c, 'inn')), field(k === 'ooo' ? 'ОГРН' : 'ОГРНИП', inp(c, 'ogrn'))]));
      if (k === 'ooo') box.appendChild(h('div', { class:'grid4' }, [field('КПП', inp(c, 'kpp')), field('Директор (ФИО)', inp(c, 'dir')), field('Должность в род. падеже', inp(c, 'dirPos', 'text', null, { placeholder:'директора' })), field('На основании', inp(c, 'basis', 'text', null, { placeholder:'Устава' }))]));
      box.appendChild(h('div', { class:'grid4' }, [field('Юридический адрес', inp(c, 'addrJ')), field('Расчётный счёт', inp(c, 'rs')), field('Банк', inp(c, 'bank')), field('БИК', inp(c, 'bik'))])); } }
  draw(); return box; }
var DOC_CSS = '@page{size:A4;margin:15mm 14mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}html{font-size:14.5px}body{font:1rem/1.55 "Times New Roman",Times,serif;color:#111;margin:0;background:#fff}' +
  '.page{max-width:900px;margin:0 auto;padding:24px 22px 40px}.hd{display:flex;gap:12px;align-items:center;border-bottom:2px solid #00B47E;padding-bottom:10px;margin-bottom:16px;font-family:Arial,sans-serif}.hd svg{width:42px;height:42px}.hd img.lgi{height:46px;width:auto;max-width:150px;object-fit:contain}.hd b{font-size:1.2rem;letter-spacing:.06em}.hd small{display:block;color:#5E666A;font-size:.8rem}.hd .sp{flex:1}' +
  'h1{font-size:1.25rem;text-align:center;margin:8px 0 2px;text-transform:uppercase}h1+.sub{text-align:center;margin-bottom:14px}.row2{display:flex;justify-content:space-between;margin:8px 0 14px}h2{font-size:1.02rem;margin:16px 0 6px;text-transform:uppercase;text-align:center}p{margin:0 0 6px;text-align:justify}' +
  'table{width:100%;border-collapse:collapse;margin:6px 0 10px;font-family:Arial,sans-serif;font-size:.86rem}th,td{border:1px solid #999;padding:5px 6px;vertical-align:top}th{background:#EEF0EF}.n{text-align:right;white-space:nowrap}.c{text-align:center}.tot td{font-weight:700}' +
  '.bl{display:inline-block;border-bottom:1px solid #333;height:1em;vertical-align:baseline}.sig2{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:22px;break-inside:avoid}.sig2 p{text-align:left;font-size:.9rem}.ln2{margin-top:18px}.ln2 small{color:#666}' +
  '.bar{position:sticky;top:0;background:#16191B;color:#fff;padding:10px 16px;display:flex;gap:10px;align-items:center;justify-content:space-between;z-index:5;font-family:Arial,sans-serif}.bar button{background:#00B47E;color:#fff;border:0;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer}' +
  '.gantt{display:grid;gap:4px;font-family:Arial,sans-serif;font-size:.8rem}.gr{display:grid;grid-template-columns:220px 1fr;gap:8px;align-items:center}.gb{position:relative;height:16px;background:#F1F2F1;border-radius:4px}.gb i{position:absolute;top:0;bottom:0;background:#00B47E;border-radius:4px}' +
  '@media print{.bar{display:none}.page{padding:0;max-width:none}html{font-size:11.5pt}tr{break-inside:avoid}}@media (max-width:640px){html{font-size:14px}.page{padding:12px}.sig2{grid-template-columns:1fr}table{display:block;overflow-x:auto}.gr{grid-template-columns:120px 1fr}}';
function docOpen(titleText, body, fileName){
  var co = CO || entCo(null), html = '<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + esc(titleText) + '</title><style>' + DOC_CSS + '</style></head><body><div class="bar"><b>' + esc(titleText) + ' — «Печать» → «Сохранить как PDF»</b><button onclick="window.print()">Печать / PDF</button></div><div class="page"><div class="hd">' + logoHtml(co) + '<div><b>' + esc(co.name.toUpperCase()) + '</b><small>' + esc(co.full) + (co.kind === 'sz' ? ' · самозанятый' : co.kind === 'ip' ? ' · ИП' : '') + '</small></div><span class="sp"></span><small style="text-align:right">' + esc(co.phone) + '<br>' + esc([co.email, co.site].filter(Boolean).join(' · ')) + '</small></div>' + body + '</div></body></html>';
  if (docSink){ var sk = docSink; docSink = null; return sk(titleText, html); } var url = URL.createObjectURL(new Blob([html], { type:'text/html;charset=utf-8' })), wnd = window.open(url, '_blank');
  if (!wnd){ download((fileName || 'dokument') + '.html', html, 'text/html;charset=utf-8'); toast('Окно заблокировано — документ скачан файлом'); }
  setTimeout(function(){ URL.revokeObjectURL(url); }, 60000); logA('Документ: ' + titleText);
}
function cityDate(d){ return '<div class="row2"><span>г. ' + esc(S.co.city || 'Екатеринбург') + '</span><span>' + ldate(d) + '</span></div>'; }
function worksTable(rows, o, withTot){ var t = 0, n = 0; var h2 = '<table><tr><th>№</th><th>Наименование работ</th><th>Ед.</th><th class="n">Кол-во</th><th class="n">Цена, ₽</th><th class="n">Сумма, ₽</th></tr>' + rows.map(function(x){ var q = qty(x[1], x[0]), s = q * lp(x[1], o); t += s; return '<tr><td class="c">' + (++n) + '</td><td>' + esc(x[1].name) + (x[0].name ? ' <small>(' + esc(x[0].name) + ')</small>' : '') + '</td><td class="c">' + esc(x[1].unit) + '</td><td class="n">' + num(q) + '</td><td class="n">' + num(lp(x[1], o), 0) + '</td><td class="n">' + num(s, 0) + '</td></tr>'; }).join('') + (withTot !== false ? '<tr class="tot"><td colspan="5">Итого</td><td class="n">' + num(t, 0) + '</td></tr>' : '') + '</table>'; return { html:h2, sum:t }; }
function allLines(o, f){ var L = []; o.rooms.forEach(function(r){ r.lines.forEach(function(l){ if (!f || f(l)) L.push([r, l]); }); }); return L; }
function gantt(o){ var st = o.stages.filter(function(s){ return s.plan; }), start = o.start || (st[0] && st[0].plan) || today(), end = o.end || (st.length ? st[st.length - 1].plan : today()); var a = new Date(start).getTime(), b = Math.max(new Date(end).getTime(), a + 864e5), prev = a;
  return '<div class="gantt">' + o.stages.map(function(s){ var e = s.plan ? new Date(s.plan).getTime() : prev, l = (prev - a) / (b - a) * 100, w = Math.max(2, (e - prev) / (b - a) * 100); prev = e; return '<div class="gr"><span>' + esc(s.name) + '</span><div class="gb"><i style="left:' + l + '%;width:' + w + '%"></i></div></div>'; }).join('') + '</div>'; }
var DOCS = [
  ['contract', 'Договор подряда на ремонт', 'Основной договор с приложениями: смета, график, порядок оплаты'],
  ['smeta', 'Смета', 'Приложение №1 к договору'],
  ['graph', 'График производства работ', 'Приложение №2: этапы, сроки, оплата'],
  ['measure', 'Акт замера', 'Размеры и площади помещений'],
  ['keys', 'Акт приёма-передачи ключей и помещения', 'Перед началом работ: ключи, счётчики, состояние'],
  ['hidden', 'Акт освидетельствования скрытых работ', 'Гидроизоляция, электрика, сантехника до закрытия'],
  ['stage', 'Акт выполненных работ (этап)', 'Приёмка этапа или выполненных работ'],
  ['extra', 'Дополнительное соглашение', 'Доп. работы и новая цена договора'],
  ['final', 'Акт сдачи-приёмки объекта', 'Итоговая приёмка, начало гарантии'],
  ['guarantee', 'Гарантийное обязательство', 'Срок и условия гарантии'],
  ['receipt', 'Квитанция об оплате', 'Подтверждение платежа клиента'],
  ['sverka', 'Акт сверки расчётов', 'Сколько по смете, оплачено и к оплате'],
  ['cancel', 'Соглашение о расторжении договора', 'Взаиморасчёт за выполненное'],
  ['pd', 'Согласие на обработку персональных данных', 'По 152-ФЗ']
];
function tabDocs(w, o){
  var cl = client(o.cid), K = ctr(o);
  if (!K.num) K.num = o.num + '/' + new Date().getFullYear().toString().slice(2); if (!K.date) K.date = today();
  if (!o.ent) o.ent = entOf(o).id;
  var e = entOf(o), miss = [];
  if (!e.inn) miss.push('ИНН исполнителя'); if (e.kind === 'ooo' && !e.dir) miss.push('директор исполнителя'); if (e.kind === 'sz' && !e.pass) miss.push('паспорт самозанятого');
  if (!cl.kind || cl.kind === 'fl'){ if (!cl.pass) miss.push('паспорт клиента'); if (!cl.reg) miss.push('адрес регистрации клиента'); } else { if (!cl.org) miss.push('название заказчика'); if (!cl.inn) miss.push('ИНН заказчика'); }
  var C = objCalc(o);
  w.appendChild(card('От кого и с кем договор', [h('div', { class:'grid4' }, [field('Исполнитель (от кого договор)', sel(o, 'ent', ents().map(function(x){ return [x.id, EK[x.kind] + ' · ' + (x.full || 'без названия')]; }), function(){ go('obj', o.id + '|docs'); })), field('№ договора', inp(K, 'num')), field('Дата договора', inp(K, 'date', 'date')), h('div', { class:'f' }, [h('span', { class:'fl', text:' ' }), btn('gear', 'Наши юрлица', 'lt', function(){ go('company'); })])]),
    e.kind === 'sz' && C.total > 2400000 ? h('div', { class:'hint r', text:'Сумма договора больше 2,4 млн ₽ — это выше годового лимита дохода самозанятого. Оформите договор от ООО или ИП.' }) : null,
    h('div', { class:'grid2' }, [field('Срок начала работ', inp(o, 'start', 'date')), field('Срок окончания', inp(o, 'end', 'date'))]),
    h('h4', { text:'Заказчик' }), clientFields(cl, function(){ go('obj', o.id + '|docs'); }),
    miss.length ? h('div', { class:'hint y', html:'Не заполнено: <b>' + miss.join(', ') + '</b>. В документах будут пустые строки для ручного заполнения.' }) : h('div', { class:'hint g', text:'Все данные для документов заполнены.' })]));
  var g = h('div', { class:'docg' });
  DOCS.forEach(function(d){ g.appendChild(h('div', { class:'docw' }, [h('button', { class:'docb', onclick:function(){ docSink = null; makeDoc(d[0], o); } }, [ic('pdf'), h('div', {}, [h('b', { text:d[1] }), h('small', { text:d[2] })])]), h('button', { class:'docc', title:'Отправить в кабинет клиента' + (SIGN_KINDS.indexOf(d[0]) > -1 ? ' на подпись' : ''), onclick:function(){ docToCab(d[0], o); } }, [ic('sign'), h('span', { text:'В кабинет' })])])); });
  w.appendChild(card('Документы по объекту', [g, h('small', { class:'muted', text:'Шаблоны — типовые. Перед первым использованием покажите договор юристу и поправьте под себя.' })]));
}
function pick(titleText, fields, onOk){ var box = dlg(titleText, fields.concat([h('div', { class:'row' }, [h('span', { class:'sp' }), btn('pdf', 'Сформировать', '', function(){ box.remove(); onOk(); })])])); }
function makeDoc(kind, o){
  var cl = client(o.cid), C = objCalc(o), K = ctr(o), co = entCo(o), addr = esc(o.addr || cl.addr || o.name), cn = '№ ' + esc(K.num) + ' от ' + ldate(K.date);
  if (kind === 'smeta') return pdfDialog(o);
  if (kind === 'contract'){
    var pay = o.stages.map(function(s, i){ return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(s.name) + '</td><td class="n">' + s.pct + '%</td><td class="n">' + num(C.total * s.pct / 100, 0) + '</td><td>' + (s.plan ? fdate(s.plan) : '') + '</td></tr>'; }).join('');
    docOpen('Договор подряда ' + cn.replace(/<[^>]+>/g, ''), '<h1>Договор подряда ' + cn + '</h1><div class="sub">на выполнение ремонтно-отделочных работ</div>' + cityDate(K.date) +
      '<p>' + partyIsp() + ', с одной стороны, и ' + partyZak(cl) + ', с другой стороны, совместно именуемые «Стороны», заключили настоящий договор о нижеследующем.</p>' +
      '<h2>1. Предмет договора</h2><p>1.1. Подрядчик обязуется по заданию Заказчика выполнить ремонтно-отделочные работы (далее — Работы) в помещении по адресу: <b>' + addr + '</b> (далее — Объект), а Заказчик обязуется принять и оплатить Работы.</p><p>1.2. Перечень, объёмы и стоимость Работ определяются Сметой (Приложение №1), сроки и порядок оплаты — Графиком производства работ (Приложение №2), являющимися неотъемлемой частью договора.</p>' +
      '<h2>2. Сроки выполнения работ</h2><p>2.1. Начало работ — ' + ldate(o.start) + ', окончание — ' + ldate(o.end) + '. Промежуточные сроки этапов указаны в Приложении №2.</p><p>2.2. Сроки сдвигаются соразмерно периоду задержки, если она вызвана действиями Заказчика: несвоевременной оплатой этапа, непредоставлением доступа на Объект, изменением объёма работ, задержкой поставки материалов, закупаемых Заказчиком.</p>' +
      '<h2>3. Цена договора и порядок оплаты</h2><p>3.1. Цена договора определяется Сметой и составляет <b>' + money(C.total) + '</b>' + (C.mats ? ', в том числе стоимость черновых материалов ' + rub(C.mats) : '') + '. ' + vatText(co, C.total) + '</p><p>3.2. Цена договора является твёрдой и может быть изменена только дополнительным соглашением Сторон при изменении объёма или состава Работ.</p><p>3.3. Оплата производится поэтапно в соответствии с таблицей:</p><table><tr><th>№</th><th>Этап</th><th class="n">%</th><th class="n">Сумма, ₽</th><th>Срок</th></tr>' + pay + '</table><p>3.4. Оплата этапа производится в течение 3 (трёх) календарных дней после подписания акта выполненных работ по этапу наличными с выдачей квитанции или безналичным переводом.</p>' +
      '<h2>4. Материалы</h2><p>4.1. ' + (o.noMats ? 'Черновые и чистовые материалы закупает Заказчик в сроки, согласованные с Подрядчиком. Подрядчик предоставляет перечень и объёмы материалов.' : 'Черновые материалы закупает и доставляет Подрядчик, их стоимость включена в Смету. Чистовые материалы (плитка, напольные покрытия, сантехника, обои, краска и т. п.) закупает Заказчик, если иное не указано в Смете.') + '</p><p>4.2. Подрядчик отвечает за правильное использование материалов и отчитывается о расходе по требованию Заказчика.</p>' +
      '<h2>5. Права и обязанности сторон</h2><p>5.1. Подрядчик обязуется: выполнить Работы качественно, в соответствии со строительными нормами и Сметой; соблюдать сроки; соблюдать правила проживания в доме, режим тишины и чистоту в местах общего пользования; вывозить строительный мусор; извещать Заказчика о готовности скрытых работ до их закрытия; предоставлять фотоотчёт о ходе работ.</p><p>5.2. Заказчик обязуется: обеспечить доступ на Объект, электроэнергию и воду; своевременно оплачивать этапы; своевременно принимать работы; своевременно поставлять материалы, закупаемые им.</p><p>5.3. Заказчик вправе в любое время проверять ход и качество Работ, не вмешиваясь в деятельность Подрядчика.</p>' +
      '<h2>6. Приёмка работ</h2><p>6.1. По окончании каждого этапа Подрядчик предъявляет Работы и акт выполненных работ. Заказчик в течение 3 (трёх) рабочих дней подписывает акт или направляет мотивированный отказ с перечнем замечаний.</p><p>6.2. Если в указанный срок Заказчик не подписал акт и не направил мотивированный отказ, Работы считаются принятыми.</p><p>6.3. Скрытые работы оформляются актом освидетельствования до их закрытия последующими работами.</p>' +
      '<h2>7. Гарантии</h2><p>7.1. Подрядчик предоставляет гарантию на выполненные Работы сроком <b>' + esc(co.guarantee || '3 года') + '</b> с даты подписания акта сдачи-приёмки Объекта. В течение гарантийного срока Подрядчик за свой счёт устраняет недостатки, возникшие по его вине, в срок до 14 дней с момента обращения.</p><p>7.2. Гарантия не распространяется на недостатки, возникшие из-за нормального износа, неправильной эксплуатации, действий третьих лиц, дефектов материалов Заказчика, протечек от соседей и аварий инженерных сетей дома.</p>' +
      '<h2>8. Ответственность сторон</h2><p>8.1. За нарушение сроков окончания Работ по вине Подрядчика Заказчик вправе требовать неустойку в размере 0,1% от стоимости невыполненного этапа за каждый день просрочки, но не более 10% от цены договора.</p><p>8.2. За нарушение сроков оплаты Подрядчик вправе требовать неустойку 0,1% от суммы задолженности за каждый день просрочки и приостановить Работы до погашения задолженности.</p><p>8.3. Подрядчик несёт ответственность за ущерб, причинённый Объекту и имуществу третьих лиц по его вине при выполнении Работ.</p>' +
      '<h2>9. Изменение и расторжение договора</h2><p>9.1. Изменение объёма и стоимости Работ оформляется дополнительным соглашением.</p><p>9.2. Заказчик вправе отказаться от исполнения договора в любое время до сдачи Работ, оплатив Подрядчику фактически выполненные Работы и приобретённые материалы (ст. 717 ГК РФ).</p><p>9.3. Расторжение оформляется соглашением с актом взаиморасчётов.</p>' +
      '<h2>10. Прочие условия</h2><p>10.1. Споры решаются переговорами, при недостижении согласия — в суде по месту нахождения Объекта. Претензионный порядок обязателен, срок ответа на претензию — 10 дней.</p><p>10.2. Стороны освобождаются от ответственности при обстоятельствах непреодолимой силы.</p><p>10.3. Договор составлен в двух экземплярах, имеющих равную силу, вступает в силу с момента подписания и действует до полного исполнения обязательств.</p><p>10.4. Приложения: №1 — Смета; №2 — График производства работ.</p>' + (S.set.edo !== false ? EDO_TEXT() : '') +
      '<h2>11. Адреса и подписи сторон</h2>' + sigBlock(cl), 'dogovor-' + o.num);
    if (!K.date){ K.date = today(); save(); } return; }
  if (kind === 'graph') return docOpen('График производства работ', '<h1>График производства работ</h1><div class="sub">Приложение №2 к договору ' + cn + '</div><p>Объект: <b>' + addr + '</b>. Начало работ — ' + ldate(o.start) + ', окончание — ' + ldate(o.end) + '.</p><table><tr><th>№</th><th>Этап работ</th><th>Срок окончания</th><th class="n">% оплаты</th><th class="n">Сумма, ₽</th></tr>' + o.stages.map(function(s, i){ return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(s.name) + '</td><td>' + (s.plan ? ldate(s.plan) : '') + '</td><td class="n">' + s.pct + '%</td><td class="n">' + num(C.total * s.pct / 100, 0) + '</td></tr>'; }).join('') + '<tr class="tot"><td colspan="4">Итого</td><td class="n">' + num(C.total, 0) + '</td></tr></table>' + gantt(o) + sigBlock(cl), 'grafik-' + o.num);
  if (kind === 'measure') return docOpen('Акт замера', '<h1>Акт замера помещений</h1>' + cityDate(today()) + '<p>Объект: <b>' + addr + '</b>. Заказчик: <b>' + esc(cname(cl)) + '</b>.</p><table><tr><th>Помещение</th><th class="n">Пол, м²</th><th class="n">Стены, м²</th><th class="n">Потолок, м²</th><th class="n">Периметр, м</th><th class="n">Высота, м</th><th>Размеры</th></tr>' + o.rooms.map(function(r){ var g2 = geo(r); return '<tr><td>' + esc(r.name) + '</td><td class="n">' + num(g2.floor) + '</td><td class="n">' + num(g2.wall) + '</td><td class="n">' + num(g2.ceil) + '</td><td class="n">' + num(g2.perim) + '</td><td class="n">' + num(r.h) + '</td><td>' + (r.mode === 'poly' ? 'стены: ' + (r.poly || []).map(function(x){ return num(x.len); }).join(' / ') + ' / ' + num(polyGeo(r).close) : r.mode === 'area' ? 'по площади' : num(r.l) + ' × ' + num(r.w)) + '</td></tr>'; }).join('') + '<tr class="tot"><td>Итого</td><td class="n">' + num(C.area) + '</td><td colspan="5"></td></tr></table><p>Замер выполнил: ____________________</p>' + sigBlock(cl), 'zamer-' + o.num);
  if (kind === 'keys'){ var f = { keys:'2', el:'', cw:'', hw:'', heat:'', state:'' };
    return pick('Акт приёма-передачи ключей', [h('div', { class:'grid2' }, [field('Комплектов ключей', inp(f, 'keys')), field('Электроэнергия, кВт·ч', inp(f, 'el'))]), h('div', { class:'grid3' }, [field('ХВС, м³', inp(f, 'cw')), field('ГВС, м³', inp(f, 'hw')), field('Отопление', inp(f, 'heat'))]), field('Состояние помещения, замечания', inp(f, 'state'))], function(){
      docOpen('Акт приёма-передачи ключей', '<h1>Акт приёма-передачи ключей и помещения</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>Заказчик передал, а Подрядчик принял для выполнения работ помещение по адресу: <b>' + addr + '</b>, а также ключи в количестве <b>' + esc(f.keys) + '</b> компл.</p><table><tr><th>Показания приборов учёта</th><th class="n">Значение</th></tr><tr><td>Электроэнергия, кВт·ч</td><td class="n">' + blank(f.el, 80) + '</td></tr><tr><td>Холодная вода, м³</td><td class="n">' + blank(f.cw, 80) + '</td></tr><tr><td>Горячая вода, м³</td><td class="n">' + blank(f.hw, 80) + '</td></tr><tr><td>Отопление</td><td class="n">' + blank(f.heat, 80) + '</td></tr></table><p>Состояние помещения: ' + blank(f.state, 400) + '</p><p>Подрядчик обязуется обеспечить сохранность ключей и вернуть их Заказчику при сдаче Объекта.</p>' + sigBlock(cl), 'klyuchi-' + o.num); }); }
  if (kind === 'hidden'){ var L = allLines(o), chk = {}, box = h('div', { class:'col' }); L.forEach(function(x, i){ if (!/гидроизол|разводк|кабел|штробл|стяжк|канализ|водоснаб|тёпл|тепл|короб|щит|подрозет/i.test(x[1].name)) return; chk[i] = true; var c = h('input', { type:'checkbox', checked:true }); c.onchange = function(){ chk[i] = c.checked; }; box.appendChild(h('label', { class:'chk' }, [c, x[1].name + ' — ' + x[0].name])); });
    if (!box.children.length) box.appendChild(empty('В смете нет типичных скрытых работ — в акт попадут все отмеченные ниже.'));
    return pick('Акт скрытых работ: какие работы', [box], function(){ var rows = L.filter(function(x, i){ return chk[i]; });
      docOpen('Акт освидетельствования скрытых работ', '<h1>Акт освидетельствования скрытых работ</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>Объект: <b>' + addr + '</b>.</p><p>Представители Сторон произвели осмотр работ, выполненных Подрядчиком, и составили настоящий акт о нижеследующем:</p><table><tr><th>№</th><th>Работа</th><th>Помещение</th><th class="n">Объём</th></tr>' + rows.map(function(x, i){ return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(x[1].name) + '</td><td>' + esc(x[0].name) + '</td><td class="n">' + num(qty(x[1], x[0])) + ' ' + esc(x[1].unit) + '</td></tr>'; }).join('') + '</table><p>Работы выполнены в соответствии со Сметой и строительными нормами. Разрешается производство последующих работ.</p><p>Замечания: ' + blank('', 400) + '</p>' + sigBlock(cl), 'skrytye-' + o.num); }); }
  if (kind === 'stage'){ var opts = [['done', 'Все выполненные работы (по отметкам «Готово»)']].concat(o.stages.map(function(s, i){ return ['s' + i, 'Этап: ' + s.name + ' — ' + s.pct + '%']; })), f2 = { v:'done' };
    return pick('Акт выполненных работ', [field('Что принимаем', sel(f2, 'v', opts))], function(){ var body;
      if (f2.v === 'done'){ var tb = worksTable(allLines(o, function(l){ return l.done; }), o); body = tb.html + '<p>Всего выполнено работ на сумму <b>' + money(tb.sum) + '</b>.</p>'; }
      else { var s = o.stages[+f2.v.slice(1)]; body = '<table><tr><th>Этап</th><th class="n">% от цены</th><th class="n">Стоимость, ₽</th></tr><tr><td>' + esc(s.name) + '</td><td class="n">' + s.pct + '%</td><td class="n">' + num(C.total * s.pct / 100, 0) + '</td></tr></table><p>Стоимость принятого этапа — <b>' + money(C.total * s.pct / 100) + '</b>.</p>'; }
      docOpen('Акт выполненных работ', '<h1>Акт выполненных работ</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>' + partyIsp() + ', и ' + partyZak(cl) + ', составили настоящий акт о том, что Подрядчик выполнил, а Заказчик принял следующие работы на Объекте по адресу: <b>' + addr + '</b>:</p>' + body + '<p>Работы выполнены в полном объёме, в установленные сроки и с надлежащим качеством. Заказчик претензий по объёму, качеству и срокам не имеет.</p>' + sigBlock(cl), 'akt-' + o.num); }); }
  if (kind === 'extra'){ var EL = allLines(o, function(l){ return l.extra; }); if (!EL.length) return toast('Нет строк «доп. работа». Отметьте их в смете через меню ⋯');
    var et = worksTable(EL, o); return docOpen('Дополнительное соглашение', '<h1>Дополнительное соглашение №' + ((K.addN = (K.addN || 0) + 1)) + '</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>' + partyIsp() + ', и ' + partyZak(cl) + ', заключили настоящее соглашение о нижеследующем:</p><p>1. Стороны согласовали выполнение дополнительных работ на Объекте по адресу <b>' + addr + '</b>:</p>' + et.html + '<p>2. Стоимость дополнительных работ составляет <b>' + money(et.sum) + '</b>.</p><p>3. Цена договора с учётом дополнительных работ составляет <b>' + money(C.total) + '</b>.</p><p>4. Срок выполнения работ по договору ' + (o.end ? 'остаётся до ' + ldate(o.end) : 'продлевается на ____ дней') + '.</p><p>5. Остальные условия договора остаются без изменений. Соглашение является неотъемлемой частью договора.</p>' + sigBlock(cl), 'dopsoglashenie-' + o.num); }
  if (kind === 'final') return docOpen('Акт сдачи-приёмки объекта', '<h1>Акт сдачи-приёмки объекта</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>' + partyIsp() + ', и ' + partyZak(cl) + ', составили настоящий акт о том, что работы по договору на Объекте по адресу <b>' + addr + '</b> выполнены в полном объёме и приняты Заказчиком.</p><table><tr><td>Стоимость работ по договору</td><td class="n">' + rub(C.total) + '</td></tr><tr><td>Оплачено Заказчиком</td><td class="n">' + rub(C.inc) + '</td></tr><tr class="tot"><td>' + (C.debt > 0 ? 'К оплате' : 'Задолженности нет') + '</td><td class="n">' + rub(Math.max(0, C.debt)) + '</td></tr></table><p>Ключи в количестве ____ компл. возвращены Заказчику. Гарантийный срок — <b>' + esc(co.guarantee) + '</b> с даты подписания настоящего акта. Заказчик претензий по объёму, качеству и срокам работ не имеет.</p><p>Замечания: ' + blank('', 400) + '</p>' + sigBlock(cl), 'akt-sdachi-' + o.num);
  if (kind === 'guarantee') return docOpen('Гарантийное обязательство', '<h1>Гарантийное обязательство</h1><div class="sub">к договору ' + cn + '</div>' + cityDate(today()) + '<p>' + esc(co.full) + ' гарантирует качество ремонтно-отделочных работ, выполненных на Объекте по адресу <b>' + addr + '</b>, в течение <b>' + esc(co.guarantee) + '</b> с даты подписания акта сдачи-приёмки.</p><p>В течение гарантийного срока Подрядчик за свой счёт устраняет недостатки, возникшие по его вине: трещины и отслоение отделочных покрытий, дефекты укладки плитки и напольных покрытий, протечки в выполненных Подрядчиком соединениях, неисправности смонтированной электропроводки.</p><p>Гарантия не распространяется на: нормальный износ; механические повреждения; неправильную эксплуатацию; дефекты материалов и оборудования Заказчика; усадку дома и деформации несущих конструкций; протечки от соседей и аварии сетей дома; работы, изменённые третьими лицами.</p><p>Для обращения по гарантии звоните: <b>' + esc(co.phone) + '</b> или пишите: ' + esc(co.email) + '. Выезд специалиста — в течение 3 рабочих дней, устранение — до 14 дней.</p>' + sigBlock(cl), 'garantiya-' + o.num);
  if (kind === 'receipt'){ var ins = (o.pays || []).filter(function(p){ return p.kind === 'in'; }); if (!ins.length) return toast('По объекту нет поступлений от клиента — добавьте во вкладке «Деньги»');
    var f3 = { i:String(ins.length - 1) }; return pick('Квитанция: какой платёж', [field('Платёж', sel(f3, 'i', ins.map(function(p, i){ return [String(i), fdate(p.d) + ' — ' + rub(p.sum) + (p.note ? ' · ' + p.note : '')]; })))], function(){ var p = ins[+f3.i];
      docOpen('Квитанция об оплате', '<h1>Квитанция о получении денежных средств</h1>' + cityDate(p.d) + '<p>' + esc(co.full) + ' получил(о) от <b>' + esc(cname(cl)) + '</b> денежные средства в сумме <b>' + money(p.sum) + '</b> в счёт оплаты по договору ' + cn + ' за ремонтно-отделочные работы на Объекте по адресу ' + addr + '.</p><p>Назначение: ' + esc(p.note || p.cat) + '.</p><table><tr><td>Цена договора</td><td class="n">' + rub(C.total) + '</td></tr><tr><td>Всего оплачено с учётом этого платежа</td><td class="n">' + rub(C.inc) + '</td></tr><tr class="tot"><td>Остаток к оплате</td><td class="n">' + rub(Math.max(0, C.debt)) + '</td></tr></table><div class="sig2"><div>Получил: ' + signLine(co, false) + (co.kind === 'sz' ? '<br><small>Чек «Мой налог» № __________</small>' : '') + '</div><div>Передал: ' + signLine(cl, true) + '</div></div>', 'kvitanciya-' + o.num); }); }
  if (kind === 'sverka'){ var ins2 = (o.pays || []).filter(function(p){ return p.kind === 'in'; });
    return docOpen('Акт сверки расчётов', '<h1>Акт сверки взаимных расчётов</h1><div class="sub">по договору ' + cn + '</div>' + cityDate(today()) + '<table><tr><th>Дата</th><th>Операция</th><th class="n">Начислено, ₽</th><th class="n">Оплачено, ₽</th></tr><tr><td>' + fdate(K.date) + '</td><td>Цена договора по смете</td><td class="n">' + num(C.total, 0) + '</td><td></td></tr>' + ins2.map(function(p){ return '<tr><td>' + fdate(p.d) + '</td><td>' + esc(p.note || p.cat) + '</td><td></td><td class="n">' + num(p.sum, 0) + '</td></tr>'; }).join('') + '<tr class="tot"><td colspan="2">Итого</td><td class="n">' + num(C.total, 0) + '</td><td class="n">' + num(C.inc, 0) + '</td></tr></table><p>На ' + ldate(today()) + ' ' + (C.debt > 0 ? 'задолженность Заказчика перед Подрядчиком составляет <b>' + money(C.debt) + '</b>.' : C.debt < 0 ? 'переплата Заказчика составляет <b>' + money(-C.debt) + '</b>.' : 'задолженность отсутствует.') + '</p>' + sigBlock(cl), 'sverka-' + o.num); }
  if (kind === 'cancel'){ var matsSpent = (o.pays || []).filter(function(p){ return p.kind === 'out' && p.cat === 'Материалы'; }).reduce(function(a, p){ return a + p.sum; }, 0), f4 = { d:today(), why:'по инициативе Заказчика', done:Math.round(C.done + matsSpent) };
    return pick('Соглашение о расторжении', [field('Дата расторжения', inp(f4, 'd', 'date')), field('Основание', sel(f4, 'why', ['по инициативе Заказчика', 'по взаимному согласию Сторон', 'по инициативе Подрядчика'])), field('Стоимость выполненных работ и материалов, ₽', inp(f4, 'done', 'number'), 'посчитано по отметкам «Готово» + закупленные материалы: ' + rub(C.done) + ' + ' + rub(matsSpent))], function(){ var diff = C.inc - (+f4.done || 0);
      docOpen('Соглашение о расторжении договора', '<h1>Соглашение о расторжении договора</h1><div class="sub">' + cn + '</div>' + cityDate(f4.d) + '<p>' + partyIsp() + ', и ' + partyZak(cl) + ', заключили настоящее соглашение о нижеследующем:</p><p>1. Договор подряда ' + cn + ' расторгается ' + esc(f4.why) + ' с ' + ldate(f4.d) + '.</p><p>2. На дату расторжения Подрядчиком выполнены работы и приобретены материалы на сумму <b>' + money(+f4.done) + '</b>. Заказчиком оплачено <b>' + money(C.inc) + '</b>.</p><p>3. ' + (diff > 0 ? 'Подрядчик возвращает Заказчику <b>' + money(diff) + '</b> в течение 10 (десяти) рабочих дней с даты подписания настоящего соглашения.' : diff < 0 ? 'Заказчик оплачивает Подрядчику <b>' + money(-diff) + '</b> в течение 5 (пяти) рабочих дней с даты подписания настоящего соглашения.' : 'Стороны произвели расчёты в полном объёме.') + '</p><p>4. Подрядчик возвращает Заказчику ключи от Объекта и неиспользованные материалы Заказчика в день подписания соглашения.</p><p>5. После исполнения п. 3–4 Стороны не имеют друг к другу претензий по договору. Гарантия Подрядчика распространяется на фактически выполненные и принятые работы.</p><p>6. Соглашение составлено в двух экземплярах, по одному для каждой из Сторон.</p>' + sigBlock(cl), 'rastorzhenie-' + o.num); }); }
  if (kind === 'pd' && cl.kind && cl.kind !== 'fl') return toast('Согласие на обработку ПД нужно только для физлиц');
  if (kind === 'pd') return docOpen('Согласие на обработку персональных данных', '<h1>Согласие на обработку персональных данных</h1>' + cityDate(today()) + '<p>Я, <b>' + esc(cl.name) + '</b>, паспорт ' + blank(cl.pass, 120) + ', выдан ' + blank(cl.passBy, 220) + ', зарегистрирован(а) по адресу: ' + blank(cl.reg, 260) + ', в соответствии с Федеральным законом №152-ФЗ «О персональных данных» даю согласие ' + esc(co.full) + (co.inn ? ' (ИНН ' + esc(co.inn) + ')' : '') + ', адрес: ' + esc(co.addr || '') + ', на обработку моих персональных данных: фамилия, имя, отчество, паспортные данные, адрес регистрации и адрес объекта, номер телефона, адрес электронной почты.</p><p>Цель обработки — заключение и исполнение договора подряда, информирование о ходе работ, выдача документов. Перечень действий: сбор, запись, систематизация, хранение, уточнение, использование, удаление, уничтожение, с использованием средств автоматизации и без них.</p><p>Согласие действует до достижения целей обработки и может быть отозвано мной письменным заявлением.</p><p style="margin-top:30px">____________ / ' + esc(cl.name) + ' &nbsp; ' + ldate(today()) + '</p>', 'soglasie-pd-' + o.num);
}

/* ================= ДОКУМЕНТЫ: PDF и Excel ================= */
var MARK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 26 418 415"><path fill="#2B2F32" d="M208,431 L351,328 L351,286 L438,252 L438,363 L351,431 Z"/><path fill="#4A5054" d="M351,179 L438,129 L438,252 L351,286 Z"/><path fill="#6A7175" d="M290,36 L438,129 L351,179 L290,143 Z"/><path fill="#00B47E" d="M208,94 L290,36 L290,143 Z"/><path fill="#14C48C" d="M55,432 L351,286 L351,328 L208,431 Z"/><path fill="#00B47E" d="M202,94 L112,159 L112,390 L150,370 L150,182 L202,145 Z"/><path fill="#30363A" d="M202,145 L166,170 L166,363 L202,343 Z"/><path fill="#00B47E" d="M95,221 L40,257 L40,427 L95,398 Z"/></svg>';
function pdfDialog(o){
  S.set.pdf = S.set.pdf || { view:'rooms', mats:true, stages:true, sig:true, notes:true, extra:true };
  var P = S.set.pdf, box = h('div', { class:'dlg' });
  function ck(k, t){ var c = h('input', { type:'checkbox' }); c.checked = !!P[k]; c.onchange = function(){ P[k] = c.checked; save(); }; return h('label', { class:'chk' }, [c, t]); }
  box.appendChild(card('Смета клиенту — PDF', [field('Вид сметы', sel(P, 'view', [['rooms', 'Подробно по помещениям'], ['secs', 'По видам работ (все помещения вместе)'], ['brief', 'Кратко: только итоги по помещениям']])),
    h('div', { class:'col' }, [ck('mats', 'Список материалов'), ck('stages', 'Оплата по этапам'), ck('notes', 'Комментарии к работам'), ck('extra', 'Доп. работы отдельным блоком'), ck('sig', 'Подписи сторон')]),
    h('div', { class:'row' }, [h('span', { class:'sp' }), btn('', 'Отмена', 'lt', function(){ box.remove(); }), btn('pdf', 'Открыть смету', '', function(){ box.remove(); pdfClient(o, P); })])]));
  box.onclick = function(e){ if (e.target === box) box.remove(); }; document.body.appendChild(box);
}
function pdfClient(o, P){
  P = P || { view:'rooms', mats:true, stages:true, sig:true, notes:true, extra:true };
  var C = objCalc(o), c = client(o.cid), co = entCo(o), n = 0;
  function lrow(l, q, r){ return '<tr><td class="c">' + (++n) + '</td><td>' + esc(l.name) + (P.notes && l.note ? '<div class="nt">' + esc(l.note) + '</div>' : '') + '</td><td class="c">' + esc(l.unit) + '</td><td class="n">' + num(q) + '</td><td class="n">' + num(lp(l, o), 0) + '</td><td class="n">' + num(q * lp(l, o), 0) + '</td></tr>'; }
  var main = [], extra = [];
  C.rooms.forEach(function(x){ x.r.lines.forEach(function(l){ ((P.extra && l.extra) ? extra : main).push([x.r, l]); }); });
  var head = '<thead><tr><th class="c">№</th><th>Наименование работ</th><th class="c">Ед</th><th class="n">Кол-во</th><th class="n">Цена, ₽</th><th class="n">Сумма, ₽</th></tr></thead>';
  function block(L){
    if (P.view === 'brief'){ var by = {}; L.forEach(function(x){ var k = x[0].id; by[k] = by[k] || { r:x[0], s:0 }; by[k].s += qty(x[1], x[0]) * lp(x[1], o); }); return '<table><thead><tr><th>Помещение</th><th class="n">Площадь пола</th><th class="n">Сумма, ₽</th></tr></thead><tbody>' + Object.keys(by).map(function(k){ return '<tr><td>' + esc(by[k].r.name) + '</td><td class="n">' + num(geo(by[k].r).floor) + ' м²</td><td class="n">' + num(by[k].s, 0) + '</td></tr>'; }).join('') + '</tbody></table>'; }
    if (P.view === 'secs'){ var g = {}, ord = []; L.forEach(function(x){ var sec = lineSec(x[1]), key = x[1].name + '|' + x[1].unit + '|' + lp(x[1], o); if (!g[sec]){ g[sec] = {}; ord.push(sec); } var it = g[sec][key] || (g[sec][key] = { l:x[1], q:0, notes:[] }); it.q += qty(x[1], x[0]); if (x[1].note) it.notes.push(x[1].note); });
      return '<table>' + head + '<tbody>' + ord.map(function(sec){ var items = Object.keys(g[sec]).map(function(k){ return g[sec][k]; }), st = items.reduce(function(a, it){ return a + it.q * lp(it.l, o); }, 0); return '<tr class="rm"><td colspan="5"><b>' + esc(sec) + '</b></td><td class="n"><b>' + rub(st) + '</b></td></tr>' + items.map(function(it){ var l2 = Object.assign({}, it.l, { note:it.notes.join('; ') }); return lrow(l2, r2(it.q)); }).join(''); }).join('') + '</tbody></table>'; }
    var rooms = [], m = {}; L.forEach(function(x){ if (!m[x[0].id]){ m[x[0].id] = []; rooms.push(x[0]); } m[x[0].id].push(x[1]); });
    return '<table>' + head + '<tbody>' + rooms.map(function(r){ var g2 = geo(r), st = m[r.id].reduce(function(a, l){ return a + qty(l, r) * lp(l, o); }, 0); return '<tr class="rm"><td colspan="5"><b>' + esc(r.name) + '</b> <span>' + (g2.floor ? num(g2.floor) + ' м² · стены ' + num(g2.wall) + ' м²' : '') + '</span></td><td class="n"><b>' + rub(st) + '</b></td></tr>' + m[r.id].map(function(l){ return lrow(l, qty(l, r), r); }).join(''); }).join('') + '</tbody></table>'; }
  var mainSum = main.reduce(function(a, x){ return a + qty(x[1], x[0]) * lp(x[1], o); }, 0), exSum = extra.reduce(function(a, x){ return a + qty(x[1], x[0]) * lp(x[1], o); }, 0);
  var body = block(main) + (extra.length ? '<h2>Дополнительные работы</h2>' + block(extra) : '');
  var mt = ''; if (P.mats && !o.noMats){ var ML = Object.keys(C.matList).map(function(k){ return C.matList[k]; }); if (ML.length || (o.extraMats || []).length) mt = '<h2>Черновые материалы</h2><table><thead><tr><th>Материал</th><th class="c">Ед</th><th class="n">Кол-во</th><th class="n">Сумма, ₽</th></tr></thead><tbody>' + ML.map(function(x){ var q = Math.ceil(x.q); return '<tr><td>' + esc(x.m.name) + '</td><td class="c">' + esc(x.m.unit) + '</td><td class="n">' + num(q) + '</td><td class="n">' + num(q * x.m.price * (1 + C.mm / 100), 0) + '</td></tr>'; }).join('') + (o.extraMats || []).map(function(x){ return '<tr><td>' + esc(x.name) + '</td><td></td><td class="n">' + num(x.q) + '</td><td class="n">' + num((+x.q || 0) * (+x.price || 0) * (1 + C.mm / 100), 0) + '</td></tr>'; }).join('') + '</tbody></table>'; }
  var st = P.stages ? '<h2>Оплата по этапам</h2><table><thead><tr><th>Этап</th><th class="n">%</th><th class="n">Сумма, ₽</th></tr></thead><tbody>' + o.stages.map(function(s){ return '<tr><td>' + esc(s.name) + '</td><td class="n">' + s.pct + '%</td><td class="n">' + num(C.total * s.pct / 100, 0) + '</td></tr>'; }).join('') + '</tbody></table>' : '';
  var tot = '<table class="tot"><tr><td>Работы' + (extra.length ? ' (основные)' : '') + '</td><td class="n">' + rub(mainSum) + '</td></tr>' + (extra.length ? '<tr><td>Дополнительные работы</td><td class="n">' + rub(exSum) + '</td></tr>' : '') + (C.mats ? '<tr><td>Материалы</td><td class="n">' + rub(C.mats) + '</td></tr>' : '') + (C.disc ? '<tr class="dc"><td>' + esc(discText(o)) + '</td><td class="n">−' + rub(C.disc) + '</td></tr>' : '') + '<tr class="big"><td>Итого</td><td class="n">' + rub(C.total) + '</td></tr><tr><td class="mu">За м² пола (' + num(C.area, 1) + ' м²)</td><td class="n mu">' + rub(C.perM) + '</td></tr></table>';
  var css = '@page{size:A4;margin:12mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}html{font-size:15px}body{font:1rem/1.5 Arial,Helvetica,sans-serif;color:#16191B;margin:0;background:#fff}' +
    '.page{max-width:960px;margin:0 auto;padding:24px 20px 40px}header{display:flex;gap:16px;align-items:center;border-bottom:3px solid #00B47E;padding-bottom:14px;margin-bottom:18px}header svg{width:56px;height:56px;flex:none}header img.lgi{height:58px;width:auto;max-width:170px;object-fit:contain;flex:none}header .co{flex:1}header .co b{font-size:1.7rem;letter-spacing:.06em}header small{display:block;color:#5E666A;font-size:.85rem}header .ph{text-align:right}header .ph b{font-size:1.15rem}' +
    'h1{font-size:1.75rem;margin:6px 0 10px}h2{font-size:1.2rem;margin:26px 0 8px}.meta{display:grid;grid-template-columns:1fr 1fr;gap:6px 24px;margin-bottom:16px;font-size:1rem}.meta b{font-weight:700}' +
    'table{width:100%;border-collapse:collapse;margin-bottom:8px}th{background:#16191B;color:#fff;text-align:left;padding:9px 8px;font-size:.85rem;font-weight:700}td{padding:8px;border-bottom:1px solid #E3E6E5;vertical-align:top;font-size:.95rem}.n{text-align:right;white-space:nowrap}.c{text-align:center}tr.rm td{background:#E6F6F0;border-bottom:0;font-size:1rem}tr.rm span{color:#5E666A;margin-left:8px;font-size:.85rem}.nt{color:#5E666A;font-size:.82rem;margin-top:2px}' +
    '.tot{margin:14px 0 0 auto;width:420px;max-width:100%}.tot td{border:0;padding:5px 8px;font-size:1.02rem}.tot .dc td{color:#007A55;font-weight:700}.tot .big td{font-size:1.45rem;font-weight:800;border-top:2px solid #16191B;padding-top:9px}.tot .mu{color:#5E666A;font-size:.9rem}' +
    '.note{background:#F4F5F4;padding:12px 14px;border-radius:8px;margin-top:16px;font-size:.95rem}.sig{display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:44px}.sig div{border-top:1px solid #888;padding-top:6px;color:#5E666A}' +
    '.bar{position:sticky;top:0;background:#16191B;color:#fff;padding:10px 16px;display:flex;gap:10px;align-items:center;justify-content:space-between;z-index:5}.bar b{font-size:.95rem}.bar button{background:#00B47E;color:#fff;border:0;border-radius:8px;padding:11px 18px;font-weight:700;font-size:.95rem;cursor:pointer}' +
    '@media print{.bar{display:none}.page{padding:0;max-width:none}html{font-size:11.5pt}tr{break-inside:avoid}h2{break-after:avoid}}@media (max-width:640px){html{font-size:14px}.page{padding:14px 10px}header{flex-wrap:wrap}.meta{grid-template-columns:1fr}.sig{grid-template-columns:1fr;gap:30px}th,td{padding:6px 5px}.tot{width:100%}}';
  var html = '<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Смета №' + o.num + ' — ' + esc(c.name) + '</title><style>' + css + '</style></head><body>' +
    '<div class="bar"><b>Смета №' + o.num + '. Чтобы сохранить PDF: «Печать» → принтер «Сохранить как PDF»</b><button onclick="window.print()">Печать / PDF</button></div><div class="page">' +
    '<header>' + logoHtml(co) + '<div class="co"><b>' + esc(co.name.toUpperCase()) + '</b><small>' + esc([co.full, co.inn ? 'ИНН ' + co.inn : '', co.addr].filter(Boolean).join(' · ')) + '</small></div><div class="ph"><b>' + esc(co.phone) + '</b><small>' + esc([co.email, co.site].filter(Boolean).join(' · ')) + '</small></div></header>' +
    '<h1>Смета №' + o.num + ' на ремонт</h1><div class="meta"><div>Заказчик: <b>' + esc(cname(c)) + '</b></div><div>Дата: <b>' + fdate(today()) + '</b></div><div>Объект: <b>' + esc(o.addr || o.name) + '</b></div><div>Площадь пола: <b>' + num(C.area, 1) + ' м²</b></div></div>' +
    body + mt + tot + st + '<div class="note">' + esc(co.note) + ' Гарантия на работы — ' + esc(co.guarantee) + '. Смета действительна ' + esc(co.valid) + ' дней.</div>' + (P.sig ? '<div class="sig"><div>Исполнитель: ' + esc(co.full) + '</div><div>Заказчик: ' + esc(c.name) + '</div></div>' : '') + '</div></body></html>';
  if (docSink){ var sk = docSink; docSink = null; return sk('Смета №' + o.num, html); }
  var url = URL.createObjectURL(new Blob([html], { type:'text/html;charset=utf-8' }));
  var wnd = window.open(url, '_blank'); if (!wnd){ download('smeta-' + o.num + '.html', html, 'text/html;charset=utf-8'); toast('Браузер заблокировал окно — смета скачана файлом, откройте его'); }
  setTimeout(function(){ URL.revokeObjectURL(url); }, 60000); logA('№' + o.num + ': смета PDF');
}
var XLSX_URL = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js', xl = null;
function loadXLSX(){ return xl || (xl = new Promise(function(res, rej){ if (window.XLSX) return res(window.XLSX); var s = document.createElement('script'); s.src = XLSX_URL; s.onload = function(){ res(window.XLSX); }; s.onerror = function(){ xl = null; rej(new Error('Не загрузилась библиотека Excel. Проверьте интернет.')); }; document.head.appendChild(s); })); }
function saveBook(name, sheets){ loadXLSX().then(function(X){ var wb = X.utils.book_new(); sheets.forEach(function(s){ var ws = X.utils.aoa_to_sheet(s.rows); ws['!cols'] = s.cols.map(function(w){ return { wch:w }; }); X.utils.book_append_sheet(wb, ws, s.name.slice(0, 31)); }); download(name, new Blob([X.write(wb, { type:'array', bookType:'xlsx' })], { type:'application/octet-stream' })); }).catch(function(e){ toast(e.message); }); }
function fn(o, what){ return 'smeta-' + o.num + '-' + what + '.xlsx'; }
function xlsClient(o){
  var C = objCalc(o), c = client(o.cid), R = [[S.co.full + ' · ' + S.co.phone], ['Смета №' + o.num + ' — ' + (o.addr || o.name)], ['Заказчик: ' + c.name, '', '', 'Дата: ' + fdate(today())], [], ['№', 'Наименование', 'Ед', 'Кол-во', 'Цена', 'Сумма']], n = 0;
  C.rooms.forEach(function(x){ R.push([x.r.name + ' (' + num(geo(x.r).floor) + ' м²)', '', '', '', '', Math.round(x.sum)]); x.r.lines.forEach(function(l){ var q = r2(qty(l, x.r)); R.push([++n, l.name, l.unit, q, Math.round(lp(l, o)), Math.round(q * lp(l, o))]); }); });
  R.push([]); R.push(['', 'Работы', '', '', '', Math.round(C.works)]); if (C.mats) R.push(['', 'Материалы', '', '', '', Math.round(C.mats)]); if (C.disc) R.push(['', discText(o), '', '', '', -Math.round(C.disc)]); R.push(['', 'ИТОГО', '', '', '', Math.round(C.total)]);
  var St = [['Этап', '%', 'Сумма']].concat(o.stages.map(function(s){ return [s.name, s.pct, Math.round(C.total * s.pct / 100)]; }));
  saveBook(fn(o, 'klient'), [{ name:'Смета', rows:R, cols:[6, 52, 7, 10, 10, 14] }, { name:'Оплата по этапам', rows:St, cols:[50, 8, 14] }]); logA('№' + o.num + ': смета Excel');
}
function xlsMasters(o){
  var sheets = [], by = {}; o.rooms.forEach(function(r){ r.lines.forEach(function(l){ (by[l.who || ''] = by[l.who || ''] || []).push([r, l]); }); });
  var all = [['Задание по объекту №' + o.num + ' — ' + (o.addr || o.name)], ['Прораб: ' + (crewName(o.prorab) || '—')], [], ['Помещение', 'Работа', 'Ед', 'Кол-во', 'Ставка', 'Сумма', 'Мастер', 'Готово']], tot = 0;
  o.rooms.forEach(function(r){ var g = geo(r); all.push([r.name + ' — ' + num(r.l) + '×' + num(r.w) + '×' + num(r.h) + ' м (пол ' + num(g.floor) + ', стены ' + num(g.wall) + ')']); r.lines.forEach(function(l){ var q = r2(qty(l, r)), s = Math.round(lineLabor(l, q, o)); tot += s; all.push(['', l.name, l.unit, q, q ? Math.round(s / q) : 0, s, crewName(l.who), l.done ? 'да' : '']); }); });
  all.push([]); all.push(['', 'ИТОГО к оплате мастерам', '', '', '', tot]);
  sheets.push({ name:'Все работы', rows:all, cols:[24, 46, 6, 9, 9, 11, 18, 8] });
  Object.keys(by).forEach(function(k){ if (!k) return; var rows = [['Мастер: ' + crewName(k) + ' · объект №' + o.num], [], ['Помещение', 'Работа', 'Ед', 'Кол-во', 'Ставка', 'Сумма']], t = 0; by[k].forEach(function(x){ var q = r2(qty(x[1], x[0])), s = Math.round(lineLabor(x[1], q, o)); t += s; rows.push([x[0].name, x[1].name, x[1].unit, q, q ? Math.round(s / q) : 0, s]); }); rows.push([]); rows.push(['', 'Итого', '', '', '', t]); sheets.push({ name:crewName(k), rows:rows, cols:[20, 46, 6, 9, 9, 11] }); });
  saveBook(fn(o, 'mastera'), sheets); logA('№' + o.num + ': задание мастерам Excel');
}
function xlsBuy(o){
  var C = objCalc(o), R = [['Закупка материалов · объект №' + o.num + ' — ' + (o.addr || o.name)], [], ['Материал', 'Ед', 'Кол-во', 'Цена', 'Сумма', 'Куплено']], t = 0;
  Object.keys(C.matList).forEach(function(k){ var x = C.matList[k], q = Math.ceil(x.q); t += q * x.m.price; R.push([x.m.name, x.m.unit, q, x.m.price, q * x.m.price, '']); });
  (o.extraMats || []).forEach(function(x){ t += (+x.q || 0) * (+x.price || 0); R.push([x.name, '', x.q, x.price, (+x.q || 0) * (+x.price || 0), '']); });
  R.push([]); R.push(['ИТОГО', '', '', '', Math.round(t)]);
  saveBook(fn(o, 'zakupka'), [{ name:'Закупка', rows:R, cols:[42, 8, 9, 10, 12, 10] }]);
}

/* ================= БРИГАДЫ ================= */
var ROLES = ['Прораб', 'Менеджер', 'Бригадир', 'Мастер-универсал', 'Плиточник', 'Электрик', 'Сантехник', 'Маляр', 'Монтажник ГКЛ', 'Подсобник', 'Замерщик', 'Дизайнер', 'Сметчик', 'Снабженец'];
function ym(d){ return String(d || '').slice(0, 7); }
function monthName(k){ return new Date(k + '-01').toLocaleDateString('ru-RU', { month:'long', year:'numeric' }); }
/* все начисления сотрудникам: работы, проценты, оклады, табель, премии и штрафы */
function earnEntries(){
  var E = [], td = today();
  S.objs.forEach(function(o){ if (o.status === 'Отказ') return;
    (o.rooms || []).forEach(function(r){ (r.lines || []).forEach(function(ln){ if (!ln.done || !ln.who) return; var c = byId(S.crew, ln.who); if (!c) return; var p = payOf(c); if (p.type !== 'piece' && p.type !== 'pctWork') return; var q = qty(ln, r); E.push({ who:c.id, d:ln.doneAt || o.start || o.at, sum:lineLabor(ln, q, o), what:ln.name + ' — ' + num(q) + ' ' + ln.unit + ' (' + r.name + ')', oid:o.id, kind:'work' }); }); });
    var C = objCalc(o);
    C.roles.forEach(function(x){ if (x.role === 'Прораб') (o.stages || []).forEach(function(st){ if (st.done) E.push({ who:x.c.id, d:st.doneAt || td, sum:x.plan * (+st.pct || 0) / 100, what:'Прораб, этап «' + st.name + '»', oid:o.id, kind:'role' }); });
      else if (o.contractAt) E.push({ who:x.c.id, d:o.contractAt, sum:x.plan, what:x.role + ' — договор', oid:o.id, kind:'role' }); });
  });
  S.crew.forEach(function(c){ var p = payOf(c); if (p.type !== 'salary' || !+p.fix) return; var m = ym(c.from || td), end = ym(c.to || td); while (m <= end){ E.push({ who:c.id, d:m + '-01', sum:+p.fix, what:'Оклад за ' + monthName(m), oid:'', kind:'salary' }); var dt = new Date(m + '-01'); dt.setMonth(dt.getMonth() + 1); m = dt.toISOString().slice(0, 7); } });
  (S.days || []).forEach(function(x){ var c = byId(S.crew, x.who); if (!c) return; E.push({ who:c.id, d:x.d, sum:(+x.n || 1) * (+payOf(c).day || 0), what:'Табель: ' + (+x.n || 1) + ' дн.' + (x.oid && byId(S.objs, x.oid) ? ' · №' + byId(S.objs, x.oid).num : ''), oid:x.oid || '', kind:'day', ref:x }); });
  (S.adj || []).forEach(function(x){ E.push({ who:x.who, d:x.d, sum:+x.sum || 0, what:(x.sum >= 0 ? 'Премия' : 'Штраф') + (x.note ? ': ' + x.note : ''), oid:x.oid || '', kind:'adj', ref:x }); });
  return E;
}
function salaryPays(){ var P = []; S.objs.forEach(function(o){ (o.pays || []).forEach(function(p){ if (p.cat === 'Зарплата' && p.who) P.push({ p:p, o:o }); }); }); S.gexp.forEach(function(p){ if (p.cat === 'Зарплата' && p.who) P.push({ p:p, o:null }); }); return P; }
function crewStats(from, to){ var M = {}; S.crew.forEach(function(c){ M[c.id] = { earned:0, adj:0, paid:0, all:0, allPaid:0, objs:{} }; });
  earnEntries().forEach(function(e){ var m = M[e.who]; if (!m) return; m.all += e.sum; if (e.oid) m.objs[e.oid] = byId(S.objs, e.oid); if ((!from || e.d >= from) && (!to || e.d <= to)){ if (e.kind === 'adj') m.adj += e.sum; else m.earned += e.sum; } });
  salaryPays().forEach(function(x){ var m = M[x.p.who]; if (!m) return; m.allPaid += +x.p.sum || 0; if ((!from || x.p.d >= from) && (!to || x.p.d <= to)) m.paid += +x.p.sum || 0; });
  S.objs.forEach(function(o){ ['prorab', 'manager', 'designer'].forEach(function(k){ if (o[k] && M[o[k]]) M[o[k]].objs[o.id] = o; }); (o.rooms || []).forEach(function(r){ (r.lines || []).forEach(function(l){ if (l.who && M[l.who]) M[l.who].objs[o.id] = o; }); }); });
  return M; }
function payFields(c, onch){ var p = payOf(c), box = h('div');
  function draw(){ box.innerHTML = ''; var f = [field('Схема оплаты', sel(p, 'type', PAY.map(function(x){ return [x[0], x[1]]; }), function(){ save(); draw(); if (onch) onch(); }))];
    if (p.type === 'piece') f.push(field('Коэффициент к ставкам', inp(p, 'k', 'number', onch, { step:'0.05' }), '1 — как в справочнике, 1.2 — на 20% больше'));
    if (/pct/.test(p.type)) f.push(field('Процент, %', inp(p, 'pct', 'number', onch, { step:'0.5' })));
    if (p.type === 'perObj' || p.type === 'salary') f.push(field(p.type === 'salary' ? 'Оклад в месяц, ₽' : 'Сумма за объект, ₽', inp(p, 'fix', 'number', onch)));
    if (p.type === 'day') f.push(field('Ставка за день, ₽', inp(p, 'day', 'number', onch)));
    box.appendChild(h('div', { class:'grid2' }, f)); box.appendChild(h('small', { class:'muted', text:PAY.filter(function(x){ return x[0] === p.type; })[0][2] + (/pctObj|pctProfit|perObj/.test(p.type) ? '. Назначьте сотрудника прорабом, менеджером или дизайнером в карточке объекта.' : '') })); }
  draw(); return box; }
V.crew = function(w){
  title('Бригады и сотрудники');
  $('#barR').appendChild(btn('plus', 'Сотрудник', '', function(){ S.crew.push({ id:uid(), name:'Новый сотрудник', role:'Мастер-универсал', phone:'', brig:'', note:'', from:today() }); save(); go('crew'); }));
  var M = crewStats();
  if (!S.crew.length){ w.appendChild(card(null, [empty('Добавьте прорабов, менеджеров и мастеров — у каждого своя схема оплаты: сдельно, процент, оклад, за день.')])); return; }
  var g = h('div', { class:'cg' });
  S.crew.forEach(function(c, i){ var m = M[c.id], act = Object.keys(m.objs).map(function(k){ return m.objs[k]; }).filter(function(o){ return o && o.status === 'В работе'; }), debt = m.all - m.allPaid;
    g.appendChild(card(null, [h('div', { class:'grid2' }, [field('Имя', inp(c, 'name')), field('Должность', sel(c, 'role', ROLES))]), h('div', { class:'grid2' }, [field('Телефон', inp(c, 'phone', 'tel')), field('Бригада', inp(c, 'brig', 'text', null, { placeholder:'например «Бригада Иванова»' }))]),
      payFields(c), h('div', { class:'grid2' }, [field('Работает с', inp(c, 'from', 'date')), field('Уволен', inp(c, 'to', 'date'))]),
      h('div', { class:'mini' }, [h('span', {}, ['Начислено ', h('b', { text:rub(m.all) })]), h('span', {}, ['Выплачено ', h('b', { text:rub(m.allPaid) })]), h('span', {}, [debt >= 0 ? 'Долг ему ' : 'Переплата ', h('b', { class:debt > 0 ? 'bad' : '', text:rub(Math.abs(debt)) })])]),
      h('small', { class:'muted', text:act.length ? 'Сейчас на объектах: ' + act.map(function(o){ return '№' + o.num; }).join(', ') : c.to ? 'Уволен ' + fdate(c.to) : 'Свободен' }),
      h('div', { class:'row' }, [btn('user', 'Карточка', 'lt xs', function(){ go('person', c.id); }), btn('coin', 'Расчёт', 'lt xs', function(){ go('emp', c.id); }), c.phone ? h('a', { class:'btn lt xs', href:'tel:' + c.phone.replace(/[^\d+]/g, '') }, [ic('phone'), 'Позвонить']) : null, h('span', { class:'sp' }), h('button', { class:'btn red xs', text:'Удалить', onclick:function(){ if (m.all || m.allPaid) return toast('По сотруднику есть начисления — отметьте дату увольнения вместо удаления'); if (confirm('Удалить ' + c.name + '?')){ S.crew.splice(i, 1); save(); go('crew'); } } })])], 'cc')); });
  w.appendChild(g);
};
/* ================= ДЕНЬГИ ================= */
V.money = function(w){
  title('Деньги');
  var rows = [], T = { tot:0, inc:0, out:0, debt:0, pp:0 };
  S.objs.filter(function(o){ return o.status !== 'Отказ' && !isDraft(o); }).forEach(function(o){ var C = objCalc(o); T.tot += C.total; T.inc += C.inc; T.out += C.out; T.debt += Math.max(0, C.debt); T.pp += C.planProfit; rows.push([h('a', { href:'#', text:'№' + o.num + ' ' + o.name, onclick:function(e){ e.preventDefault(); go('obj', o.id + '|money'); } }), o.status, rub(C.total), rub(C.inc), rub(C.out), rub(C.inc - C.out), rub(C.debt), rub(C.planProfit)]); });
  var gOut = S.gexp.reduce(function(a, p){ return a + (p.kind === 'out' ? +p.sum || 0 : -(+p.sum || 0)); }, 0);
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(T.inc), 'получено от клиентов', 'g'), kpi(rub(T.out + gOut), 'расходы (объекты + общие)'), kpi(rub(T.inc - T.out - gOut), 'касса компании', T.inc - T.out - gOut >= 0 ? 'g' : 'r'), kpi(rub(T.debt), 'должны клиенты', T.debt ? 'y' : 'g')]));
  /* по месяцам */
  var M = {}; function addM(p, sign){ var k = (p.d || '').slice(0, 7); if (!k) return; var o = M[k] || (M[k] = { i:0, o:0 }); if (p.kind === 'in') o.i += +p.sum || 0; else o.o += +p.sum || 0; }
  S.objs.forEach(function(o){ (o.pays || []).forEach(addM); }); S.gexp.forEach(addM);
  var mk = Object.keys(M).sort().slice(-12), mx = Math.max.apply(null, mk.map(function(k){ return Math.max(M[k].i, M[k].o); }).concat([1]));
  var ch = h('div', { class:'mchart' }); mk.forEach(function(k){ ch.appendChild(h('div', { class:'mc' }, [h('div', { class:'mb' }, [h('i', { class:'in', style:'height:' + Math.round(M[k].i / mx * 120) + 'px', title:'Приход ' + rub(M[k].i) }), h('i', { class:'out', style:'height:' + Math.round(M[k].o / mx * 120) + 'px', title:'Расход ' + rub(M[k].o) })]), h('span', { text:new Date(k + '-01').toLocaleDateString('ru-RU', { month:'short' }) }), h('small', { class:M[k].i - M[k].o >= 0 ? 'ok' : 'bad', text:(M[k].i - M[k].o >= 0 ? '+' : '') + num((M[k].i - M[k].o) / 1000, 0) + 'к' })])); });
  w.appendChild(card('Приход и расход по месяцам', [mk.length ? ch : empty('Операций пока нет.'), h('div', { class:'lg2' }, [h('span', { class:'in', text:'приход' }), h('span', { class:'out', text:'расход' })])]));
  w.appendChild(card('Объекты', [rows.length ? table(['Объект', 'Статус', 'Сумма', 'Получено', 'Потрачено', 'На руках', 'Долг клиента', 'Прибыль (смета)'], rows, [2, 3, 4, 5, 6, 7]) : empty('Нет объектов с договором.')]));
  w.appendChild(payForm(S.gexp, function(p, oid){ if (oid){ var o = byId(S.objs, oid); o.pays.push(p); } else S.gexp.push(p); logA((p.kind === 'in' ? '+' : '−') + rub(p.sum) + ' ' + p.cat); save(); go('money'); }, true));
  w.appendChild(card('Общие расходы компании (офис, реклама, аренда, налоги)', [payTable(S.gexp, function(p){ S.gexp.splice(S.gexp.indexOf(p), 1); save(); go('money'); })]));
};

/* ================= ЗАРПЛАТЫ ================= */
function period(key){ var d = new Date(), y = d.getFullYear(), m = d.getMonth(); function iso(x){ return new Date(x.getTime() - x.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); }
  if (key === 'month') return [iso(new Date(y, m, 1)), iso(new Date(y, m + 1, 0))]; if (key === 'prev') return [iso(new Date(y, m - 1, 1)), iso(new Date(y, m, 0))]; if (key === 'half1') return [iso(new Date(y, m, 1)), iso(new Date(y, m, 15))]; if (key === 'half2') return [iso(new Date(y, m, 16)), iso(new Date(y, m + 1, 0))]; return ['', '']; }
function payDialog(c, kind, def){
  var f = { d:today(), sum:def ? Math.round(def) : '', note:'', oid:'' }, box = h('div', { class:'dlg' });
  var titleT = { pay:'Выплата', adv:'Аванс', bonus:'Премия', fine:'Штраф', day:'Табель (рабочие дни)' }[kind];
  var objs = [['', kind === 'day' ? '—' : 'Общие (без объекта)']].concat(S.objs.filter(function(o){ return o.status !== 'Отказ'; }).map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; }));
  if (kind === 'day') f.sum = 1;
  var inner = card(titleT + ': ' + c.name, [h('div', { class:'grid2' }, [field('Дата', inp(f, 'd', 'date')), field(kind === 'day' ? 'Дней' : 'Сумма, ₽', inp(f, 'sum', 'number'))]), field('Объект', sel(f, 'oid', objs), kind === 'pay' || kind === 'adv' ? 'выплата с объектом попадёт в его расходы' : ''), field('Комментарий', inp(f, 'note')),
    h('div', { class:'row' }, [h('span', { class:'sp' }), btn('', 'Отмена', 'lt', function(){ box.remove(); }), btn('check', 'Записать', '', function(){ var v = +f.sum; if (!v) return toast('Впишите ' + (kind === 'day' ? 'дни' : 'сумму'));
      if (kind === 'pay' || kind === 'adv'){ var p = { id:uid(), d:f.d, kind:'out', cat:'Зарплата', sum:v, who:c.id, note:(kind === 'adv' ? 'Аванс' : 'Выплата') + (f.note ? ': ' + f.note : '') }; var o = f.oid ? byId(S.objs, f.oid) : null; if (o) o.pays.push(p); else S.gexp.push(p); }
      else if (kind === 'day'){ (S.days = S.days || []).push({ id:uid(), who:c.id, d:f.d, n:v, oid:f.oid }); }
      else (S.adj = S.adj || []).push({ id:uid(), who:c.id, d:f.d, sum:kind === 'fine' ? -Math.abs(v) : Math.abs(v), note:f.note, oid:f.oid });
      logA(titleT + ' — ' + c.name + ': ' + (kind === 'day' ? v + ' дн.' : rub(v))); save(); box.remove(); go(view, arg); })])]);
  box.appendChild(inner); box.onclick = function(e){ if (e.target === box) box.remove(); }; document.body.appendChild(box);
}
var salP = 'month';
V.salary = function(w){
  title('Зарплаты');
  if (!S.crew.length){ w.appendChild(card(null, [empty('Сначала добавьте сотрудников в «Бригады и сотрудники».')])); return; }
  var seg = h('div', { class:'seg' }); [['month', 'Этот месяц'], ['half1', '1–15 число'], ['half2', '16–конец месяца'], ['prev', 'Прошлый месяц'], ['all', 'Всё время']].forEach(function(x){ seg.appendChild(h('button', { class:x[0] === salP ? 'on' : '', text:x[1], onclick:function(){ salP = x[0]; go('salary'); } })); });
  w.appendChild(seg);
  var P = period(salP), M = crewStats(P[0], P[1]), T = { e:0, a:0, p:0, d:0 };
  S.crew.forEach(function(c){ var m = M[c.id]; T.e += m.earned; T.a += m.adj; T.p += m.paid; T.d += Math.max(0, m.all - m.allPaid); });
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(T.e), 'начислено за период'), kpi(rub(T.a), 'премии − штрафы'), kpi(rub(T.p), 'выплачено за период'), kpi(rub(T.d), 'общий долг сотрудникам', T.d ? 'y' : 'g')]));
  var t = table(['Сотрудник', 'Схема', 'Начислено', 'Премии / штрафы', 'Выплачено', 'Долг всего', ''], S.crew.filter(function(c){ return !c.to || c.to >= (P[0] || '0'); }).map(function(c){ var m = M[c.id], debt = m.all - m.allPaid;
    return [h('a', { href:'#', text:c.name, onclick:function(e){ e.preventDefault(); go('emp', c.id); } }), payName(c), rub(m.earned), m.adj ? rub(m.adj) : '—', rub(m.paid), h('b', { class:debt > 0 ? 'bad' : '', text:rub(debt) }),
      h('div', { class:'row nw' }, [debt > 0 ? btn('coin', 'Выплатить', 'xs', function(){ payDialog(c, 'pay', debt); }) : null, btn('', 'Аванс', 'lt xs', function(){ payDialog(c, 'adv'); }), payOf(c).type === 'day' ? btn('cal', 'Табель', 'lt xs', function(){ payDialog(c, 'day'); }) : null, btn('', '+ Премия', 'lt xs', function(){ payDialog(c, 'bonus'); }), btn('', '− Штраф', 'lt xs', function(){ payDialog(c, 'fine'); })])]; }), [2, 3, 4, 5]);
  w.appendChild(card('Расчёт с сотрудниками', [h('div', { class:'hint', html:'<b>Как считается:</b> сдельщикам — выполненные работы («Готово» в смете) по ставке × коэффициент; на процентах — от своих работ, суммы или прибыли объекта (прорабу — по мере сдачи этапов, менеджеру — в день договора); оклад — каждый месяц; поденным — по табелю. Плюс премии, минус штрафы. «Долг всего» — сколько осталось выплатить за всё время с учётом авансов.' }), t]));
};
V.emp = function(w, id){
  var c = byId(S.crew, id); if (!c){ go('salary'); return; } title('Расчёт: ' + c.name);
  $('#barR').appendChild(btn('', '← Зарплаты', 'lt', function(){ go('salary'); }));
  var E = earnEntries().filter(function(e){ return e.who === c.id; }).sort(function(a, b){ return a.d < b.d ? 1 : -1; }), Pp = salaryPays().filter(function(x){ return x.p.who === c.id; }), all = E.reduce(function(a, e){ return a + e.sum; }, 0), paid = Pp.reduce(function(a, x){ return a + (+x.p.sum || 0); }, 0);
  w.appendChild(h('div', { class:'grid4' }, [kpi(c.role, payName(c)), kpi(rub(all), 'начислено всего'), kpi(rub(paid), 'выплачено всего', 'g'), kpi(rub(all - paid), all - paid >= 0 ? 'долг ему' : 'переплата', all - paid > 0 ? 'y' : 'g')]));
  w.appendChild(h('div', { class:'row' }, [btn('coin', 'Выплатить', '', function(){ payDialog(c, 'pay', Math.max(0, all - paid)); }), btn('', 'Аванс', 'lt', function(){ payDialog(c, 'adv'); }), btn('cal', 'Табель', 'lt', function(){ payDialog(c, 'day'); }), btn('', '+ Премия', 'lt', function(){ payDialog(c, 'bonus'); }), btn('', '− Штраф', 'lt', function(){ payDialog(c, 'fine'); }), btn('xls', 'Расчётный лист — Excel', 'lt', function(){ var R = [['Расчётный лист: ' + c.name + ' (' + c.role + ')'], ['Схема: ' + payName(c)], [], ['Дата', 'Начисление', 'Объект', 'Сумма']]; E.slice().reverse().forEach(function(e){ var o = byId(S.objs, e.oid); R.push([fdate(e.d), e.what, o ? '№' + o.num : '', Math.round(e.sum)]); }); R.push([], ['', 'Начислено', '', Math.round(all)], []); R.push(['Дата', 'Выплата', 'Объект', 'Сумма']); Pp.forEach(function(x){ R.push([fdate(x.p.d), x.p.note || 'Выплата', x.o ? '№' + x.o.num : '', Math.round(x.p.sum)]); }); R.push([], ['', 'Выплачено', '', Math.round(paid)], ['', 'ОСТАТОК', '', Math.round(all - paid)]); saveBook('raschet-' + c.name.replace(/\s+/g, '-') + '.xlsx', [{ name:'Расчёт', rows:R, cols:[12, 56, 10, 12] }]); })]));
  w.appendChild(card('Схема оплаты', [payFields(c, function(){ save(); })]));
  /* по месяцам */
  var M = {}; E.forEach(function(e){ var k = ym(e.d); M[k] = M[k] || { e:0, p:0 }; M[k].e += e.sum; }); Pp.forEach(function(x){ var k = ym(x.p.d); M[k] = M[k] || { e:0, p:0 }; M[k].p += +x.p.sum || 0; });
  var mk = Object.keys(M).sort().reverse();
  if (mk.length) w.appendChild(card('По месяцам', [table(['Месяц', 'Начислено', 'Выплачено', 'Разница'], mk.map(function(k){ return [monthName(k), rub(M[k].e), rub(M[k].p), rub(M[k].e - M[k].p)]; }), [1, 2, 3])]));
  w.appendChild(card('Начисления', [E.length ? table(['Дата', 'За что', 'Объект', 'Сумма', ''], E.map(function(e){ var o = byId(S.objs, e.oid); return [fdate(e.d), e.what, o ? '№' + o.num : '', h('span', { class:e.sum < 0 ? 'bad' : '', text:rub(e.sum) }), e.ref ? h('button', { class:'x', text:'×', onclick:function(){ var L = e.kind === 'day' ? S.days : S.adj; L.splice(L.indexOf(e.ref), 1); save(); go('emp', c.id); } }) : '']; }), [3]) : empty('Начислений пока нет.')]));
  w.appendChild(card('Выплаты и авансы', [Pp.length ? table(['Дата', 'Что', 'Объект', 'Сумма'], Pp.sort(function(a, b){ return a.p.d < b.p.d ? 1 : -1; }).map(function(x){ return [fdate(x.p.d), x.p.note || 'Выплата', x.o ? '№' + x.o.num : 'общие', rub(x.p.sum)]; }), [3]) : empty('Выплат пока не было.')]));
};

/* ================= СКЛАД ================= */
function stockBal(){ var b = {}; S.stock.forEach(function(m){ b[m.mid] = (b[m.mid] || 0) + (m.kind === 'in' ? 1 : -1) * (+m.qty || 0); }); return b; }
V.stock = function(w){
  title('Склад');
  var bal = stockBal(), f = { mid:(S.cat.mats[0] || {}).id, qty:'', kind:'in', oid:'', price:'', d:today(), note:'' };
  w.appendChild(card('Приход / выдача', [h('div', { class:'grid4' }, [field('Материал', sel(f, 'mid', S.cat.mats.map(function(m){ return [m.id, m.name]; }))), field('Операция', sel(f, 'kind', [['in', 'Приход на склад'], ['out', 'Выдача на объект']])), field('Количество', inp(f, 'qty', 'number')), field('На объект', sel(f, 'oid', [['', '—']].concat(S.objs.filter(function(o){ return o.status !== 'Отказ'; }).map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; }))))]),
    h('div', { class:'grid3' }, [field('Цена закупки, ₽', inp(f, 'price', 'number'), 'для прихода'), field('Дата', inp(f, 'd', 'date')), field('Комментарий', inp(f, 'note'))]),
    btn('plus', 'Записать', '', function(){ if (!+f.qty) return toast('Впишите количество'); if (f.kind === 'out' && !f.oid) return toast('Выберите объект'); S.stock.push({ id:uid(), d:f.d, mid:f.mid, qty:+f.qty, kind:f.kind, oid:f.oid, price:+f.price || 0, note:f.note });
      if (f.kind === 'in' && +f.price && confirm('Записать расход на закупку ' + rub(f.price * f.qty) + '?')){ var p = { id:uid(), d:f.d, kind:'out', cat:'Материалы', sum:Math.round(f.price * f.qty), note:'Закупка: ' + (byId(S.cat.mats, f.mid) || {}).name }; if (f.oid){ byId(S.objs, f.oid).pays.push(p); } else S.gexp.push(p); }
      logA('Склад: ' + (f.kind === 'in' ? 'приход' : 'выдача') + ' ' + (byId(S.cat.mats, f.mid) || {}).name); save(); go('stock'); })]));
  var L = S.cat.mats.filter(function(m){ return bal[m.id]; });
  w.appendChild(card('Остатки', [L.length ? table(['Материал', 'Остаток', 'Ед', 'Цена', 'На сумму'], L.map(function(m){ return [m.name, num(bal[m.id]), m.unit, rub(m.price), rub(bal[m.id] * m.price)]; }), [1, 3, 4]) : empty('Склад пуст.')]));
  w.appendChild(card('Движение', [S.stock.length ? table(['Дата', 'Материал', 'Операция', 'Кол-во', 'Объект', ''], S.stock.slice().reverse().slice(0, 200).map(function(m){ var o = byId(S.objs, m.oid); return [fdate(m.d), (byId(S.cat.mats, m.mid) || {}).name || '—', m.kind === 'in' ? 'приход' : 'выдача', num(m.qty), o ? '№' + o.num : '', h('button', { class:'x', text:'×', onclick:function(){ S.stock.splice(S.stock.indexOf(m), 1); save(); go('stock'); } })]; }), [3]) : empty('Операций пока нет.')]));
};

/* ================= СПРАВОЧНИК ЦЕН ================= */
V.cat = function(w){
  title('Справочник цен');
  var tab = arg || 'works';
  var tabs = h('div', { class:'tabs' }); [['works', 'Работы'], ['packs', 'Наборы работ'], ['mats', 'Материалы'], ['bulk', 'Изменить цены']].forEach(function(t){ tabs.appendChild(h('button', { class:t[0] === tab ? 'on' : '', text:t[1], onclick:function(){ go('cat', t[0]); } })); }); w.appendChild(tabs);
  if (tab === 'works'){
    var secs = []; S.cat.works.forEach(function(x){ if (secs.indexOf(x.sec) < 0) secs.push(x.sec); });
    var f = { sec:S.set.catSec || '', q:'' };
    $('#barR').appendChild(btn('plus', 'Раздел', 'lt', function(){ var n = prompt('Название раздела (например «Фасад»)'); if (!n) return; S.cat.works.unshift({ id:uid(), sec:n, name:'Новая работа', unit:'шт', price:0, mprice:0, geo:'', mats:[] }); S.set.catSec = n; save(); go('cat', 'works'); }));
    var q = h('input', { type:'search', placeholder:'Поиск работы по всему справочнику…' }), chips = h('div', { class:'chips cchips' }), box = h('div');
    function drawChips(){ chips.innerHTML = ''; [['', 'Все разделы']].concat(secs.map(function(x){ return [x, x]; })).forEach(function(x){ var n = x[0] ? S.cat.works.filter(function(w2){ return w2.sec === x[0]; }).length : S.cat.works.length; chips.appendChild(h('button', { class:'chip sm' + (f.sec === x[0] ? ' on' : ''), onclick:function(){ f.sec = x[0]; S.set.catSec = x[0]; save(); drawChips(); draw(); } }, [x[1] + ' ', h('span', { class:'cn', text:n })])); }); }
    function row(x){ var mg = h('span', { class:'mg' }); function upd(){ var m = x.price ? Math.round((1 - x.mprice / x.price) * 100) : 0; mg.textContent = x.price ? m + '%' : '—'; mg.className = 'mg ' + (m >= 40 ? 'ok' : m >= 25 ? '' : 'bad'); }
      var nm = h('textarea', { class:'lname', rows:'1' }); nm.value = x.name; function grow(){ nm.style.height = 'auto'; nm.style.height = nm.scrollHeight + 'px'; } nm.oninput = function(){ x.name = nm.value; save(); grow(); }; setTimeout(grow, 0);
      var mats = (x.mats || []).map(function(mr){ var m = byId(S.cat.mats, mr[0]); return m ? m.name.replace(/\s\d.*$/, '') : ''; }).filter(Boolean);
      var menu = h('select', { class:'lmenu' }, [h('option', { value:'', text:'⋯' }), h('option', { value:'mats', text:'Нормы расхода материалов' }), h('option', { value:'sec', text:'Перенести в другой раздел' }), h('option', { value:'dup', text:'Дублировать' }), h('option', { value:'del', text:'Удалить' })]);
      menu.onchange = function(){ var a = menu.value; menu.value = ''; if (a === 'mats') matsDialog(x); else if (a === 'sec'){ var n = prompt('Раздел: ' + secs.join(', '), x.sec); if (n){ x.sec = n; save(); go('cat', 'works'); } } else if (a === 'dup'){ var c = clone(x); c.id = uid(); c.name += ' (копия)'; S.cat.works.splice(S.cat.works.indexOf(x) + 1, 0, c); save(); draw(); } else if (a === 'del'){ if (confirm('Удалить «' + x.name + '» из справочника? В готовых сметах она останется.')){ S.cat.works.splice(S.cat.works.indexOf(x), 1); save(); draw(); } } };
      function fld(l, el, cls){ return h('label', { class:'lf ' + (cls || '') }, [h('span', { text:l }), el]); }
      var r = h('div', { class:'ln cw' }, [h('div', { class:'ln-top' }, [h('div', { class:'ln-nm' }, [nm, h('small', { class:'lnote', text:mats.length ? 'Материалы: ' + mats.join(', ') : 'Материалы не привязаны' })]), menu]),
        h('div', { class:'ln-f' }, [fld('Ед', inp(x, 'unit'), 'u'), fld('Цена клиенту, ₽', inp(x, 'price', 'number', upd), 'p'), fld('Ставка мастеру, ₽', inp(x, 'mprice', 'number', upd), 'p'), fld('Маржа', mg, 'm'), fld('Количество в смете', sel(x, 'geo', [['', 'вводится вручную'], ['floor', 'из площади пола'], ['wall', 'из площади стен'], ['ceil', 'из площади потолка'], ['perim', 'из периметра']]), 'g')])]);
      upd(); return r; }
    function draw(){ box.innerHTML = ''; var s2 = f.q.toLowerCase(), show = f.q ? secs : f.sec ? [f.sec] : secs, any = 0;
      show.forEach(function(sc){ var L = S.cat.works.filter(function(x){ return x.sec === sc && (!s2 || x.name.toLowerCase().indexOf(s2) > -1); }); if (!L.length) return; any++;
        var c = card(h('h3', {}, [sc, h('span', { class:'badge', text:L.length }), h('span', { class:'sp' }), btn('plus', 'Работа в «' + sc + '»', 'lt xs', function(){ var nw = { id:uid(), sec:sc, name:'Новая работа', unit:'м²', price:0, mprice:0, geo:'', mats:[] }; var i = S.cat.works.indexOf(L[L.length - 1]); S.cat.works.splice(i + 1, 0, nw); save(); draw(); })]), [h('div', { class:'lns' }, L.map(row))]); box.appendChild(c); });
      if (!any) box.appendChild(card(null, [empty('Ничего не найдено.')])); }
    q.oninput = function(){ f.q = q.value; draw(); };
    w.appendChild(card(null, [h('div', { class:'hint', text:'Цены — ориентир, поставьте свои. «Количество в смете» — откуда программа берёт объём: из площади пола, стен, потолка или периметра. В готовых сметах цены не меняются: новые цены попадут в новые сметы (или нажмите в смете «Обновить цены из справочника»).' }), q, chips]));
    w.appendChild(box); drawChips(); draw();
  } else if (tab === 'packs'){
    var P = allPacks();
    $('#barR').appendChild(btn('plus', 'Новый набор', '', function(){ var n = prompt('Название набора', 'Мой набор'); if (!n) return; P[n] = []; S.set.packOpen = n; save(); go('cat', 'packs'); }));
    w.appendChild(h('div', { class:'hint', text:'Набор — готовый список работ, который ставится в помещение одной кнопкой. Работы с объёмом «из размеров» посчитаются по комнате сами, а у штучных работ (розетки, точки сантехники) задайте количество здесь.' }));
    Object.keys(P).forEach(function(k){ var it = P[k] = packItems(k), open = S.set.packOpen === k;
      var head = h('h3', {}, [h('button', { class:'btn lt xs', text:open ? '▾' : '▸', onclick:function(){ S.set.packOpen = open ? '' : k; save(); go('cat', 'packs'); } }), k, h('span', { class:'badge', text:it.length + ' работ' }), h('span', { class:'sp' }),
        btn('', 'Переименовать', 'lt xs', function(){ var n = prompt('Название', k); if (!n || n === k) return; P[n] = P[k]; delete P[k]; S.set.packOpen = n; save(); go('cat', 'packs'); }),
        btn('copy', '', 'lt xs', function(){ P[k + ' (копия)'] = clone(it); save(); go('cat', 'packs'); }),
        h('button', { class:'btn red xs', text:'Удалить', onclick:function(){ if (confirm('Удалить набор «' + k + '»?')){ delete P[k]; save(); go('cat', 'packs'); } } })]);
      var body = h('div');
      if (open){ var lst = h('div', { class:'lns' }); it.forEach(function(x, i){ var w2 = S.cat.works.filter(function(y){ return y.name === x.n; })[0];
          lst.appendChild(h('div', { class:'pkr' + (w2 ? '' : ' miss') }, [h('span', { class:'lno', text:i + 1 }), h('div', { class:'pkn' }, [h('b', { text:x.n }), h('small', { text:w2 ? w2.sec + ' · ' + num(w2.price, 0) + ' ₽/' + w2.unit : 'нет в справочнике — не добавится' })]),
            w2 && w2.geo ? h('span', { class:'muted sm', text:'объём из размеров' }) : h('label', { class:'lf' }, [h('span', { text:'Кол-во' + (w2 ? ', ' + w2.unit : '') }), inp(x, 'q', 'number', null, { placeholder:'1' })]),
            h('button', { class:'btn lt xs', text:'↑', onclick:function(){ if (i){ it.splice(i - 1, 0, it.splice(i, 1)[0]); save(); go('cat', 'packs'); } } }), h('button', { class:'x', text:'×', onclick:function(){ it.splice(i, 1); save(); go('cat', 'packs'); } })])); });
        body.appendChild(lst); body.appendChild(h('div', { class:'row' }, [btn('book', 'Добавить работы из справочника', '', function(){ catPicker({ name:k, lines:[] }, function(){ save(); go('cat', 'packs'); }, function(w3){ if (!it.some(function(y){ return y.n === w3.name; })) it.push({ n:w3.name, q:w3.geo ? '' : 1 }); }); })])); }
      else body.appendChild(h('small', { class:'muted', text:it.slice(0, 8).map(function(x){ return x.n; }).join(', ') + (it.length > 8 ? '…' : '') }));
      w.appendChild(card(head, [body])); });
  } else if (tab === 'mats'){
    $('#barR').appendChild(btn('plus', 'Материал', '', function(){ S.cat.mats.unshift({ id:uid(), name:'Новый материал', unit:'шт', price:0 }); save(); go('cat', 'mats'); }));
    w.appendChild(card(null, [table(['Материал', 'Ед', 'Цена закупки', ''], S.cat.mats.map(function(m){ return [inp(m, 'name'), inp(m, 'unit'), inp(m, 'price', 'number'), h('button', { class:'x', text:'×', onclick:function(){ if (confirm('Удалить?')){ S.cat.mats.splice(S.cat.mats.indexOf(m), 1); S.cat.works.forEach(function(w2){ w2.mats = (w2.mats || []).filter(function(mr){ return mr[0] !== m.id; }); }); save(); go('cat', 'mats'); } } })]; }), [2]), field('Наценка на материалы для клиента, %', inp(S.set, 'markup', 'number'))]));
  } else {
    var f = { pct:5, what:'price', sec:'' };
    w.appendChild(card('Массовое изменение цен', [h('div', { class:'grid4' }, [field('На сколько, %', inp(f, 'pct', 'number')), field('Что меняем', sel(f, 'what', [['price', 'Цены клиенту'], ['mprice', 'Ставки мастеров'], ['mats', 'Цены материалов']])), field('Раздел', sel(f, 'sec', [['', 'Все разделы']].concat(Object.keys(S.cat.works.reduce(function(a, x){ a[x.sec] = 1; return a; }, {})))))]),
      btn('', 'Применить', '', function(){ var k = 1 + (+f.pct || 0) / 100, n = 0; if (f.what === 'mats') S.cat.mats.forEach(function(m){ m.price = Math.round(m.price * k); n++; }); else S.cat.works.forEach(function(x){ if (!f.sec || x.sec === f.sec){ x[f.what] = Math.round(x[f.what] * k / 10) * 10; n++; } }); logA('Справочник: ' + f.what + ' ' + f.pct + '%'); save(); toast('Изменено позиций: ' + n); })]));
  }
};
function matsDialog(x){
  var box = h('div', { class:'dlg' }), inner = h('div', { class:'card' }), L = x.mats = x.mats || [];
  function draw(){ inner.innerHTML = ''; inner.appendChild(h('h3', { text:'Нормы расхода: ' + x.name })); inner.appendChild(h('p', { class:'muted sm', text:'Сколько материала уходит на 1 ' + x.unit + ' работы.' }));
    L.forEach(function(mr, i){ var o = { m:mr[0], r:mr[1] }; inner.appendChild(h('div', { class:'grid3' }, [field('Материал', sel(o, 'm', S.cat.mats.map(function(m){ return [m.id, m.name + ' (' + m.unit + ')']; }), function(v){ mr[0] = v; })), field('На 1 ' + x.unit, inp(o, 'r', 'number', function(v){ mr[1] = +v; }, { step:'0.001' })), h('button', { class:'btn red xs', text:'Убрать', onclick:function(){ L.splice(i, 1); save(); draw(); } })])); });
    inner.appendChild(h('div', { class:'row' }, [btn('plus', 'Материал', 'lt', function(){ if (!S.cat.mats.length) return; L.push([S.cat.mats[0].id, 1]); save(); draw(); }), h('span', { class:'sp' }), btn('check', 'Готово', '', function(){ save(); box.remove(); go('cat', 'works'); })])); }
  draw(); box.appendChild(inner); box.onclick = function(e){ if (e.target === box){ box.remove(); go('cat', 'works'); } }; document.body.appendChild(box);
}

/* ================= КОМПАНИЯ ================= */
V.company = function(w){
  title('Компания');
  var c = S.co;
  w.appendChild(card('Бренд и контакты — во всех документах', [h('div', { class:'grid3' }, [field('Бренд', inp(c, 'name')), field('Город', inp(c, 'city'))]), h('div', { class:'grid3' }, [field('Телефон', inp(c, 'phone', 'tel')), field('Почта', inp(c, 'email', 'email')), field('Сайт', inp(c, 'site'))]), h('div', { class:'grid3' }, [field('Адрес офиса', inp(c, 'addr')), field('Гарантия', inp(c, 'guarantee')), field('Смета действительна, дней', inp(c, 'valid', 'number'))]), field('Текст внизу сметы', area(c, 'note'))]));
  var lg = h('div', { class:'lgp big', html:c.logo ? '<img src="' + c.logo + '">' : MARK });
  w.appendChild(card('Логотип во всех документах', [h('div', { class:'row' }, [lg, h('div', { class:'col' }, [h('small', { class:'muted', text:'Стоит в шапке смет, договоров, актов и квитанций. По умолчанию — знак Домилии. У каждого юрлица можно поставить свой.' }), h('div', { class:'row' }, [btn('', 'Загрузить свой логотип', 'lt', function(){ logoPick(c, 'logo', function(){ go('company'); }); }), c.logo ? btn('', 'Вернуть знак Домилии', 'lt', function(){ c.logo = ''; save(); go('company'); }) : null])])])]));
  w.appendChild(h('div', { class:'row' }, [h('h3', { text:'От кого заключаем договоры' }), h('span', { class:'sp' }), btn('plus', 'ООО', 'lt', function(){ ents().push({ id:uid(), kind:'ooo', full:'ООО «»', vat:'none' }); save(); go('company'); }), btn('plus', 'ИП', 'lt', function(){ ents().push({ id:uid(), kind:'ip', full:'', vat:'none' }); save(); go('company'); }), btn('plus', 'Самозанятый', 'lt', function(){ ents().push({ id:uid(), kind:'sz', full:'', vat:'none' }); save(); go('company'); })]));
  ents().forEach(function(e, i){ w.appendChild(entCard(e, i)); });
  var dch = h('div'); (function dd(){ dch.innerHTML = ''; dch.appendChild(h('div', { class:'chs' }, CH.filter(function(x){ return x[0] !== 'sms'; }).map(function(x){ return h('button', { class:'chip sm' + ((S.set.defCh || 'max') === x[0] ? ' on' : ''), text:x[1], onclick:function(){ S.set.defCh = x[0]; save(); dd(); } }); }))); })();
  w.appendChild(card('Мессенджеры компании', [h('div', { class:'hint', html:'Через что клиенты пишут вам. В кабинете клиента и в документах покажутся <b>только заполненные</b>, основной — первым. Пустое поле — канал скрыт.' }),
    fieldD('Основной канал для переписки с клиентами', dch, 'Для каждого клиента можно выбрать свой в его карточке'),
    h('div', { class:'grid3' }, [field('MAX — ссылка на профиль или канал', inp(c, 'chMax', 'url', null, { placeholder:'https://max.ru/u/…' }), 'MAX → Профиль → «Пригласить по ссылке» → скопировать'), field('WhatsApp — номер', inp(c, 'chWa', 'tel', null, { placeholder:'если пользуетесь' })), field('Telegram — @ник', inp(c, 'chTg'))]),
    h('div', { class:'grid3' }, [field('ВКонтакте — сообщество (id или адрес)', inp(c, 'chVk', 'text', null, { placeholder:'domilia' })), field('Instagram — @ник', inp(c, 'chIg'))])]));
  cabSetup(w);
  w.appendChild(card('Документы', [h('label', { class:'chk' }, [(function(){ var x = h('input', { type:'checkbox' }); x.checked = S.set.matsInPdf; x.onchange = function(){ S.set.matsInPdf = x.checked; save(); }; return x; })(), 'Показывать список материалов в смете для клиента']), field('Следующий номер сметы', inp(S.set, 'num', 'number'))]));
  S.tpl = S.tpl || {};
  function ta(k, lab, hint){ var t = h('textarea', { rows:'5' }); t.value = tpl(k); t.oninput = function(){ S.tpl[k] = t.value; save(); }; return field(lab, t, hint); }
  w.appendChild(card('Тексты для клиентов', [h('div', { class:'hint', text:'Подстановки: {name} — имя клиента, {manager} — менеджер, {company} — компания, {phone} — телефон, {hours} — часы работы, {link} — ссылка на смету, {until} — до какого числа действует расчёт.' }),
    ta('followups', 'Дожим после отправки КП (день|задача|текст — по строке)'), ta('quick', 'Быстрые ответы (название|текст — по строке)'), ta('guarantees', 'Гарантии в кабинете клиента (по строке)'), ta('steps', 'Как мы работаем (этап|описание — по строке)'), ta('welcome', 'Приветствие в кабинете клиента'),
    h('div', { class:'grid3' }, [field('Часы работы', (function(){ var i = h('input', { type:'text' }); i.value = tpl('hours'); i.oninput = function(){ S.tpl.hours = i.value; save(); }; return i; })()), field('Расчёт действует, дней', (function(){ var i = h('input', { type:'number' }); i.value = tpl('offerDays'); i.oninput = function(){ S.tpl.offerDays = +i.value; save(); }; return i; })()), field('Ссылка на отзывы в Яндекс Картах', inp(c, 'ymaps', 'url')), field('Ссылка на отзывы в 2ГИС', inp(c, 'gis', 'url'))])]));
  w.appendChild(card('История действий', [S.log.length ? table(['Когда', 'Что'], S.log.slice(0, 100).map(function(l){ return [new Date(l.at).toLocaleString('ru-RU'), l.t]; })) : empty('Пока пусто.')]));
};

/* ================= ДАННЫЕ ================= */
V.data = function(w){
  title('Данные и копия');
  w.appendChild(h('div', { class:'hint y', html:'Все данные хранятся <b>в этом браузере на этом устройстве</b>. Раз в неделю скачивайте копию. Чтобы работать с другого компьютера — загрузите копию там. Общая база для всех сотрудников появится, когда подключим сервер.' }));
  var fi = h('input', { type:'file', accept:'.json', hidden:true });
  fi.onchange = function(){ var r = new FileReader(); r.onload = function(){ try { var d = JSON.parse(r.result); if (!d.cat) throw 0; if (confirm('Заменить все данные данными из файла?')){ S = d; save(); go('home'); toast('Данные загружены'); } } catch(e){ toast('Это не файл копии Домилия Про'); } }; r.readAsText(fi.files[0]); };
  var used = (localStorage.getItem(KEY) || '').length * 2 / 1048576;
  w.appendChild(card('Резервная копия', [h('div', { class:'row' }, [btn('db', 'Скачать копию', '', function(){ download('domilia-pro-' + today() + '.json', JSON.stringify(S), 'application/json'); S.lastBackup = today(); save(); }), btn('', 'Загрузить копию', 'lt', function(){ fi.click(); }), fi]), h('p', { class:'muted sm', text:'Последняя копия: ' + fdate(S.lastBackup) + ' · занято ~' + num(used, 1) + ' МБ из ~5 МБ' })]));
  w.appendChild(card('Сброс', [h('p', { class:'muted', text:'Удалить все объекты, клиентов и операции и вернуть стартовый справочник.' }), h('button', { class:'btn red', text:'Сбросить всё', onclick:function(){ if (confirm('Точно? Сначала скачайте копию.') && confirm('Удалить все данные безвозвратно?')){ S = fresh(); save(); go('home'); } } })]));
};

/* Архив объекта одним файлом: общий для приложения и кабинета клиента */
function archHtml(d, docs, photos, msgs, mark){
  function e(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
  function r(n){ return Math.round(n || 0).toLocaleString('ru-RU') + ' ₽'; }
  function fd(x){ return x ? new Date(x).toLocaleDateString('ru-RU') : ''; }
  function ft(x){ return x ? new Date(x).toLocaleString('ru-RU', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }) : ''; }
  var H = '<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Архив объекта №' + e(d.o.num) + ' — ' + e(d.co.n) + '</title><style>body{margin:0;font:15px/1.5 Montserrat,Arial,sans-serif;color:#1C2421;background:#F4F6F5}.w{max-width:960px;margin:0 auto;padding:20px}.hd{display:flex;gap:14px;align-items:center;background:#111614;color:#fff;padding:18px 22px;border-radius:18px}.hd .mk{width:46px;height:46px;background:#fff;border-radius:12px;padding:5px;box-sizing:border-box}.hd .mk svg{width:100%;height:100%}.hd small{display:block;opacity:.7}nav{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}nav a{background:#fff;border-radius:10px;padding:8px 12px;text-decoration:none;color:#00805A;font-weight:700;font-size:13px}section{background:#fff;border-radius:16px;padding:18px 20px;margin:14px 0}h2{margin:0 0 10px;font-size:19px}table{width:100%;border-collapse:collapse;font-size:13.5px}td,th{padding:7px 6px;border-bottom:1px solid #E6EAE8;text-align:left;vertical-align:top}.n{text-align:right;white-space:nowrap}.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}.g figure{margin:0}.g img{width:100%;border-radius:10px;display:block}.g figcaption{font-size:12px;color:#6B7570}.m{padding:8px 12px;border-radius:12px;margin:6px 0;max-width:80%}.m.c{background:#EEF1F0}.m.s{background:#E2F6EE;margin-left:auto}.m.y{background:none;text-align:center;color:#6B7570;font-size:12.5px;max-width:none}.m small{display:block;color:#6B7570;font-size:11.5px}.m img{max-width:240px;border-radius:8px;display:block}iframe{width:100%;height:900px;border:1px solid #E6EAE8;border-radius:10px;background:#fff}.st{font-size:12.5px;color:#00805A;font-weight:700}.tot td{font-weight:800;font-size:15px}@media print{iframe{height:auto}nav{display:none}}</style></head><body><div class="w">';
  H += '<div class="hd"><div class="mk">' + (mark || '') + '</div><div><b style="font-size:20px">' + e(String(d.co.n).toUpperCase()) + '</b><small>Архив объекта №' + e(d.o.num) + ' · ' + e(d.o.n) + (d.o.a ? ', ' + e(d.o.a) : '') + '</small><small>Заказчик: ' + e(d.cl) + ' · сформирован ' + ft(new Date().toISOString()) + '</small></div></div>';
  H += '<nav><a href="#sum">Итоги</a><a href="#smeta">Смета</a>' + (docs.length ? '<a href="#docs">Документы (' + docs.length + ')</a>' : '') + (photos.length ? '<a href="#ph">Фото (' + photos.length + ')</a>' : '') + (msgs.length ? '<a href="#chat">Переписка</a>' : '') + '</nav>';
  H += '<section id="sum"><h2>Итоги</h2><table><tr><td>Стоимость по смете</td><td class="n">' + r(d.tot) + '</td></tr><tr><td>Оплачено</td><td class="n">' + r(d.inc) + '</td></tr><tr><td>Остаток</td><td class="n">' + r(Math.max(0, d.tot - d.inc)) + '</td></tr>' + (d.ap && d.ap.ok ? '<tr><td>Смета утверждена</td><td class="n">' + fd(d.ap.ok) + '</td></tr>' : '') + '</table>' +
    '<h2 style="margin-top:16px">Этапы</h2><table>' + d.stg.map(function(s){ return '<tr><td>' + e(s[0]) + '</td><td>' + (s[2] ? '✓ выполнен' : 'не выполнен') + (s[3] ? ', оплачен' : '') + '</td><td class="n">' + r(d.tot * s[1] / 100) + '</td></tr>'; }).join('') + '</table>' +
    (d.pays && d.pays.length ? '<h2 style="margin-top:16px">Оплаты</h2><table>' + d.pays.map(function(p){ return '<tr><td>' + fd(p[0]) + '</td><td>' + e(p[2]) + '</td><td class="n">' + r(p[1]) + '</td></tr>'; }).join('') + '</table>' : '') +
    (d.team && d.team.length ? '<h2 style="margin-top:16px">Команда</h2><table>' + d.team.map(function(t){ return '<tr><td>' + e(t.n) + '</td><td>' + e(t.r) + '</td><td>' + e(t.p) + '</td></tr>'; }).join('') + '</table>' : '') + '</section>';
  H += '<section id="smeta"><h2>Смета</h2><table><tr><th>Работа</th><th class="n">Кол-во</th><th class="n">Сумма</th></tr>' + d.rooms.map(function(rm){ return '<tr><td colspan="3"><b>' + e(rm[0]) + '</b> — ' + r(rm[1]) + '</td></tr>' + (rm[2] || []).map(function(l){ return '<tr><td>' + (l[4] ? '✓ ' : '') + e(l[0]) + '</td><td class="n">' + Number(l[1]).toLocaleString('ru-RU') + ' ' + e(l[2]) + '</td><td class="n">' + r(l[3]) + '</td></tr>'; }).join(''); }).join('') +
    (d.mats ? '<tr><td colspan="2">Материалы</td><td class="n">' + r(d.mats) + '</td></tr>' : '') + (d.disc ? '<tr><td colspan="2">Скидка</td><td class="n">−' + r(d.disc) + '</td></tr>' : '') + '<tr class="tot"><td colspan="2">Итого</td><td class="n">' + r(d.tot) + '</td></tr></table></section>';
  if (docs.length) H += '<section id="docs"><h2>Документы</h2>' + docs.map(function(x, i){ return '<h3 style="margin:16px 0 4px">' + (i + 1) + '. ' + e(x.t) + '</h3><div class="st">' + e(x.st || '') + '</div><iframe srcdoc="' + e(x.html) + '"></iframe>'; }).join('') + '</section>';
  if (photos.length) H += '<section id="ph"><h2>Фотоотчёт</h2><div class="g">' + photos.map(function(p){ return '<figure><img src="' + p.src + '" loading="lazy"><figcaption>' + fd(p.at) + (p.stage ? ' · ' + e(p.stage) : '') + (p.note ? ' · ' + e(p.note) : '') + '</figcaption></figure>'; }).join('') + '</div></section>';
  if (msgs.length) H += '<section id="chat"><h2>Переписка</h2>' + msgs.map(function(m){ return m.f === 'sys' ? '<div class="m y">' + e(m.x) + ' · ' + ft(m.a) + '</div>' : '<div class="m ' + (m.f === 'c' ? 'c' : 's') + '"><small>' + e(m.w) + (m.r ? ' · ' + e(m.r) : '') + ' · ' + ft(m.a) + '</small>' + (m.i ? '<img src="' + m.i + '">' : '') + e(m.x || '') + '</div>'; }).join('') + '</section>';
  return H + '<p style="text-align:center;color:#6B7570;font-size:12px">' + e(d.co.n) + ' · ' + e(d.co.p) + ' · ' + e(d.co.s || '') + '</p></div></body></html>';
}

/* ================= СЛОЙ ДАННЫХ: сейчас GitHub, потом — наш сервер =================
   Всё общение с внешним миром идёт через REMOTE.* — при переходе на сервер меняется только этот блок. */
Object.assign(ICO, {
  chat:'<path d="M4 5h16v11H9l-5 4z"/>', cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"/>', lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  sign:'<path d="M3 20c3-1 5-4 7-4s1 3 3 3 3-3 5-3M14 4l5 5-8 8H6v-5z"/>', arch:'<path d="M3 4h18v5H3zM5 9v11h14V9M10 13h4"/>', send:'<path d="M3 11l18-8-8 18-2-8z"/>', eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
});
/* --- IndexedDB: фото и документы (в localStorage они не помещаются) --- */
var IDBP = null;
function idb(){ if (IDBP) return IDBP; IDBP = new Promise(function(ok, no){ var r = indexedDB.open('dpro', 1); r.onupgradeneeded = function(){ ['ph', 'doc'].forEach(function(n){ if (!r.result.objectStoreNames.contains(n)) r.result.createObjectStore(n, { keyPath:'id' }); }); }; r.onsuccess = function(){ ok(r.result); }; r.onerror = function(){ no(r.error); }; }); return IDBP; }
function idbDo(st, mode, fn){ return idb().then(function(db){ return new Promise(function(ok, no){ var t = db.transaction(st, mode), s = t.objectStore(st), r = fn(s); t.oncomplete = function(){ ok(r && r.result); }; t.onerror = function(){ no(t.error); }; }); }); }
function idbPutL(st, v){ return idbDo(st, 'readwrite', function(s){ return s.put(v); }); }
function idbGetL(st, id){ return idbDo(st, 'readonly', function(s){ return s.get(id); }); }
/* фото и документы: копия на устройстве + общий файл на сервере, чтобы видели коллеги с других телефонов */
function srvFiles(){ return typeof SRV !== 'undefined' && SRV.on(); }
function idbPut(st, v){ return idbPutL(st, v).then(function(){ if (srvFiles()) return SRV.req('PUT', '/files/' + st + '-' + v.id, { body:JSON.stringify(v) }).catch(function(e){ console.warn(e); }); }); }
function idbGet(st, id){ return idbGetL(st, id).then(function(r){ if (r || !srvFiles()) return r; return SRV.req('GET', '/files/' + st + '-' + id).then(function(j){ var x = JSON.parse(j.body); idbPutL(st, x); return x; }, function(){ return null; }); }); }
function idbDel(st, id){ if (srvFiles()) SRV.req('DELETE', '/files/' + st + '-' + id).catch(function(){}); return idbDo(st, 'readwrite', function(s){ return s.delete(id); }); }
/* --- шифрование --- */
function zip(b){ if (!window.CompressionStream) return Promise.resolve(null); return new Response(new Blob([b]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer().then(function(x){ return new Uint8Array(x); }); }
function unzip(b){ return new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer().then(function(x){ return new Uint8Array(x); }); }
function aes(key, use){ return crypto.subtle.importKey('raw', u8b(key), 'AES-GCM', false, [use]); }
function encT(key, data, compress){ var b = typeof data === 'string' ? new TextEncoder().encode(data) : data, iv = rnd(12);
  return (compress ? zip(b) : Promise.resolve(null)).then(function(z){ var src = z || b; return aes(key, 'encrypt').then(function(k){ return crypto.subtle.encrypt({ name:'AES-GCM', iv:iv }, k, src); }).then(function(ct){ return (z ? 'z' : 'b') + b64u(iv) + '.' + b64u(new Uint8Array(ct)); }); }); }
function decT(key, t){ t = String(t).trim(); var z = t[0] === 'z', p = t.slice(1).split('.'); return aes(key, 'decrypt').then(function(k){ return crypto.subtle.decrypt({ name:'AES-GCM', iv:u8b(p[0]) }, k, u8b(p[1])); }).then(function(b){ b = new Uint8Array(b); return z ? unzip(b) : b; }); }
function decS(key, t){ return decT(key, t).then(function(b){ return new TextDecoder().decode(b); }); }
function sha256(text){ return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function(b){ return Array.prototype.map.call(new Uint8Array(b), function(x){ return ('0' + x.toString(16)).slice(-2); }).join(''); }); }
function dataUrlBytes(u){ var b = atob(u.split(',')[1]), a = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
function bytesUrl(a, type){ var s = ''; for (var i = 0; i < a.length; i += 32768) s += String.fromCharCode.apply(null, a.subarray(i, i + 32768)); return 'data:' + (type || 'image/jpeg') + ';base64,' + btoa(s); }
function shrink(file, max, q){ return new Promise(function(ok, no){ var im = new Image(), url = typeof file === 'string' ? file : URL.createObjectURL(file); im.onload = function(){ var k = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); ok(c.toDataURL('image/jpeg', q || 0.82)); }; im.onerror = no; im.src = url; }); }
var REMOTE = {
  kind:'github',
  ready:function(){ return !!gh().tok; },
  chatReady:function(){ var g = gh(); return !!(g.tok && g.ib && g.ctok); },
  /* файл кабинета (ветка cab репозитория сайта) */
  put:function(path, text, msg){ return ghBranch().then(function(){ return ghApi('/contents/' + path + '?ref=cab'); }).then(function(r){ return r.ok ? r.json() : {}; }).then(function(old){ return ghApi('/contents/' + path, { method:'PUT', body:JSON.stringify({ message:msg || 'cab', branch:'cab', content:btoa(text), sha:old.sha || undefined }) }); }).then(function(r){ if (!r.ok) throw new Error('GitHub: ' + r.status); return true; }); },
  del:function(path){ return ghApi('/contents/' + path + '?ref=cab').then(function(r){ return r.ok ? r.json() : null; }).then(function(j){ if (j) return ghApi('/contents/' + path, { method:'DELETE', body:JSON.stringify({ message:'del', sha:j.sha, branch:'cab' }) }); }); },
  /* переписка: закрытый репозиторий, у каждого кабинета своя «ветка» сообщений */
  ib:function(path, opt){ opt = opt || {}; opt.headers = { Authorization:'Bearer ' + gh().tok, Accept:'application/vnd.github+json' }; return fetch('https://api.github.com/repos/' + gh().ib + path, opt); },
  thread:function(o){ if (o.cab.issue) return Promise.resolve(o.cab.issue); return REMOTE.ib('/issues', { method:'POST', body:JSON.stringify({ title:'Кабинет ' + o.cab.id, body:'Зашифрованная переписка с заказчиком. Не редактировать вручную.' }) }).then(function(r){ if (!r.ok) throw new Error('Переписка: GitHub ' + r.status + (r.status === 404 ? ' — нет репозитория или прав Issues' : '')); return r.json(); }).then(function(j){ o.cab.issue = j.number; o.cab.ib = gh().ib; save(); return j.number; }); },
  post:function(o, ev){ return REMOTE.thread(o).then(function(n){ return encT(o.cab.key, JSON.stringify(ev), true).then(function(t){ return REMOTE.ib('/issues/' + n + '/comments', { method:'POST', body:JSON.stringify({ body:'dm1:' + t }) }); }); }).then(function(r){ if (!r.ok) throw new Error('Не отправлено: ' + r.status); return r.json(); }); },
  inbox:function(since){ var all = []; function page(p){ return REMOTE.ib('/issues/comments?per_page=100&sort=updated&direction=asc&page=' + p + (since ? '&since=' + since : '')).then(function(r){ if (!r.ok) throw new Error('inbox ' + r.status); return r.json(); }).then(function(L){ all = all.concat(L); return L.length === 100 && p < 10 ? page(p + 1) : all; }); } return page(1); }
};
/* выгрузка файла в кабинет клиента */
function cabFile(o, rel, data, compress){ return encT(o.cab.key, data, compress).then(function(t){ return REMOTE.put('c/' + o.cab.id + '/' + rel + '.txt', t, 'кабинет №' + o.num); }); }

/* ================= КАБИНЕТ КЛИЕНТА 2.0: фото, документы с подписью, переписка, архив ================= */
OTABS.splice(OTABS.length - 1, 0, ['photos', 'Фото'], ['chat', 'Переписка']);
var OTF = { smeta:tabSmeta, docs:tabDocs, stages:tabStages, money:tabMoney, mats:tabMats, team:tabTeam, client:tabClient, photos:tabPhotos, chat:tabChat };
var docSink = null;
var SIGN_KINDS = ['contract', 'smeta', 'graph', 'keys', 'hidden', 'stage', 'extra', 'final', 'cancel', 'sverka', 'pd', 'measure'];
var ROLE_OF = { manager:'Менеджер', prorab:'Прораб', designer:'Дизайнер' };
function team(o){ var L = []; ['manager', 'prorab', 'designer'].forEach(function(k){ var c = o[k] && byId(S.crew, o[k]); if (c) L.push({ id:c.id, n:c.name, r:ROLE_OF[k], p:c.phone || '', ph:c.photo || '', ab:c.about || '' }); }); return L; }
/* дополнительные данные для кабинета */
function extData(o, detail, d){
  var C = objCalc(o), g = gh();
  d.docs = (o.cdocs || []).map(function(x){ return [x.id, x.t, x.at, x.sign ? 1 : 0, x.cl ? [x.cl.fio, x.cl.at] : 0, x.isp ? [x.isp.fio, x.isp.at] : 0]; });
  d.ph = (o.photos || []).filter(function(p){ return p.pub !== false && p.up; }).map(function(p){ return [p.id, p.at, p.stage || '', p.note || '']; });
  d.team = team(o).map(function(t){ return { n:t.n, r:t.r, p:t.p, ph:t.ph, ab:t.ab }; });
  d.ib = o.cab && o.cab.issue && g.ctok ? { r:o.cab.ib || g.ib, n:o.cab.issue, t:g.ctok } : null;
  if (S.set.matsInPdf !== false && !o.noMats) d.ml = Object.keys(C.matList).map(function(k){ var x = C.matList[k]; return [x.m.name, x.q, x.m.unit]; });
  d.disc = Math.round(C.disc || 0); d.works = Math.round(C.works); d.fin = o.status === 'Сдан' ? 1 : 0; d.edo = S.set.edo !== false ? 1 : 0; d.hours = tpl('hours');
  return d;
}
/* ---------- ФОТО ---------- */
function tabPhotos(w, o){
  o.photos = o.photos || [];
  var f = { stage:(o.stages.filter(function(s){ return !s.done; })[0] || {}).name || '', note:'', pub:true }, fi = h('input', { type:'file', accept:'image/*', multiple:true, style:'display:none' });
  fi.onchange = function(){ var files = Array.prototype.slice.call(fi.files); if (!files.length) return; toast('Обрабатываю ' + files.length + ' фото…');
    files.reduce(function(p, file){ return p.then(function(){ return Promise.all([shrink(file, 1800, 0.82), shrink(file, 420, 0.7)]).then(function(r){ var ph = { id:uid(), at:new Date().toISOString(), stage:f.stage, note:f.note, pub:f.pub, who:(me().c || {}).name || '' }; o.photos.unshift(ph); return idbPut('ph', { id:ph.id, full:r[0], th:r[1] }).then(function(){ return o.cab && REMOTE.ready() && ph.pub ? photoUp(o, ph) : null; }); }); }); }, Promise.resolve())
      .then(function(){ save(); logA('№' + o.num + ': +' + files.length + ' фото'); go('obj', o.id + '|photos'); }, function(e){ save(); toast(e.message); go('obj', o.id + '|photos'); }); };
  w.appendChild(card('Фотоотчёт по объекту', [h('div', { class:'hint b', html:'Снимайте прямо с телефона: фото сжимаются и хранятся в этом браузере, а в <b>кабинете клиента</b> появляются автоматически. Отметьте этап — клиент увидит, что и когда сделано.' }),
    h('div', { class:'grid3' }, [field('Этап', sel(f, 'stage', [['', '— без этапа —']].concat(o.stages.map(function(s){ return [s.name, s.name]; })))), field('Подпись к фото', inp(f, 'note', 'text', null, { placeholder:'например «Гидроизоляция, 2 слоя»' })), fieldD('Клиенту', h('label', { class:'chk' }, [(function(){ var x = h('input', { type:'checkbox', checked:true }); x.onchange = function(){ f.pub = x.checked; }; return x; })(), 'Показать в кабинете']))]),
    h('div', { class:'row' }, [btn('cam', 'Добавить фото', '', function(){ fi.click(); }), fi, o.cab ? null : h('small', { class:'muted', text:'Кабинет ещё не создан — фото уйдут клиенту, когда создадите его' })])]));
  if (!o.photos.length){ w.appendChild(card(null, [empty('Фото пока нет.')])); return; }
  var groups = {}; o.photos.forEach(function(p){ (groups[p.stage || 'Без этапа'] = groups[p.stage || 'Без этапа'] || []).push(p); });
  Object.keys(groups).forEach(function(gname){ var g = h('div', { class:'phg' });
    groups[gname].forEach(function(p){ var im = h('img', { alt:'' }), cell = h('div', { class:'ph' + (p.pub === false ? ' hid' : '') }, [im, h('div', { class:'phm' }, [h('small', { text:fdate(p.at) + (p.note ? ' · ' + p.note : '') }), h('span', { class:'sp' }),
      h('button', { class:'x', title:p.pub === false ? 'Показать клиенту' : 'Скрыть от клиента', text:p.pub === false ? '◌' : '●', onclick:function(){ p.pub = p.pub === false; save(); (p.pub && o.cab && REMOTE.ready() && !p.up ? photoUp(o, p) : Promise.resolve()).then(function(){ save(); go('obj', o.id + '|photos'); }); } }),
      h('button', { class:'x', text:'×', title:'Удалить', onclick:function(){ if (!confirm('Удалить фото?')) return; o.photos.splice(o.photos.indexOf(p), 1); idbDel('ph', p.id); if (p.up && o.cab) { REMOTE.del('c/' + o.cab.id + '/p/' + p.id + '.txt'); REMOTE.del('c/' + o.cab.id + '/t/' + p.id + '.txt'); } save(); go('obj', o.id + '|photos'); } })])]);
      idbGet('ph', p.id).then(function(r){ if (r) im.src = r.th; }); im.onclick = function(){ idbGet('ph', p.id).then(function(r){ if (r) viewer(r.full); }); }; g.appendChild(cell); });
    w.appendChild(card(gname + ' · ' + groups[gname].length, [g])); });
}
function viewer(src){ var b = h('div', { class:'dlg vw', onclick:function(){ b.remove(); } }, [h('img', { src:src })]); document.body.appendChild(b); }
function photoUp(o, p){ return idbGet('ph', p.id).then(function(r){ if (!r) return; return cabFile(o, 't/' + p.id, dataUrlBytes(r.th)).then(function(){ return cabFile(o, 'p/' + p.id, dataUrlBytes(r.full)); }).then(function(){ p.up = 1; }); }); }
function photosSync(o, force){ var L = (o.photos || []).filter(function(p){ return p.pub !== false && (force || !p.up); }); return L.reduce(function(pr, p){ return pr.then(function(){ return photoUp(o, p); }); }, Promise.resolve()).then(function(){ if (L.length) save(); }); }
/* ---------- ДОКУМЕНТЫ В КАБИНЕТЕ (ПЭП) ---------- */
function captureDoc(kind, o){ return new Promise(function(ok){ docSink = function(t, html){ ok({ t:t, html:html }); }; makeDoc(kind, o); setTimeout(function(){ if (docSink){ /* ждём диалог */ } }, 50); }); }
function stampHtml(o, x){ var tz = function(a){ return new Date(a).toLocaleString('ru-RU', { timeZone:'Asia/Yekaterinburg' }) + ' (Екб)'; };
  return '<div style="margin-top:22px;border:2px solid #00805A;border-radius:10px;padding:10px 14px;font-size:11px;line-height:1.5;page-break-inside:avoid"><b style="color:#00805A">ДОКУМЕНТ ПОДПИСАН ПРОСТОЙ ЭЛЕКТРОННОЙ ПОДПИСЬЮ</b><br>' +
    (x.isp ? 'Исполнитель: ' + esc(x.isp.fio) + ' — ' + tz(x.isp.at) + '<br>' : '') + (x.cl ? 'Заказчик: ' + esc(x.cl.fio) + ' — ' + tz(x.cl.at) + ', через личный кабинет заказчика' + (x.cl.sig ? '<br><img src="' + x.cl.sig + '" style="height:48px;margin:4px 0">' : '') + '<br>' : 'Заказчик: ожидает подписи<br>') +
    'Контрольная сумма документа (SHA-256): ' + x.hash + '<br>Идентификатор: ' + x.id + ' · Основание: соглашение об электронном документообороте в договоре подряда</div>'; }
function withStamp(o, x, html){ return html.replace(/<\/div><\/body><\/html>\s*$/, stampHtml(o, x) + '</div></body></html>'); }
function docToCab(kind, o){
  var d = DOCS.filter(function(x){ return x[0] === kind; })[0];
  function go2(){ captureDoc(kind, o).then(function(r){ var x = { id:uid(), kind:kind, t:r.t, at:new Date().toISOString(), sign:SIGN_KINDS.indexOf(kind) > -1 && confirm('Попросить клиента подписать «' + r.t + '» в кабинете?\n\nОК — нужна подпись, Отмена — просто для ознакомления'), isp:{ fio:ispName(o), at:new Date().toISOString() } };
    return sha256(r.html).then(function(hs){ x.hash = hs; return idbPut('doc', { id:x.id, html:r.html }); }).then(function(){ return cabFile(o, 'd/' + x.id, r.html, true); }).then(function(){ o.cdocs = o.cdocs || []; o.cdocs.unshift(x); save(); logA('№' + o.num + ': в кабинет — ' + r.t); return cabPublish(o, true); }).then(function(){ toast('Документ в кабинете клиента'); if (x.sign) offerNotify(o, 'Здравствуйте! В вашем кабинете новый документ на подпись: «' + x.t + '». ' + cabUrl(o)); go('obj', o.id + '|client'); }); }).catch(function(e){ toast(e.message); }); }
  if (!REMOTE.ready()) return toast('Сначала подключите постоянный кабинет: Компания → «Постоянный кабинет клиента»');
  if (!o.cab) cabPublish(o, true).then(go2, function(e){ toast(e.message); }); else go2();
}
function ispName(o){ var e = entOf(o); return e.kind === 'ooo' ? (e.dir || '') + ', ' + (e.full || 'ООО') : (e.full || e.fio || S.co.name); }
function offerNotify(o, text){ var c = client(o.cid); if (confirm('Сообщить клиенту в ' + chName(chOf(c)) + '?')) sendMsg(c, text); }
function cabDocsCard(o){ var L = o.cdocs || [], box = h('div', { class:'col' });
  if (!L.length) box.appendChild(h('p', { class:'muted', text:'Документов в кабинете пока нет. Во вкладке «Документы» у каждого документа есть кнопка «В кабинет клиента» — клиент откроет его и подпишет с телефона.' }));
  L.forEach(function(x){ box.appendChild(h('div', { class:'dline' }, [ic('pdf'), h('div', { class:'grow' }, [h('b', { text:x.t }), h('small', { class:'muted', text:'добавлен ' + fdate(x.at) + (x.sign ? '' : ' · для ознакомления') })]),
    x.sign ? h('span', { class:'pill ' + (x.cl ? 'g' : x.bad ? 'r' : 'y'), text:x.cl ? 'Подписан ' + fdate(x.cl.at) : x.bad ? 'Подпись к старой версии' : 'Ждёт подписи' }) : null,
    btn('eye', '', 'lt xs', function(){ idbGet('doc', x.id).then(function(r){ if (!r) return toast('Документ хранится на другом устройстве'); docRaw(x.t, withStamp(o, x, r.html)); }); }),
    btn('trash', '', 'lt xs', function(){ if (!confirm('Убрать из кабинета клиента?')) return; o.cdocs.splice(o.cdocs.indexOf(x), 1); REMOTE.del('c/' + o.cab.id + '/d/' + x.id + '.txt'); save(); cabPublish(o, true); go('obj', o.id + '|client'); })])); });
  return card('Документы в кабинете клиента', [box]); }
function docRaw(t, html){ var url = URL.createObjectURL(new Blob([html], { type:'text/html;charset=utf-8' })); if (!window.open(url, '_blank')) download(t + '.html', html, 'text/html;charset=utf-8'); setTimeout(function(){ URL.revokeObjectURL(url); }, 60000); }
/* ---------- ПЕРЕПИСКА ---------- */
function canChat(o){ var m = me(); if (!can('chat')) return false; if (m.role === 'owner' || m.role === 'admin') return true; return ['manager', 'prorab', 'designer'].some(function(k){ return o[k] === m.id; }); }
function tabChat(w, o){
  o.msgs = o.msgs || []; o.msgs.forEach(function(m){ if (m.f === 'c') m.seen = 1; }); save(); navBadges();
  if (!o.cab || !o.cab.issue){ w.appendChild(card('Переписка с клиентом', [h('div', { class:'hint y', html:REMOTE.chatReady() ? 'Создайте кабинет клиента во вкладке «Кабинет клиента» — переписка включится автоматически.' : '<b>Переписка не подключена.</b> Компания → «Постоянный кабинет клиента» → шаг «Переписка с клиентами».' })])); return; }
  var list = h('div', { class:'chat' }), m = me();
  function draw(){ list.innerHTML = ''; if (!o.msgs.length) list.appendChild(h('p', { class:'muted c', text:'Сообщений пока нет. Напишите клиенту первым — он увидит это в своём кабинете.' }));
    o.msgs.forEach(function(x){ list.appendChild(h('div', { class:'msg ' + (x.f === 'c' ? 'in' : x.f === 'sys' ? 'sys' : 'out') }, [x.f !== 'sys' ? h('small', { text:(x.f === 'c' ? (client(o.cid).name || 'Клиент') : x.w + (x.r ? ' · ' + x.r : '')) + ' · ' + new Date(x.a).toLocaleString('ru-RU', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }) }) : null, x.i ? h('img', { src:x.i, onclick:function(){ viewer(x.i); } }) : null, x.x ? h('div', { text:x.x }) : null])); });
    setTimeout(function(){ list.scrollTop = list.scrollHeight; }, 30); }
  draw();
  var t = h('textarea', { rows:'2', placeholder:canChat(o) ? 'Сообщение клиенту…' : 'У вас нет доступа писать клиенту по этому объекту', disabled:!canChat(o) }), fi = h('input', { type:'file', accept:'image/*', style:'display:none' });
  var asW = { who:m.id || '' }, team2 = team(o), asSel = m.role === 'owner' || m.role === 'admin' ? sel(asW, 'who', [['', 'От компании (' + S.co.name + ')']].concat(team2.map(function(x){ return [x.id, x.n + ' · ' + x.r]; }))) : null;
  function author(){ var c = byId(S.crew, asW.who), r = team2.filter(function(x){ return x.id === asW.who; })[0]; return c ? { w:c.name, r:r ? r.r : (c.role || '') } : { w:S.co.name, r:'' }; }
  function send(ev){ var a = author(); ev.t = 'm'; ev.f = 's'; ev.w = a.w; ev.r = a.r; ev.a = new Date().toISOString(); var loc = Object.assign({}, ev, { pend:1 }); o.msgs.push(loc); draw();
    REMOTE.post(o, ev).then(function(j){ delete loc.pend; loc.gid = j.id; save(); }, function(e){ o.msgs.splice(o.msgs.indexOf(loc), 1); draw(); toast(e.message); }); }
  fi.onchange = function(){ if (!fi.files[0]) return; chatImg(fi.files[0]).then(function(u){ send({ x:'', i:u }); }); };
  w.appendChild(card(h('div', { class:'row' }, [h('h3', { text:'Переписка с клиентом' }), h('span', { class:'sp' }), btn('', 'Обновить', 'lt xs', function(){ pollInbox(true).then(function(){ go('obj', o.id + '|chat'); }); })]), [list,
    canChat(o) ? h('div', { class:'chatin' }, [asSel, t, h('div', { class:'row' }, [btn('cam', '', 'lt', function(){ fi.click(); }), fi, h('span', { class:'sp' }), btn('send', 'Отправить', '', function(){ var v = t.value.trim(); if (!v) return; t.value = ''; send({ x:v }); })])]) : null,
    h('small', { class:'muted', text:'Клиент пишет вам из своего кабинета. Новые сообщения проверяются каждые 30 секунд, пока приложение открыто.' })]));
  t.onkeydown = function(e){ if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)){ e.preventDefault(); var v = t.value.trim(); if (v){ t.value = ''; send({ x:v }); } } };
}
function chatImg(file){ var tries = [[900, 0.6], [720, 0.5], [560, 0.45], [440, 0.4]]; return tries.reduce(function(p, q){ return p.then(function(u){ return u && u.length < 40000 ? u : shrink(file, q[0], q[1]); }); }, Promise.resolve(null)); }
V.inbox = function(w){
  title('Сообщения клиентов');
  $('#barR').appendChild(btn('', 'Проверить', 'lt', function(){ pollInbox(true).then(function(){ go('inbox'); }); }));
  var L = S.objs.filter(function(o){ return o.cab && o.cab.issue && canChat(o); }).sort(function(a, b){ return lastAt(b) < lastAt(a) ? -1 : 1; });
  if (!REMOTE.chatReady()) w.appendChild(h('div', { class:'hint y', html:'Переписка не подключена — Компания → «Постоянный кабинет клиента».' }));
  if (!L.length){ w.appendChild(card(null, [empty('Здесь будут диалоги со всеми клиентами, у которых создан кабинет.')])); return; }
  w.appendChild(card(null, L.map(function(o){ var last = (o.msgs || []).slice(-1)[0], un = unread(o); return h('button', { class:'thr', onclick:function(){ go('obj', o.id + '|chat'); } }, [h('div', { class:'grow' }, [h('b', { text:client(o.cid).name + ' · №' + o.num + ' ' + o.name }), h('small', { class:'muted', text:last ? (last.f === 'c' ? 'Клиент: ' : last.f === 'sys' ? '' : last.w + ': ') + (last.x || (last.i ? 'Фото' : '')) : 'нет сообщений' })]), un ? h('span', { class:'bdg', text:String(un) }) : null, h('small', { class:'muted', text:last ? fdate(last.a) : '' })]); })));
};
function lastAt(o){ var l = (o.msgs || []).slice(-1)[0]; return l ? l.a : ''; }
function unread(o){ return (o.msgs || []).filter(function(m){ return m.f === 'c' && !m.seen; }).length; }
function navBadges(){ var n = 0; S.objs.forEach(function(o){ if (canChat(o)) n += unread(o); }); var b = $('#side [data-v="inbox"]'); if (!b) return; var x = b.querySelector('.bdg'); if (x) x.remove(); if (n) b.appendChild(h('span', { class:'bdg', text:String(n) })); }
/* опрос входящих: сообщения, подписи, утверждения */
var pollBusy = false;
function pollInbox(force){
  if (pollBusy || !REMOTE.chatReady() || !navigator.onLine) return Promise.resolve();
  var byN = {}; S.objs.forEach(function(o){ if (o.cab && o.cab.issue) byN[o.cab.issue] = o; }); if (!Object.keys(byN).length) return Promise.resolve();
  pollBusy = true; S.ib = S.ib || {};
  return REMOTE.inbox(S.ib.since).then(function(L){ var news = 0, changed = {};
    return L.reduce(function(p, c){ return p.then(function(){ if (c.updated_at > (S.ib.since || '')) S.ib.since = c.updated_at; var n = String(c.issue_url).split('/').pop(), o = byN[n]; if (!o || !/^dm1:/.test(c.body)) return;
      o.msgs = o.msgs || []; o.cab.vg = o.cab.vg || []; if (o.msgs.some(function(m){ return m.gid === c.id; }) || o.cab.vg.indexOf(c.id) > -1) return;
      return decS(o.cab.key, c.body.slice(4)).then(JSON.parse).then(function(ev){ ev.gid = c.id; ev.a = ev.a || c.created_at;
        if (ev.t === 'view'){ o.cab.vg.push(c.id); o.cab.vg = o.cab.vg.slice(-60); o.cab.views = (o.cab.views || 0) + 1; if (!o.cab.lastView || ev.a > o.cab.lastView) o.cab.lastView = ev.a; if (Date.now() - new Date(ev.a).getTime() < 15 * 60000) toast(client(o.cid).name + ' открыл свой кабинет — хорошее время позвонить'); return; }
        if (ev.t === 'm'){ if (ev.f === 'c'){ news++; } else ev.seen = 1; o.msgs.push(ev); }
        else if (ev.t === 'sign'){ var x = (o.cdocs || []).filter(function(d){ return d.id === ev.d; })[0]; o.msgs.push({ gid:c.id, f:'sys', a:ev.a, x:x ? (ev.h === x.hash ? 'Клиент подписал «' + x.t + '» (' + ev.fio + ')' : 'Клиент подписал старую версию «' + x.t + '» — отправьте документ заново') : 'Подпись к удалённому документу' });
          if (x && ev.h === x.hash && !x.cl){ x.cl = { fio:ev.fio, at:ev.a, sig:ev.sig || '', ua:ev.ua || '' }; changed[o.id] = o; logA('№' + o.num + ': клиент подписал ' + x.t); toast('Клиент подписал: ' + x.t); idbGet('doc', x.id).then(function(r){ if (r) cabFile(o, 'd/' + x.id, withStamp(o, x, r.html), true); }); } else if (x && ev.h !== x.hash) x.bad = 1; }
        else if (ev.t === 'ap'){ o.msgs.push({ gid:c.id, f:'sys', a:ev.a, x:'Клиент утвердил смету на ' + rub(ev.tot) + ' (' + ev.fio + ')' }); if (!o.approved && ev.code === apCode(o)){ approve(o, 'клиент в кабинете, ПЭП: ' + ev.fio, ev.code); changed[o.id] = o; toast('Смета №' + o.num + ' утверждена клиентом'); } else if (!o.approved) o.msgs.push({ gid:c.id + 'x', f:'sys', a:ev.a, x:'Смета изменилась после того, как клиент её открыл, — утверждение не применено. Попросите обновить страницу кабинета.' }); }
      }, function(){}); }); }, Promise.resolve()).then(function(){ save(); navBadges(); Object.keys(changed).forEach(function(k){ cabPublish(changed[k], true); });
        if (news){ toast('Новых сообщений: ' + news); try { if (document.hidden && window.Notification && Notification.permission === 'granted') new Notification(S.co.name + ': сообщение от клиента'); } catch(e){} }
        if (news && (view === 'inbox' || (view === 'obj' && /\|chat$/.test(arg || '')))) go(view, arg); }); })
    .catch(function(e){ if (force) toast(e.message); }).then(function(){ pollBusy = false; });
}
setInterval(function(){ if (!document.hidden) pollInbox(); }, 30000); setTimeout(pollInbox, 3000);
/* ---------- АРХИВ ОБЪЕКТА ---------- */
function objArchive(o){
  var d = clientData(o, true), docs = [], photos = [];
  return (o.cdocs || []).reduce(function(p, x){ return p.then(function(){ return idbGet('doc', x.id).then(function(r){ if (r) docs.push({ t:x.t, html:withStamp(o, x, r.html), st:x.sign ? (x.cl ? 'Подписан заказчиком ' + fdate(x.cl.at) + ' (' + x.cl.fio + ')' : 'Не подписан заказчиком') : 'Для ознакомления' }); }); }); }, Promise.resolve())
    .then(function(){ return (o.photos || []).reduce(function(p, x){ return p.then(function(){ return idbGet('ph', x.id).then(function(r){ if (r) photos.push({ src:r.full, at:x.at, stage:x.stage, note:x.note }); }); }); }, Promise.resolve()); })
    .then(function(){ return archHtml(d, docs, photos, (o.msgs || []).map(function(m){ return { f:m.f, w:m.f === 'c' ? client(o.cid).name : m.w, r:m.r, x:m.x, i:m.i, a:m.a }; }), MARK); });
}
function archiveDl(o){ toast('Собираю архив…'); objArchive(o).then(function(html){ download(S.co.name + '_объект_' + o.num + '_архив.html', html, 'text/html;charset=utf-8'); logA('№' + o.num + ': скачан архив объекта'); }); }

function docsSync(o){ return (o.cdocs || []).reduce(function(p, x){ return p.then(function(){ return idbGet('doc', x.id).then(function(r){ if (r) return cabFile(o, 'd/' + x.id, x.cl ? withStamp(o, x, r.html) : r.html, true); }); }); }, Promise.resolve()); }

/* ================= ДОСТУПЫ И РОЛИ (как в Битрикс24) ================= */
var AROLES = [['owner', 'Владелец'], ['admin', 'Администратор'], ['manager', 'Менеджер'], ['prorab', 'Прораб'], ['designer', 'Дизайнер'], ['master', 'Мастер'], ['accountant', 'Бухгалтер']];
var PERMS = [
  ['crm', 'Заявки и клиенты', 'scope'], ['objs', 'Объекты и сметы', 'scope'], ['smeta', 'Редактировать сметы', 'bool'], ['cost', 'Видеть себестоимость, зарплаты в сметах и прибыль', 'bool'],
  ['docs', 'Документы и договоры', 'bool'], ['chat', 'Переписка с клиентами', 'bool'], ['stats', 'Аналитика', 'bool'], ['money', 'Деньги компании', 'bool'],
  ['salary', 'Зарплаты', 'scope'], ['stock', 'Склад', 'bool'], ['cat', 'Справочник цен', 'bool'], ['crew', 'Сотрудники', 'bool'], ['company', 'Настройки компании', 'bool'], ['del', 'Удаление', 'bool'], ['access', 'Настройка доступов', 'bool']
];
var PDEF = {
  admin:{ crm:'all', objs:'all', smeta:1, cost:1, docs:1, chat:1, stats:1, money:1, salary:'all', stock:1, cat:1, crew:1, company:1, del:0, access:1 },
  manager:{ crm:'own', objs:'own', smeta:1, cost:0, docs:1, chat:1, stats:0, money:0, salary:'own', stock:0, cat:0, crew:0, company:0, del:0, access:0 },
  prorab:{ crm:'none', objs:'own', smeta:0, cost:0, docs:1, chat:1, stats:0, money:0, salary:'own', stock:1, cat:0, crew:0, company:0, del:0, access:0 },
  designer:{ crm:'own', objs:'own', smeta:0, cost:0, docs:0, chat:1, stats:0, money:0, salary:'own', stock:0, cat:0, crew:0, company:0, del:0, access:0 },
  master:{ crm:'none', objs:'own', smeta:0, cost:0, docs:0, chat:0, stats:0, money:0, salary:'own', stock:0, cat:0, crew:0, company:0, del:0, access:0 },
  accountant:{ crm:'none', objs:'all', smeta:0, cost:1, docs:1, chat:0, stats:1, money:1, salary:'all', stock:1, cat:0, crew:1, company:0, del:0, access:0 }
};
function perm(role){ S.perm = S.perm || {}; return Object.assign({}, PDEF[role] || PDEF.master, S.perm[role] || {}); }
function users(){ return S.crew.filter(function(c){ return c.acc && c.acc.role && !c.to; }); }
function me(){ if (typeof SRV !== 'undefined' && SRV.on()) return srvMe(); var U = users(); if (!U.length) return { role:'owner', solo:true, id:'' }; var id = localStorage.getItem('dproMe'), c = id && byId(S.crew, id); if (!c || !c.acc || c.to) return { role:'none', id:'' }; return { role:c.acc.role, id:c.id, c:c }; }
function lvl(k){ var m = me(); if (m.role === 'owner') return PERMS.filter(function(p){ return p[0] === k; })[0] && PERMS.filter(function(p){ return p[0] === k; })[0][2] === 'scope' ? 'all' : true; if (m.role === 'none') return false; var v = perm(m.role)[k]; return v === 'none' ? false : v === 1 ? true : v === 0 ? false : v; }
function can(k){ return !!lvl(k); }
function mine(o){ var m = me(); if (!m.id) return true; return ['manager', 'prorab', 'designer'].some(function(k){ return o[k] === m.id; }) || (o.rooms || []).some(function(r){ return (r.lines || []).some(function(l){ return l.who === m.id; }); }); }
function seeObj(o){ var l = lvl('objs'); return l === 'all' || l === true || (l === 'own' && mine(o)); }
function seeDeal(d){ var l = lvl('crm'), m = me(); if (l === 'all' || l === true) return true; if (l !== 'own') return false; var o = d.oid && byId(S.objs, d.oid); return d.mgr === m.id || (o && mine(o)); }
var VPERM = { crm:'crm', deal:'crm', clients:'crm', client:'crm', stats:'stats', objs:'objs', obj:'objs', crew:'crew', person:'crew', money:'money', salary:'salary', emp:'salary', stock:'stock', cat:'cat', company:'company', data:'company', access:'access', inbox:'chat' };
/* обёртки: навигация, переходы, списки по зоне ответственности */
var go0 = go;
go = function(v, a){ var m = me();
  if (m.role === 'none'){ return loginScreen(); }
  var k = VPERM[v]; if (k && !can(k)){ if (!(v === 'emp' && a === m.id) && !(v === 'person' && a === m.id)){ toast('Нет доступа к этому разделу'); v = 'home'; a = null; } }
  if (v === 'obj'){ var o = byId(S.objs, String(a || '').split('|')[0]); if (o && !seeObj(o)){ toast('Этот объект закреплён за другим сотрудником'); v = 'objs'; a = null; } }
  if (v === 'salary' && lvl('salary') === 'own'){ v = 'emp'; a = m.id; }
  document.body.classList.toggle('nocost', !can('cost')); document.body.classList.toggle('nodel', !can('del'));
  var keepO = S.objs, keepD = S.deals, keepC = S.clients, keepT = OTABS, keepP = S.set.showPay;
  if (!/^(obj|deal|client|data|company)$/.test(v)){ S.objs = keepO.filter(seeObj); S.deals = keepD.filter(seeDeal); if (lvl('crm') === 'own') S.clients = keepC.filter(function(c){ return S.deals.some(function(d){ return d.cid === c.id; }) || S.objs.some(function(o){ return o.cid === c.id; }); }); }
  OTABS = keepT.filter(function(t){ return !((t[0] === 'money' || t[0] === 'team') && !can('cost')) && !(t[0] === 'docs' && !can('docs')) && !(t[0] === 'chat' && !can('chat')); });
  if (!can('cost')) S.set.showPay = false;
  try { go0(v, a); } finally { S.objs = keepO; S.deals = keepD; S.clients = keepC; OTABS = keepT; if (!can('cost')) S.set.showPay = keepP; }
  if (v === 'obj' && /\|?smeta$|^[^|]*$/.test(String(a || '')) && !can('smeta')) $$('#view .room input, #view .room select, #view .room textarea, #view .room button').forEach(function(x){ x.disabled = true; });
  var who = $('#who'); if (who){ who.textContent = m.solo ? '' : (m.c ? m.c.name + ' · ' + AROLES.filter(function(r){ return r[0] === m.role; })[0][1] : ''); }
  navBadges();
};
NAV[NAV.length - 1][1].push(['access', 'lock', 'Доступы и роли']);
NAV[1][1].splice(1, 0, ['inbox', 'chat', 'Сообщения']);
var renderNav0 = renderNav;
renderNav = function(){ var keep = NAV; NAV = keep.map(function(g){ return [g[0], g[1].filter(function(it){ var k = VPERM[it[0]]; return !k || can(k) || (it[0] === 'salary' && lvl('salary')); })]; }).filter(function(g){ return g[1].length; });
  $('#nav').innerHTML = ''; $('#navf').innerHTML = ''; $('#mnu').innerHTML = ''; try { renderNav0(); } finally { NAV = keep; }
  var m = me(); if (!m.solo){ $('#navf').insertBefore(h('button', { class:'ni sm', onclick:function(){ if (typeof SRV !== 'undefined' && SRV.on()){ if (!confirm('Выйти из учётной записи на этом устройстве?')) return; var x = SRV.get(); delete x.token; SRV.set(x); srvLogin(); return; } localStorage.removeItem('dproMe'); loginScreen(); } }, [ic('user'), h('span', { text:(typeof SRV !== 'undefined' && SRV.on()) ? 'Выйти из учётной записи' : 'Сменить пользователя' })]), $('#navf').firstChild); $('#navf').appendChild(h('small', { class:'sv', id:'who' })); } };
/* вход сотрудника по PIN (на сервере станет полноценным логином) */
function pinHash(p){ return sha256('dpro|' + p); }
function loginScreen(){ var U = users(), box = h('div', { class:'login2' }), f = { id:(U[0] || {}).id, pin:'' };
  box.appendChild(card('Кто работает?', [h('div', { class:'chs' }, U.map(function(c){ return h('button', { class:'chip sm', text:c.name + ' · ' + AROLES.filter(function(r){ return r[0] === c.acc.role; })[0][1], onclick:function(e){ f.id = c.id; $$('.login2 .chip').forEach(function(b){ b.classList.remove('on'); }); e.target.classList.add('on'); pi.focus(); } }); })),
    field('PIN-код', pi = h('input', { type:'password', inputmode:'numeric', maxlength:'8', placeholder:'••••' })), btn('lock', 'Войти', '', ok), h('small', { class:'muted', text:'PIN выдаёт владелец или администратор в карточке сотрудника.' })]));
  var pi; function ok(){ var c = byId(S.crew, f.id); if (!c) return toast('Выберите себя'); pinHash(pi.value).then(function(hs){ if (c.acc.pin && hs !== c.acc.pin) return toast('Неверный PIN'); localStorage.setItem('dproMe', c.id); box.remove(); renderNav(); go('home'); }); }
  pi.onkeydown = function(e){ if (e.key === 'Enter') ok(); };
  $$('.login2').forEach(function(x){ x.remove(); }); document.body.appendChild(box); setTimeout(function(){ var b = box.querySelector('.chip'); if (b) b.classList.add('on'); }, 0); }
V.access = function(w){
  title('Доступы и роли'); var m = me(), owner = m.role === 'owner';
  w.appendChild(h('div', { class:'hint b', html:'<b>Как в Битрикс24:</b> у каждого сотрудника своя роль, а у роли — набор прав. <b>Владелец</b> видит всё и настраивает права всех ролей, включая администратора. <b>Администратор</b> — только то, что ему разрешил владелец, и может настраивать роли ниже себя. «Свои» — только объекты и заявки, где сотрудник назначен менеджером, прорабом, дизайнером или мастером.' }));
  if (m.solo) w.appendChild(h('div', { class:'hint y', html:'Сейчас приложением пользуется один человек — у всех полный доступ. Чтобы включить роли, откройте карточку сотрудника (Сотрудники → «Карточка»), выдайте <b>себе</b> роль «Владелец» и PIN, затем остальным — их роли.' }));
  var roles = AROLES.filter(function(r){ return r[0] !== 'owner' && (owner || r[0] !== 'admin'); });
  var tb = h('table', { class:'t perm' }), hd = h('tr', {}, [h('th', { text:'Право' })].concat(roles.map(function(r){ return h('th', { text:r[1] }); }))); tb.appendChild(h('thead', {}, [hd]));
  var body = h('tbody'); PERMS.forEach(function(p){ if (p[0] === 'access' && !owner) return; var tr = h('tr', {}, [h('td', { text:p[1] })]);
    roles.forEach(function(r){ S.perm = S.perm || {}; var P = S.perm[r[0]] = S.perm[r[0]] || {}, cur = perm(r[0])[p[0]], td = h('td', { class:'c' }); var myOk = owner || can(p[0]);
      if (p[2] === 'scope'){ var s = h('select', { disabled:!myOk }); [['none', 'нет'], ['own', 'свои'], ['all', 'все']].forEach(function(o){ s.appendChild(h('option', { value:o[0], text:o[1] })); }); s.value = cur; s.onchange = function(){ P[p[0]] = s.value; save(); }; td.appendChild(s); }
      else { var x = h('input', { type:'checkbox', disabled:!myOk }); x.checked = !!cur; x.onchange = function(){ P[p[0]] = x.checked ? 1 : 0; save(); }; td.appendChild(x); }
      tr.appendChild(td); }); body.appendChild(tr); });
  tb.appendChild(body); w.appendChild(card('Права ролей', [h('div', { class:'tw' }, [tb]), h('div', { class:'row' }, [h('span', { class:'sp' }), btn('', 'Вернуть по умолчанию', 'lt xs', function(){ if (confirm('Сбросить права ролей к стандартным?')){ roles.forEach(function(r){ delete S.perm[r[0]]; }); save(); go('access'); } })])]));
  w.appendChild(card('Сотрудники с доступом', [S.crew.length ? table(['Сотрудник', 'Должность', 'Роль доступа', 'PIN', ''], S.crew.filter(function(c){ return !c.to; }).map(function(c){ return [c.name, c.role || '', c.acc ? AROLES.filter(function(r){ return r[0] === c.acc.role; })[0][1] : 'нет доступа', c.acc && c.acc.pin ? 'задан' : '—', btn('user', 'Карточка', 'lt xs', function(){ go('person', c.id); })]; })) : empty('Добавьте сотрудников в разделе «Сотрудники и бригады».')]));
  if (!(typeof SRV !== 'undefined' && SRV.on())) w.appendChild(h('small', { class:'muted', text:'Сейчас данные хранятся в этом браузере, поэтому роли работают на этом устройстве (общий компьютер в офисе, планшет). Когда подключим сервер, каждый войдёт со своего телефона под своей ролью — настройки перенесутся как есть.' }));
};
/* ---------- КАРТОЧКА СОТРУДНИКА ---------- */
function avatar(c, big){ return h('div', { class:'ava' + (big ? ' big' : ''), html:c.photo ? '<img src="' + c.photo + '">' : esc(String(c.name || '?').split(/\s+/).map(function(s){ return s[0]; }).join('').slice(0, 2).toUpperCase()) }); }
V.person = function(w, id){
  var c = byId(S.crew, id); if (!c){ go('crew'); return; } var m = me(), adm = m.role === 'owner' || (can('access') && (!c.acc || ['owner', 'admin'].indexOf(c.acc.role) < 0)), selfv = m.id === c.id;
  title(c.name); $('#barR').appendChild(btn('', '← Сотрудники', 'lt', function(){ go('crew'); }));
  var M = crewStats(), st = M[c.id] || { objs:{}, all:0, allPaid:0 }, objs = Object.keys(st.objs).map(function(k){ return st.objs[k]; }).filter(Boolean), act = objs.filter(function(o){ return o.status === 'В работе'; });
  var fi = h('input', { type:'file', accept:'image/*', style:'display:none' }); fi.onchange = function(){ if (fi.files[0]) shrink(fi.files[0], 240, 0.8).then(function(u){ c.photo = u; save(); go('person', c.id); }); };
  w.appendChild(card(null, [h('div', { class:'pers' }, [h('div', { class:'avaw', onclick:function(){ if (adm || selfv) fi.click(); } }, [avatar(c, true), fi]), h('div', { class:'grow' }, [h('h2', { text:c.name }), h('div', { class:'muted', text:[c.role, c.dept, c.brig].filter(Boolean).join(' · ') }),
    h('div', { class:'row' }, [h('span', { class:'pill ' + (c.to ? 'r' : 'g'), text:c.to ? 'Уволен ' + fdate(c.to) : 'Работает' + (c.from ? ' с ' + fdate(c.from) : '') }), c.acc ? h('span', { class:'pill b', text:'Доступ: ' + AROLES.filter(function(r){ return r[0] === c.acc.role; })[0][1] }) : h('span', { class:'pill', text:'Без доступа в приложение' })]),
    h('div', { class:'row' }, [c.phone ? h('a', { class:'btn lt xs', href:'tel:' + c.phone.replace(/[^\d+]/g, '') }, [ic('phone'), 'Позвонить']) : null, c.phone || c.max ? btn('chat', 'Написать', 'lt xs', function(){ sendMsg(c, ''); }) : null, can('salary') && (lvl('salary') === 'all' || selfv) ? btn('coin', 'Расчёт и выплаты', 'lt xs', function(){ go('emp', c.id); }) : null])]),
    h('div', { class:'grid2 kp' }, [kpi(String(act.length), 'объектов в работе'), kpi(String(objs.length), 'объектов всего'), can('cost') || selfv ? kpi(rub(st.all - st.allPaid), 'к выплате') : null, kpi(c.bday ? fdate(c.bday).slice(0, 5) : '—', 'день рождения')])])]));
  var ro = !(adm || selfv), F = function(lab, k, t, ph){ var i = inp(c, k, t, null, { placeholder:ph || '' }); i.disabled = ro; return field(lab, i); };
  w.appendChild(card('Профиль', [h('div', { class:'grid3' }, [F('ФИО', 'name'), field('Должность', (function(){ var s = sel(c, 'role', ROLES); s.disabled = !adm; return s; })()), F('Отдел', 'dept', 'text', 'Продажи, Производство…')]),
    h('div', { class:'grid3' }, [F('Телефон', 'phone', 'tel'), F('Почта', 'email', 'email'), F('Бригада', 'brig')]),
    h('div', { class:'grid3' }, [F('MAX — ссылка', 'max', 'url', 'https://max.ru/u/…'), F('Telegram', 'tg'), F('Дата рождения', 'bday', 'date')]),
    h('div', { class:'grid3' }, [F('Работает с', 'from', 'date'), F('Уволен', 'to', 'date'), F('Контакт на экстренный случай', 'emerg', 'text', 'Имя, телефон')]),
    field('Заметки', (function(){ var t = area(c, 'note', 'Навыки, инструмент, на каких объектах силён…'); t.disabled = ro; return t; })())]));
  if (adm){ var A = c.acc || {}, rs = { r:A.role || '' };
    w.appendChild(card('Доступ в приложение', [h('div', { class:'grid3' }, [field('Роль доступа', sel(rs, 'r', [['', 'Нет доступа']].concat(AROLES.filter(function(r){ return m.role === 'owner' || ['owner', 'admin'].indexOf(r[0]) < 0; })), function(v){ if (m.solo && v !== 'owner'){ alert('Сначала откройте свою карточку и назначьте себе роль «Владелец» — иначе после включения ролей вы не сможете войти.'); go('person', c.id); return; } if (!v){ delete c.acc; } else { c.acc = c.acc || {}; c.acc.role = v; if (v === 'owner' && m.solo) localStorage.setItem('dproMe', c.id); } save(); renderNav(); go('person', c.id); })),
      fieldD('PIN-код для входа', h('div', { class:'row' }, [btn('lock', c.acc && c.acc.pin ? 'Сменить PIN' : 'Задать PIN', 'lt', function(){ if (!c.acc) return toast('Сначала выберите роль'); var p = prompt('Новый PIN (4–8 цифр) для ' + c.name); if (!p) return; if (!/^\d{4,8}$/.test(p)) return toast('Только цифры, 4–8 штук'); pinHash(p).then(function(hs){ c.acc.pin = hs; save(); toast('PIN задан. Сообщите его сотруднику лично.'); go('person', c.id); }); })]))]),
      c.acc ? h('div', { class:'hint', html:'Права роли «' + AROLES.filter(function(r){ return r[0] === c.acc.role; })[0][1] + '»: ' + PERMS.filter(function(p){ var v = c.acc.role === 'owner' ? 1 : perm(c.acc.role)[p[0]]; return v && v !== 'none'; }).map(function(p){ var v = c.acc.role === 'owner' ? 'all' : perm(c.acc.role)[p[0]]; return p[1] + (v === 'own' ? ' (свои)' : ''); }).join(', ') + '. <a href="#" onclick="return false">Изменить права роли</a> — раздел «Доступы и роли».' }) : null])); }
  w.appendChild(card('Объекты', [objs.length ? table(['Объект', 'Роль', 'Статус'], objs.map(function(o){ var r = ['manager', 'prorab', 'designer'].filter(function(k){ return o[k] === c.id; }).map(function(k){ return ROLE_OF[k]; }).join(', ') || 'Мастер'; return [h('a', { href:'#', text:'№' + o.num + ' ' + o.name, onclick:function(e){ e.preventDefault(); go('obj', o.id); } }), r, o.status]; })) : empty('Пока не назначен ни на один объект.')]));
};

/* ---------- подключение кабинета и переписки (мастер в 3 шага) ---------- */
function cabSetup(w){
  var G = gh(), out = h('div'), ownerName = (G.repo || 'skvesna010-create/app').split('/')[0];
  function stepBox(n, ok, t, body){ return h('div', { class:'step' + (ok ? ' ok' : '') }, [h('div', { class:'sn', text:ok ? '✓' : String(n) }), h('div', { class:'grow' }, [h('b', { text:t })].concat(body))]); }
  var tok = h('input', { type:'password', placeholder:G.tok ? '•••••• сохранён' : 'github_pat_…' }), repo = h('input', { type:'text', value:ghRepo() }), ib = h('input', { type:'text', value:G.ib || ownerName + '/inbox' }), ctok = h('input', { type:'password', placeholder:G.ctok ? '•••••• сохранён' : 'github_pat_…' });
  var edo = h('input', { type:'checkbox' }); edo.checked = S.set.edo !== false; edo.onchange = function(){ S.set.edo = edo.checked; save(); };
  w.appendChild(card('Постоянный кабинет клиента и переписка', [
    h('div', { class:'hint b', html:'Пока у нас нет своего сервера, кабинеты, фото, документы и переписка хранятся <b>в зашифрованном виде</b> в вашем GitHub. Расшифровать их можно только по личной ссылке клиента. Когда появится сервер — переключим одной настройкой, ссылки клиентов сохранятся.' }),
    stepBox(1, !!G.tok, 'Ключ владельца — кабинеты, фото, документы', [h('small', { class:'muted', html:'github.com → Settings → Developer settings → <b>Fine-grained tokens</b> → Generate. Repository access: <b>app</b> и <b>inbox</b>. Permissions: <b>Contents — Read and write</b>, <b>Issues — Read and write</b>. Срок — максимальный.' }), h('div', { class:'grid2' }, [field('Ключ владельца', tok), field('Репозиторий сайта', repo)])]),
    stepBox(2, !!(G.ib && G.ctok), 'Переписка и подписи клиентов', [h('small', { class:'muted', html:'а) Создайте <b>закрытый</b> репозиторий <b>inbox</b>: <a href="https://github.com/new?name=inbox&visibility=private" target="_blank" rel="noopener">github.com/new</a> (Private).<br>б) Сделайте второй ключ — <b>только для клиентов</b>: доступ только к <b>inbox</b>, права только <b>Issues — Read and write</b>. Он зашит в кабинеты в зашифрованном виде; доступа к сайту и деньгам у него нет.' }), h('div', { class:'grid2' }, [field('Репозиторий переписки', ib), field('Ключ для клиентов', ctok)])]),
    stepBox(3, S.set.edo !== false, 'Электронная подпись в договоре', [h('label', { class:'chk' }, [edo, 'Добавлять в договор пункт об электронном документообороте через кабинет (простая электронная подпись)']), h('small', { class:'muted', text:'Договор (или отдельное соглашение) клиент подписывает один раз на бумаге — после этого акты, сметы и доп. соглашения подписывает в кабинете. Покажите текст юристу.' })]),
    h('div', { class:'row' }, [btn('check', 'Сохранить и проверить', '', function(){ var g = gh(); if (tok.value.trim()) g.tok = tok.value.trim(); if (ctok.value.trim()) g.ctok = ctok.value.trim(); g.repo = repo.value.trim() || 'skvesna010-create/app'; g.ib = ib.value.trim(); ghSet(g); S.objs.forEach(function(o){ if (o.cab) delete o.cab.noib; }); save(); out.innerHTML = '<div class="hint">Проверяю…</div>';
      var res = []; ghBranch().then(function(){ res.push('✓ кабинеты'); }, function(e){ res.push('✗ кабинеты: ' + e.message); })
        .then(function(){ if (!g.ib) return; return REMOTE.ib('/issues?per_page=1').then(function(r){ res.push(r.ok ? '✓ переписка (ключ владельца)' : '✗ переписка: ' + r.status + (r.status === 404 ? ' — нет репозитория inbox или ключ без доступа к нему' : '')); }); })
        .then(function(){ if (!g.ctok || !g.ib) return; return fetch('https://api.github.com/repos/' + g.ib + '/issues?per_page=1', { headers:{ Authorization:'Bearer ' + g.ctok } }).then(function(r){ res.push(r.ok ? '✓ ключ для клиентов' : '✗ ключ для клиентов: ' + r.status); }); })
        .then(function(){ var bad = res.some(function(x){ return x[0] === '✗'; }); out.innerHTML = '<div class="hint ' + (bad ? 'r' : 'g') + '">' + res.map(esc).join('<br>') + (bad ? '' : '<br><b>Всё подключено.</b> Объект → «Кабинет клиента» → «Создать кабинет».') + '</div>'; if (!bad) setTimeout(function(){ go('company'); }, 2500); }); }),
      G.tok ? btn('', 'Удалить ключи с этого устройства', 'lt', function(){ if (confirm('Удалить ключи GitHub из этого браузера?')){ ghSet({ repo:ghRepo() }); go('company'); } }) : null]), out]));
}
/* ---------- пункт договора об ЭДО ---------- */
function EDO_TEXT(){ return '<p><b>Электронный документооборот</b></p>' +
  '<p>10.5. Стороны договорились использовать Личный кабинет Заказчика (далее — Кабинет), доступный по персональной ссылке, которую Подрядчик направляет Заказчику по телефону или в мессенджер, указанные в договоре, для обмена документами (сметы, графики, акты, дополнительные соглашения, уведомления) и сообщениями.</p>' +
  '<p>10.6. Документ считается подписанным простой электронной подписью Заказчика (п. 2 ст. 5, ст. 6 и ст. 9 Федерального закона от 06.04.2011 № 63-ФЗ «Об электронной подписи»), если в Кабинете Заказчик указал свои фамилию, имя и отчество, подтвердил согласие с документом и нажал кнопку «Подписать». Ключом простой электронной подписи является персональная ссылка на Кабинет. Подрядчик подписывает документ простой электронной подписью, размещая его в Кабинете.</p>' +
  '<p>10.7. Документы, подписанные в порядке п. 10.6, признаются равнозначными документам на бумажном носителе, подписанным собственноручно (п. 2 ст. 160 ГК РФ). Подрядчик фиксирует дату и время подписания и контрольную сумму (хэш SHA-256) документа. Заказчик вправе в любой момент скачать подписанные документы и архив объекта.</p>' +
  '<p>10.8. Заказчик обязуется не передавать ссылку на Кабинет третьим лицам, а при её утрате — незамедлительно сообщить Подрядчику; Подрядчик закрывает старую ссылку и выдаёт новую. Сообщения, направленные через Кабинет, признаются надлежащим уведомлением Сторон (ст. 165.1 ГК РФ).</p>' +
  '<p>10.9. Стороны вправе по желанию продублировать любой документ на бумаге. По окончании работ Подрядчик передаёт Заказчику архив объекта (документы, фотоотчёт, переписку) в электронном виде.</p>'; }
/* вкладка «Кабинет клиента»: + документы и архив */
OTF.client = function(w, o){ tabClient(w, o); if (o.cab) w.appendChild(cabDocsCard(o));
  w.appendChild(card('Архив объекта', [h('p', { class:'muted', text:'Один файл со всем: итоги и оплаты, смета, документы с подписями, фотоотчёт и переписка. По окончании работ отправьте его клиенту и сохраните у себя — открывается на любом устройстве без интернета.' }), h('div', { class:'row' }, [btn('arch', 'Скачать архив объекта', '', function(){ archiveDl(o); })])])); };

/* ================= СЕРВЕР ДОМИЛИИ (api.domilia.ru): вход, общая база, кабинеты ================= */
var SRVK = 'dproSRV', SYNK = 'dproSYN', API_DEF = 'https://api.domilia.ru';
var SRV = {
  get:function(){ try { return JSON.parse(localStorage.getItem(SRVK) || '{}'); } catch(e){ return {}; } },
  set:function(x){ localStorage.setItem(SRVK, JSON.stringify(x)); },
  on:function(){ return !!SRV.get().token; },
  url:function(){ return SRV.get().url || API_DEF; },
  req:function(method, path, body){ var s = SRV.get(), h2 = { 'content-type':'application/json' }; if (s.token) h2.Authorization = 'Bearer ' + s.token;
    return fetch(SRV.url() + path, { method:method, headers:h2, body:body == null ? undefined : JSON.stringify(body) }).then(function(r){ return r.text().then(function(t){ var j = null; try { j = JSON.parse(t); } catch(e){ j = t; } if (r.status === 401 && s.token){ srvLost(); } if (!r.ok) throw new Error((j && j.error) || ('Сервер: ' + r.status)); return j; }); }); }
};
function srvMe(){ var s = SRV.get(), u = s.user || {}, c = u.crew_id && byId(S.crew, u.crew_id); return { role:u.role || 'master', id:u.crew_id || '', c:c || { name:u.name || u.login, id:'' }, srv:1 }; }
function srvLost(){ var s = SRV.get(); delete s.token; SRV.set(s); toast('Сессия истекла — войдите заново'); srvLogin(); }
/* --- REMOTE через сервер --- */
var REMOTE_GH = Object.assign({}, REMOTE);
function remoteMode(){ if (!SRV.on()){ Object.assign(REMOTE, REMOTE_GH); return; }
  Object.assign(REMOTE, {
    kind:'server', ready:function(){ return true; }, chatReady:function(){ return true; },
    put:function(path, text){ var m = path.match(/^c\/([^\/.]+)(?:\.txt|\/(.+)\.txt)$/); if (!m) return Promise.reject(new Error('path')); return SRV.req('PUT', '/cab/' + m[1] + '/file?path=' + encodeURIComponent(m[2] || 'main'), { body:text }); },
    del:function(path){ var m = path.match(/^c\/([^\/.]+)(?:\.txt|\/(.+)\.txt)$/); if (!m) return Promise.resolve(); return m[2] ? SRV.req('DELETE', '/cab/' + m[1] + '/file?path=' + encodeURIComponent(m[2])) : SRV.req('DELETE', '/cab/' + m[1]); },
    thread:function(o){ o.cab.issue = o.cab.id; o.cab.ib = 'srv'; return Promise.resolve(o.cab.id); },
    post:function(o, ev){ if (!o.cab.issue) o.cab.issue = o.cab.id; return encT(o.cab.key, JSON.stringify(ev), true).then(function(t){ return SRV.req('POST', '/cab/' + o.cab.id + '/ev', { body:t }); }).then(function(j){ return { id:'s' + j.id }; }); },
    inbox:function(){ S.ib = S.ib || {}; return SRV.req('GET', '/inbox?after=' + (S.ib.after || 0)).then(function(L){ L.forEach(function(e){ if (+e.id > (S.ib.after || 0)) S.ib.after = +e.id; }); return L.filter(function(e){ return e.src === 'c'; }).map(function(e){ return { id:'s' + e.id, body:'dm1:' + e.body, issue_url:'/' + e.cab, created_at:e.at, updated_at:'' }; }); }); }
  });
  REMOTE.chatReady = function(){ return true; };
}
/* в режиме сервера у каждого кабинета «ветка» = его id */
var pollInbox0 = pollInbox;
pollInbox = function(force){ if (SRV.on()) S.objs.forEach(function(o){ if (o.cab && !o.cab.issue) o.cab.issue = o.cab.id; if (o.cab && o.cab.ib !== 'srv'){ o.cab.issue = o.cab.id; o.cab.ib = 'srv'; } }); return pollInbox0(force); };
/* --- синхронизация базы: записи по коллекциям --- */
function hs32(s){ var h = 2166136261; for (var i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36) + s.length.toString(36); }
var NOSYNC = { ib:1 }, COLLS = { objs:1, clients:1, deals:1, crew:1, stock:1, gexp:1, ents:1, tasks:1, depts:1, mreq:1 };
function toRecs(){ var R = {}; Object.keys(S).forEach(function(k){ if (NOSYNC[k]) return; var v = S[k];
  if (Array.isArray(v) && !v.length) return;
  if (Array.isArray(v) && (COLLS[k] || v.every(function(x){ return x && typeof x === 'object' && x.id; }))){ v.forEach(function(x){ if (x && x.id) R[k + '|' + x.id] = x; }); }
  else R['_|' + k] = v; }); return R; }
function synState(){ try { return JSON.parse(localStorage.getItem(SYNK) || '{}'); } catch(e){ return {}; } }
function synSave(x){ try { localStorage.setItem(SYNK, JSON.stringify(x)); } catch(e){} }
var syncBusy = false, syncT = null;
function syncSoon(){ if (!SRV.on()) return; clearTimeout(syncT); syncT = setTimeout(syncNow, 1500); }
function syncNow(){ if (!SRV.on() || syncBusy || !navigator.onLine) return Promise.resolve(); syncBusy = true; var st = synState(); st.h = st.h || {};
  var R = toRecs(), out = [];
  Object.keys(R).forEach(function(k){ if (/#arr$/.test(k)) return; var j = JSON.stringify(R[k]), hv = hs32(j); if (st.h[k] !== hv){ var p = k.indexOf('|'); out.push({ c:k.slice(0, p), i:k.slice(p + 1), d:R[k], _k:k, _h:hv }); } });
  Object.keys(st.h).forEach(function(k){ if (!(k in R) && !/^_\|/.test(k)){ var p = k.indexOf('|'); out.push({ c:k.slice(0, p), i:k.slice(p + 1), x:1, _k:k }); } });
  var push = out.length ? SRV.req('POST', '/sync', { recs:out.map(function(r){ return { c:r.c, i:r.i, d:r.d, x:r.x }; }) }).then(function(j){ var den = {}; (j.denied || []).forEach(function(d){ den[d.replace(':', '|')] = 1; }); out.forEach(function(r){ if (den[r._k]) return; if (r.x) delete st.h[r._k]; else st.h[r._k] = r._h; }); if (j.denied && j.denied.length) console.warn('Нет прав на запись', j.denied); }) : Promise.resolve();
  return push.then(function(){ return SRV.req('GET', '/sync?since=' + (st.rev || 0)); }).then(function(j){ var ch = applyRecs(j.recs || [], st); st.rev = j.rev; synSave(st); syncMark(); if (ch) afterRemote(); })
    .catch(function(e){ syncMark(e.message); }).then(function(){ syncBusy = false; });
}
function applyRecs(L, st){ var n = 0;
  L.forEach(function(r){ var k = r.c + '|' + r.i;
    if (r.c === '_'){ if (r.x || COLLS[r.i] || (Array.isArray(r.d) && !r.d.length && Array.isArray(S[r.i]) && S[r.i].length && S[r.i][0] && S[r.i][0].id)) return; var cur = JSON.stringify(S[r.i]); if (cur === JSON.stringify(r.d)){ st.h[k] = hs32(cur); return; } S[r.i] = r.d; st.h[k] = hs32(JSON.stringify(r.d)); n++; return; }
    var arr = S[r.c] = Array.isArray(S[r.c]) ? S[r.c] : [], idx = -1; for (var i = 0; i < arr.length; i++) if (arr[i].id === r.i){ idx = i; break; }
    if (r.x){ if (idx > -1){ arr.splice(idx, 1); n++; } delete st.h[k]; return; }
    var j = JSON.stringify(r.d); if (idx > -1 && JSON.stringify(arr[idx]) === j){ st.h[k] = hs32(j); return; }
    if (idx > -1) arr[idx] = r.d; else arr.unshift(r.d); st.h[k] = hs32(j); n++; });
  if (n) localStorage.setItem(KEY, JSON.stringify(S)); return n; }
function afterRemote(){ var a = document.activeElement; if (a && /INPUT|TEXTAREA|SELECT/.test(a.tagName) && $('#view').contains(a)){ var t = $('#saved'); if (t) t.textContent = 'Есть изменения от коллег — обновятся, когда закончите ввод'; a.addEventListener('blur', function f(){ a.removeEventListener('blur', f); setTimeout(function(){ go(view, arg); }, 50); }); return; } if (!$('.dlg')) go(view, arg); }
function syncMark(err){ var t = $('#saved'); if (!t || !SRV.on()) return; t.textContent = err ? 'Нет связи с сервером: ' + err : 'Синхронизировано · ' + new Date().toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' }); }
var save0 = save; save = function(){ save0(); syncSoon(); };
setInterval(function(){ if (!document.hidden) syncNow(); }, 10000);
window.addEventListener('online', function(){ syncNow(); });
/* --- вход на сервер --- */
function srvLogin(){ authScreen('login'); }
function firstSync(fresh0){ toast('Загружаю данные с сервера…'); var cs = (SRV.get().company || {}).slug || '', lastCo = localStorage.getItem('dproCo');
  if (fresh0 || (lastCo && cs && lastCo !== cs)){ if (S.objs.length + S.clients.length + S.deals.length) download('domilia-kopiya-ustroystva-' + today() + '.json', JSON.stringify(S), 'application/json'); S = fresh(); localStorage.setItem(KEY, JSON.stringify(S)); synSave({ h:{}, rev:0 }); }
  if (cs) localStorage.setItem('dproCo', cs); var st = synState();
  return SRV.req('GET', '/sync?since=0').then(function(j){
    var local = S.objs.length + S.clients.length + S.deals.length + S.crew.length;
    var srvData = (j.recs || []).filter(function(r){ return COLLS[r.c] && !r.x; }).length;
    if (!srvData){ if (local && confirm('Сервер пока пустой. Перенести данные с этого устройства на сервер?\n\nОбъектов: ' + S.objs.length + ', клиентов: ' + S.clients.length + ', сотрудников: ' + S.crew.length)){ synSave({ h:{}, rev:0 }); return syncNow().then(function(){ toast('Данные перенесены на сервер'); renderNav(); go('home'); }); } synSave({ h:{}, rev:0 }); return syncNow().then(function(){ renderNav(); go('home'); }); }
    if (local && !st.rev){ download('domilia-kopiya-do-servera-' + today() + '.json', JSON.stringify(S), 'application/json'); toast('Локальная копия скачана на всякий случай'); }
    var keep = { ib:S.ib }; S = fresh(); Object.keys(S).forEach(function(k){ if (Array.isArray(S[k])) S[k] = []; }); var st2 = { h:{}, rev:0 }; applyRecs(j.recs, st2); st2.rev = j.rev; Object.assign(S, keep); synSave(st2); localStorage.setItem(KEY, JSON.stringify(S)); renderNav(); go('home'); toast('Данные загружены с сервера'); }).catch(function(e){ toast(e.message); });
}
/* --- раздел в «Компании» --- */
function srvCard(w){ var s = SRV.get(), out = h('div'), url = h('input', { type:'text', value:SRV.url() });
  var kids = [h('div', { class:'hint b', html:'<b>Сервер Домилии</b> — общая база для всей команды: каждый входит со своего телефона под своим логином и видит только то, что разрешено его роли. Кабинеты клиентов, фото, документы и переписка тоже хранятся на сервере (в зашифрованном виде).' })];
  if (s.token){ kids.push(h('div', { class:'hint g', html:'Подключено: <b>' + esc(SRV.url()) + '</b> · вы вошли как <b>' + esc((s.user || {}).login) + '</b> (' + esc(AROLES.filter(function(r){ return r[0] === (s.user || {}).role; }).map(function(r){ return r[1]; })[0] || '') + ')' }));
    kids.push(h('div', { class:'row' }, [btn('', 'Синхронизировать сейчас', 'lt', function(){ syncNow().then(function(){ toast('Готово'); }); }), btn('', 'Перевыгрузить все кабинеты на сервер', 'lt', function(){ var L = S.objs.filter(function(o){ return o.cab; }); if (!L.length) return toast('Кабинетов пока нет'); toast('Выгружаю ' + L.length + '…'); L.reduce(function(p, o){ return p.then(function(){ o.cab.on = ''; return cabPublish(o, true); }); }, Promise.resolve()).then(function(){ toast('Кабинеты на сервере. Старые ссылки клиентов продолжают работать.'); }, function(e){ toast(e.message); }); }),
      btn('out', 'Выйти с сервера', 'lt', function(){ if (!confirm('Выйти? Данные на этом устройстве останутся.')) return; var x = SRV.get(); delete x.token; delete x.user; SRV.set(x); remoteMode(); go('company'); })]));
  } else { var key = h('input', { type:'text', placeholder:'ключ первой настройки' }), co = h('input', { type:'text', value:S.co.name || 'Домилия' }), lg = h('input', { type:'text', placeholder:'например andrey', autocomplete:'username' }), pw = h('input', { type:'password', placeholder:'от 8 символов', autocomplete:'new-password' }), nm = h('input', { type:'text', placeholder:'ваше имя' });
    kids.push(field('Адрес сервера', url));
    kids.push(h('div', { class:'row' }, [btn('lock', 'Войти', '', function(){ var x = SRV.get(); x.url = url.value.trim().replace(/\/$/, ''); delete x.off; SRV.set(x); srvLogin(); }), btn('', 'Проверить связь', 'lt', function(){ var x = SRV.get(); x.url = url.value.trim().replace(/\/$/, ''); SRV.set(x); SRV.req('GET', '/health').then(function(j){ out.innerHTML = '<div class="hint g">Сервер на связи ✓</div>'; }, function(e){ out.innerHTML = '<div class="hint r">Нет связи: ' + esc(e.message) + '</div>'; }); })]));
    kids.push(h('details', {}, [h('summary', { text:'Первая настройка сервера (один раз, делает владелец)' }), h('div', { class:'col' }, [h('small', { class:'muted', text:'Ключ первой настройки показан в журнале выкладки сервера на GitHub. После настройки он больше не нужен.' }), h('div', { class:'grid2' }, [field('Ключ первой настройки', key), field('Компания', co)]), h('div', { class:'grid3' }, [field('Ваш логин', lg), field('Пароль', pw), field('Имя', nm)]),
      btn('check', 'Создать компанию и войти владельцем', '', function(){ var x = SRV.get(); x.url = url.value.trim().replace(/\/$/, ''); SRV.set(x); SRV.req('POST', '/setup', { key:key.value.trim(), company:co.value.trim(), login:lg.value.trim().toLowerCase(), password:pw.value, name:nm.value.trim() }).then(function(j){ var y = SRV.get(); y.token = j.token; y.user = j.user; y.company = j.company; SRV.set(y); remoteMode(); var mine = S.crew.filter(function(c){ return c.acc && c.acc.role === 'owner'; })[0]; firstSync(); }, function(e){ out.innerHTML = '<div class="hint r">' + esc(e.message) + '</div>'; }); })])])); }
  kids.push(out); w.appendChild(card('Сервер Домилии', kids)); }
/* --- входы сотрудников на сервер (в «Доступах») --- */
function srvUsersCard(w){ if (!SRV.on()) return; var box = h('div'), u = SRV.get().user || {};
  w.appendChild(card('Входы на сервер (логин и пароль)', [h('small', { class:'muted', text:'Каждому сотруднику — свой логин. Роль определяет, что он видит. Пароль сообщите лично; сменить его можно здесь же.' }), box]));
  SRV.req('GET', '/users').then(function(L){ box.innerHTML = '';
    box.appendChild(table(['Логин', 'Сотрудник', 'Роль', 'Вход', 'Последний вход', ''], L.map(function(x){ var c = x.crew_id && byId(S.crew, x.crew_id); return [x.login, c ? c.name : x.name, AROLES.filter(function(r){ return r[0] === x.role; }).map(function(r){ return r[1]; })[0] || x.role, x.active ? 'включён' : 'выключен', x.last_login ? new Date(x.last_login).toLocaleString('ru-RU') : '—',
      x.id === u.id ? h('span', { class:'muted', text:'это вы' }) : h('div', { class:'row' }, [btn('', 'Сменить пароль', 'lt xs', function(){ var p = prompt('Новый пароль для ' + x.login + ' (от 8 символов)'); if (p) SRV.req('PATCH', '/users/' + x.id, { password:p }).then(function(){ toast('Пароль изменён'); }, function(e){ toast(e.message); }); }), btn('', x.active ? 'Выключить' : 'Включить', 'lt xs', function(){ SRV.req('PATCH', '/users/' + x.id, { active:!x.active }).then(function(){ go('access'); }, function(e){ toast(e.message); }); })])]; })));
    var f = { crew:'', login:'', pass:'', role:'manager' };
    var crewSel = sel(f, 'crew', [['', '— выберите сотрудника —']].concat(S.crew.filter(function(c){ return !c.to && !L.some(function(x){ return x.crew_id === c.id; }); }).map(function(c){ return [c.id, c.name + (c.role ? ' · ' + c.role : '')]; })));
    box.appendChild(h('h4', { text:'Новый вход' }));
    box.appendChild(h('div', { class:'grid4' }, [field('Сотрудник', crewSel), field('Логин (латиницей)', inp(f, 'login', 'text', null, { placeholder:'olga' })), field('Пароль', inp(f, 'pass', 'text', null, { placeholder:'от 8 символов' })), field('Роль', sel(f, 'role', AROLES.filter(function(r){ return r[0] !== 'owner' && (u.role === 'owner' || r[0] !== 'admin'); })))]));
    box.appendChild(btn('plus', 'Создать вход', '', function(){ var c = byId(S.crew, f.crew); if (!c) return toast('Выберите сотрудника'); SRV.req('POST', '/users', { login:f.login.trim().toLowerCase(), password:f.pass, role:f.role, crew_id:c.id, name:c.name }).then(function(){ c.acc = c.acc || {}; c.acc.role = f.role; save(); toast('Вход создан. Передайте сотруднику: адрес app.domilia.ru, логин ' + f.login + ' и пароль.'); go('access'); }, function(e){ toast(e.message); }); }));
  }, function(e){ box.innerHTML = '<div class="hint r">' + esc(e.message) + '</div>'; }); }
var vAccess0 = V.access; V.access = function(w){ vAccess0(w); srvUsersCard(w); };
var vCompany0 = V.company; V.company = function(w){ vCompany0(w); var first = $('#view .card'); var tmp = h('div'); srvCard(tmp); $('#view').insertBefore(tmp.firstChild, first); };
remoteMode();
var go1 = go; go = function(v, a){ var s = SRV.get(), hsh = location.hash || ''; if (/^#(signup|login)/.test(hsh) && !s.token && !$('.login2')){ var mm = hsh.match(/^#signup:?(\w*)/); history.replaceState(null, '', location.pathname); authScreen(mm ? 'signup' : 'login', mm && mm[1]); return; } if (!s.token && !(s.off && S.objs.length + S.deals.length + S.clients.length) && !$('.login2') && !/^#join:/.test(hsh)){ authScreen('login'); return; } return go1(v, a); };
setTimeout(function(){ if (SRV.on()){ syncMark(); syncNow(); } }, 1500);

/* ================= ГЛАВНАЯ «СЕГОДНЯ», МОЙ ПРОФИЛЬ, ПРИМЕРЫ (по образцу «Подряда») ================= */
function uiGet(){ try { return JSON.parse(localStorage.getItem('dproUI') || '{}'); } catch(e){ return {}; } }
function uiSet(k, v){ var u = uiGet(); u[k] = v; localStorage.setItem('dproUI', JSON.stringify(u)); }
function agoT(iso){ var m = Math.round((Date.now() - new Date(iso).getTime()) / 60000); return m < 1 ? 'только что' : m < 60 ? m + ' мин назад' : m < 1440 ? Math.round(m / 60) + ' ч назад' : fdate(iso); }
var vHome0 = V.home;
V.home = function(w){
  var m = me(), boss = m.role === 'owner' || m.role === 'admin', mineOnly = !boss || uiGet().mine;
  var hr = new Date().getHours(), greet = hr < 5 ? 'Доброй ночи' : hr < 12 ? 'Доброе утро' : hr < 18 ? 'Добрый день' : 'Добрый вечер';
  var nm = ((m.c && m.c.name) || (SRV.on() && (SRV.get().user || {}).name) || '').split(/\s+/)[0];
  var keepO = S.objs, keepD = S.deals;
  if (mineOnly && m.id){ S.objs = keepO.filter(mine); S.deals = keepD.filter(function(d){ return d.mgr === m.id || !d.mgr || (d.oid && mine(byId(keepO, d.oid) || {})); }); }
  try {
    var waitN = S.deals.filter(function(d){ return d.stage === 'Новая'; }).length;
    var wd = new Date().toLocaleDateString('ru-RU', { weekday:'long', day:'numeric', month:'long' });
    w.appendChild(h('div', { class:'hello' }, [h('div', {}, [h('h2', { text:greet + (nm ? ', ' + nm : '') }), h('div', { class:'muted', text:wd.charAt(0).toUpperCase() + wd.slice(1) + ' · ' + (waitN ? 'ждут ответа: ' + waitN : 'все клиенты получили ответ') })]), h('span', { class:'sp' }),
      boss && m.id ? h('div', { class:'seg' }, [h('button', { class:mineOnly ? '' : 'on', text:'Вся компания', onclick:function(){ uiSet('mine', 0); go('home'); } }), h('button', { class:mineOnly ? 'on' : '', text:'Только мои', onclick:function(){ uiSet('mine', 1); go('home'); } })]) : null]));
    var td = today(), wk = new Date(Date.now() - 6 * 864e5).toISOString().slice(0, 10), mo = td.slice(0, 7);
    var views = S.objs.filter(function(o){ return o.cab && o.cab.lastView && o.cab.lastView.slice(0, 10) >= wk; }).length;
    var contracts = S.deals.filter(function(d){ return d.stage === 'Договор' && (d.stAt || d.at || '').slice(0, 7) === mo; }).length + S.objs.filter(function(o){ return o.approved && (o.approved.at || '').slice(0, 7) === mo && !S.deals.some(function(d){ return d.oid === o.id && d.stage === 'Договор'; }); }).length;
    w.appendChild(h('div', { class:'grid4' }, [kpi(String(S.deals.filter(function(d){ return (d.at || '') === td; }).length), 'заявок сегодня', S.deals.some(function(d){ return d.at === td; }) ? 'g' : ''), kpi(String(S.deals.filter(function(d){ return (d.at || '') >= wk; }).length), 'заявок за 7 дней'), kpi(String(views), 'открыли свой кабинет за неделю'), kpi(String(contracts), 'договоров в этом месяце')]));
    /* горячие: клиент только что открыл свой кабинет */
    var hot = S.objs.filter(function(o){ return o.cab && o.cab.lastView && Date.now() - new Date(o.cab.lastView).getTime() < 48 * 3600e3 && o.status !== 'Отказ'; }).sort(function(a, b){ return a.cab.lastView < b.cab.lastView ? 1 : -1; });
    if (hot.length) w.appendChild(card(h('h3', {}, [ic('eye'), 'Сейчас смотрят свой кабинет', h('span', { class:'badge r', text:hot.length })]), [h('small', { class:'muted', text:'Клиент только что открыл смету — лучшее время позвонить.' })].concat(hot.slice(0, 8).map(function(o){ var c = client(o.cid);
      return h('div', { class:'dline' }, [h('div', { class:'grow' }, [h('b', { text:c.name + ' · №' + o.num }), h('small', { class:'muted', text:'открыл ' + agoT(o.cab.lastView) + (o.cab.views > 1 ? ' · всего ' + o.cab.views + ' раз' : '') + ' · ' + o.status })]),
        c.phone ? h('a', { class:'btn lt xs', href:'tel:' + c.phone.replace(/[^\d+]/g, '') }, [ic('phone'), 'Позвонить']) : null, btn('chat', '', 'lt xs', function(){ go('obj', o.id + '|chat'); }), btn('', 'Открыть', 'lt xs', function(){ go('obj', o.id); })]); }))));
  } finally { S.objs = keepO; S.deals = keepD; }
  if (mineOnly && m.id){ S.objs = keepO.filter(mine); S.deals = keepD.filter(function(d){ return d.mgr === m.id || !d.mgr || (d.oid && mine(byId(keepO, d.oid) || {})); }); }
  try { vHome0(w); } finally { S.objs = keepO; S.deals = keepD; }
  /* пустой кабинет — примеры */
  if (!S.objs.length && !S.deals.length) w.insertBefore(card('Приложение пока пустое', [h('p', { class:'muted', text:'Чтобы сразу увидеть, как всё работает, добавьте примеры: клиентов в разных стадиях, сметы с работами, объект в работе с оплатами и сотрудников. Потом удалите их одной кнопкой.' }), h('div', { class:'row' }, [btn('plus', 'Заполнить примерами', '', demoSeed), btn('', 'Начать с нуля — новая заявка', 'lt', function(){ newDeal(); })])], 'hi'), w.children[2] || null);
  if (S.objs.some(function(o){ return o.demo; }) && (m.role === 'owner' || m.role === 'admin')) w.appendChild(h('div', { class:'row' }, [h('span', { class:'sp' }), btn('trash', 'Удалить примеры', 'lt xs', demoClear)]));
};
/* ---------- примеры ---------- */
function demoSeed(){
  var W = function(re){ return S.cat.works.filter(function(x){ return re.test(x.name); })[0]; }, L = function(re, done){ var x = W(re); if (!x) return null; var l = lineFrom(x); l.done = !!done; return l; };
  var crew = [{ id:uid(), name:'Ольга Смирнова', role:'Менеджер', phone:'+7 900 100-00-01', about:'5 лет веду ремонты под ключ. На связи с 9 до 21.', from:today(), demo:1 }, { id:uid(), name:'Сергей Иванов', role:'Прораб', phone:'+7 900 100-00-02', about:'Прораб с 12-летним стажем, сам принимаю каждый этап.', from:today(), demo:1 }, { id:uid(), name:'Бригада Рустама', role:'Мастер-универсал', phone:'+7 900 100-00-03', from:today(), demo:1 }];
  crew.forEach(function(c){ S.crew.push(c); });
  var names = [['Ирина Ковалёва', 'ул. Малышева, 51', 'Новая', 'Директ', 'капитальный', 54], ['Алексей Петров', 'ЖК Clever, 2-к', 'Замер', 'Авито', 'новостройка', 61], ['Марина Сергеева', 'ул. Ленина, 24', 'КП отправлено', 'Сайт', 'ванная', 6], ['Дмитрий Орлов', 'пр. Космонавтов, 18', 'Думает', 'ВК', 'капитальный', 78], ['Наталья Белова', 'ул. Репина, 105', 'Договор', 'Рекомендация', 'капитальный', 47]];
  names.forEach(function(n, i){ var c = { id:uid(), name:n[0], phone:'+7 912 000-0' + (10 + i), addr:n[1], ch:'max', demo:1 }; S.clients.push(c);
    var d = { id:uid(), cid:c.id, stage:n[2], src:n[3], camp:'', sum:'', what:n[4], area:n[5], next:today(), todo:'Перезвонить', notes:'', at:new Date(Date.now() - i * 864e5).toISOString().slice(0, 10), ts:Date.now() - (i * 864e5 + 7 * 60000), mgr:crew[0].id, maxSt:0, tasks:[], demo:1 };
    if (i === 1) d.measure = new Date(Date.now() + 864e5).toISOString().slice(0, 10) + 'T11:00';
    if (i >= 2){ var o = newObj(d, true); o.demo = 1; d.oid = o.id; o.manager = crew[0].id; o.prorab = crew[1].id; o.name = n[1];
      o.rooms = [{ id:uid(), name:'Санузел', l:2.2, w:1.7, h:2.7 }, { id:uid(), name:'Кухня', l:4, w:3.2, h:2.7 }, { id:uid(), name:'Комната', l:5, w:3.6, h:2.7 }];
      o.rooms[0].lines = [L(/гидроизол/i, i === 4), L(/плитк.*пол|укладка плитки/i, i === 4), L(/плитк.*стен|облицов/i)].filter(Boolean);
      o.rooms[1].lines = [L(/шпакл/i, i === 4), L(/покраск/i), L(/ламинат/i)].filter(Boolean);
      o.rooms[2].lines = [L(/шпакл/i, i === 4), L(/обо/i), L(/ламинат/i), L(/плинтус/i)].filter(Boolean);
      o.rooms.forEach(function(r){ (r.lines || []).forEach(function(l){ l.who = crew[2].id; }); });
      if (i === 4){ o.status = 'В работе'; o.start = new Date(Date.now() - 20 * 864e5).toISOString().slice(0, 10); o.end = new Date(Date.now() + 40 * 864e5).toISOString().slice(0, 10); o.approved = { at:o.start, by:'на бумаге', total:Math.round(objCalc(o).total), code:'' }; o.stages[0].done = o.stages[0].paid = true; o.pays.push({ id:uid(), d:o.start, kind:'in', cat:'Аванс', sum:Math.round(objCalc(o).total * 0.3), note:'' }); }
      if (i === 2 || i === 3) o.status = 'Отправлена'; }
    S.deals.push(d); });
  logA('Добавлены примеры'); save(); renderNav(); go('home'); toast('Примеры добавлены — откройте «Заявки» и «Объекты»'); }
function demoClear(){ if (!confirm('Удалить все примеры (клиентов, заявки, объекты и сотрудников с пометкой «пример»)?')) return; ['clients', 'deals', 'objs', 'crew'].forEach(function(k){ S[k] = S[k].filter(function(x){ return !x.demo; }); }); save(); go('home'); toast('Примеры удалены'); }
/* ---------- МОЙ ПРОФИЛЬ ---------- */
V.profile = function(w){
  var m = me(), c = m.id && byId(S.crew, m.id); title('Мой профиль');
  if (!c){ w.appendChild(card('Мой профиль', [h('p', { class:'muted', text:'Создайте свою карточку сотрудника — фото и пара слов о себе покажутся клиентам в их кабинете, а вас можно будет назначать менеджером на объекты.' }), btn('plus', 'Создать мою карточку', '', function(){ var nm = prompt('Ваше имя и фамилия', (SRV.on() && (SRV.get().user || {}).name) || ''); if (!nm) return; var x = { id:uid(), name:nm, role:m.role === 'owner' || m.solo ? 'Руководитель' : 'Менеджер', from:today(), acc:{ role:m.role === 'none' ? 'owner' : m.role } }; S.crew.push(x); save();
      if (SRV.on()){ var u = SRV.get().user; SRV.req('PATCH', '/users/' + u.id, { crew_id:x.id, name:nm }).then(function(){ var s = SRV.get(); s.user.crew_id = x.id; s.user.name = nm; SRV.set(s); renderNav(); go('profile'); }, function(e){ toast(e.message); }); } else { if (m.solo || m.role === 'owner') localStorage.setItem('dproMe', x.id); renderNav(); go('profile'); } })])); return; }
  var fi = h('input', { type:'file', accept:'image/*', style:'display:none' }); fi.onchange = function(){ if (fi.files[0]) shrink(fi.files[0], 320, 0.82).then(function(u){ c.photo = u; save(); go('profile'); }); };
  w.appendChild(h('div', { class:'hint b', text:'Эти данные клиент видит в своём кабинете: фото и пара слов о себе сильно повышают доверие.' }));
  w.appendChild(card(null, [h('div', { class:'pers' }, [h('div', { class:'avaw', onclick:function(){ fi.click(); } }, [avatar(c, true), fi, h('small', { class:'muted c', text:'нажмите, чтобы сменить фото' })]), h('div', { class:'grow' }, [
    h('div', { class:'grid2' }, [field('Имя и фамилия', inp(c, 'name')), field('Должность', inp(c, 'role'))]),
    h('div', { class:'grid3' }, [field('Рабочий телефон', inp(c, 'phone', 'tel')), field('Почта', inp(c, 'email', 'email')), field('MAX — ссылка на профиль', inp(c, 'max', 'url', null, { placeholder:'https://max.ru/u/…' }))]),
    field('Пара слов о себе (видит клиент)', area(c, 'about', '8 лет в ремонте, сам был прорабом. Отвечаю за ваш объект от замера до сдачи.'))])])]));
  if (SRV.on()){ var o1 = h('input', { type:'password', autocomplete:'current-password' }), n1 = h('input', { type:'password', autocomplete:'new-password', placeholder:'от 8 символов' });
    w.appendChild(card('Пароль для входа', [h('div', { class:'grid2' }, [field('Текущий пароль', o1), field('Новый пароль', n1)]), btn('lock', 'Сменить пароль', 'lt', function(){ SRV.req('POST', '/me/password', { old:o1.value, password:n1.value }).then(function(j){ var s = SRV.get(); s.token = j.token; SRV.set(s); o1.value = n1.value = ''; toast('Пароль изменён'); }, function(e){ toast(e.message); }); })])); }
  var M = crewStats(), st = M[c.id] || { objs:{} }, act = Object.keys(st.objs).map(function(k){ return st.objs[k]; }).filter(function(o){ return o && o.status === 'В работе'; });
  w.appendChild(card('Мои объекты в работе', [act.length ? h('div', {}, act.map(function(o){ return h('button', { class:'orow', onclick:function(){ go('obj', o.id); } }, [h('div', {}, [h('b', { text:'№' + o.num + ' ' + o.name }), h('small', { text:client(o.cid).name })])]); })) : empty('Сейчас нет объектов в работе.')]));
};
NAV[0][1].push(['profile', 'user', 'Мой профиль']);

/* ================= ИЗ ПРАГМА ПРО: дела и календарь, деньги на главной, структура компании, приглашения, «Мои работы» ================= */
S.tasks = S.tasks || []; S.depts = S.depts || []; S.mreq = S.mreq || [];
if (S.positions && S.positions.length) ROLES = S.positions;
var TT = [['call', 'phone', 'Позвонить'], ['message', 'chat', 'Написать'], ['measure', 'ruler', 'Замер'], ['meeting', 'users', 'Встреча'], ['send_estimate', 'pdf', 'Отправить смету'], ['sign_contract', 'sign', 'Подписать договор'], ['payment', 'coin', 'Оплата'], ['purchase', 'cart', 'Закупка'], ['acceptance', 'check', 'Приёмка этапа'], ['warranty_visit', 'hard', 'Гарантийный выезд'], ['other', 'dots', 'Другое']];
function ttOf(k){ return TT.filter(function(t){ return t[0] === k; })[0] || TT[TT.length - 1]; }
/* все дела: свои дела + задачи по заявкам + замеры + плановые этапы */
function allTasks(){ var L = [];
  S.tasks.forEach(function(t){ L.push({ id:t.id, ref:t, due:t.due, time:t.time || '', type:t.type, title:(t.note || ttOf(t.type)[2]), who:t.who, oid:t.oid, did:t.did, done:t.done }); });
  S.deals.forEach(function(d){ (d.tasks || []).forEach(function(t){ L.push({ id:t.id, dref:[d, t], due:t.due, time:'', type:'call', title:t.title + ' — ' + client(d.cid).name, who:d.mgr, did:d.id, done:t.done }); });
    if (d.measure && d.stage !== 'Отказ') L.push({ id:'m' + d.id, due:d.measure.slice(0, 10), time:d.measure.slice(11, 16), type:'measure', title:'Замер — ' + client(d.cid).name + (client(d.cid).addr ? ', ' + client(d.cid).addr : ''), who:d.mgr, did:d.id, done:d.measure < today(), ro:1 }); });
  S.objs.forEach(function(o){ if (o.status !== 'В работе') return; (o.stages || []).forEach(function(st){ if (st.plan && !st.done) L.push({ id:'s' + st.id, due:st.plan, time:'', type:'acceptance', title:'Этап «' + st.name + '» — №' + o.num + ' ' + o.name, who:o.prorab, oid:o.id, done:false, ro:1 }); }); });
  return L.sort(function(a, b){ return (a.due + a.time) < (b.due + b.time) ? -1 : 1; }); }
function taskDone(x, v){ if (x.ref){ x.ref.done = v; if (v) x.ref.doneAt = new Date().toISOString(); } else if (x.dref){ x.dref[1].done = v; } save(); }
function taskDlg(pre, after){ var t = Object.assign({ id:uid(), type:'call', note:'', due:today(), time:'', who:me().id || '', oid:'', did:'', done:false, at:new Date().toISOString(), by:me().id || '' }, pre || {}), isNew = !S.tasks.some(function(x){ return x.id === t.id; });
  var box = dlg(isNew ? 'Новое дело' : 'Дело', [h('div', { class:'chs' }, TT.map(function(x){ var b = h('button', { class:'chip sm' + (t.type === x[0] ? ' on' : ''), onclick:function(){ t.type = x[0]; $$('.dlg .chs .chip').forEach(function(y){ y.classList.remove('on'); }); b.classList.add('on'); } }, [ic(x[1]), x[2]]); return b; })),
    field('Что сделать', area(t, 'note', 'Например: перезвонить по смете, уточнить плитку')), h('div', { class:'grid3' }, [field('Дата', inp(t, 'due', 'date')), field('Время', inp(t, 'time', 'time')), field('Ответственный', sel(t, 'who', [['', 'Без ответственного']].concat(S.crew.filter(function(c){ return !c.to; }).map(function(c){ return [c.id, c.name]; }))))]),
    field('Объект', sel(t, 'oid', [['', '—']].concat(S.objs.filter(function(o){ return o.status !== 'Отказ'; }).map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; })))),
    h('div', { class:'row' }, [isNew ? null : h('button', { class:'btn red', text:'Удалить', onclick:function(){ S.tasks.splice(S.tasks.indexOf(t), 1); save(); box.remove(); if (after) after(); } }), h('span', { class:'sp' }), btn('check', 'Сохранить', '', function(){ if (isNew) S.tasks.push(t); logA('Дело: ' + ttOf(t.type)[2] + (t.note ? ' — ' + t.note : '')); save(); box.remove(); if (after) after(); })])]); }
function taskRow(x, after){ var late = !x.done && x.due < today(), c = x.who && byId(S.crew, x.who), o = x.oid && byId(S.objs, x.oid), d = x.did && byId(S.deals, x.did);
  var ck = h('input', { type:'checkbox', disabled:!!x.ro }); ck.checked = !!x.done; ck.onchange = function(){ taskDone(x, ck.checked); if (after) after(); };
  return h('div', { class:'task' + (x.done ? ' done' : '') + (late ? ' late' : '') }, [ck, h('span', { class:'te' }, [ic(ttOf(x.type)[1])]), h('div', { class:'grow', onclick:function(){ if (x.ref) taskDlg(x.ref, after); else if (x.did) go('deal', x.did); else if (x.oid) go('obj', x.oid + '|stages'); } }, [h('b', { text:x.title }), h('small', { class:'muted', text:[late ? 'просрочено · ' + fdate(x.due) : (x.due === today() ? 'сегодня' : fdate(x.due)), x.time, c ? c.name : 'без ответственного', o ? '№' + o.num : ''].filter(Boolean).join(' · ') })])]); }
/* ---------- КАЛЕНДАРЬ ---------- */
V.cal = function(w, a){ title('Календарь');
  var m = me(), u = uiGet(), mineOnly = u.calMine && m.id, cur = (a || today()).slice(0, 7), sel0 = a && a.length === 10 ? a : today();
  $('#barR').appendChild(btn('plus', 'Дело', '', function(){ taskDlg({ due:sel0 }, function(){ go('cal', sel0); }); }));
  var L = allTasks().filter(function(x){ return !mineOnly || x.who === m.id; }), byDay = {}; L.forEach(function(x){ (byDay[x.due] = byDay[x.due] || []).push(x); });
  var d0 = new Date(cur + '-01T00:00:00'), first = (d0.getDay() + 6) % 7, days = new Date(d0.getFullYear(), d0.getMonth() + 1, 0).getDate();
  var nav = h('div', { class:'row' }, [btn('', '←', 'lt xs', function(){ var d = new Date(d0); d.setMonth(d.getMonth() - 1); go('cal', d.toISOString().slice(0, 7)); }), h('h3', { text:d0.toLocaleDateString('ru-RU', { month:'long', year:'numeric' }) }), btn('', '→', 'lt xs', function(){ var d = new Date(d0); d.setMonth(d.getMonth() + 1); go('cal', d.toISOString().slice(0, 7)); }), btn('', 'Сегодня', 'lt xs', function(){ go('cal', today()); }), h('span', { class:'sp' }),
    m.id ? h('div', { class:'seg' }, [h('button', { class:mineOnly ? '' : 'on', text:'Все сотрудники', onclick:function(){ uiSet('calMine', 0); go('cal', sel0); } }), h('button', { class:mineOnly ? 'on' : '', text:'Только мои', onclick:function(){ uiSet('calMine', 1); go('cal', sel0); } })]) : null]);
  var g = h('div', { class:'calg' }); ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(function(x){ g.appendChild(h('div', { class:'cdh', text:x })); });
  for (var i = 0; i < first; i++) g.appendChild(h('div', { class:'cd e' }));
  for (var dd = 1; dd <= days; dd++){ (function(dd){ var ds = cur + '-' + ('0' + dd).slice(-2), X = byDay[ds] || [], open = X.filter(function(x){ return !x.done; });
    g.appendChild(h('button', { class:'cd' + (ds === today() ? ' td' : '') + (ds === sel0 ? ' on' : '') + (open.some(function(x){ return ds < today(); }) ? ' late' : ''), onclick:function(){ go('cal', ds); } }, [h('b', { text:String(dd) })].concat(open.slice(0, 3).map(function(x){ return h('span', { class:'cev', text:x.title }); })).concat(open.length > 3 ? [h('small', { text:'ещё ' + (open.length - 3) })] : []))); })(dd); }
  w.appendChild(card(null, [nav, g]));
  var X = byDay[sel0] || [], list = h('div');
  function drawList(){ list.innerHTML = ''; if (!X.length) list.appendChild(empty('Дел на этот день нет.')); X.forEach(function(x){ list.appendChild(taskRow(x, function(){ go('cal', sel0); })); }); }
  drawList();
  w.appendChild(card(h('div', { class:'row' }, [h('h3', { text:new Date(sel0).toLocaleDateString('ru-RU', { weekday:'long', day:'numeric', month:'long' }) }), h('span', { class:'sp' }), btn('plus', 'Добавить дело на этот день', 'lt xs', function(){ taskDlg({ due:sel0 }, function(){ go('cal', sel0); }); })]), [list]));
};
/* ---------- ГЛАВНАЯ: деньги и дела, как в ПРАГМА Про ---------- */
var vHome1 = V.home;
V.home = function(w){ vHome1(w); var m = me(), boss = m.role === 'owner' || m.role === 'admin';
  var grids = w.querySelectorAll('.grid4'); if (grids[1] && can('money')){ var bal = 0, mIn = 0, mOut = 0, debt = 0, mo = today().slice(0, 7);
    S.objs.forEach(function(o){ (o.pays || []).forEach(function(p){ var v = +p.sum || 0, sg = p.kind === 'in' ? 1 : -1; bal += sg * v; if ((p.d || '').slice(0, 7) === mo){ if (sg > 0) mIn += v; else mOut += v; } }); if (['В работе', 'Сдан', 'Утверждена'].indexOf(o.status) > -1) debt += Math.max(0, objCalc(o).debt); });
    S.gexp.forEach(function(p){ var v = +p.sum || 0, sg = p.kind === 'in' ? 1 : -1; bal += sg * v; if ((p.d || '').slice(0, 7) === mo){ if (sg > 0) mIn += v; else mOut += v; } });
    var M = crewStats(), owe = 0; Object.keys(M).forEach(function(k){ owe += Math.max(0, M[k].all - M[k].allPaid); });
    var sales = S.deals.filter(function(d){ return ['Отказ', 'Договор'].indexOf(d.stage) < 0; }), prep = S.objs.filter(function(o){ return o.status === 'Утверждена'; }).length, work = S.objs.filter(function(o){ return o.status === 'В работе'; }).length, hand = S.objs.filter(function(o){ return o.status === 'В работе' && (o.stages || []).length && (o.stages || []).filter(function(s){ return !s.done; }).length === 1; }).length;
    var mg = h('div', { class:'grid4' }, [kpi(rub(bal), 'деньги сейчас', bal >= 0 ? 'g' : 'r'), kpi(rub(mIn - mOut), 'денежная прибыль за месяц: приход ' + rub(mIn) + ' − расход ' + rub(mOut), mIn - mOut >= 0 ? 'g' : 'r'), kpi(rub(debt), 'должны заказчики', debt ? 'y' : ''), kpi(rub(owe), 'должны мастерам и сотрудникам', owe ? 'y' : '')]);
    var mg2 = h('div', { class:'grid4' }, [kpi(sales.length + ' · ' + rub(sales.reduce(function(a, d){ return a + (+d.sum || 0); }, 0)), 'сделки в продажах'), kpi(String(prep + work), 'объекты: подготовка ' + prep + ' · работы ' + work + ' · сдача ' + hand)]);
    grids[1].replaceWith(mg); mg.after(mg2); }
  var L = allTasks().filter(function(x){ return !x.done && x.due <= today(); }), my = L.filter(function(x){ return x.who === m.id || (!x.who && !m.id); }), late = L.filter(function(x){ return x.due < today(); });
  var tasksCard = card(h('div', { class:'row' }, [h('h3', { text:'Мои дела' }), h('span', { class:'badge', text:my.length }), h('span', { class:'sp' }), btn('cal', 'Календарь', 'lt xs', function(){ go('cal'); }), btn('plus', 'Дело', 'lt xs', function(){ taskDlg(null, function(){ go('home'); }); })]), my.length ? my.slice(0, 10).map(function(x){ return taskRow(x, function(){ go('home'); }); }) : [empty('На сегодня всё сделано.')], 'mytasks');
  var anchor = w.querySelector('.today'); if (anchor) anchor.before(tasksCard); else w.appendChild(tasksCard);
  if (boss && late.length) tasksCard.after(card(h('div', { class:'row' }, [h('h3', { text:'Просроченные дела по всей компании' }), h('span', { class:'badge r', text:late.length })]), late.slice(0, 10).map(function(x){ return taskRow(x, function(){ go('home'); }); })));
  var mr = S.mreq.filter(function(r){ return r.st !== 'done'; }); if (mr.length && (boss || can('stock'))) tasksCard.after(card(h('div', { class:'row' }, [h('h3', {}, [ic('cart'), 'Заявки на материалы']), h('span', { class:'badge y', text:mr.length })]), mr.map(function(r){ var o = byId(S.objs, r.oid), c = byId(S.crew, r.who); return h('div', { class:'dline' }, [h('div', { class:'grow' }, [h('b', { text:r.text }), h('small', { class:'muted', text:[o ? '№' + o.num + ' ' + o.name : '', c ? c.name : '', r.need ? 'нужно к ' + fdate(r.need) : ''].filter(Boolean).join(' · ') })]), btn('check', 'Закуплено', 'lt xs', function(){ r.st = 'done'; r.doneAt = today(); save(); go('home'); })]); })));
};
/* ---------- МОИ РАБОТЫ (для мастера и прораба) ---------- */
V.myworks = function(w){ title('Мои работы'); var m = me(); if (!m.id){ w.appendChild(card(null, [empty('Создайте свою карточку в «Мой профиль», чтобы видеть свои работы.')])); return; }
  var M = crewStats()[m.id] || { all:0, allPaid:0 }, mine = [], wait = [], ok = [];
  S.objs.forEach(function(o){ (o.rooms || []).forEach(function(r){ (r.lines || []).forEach(function(l){ if (l.who !== m.id) return; var x = { o:o, r:r, l:l }; if (l.done) ok.push(x); else if (l.sub) wait.push(x); else if (o.status === 'В работе') mine.push(x); }); }); });
  w.appendChild(h('div', { class:'hint b', text:'Задания, сдача работ с фото и ваши деньги. Сдали работу — руководитель проверит и утвердит, после этого она попадёт в начисления.' }));
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(Math.max(0, M.all - M.allPaid)), 'к выплате', 'g'), kpi(rub(M.all), 'начислено'), kpi(rub(M.allPaid), 'выплачено и авансы'), kpi(String(mine.length), 'работ в работе сейчас')]));
  function row(x, act){ var q = qty(x.l, x.r); return h('div', { class:'dline' }, [h('div', { class:'grow' }, [h('b', { text:x.l.name }), h('small', { class:'muted', text:'№' + x.o.num + ' ' + x.o.name + ' · ' + x.r.name + ' · ' + num(q) + ' ' + x.l.unit + (can('cost') || true ? ' · ' + rub(lineLabor(x.l, q, x.o)) : '') })]), act]); }
  w.appendChild(card('В работе сейчас · ' + mine.length, mine.length ? mine.map(function(x){ return row(x, btn('cam', 'Сдать работу', '', function(){ submitWork(x); })); }) : [empty('Сейчас нет назначенных работ.')]));
  if (wait.length) w.appendChild(card('На утверждении у руководителя · ' + wait.length, wait.map(function(x){ return row(x, h('span', { class:'pill y', text:'сдано ' + fdate(x.l.sub.at) })); })));
  if (ok.length) w.appendChild(card('Принятые работы · ' + ok.length, ok.slice(0, 30).map(function(x){ return row(x, h('span', { class:'pill g', text:'принято' + (x.l.doneAt ? ' ' + fdate(x.l.doneAt) : '') })); })));
  var f = { oid:(mine[0] || {}).o ? mine[0].o.id : '', text:'', need:today() };
  w.appendChild(card('Нужны материалы?', [h('small', { class:'muted', text:'Отправьте заявку снабжению: что закончилось и сколько нужно.' }), h('div', { class:'grid3' }, [field('Объект', sel(f, 'oid', [['', 'Выберите объект']].concat(S.objs.filter(function(o){ return o.status === 'В работе'; }).map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; })))), field('Что нужно', inp(f, 'text', 'text', null, { placeholder:'клей плиточный, 5 мешков' })), field('Нужно к', inp(f, 'need', 'date'))]),
    btn('send', 'Отправить снабжению', '', function(){ if (!f.oid || !f.text.trim()) return toast('Выберите объект и напишите, что нужно'); S.mreq.unshift({ id:uid(), oid:f.oid, text:f.text.trim(), need:f.need, who:m.id, at:today(), st:'new' }); save(); toast('Заявка отправлена'); go('myworks'); })].concat(S.mreq.filter(function(r){ return r.who === m.id; }).slice(0, 5).map(function(r){ return h('small', { class:'muted', text:fdate(r.at) + ' · ' + r.text + ' — ' + (r.st === 'done' ? 'закуплено' : 'ждёт') }); }))));
};
function submitWork(x){ var fi = h('input', { type:'file', accept:'image/*', multiple:true }), note = { t:'' };
  var box = dlg('Сдать работу: ' + x.l.name, [h('small', { class:'muted', text:'№' + x.o.num + ' ' + x.o.name + ' · ' + x.r.name }), fieldD('Фото результата', fi), field('Комментарий', area(note, 't', 'Что сделано, есть ли замечания')), h('div', { class:'row' }, [h('span', { class:'sp' }), btn('check', 'Сдать', '', function(){ var files = Array.prototype.slice.call(fi.files); toast('Подготавливаю фото…'); var ids = [];
    files.reduce(function(p, f){ return p.then(function(){ return Promise.all([shrink(f, 1800, 0.82), shrink(f, 420, 0.7)]).then(function(r){ var ph = { id:uid(), at:new Date().toISOString(), stage:'', note:'Сдача работы: ' + x.l.name, pub:false, who:(me().c || {}).name || '' }; x.o.photos = x.o.photos || []; x.o.photos.unshift(ph); ids.push(ph.id); return idbPut('ph', { id:ph.id, full:r[0], th:r[1] }); }); }); }, Promise.resolve())
      .then(function(){ x.l.sub = { at:new Date().toISOString(), ph:ids, note:note.t, by:me().id }; logA('№' + x.o.num + ': сдана работа «' + x.l.name + '»'); save(); box.remove(); toast('Работа сдана — ждёт утверждения'); go('myworks'); }); })])]); }
/* утверждение сданных работ — для руководителя (на главной и в смете) */
function pendingWorks(){ var L = []; S.objs.forEach(function(o){ (o.rooms || []).forEach(function(r){ (r.lines || []).forEach(function(l){ if (l.sub && !l.done) L.push({ o:o, r:r, l:l }); }); }); }); return L; }
function approveWork(x, ok){ if (ok){ x.l.done = true; x.l.doneAt = today(); (x.l.sub.ph || []).forEach(function(id){ var p = (x.o.photos || []).filter(function(y){ return y.id === id; })[0]; if (p) p.pub = true; }); logA('№' + x.o.num + ': принята работа «' + x.l.name + '»'); } else { x.l.rej = { at:today(), why:prompt('Что переделать?') || '' }; } delete x.l.sub; save(); }
var vHome2 = V.home;
V.home = function(w){ vHome2(w); var m = me(); if (!(m.role === 'owner' || m.role === 'admin' || m.role === 'prorab' || can('smeta'))) return; var P = pendingWorks().filter(function(x){ return m.role !== 'prorab' || x.o.prorab === m.id; }); if (!P.length) return;
  var c = card(h('div', { class:'row' }, [h('h3', {}, [ic('check'), 'Сданные работы — проверить']), h('span', { class:'badge y', text:P.length })]), P.map(function(x){ var who = byId(S.crew, x.l.who); var th = h('div', { class:'row' }); (x.l.sub.ph || []).slice(0, 4).forEach(function(id){ var im = h('img', { class:'thm' }); idbGet('ph', id).then(function(r){ if (r){ im.src = r.th; im.onclick = function(){ viewer(r.full); }; } }); th.appendChild(im); });
    return h('div', { class:'dline' }, [h('div', { class:'grow' }, [h('b', { text:x.l.name }), h('small', { class:'muted', text:'№' + x.o.num + ' ' + x.r.name + ' · ' + (who ? who.name : '') + ' · сдано ' + fdate(x.l.sub.at) + (x.l.sub.note ? ' · «' + x.l.sub.note + '»' : '') }), th]), btn('check', 'Принять', '', function(){ approveWork(x, true); go('home'); }), btn('', 'На доработку', 'lt xs', function(){ approveWork(x, false); go('home'); })]); }));
  var t = w.querySelector('.card.mytasks'); if (t) t.after(c); else w.appendChild(c); };
/* ---------- СТРУКТУРА КОМПАНИИ, ДОЛЖНОСТИ ---------- */
var vCrew0 = V.crew;
V.crew = function(w, a){ var tab = a || 'list';
  var tabs = h('div', { class:'tabs' }, [['list', 'Сотрудники'], ['org', 'Структура'], ['pos', 'Должности']].map(function(t){ return h('button', { class:t[0] === tab ? 'on' : '', text:t[1], onclick:function(){ go('crew', t[0]); } }); }));
  if (tab === 'list'){ vCrew0(w); w.insertBefore(tabs, w.firstChild); return; }
  title('Компания'); w.appendChild(tabs);
  if (tab === 'pos'){ var P = S.positions = S.positions && S.positions.length ? S.positions : ROLES.slice(), t = h('textarea', { rows:'12' }); t.value = P.join('\n');
    w.appendChild(card('Должности', [h('small', { class:'muted', text:'По одной в строке. Используются в карточках сотрудников и автоматическом назначении мастеров по разделам сметы.' }), t, btn('check', 'Сохранить', '', function(){ S.positions = t.value.split('\n').map(function(x){ return x.trim(); }).filter(Boolean); ROLES = S.positions; save(); toast('Сохранено'); })])); return; }
  var people = S.crew.filter(function(c){ return !c.to; });
  function person(c, head){ return h('button', { class:'op' + (head ? ' head' : ''), onclick:function(){ go('person', c.id); } }, [avatar(c), h('div', {}, [h('b', { text:c.name }), h('small', { text:(head ? 'руководитель · ' : '') + (c.role || '') })])]); }
  function node(dp, lvl){ var heads = dp.head && byId(S.crew, dp.head), mem = people.filter(function(c){ return c.dept === dp.id && c.id !== dp.head; }), kids = S.depts.filter(function(x){ return x.parent === dp.id; });
    return h('div', { class:'onode', style:'margin-left:' + (lvl ? 22 : 0) + 'px' }, [h('div', { class:'ohd' }, [h('b', { text:dp.name }), h('small', { class:'muted', text:(mem.length + (heads ? 1 : 0)) + ' чел.' }), h('span', { class:'sp' }), btn('', 'Изменить', 'lt xs', function(){ deptDlg(dp); }), btn('plus', 'Подотдел', 'lt xs', function(){ deptDlg({ parent:dp.id }); })]),
      h('div', { class:'opl' }, (heads ? [person(heads, 1)] : []).concat(mem.map(function(c){ return person(c); }))), h('div', {}, kids.map(function(k){ return node(k, lvl + 1); }))]); }
  w.appendChild(card(h('div', { class:'row' }, [h('h3', { text:S.co.name || 'Компания' }), h('span', { class:'sp' }), btn('plus', 'Отдел', '', function(){ deptDlg({ parent:'' }); })]), [h('small', { class:'muted', text:'Например: Продажи, Производство, Бригада Иванова, Бухгалтерия. Руководитель отдела видит работу своих людей.' })].concat(S.depts.filter(function(x){ return !x.parent; }).map(function(dp){ return node(dp, 0); }))
    .concat([h('div', { class:'onode' }, [h('div', { class:'ohd' }, [h('b', { text:'Без отдела' })]), h('div', { class:'opl' }, people.filter(function(c){ return !c.dept || !byId(S.depts, c.dept); }).map(function(c){ return person(c); }))])])));
};
function deptDlg(dp){ var isNew = !dp.id; dp = isNew ? Object.assign({ id:uid(), name:'', parent:'', head:'' }, dp) : dp;
  var box = dlg(isNew ? 'Новый отдел' : 'Отдел', [field('Название', inp(dp, 'name')), h('div', { class:'grid2' }, [field('Входит в отдел', sel(dp, 'parent', [['', 'Сразу под руководством компании']].concat(S.depts.filter(function(x){ return x.id !== dp.id; }).map(function(x){ return [x.id, x.name]; })))), field('Руководитель отдела', sel(dp, 'head', [['', 'Не назначен']].concat(S.crew.filter(function(c){ return !c.to; }).map(function(c){ return [c.id, c.name]; }))))]),
    h('div', { class:'row' }, [isNew ? null : h('button', { class:'btn red', text:'Удалить отдел', onclick:function(){ S.depts.splice(S.depts.indexOf(dp), 1); S.crew.forEach(function(c){ if (c.dept === dp.id) c.dept = ''; }); S.depts.forEach(function(x){ if (x.parent === dp.id) x.parent = dp.parent; }); save(); box.remove(); go('crew', 'org'); } }), h('span', { class:'sp' }), btn('check', 'Сохранить', '', function(){ if (!dp.name.trim()) return toast('Название?'); if (isNew) S.depts.push(dp); if (dp.head){ var c = byId(S.crew, dp.head); if (c) c.dept = dp.id; } save(); box.remove(); go('crew', 'org'); })])]); }
/* карточка сотрудника: отдел, руководитель, приглашение */
var vPerson0 = V.person;
V.person = function(w, id){ vPerson0(w, id); var c = byId(S.crew, id); if (!c) return; var m = me(), adm = m.role === 'owner' || m.role === 'admin' || can('access');
  var org = card('В структуре компании', [h('div', { class:'grid2' }, [field('Отдел', (function(){ var s = sel(c, 'dept', [['', 'Без отдела']].concat(S.depts.map(function(x){ return [x.id, x.name]; }))); s.disabled = !adm; return s; })()), field('Непосредственный руководитель', (function(){ var s = sel(c, 'boss', [['', 'Не указан']].concat(S.crew.filter(function(x){ return x.id !== c.id && !x.to; }).map(function(x){ return [x.id, x.name]; }))); s.disabled = !adm; return s; })())])]);
  var cards = w.querySelectorAll('.card'); if (cards[1]) cards[1].after(org); else w.appendChild(org);
  if (adm && SRV.on() && c.id !== m.id){ var f = { role:(c.acc && c.acc.role) || 'master' }, out = h('div');
    org.after(card('Пригласить в приложение', [h('small', { class:'muted', text:'Приложение создаст персональную ссылку. Сотрудник откроет её, придумает логин и пароль и сразу попадёт в компанию с нужными правами. Ссылка действует 7 дней и срабатывает один раз.' }), field('Доступ', sel(f, 'role', AROLES.filter(function(r){ return r[0] !== 'owner' && (m.role === 'owner' || r[0] !== 'admin'); }))),
      btn('send', 'Создать приглашение', '', function(){ SRV.req('POST', '/invites', { crew_id:c.id, name:c.name, role:f.role }).then(function(j){ c.acc = c.acc || {}; c.acc.role = f.role; save(); var k = ''; try { var sk = JSON.parse(localStorage.getItem('dprokey') || 'null'); if (sk) k = '&k=' + encodeURIComponent(sk.k); } catch(e){}
        var u = location.origin + location.pathname.replace(/[^\/]*$/, '') + '#join:' + j.token + k + (SRV.url() !== API_DEF ? '&s=' + encodeURIComponent(SRV.url()) : ''), txt = 'Здравствуйте, ' + c.name.split(' ')[0] + '! Вас пригласили в приложение ' + S.co.name + '. Откройте ссылку, придумайте логин и пароль: ' + u;
        out.innerHTML = ''; out.appendChild(h('div', { class:'hint g', html:'<b>Приглашение готово.</b> Отправьте ссылку сотруднику любым удобным способом.' + (k ? '' : ' Сообщите ему также пароль от приложения.') })); out.appendChild(h('div', { class:'linkbox' }, [h('input', { type:'text', value:u, readonly:true }), btn('copy', 'Скопировать', '', function(){ copy(txt, 'приглашение'); }), btn('send', 'Отправить в ' + chName(chOf(c)), 'lt', function(){ sendMsg(c, txt); }), c.phone ? h('a', { class:'btn lt', href:'sms:' + c.phone.replace(/[^\d+]/g, '') + '?body=' + encodeURIComponent(txt), text:'СМС' }) : null])); }, function(e){ toast(e.message); }); }), out])); }
};
/* вступление по приглашению */
function joinScreen(tok){ var su = (location.hash.match(/[&]s=([^&]+)/) || [])[1]; if (su){ var s0 = SRV.get(); s0.url = decodeURIComponent(su); SRV.set(s0); } var box = h('div', { class:'login2' }), err = h('div'), L = h('input', { type:'text', autocomplete:'username', placeholder:'например olga' }), P = h('input', { type:'password', autocomplete:'new-password', placeholder:'от 8 символов' });
  box.appendChild(card('Приглашение', [h('p', { class:'muted', text:'Проверяю приглашение…' })])); document.body.appendChild(box);
  SRV.req('GET', '/invites/' + tok).then(function(j){ box.innerHTML = ''; box.appendChild(card('Добро пожаловать в ' + j.company + '!', [h('p', { text:(j.name ? j.name + ', придумайте' : 'Придумайте') + ' логин и пароль — с ними вы будете входить в приложение с телефона и компьютера.' }), field('Логин (латиницей)', L), field('Пароль', P), err,
    btn('check', 'Войти в компанию', '', function(){ SRV.req('POST', '/invites/' + tok, { login:L.value.trim().toLowerCase(), password:P.value }).then(function(r){ var s = SRV.get(); s.url = SRV.url(); s.token = r.token; s.user = r.user; s.company = r.company; delete s.off; SRV.set(s); history.replaceState(null, '', location.pathname); box.remove(); remoteMode(); firstSync(); }, function(e){ err.innerHTML = '<div class="hint r">' + esc(e.message) + '</div>'; }); }), h('small', { class:'muted', text:'Сохраните логин и пароль — на телефоне браузер предложит их запомнить.' })])); },
    function(e){ box.innerHTML = ''; box.appendChild(card('Приглашение', [h('div', { class:'hint r', text:e.message }), btn('', 'Закрыть', 'lt', function(){ box.remove(); history.replaceState(null, '', location.pathname); go('home'); })])); }); }
var go2 = go; go = function(v, a){ var mt = (location.hash || '').match(/^#join:([A-Za-z0-9_-]+)/); if (mt && !$('.login2')){ joinScreen(mt[1]); return; } return go2(v, a); };
/* меню */
NAV[0][1].push(['cal', 'cal', 'Календарь'], ['myworks', 'hard', 'Мои работы']);
VPERM.cal = ''; VPERM.myworks = '';

/* ================= ЗАКУПКИ И СНАБЖЕНИЕ, ГРАФИК РАБОТ (как в ПРАГМА Про) ================= */
S.suppliers = S.suppliers || []; S.orders = S.orders || [];
COLLS.suppliers = 1; COLLS.orders = 1;
var OST2 = { draft:['Черновик', ''], ordered:['Заказано', 'y'], received:['Принято на объекте', 'g'], canceled:['Отменён', 'r'] };
function ordSum(r){ return (r.items || []).reduce(function(a, x){ return a + (+x.q || 0) * (+x.price || 0); }, 0); }
function ordPaid(r){ return (r.pays || []).reduce(function(a, p){ return a + (+p.sum || 0); }, 0); }
function newOrder(pre){ S.set.onum = (S.set.onum || 0) + 1; var r = Object.assign({ id:uid(), num:S.set.onum, oid:'', sup:'', st:'draft', date:today(), deliv:'', addr:'', note:'', items:[], pays:[], photos:[], by:me().id || '' }, pre || {}); if (r.oid && !r.addr){ var o = byId(S.objs, r.oid); if (o) r.addr = o.addr || o.name; } S.orders.unshift(r); logA('Заказ поставщику №' + r.num); save(); return r; }
/* ---------- раздел «Закупки» ---------- */
V.buy = function(w, a){ title('Закупки и снабжение'); var tab = a || 'orders';
  $('#barR').appendChild(btn('plus', 'Заказ поставщику', '', function(){ orderDlg(); }));
  var wait = S.orders.filter(function(r){ return r.st === 'ordered'; }), unpaid = S.orders.filter(function(r){ return r.st !== 'canceled' && r.st !== 'draft'; }).reduce(function(s, r){ return s + Math.max(0, ordSum(r) - ordPaid(r)); }, 0), req = S.mreq.filter(function(r){ return r.st !== 'done' && r.st !== 'rej'; });
  w.appendChild(h('div', { class:'hint b', text:'Материалы по сметам, заказы поставщикам, оплаты и доставка на объекты. Материалы по смете конкретного объекта — Объект → вкладка «Материалы».' }));
  w.appendChild(h('div', { class:'grid4' }, [kpi(wait.length + ' · ' + rub(wait.reduce(function(s, r){ return s + ordSum(r); }, 0)), 'ждём доставку', wait.length ? 'y' : ''), kpi(rub(unpaid), 'не оплачено поставщикам', unpaid ? 'r' : 'g'), kpi(String(req.length), 'новые заявки с объектов', req.length ? 'y' : ''), kpi(String(S.suppliers.length), 'поставщиков')]));
  w.appendChild(h('div', { class:'tabs' }, [['orders', 'Заказы'], ['req', 'Заявки с объектов' + (req.length ? ' · ' + req.length : '')], ['sup', 'Поставщики']].map(function(t){ return h('button', { class:t[0] === tab ? 'on' : '', text:t[1], onclick:function(){ go('buy', t[0]); } }); })));
  if (tab === 'orders'){ if (!S.orders.length){ w.appendChild(card(null, [empty('Заказов нет. Создайте заказ кнопкой вверху или из материалов объекта.')])); return; }
    w.appendChild(card(null, [table(['№', 'Дата', 'Поставщик', 'Объект', 'Сумма', 'Оплачено', 'Статус'], S.orders.map(function(r){ var s = byId(S.suppliers, r.sup), o = byId(S.objs, r.oid), sum = ordSum(r), pd = ordPaid(r);
      return [h('a', { href:'#', text:'№' + r.num, onclick:function(e){ e.preventDefault(); go('order', r.id); } }), fdate(r.date), s ? s.name : '—', o ? '№' + o.num + ' ' + o.name : 'склад/офис', rub(sum), h('span', { class:pd < sum && r.st !== 'draft' && r.st !== 'canceled' ? 'bad' : '', text:rub(pd) }), h('span', { class:'pill ' + OST2[r.st][1], text:OST2[r.st][0] })]; }), [4, 5])])); }
  if (tab === 'req'){ w.appendChild(h('small', { class:'muted', text:'Мастера и прорабы отправляют заявки из «Моих работ». Превратите заявку в заказ поставщику или закройте.' }));
    if (!req.length){ w.appendChild(card(null, [empty('Заявок пока нет.')])); return; }
    w.appendChild(card(null, req.map(function(r){ var o = byId(S.objs, r.oid), c = byId(S.crew, r.who); return h('div', { class:'dline' }, [h('div', { class:'grow' }, [h('b', { text:r.text }), h('small', { class:'muted', text:[o ? '№' + o.num + ' ' + o.name : '', c ? c.name : '', fdate(r.at), r.need ? 'нужно к ' + fdate(r.need) : ''].filter(Boolean).join(' · ') })]),
      btn('cart', 'Создать заказ', '', function(){ var x = newOrder({ oid:r.oid, deliv:r.need || '', note:'По заявке: ' + r.text, items:[{ id:uid(), name:r.text, unit:'шт', q:1, price:0 }] }); r.st = 'done'; r.ord = x.id; save(); go('order', x.id); }), btn('', 'Закрыть', 'lt xs', function(){ r.st = 'done'; save(); go('buy', 'req'); }), btn('', 'Отклонить', 'lt xs', function(){ r.st = 'rej'; save(); go('buy', 'req'); })]); }))); }
  if (tab === 'sup'){ w.appendChild(h('div', { class:'row' }, [h('small', { class:'muted', text:'Магазины, базы, производители. Например: Леруа Мерлен, Петрович, база «Строймаркет».' }), h('span', { class:'sp' }), btn('plus', 'Поставщик', 'lt', function(){ supDlg(); })]));
    w.appendChild(S.suppliers.length ? card(null, [table(['Название', 'Контакт', 'Телефон', 'Заказов', 'Не оплачено', ''], S.suppliers.map(function(s){ var O = S.orders.filter(function(r){ return r.sup === s.id && r.st !== 'canceled'; }); return [s.name, s.person || '', s.phone || '', String(O.length), rub(O.reduce(function(a, r){ return a + (r.st === 'draft' ? 0 : Math.max(0, ordSum(r) - ordPaid(r))); }, 0)), btn('', 'Изменить', 'lt xs', function(){ supDlg(s); })]; }), [3, 4])]) : card(null, [empty('Добавьте поставщиков.')])); }
};
function supDlg(s){ var isNew = !s; s = s || { id:uid(), name:'', inn:'', person:'', phone:'', email:'', addr:'', note:'' };
  var box = dlg(isNew ? 'Новый поставщик' : s.name, [h('div', { class:'grid2' }, [field('Название', inp(s, 'name')), field('ИНН', inp(s, 'inn'))]), h('div', { class:'grid3' }, [field('Контактное лицо', inp(s, 'person')), field('Телефон', inp(s, 'phone', 'tel')), field('Почта', inp(s, 'email', 'email'))]), field('Адрес', inp(s, 'addr')), field('Заметка', area(s, 'note', 'Скидка 7% по карте, доставка бесплатно от 30 000 ₽')),
    h('div', { class:'row' }, [isNew ? null : h('button', { class:'btn red', text:'Удалить', onclick:function(){ S.suppliers.splice(S.suppliers.indexOf(s), 1); save(); box.remove(); go('buy', 'sup'); } }), h('span', { class:'sp' }), btn('check', 'Сохранить', '', function(){ if (!s.name.trim()) return toast('Название?'); if (isNew) S.suppliers.push(s); save(); box.remove(); if (view === 'buy') go('buy', 'sup'); else go(view, arg); })])]); }
function orderDlg(pre){ var f = Object.assign({ oid:'', sup:'' }, pre || {});
  var box = dlg('Новый заказ поставщику', [h('small', { class:'muted', text:'Позиции добавите на следующем шаге. Для материалов из сметы удобнее начать с вкладки «Материалы» объекта.' }), field('Объект', sel(f, 'oid', [['', 'Без объекта (для склада или офиса)']].concat(S.objs.filter(function(o){ return o.status !== 'Отказ'; }).map(function(o){ return [o.id, '№' + o.num + ' ' + o.name]; })))), field('Поставщик', sel(f, 'sup', [['', 'Выберу позже']].concat(S.suppliers.map(function(s){ return [s.id, s.name]; })))),
    h('div', { class:'row' }, [h('span', { class:'sp' }), btn('check', 'Создать', '', function(){ var r = newOrder(f); box.remove(); go('order', r.id); })])]); }
/* ---------- карточка заказа ---------- */
V.order = function(w, id){ var r = byId(S.orders, id); if (!r){ go('buy'); return; } title('Заказ поставщику №' + r.num); var o = byId(S.objs, r.oid), sum = ordSum(r), pd = ordPaid(r), ro = r.st !== 'draft';
  $('#barR').appendChild(btn('', '← Закупки', 'lt', function(){ go('buy'); }));
  var tip = { draft:'Черновик. Проверьте позиции, количество и цены, выберите поставщика. Когда заказали у поставщика — нажмите «Заказано».', ordered:'Заказано у поставщика. Когда материалы приедут на объект — нажмите «Принять на объекте» и сфотографируйте накладную. Оплату отмечайте кнопкой «Оплата»: она сразу попадёт в расходы объекта.', received:pd < sum ? 'Материалы приняты. Не забудьте отметить оплату поставщику.' : 'Заказ закрыт: принят и оплачен.', canceled:'Заказ отменён.' }[r.st];
  w.appendChild(h('div', { class:'hint ' + (r.st === 'received' && pd >= sum ? 'g' : r.st === 'canceled' ? 'r' : 'b'), text:tip }));
  w.appendChild(card(null, [h('div', { class:'grid4' }, [field('Поставщик', h('div', { class:'row nw' }, [sel(r, 'sup', [['', 'Не выбран']].concat(S.suppliers.map(function(s){ return [s.id, s.name]; }))), btn('plus', '', 'lt xs', function(){ supDlg(); })])), field('Объект', sel(r, 'oid', [['', 'Без объекта']].concat(S.objs.map(function(x){ return [x.id, '№' + x.num + ' ' + x.name]; })))), field('Дата доставки', inp(r, 'deliv', 'date')), field('Адрес доставки', inp(r, 'addr'))]), field('Комментарий для поставщика', inp(r, 'note'))]));
  var tb = h('div');
  function drawItems(){ tb.innerHTML = ''; var t = h('table', { class:'t' }); t.appendChild(h('thead', {}, [h('tr', {}, ['Наименование', 'Ед.', 'Кол-во', 'Цена, ₽', 'Сумма, ₽', r.st === 'received' ? 'Принято' : ''].map(function(x, i){ return h('th', { class:i > 1 && i < 5 ? 'n' : '', text:x }); }))]));
    var body = h('tbody'); r.items.forEach(function(x){ var sm = h('td', { class:'n', text:rub((+x.q || 0) * (+x.price || 0)) }), upd = function(){ sm.textContent = rub((+x.q || 0) * (+x.price || 0)); tot.textContent = rub(ordSum(r)); };
      body.appendChild(h('tr', {}, [h('td', {}, [inp(x, 'name', 'text', null, { disabled:ro })]), h('td', {}, [inp(x, 'unit', 'text', null, { style:'width:60px', disabled:ro })]), h('td', { class:'n' }, [inp(x, 'q', 'number', upd, { style:'width:90px', disabled:ro })]), h('td', { class:'n' }, [inp(x, 'price', 'number', upd, { style:'width:100px' })]), sm, h('td', {}, [r.st === 'received' ? h('span', { text:num(x.recv == null ? x.q : x.recv) }) : ro ? null : h('button', { class:'x', text:'×', onclick:function(){ r.items.splice(r.items.indexOf(x), 1); save(); drawItems(); } })])])); });
    if (!r.items.length) body.appendChild(h('tr', {}, [h('td', { colspan:'6', class:'muted', text:'Позиций нет' })]));
    var tot = h('b', { text:rub(ordSum(r)) }); t.appendChild(body); tb.appendChild(h('div', { class:'tw' }, [t])); tb.appendChild(h('div', { class:'row' }, [ro ? null : btn('plus', 'Позиция', 'lt xs', function(){ r.items.push({ id:uid(), name:'', unit:'шт', q:1, price:0 }); save(); drawItems(); }), ro ? null : catMatPick(function(m){ r.items.push({ id:uid(), mid:m.id, name:m.name, unit:m.unit, q:1, price:m.price }); save(); drawItems(); }), h('span', { class:'sp' }), h('span', { text:'Итого: ' }), tot])); }
  drawItems(); w.appendChild(card('Позиции', [tb]));
  w.appendChild(h('div', { class:'row' }, [r.st === 'draft' ? btn('check', 'Заказано у поставщика', '', function(){ if (!r.items.length) return toast('Добавьте позиции'); r.st = 'ordered'; r.orderedAt = today(); logA('Заказ №' + r.num + ' отправлен поставщику'); save(); go('order', r.id); }) : null,
    r.st === 'ordered' ? btn('check', 'Принять на объекте', '', function(){ receiveDlg(r); }) : null, r.st !== 'draft' && r.st !== 'canceled' ? btn('coin', 'Оплата', 'lt', function(){ supPayDlg(r); }) : null,
    btn('pdf', 'Заявка поставщику (печать, PDF)', 'lt', function(){ orderPrint(r); }), btn('xls', 'Excel', 'lt', function(){ saveBook('zakaz-' + r.num + '.xlsx', [{ name:'Заказ', cols:[40, 8, 10, 12, 14], rows:[['Наименование', 'Ед.', 'Кол-во', 'Цена', 'Сумма']].concat(r.items.map(function(x){ return [x.name, x.unit, +x.q || 0, +x.price || 0, (+x.q || 0) * (+x.price || 0)]; })).concat([['Итого', '', '', '', ordSum(r)]]) }]); }),
    h('span', { class:'sp' }), r.st !== 'canceled' && r.st !== 'received' ? h('button', { class:'btn red', text:'Отменить заказ', onclick:function(){ if (confirm('Отменить заказ?')){ r.st = 'canceled'; save(); go('order', r.id); } } }) : null]));
  if (r.pays.length) w.appendChild(card('Оплаты поставщику · ' + rub(pd) + ' из ' + rub(sum), [table(['Дата', 'Сумма'], r.pays.map(function(p){ return [fdate(p.d), rub(p.sum)]; }), [1])]));
  var fi = h('input', { type:'file', accept:'image/*', multiple:true, style:'display:none' }), kind = { k:'Чек' }, ph = h('div', { class:'row' });
  fi.onchange = function(){ Array.prototype.slice.call(fi.files).reduce(function(p, f){ return p.then(function(){ return Promise.all([shrink(f, 1800, 0.8), shrink(f, 300, 0.7)]).then(function(x){ var pid = uid(); r.photos.push({ id:pid, k:kind.k, at:today() }); return idbPut('ph', { id:pid, full:x[0], th:x[1] }); }); }); }, Promise.resolve()).then(function(){ save(); go('order', r.id); }); };
  r.photos.forEach(function(p){ var im = h('img', { class:'thm', title:p.k + ' · ' + fdate(p.at) }); idbGet('ph', p.id).then(function(x){ if (x){ im.src = x.th; im.onclick = function(){ viewer(x.full); }; } }); ph.appendChild(h('div', { class:'col', style:'align-items:center;gap:2px' }, [im, h('small', { class:'muted', text:p.k })])); });
  w.appendChild(card('Чеки, счета и накладные', [r.photos.length ? ph : empty('Фото пока нет.'), h('div', { class:'row' }, ['Чек', 'Счёт', 'Накладная'].map(function(k){ return btn('cam', k, 'lt xs', function(){ kind.k = k; fi.click(); }); }).concat([fi]))]));
};
function catMatPick(cb){ var s = h('select', { style:'max-width:280px' }); s.appendChild(h('option', { value:'', text:'+ Материал из справочника…' })); S.cat.mats.forEach(function(m){ s.appendChild(h('option', { value:m.id, text:m.name + ' · ' + rub(m.price) + '/' + m.unit })); }); s.onchange = function(){ var m = byId(S.cat.mats, s.value); if (m) cb(m); s.value = ''; }; return s; }
function receiveDlg(r){ var fi = h('input', { type:'file', accept:'image/*' }), rows = r.items.map(function(x){ x.recv = x.recv == null ? x.q : x.recv; return h('div', { class:'grid2' }, [h('span', { text:x.name + ' (' + num(x.q) + ' ' + x.unit + ')' }), inp(x, 'recv', 'number')]); });
  var box = dlg('Приёмка на объекте', [h('small', { class:'muted', text:'Проверьте, сколько фактически привезли. Если меньше — укажите, разница будет видна в материалах объекта.' })].concat(rows).concat([fieldD('Фото накладной', fi), h('div', { class:'row' }, [h('span', { class:'sp' }), btn('check', 'Принято', '', function(){
    var f = fi.files[0], done = function(){ r.st = 'received'; r.recvAt = today(); r.items.forEach(function(x){ if (x.mid && +x.recv){ S.stock.push({ id:uid(), mid:x.mid, kind:'in', qty:+x.recv, d:today(), note:'Заказ №' + r.num }); if (r.oid) S.stock.push({ id:uid(), mid:x.mid, kind:'out', qty:+x.recv, oid:r.oid, d:today(), note:'Заказ №' + r.num + ' — на объект' }); } }); logA('Заказ №' + r.num + ' принят на объекте'); save(); box.remove(); go('order', r.id); };
    if (!f) return done(); toast('Подготавливаю фото…'); Promise.all([shrink(f, 1800, 0.8), shrink(f, 300, 0.7)]).then(function(x){ var pid = uid(); r.photos.push({ id:pid, k:'Накладная', at:today() }); return idbPut('ph', { id:pid, full:x[0], th:x[1] }); }).then(done); })])])); }
function supPayDlg(r){ var f = { sum:Math.max(0, Math.round(ordSum(r) - ordPaid(r))), d:today() }, s = byId(S.suppliers, r.sup);
  var box = dlg('Оплата поставщику', [h('div', { class:'grid2' }, [field('Сумма, ₽', inp(f, 'sum', 'number')), field('Дата', inp(f, 'd', 'date'))]), h('small', { class:'muted', text:r.oid ? 'Попадёт в расходы объекта (статья «Материалы»).' : 'Попадёт в общие расходы компании.' }), h('div', { class:'row' }, [h('span', { class:'sp' }), btn('check', 'Записать оплату', '', function(){ if (!+f.sum) return toast('Сумма?');
    r.pays.push({ id:uid(), d:f.d, sum:+f.sum }); var p = { id:uid(), d:f.d, kind:'out', cat:'Материалы', sum:+f.sum, note:'Заказ №' + r.num + (s ? ' · ' + s.name : ''), who:'' }; var o = byId(S.objs, r.oid); if (o) o.pays.push(p); else S.gexp.push(p); logA('Оплата поставщику ' + rub(f.sum) + ' по заказу №' + r.num); save(); box.remove(); go('order', r.id); })])]); }
function orderPrint(r){ var s = byId(S.suppliers, r.sup), o = byId(S.objs, r.oid); CO = null; entCo(o || null);
  var rows = r.items.map(function(x, i){ return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(x.name) + '</td><td class="c">' + esc(x.unit) + '</td><td class="n">' + num(x.q) + '</td><td class="n">' + num(x.price, 0) + '</td><td class="n">' + num((+x.q || 0) * (+x.price || 0), 0) + '</td></tr>'; }).join('');
  docOpen('Заявка поставщику №' + r.num, '<h1>Заявка поставщику № ' + r.num + '</h1><div class="sub">от ' + ldate(r.date) + '</div><p><b>Поставщик:</b> ' + esc(s ? s.name : '________________') + (s && s.phone ? ', ' + esc(s.phone) : '') + '<br><b>Доставка:</b> ' + esc(r.addr || '—') + (r.deliv ? ', ' + ldate(r.deliv) : '') + (r.note ? '<br><b>Комментарий:</b> ' + esc(r.note) : '') + '</p><table><tr><th>№</th><th>Наименование</th><th>Ед.</th><th class="n">Кол-во</th><th class="n">Цена, ₽</th><th class="n">Сумма, ₽</th></tr>' + rows + '<tr><td colspan="5"><b>Итого</b></td><td class="n"><b>' + num(ordSum(r), 0) + '</b></td></tr></table><p>Контакт: ' + esc((me().c || {}).name || S.co.name) + ', ' + esc(((me().c || {}).phone) || S.co.phone || '') + '</p>', 'zayavka-' + r.num); }
/* ---------- материалы объекта: заказать по смете ---------- */
var tabMats0 = tabMats;
OTF.mats = function(w, o){ var C = objCalc(o), ord = {}, got = {}, sumOrd = 0;
  S.orders.forEach(function(r){ if (r.oid !== o.id || r.st === 'canceled') return; sumOrd += ordSum(r); r.items.forEach(function(x){ var k = x.mid || x.name; ord[k] = (ord[k] || 0) + (+x.q || 0); if (r.st === 'received') got[k] = (got[k] || 0) + (+(x.recv == null ? x.q : x.recv) || 0); }); });
  var L = Object.keys(C.matList).map(function(k){ return C.matList[k]; }), over = L.filter(function(x){ return (ord[x.m.id] || 0) > Math.ceil(x.q) * 1.05; }).length, pick = {};
  w.appendChild(h('div', { class:'grid4' }, [kpi(rub(C.matsCost), 'материалы по смете (себестоимость)'), kpi(rub(sumOrd), 'заказано на сумму'), kpi(String(over), 'позиций с перерасходом', over ? 'r' : 'g')]));
  if (L.length){ var t = h('table', { class:'t' }); t.appendChild(h('thead', {}, [h('tr', {}, ['', 'Материал', 'По смете', 'Заказано', 'Доставлено', 'Заказать', 'Цена, ₽'].map(function(x, i){ return h('th', { class:i > 1 ? 'n' : '', text:x }); }))])); var tb = h('tbody');
    L.forEach(function(x){ var need = Math.ceil(x.q), o2 = ord[x.m.id] || 0, left = Math.max(0, need - o2), q = { v:left }, ck = h('input', { type:'checkbox' }); ck.checked = left > 0; pick[x.m.id] = { m:x.m, q:q, ck:ck };
      tb.appendChild(h('tr', { class:o2 > need * 1.05 ? 'bad' : '' }, [h('td', {}, [ck]), h('td', { text:x.m.name }), h('td', { class:'n', text:num(need) + ' ' + x.m.unit }), h('td', { class:'n', text:num(o2) }), h('td', { class:'n', text:num(got[x.m.id] || 0) }), h('td', { class:'n' }, [inp(q, 'v', 'number', null, { style:'width:80px' })]), h('td', { class:'n', text:num(x.m.price, 0) })])); });
    t.appendChild(tb); var sp = { sup:'' };
    w.appendChild(card('Материалы по сметам', [h('div', { class:'tw' }, [t]), h('div', { class:'row' }, [btn('', 'Выбрать всё, что осталось заказать', 'lt xs', function(){ Object.keys(pick).forEach(function(k){ pick[k].ck.checked = +pick[k].q.v > 0; }); }), h('span', { class:'sp' }), sel(sp, 'sup', [['', 'Поставщик позже']].concat(S.suppliers.map(function(s){ return [s.id, s.name]; }))),
      btn('cart', 'Создать заказ', '', function(){ var items = Object.keys(pick).filter(function(k){ return pick[k].ck.checked && +pick[k].q.v > 0; }).map(function(k){ var p = pick[k]; return { id:uid(), mid:p.m.id, name:p.m.name, unit:p.m.unit, q:+p.q.v, price:p.m.price }; }); if (!items.length) return toast('Отметьте материалы'); var r = newOrder({ oid:o.id, sup:sp.sup, items:items }); go('order', r.id); })])])); }
  var O = S.orders.filter(function(r){ return r.oid === o.id; });
  w.appendChild(card(h('div', { class:'row' }, [h('h3', { text:'Заказы по объекту' }), h('span', { class:'sp' }), btn('plus', 'Заказ', 'lt xs', function(){ var r = newOrder({ oid:o.id }); go('order', r.id); })]), [O.length ? table(['№', 'Поставщик', 'Сумма', 'Статус'], O.map(function(r){ var s = byId(S.suppliers, r.sup); return [h('a', { href:'#', text:'№' + r.num, onclick:function(e){ e.preventDefault(); go('order', r.id); } }), s ? s.name : '—', rub(ordSum(r)), h('span', { class:'pill ' + OST2[r.st][1], text:OST2[r.st][0] })]; }), [2]) : empty('Заказов пока нет.')]));
  tabMats0(w, o); };
OTABS.forEach(function(t){ if (t[0] === 'mats') t[1] = 'Материалы и закупки'; });

/* ---------- ГРАФИК РАБОТ ---------- */
function addDays(d, n, skipWe){ var x = new Date(d + 'T12:00:00'); var k = 0; while (k < n){ x.setDate(x.getDate() + 1); if (skipWe && (x.getDay() === 0 || x.getDay() === 6)) continue; k++; } return x.toISOString().slice(0, 10); }
function workDays(a, b){ return Math.round((new Date(b) - new Date(a)) / 864e5); }
function schedItems(o){ var L = []; (o.rooms || []).forEach(function(r){ (r.lines || []).forEach(function(l){ L.push({ r:r, l:l }); }); }); return L; }
function schedInfo(o){ var L = schedItems(o).filter(function(x){ x.l.s; return x.l.e; }), td = today(), end = '', fc = '', late = 0;
  L.forEach(function(x){ if (x.l.e > end) end = x.l.e; if (!x.l.done && x.l.e < td) late = Math.max(late, workDays(x.l.e, td)); });
  if (!L.length) (o.stages || []).forEach(function(st){ if (st.plan && st.plan > end) end = st.plan; if (st.plan && !st.done && st.plan < td) late = Math.max(late, workDays(st.plan, td)); });
  fc = end ? (late ? addDays(end, late) : end) : ''; var due = o.end || end, st = !end ? 'none' : late ? 'late' : (due && workDays(td, due) <= 5 && L.some(function(x){ return !x.l.done; })) ? 'tight' : 'ok';
  var tot = schedItems(o).length, dn = schedItems(o).filter(function(x){ return x.l.done; }).length;
  return { start:o.start || (L.length ? L.map(function(x){ return x.l.s; }).sort()[0] : ''), end:end, fc:fc, late:late, st:st, pct:tot ? Math.round(dn / tot * 100) : 0 }; }
V.sched = function(w){ title('График работ'); var A = S.objs.filter(function(o){ return ['В работе', 'Утверждена'].indexOf(o.status) > -1; });
  w.appendChild(h('div', { class:'hint b', text:'Сроки всех объектов в одном месте. Откройте объект, чтобы увидеть шкалу по этапам и работам.' }));
  var I = A.map(function(o){ return [o, schedInfo(o)]; }), cnt = { late:0, tight:0, ok:0 }; I.forEach(function(x){ if (cnt[x[1].st] != null) cnt[x[1].st]++; });
  w.appendChild(h('div', { class:'grid4' }, [kpi(String(cnt.late), 'отстают', cnt.late ? 'r' : ''), kpi(String(cnt.tight), 'срок поджимает', cnt.tight ? 'y' : ''), kpi(String(cnt.ok), 'по плану', 'g')]));
  if (!A.length){ w.appendChild(card(null, [empty('Нет объектов в работе.')])); return; }
  w.appendChild(card(null, I.map(function(x){ var o = x[0], i = x[1]; return h('button', { class:'orow', onclick:function(){ go('obj', o.id + '|sched'); } }, [h('div', {}, [h('b', { text:'№' + o.num + ' ' + o.name }), h('small', { text:i.st === 'none' ? 'Сроки ещё не расставлены — откройте график и нажмите «Расставить автоматически».' : 'сдача по графику ' + fdate(i.end) + (i.late ? ' · прогноз ' + fdate(i.fc) + ' (+' + i.late + ' дн.)' : '') + (o.end ? ' · по договору ' + fdate(o.end) : '') })]), h('div', { class:'prog' }, [h('i', { style:'width:' + i.pct + '%' })]), h('span', { class:'pill ' + ({ late:'r', tight:'y', ok:'g', none:'' })[i.st], text:({ late:'отстаёт на ' + i.late + ' дн.', tight:'срок поджимает', ok:'по плану', none:'без сроков' })[i.st] })]); })));
};
function tabSched(w, o){ var I = schedInfo(o), L = schedItems(o), m = me(), edit = can('smeta') || m.role === 'owner' || m.role === 'admin' || o.prorab === m.id || o.manager === m.id;
  w.appendChild(h('div', { class:'grid4' }, [kpi(I.start ? fdate(I.start) : '—', 'начало'), kpi(I.end ? fdate(I.end) : '—', 'сдача по графику'), kpi(I.fc ? fdate(I.fc) : '—', I.late ? 'прогноз сдачи (+' + I.late + ' дн.)' : 'прогноз сдачи', I.late ? 'r' : 'g'), kpi(o.end ? fdate(o.end) : '—', 'по договору · выполнено ' + I.pct + '%')]));
  w.appendChild(h('div', { class:'hint ' + (I.late ? 'r' : I.st === 'none' ? 'y' : 'g'), text:I.st === 'none' ? 'Сроки ещё не расставлены. Нажмите «Расставить автоматически» — работы пойдут одна за другой по порядку в смете, потом любую можно поправить.' : I.late ? 'Есть просроченные работы — прогноз сдачи сдвинулся. Перенесите сроки с указанием причины: заказчик увидит новую дату.' : 'Всё идёт по графику.' }));
  w.appendChild(h('div', { class:'row' }, [edit ? btn('cal', 'Расставить автоматически', '', function(){ autoSched(o); }) : null, btn('pdf', 'Печать для заказчика', 'lt', function(){ schedPrint(o); }), h('span', { class:'sp' }), edit ? null : h('small', { class:'muted', text:'У вас права только на просмотр графика.' })]));
  if (!L.length){ w.appendChild(card(null, [empty('В смете нет работ.')])); return; }
  var dates = L.filter(function(x){ return x.l.s && x.l.e; }), a = dates.length ? dates.map(function(x){ return x.l.s; }).sort()[0] : today(), b = dates.length ? dates.map(function(x){ return x.l.e; }).sort().pop() : addDays(today(), 30); if (b <= a) b = addDays(a, 7); var span = workDays(a, b) + 1, tdp = (workDays(a, today()) / span) * 100;
  var g = h('div', { class:'gnt' }); var lastRoom = null;
  L.forEach(function(x){ if (x.r !== lastRoom){ lastRoom = x.r; g.appendChild(h('div', { class:'gr room' }, [h('b', { text:x.r.name })])); }
    var l = x.l, bar = null; if (l.s && l.e){ var left = workDays(a, l.s) / span * 100, wd = Math.max(1, workDays(l.s, l.e) + 1) / span * 100, late = !l.done && l.e < today(); bar = h('i', { class:(l.done ? 'd' : late ? 'l' : ''), style:'left:' + left + '%;width:' + wd + '%', title:fdate(l.s) + ' — ' + fdate(l.e) }); }
    var who = l.who && byId(S.crew, l.who);
    g.appendChild(h('div', { class:'gr', onclick:function(){ if (edit) lineSchedDlg(o, l); } }, [h('span', { class:'gn' }, [h('b', { text:(l.done ? '✓ ' : '') + l.name }), h('small', { text:(l.s ? fdate(l.s).slice(0, 5) + '–' + fdate(l.e).slice(0, 5) : 'щёлкните, чтобы назначить срок') + (who ? ' · ' + who.name : '') })]), h('span', { class:'gb' }, [bar, tdp >= 0 && tdp <= 100 ? h('em', { style:'left:' + tdp + '%' }) : null])])); });
  w.appendChild(card(h('div', { class:'row' }, [h('h3', { text:'Шкала' }), h('span', { class:'sp' }), h('small', { class:'muted', text:fdate(a) + ' — ' + fdate(b) + ' · красная линия — сегодня' })]), [g]));
  if ((o.schedLog || []).length) w.appendChild(card('Журнал переносов', [table(['Когда', 'Что', 'Было', 'Стало', 'Причина'], o.schedLog.slice().reverse().map(function(x){ return [fdate(x.at), x.what, x.from ? fdate(x.from) : '—', fdate(x.to), x.why]; }))]));
}
OTF.sched = tabSched; OTABS.splice(3, 0, ['sched', 'График работ']); OTABS.forEach(function(t){ if (t[0] === 'stages') t[1] = 'Этапы и оплаты'; });
function autoSched(o){ var f = { start:o.start || today(), days:1, we:true, onlyEmpty:true };
  var box = dlg('Расставить сроки автоматически', [h('small', { class:'muted', text:'Работы пойдут одна за другой по порядку в смете. Потом любую можно поправить.' }), h('div', { class:'grid2' }, [field('Начать с', inp(f, 'start', 'date')), field('Дней на работу', inp(f, 'days', 'number'))]),
    h('label', { class:'chk' }, [(function(){ var x = h('input', { type:'checkbox', checked:true }); x.onchange = function(){ f.we = x.checked; }; return x; })(), 'Не работаем в субботу и воскресенье']), h('label', { class:'chk' }, [(function(){ var x = h('input', { type:'checkbox', checked:true }); x.onchange = function(){ f.onlyEmpty = x.checked; }; return x; })(), 'Только для работ без срока (остальные не трогать)']),
    h('div', { class:'row' }, [h('span', { class:'sp' }), btn('check', 'Расставить', '', function(){ var cur = f.start, n = Math.max(1, +f.days || 1); if (f.we){ var d0 = new Date(cur + 'T12:00:00'); while (d0.getDay() === 0 || d0.getDay() === 6){ d0.setDate(d0.getDate() + 1); } cur = d0.toISOString().slice(0, 10); }
      schedItems(o).forEach(function(x){ var l = x.l; if (f.onlyEmpty && l.s && l.e){ if (l.e >= cur) cur = addDays(l.e, 1, f.we); return; } l.s = cur; l.e = addDays(cur, n - 1, f.we); cur = addDays(l.e, 1, f.we); });
      if (!o.start) o.start = f.start; syncStagePlans(o); save(); box.remove(); go('obj', o.id + '|sched'); })])]); }
function syncStagePlans(o){ /* плановые даты этапов: пропорционально доле этапа в графике работ */ var L = schedItems(o).filter(function(x){ return x.l.e; }).map(function(x){ return x.l.e; }).sort(); if (!L.length) return; var acc = 0; (o.stages || []).forEach(function(st){ acc += +st.pct || 0; if (!st.plan || !st.manual){ var idx = Math.min(L.length - 1, Math.max(0, Math.ceil(L.length * acc / 100) - 1)); st.plan = L[idx]; } }); }
function lineSchedDlg(o, l){ var f = { s:l.s || today(), e:l.e || today(), dur:l.s && l.e ? workDays(l.s, l.e) + 1 : 1, after:l.after || '' }, old = { s:l.s, e:l.e }, opts = [['', '— независимо —']].concat(schedItems(o).filter(function(x){ return x.l !== l; }).map(function(x){ return [x.l.id, x.r.name + ': ' + x.l.name]; }));
  var eI = inp(f, 'e', 'date'), box = dlg(l.name, [h('div', { class:'grid3' }, [field('Начало', inp(f, 's', 'date', function(){ f.e = addDays(f.s, Math.max(1, +f.dur) - 1); eI.value = f.e; })), field('Окончание', eI), field('Длительность, дней', inp(f, 'dur', 'number', function(){ f.e = addDays(f.s, Math.max(1, +f.dur) - 1); eI.value = f.e; }))]),
    field('Начинается после работы', sel(f, 'after', opts), 'Если сдвинуть ту работу, эта сдвинется следом, чтобы не начаться раньше.'),
    h('div', { class:'row' }, [l.s ? btn('', 'Убрать срок', 'lt', function(){ delete l.s; delete l.e; save(); box.remove(); go('obj', o.id + '|sched'); }) : null, h('span', { class:'sp' }), btn('check', 'Готово', '', function(){ if (f.e < f.s) return toast('Окончание раньше начала');
      function apply(why){ l.s = f.s; l.e = f.e; l.after = f.after; if (why){ o.schedLog = o.schedLog || []; o.schedLog.push({ at:new Date().toISOString(), what:l.name, from:old.e, to:f.e, why:why, by:me().id }); if (o.cab && o.cab.issue && REMOTE.chatReady()){ var a2 = me().c; REMOTE.post(o, { t:'m', f:'s', w:(a2 && a2.name) || S.co.name, r:'', x:'Перенос срока: «' + l.name + '» — теперь до ' + fdate(f.e) + ' (было ' + fdate(old.e) + '). Причина: ' + why, a:new Date().toISOString() }).catch(function(){}); } }
        cascade(o, l); syncStagePlans(o); save(); box.remove(); go('obj', o.id + '|sched'); }
      if (old.e && f.e > old.e && ['В работе'].indexOf(o.status) > -1){ var why = prompt('Почему переносим срок? Причина попадёт в журнал, заказчик увидит сообщение о переносе.'); if (!why) return; apply(why); } else apply(''); })])]); }
function cascade(o, base){ var L = schedItems(o), changed = true, n = 0; while (changed && n++ < 50){ changed = false; L.forEach(function(x){ var l = x.l; if (!l.after || !l.s) return; var p = L.filter(function(y){ return y.l.id === l.after; })[0]; if (!p || !p.l.e) return; if (l.s <= p.l.e){ var dur = workDays(l.s, l.e); l.s = addDays(p.l.e, 1); l.e = addDays(l.s, dur); changed = true; } }); } }
function schedPrint(o){ var L = schedItems(o).filter(function(x){ return x.l.s; }), I = schedInfo(o); CO = null; entCo(o);
  var rows = L.map(function(x, i){ return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(x.r.name) + '</td><td>' + esc(x.l.name) + '</td><td class="c">' + fdate(x.l.s) + '</td><td class="c">' + fdate(x.l.e) + '</td><td class="c">' + (x.l.done ? '✓' : '') + '</td></tr>'; }).join('');
  docOpen('График работ №' + o.num, '<h1>График производства работ</h1><div class="sub">Объект: ' + esc(o.addr || o.name) + '</div><p>Начало работ: <b>' + (I.start ? ldate(I.start) : '—') + '</b>. Окончание по графику: <b>' + (I.end ? ldate(I.end) : '—') + '</b>' + (I.late ? '. Прогноз с учётом переносов: <b>' + ldate(I.fc) + '</b>' : '') + '.</p>' + (L.length ? '<table><tr><th>№</th><th>Помещение</th><th>Работа</th><th>Начало</th><th>Окончание</th><th>Готово</th></tr>' + rows + '</table>' : gantt(o)) + ((o.schedLog || []).length ? '<h2>Переносы сроков</h2><table><tr><th>Дата</th><th>Работа</th><th>Новый срок</th><th>Причина</th></tr>' + o.schedLog.map(function(x){ return '<tr><td>' + fdate(x.at) + '</td><td>' + esc(x.what) + '</td><td>' + fdate(x.to) + '</td><td>' + esc(x.why) + '</td></tr>'; }).join('') + '</table>' : ''), 'grafik-' + o.num); }
/* меню */
NAV.forEach(function(g){ if (g[0] === 'Производство'){ g[1].push(['sched', 'cal', 'График работ'], ['buy', 'cart', 'Закупки']); } });
VPERM.buy = 'stock'; VPERM.order = 'stock'; VPERM.sched = 'objs';

/* ================= ВХОД, РЕГИСТРАЦИЯ КОМПАНИИ, ТАРИФ ================= */
var PLANS_UI = [['master', 'Мастер', 990, 790], ['brigade', 'Бригада', 2490, 1990], ['company', 'Компания', 5490, 4390], ['pro', 'Домилия Про', 11900, 9500]];
function authScreen(mode, plan){ var box = h('div', { class:'login2 auth' }), fp = h('div', { class:'formp' }), an = $('#tplAnim'); $$('.login2').forEach(function(x){ x.remove(); });
  box.appendChild(h('div', { class:'brandp' }, [h('div', { class:'lgw', html:'<span class="m">' + MARK + '</span><b>ДОМИЛИЯ ПРО</b>' }), h('div', { class:'txt' }, [h('h2', { text:'Управляйте объектами, а не хаосом' }), h('p', { text:'Заявки, сметы, график работ, закупки, бригады, деньги и кабинет заказчика — в одной системе для строительных и ремонтных компаний.' }), an ? h('div', { html:an.innerHTML }) : null])])); box.appendChild(fp); document.body.appendChild(box);
  function draw(){ fp.innerHTML = ''; var err = h('div'), cardEl;
    var tabs = h('div', { class:'seg', style:'margin-bottom:14px' }, [h('button', { class:mode === 'login' ? 'on' : '', text:'Вход', onclick:function(){ mode = 'login'; draw(); } }), h('button', { class:mode === 'signup' ? 'on' : '', text:'Регистрация', onclick:function(){ mode = 'signup'; draw(); } })]);
    var head = h('div', { class:'auth-h', html:'<span class="auth-m">' + MARK + '</span><div><b>ДОМИЛИЯ</b><small>ПРО</small></div>' });
    if (mode === 'login'){ var L = h('input', { type:'text', autocomplete:'username', placeholder:'логин' }), P = h('input', { type:'password', autocomplete:'current-password', placeholder:'пароль' });
      function ok(){ err.innerHTML = ''; SRV.req('POST', '/auth/login', { login:L.value.trim(), password:P.value }).then(function(j){ var s = SRV.get(); s.url = SRV.url(); s.token = j.token; s.user = j.user; s.company = j.company; delete s.off; SRV.set(s); box.remove(); remoteMode(); firstSync(); billingLoad(); }, function(e){ err.innerHTML = '<div class="hint r">' + esc(e.message === 'Failed to fetch' ? 'Нет связи с сервером. Проверьте интернет; если включён VPN — выключите его или добавьте domilia.ru в исключения.' : e.message) + '</div>'; }); }
      P.onkeydown = function(e){ if (e.key === 'Enter') ok(); };
      cardEl = card(null, [head, tabs, field('Логин', L), field('Пароль', P), err, btn('lock', 'Войти', '', ok), h('small', { class:'muted', text:'Сотрудники получают логин по приглашению от руководителя.' }),
        (S.objs.length + S.deals.length + S.clients.length) ? h('button', { class:'linkb', text:'Работать без интернета с данными этого устройства', onclick:function(){ var s = SRV.get(); s.off = 1; SRV.set(s); box.remove(); go('home'); } }) : null, h('a', { class:'linkb', href:'./?site', text:'← На сайт Домилия Про' })]);
      setTimeout(function(){ L.focus(); }, 50); }
    else { var f = { company:'', name:'', phone:'', email:'', login:'', pass:'', plan:plan || 'company', agree:false };
      var ag = h('input', { type:'checkbox' }); ag.onchange = function(){ f.agree = ag.checked; };
      cardEl = card(null, [head, tabs, h('p', { class:'muted', style:'margin-top:0', text:'14 дней бесплатно, без банковской карты. Данные не пропадут после пробного периода.' }),
        h('div', { class:'grid2' }, [field('Название компании', inp(f, 'company', 'text', null, { placeholder:'Ремонт Плюс' })), field('Ваше имя', inp(f, 'name', 'text', null, { placeholder:'Иван Петров', autocomplete:'name' }))]),
        h('div', { class:'grid2' }, [field('Телефон', inp(f, 'phone', 'tel', null, { placeholder:'+7 900 000-00-00', autocomplete:'tel' })), field('Почта (необязательно)', inp(f, 'email', 'email', null, { autocomplete:'email' }))]),
        h('div', { class:'grid2' }, [field('Логин (латиницей)', inp(f, 'login', 'text', null, { placeholder:'ivan', autocomplete:'username' })), field('Пароль', inp(f, 'pass', 'password', null, { placeholder:'от 8 символов', autocomplete:'new-password' }))]),
        fieldD('Тариф после пробного периода', h('div', { class:'chs' }, PLANS_UI.map(function(p){ var b = h('button', { class:'chip sm' + (f.plan === p[0] ? ' on' : ''), text:p[1] + ' · от ' + p[3].toLocaleString('ru-RU') + ' ₽', onclick:function(){ f.plan = p[0]; $$('.auth .chs .chip').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); } }); return b; }))),
        h('label', { class:'chk' }, [ag, h('span', { html:'Принимаю <a href="legal.html#terms" target="_blank">пользовательское соглашение</a>, <a href="legal.html#privacy" target="_blank">политику обработки данных</a> и даю <a href="legal.html#consent" target="_blank">согласие на обработку персональных данных</a>' })]), err,
        btn('check', 'Создать компанию', '', function(){ err.innerHTML = ''; SRV.req('POST', '/signup', { company:f.company.trim(), name:f.name.trim(), phone:f.phone.trim(), email:f.email.trim(), login:f.login.trim().toLowerCase(), password:f.pass, plan:f.plan, agree:f.agree }).then(function(j){ var s = SRV.get(); s.url = SRV.url(); s.token = j.token; s.user = j.user; s.company = j.company; delete s.off; SRV.set(s); box.remove(); remoteMode();
          firstSync(true).then(function(){ S.co = { name:f.company.trim(), full:f.company.trim(), phone:f.phone.trim(), email:f.email.trim(), city:'', addr:'', inn:'', site:'', valid:14, guarantee:'2 года', note:'Цена фиксируется в договоре. Оплата по этапам: вы платите только за принятые работы.' }; S.ents = []; var me0 = { id:uid(), name:f.name.trim(), role:'Руководитель', phone:f.phone.trim(), from:today(), acc:{ role:'owner' } }; S.crew.push(me0); save(); return SRV.req('PATCH', '/users/' + j.user.id, { crew_id:me0.id, name:me0.name }).then(function(){ var s2 = SRV.get(); s2.user.crew_id = me0.id; SRV.set(s2); }); }).then(function(){ billingLoad(); renderNav(); go('home'); toast('Компания создана! Начните с «Заполнить примерами» или с реквизитов в «Компании».'); }); },
          function(e){ err.innerHTML = '<div class="hint r">' + esc(e.message === 'Failed to fetch' ? 'Нет связи с сервером. Проверьте интернет или выключите VPN.' : e.message) + '</div>'; }); }),
        h('small', { class:'muted', text:'Уже есть аккаунт? Перейдите на вкладку «Вход».' })]); }
    fp.appendChild(cardEl); }
  draw(); }
/* --- тариф --- */
var BILL = null;
function billingLoad(){ if (!SRV.on()) return Promise.resolve(); return SRV.req('GET', '/billing').then(function(b){ BILL = b; billBanner(); return b; }, function(){}); }
function billBanner(){ var x = $('#billb'); if (x) x.remove(); if (!BILL || BILL.lifetime) return; var warn = BILL.status === 'expired' || (BILL.status === 'trial' && BILL.days_left <= 5) || (BILL.status === 'active' && BILL.days_left <= 5); if (!warn) return;
  var t = BILL.status === 'expired' ? 'Пробный период закончился — программа в режиме просмотра. Данные сохранены: выберите тариф, чтобы продолжить.' : (BILL.status === 'trial' ? 'Пробный период: осталось ' + BILL.days_left + ' дн.' : 'Оплата заканчивается через ' + BILL.days_left + ' дн.');
  var b = h('div', { id:'billb', class:'billb' + (BILL.status === 'expired' ? ' r' : '') }, [h('span', { text:t }), h('button', { class:'btn xs', text:'Тариф и оплата', onclick:function(){ go('billing'); } })]); var main = $('.main'); if (main) main.insertBefore(b, main.firstChild); }
V.billing = function(w){ title('Тариф и оплата'); if (!SRV.on()){ w.appendChild(card(null, [empty('Тариф доступен после входа на сервер.')])); return; }
  var box = h('div'); w.appendChild(box); billingLoad().then(function(b){ if (!b) return; var u = (SRV.get().user || {});
    box.appendChild(h('div', { class:'grid4' }, [kpi(b.plan_name || '—', 'тариф'), kpi(b.lifetime ? 'бессрочно' : ({ trial:'пробный период', active:'оплачен', expired:'закончился' })[b.status], 'статус', b.status === 'expired' ? 'r' : 'g'), kpi(b.lifetime ? '∞' : (b.until ? fdate(b.until) : '—'), b.status === 'trial' ? 'пробный период до' : 'оплачено до'), kpi(b.lifetime ? '∞' : String(b.days_left), 'дней осталось')]));
    if (b.lifetime){ box.appendChild(h('div', { class:'hint g', text:'Бессрочный доступ без ограничений.' })); return; }
    var yr = { v:true }, grid = h('div', { class:'grid4' });
    function dr(){ grid.innerHTML = ''; PLANS_UI.forEach(function(p){ var pr = yr.v ? p[3] : p[2]; grid.appendChild(card(null, [h('h3', { text:p[1] }), h('div', { class:'kp', html:'<b style="font-size:26px">' + pr.toLocaleString('ru-RU') + ' ₽</b> / мес' }), h('small', { class:'muted', text:yr.v ? 'при оплате за год: ' + (pr * 12).toLocaleString('ru-RU') + ' ₽' : 'при оплате за месяц' }),
      b.plan === p[0] ? h('span', { class:'pill g', text:'ваш тариф' }) : (u.role === 'owner' ? btn('', 'Выбрать', 'lt xs', function(){ SRV.req('POST', '/billing/plan', { plan:p[0] }).then(function(){ go('billing'); }); }) : null),
      btn('pdf', 'Счёт на оплату', 'lt xs', function(){ invoice(p, yr.v); })], b.plan === p[0] ? 'hi' : '')); }); }
    box.appendChild(h('div', { class:'seg' }, [h('button', { class:'', text:'Помесячно', onclick:function(e){ yr.v = false; e.target.parentNode.children[0].className = 'on'; e.target.parentNode.children[1].className = ''; dr(); } }), h('button', { class:'on', text:'За год (−20%)', onclick:function(e){ yr.v = true; e.target.parentNode.children[1].className = 'on'; e.target.parentNode.children[0].className = ''; dr(); } })]));
    dr(); box.appendChild(grid); box.appendChild(h('div', { class:'hint b', text:'Оплата по счёту для ИП и организаций. После оплаты доступ продлевается в течение рабочего дня. Оплата картой и через СБП будет подключена.' })); }); };
function invoice(p, yr){ var e = ents()[0] || {}, sum = (yr ? p[3] * 12 : p[2]), per = yr ? '12 месяцев' : '1 месяц';
  docOpen('Счёт — Домилия Про', '<h1>Счёт на оплату доступа к сервису «Домилия Про»</h1><div class="sub">тариф «' + esc(p[1]) + '», ' + per + '</div><p><b>Получатель:</b> [реквизиты владельца сервиса]<br><b>Плательщик:</b> ' + esc(e.full || S.co.name) + (e.inn ? ', ИНН ' + esc(e.inn) : '') + '</p><table><tr><th>№</th><th>Наименование</th><th class="n">Сумма, ₽</th></tr><tr><td class="c">1</td><td>Доступ к онлайн-сервису «Домилия Про», тариф «' + esc(p[1]) + '», ' + per + '</td><td class="n">' + num(sum, 0) + '</td></tr><tr><td colspan="2"><b>Итого, без НДС</b></td><td class="n"><b>' + num(sum, 0) + '</b></td></tr></table><p>Назначение платежа: оплата доступа к сервису «Домилия Про», компания «' + esc(S.co.name) + '».</p>', 'schet-domilia'); }
NAV[NAV.length - 1][1].push(['billing', 'coin', 'Тариф и оплата']); VPERM.billing = 'company';
setTimeout(billingLoad, 2000);

/* ================= АККУРАТНЫЙ ИНТЕРФЕЙС: меню-папки, профиль внизу, нижняя панель на телефоне, порядок вкладок ================= */
Object.assign(ICO, { chev:'<path d="M9 6l6 6-6 6"/>', folder:'<path d="M3 7h6l2 2h10v10H3z"/>', money:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>', team:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5M16 4.5a3 3 0 0 1 0 6M18 14.5c1.6.6 2.7 2.4 3 5.5"/>', dots:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>', sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>' });
var NAV2 = [
  ['', '', [['home', 'home', 'Главная'], ['cal', 'cal', 'Календарь'], ['inbox', 'chat', 'Сообщения'], ['myworks', 'hard', 'Мои работы']]],
  ['sales', 'Продажи', [['crm', 'funnel', 'Заявки'], ['clients', 'users', 'Клиенты'], ['stats', 'chart', 'Аналитика']]],
  ['prod', 'Производство', [['objs', 'build', 'Объекты и сметы'], ['sched', 'cal', 'График работ'], ['buy', 'cart', 'Закупки'], ['stock', 'box', 'Склад']]],
  ['money', 'Деньги', [['money', 'wallet', 'Финансы'], ['salary', 'coin', 'Зарплаты']]],
  ['team', 'Команда', [['crew', 'team', 'Сотрудники'], ['access', 'lock', 'Доступы и роли']]],
  ['set', 'Настройки', [['company', 'gear', 'Компания'], ['cat', 'book', 'Справочник цен'], ['billing', 'coin', 'Тариф и оплата'], ['data', 'db', 'Данные и копия']]]
];
VPERM.profile = ''; VPERM.data = 'company';
var NAVHL = { obj:'objs', deal:'crm', emp:'salary', client:'clients', person:'crew', order:'buy', profile:'', billing:'billing' };
function navOk(it){ var k = VPERM[it[0]]; if (it[0] === 'billing' && !SRV.on()) return false; if (it[0] === 'inbox' && !(REMOTE.chatReady && REMOTE.chatReady())) return can('chat') && SRV.on(); if (it[0] === 'myworks'){ var m = me(); return !!m.id && (m.role === 'master' || m.role === 'prorab' || S.objs.some(function(o){ return (o.rooms || []).some(function(r){ return (r.lines || []).some(function(l){ return l.who === m.id; }); }); })); } return !k || can(k) || (it[0] === 'salary' && lvl('salary')); }
renderNav = function(){
  var nav = $('#nav'), ft = $('#navf'), ui = uiGet(), def = !ui.navClosed, closed = ui.navClosed || {}; nav.innerHTML = ''; ft.innerHTML = '';
  NAV2.forEach(function(g){ var items = g[2].filter(navOk); if (!items.length) return;
    var box = h('div', { class:'ngi' }); items.forEach(function(it){ box.appendChild(h('button', { class:'ni', 'data-v':it[0], onclick:function(){ go(it[0]); } }, [ic(it[1]), h('span', { text:it[2] })])); });
    if (!g[0]){ nav.appendChild(box); return; }
    var grp = h('div', { class:'ngr' + (def || closed[g[0]] ? ' cl' : ''), 'data-g':g[0] }, [h('button', { class:'ngh', onclick:function(){ var u = uiGet(), c = u.navClosed; if (!c){ c = {}; NAV2.forEach(function(x){ if (x[0]) c[x[0]] = true; }); } c[g[0]] = !grp.classList.contains('cl'); u.navClosed = c; localStorage.setItem('dproUI', JSON.stringify(u)); grp.classList.toggle('cl', !!c[g[0]]); } }, [h('span', { text:g[1] }), ic('chev')]), box]);
    nav.appendChild(grp); });
  /* профиль внизу */
  var m = me(), c = m.c || {}, nm = c.name || (SRV.on() && (SRV.get().user || {}).name) || 'Профиль', roleN = (AROLES.filter(function(r){ return r[0] === m.role; })[0] || [0, ''])[1];
  var menu = h('div', { class:'umenu' }, [h('button', { class:'ni sm', onclick:function(){ go('profile'); } }, [ic('user'), h('span', { text:'Мой профиль' })]),
    h('button', { class:'ni sm', onclick:function(){ var d = document.documentElement.classList.toggle('dark'); uiSet('dark', d); } }, [ic('moon'), h('span', { text:'Тёмная тема' })]),
    !SRV.on() && !m.solo ? h('button', { class:'ni sm', onclick:function(){ localStorage.removeItem('dproMe'); loginScreen(); } }, [ic('team'), h('span', { text:'Сменить пользователя' })]) : null,
    h('a', { class:'ni sm', href:'./?site', target:'_blank' }, [ic('link'), h('span', { text:'Сайт и тарифы' })]),
    SRV.on() ? h('button', { class:'ni sm', onclick:function(){ if (!confirm('Выйти из учётной записи на этом устройстве?')) return; var x = SRV.get(); delete x.token; SRV.set(x); location.replace('./'); } }, [ic('out'), h('span', { text:'Выйти' })]) : null]);
  var ub = h('button', { class:'ucard', onclick:function(){ ft.classList.toggle('open'); } }, [avatar(c.name ? c : { name:nm }), h('div', { class:'grow' }, [h('b', { text:nm }), h('small', { text:[roleN, SRV.on() ? (SRV.get().company || {}).name : ''].filter(Boolean).join(' · ') })]), ic('dots')]);
  ft.appendChild(menu); ft.appendChild(ub); ft.appendChild(h('small', { class:'sv', id:'saved', text:SRV.on() ? 'Синхронизация…' : 'Данные в этом браузере' }));
  var oldSv = $$('#side > .sv'); oldSv.forEach(function(x){ if (x.parentNode === $('#side')) x.remove(); });
  var mb = $('#mnu'); mb.innerHTML = ''; mb.appendChild(ic('menu')); mb.onclick = function(){ document.body.classList.toggle('nav'); }; $('#scrim').onclick = function(){ document.body.classList.remove('nav'); };
  /* нижняя панель на телефоне */
  var bar = $('#mbar') || document.body.appendChild(h('nav', { id:'mbar', class:'mbar' })); bar.innerHTML = '';
  [['home', 'home', 'Главная'], ['objs', 'build', 'Объекты'], ['cal', 'cal', 'Календарь'], ['inbox', 'chat', 'Чат']].filter(function(it){ return navOk(it); }).forEach(function(it){ bar.appendChild(h('button', { 'data-v':it[0], onclick:function(){ go(it[0]); } }, [ic(it[1]), h('span', { text:it[2] })])); });
  bar.appendChild(h('button', { onclick:function(){ document.body.classList.add('nav'); } }, [ic('menu'), h('span', { text:'Меню' })]));
  try { if (uiGet().dark) document.documentElement.classList.add('dark'); } catch(e){}
  navBadges();
};
var goUI = go; go = function(v, a){ var r = goUI(v, a); var hl = NAVHL[v] != null ? NAVHL[v] : v; $$('#side [data-v], #mbar [data-v]').forEach(function(b){ b.classList.toggle('on', b.dataset.v === hl); }); var on = $('#side .ni.on'); if (on){ var g = on.closest('.ngr'); if (g) g.classList.remove('cl'); } $('#navf') && $('#navf').classList.remove('open'); return r; };
var navBadges0 = navBadges; navBadges = function(){ navBadges0(); var n = 0; S.objs.forEach(function(o){ if (canChat(o)) n += unread(o); }); var b = $('#mbar [data-v="inbox"]'); if (b){ var x = b.querySelector('.bdg'); if (x) x.remove(); if (n) b.appendChild(h('span', { class:'bdg', text:String(n) })); } };
/* вкладки объекта — в логичном порядке, одной строкой */
var OT_ORDER = ['smeta', 'docs', 'stages', 'sched', 'mats', 'team', 'money', 'photos', 'chat', 'client'];
OTABS.sort(function(a, b){ return OT_ORDER.indexOf(a[0]) - OT_ORDER.indexOf(b[0]); });
OTABS.forEach(function(t){ if (t[0] === 'mats') t[1] = 'Материалы'; if (t[0] === 'team') t[1] = 'Мастера'; if (t[0] === 'client') t[1] = 'Кабинет клиента'; });
/* «Компания» — по вкладкам вместо длинной ленты */
var CTABS = [['main', 'Компания и бренд', ['Бренд и контакты', 'Логотип']], ['ents', 'Юрлица и документы', ['От кого заключаем', 'Документы']], ['clients', 'Для клиентов', ['Мессенджеры компании', 'Тексты для клиентов']], ['server', 'Сервер и кабинеты', ['Сервер Домилии', 'Постоянный кабинет']], ['log', 'История', ['История действий']]];
var vCompanyZ = V.company;
V.company = function(w, a){ var tab = a || 'main', tmp = h('div'); var realView = $('#view'); tmp.id = 'view'; realView.id = 'viewR'; realView.appendChild(tmp);
  try { vCompanyZ(tmp); } finally { tmp.id = ''; realView.id = 'view'; }
  var cur = 'main', parts = {}; Array.prototype.slice.call(tmp.children).forEach(function(el){ var t = (el.querySelector('h3') || el).textContent || ''; CTABS.forEach(function(c){ if (c[2].some(function(k){ return t.indexOf(k) === 0 || (el.tagName === 'DIV' && el.classList.contains('row') && t.indexOf(k) > -1); })) cur = c[0]; }); (parts[cur] = parts[cur] || []).push(el); });
  tmp.remove(); title('Компания');
  w.appendChild(h('div', { class:'tabs' }, CTABS.filter(function(c){ return parts[c[0]]; }).map(function(c){ return h('button', { class:c[0] === tab ? 'on' : '', text:c[1], onclick:function(){ go('company', c[0]); } }); })));
  (parts[tab] || parts.main || []).forEach(function(el){ if (tab === 'server' && SRV.on() && /Постоянный кабинет клиента и переписка/.test(el.textContent.slice(0, 60))) return; w.appendChild(el); }); };
/* шапка объекта: на телефоне свёрнута в одну строку */
var vObjZ = V.obj;
V.obj = function(w, a){ vObjZ(w, a); var o = byId(S.objs, String(a || '').split('|')[0]); if (!o) return; var head = w.querySelector('.card'); if (!head || head.querySelector('.tabs')) return;
  var d = h('details', { class:'card ohead' }), sm = h('summary', {}, [h('b', { text:client(o.cid).name || 'Клиент не указан' }), h('span', { class:'pill ' + (o.status === 'В работе' ? 'g' : o.status === 'Черновик' ? '' : 'y'), text:o.status }), h('span', { text:[o.prorab ? 'прораб ' + crewName(o.prorab) : '', o.end ? 'сдача ' + fdate(o.end) : ''].filter(Boolean).join(' · ') }), ic('chev')]), inner = h('div', { class:'oin' });
  while (head.firstChild) inner.appendChild(head.firstChild); d.appendChild(sm); d.appendChild(inner); if (window.innerWidth > 860 && !uiGet().ohead) d.open = true; d.ontoggle = function(){ if (window.innerWidth > 860) uiSet('ohead', d.open ? 0 : 1); }; head.replaceWith(d); };

/* ================= запуск ================= */
renderNav();
try { if (JSON.parse(localStorage.getItem('dproUI') || '{}').dark) document.documentElement.classList.add('dark'); } catch(e){}
var hs = (location.hash || '').slice(1).split(':'); go(V[hs[0]] ? hs[0] : 'home', hs[1] || null);
})();
