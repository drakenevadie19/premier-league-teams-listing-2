(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=async()=>{try{const n=await fetch("/teams");console.log("Fetching all teams");const o=await n.json();return console.log(o),o}catch(n){return console.error("Error fetching teams:",n),null}},u=async()=>{const n=await m();console.log(n);const o=document.getElementById("team-lists"),r=document.createElement("input");if(r.type=Text,r.name="text",r.placeholder="Text",o.appendChild(r),n&&n.length>0)n.map(a=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("div");t.classList.add("top-container");const s=document.createElement("div");s.classList.add("bottom-container"),t.style.backgroundImage=`url(${a.logo})`,t.style.backgroundSize="100% 100%";const l=document.createElement("h3");l.textContent=a.team_name,s.appendChild(l);const d=document.createElement("p");d.textContent=a.city,d.style.fontStyle="italic",s.appendChild(d);const c=document.createElement("a");c.textContent="Read More >",c.setAttribute("role","button"),c.href=`/teams/${a.id}`,s.appendChild(c),e.appendChild(t),e.appendChild(s),o.appendChild(e)});else{const a=document.createElement("h2");a.textContent="No Teams Listing Available 😞",o.appendChild(a)}},p=async()=>{const n=document.getElementById("header-div");n.style.height="40vh",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="100% 100%";const o=parseInt(window.location.pathname.split("/").pop()),r=await m();console.log(r);const a=document.getElementById("team-lists");if(isNaN(o)){const e=document.createElement("h2");e.textContent="Error ID Number 😞",a.appendChild(e)}else{const e=r.find(t=>t.id===o);if(console.log("fined team:"),console.log(e),e){const t=document.getElementById("imageTag");t?(t.src=e.logo,console.log("Image source set to:",t.src)):console.error("Image element with id 'imageTag' not found.");const s=document.querySelector(".image-container");s.style.width="40vw",s.style.height="50vh",s.style.padding="25px",t.style.width="100%",t.style.height="100%",document.querySelector("#name").textContent=e.team_name,document.getElementById("manager").textContent="Manager: "+e.manager,document.getElementById("year_of_foundation").textContent="Year of Foundation: "+e.year_of_foundation,document.getElementById("city").textContent="City: "+e.city,document.getElementById("stadium").textContent="Stadium: "+e.stadium,document.getElementById("stadium_capacity").textContent="Stadium Capacity: "+e.stadium_capacity}else{const t=document.createElement("h2");t.textContent="Error 😞",a.appendChild(t)}}},i=window.location.pathname;i==="/"||i==="/index.html"?u():i.startsWith("/teams/")&&!isNaN(parseInt(i.split("/").pop()))?p():window.location.href="/404.html";
