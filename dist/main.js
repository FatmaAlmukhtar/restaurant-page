(()=>{"use strict";function e(e){const t=document.createElement("button");return t.textContent=e,t.classList.add("tabs"),"ORDER ONLINE"===e&&t.classList.add("order-button"),"HOME"===e&&t.classList.add("active"),t}let t=["SWEET SALSA    $5","CHEESE    $5","GUACAMOLE $5"];const n=document.getElementById("content");n.appendChild(function(){const t=["HOME","MENUS","CONTACT US","ORDER ONLINE"],n=document.createElement("div");n.classList.add("header");const d=document.createElement("a");d.textContent="HOT FLAVOR",d.href="#",d.classList.add("logo"),n.appendChild(d);for(let d=0;d<t.length;d++)n.appendChild(e(t[d]));return n}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("p");n.textContent="WHO?",d.textContent="HOT FLAVOR has the best food! Tasty and AffordableLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!",t.classList.add("page-content"),t.appendChild(n),t.appendChild(d);const a=document.createElement("div"),i=document.createElement("h3"),o=document.createElement("p");return i.textContent="HOURS & LOCATIONS",o.setAttribute("style","white-space: pre;"),o.textContent="123 Casa Ave, Redwood City, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm",a.classList.add("page-content"),a.appendChild(i),a.appendChild(o),e.appendChild(t),e.appendChild(a),e}()),document.querySelectorAll(".tabs").forEach((e=>{e.addEventListener("click",(()=>{switch(document.querySelector(".active").classList.remove("active"),e.classList.add("active"),e.textContent){case"HOME":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("p");n.textContent="WHO?",d.textContent="HOT FLAVOR has the best food! Tasty and AffordableLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!",t.classList.add("page-content"),t.appendChild(n),t.appendChild(d);const a=document.createElement("div"),i=document.createElement("h3"),o=document.createElement("p");i.textContent="HOURS & LOCATIONS",o.setAttribute("style","white-space: pre;"),o.textContent="123 Casa Ave, Redwood City, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm",a.classList.add("page-content"),a.appendChild(i),a.appendChild(o),e.appendChild(t),e.appendChild(a)}();break;case"MENUS":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const n=document.createElement("div");n.setAttribute("style","white-space: pre;"),t.forEach((e=>{n.textContent+=`${e} \r\n`})),n.classList.add("page-content"),e.appendChild(n)}();break;case"CONTACT US":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div");t.setAttribute("style","white-space: pre;"),t.textContent="HOT FLAVOR has the best food! \r\n Tasty and Affordable";const n=document.createElement("p");n.textContent="pers",t.appendChild(n),t.classList.add("page-content"),e.appendChild(t)}()}}))}))})();