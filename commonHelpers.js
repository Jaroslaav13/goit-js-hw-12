import{a as u,S as p,i as m}from"./assets/vendor-c145bea9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="https://pixabay.com/api",c={key:"41496485-2e747cbe724a23cc88d300532",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40},a={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-name"),btnSearch:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery")},n=document.createElement("div");n.className="loader";a.searchForm.addEventListener("submit",s=>{s.preventDefault();const o=a.inputSearch.value;a.gallery.appendChild(n),n.style.display="block",y(o)});function d(s){m.error({title:"Error",message:s,position:"topRight",backgroundColor:"#EF4040"})}const y=async s=>{c.q=s;try{const e=(await u.get(`${f}`,{params:c})).data;if(e.hits.length===0){d("Sorry, there are no images matching your search query. Please try again!");return}g(e.hits),console.log(e),a.inputSearch.value=""}catch(o){console.log(o),d("API request error")}finally{n.remove()}};function g(s){const o=s.map(e=>`<li class="gallery-item">
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
         </li>`).join("");a.gallery.innerHTML="",a.gallery.insertAdjacentHTML("afterbegin",o),new p(".gallery a",{captionsData:"alt",captionDelay:250,captionsDataAlt:"image.tags"})}
//# sourceMappingURL=commonHelpers.js.map
