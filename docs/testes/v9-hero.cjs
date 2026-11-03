// V9: verificações da abertura (hero). Uso: node docs/testes/v9-hero.cjs [url]
const {chromium}=require('playwright');
const url=process.argv[2]||'http://localhost:5500/';const res=[];const ok=(v,l)=>{res.push({pass:!!v,label:l});if(!v)console.log('FAIL',l)};
const PROIBIDAS=/transformação digital|soluções inovadoras|desperte o potencial|alavancar|parceiro estratégico|outro patamar|performance máxima|solução ideal|esqueça suas preocupações|garantid|ROI|leads? por|mais vendas/i;
(async()=>{const b=await chromium.launch();
for(const w of [320,360,375,390,430,768,1024,1280,1440]){const h={320:568,360:800,375:667,390:844,430:932,768:1024}[w]||900;
 const p=await b.newPage({viewport:{width:w,height:h},reducedMotion:'reduce'});const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto(url);
 const r=await p.evaluate(()=>{const s=document.getElementById('inicio'),h1=document.getElementById('t-hero'),pr=[...s.querySelectorAll('.prices a')];
  const hb=h1.getBoundingClientRect(),wide=[...s.querySelectorAll('*')].some(e=>e.getBoundingClientRect().right>innerWidth+1);
  return {h1:h1.textContent.replace(/\s+/g,' ').trim(),em:h1.querySelector('.hero-em')?.textContent,txt:s.innerText,img:s.querySelectorAll('img').length,
   prices:pr.map(a=>a.innerText.replace(/\s+/g,' ').trim()),hrefs:pr.map(a=>a.getAttribute('href')).concat([...s.querySelectorAll('.hero-next a')].map(a=>a.getAttribute('href'))),
   end:Math.max(...pr.map(a=>a.getBoundingClientRect().bottom)),h1cut:h1.scrollWidth>h1.clientWidth+1||hb.right>innerWidth,wide,ovf:document.documentElement.scrollWidth-innerWidth,
   tap:[...s.querySelectorAll('a')].every(a=>a.getBoundingClientRect().height>=44),brand:document.querySelector('.top .brand img')?.getBoundingClientRect().width,
   heroH:s.getBoundingClientRect().height}});
 const pre=`[${w}x${h}] `;
 ok(r.h1==='A Real Polar está crescendo. O marketing precisa acompanhar.'&&r.em==='O marketing precisa acompanhar.',pre+'AC01 título: crescimento + marketing precisa acompanhar, com destaque editorial na segunda frase');
 ok(/planejar conteúdos/.test(r.txt)&&/gerir anúncios/.test(r.txt)&&/coordenar fornecedores/.test(r.txt)&&/conforme o plano/.test(r.txt),pre+'AC02–AC04 explica o que a equipe assume, conforme o plano');
 ok(/não precisa .* sozinho/.test(r.txt)&&/aprova o necessário/.test(r.txt)&&/operação e nas decisões da empresa/.test(r.txt),pre+'AC03/AC05 empresário deixa de gerir sozinho, aprova e foca na operação e nas decisões');
 ok(!PROIBIDAS.test(r.txt)&&!/atendimento comercial|orçamentos técnicos|captação.*inclu|freelanc/i.test(r.txt)&&!/\bIA\b/.test(r.txt),pre+'AC06–AC09 sem promessa, sem assumir operação comercial, sem audiovisual incluído, sem comparação depreciativa');
 ok(r.img===0&&r.brand>0&&r.brand<=40,pre+'AC11/AC12 sem logo na abertura; marca compacta no cabeçalho');
 ok(r.prices.join('|')==='Econômico R$ 1.280 / mês|Essencial R$ 2.100 / mês|Presença Ampliada R$ 3.200 / mês',pre+'AC15 preços intactos');
 ok(r.hrefs.join(',')==='#plano-E,#plano-S,#plano-A,#planos,#servicos'&&r.tap,pre+'AC16 âncoras preservadas, alvos de 44px ou mais');
 ok(!r.h1cut&&!r.wide&&r.ovf<=0,pre+'AC18 título inteiro, sem rolagem lateral');
 if(w>=360)ok(r.end<=h,pre+`preços na primeira tela (fim em ${Math.round(r.end)}px de ${h}px)`);
 ok(errs.length===0,pre+'sem erros de script');
 if(w===390||w===1280){await p.focus('.hero-next a');ok(await p.evaluate(()=>getComputedStyle(document.activeElement).outlineStyle!=='none'),pre+'foco visível nos links da abertura');
  await p.click('.hero-next a[href="#planos"]');await p.waitForTimeout(300);ok(await p.evaluate(()=>{const t=document.getElementById('planos').getBoundingClientRect().top;return t>=0&&t<130}),pre+'"Ver os planos" leva à seção de planos sem esconder o título')}
 await p.close()}
for(const z of [125,200]){const p=await b.newPage({viewport:{width:360,height:640},reducedMotion:'reduce'});await p.goto(url);await p.evaluate(z=>document.documentElement.style.fontSize=z+'%',z);await p.waitForTimeout(150);
 ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&![...document.querySelectorAll('#inicio *')].some(e=>e.getBoundingClientRect().right>innerWidth+1)),`[360 fonte ${z}%] abertura sem corte nem rolagem lateral`);await p.close()}
for(const [w,h] of [[568,320],[844,390]]){const p=await b.newPage({viewport:{width:w,height:h},reducedMotion:'reduce'});await p.goto(url);ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`[${w}x${h} paisagem] abertura sem rolagem lateral`);await p.close()}
{const p=await b.newPage({viewport:{width:390,height:844},javaScriptEnabled:false});await p.goto(url);ok(await p.evaluate(()=>{const h=document.getElementById('t-hero');return getComputedStyle(h).opacity==='1'&&document.querySelectorAll('#inicio .prices a').length===3}),'[sem JS] título e preços visíveis');await p.close()}
{const p=await b.newPage({viewport:{width:1280,height:900}});await p.goto(url);await p.emulateMedia({media:'print'});ok(await p.evaluate(()=>document.getElementById('t-hero').getClientRects().length>0&&!document.querySelector('.hero-next').getClientRects().length&&document.querySelectorAll('#inicio .prices a').length===3),'[impressão] título e preços impressos; links de navegação ocultos');await p.close()}
{const p=await b.newPage({viewport:{width:390,height:844}});await p.goto(url);await p.waitForTimeout(900);ok(await p.evaluate(()=>[...document.querySelectorAll('#inicio [data-reveal]')].every(e=>getComputedStyle(e).opacity==='1')),'[movimento normal] abertura totalmente visível sem rolar');await p.close()}
await b.close();const f=res.filter(r=>!r.pass);console.log(JSON.stringify({total:res.length,passed:res.length-f.length,failed:f.map(x=>x.label)}))})();
