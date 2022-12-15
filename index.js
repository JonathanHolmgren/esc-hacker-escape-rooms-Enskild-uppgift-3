(()=>{"use strict";var e,t,n,a,o={216:(e,t,n)=>{function a(e){let t,n,a;"online"===e.type?(t="fa-solid fa-laptop",n="Take challenge online",a="(online)"):(t="fa-sharp fa-solid fa-house",n="Book this room",a="(on-site)");const o=document.createElement("li");o.classList.add("challenge-item");const c=document.createElement("i");c.setAttribute("class",t+" challenge-image-icon"),o.appendChild(c);const i=document.createElement("img");i.classList.add("challenge-image"),i.src=e.image,i.alt="challenge image",o.appendChild(i);const l=document.createElement("h3");l.classList.add("challenge-title"),l.textContent=`${e.title} ${a}`,o.appendChild(l);const s=document.createElement("ul");s.classList.add("rating"),s.setAttribute("role","meter"),s.setAttribute("aria-label","rating"),s.setAttribute("arial-valuemin","0"),s.setAttribute("aria-valuemax","5"),s.setAttribute("aria-valuenow",e.rating),s.setAttribute("aria-valuetext",e.rating+" out of 5"),o.appendChild(s);const r=Math.floor(e.rating);for(let e=0;e<5;e++){let t=document.createElement("li");t.classList.add("rating-star"),e<r&&t.classList.add("active"),s.appendChild(t)}const d=document.createElement("small");d.classList.add("challenge-meta"),d.textContent=`${e.minParticipants}-${e.maxParticipants} participants`,o.appendChild(d);const m=document.createElement("p");m.classList.add("challenge-description"),m.textContent=e.description,o.appendChild(m);const u=document.createElement("input");u.setAttribute("hidden","true"),u.setAttribute("value",JSON.stringify(e));const p=document.createElement("button");return p.classList.add("button","primary"),p.textContent=n,p.append(u),o.appendChild(p),o}n.d(t,{Z:()=>a})},657:(e,t,n)=>{async function a(e){return(await e).sort((function(e,t){return t.rating-e.rating})).slice(0,3)}n.d(t,{Z:()=>a})},631:(e,t,n)=>{async function a(){const e=await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");return(await e.json()).challenges}n.d(t,{Z:()=>a})},586:(e,t,n)=>{function a(e){e.target.classList.contains("modal-container")&&!e.target.classList.contains("button")&&o()}function o(){document.body.removeEventListener("click",a),document.querySelector(".modal-container").remove()}async function c(e){const t=document.querySelector(".modal-container");t.innerHTML="",t.appendChild(await e)}function i(){document.querySelectorAll(".challenge-item button").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const t=document.createElement("div");t.classList.add("modal-container"),document.body.appendChild(t),c(async function(e){const t=document.createElement("form");t.classList.add("modal-content");const n=document.createElement("h1");n.textContent=`Book room ${e.title} (step 1)`,t.appendChild(n);const a=document.createElement("p");a.textContent="What date would you like to come?",t.appendChild(a);const i=document.createElement("label");i.textContent="Date",i.for="input[type=date]",t.appendChild(i);const l=document.createElement("input");l.type="date",l.setAttribute("min",(new Date).toLocaleDateString()),t.appendChild(l);const s=document.createElement("button");return s.type="submit",s.classList.add("button","primary"),s.name="search-times",s.textContent="Search available times",t.appendChild(s),t.addEventListener("submit",(async t=>{t.preventDefault();const n=l.value;if(""===l.value)alert("Please choose a date");else{const t=await async function(e,t){const n=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date="+t+"&challenge="+e);return await n.json()}(e.id,n);c(async function(e,t){const n=document.createElement("form");n.classList.add("modal-content");const a=document.createElement("h1");a.textContent=`Book room ${e.title} (step 2)`,n.appendChild(a);const i=document.createElement("label");i.textContent="Name",i.for="input-name",n.appendChild(i);const l=document.createElement("input");l.type="text",l.classList.add("input-name"),n.appendChild(l);const s=document.createElement("label");s.textContent="E-mail",s.for="input-email",n.appendChild(s);const r=document.createElement("input");r.type="email",r.classList.add("input-email"),n.appendChild(r);const d=document.createElement("label");d.textContent="What time?",s.for="select-time",n.appendChild(d);const m=document.createElement("select");m.classList.add("select-time");const u=document.createElement("option");u.textContent="-- Choose time --",m.appendChild(u),n.appendChild(m);for(let e=0;e<t.slots.length;e++){const n=document.createElement("option");n.textContent=t.slots[e],m.appendChild(n)}const p=document.createElement("label");p.textContent="How many participants?",p.for="select-participants",n.appendChild(p);const h=document.createElement("input");h.classList.add("select-participants"),h.type="number",h.min=e.minParticipants,h.max=e.maxParticipants,h.value=e.minParticipants,h.required=!0,n.appendChild(h);const f=document.createElement("button");return f.type="submit",f.classList.add("button","primary"),f.name="submit-booking",f.textContent="Submit booking",n.appendChild(f),n.addEventListener("submit",(async n=>{n.preventDefault();let a=document.querySelector(".input-name").value,i=document.querySelector(".input-email").value,l=document.querySelector(".select-participants").value,s=document.querySelector(".select-time").value,r=t.date,d=e.id,m=l.match(/(\d+)/);""===a||""===i?alert("Please fill in requested fields."):"-- Select number --"===l?alert("Please select participants."):"-- Choose time --"===s?alert("Please choose time."):(l=parseInt(m[0]),await async function(e,t,n,a,o,c){const i=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({challenge:e,name:t,email:n,date:a,time:o,participants:c})}),l=await i.json();console.log(l)}(d,a,i,r,s,l),c(function(){const e=document.createElement("div");e.classList.add("modal-content","center");const t=document.createElement("h1");t.textContent="Thank you!",e.appendChild(t);const n=document.createElement("button");return n.classList.add("button","secondary"),n.textContent="Back to challenges",n.addEventListener("click",o),e.appendChild(n),e}()))})),n}(e,t))}})),t}(e)),document.body.addEventListener("click",a)}(JSON.parse(e.querySelector("input").value))}))}))}n.d(t,{aC:()=>i})},555:(e,t,n)=>{async function a(e,t=function(e){return e},n,a){let o=await e;o=await t(o),o.forEach((e=>{const t=n(e);a.append(t)}))}n.d(t,{r:()=>a})},719:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(631),o=n(657),c=n(216),i=n(555),l=n(586);let e=await(0,a.Z)();await(0,i.r)(e,o.Z,c.Z,document.querySelector(".challenge-list")),(0,l.aC)(),document.querySelector(".main-nav-toggle").addEventListener("click",(()=>{document.querySelector(".main-nav").classList.toggle("open")})),t()}catch(e){t(e)}}),1)}},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return o[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,c,i)=>{var l;i&&((l=[]).d=1);var s,r,d,m=new Set,u=o.exports,p=new Promise(((e,t)=>{d=t,r=e}));p[t]=u,p[e]=e=>(l&&e(l),m.forEach(e),p.catch((e=>{}))),o.exports=p,c((o=>{var c;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var c=[];c.d=0,o.then((e=>{i[t]=e,a(c)}),(e=>{i[n]=e,a(c)}));var i={};return i[e]=e=>e(c),i}}var l={};return l[e]=e=>{},l[t]=o,l})))(o);var i=()=>s.map((e=>{if(e[n])throw e[n];return e[t]})),r=new Promise((t=>{(c=()=>t(i)).r=0;var n=e=>e!==l&&!m.has(e)&&(m.add(e),e&&!e.d&&(c.r++,e.push(c)));s.map((t=>t[e](n)))}));return c.r?r:i()}),(e=>(e?d(p[n]=e):r(u),a(l)))),l&&(l.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(719)})();