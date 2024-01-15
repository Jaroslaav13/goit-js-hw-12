import{i as g,a as u,S as m}from"./assets/vendor-c145bea9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const y="https://pixabay.com/api/",l={key:"41496485-2e747cbe724a23cc88d300532",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40},o={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-name"),btnSearch:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery"),btnLoad:document.querySelector(".load-btn")},i=document.createElement("div");i.className="loader";let d;o.searchForm.addEventListener("submit",a=>{a.preventDefault();const t=o.inputSearch.value.trim();t?(o.gallery.appendChild(i),i.style.display="block",h(t)):n("Sorry, there are no images matching your search query. Please try again!")});function n(a){g.error({title:"Error",message:a,position:"topRight",backgroundColor:"#EF4040"})}const h=async a=>{l.q=a;try{const e=(await u.get(`${y}`,{params:l})).data;w(e.hits),d=document.querySelector(".gallery-item").getBoundingClientRect().height,await f(700),window.scrollBy(0,2*d),console.log(e),e.hits.length>=l.per_page&&(o.btnLoad.style.display="block"),e.totalHits<=l.per_page*l.page&&n("We're sorry, but you've reached the end of search results."),o.inputSearch.value=""}catch(t){console.log(t),n("API request error")}finally{i.remove()}};function w(a){const t=a.map(e=>`<li class="gallery-item">
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
         </li>`).join("");o.gallery.innerHTML="",o.gallery.insertAdjacentHTML("afterbegin",t),new m(".gallery a",{captionsData:"alt",captionDelay:250,captionsDataAlt:"image.tags"})}o.btnLoad.addEventListener("click",b);async function b(){try{l.page++;const t=(await u.get(y,{params:l})).data;if(t.hits.length===0){n("Sorry, there are no more images.");return}v(t.hits),await f(700),window.scrollBy(0,2*d),console.log(t),t.hits.length>=l.per_page&&t.totalHits>l.per_page*l.page?o.btnLoad.style.display="block":(o.btnLoad.style.display="none",n("We're sorry, but you've reached the end of search results."))}catch(a){console.error(a),n("API request error")}finally{i.remove()}}function v(a){const t=a.map(e=>`<li class="gallery-item">
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
         </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",t),new m(".gallery a",{captionsData:"alt",captionDelay:250,captionsDataAlt:"image.tags"})}function f(a){return new Promise(t=>setTimeout(t,a))}
//# sourceMappingURL=commonHelpers.js.map
