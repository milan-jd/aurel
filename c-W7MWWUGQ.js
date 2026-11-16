import{a as b,b as c}from"./c-KCCCT6ND.js";var f=[.86,1,1.1];function L(a,{p:t,size:g=1,eng:h=""}){a.innerHTML=`<div class="spin" tabindex="0" aria-label="${t.no} ${t.name} bottle. Double-click to zoom.">
    <div class="sp-floor"></div>
    <div class="sp-size" style="--s:${f[g]}">
      <div class="sp-shadow" style="top:${t.base-3.5}%"></div>
      <div class="sp-obj">
        <img src="${t.cut}" alt="${t.no} ${t.name} bottle" draggable="false">
        <div class="sp-glare" style="-webkit-mask-image:url(${t.cut});mask-image:url(${t.cut})"></div>
        <div class="sp-eng" style="left:${t.lbl.x}%;top:${t.lbl.y}%;width:${t.lbl.w}%;--sk:${t.lbl.sk||0}deg"></div>
      </div>
    </div>
    <div class="sp-zoom" style="background-image:url(${t.img})"></div>
  </div>`;let s=a.firstElementChild,d=s.querySelector(".sp-obj"),$=s.querySelector(".sp-size"),l=s.querySelector(".sp-eng"),p=s.querySelector(".sp-zoom");b(d,{shadow:s.querySelector(".sp-shadow"),zone:s,lift:18,lean:6,origin:`50% ${t.base}%`});let m=g,i=!1,u=e=>{l.textContent=e,l.classList.toggle("on",!!e),l.classList.remove("pulse"),l.offsetWidth,l.classList.add("pulse")};u(h);let v=e=>{let o=s.getBoundingClientRect();p.style.backgroundPosition=`${Math.min(100,Math.max(0,(e.clientX-o.left)/o.width*100))}% ${Math.min(100,Math.max(0,(e.clientY-o.top)/o.height*100))}%`},n=e=>{i=!i,s.classList.toggle("zoomed",i),i&&e&&v(e)};s.addEventListener("dblclick",n),s.addEventListener("pointermove",e=>{i&&v(e)}),s.addEventListener("pointerleave",()=>{i&&n()}),s.addEventListener("keydown",e=>{e.key==="Enter"&&n()});let r=0;return s.addEventListener("touchend",e=>{let o=performance.now();o-r<300?(e.preventDefault(),n(e.changedTouches[0]),r=0):r=o}),{set({size:e,eng:o}){e!=null&&e!==m&&(m=e,$.style.setProperty("--s",f[e]),c(d,.8)),o!=null&&o!==l.textContent&&(u(o),c(d,.35))},dispose(){a.innerHTML=""}}}export{L as mount};
