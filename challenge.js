(()=>{"use strict";function e(e,t){return e.filter((e=>e.type===t))}function t(e){e.target.classList.contains("modal-container")&&!e.target.classList.contains("button")&&n()}function n(){document.body.removeEventListener("click",t),document.querySelector(".modal-container").remove()}async function a(e){const t=document.querySelector(".modal-container");t.innerHTML="",t.appendChild(await e)}function c(){document.querySelectorAll(".challenge-item button").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const c=document.createElement("div");c.classList.add("modal-container"),document.body.appendChild(c),a(async function(e){const t=document.createElement("form");t.classList.add("modal-content");const c=document.createElement("h1");c.textContent=`Book room ${e.title} (step 1)`,t.appendChild(c);const o=document.createElement("p");o.textContent="What date would you like to come?",t.appendChild(o);const l=document.createElement("label");l.textContent="Date",l.for="input[type=date]",t.appendChild(l);const i=document.createElement("input");i.type="date",i.setAttribute("min",(new Date).toLocaleDateString()),t.appendChild(i);const s=document.createElement("button");return s.type="submit",s.classList.add("button","primary"),s.name="search-times",s.textContent="Search available times",t.appendChild(s),t.addEventListener("submit",(async t=>{t.preventDefault();const c=i.value;if(""===i.value)alert("Please choose a date");else{const t=await async function(e,t){const n=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date="+t+"&challenge="+e);return await n.json()}(e.id,c);a(async function(e,t){const c=document.createElement("form");c.classList.add("modal-content");const o=document.createElement("h1");o.textContent=`Book room ${e.title} (step 2)`,c.appendChild(o);const l=document.createElement("label");l.textContent="Name",l.for="input-name",c.appendChild(l);const i=document.createElement("input");i.type="text",i.classList.add("input-name"),c.appendChild(i);const s=document.createElement("label");s.textContent="E-mail",s.for="input-email",c.appendChild(s);const r=document.createElement("input");r.type="email",r.classList.add("input-email"),c.appendChild(r);const d=document.createElement("label");d.textContent="What time?",s.for="select-time",c.appendChild(d);const u=document.createElement("select");u.classList.add("select-time");const m=document.createElement("option");m.textContent="-- Choose time --",u.appendChild(m),c.appendChild(u);for(let e=0;e<t.slots.length;e++){const n=document.createElement("option");n.textContent=t.slots[e],u.appendChild(n)}const p=document.createElement("label");p.textContent="How many participants?",p.for="select-participants",c.appendChild(p);const h=document.createElement("select");h.classList.add("select-participants");const f=document.createElement("option");f.textContent="-- Select number --",h.appendChild(f),c.appendChild(h);let y=e.maxParticipants-e.minParticipants;for(let t=0;t<=y;t++){const n=document.createElement("option");n.textContent=`${e.minParticipants+t} participants`,h.appendChild(n)}const E=document.createElement("button");return E.type="submit",E.classList.add("button","primary"),E.name="submit-booking",E.textContent="Submit booking",c.appendChild(E),c.addEventListener("submit",(async c=>{c.preventDefault();let o=document.querySelector(".input-name").value,l=document.querySelector(".input-email").value,i=document.querySelector(".select-participants").value,s=document.querySelector(".select-time").value,r=t.date,d=e.id,u=i.match(/(\d+)/);""===o||""===l?alert("Please fill in requested fields."):"-- Select number --"===i?alert("Please select participants."):"-- Choose time --"===s?alert("Please choose time."):(i=parseInt(u[0]),await async function(e,t,n,a,c,o){const l=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({challenge:e,name:t,email:n,date:a,time:c,participants:o})}),i=await l.json();console.log(i)}(d,o,l,r,s,i),a(function(){const e=document.createElement("div");e.classList.add("modal-content","center");const t=document.createElement("h1");t.textContent="Thank you!",e.appendChild(t);const a=document.createElement("button");return a.classList.add("button","secondary"),a.textContent="Back to challenges",a.addEventListener("click",n),e.appendChild(a),e}()))})),c}(e,t))}})),t}(e)),document.body.addEventListener("click",t)}(JSON.parse(e.querySelector("input").value))}))}))}async function o(e,t,n,...a){document.querySelectorAll("input[name='sort-by']").forEach((e=>{e.checked=!1}));let o=await e;n.innerHTML="",n.nextElementSibling.classList.add("hidden"),a.forEach((e=>{o=e(o)})),0===o.length?n.nextElementSibling.classList.remove("hidden"):o.forEach((e=>{const a=t(e);n.append(a)})),c()}function l(e){let t,n,a;"online"===e.type?(t="fa-solid fa-laptop",n="Take challenge online",a="(online)"):(t="fa-sharp fa-solid fa-house",n="Book this room",a="(on-site)");const c=document.createElement("li");c.classList.add("challenge-item");const o=document.createElement("i");o.setAttribute("class",t+" challenge-image-icon"),c.appendChild(o);const l=document.createElement("img");l.classList.add("challenge-image"),l.src=e.image,l.alt="challenge image",c.appendChild(l);const i=document.createElement("h3");i.classList.add("challenge-title"),i.textContent=`${e.title} ${a}`,c.appendChild(i);const s=document.createElement("ul");s.classList.add("rating"),s.setAttribute("role","meter"),s.setAttribute("aria-label","rating"),s.setAttribute("arial-valuemin","0"),s.setAttribute("aria-valuemax","5"),s.setAttribute("aria-valuenow",e.rating),s.setAttribute("aria-valuetext",e.rating+" out of 5"),c.appendChild(s);const r=Math.floor(e.rating);for(let e=0;e<5;e++){let t=document.createElement("li");t.classList.add("rating-star"),e<r&&t.classList.add("active"),s.appendChild(t)}const d=document.createElement("small");d.classList.add("challenge-meta"),d.textContent=`${e.minParticipants}-${e.maxParticipants} participants`,c.appendChild(d);const u=document.createElement("p");u.classList.add("challenge-description"),u.textContent=e.description,c.appendChild(u);const m=document.createElement("input");m.setAttribute("hidden","true"),m.setAttribute("value",JSON.stringify(e));const p=document.createElement("button");return p.classList.add("button","primary"),p.textContent=n,p.append(m),c.appendChild(p),c}function i(e){const t=[];return document.querySelectorAll(".filter-by-type input[type=checkbox]:checked").forEach((e=>{t.push(e.value)})),e.filter((e=>t.some((t=>e.type.includes(t)))))}async function s(e,t){let n=await t;return n=n.filter((t=>e.every((e=>t.labels.includes(e))))),n}function r(e){let t=document.getElementById("text-filter").value;return e.filter((e=>e.title.toUpperCase().includes(t.toUpperCase())||e.description.toUpperCase().includes(t.toUpperCase())))}function d(e){const t=document.querySelectorAll(".starFrom.active"),n=document.querySelectorAll(".starTo.active");return e.filter((e=>e.rating>=t.length&&e.rating<=n.length))}const u=document.querySelector(".challenge-list"),m=document.querySelector("#text-filter"),p=document.querySelector("input[name='online-challenge']"),h=document.querySelector("input[name='on-site-challenge']"),f=[p,h],y=document.querySelector("#btn-container"),E=document.querySelectorAll(".rating-star");!async function(){const t=await async function(){const e=await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");return(await e.json()).challenges}(),n=function(){const e=window.location.search;return new URLSearchParams(e).get("type")}();await async function(e,t,n,a,c){const o=e;let l=n;"online"===o?l=a(l,"online"):"onsite"===o&&(l=a(l,"onsite")),l.forEach((e=>{const n=c(e);t.append(n)}))}(n,u,t,e,l),c(),function(){const e=document.querySelectorAll("input[name='sort-by']");let t;const n=document.querySelector(".challenge-list");let a;e.forEach((c=>{c.addEventListener("click",(()=>{t=document.querySelectorAll(".challenge-item"),e.forEach((e=>{"sort-by-rating"===e.id&&(a=e.checked)})),t=Array.from(t),a?t.sort((function(e,t){return t.childNodes[3].getAttribute("aria-valuenow")-e.childNodes[3].getAttribute("aria-valuenow")})):t.sort((function(e,t){return e.childNodes[2].textContent<t.childNodes[2].textContent?-1:e.childNodes[2].textContent>t.childNodes[2].textContent?1:0})),n.innerHTML="",t.forEach((e=>{n.append(e)}))}))}))}(),"online"===n?p.setAttribute("checked","true"):("onsite"===n||p.setAttribute("checked","true"),h.setAttribute("checked","true")),function(){const e=document.querySelectorAll(".starsFrom li"),t=document.querySelectorAll(".starsTo li");let n=null,a=null;e.forEach(((t,a)=>{t.addEventListener("click",(t=>{n===a?(t.target.classList.remove("active"),n=a-1):(t.target.classList.add("active"),n=a),e.forEach(((e,t)=>{t<a?e.classList.add("active"):t>a&&e.classList.remove("active")}))}))})),t.forEach(((e,n)=>{e.addEventListener("click",(e=>{a===n?(e.target.classList.remove("active"),a=n-1):(e.target.classList.add("active"),a=n),t.forEach(((e,t)=>{t<n?e.classList.add("active"):t>n&&e.classList.remove("active")}))}))}))}(),E.forEach((e=>{e.addEventListener("click",(async()=>{let e=y.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await o(n,l,u,r,i,d)}))}));const a=async function(e,t,n){let a=await e;const c=[];return a.forEach((e=>{const t=document.createElement("button");t.classList.add("btn"),t.textContent=e,n.append(t),c.push(t)})),c}(async function(e){let t=await e,n=[];return t.forEach((e=>{n.push(e.labels)})),n=n.flat(),n=new Set(n),n=Array.from(n),n}(t),0,y);(await a).forEach((e=>{e.addEventListener("click",(async e=>{e.target.classList.toggle("active");let n=y.querySelectorAll(".active");n=Array.from(n),n=n.map((e=>e.textContent));let a=t;a=s(n,a),o(a,l,u,r,i,d)}))})),m.addEventListener("keyup",(async()=>{let e=y.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await o(n,l,u,r,i,d)})),f.forEach((e=>{e.addEventListener("click",(async()=>{let e=y.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await o(n,l,u,r,i,d)}))}))}(),document.querySelector("#show-filters").addEventListener("click",(()=>{document.querySelector(".filter-container").classList.add("show"),document.querySelector("#show-filters").classList.add("show")})),document.querySelector("#hide-filters").addEventListener("click",(()=>{document.querySelector(".filter-container").classList.remove("show"),document.querySelector("#show-filters").classList.remove("show")}))})();