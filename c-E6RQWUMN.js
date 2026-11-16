import{a as f,b as c}from"./c-KCCCT6ND.js";var b=[.86,1,1.1];function L(a,{p:t,size:g=1,eng:h=""}){a.innerHTML=`<div class="spin" tabindex="0" aria-label="${t.no} ${t.name} bottle. Double-click to zoom.">
    <div class="sp-floor"></div>
    <div class="sp-size" style="--s:${b[g]}">
      <div class="sp-shadow" style="top:${t.base-3.5}%"></div>
      <div class="sp-obj">
        <img src="${t.cut}" alt="${t.no} ${t.name} bottle" draggable="false">
        <div class="sp-glare" style="-webkit-mask-image:url(${t.cut});mask-image:url(${t.cut})"></div>
        <div class="sp-eng" style="left:${t.lbl.x}%;top:${t.lbl.y}%;width:${t.lbl.w}%"></div>
      </div>
    </div>
    <div class="sp-zoom" style="background-image:url(${t.img})"></div>
  </div>`;let s=a.firstElementChild,d=s.querySelector(".sp-obj"),p=s.querySelector(".sp-size"),i=s.querySelector(".sp-eng"),y=s.querySelector(".sp-zoom");f(d,{shadow:s.querySelector(".sp-shadow"),zone:s,lift:18,lean:6,origin:`50% ${t.base}%`});let m=g,l=!1,u=e=>{i.textContent=e,i.classList.toggle("on",!!e),i.classList.remove("pulse"),i.offsetWidth,i.classList.add("pulse")};u(h);let v=e=>{let o=s.getBoundingClientRect();y.style.backgroundPosition=`${Math.min(100,Math.max(0,(e.clientX-o.left)/o.width*100))}% ${Math.min(100,Math.max(0,(e.clientY-o.top)/o.height*100))}%`},n=e=>{l=!l,s.classList.toggle("zoomed",l),l&&e&&v(e)};s.addEventListener("dblclick",n),s.addEventListener("pointermove",e=>{l&&v(e)}),s.addEventListener("pointerleave",()=>{l&&n()}),s.addEventListener("keydown",e=>{e.key==="Enter"&&n()});let r=0;return s.addEventListener("touchend",e=>{let o=performance.now();o-r<300?(e.preventDefault(),n(e.changedTouches[0]),r=0):r=o}),{set({size:e,eng:o}){e!=null&&e!==m&&(m=e,p.style.setProperty("--s",b[e]),c(d,.8)),o!=null&&o!==i.textContent&&(u(o),c(d,.35))},dispose(){a.innerHTML=""}}}export{L as mount};
