(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="4e2e08cb",f=document.getElementById("search"),a=document.getElementById("resultContainer"),m=document.getElementById("loading"),l=document.getElementById("error");f.addEventListener("input",p);async function p(o){d(!1),c(!1);const t=(o.target.value||"").trim();if(!t){a.innerHTML="";return}t.length<3||await g(t)}function h(o){let t="";o.toSorted((n,e)=>Number(n.Year)-Number(e.Year)).forEach(n=>{t+=`
      <div class="movie-card">
        <img src="${n.Poster}" alt="${n.Title}">
        <div class="movie-info">
          <h3>${n.Title}</h3>
          <p>${n.Year}</p>
        </div>
      </div>
    `}),a.innerHTML=t}async function g(o){c(!0);try{const s=await(await fetch(`https://www.omdbapi.com/?s=${o}&apikey=${u}`)).json();if(s.Response==="False")throw new Error(s.Error);h(s.Search)}catch(t){a.innerHTML="",l.textContent=t.message,d(!0)}finally{c(!1)}}function d(o){l.classList.toggle("hidden",!o)}function c(o){m.classList.toggle("hidden",!o)}
