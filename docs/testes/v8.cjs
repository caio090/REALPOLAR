const {chromium}=require('playwright');const fs=require('fs');
const path=require('path');const out=process.argv[3]||'/tmp/realpolar-v8';fs.mkdirSync(out,{recursive:true});
const url=process.argv[2]||'http://localhost:5500/';const results=[];const ok=(v,label)=>{results.push({pass:!!v,label});if(!v)console.log('FAIL',label)};
(async()=>{const b=await chromium.launch();
for(const w of [320,360,375,390,430,768,1024,1280,1440]){
const ctx=await b.newContext({viewport:{width:w,height:900},reducedMotion:'reduce'});const p=await ctx.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
const check=async(label)=>ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${w} ${label} overflow`);
await check('initial');ok(await p.locator('.top img, .hero img, .brand').count()===0&&await p.locator('#nav a').count()===6,`${w} logo (V10: sem marca no cabeçalho nem na abertura; navegação mantida)`);
ok(await p.locator('[data-mm-plan]').count()===3&&await p.getAttribute('[data-mm-plan="A"]','aria-pressed')==='true',`${w} filter three / default A`);
ok(await p.locator('#noventa .conv,[data-goal]').count()===0&&await p.locator('.faq details').count()===4,`${w} editorial`);
ok(await p.evaluate(()=>[...document.querySelectorAll('main>section')].map(s=>s.id).join(',')==='inicio,planos,servicos,audiovisual,noventa,acompanhamento,investimento,resumo,proximo'),`${w} order`);
const total=await p.textContent('#oTotal');
for(const k of ['E','S','A']){
const show=p.locator(`[data-show="${k}"]`);if(await show.isVisible())await show.click();
const toggle=p.locator(`#plano-${k} .plan-toggle`);await toggle.focus();await p.keyboard.press('Enter');
ok(await toggle.getAttribute('aria-expanded')==='true'&&await p.locator(`#plan-more-${k}`).isVisible(),`${w} ${k} expand enter`);
ok(await p.textContent('#oTotal')===total,`${w} ${k} card doesn't change sim`);
ok(await p.evaluate(k=>{const c=document.querySelector('#plano-'+k),i=['E','S','A'].indexOf(k);const expected=[...document.querySelectorAll('#cmp tbody[data-group="mensalidade"] tr[data-id]')].filter(r=>r.querySelectorAll('td')[i].dataset.st!=='fora').map(r=>r.dataset.id).sort();const actual=[...c.querySelectorAll('.svc-btn')].map(x=>x.dataset.open).sort();return JSON.stringify(actual)===JSON.stringify(expected)},k),`${w} ${k} source equality`);
await check(k+' expanded');
await toggle.focus();await p.keyboard.press('Space');ok(await toggle.getAttribute('aria-expanded')==='false'&&await p.locator(`#plan-more-${k}`).isHidden(),`${w} ${k} collapse space`);
await p.locator(`#plano-${k} .svc-btn`).first().click();ok(await p.locator('#sheet').evaluate(x=>x.open),`${w} ${k} dialog`);
for(const plan of ['E','S','A'])await p.locator(`[data-mplan="${plan}"]`).click();
ok(await p.textContent('#oTotal')===total,`${w} ${k} dialog doesn't change sim`);
await p.keyboard.press('Escape');ok(await p.evaluate(k=>document.activeElement.matches('#plano-'+k+' .svc-btn'),k),`${w} ${k} focus restored`);
await p.locator(`[data-mm-plan="${k}"]`).click();ok(await p.textContent('#oTotal')===total,`${w} ${k} filter independent`);
}
ok(await p.evaluate(()=>{const a=[...document.querySelectorAll('[id]')].map(x=>x.id);return new Set(a).size===a.length}),`${w} unique IDs`);
if(w<=768){await p.locator('#navToggle').click();await p.keyboard.press('Escape');ok(await p.getAttribute('#navToggle','aria-expanded')==='false',`${w} menu escape`)}
// Complete popup content scan, at each viewport, preserving distinct plan content.
await p.locator('.mm-node').first().click();
const scan=await p.evaluate(()=>{let good=true,count=0;const d=document.querySelector('#sheet');while(!document.querySelector('#mPrev').disabled)document.querySelector('#mPrev').click();do{const contents=[];for(const k of ['E','S','A']){document.querySelector(`[data-mplan="${k}"]`).click();for(const t of ['receb','como','lim','cmp']){document.querySelector('#mt-'+t).click();const body=document.querySelector('#mBody');good=good&&body.innerText.length>10&&!/undefined|NaN|\[object/.test(body.innerText);count++;if(t==='receb')contents.push(body.innerText)}}good=good&&new Set(contents).size===3;if(document.querySelector('#mNext').disabled)break;document.querySelector('#mNext').click()}while(true);return {good,count}});
ok(scan.good&&scan.count===216,`${w} 18x3x4 popup states`);await check('popup');await p.keyboard.press('Escape');
ok(errors.length===0,`${w} no JS errors`);await ctx.close();}
const ctx=await b.newContext({viewport:{width:1280,height:900},permissions:['clipboard-read','clipboard-write'],reducedMotion:'reduce'});const p=await ctx.newPage();await p.goto(url);
const oracle=await p.evaluate(()=>{let count=0;for(const plan of ['E','S','A'])for(const daily of [0,15,25,50])for(const days of [0,15,30])for(const shoots of [0,1,2])for(const editQty of [0,1,2,3,10,50]){const r=RealPolarSim.calc({plan,daily,days,shoots,shootPrice:1200,editQty});if(r.total!==({E:1280,S:2100,A:3200}[plan]+daily*days+shoots*1200+(plan==='E'?editQty*180:0)))return {pass:false,count};count++}return {pass:true,count}});ok(oracle.pass,'oracle '+oracle.count+' combinations');
for(const [plan,qty,total] of [['E',0,1280],['E',1,1460],['E',2,1640],['E',3,1820],['E',10,3080],['E',50,10280],['S',50,2100],['A',50,3200]]){await p.locator(`.planpick [data-plan="${plan}"]`).click();for(const [id,v] of [['sDaily',0],['sDays',30],['sShoots',0]])await p.locator('#'+id).fill(String(v));if(plan==='E')await p.locator('#sEditQty').fill(String(qty));await p.locator('#copySummary').click();const copied=await p.evaluate(()=>navigator.clipboard.readText());const money=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(total);ok((await p.textContent('#oTotal')).includes(money)&&copied.includes(money),`${plan}/${qty} UI receipt copied ${total}`);}
await p.locator('.planpick [data-plan="E"]').click();ok(await p.inputValue('#sEditQty')==='50','restores quantity');await p.locator('#sEditQty').fill('999');await p.locator('#sEditQty').blur();ok(await p.inputValue('#sEditQty')==='50','quantity clamp');
for(const id of ['S05','S06'])ok(await p.locator(`[data-id="${id}"] td`).nth(2).getAttribute('data-st')==='incluido',id+' A confirmed');
ok(await p.locator('#cmp').textContent().then(t=>!/Meta Ads.*ainda a confirmar|se a gestão de Meta Ads for confirmada|Nenhuma campanha confirmada/.test(t)),'Meta Ads consistent across services, fee, ad budget');
// Regressão da correção pontual: verificar também a célula-resumo, usada em comparativos dinâmicos.
const x01=await p.locator('[data-id="X01"] td').nth(2).textContent();
ok(x01.includes('Gestão de Meta Ads incluída na mensalidade')&&x01.includes('verba dos anúncios paga separadamente à Meta')&&!/confirm/i.test(x01),'X01 A: gestão incluída, mídia separada, sem confirmação indevida');
ok(await p.evaluate(()=>{const css=document.querySelector('style').textContent;return !css.includes('--silver-500')&&getComputedStyle(document.documentElement).getPropertyValue('--silver-700').trim()==='#4a5a66'}),'neutral marker uses defined silver token');
await p.locator('.planpick [data-plan="A"]').click();await p.locator('#copySummary').click();
const summary=await p.evaluate(()=>navigator.clipboard.readText());const amplified=summary.split('PRESENÇA AMPLIADA:')[1].split('FORA DA MENSALIDADE:')[0];
ok(amplified.includes('Gestão de anúncios Meta Ads')&&amplified.includes('Google Meu Negócio')&&!/Meta Ads[^\n]*confirm|Google Meu Negócio[^\n]*confirm/i.test(amplified),'copied A summary includes Meta Ads and Google without pending status');
for(const k of ['E','S','A']){await p.locator(`#plano-${k} [data-pick]`).click();ok((await p.textContent('#oPlan'))===({E:'Econômico',S:'Essencial',A:'Presença Ampliada'}[k]),k+' simulate CTA selects plan')}
await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(100);ok(await p.locator('#progress').evaluate(x=>Number(x.style.getPropertyValue('--p'))===0),'progress 0');
await p.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));await p.waitForTimeout(100);ok(await p.locator('#progress').evaluate(x=>Number(x.style.getPropertyValue('--p'))>=.999),'progress 100');
await p.locator('#v-cmp').click();ok(await p.locator('#cmp').isVisible(),'side by side comparison');await p.locator('#v-map').click();ok(await p.locator('#mmSvg path').count()===11,'map connectors preserved');
await p.emulateMedia({media:'print'});ok(await p.locator('.plan').count()===3&&await p.locator('#resumo').isVisible(),'print plans and summary');await p.pdf({path:path.join(out,'v8.pdf')});await ctx.close();
for(const [width,height,scale] of [[568,320,1],[844,390,1],[390,844,1.25],[390,844,2],[720,450,1]]){const p=await b.newPage({viewport:{width,height},reducedMotion:'reduce'});await p.goto(url);await p.evaluate(s=>document.documentElement.style.fontSize=s*100+'%',scale);ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}x${height} font ${scale} no overflow`);await p.locator('.mm-node').first().click();ok(await p.locator('#mClose').isVisible()&&await p.evaluate(()=>document.querySelector('#sheet').getBoundingClientRect().right<=innerWidth),`${width}x${height} font ${scale} modal reachable`);await p.close()}
const nojs=await b.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.goto(url);ok(await nojs.locator('#cmp').isVisible()&&await nojs.locator('#cmp [data-plan-detail]').count()===54&&await nojs.locator('#resumo').isVisible(),'no JS source, summaries');await b.close();fs.writeFileSync(path.join(out,'v8-results.json'),JSON.stringify({oracle,results},null,2));console.log(JSON.stringify({total:results.length,passed:results.filter(x=>x.pass).length,failed:results.filter(x=>!x.pass),oracle}));if(results.some(x=>!x.pass))process.exitCode=1;})().catch(e=>{console.error(e);process.exit(1)});
