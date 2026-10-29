(()=>{
const WA='917760287733';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const con=navigator.connection||{};const touch=matchMedia('(pointer:coarse)').matches;const lite=con.saveData||/2g/.test(con.effectiveType||'')||(navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<2;
if(lite)document.documentElement.classList.add('lite');
if(reduce)document.documentElement.classList.add('reduced');
const ss={get:k=>{try{return sessionStorage.getItem(k)}catch(e){return null}},set:k=>{try{sessionStorage.setItem(k,'1')}catch(e){}}};
// shared modal + floating UI
document.body.insertAdjacentHTML('beforeend',`
<button class="vtab" data-lead="Site visit">Schedule a visit</button>
<a class="wafab" href="#" data-wa aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 000-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg></a>
<div class="mbar"><a href="tel:+917760287733"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>Call</a><a class="wa" href="#" data-wa>WhatsApp</a><button class="pr" data-lead="Price sheet">Price sheet</button></div>
<div class="modal" id="modal" role="dialog" aria-modal="true" aria-label="Enquiry"><div class="box">
<button class="x" data-close aria-label="Close">×</button>
<div class="side"><img src="r_poolwalk.webp" alt=""><span class="chip" style="align-self:flex-start;margin-bottom:14px"><i></i>EOI open</span><h4 id="mtitle">Get the Phase 2 price sheet</h4><ul><li>Cost sheet &amp; price breakup</li><li>Floor plans with dimensions</li><li>Free site visit or live video tour</li><li>Priority EOI with ₹1 Lakh</li></ul></div>
<form class="card f leadform"><h3>Get the <em>latest price</em></h3><p class="s">We reply on WhatsApp within minutes.</p>
<label>Full name<input name="name" autocomplete="name" placeholder="Your name"></label>
<label>Mobile / WhatsApp<div class="ph"><select name="cc" aria-label="Country code"></select><input name="phone" inputmode="tel" placeholder="Mobile number"></div></label>
<label>Looking for<div class="pills"><button type="button" class="on">2 BHK</button><button type="button">3 BHK</button><button type="button">Not sure</button></div></label>
<input type="hidden" name="want" value="Price sheet"><button class="btn btn-or" type="submit">Send on WhatsApp</button><p class="note">No spam · we use your details only to contact you about this project</p></form></div></div>
<div class="lb" id="lb"><button class="x" aria-label="Close">×</button><button class="nv pv" aria-label="Previous">‹</button><img alt=""><button class="nv nx" aria-label="Next">›</button><p></p></div>
<div class="toast" id="toast"></div>`);
const CC=[['🇮🇳 +91','91'],['🇦🇪 +971','971'],['🇸🇦 +966','966'],['🇶🇦 +974','974'],['🇰🇼 +965','965'],['🇴🇲 +968','968'],['🇧🇭 +973','973'],['🇸🇬 +65','65'],['🇺🇸 +1','1'],['🇬🇧 +44','44'],['🇦🇺 +61','61'],['🇩🇪 +49','49'],['🇳🇿 +64','64'],['🇲🇾 +60','60']];
$$('select[name=cc]').forEach(s=>CC.forEach(([l,v])=>s.add(new Option(l,v))));
$$('[data-wa]').forEach(a=>{a.href=wa('Hi GX Properties, I am interested in Godrej Barça Phase 2 at Godrej MSR City. Please share details.');a.target='_blank';a.rel='noopener'});
$$('.pills').forEach(p=>p.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',p).forEach(x=>x.classList.remove('on'));b.classList.add('on')}));
const modal=$('#modal');
const T={'Site visit':'Book your free site visit','Live video tour':'Book a live video tour','Start EOI':'Start your ₹1 Lakh EOI'};
window.openLead=(want='Price sheet',cfg='')=>{
  $('#mtitle').textContent=T[want]||('Get the '+want.toLowerCase()+(cfg?' · '+cfg:''));
  $('input[name=want]',modal).value=want+(cfg?' — '+cfg:'');
  if(cfg){const w=cfg.startsWith('3')?'3 BHK':'2 BHK';$$('.pills button',modal).forEach(b=>b.classList.toggle('on',b.textContent===w))}
  modal.classList.add('open');ss.set('popped');setTimeout(()=>$('input[name=name]',modal).focus({preventScroll:true}),350)};
const closeLead=()=>modal.classList.remove('open');
document.addEventListener('click',e=>{const t=e.target.closest('[data-lead]');if(t){e.preventDefault();openLead(t.dataset.lead,t.dataset.cfg||'')}
  if(e.target===modal||e.target.closest('[data-close]'))closeLead()});
let auto=!!ss.get('popped');const pop=()=>{if(auto||modal.classList.contains('open'))return;auto=true;openLead('Price sheet')};
setTimeout(pop,20000);
addEventListener('scroll',()=>{if(scrollY/(document.body.scrollHeight-innerHeight)>.55)pop()},{passive:true});
document.addEventListener('mouseout',e=>{if(!e.relatedTarget&&e.clientY<5)pop()});
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2600)};
$$('.leadform').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
  const n=f.name.value.trim(),p=f.phone.value.replace(/\D/g,'');[f.name,f.phone].forEach(x=>x.classList.remove('err'));
  if(n.length<2){f.name.classList.add('err');f.name.focus();toast('Please enter your name');return}
  if(p.length<7){f.phone.classList.add('err');f.phone.focus();toast('Please enter a valid mobile number');return}
  const cfg=($('.pills .on',f)||{}).textContent||'';const want=f.want?f.want.value:'Price sheet';
  const L=['Hi GX Properties, I am interested in Godrej Barça Phase 2 (Godrej MSR City).','Name: '+n,'Mobile: +'+f.cc.value+' '+p,'Looking for: '+cfg];
  if(f.budget)L.push('Budget: '+f.budget.value);L.push('I want: '+want);if(f.cc.value!=='91')L.push('(NRI enquiry)');L.push('Page: '+document.title.split('|')[0].trim());
  try{window.GX&&GX.lead({name:n,phone:'+'+f.cc.value+' '+p,config:cfg,budget:f.budget?f.budget.value:'',want,page:location.pathname})}catch(e){}
  const a=document.createElement('a');a.href=wa(L.join('\n'));a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();toast('Opening WhatsApp…');closeLead()}));
// lightbox
const lb=$('#lb'),lbi=$('img',lb),lbp=$('p',lb);let li=0,set=[];
window.openLb=(s,i)=>{set=s;li=i;lbi.src=s[i][0];lbp.textContent=s[i][1];lb.classList.add('open');$$('.nv',lb).forEach(b=>b.style.display=s.length>1?'':'none')};
const closeLb=()=>lb.classList.remove('open');
lb.addEventListener('click',e=>{if(e.target.closest('.pv'))openLb(set,(li-1+set.length)%set.length);else if(e.target.closest('.nx'))openLb(set,(li+1)%set.length);else if(e.target!==lbi)closeLb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLead();closeLb()}});
// nav
const nav=$('#nav');if(nav&&!nav.classList.contains('light')){const onS=()=>nav.classList.toggle('solid',scrollY>innerHeight*.6);addEventListener('scroll',onS,{passive:true});onS()}
// hero video: pick HD source for screen shape
const hv=$('#hv');if(hv){const tall=innerWidth<innerHeight&&innerWidth<900;hv.poster=tall?'hero_m.jpg':'hero.jpg';hv.src=tall?'hero_m.mp4':'hero.mp4';
  const po=$('.hero .poster');if(po)po.src=hv.poster;hv.muted=true;hv.play().catch(()=>{});hv.addEventListener('playing',()=>po&&(po.style.opacity=0))}
// lazy videos
const io=new IntersectionObserver(es=>es.forEach(en=>{const v=en.target;if(en.isIntersecting){if(!v.src&&v.dataset.src)v.src=v.dataset.src;v.play().catch(()=>{})}else v.pause()}),{rootMargin:'200px'});
$$('video[data-src]').forEach(v=>io.observe(v));

// ---------- onboarding intro (index only, once per session) ----------
if(document.body.dataset.intro&&!ss.get('intro')&&!reduce&&!lite){ss.set('intro');
  const C=['#E8602A','#B0336A','#6FAE3A','#0B7DB0','#F2A33A','#9C4A2E'];const N=innerWidth<700?48:96;
  const o=document.createElement('div');o.className='intro';o.innerHTML=`<div class="ig">${Array.from({length:N},()=>`<i style="--c:${C[Math.random()*C.length|0]};--d:${(Math.random()*.5).toFixed(2)}s;--x:${(Math.random()*200-100)|0}px;--y:${(Math.random()*200-100)|0}px;--r:${(Math.random()*180-90)|0}deg"></i>`).join('')}</div><div class="ilogo"><div class="igx"><img src="gx_emblem_dark.webp" alt=""><b>GX PROPERTIES</b><small>presents</small></div><img class="ib" src="logo_barca.png" alt=""><span>Phase 2 · EOI now open</span></div><button class="iskip">Skip</button>`;
  document.body.appendChild(o);document.documentElement.style.overflow='hidden';
  const end=()=>{if(o.classList.contains('out'))return;o.classList.add('out');document.documentElement.style.overflow='';setTimeout(()=>o.remove(),900)};
  o.querySelector('.iskip').onclick=end;setTimeout(end,2900)}
// ---------- "Find my home" 3-tap onboarding ----------
const FQ=[['Who is it for?',['Just me / couple','Family with kids','Parents & family','Investment']],['Your budget?',['Up to ₹1.8 Cr','₹1.8 – 2.4 Cr','₹2.4 – 2.8 Cr','₹2.8 Cr +']],['Where do you live now?',['Bengaluru','Elsewhere in India','Outside India (NRI)']]];
const FR=[['2 BHK Classic','~1,200 sq ft','1.59'],['2 BHK Luxe','~1,350 sq ft','1.79'],['3 BHK Premium','~1,750 sq ft','2.32'],['3 BHK Grand','~1,930 sq ft','2.56'],['3 BHK Luxe','~2,275 sq ft','2.99']];
document.body.insertAdjacentHTML('beforeend','<div class="modal finder" id="finder"><div class="fbox"><button class="x" data-fclose aria-label="Close">×</button><div class="fprog"><i></i></div><div class="fbody"></div></div></div>');
const fm=$('#finder'),fb=$('.fbody',fm);let fa=[];
const fstep=k=>{$('.fprog i',fm).style.width=(k/3*100)+'%';
  if(k<3){fb.innerHTML=`<small>Step ${k+1} of 3</small><h3>${FQ[k][0]}</h3><div class="fopts">${FQ[k][1].map((t,i)=>`<button data-i="${i}">${t}</button>`).join('')}</div>`;
    $$('.fopts button',fb).forEach(b=>b.onclick=()=>{fa[k]=+b.dataset.i;fb.classList.add('swap');setTimeout(()=>{fb.classList.remove('swap');fstep(k+1)},220)});return}
  let i=[0,1,3,4][fa[1]];if(fa[0]===0&&i>1)i=Math.max(1,i-1);if((fa[0]===1||fa[0]===2)&&i<2&&fa[1]>0)i=2;const r=FR[i];const nri=fa[2]===2;
  fb.innerHTML=`<small>Your best match</small><h3>${r[0]}</h3><div class="fres"><div><b>${r[1]}</b><span>approx. size</span></div><div><b>₹${r[2]} Cr*</b><span>starting price</span></div><div><b>₹1 Lakh</b><span>EOI</span></div></div>
   <p class="s">${fa[0]===3?'Phase 2 launch pricing with priority unit selection — a strong entry point for investors.':nri?'We\'ll schedule a live video tour at a time that suits your time zone.':'Bright, spacious and ready for your family at Godrej MSR City.'}</p>
   <div class="fcta"><button class="btn btn-or" data-lead="${nri?'Live video tour':'Cost sheet'}" data-cfg="${r[0]}">${nri?'Book live video tour':'Get cost sheet'}</button><a class="btn btn-line" href="${r[0].toLowerCase().replace(/ /g,'-')}.html">See this layout</a></div>`;
  try{window.GX&&GX.event('finder',{answers:fa.join('-'),match:r[0]})}catch(e){}};
document.addEventListener('click',e=>{if(e.target.closest('[data-finder]')){e.preventDefault();fa=[];fstep(0);fm.classList.add('open')}
  if(e.target===fm||e.target.closest('[data-fclose]')||(e.target.closest('#finder [data-lead]')))fm.classList.remove('open')});
// ---------- EMI calculator ----------
const cH=$('#cHome');if(cH){const inr=v=>'₹'+Math.round(v).toLocaleString('en-IN');const L=v=>v>=1e7?'₹'+(v/1e7).toFixed(2)+' Cr':'₹'+(v/1e5).toFixed(1)+' L';
  const calc=()=>{const P=+cH.value,dp=+$('#cDp').value,r=+$('#cRate').value/1200,n=+$('#cYrs').value*12,loan=P*(1-dp/100),emi=loan*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    $('#vDp').textContent=dp+'%';$('#vRate').textContent=(+$('#cRate').value).toFixed(2)+'%';$('#vYrs').textContent=$('#cYrs').value+' years';
    $('#oEmi').textContent=inr(emi)+'/mo';$('#oLoan').textContent=L(loan);$('#oDown').textContent=L(P-loan);$('#oInt').textContent=L(emi*n-loan)};
  ['cHome','cDp','cRate','cYrs'].forEach(id=>$('#'+id).addEventListener('input',calc));calc()}
// ---------- analytics hook (filled by admin backend when configured) ----------
try{window.GX&&GX.visit()}catch(e){}
// motion
if(window.gsap&&!reduce){gsap.registerPlugin(ScrollTrigger);
  // split hero headline into words for a masked rise
  const h1=$('.hero h1');if(h1){h1.innerHTML=h1.innerHTML.split(/(<[^>]+>|\s+)/).map(t=>!t||/^</.test(t)||/^\s+$/.test(t)?t:`<span class="w"><span>${t}</span></span>`).join('')}
  // Gaudí trencadís tiles that break away to reveal each arch / feature image
  if(!lite){const C=['#E8602A','#B0336A','#6FAE3A','#0B7DB0','#F2A33A','#9C4A2E'];
    $$('.arch,.amimg,.gal figure:nth-child(1),.gal figure:nth-child(2),.eoiban').forEach(el=>{const t=document.createElement('div');t.className='tiles';
      t.innerHTML=Array.from({length:48},()=>`<i style="--c:${C[Math.random()*C.length|0]}"></i>`).join('');el.appendChild(t);
      ScrollTrigger.create({trigger:el,start:'top 82%',once:true,onEnter:()=>gsap.to(t.children,{scale:0,rotate:()=>gsap.utils.random(-60,60),opacity:0,duration:.7,ease:'power3.in',stagger:{each:.012,from:'random'},onComplete:()=>t.remove()})})})}
  if(!lite&&!touch)try{const lenis=new Lenis({lerp:.1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1&&$(id)){e.preventDefault();lenis.scrollTo(id,{offset:-70})}}))}catch(e){}
  if($('.hero')){gsap.from('.hero h1 .w>span',{yPercent:110,duration:1.2,ease:'expo.out',stagger:.05,delay:.3});gsap.from('.hero .chip,.hero .logo,.hero .sub,.hero .facts,.hero .ctas',{y:40,opacity:0,duration:1.2,ease:'expo.out',stagger:.08,delay:.15});
    gsap.from('.hero .card',{y:60,opacity:0,duration:1.3,ease:'expo.out',delay:.45});
    gsap.to('.hero video,.hero .poster',{scale:1.1,yPercent:7,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}})}
  $$('.eyebrow').forEach(e=>ScrollTrigger.create({trigger:e,start:'top 92%',once:true,onEnter:()=>e.classList.add('in')}));
  ScrollTrigger.batch('.rv',{start:'top 88%',onEnter:b=>gsap.to(b,{opacity:1,y:0,duration:1.1,ease:'expo.out',stagger:.08,overwrite:true})});
  if(!lite)$$('.arch img,.arch video').forEach(c=>gsap.fromTo(c,{scale:1.18},{scale:1,ease:'none',scrollTrigger:{trigger:c,start:'top bottom',end:'bottom top',scrub:true}}));
  $$('[data-count]').forEach(el=>{const to=+el.dataset.count,o={v:0};ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.to(o,{v:to,duration:1.8,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v).toLocaleString('en-IN')})})});
  const tr=$('#track');if(tr){gsap.matchMedia().add('(min-width:821px)',()=>{const d=()=>tr.scrollWidth-innerWidth+40;
    gsap.to(tr,{x:()=>-d(),ease:'none',scrollTrigger:{trigger:'#inside',start:'top top',end:()=>'+='+d(),pin:true,scrub:1,invalidateOnRefresh:true,onUpdate:s=>{const p=$('#progbar');if(p)p.style.width=(s.progress*100)+'%'}}})})}
  addEventListener('load',()=>ScrollTrigger.refresh());
}else $$('.rv').forEach(e=>{e.style.opacity=1;e.style.transform='none'});
})();
