(()=>{"use strict";var e={};function t(e){const t=document.createElement("button");return t.textContent=e,t.classList.add("tabs"),"ORDER ONLINE"===e&&t.classList.add("order-button"),"HOME"===e&&t.classList.add("active"),t}function n(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("span"),d=document.createElement("p");n.textContent="ABOUT US?",a.textContent="HOT FLAVOR has the best food! Tasty and Affordable",d.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!",t.classList.add("page-content"),d.classList.add("paragraph"),t.appendChild(n),t.appendChild(a),t.appendChild(d);const o=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");i.textContent="HOURS & LOCATIONS",c.setAttribute("style","white-space: pre;"),c.textContent="555 Laurel Ave, San Mateo, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm",o.classList.add("page-content"),o.appendChild(i),o.appendChild(c),e.appendChild(t),e.appendChild(o)}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();let a=["SWEET SALSA    $5","CHEESE    $5","GUACAMOLE $5"];const d=e.p+"57e0a2caf2fa06836998.png";let o=["Order Name","Quantity","Add-On"],i=["Pickles","Cheese","Onions"];function c(e,t,n){const a=document.createElement("select");a.id=e,a.classList.add("inputField");const d=document.createElement("label");d.for=e,d.textContent=e;const o=document.createElement("option");o.disabled=!0,o.selected=!0,a.appendChild(o),t.forEach((e=>{const t=document.createElement("option");t.textContent=e,t.value=e,a.appendChild(t)})),n.appendChild(d),n.appendChild(a)}const s=document.getElementById("content");s.appendChild(function(){const e=["HOME","MENUS","CONTACT US","ORDER ONLINE"],n=document.createElement("div");n.classList.add("header");const a=document.createElement("a");a.textContent="HOT FLAVOR",a.href="#",a.classList.add("logo"),n.appendChild(a);for(let a=0;a<e.length;a++)n.appendChild(t(e[a]));return n}()),s.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("span"),d=document.createElement("p");n.textContent="ABOUT US?",a.textContent="HOT FLAVOR has the best food! Tasty and Affordable",d.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!",t.classList.add("page-content"),d.classList.add("paragraph"),t.appendChild(n),t.appendChild(a),t.appendChild(d);const o=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");return i.textContent="HOURS & LOCATIONS",c.setAttribute("style","white-space: pre;"),c.textContent="555 Laurel Ave, San Mateo, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm",o.classList.add("page-content"),o.appendChild(i),o.appendChild(c),e.appendChild(t),e.appendChild(o),e}()),document.querySelectorAll(".tabs").forEach((e=>{e.addEventListener("click",(()=>{switch(document.querySelector(".active").classList.remove("active"),e.classList.add("active"),e.textContent){case"HOME":n();break;case"MENUS":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div");t.setAttribute("style","white-space: pre;"),a.forEach((e=>{t.textContent+=`${e} \r\n`})),t.classList.add("page-content"),e.appendChild(t)}();break;case"CONTACT US":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("p");n.textContent="Phone: (650) 987-4321",a.textContent="Email: hotflavor@gmail.com",t.classList.add("contact-page","info"),t.appendChild(n),t.appendChild(a),e.appendChild(t);const o=document.createElement("img");o.src=d,o.classList.add("contact-page"),e.appendChild(o)}();break;case"ORDER ONLINE":!function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("orderTab"),e.appendChild(t);const d=document.createElement("form");d.classList.add("orderForm"),t.appendChild(d);const s=document.createElement("button");s.classList.add("close-form"),s.type="button";const r=document.createElement("span");r.classList.add("material-icons","close-form"),r.textContent=" close ",s.appendChild(r),s.addEventListener("click",n),d.appendChild(s);const l=document.createElement("legend");l.textContent="Make Online Order",d.appendChild(l),o.forEach((e=>{const t=document.createElement("div");if("Order Name"===e)c(e,a,t);else if("Add-On"===e)c(e,i,t);else{const n=document.createElement("input");n.id=e,n.type="number",n.min=1,n.max=20,n.classList.add("inputField");const a=document.createElement("label");a.for=e,a.textContent=e,t.appendChild(a),t.appendChild(n)}d.appendChild(t)}));const p=document.createElement("button");p.textContent="ORDER",p.classList.add("submit"),p.type="button",p.addEventListener("click",n),d.appendChild(p)}()}}))}))})();