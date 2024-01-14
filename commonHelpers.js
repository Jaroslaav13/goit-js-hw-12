import{i as u,a as m,S as p}from"./assets/vendor-c145bea9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="https://pixabay.com/api",l={key:"41496485-2e747cbe724a23cc88d300532",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40},a={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-name"),btnSearch:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery")},c=document.createElement("div");c.classList.add("loader");a.searchForm.addEventListener("submit",async s=>{s.preventDefault();const r=a.inputSearch.value.trim();if(r){l.page+=1;try{const e=await y(r);g(e.hits)}catch(e){console.log(e),i(e.message)}finally{c.remove()}}else i("Введите запрос")});function i(s){u.error({title:"Error",message:s,position:"topRight",backgroundColor:"#EF4040"})}const y=async s=>{l.q=s;try{const r=await m.get(`${f}`,{params:l});if(r.data.hits.length===0)throw new Error("Нет результатов");return r.data}catch(r){console.log(r),i("API request error")}finally{c.remove()}};function g(s){const r=s.map(e=>`<li class="gallery-item">
  <div class="box-cards">
    <a class="gallery-link" href="${e.largeImageURL}">
          <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
         data-likes="${e.likes}"
          data-views="${e.views}"
          data-comments="${e.comments}"
          data-downloads="${e.downloads}"
        />
        <div class="image-info">
        <p class="text-item">Likes: ${e.likes}</p>
        <p class="text-item">Views: ${e.views}</p>
        <p class="text-item">Comments: ${e.comments}</p>
        <p class="text-item">Downloads: ${e.downloads}</p>
      
      </div>
    </a>
    </div>
         </li>`).join("");a.gallery.innerHTML="",a.gallery.insertAdjacentHTML("afterbegin",r),new p(".gallery a",{captionsData:"alt",captionDelay:250,captionsDataAlt:"image.tags"})}
//# sourceMappingURL=commonHelpers.js.map
