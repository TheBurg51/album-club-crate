// Builds preview.png (the image shown when the site link is shared) and refreshes the
// link-preview text in index.html from the page's own data.
// Run from the repo root after updating the albums:  node tools/preview.cjs
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const font = f => 'file://' + path.join(__dirname, 'fonts', f);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.route('**/fonts.googleapis.com/**', r => r.abort());
  await page.route('https://itunes.apple.com/**', r => r.abort());
  await page.goto('file://' + indexPath);
  const d = await page.evaluate(() => ({
    heard: A.length,
    list: L.length,
    weeks,
    lastWeek,
    nextWeek: NEXT[0].w,
    next: NEXT.map(x => [x.t, x.a]),
    bonus: BONUS.map(x => [x.t, x.a, x.hol]),
    ranks: L.filter(x => x.r).map(x => [x.r, x.w === lastWeek ? 1 : 0]),
    nextRanks: [...NEXT, ...BONUS].filter(x => x.r).map(x => x.r),
    snt: NOWP,
    sntMonth: mon(0).split(' ')[0],
  }));
  const pct = (d.list / 5).toFixed(1);

  const lit = new Map(d.ranks);
  const nx = new Set(d.nextRanks);
  let cells = '';
  for (let i = 1; i <= 500; i++) {
    cells += `<i class="${lit.has(i) ? (lit.get(i) ? 'r' : 'h') : nx.has(i) ? 'n' : ''}"></i>`;
  }
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(`<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:BS;src:url("${font('Fraunces.ttf')}");font-weight:100 900}
@font-face{font-family:IS;src:url("${font('InstrumentSans.ttf')}");font-weight:400 700}
@font-face{font-family:PM;src:url("${font('IBMPlexMono-Medium.ttf')}")}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#f5ede0;color:#2b211a;font-family:IS;display:grid;grid-template-columns:1fr 540px;gap:44px;padding:56px 60px;overflow:hidden}
.ey{font-family:PM;font-size:16px;white-space:nowrap;letter-spacing:.12em;text-transform:uppercase;color:#7a6858}
h1{font-family:BS;font-weight:700;font-size:112px;line-height:.92;letter-spacing:-.02em;margin:16px 0 24px;font-variation-settings:"SOFT" 60}
.stats{display:flex;gap:34px}
.stats b{display:block;font-family:BS;font-weight:700;font-size:58px;line-height:1}
.stats span{font-size:18px;color:#7a6858}
.up{margin-top:30px;background:#fffaf3;border:1px solid #e6d8c5;border-radius:8px;padding:16px 20px}
.up .ey{font-size:14px;color:#c4552a}
.up p{font-size:22px;font-weight:600;line-height:1.3;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.up p small{font-weight:400;color:#7a6858;font-size:20px}
.right{position:relative;align-self:center}
.g{display:grid;grid-template-columns:repeat(25,1fr);gap:3px;background:#fffaf3;border:1px solid #e6d8c5;border-radius:8px;padding:14px}
.g i{aspect-ratio:1;border-radius:2px;background:#ecdfcc}
.g i.h{background:#c4552a}.g i.r{background:#eeb03b}
.g i.n{background:transparent;outline:2px dashed #c4552a;outline-offset:-2px}
.st{position:absolute;right:-22px;top:-40px;width:150px;height:150px;border-radius:50%;background:#eeb03b;display:grid;place-items:center;text-align:center;transform:rotate(9deg);box-shadow:0 3px 0 rgba(0,0,0,.12);font-family:BS;font-weight:700;font-size:46px;line-height:.9}
.st small{display:block;font-family:PM;font-size:13px;letter-spacing:.08em;margin-top:5px}
.foot{margin-top:12px;font-family:PM;font-size:14px;color:#7a6858;display:flex;justify-content:space-between}
</style>
<div>
  <div class="ey">Album of the Week Club · Rolling Stone 500</div>
  <h1>The Crate<br>So Far</h1>
  <div class="stats">
    <div><b>${d.heard}</b><span>albums heard</span></div>
    <div><b>${d.weeks}</b><span>weeks logged</span></div>
    <div><b>${500 - d.list}</b><span>list albums to go</span></div>
  </div>
  <div class="up"><div class="ey">Up next · Week ${d.nextWeek}</div>
    ${d.next.map(([t, a]) => `<p>${esc(t)} <small>${esc(a)}</small></p>`).join('')}
    ${d.bonus.map(([t, a, h]) => `<p>${esc(t)} <small>${esc(a)} · ${esc(h)} bonus</small></p>`).join('')}
  </div>
</div>
<div class="right">
  <div class="g">${cells}</div>
  <div class="foot"><span>#1</span><span>Show &amp; Tell: ${esc(d.snt)} · ${esc(d.sntMonth)}</span><span>#500</span></div>
  <div class="st"><div>${pct}%<small>OF THE 500</small></div></div>
</div>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, 'preview.png') });
  await browser.close();

  const nextText = d.next.map(x => x[0]).join(' and ') + d.bonus.map(x => `, plus ${x[0]} for ${x[2]}`).join('');
  const desc = `${d.heard} albums heard · ${pct}% of the Rolling Stone 500 · Up next: ${nextText}`
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${desc}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${desc}$2`)
    .replace(/(preview\.png\?v=)\d+/, `$1${d.nextWeek}`);
  fs.writeFileSync(indexPath, html);
  console.log(`preview.png written · ${desc}`);
})();
