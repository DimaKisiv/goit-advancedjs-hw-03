import{S as c,i as u}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();let n;function p(e){const t=document.querySelector(".gallery");t.innerHTML="",e.forEach(r=>{t.innerHTML+=m(r)}),n?n.refresh():f()}function d(){const e=document.querySelector(".gallery");e.innerHTML=""}function m(e){return`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img
                  class="gallery-image"
                  src="${e.webformatURL}"
                  data-source="${e.largeImageURL}"
                  alt="${e.tags}"
                  />
              </a>
                <div class="card-overlay">
                    <div class="param">
                        <span class="param-title">Likes</span>
                        <span class="param-value">${e.likes}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Views</span>
                        <span class="param-value">${e.views}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Comments</span>
                        <span class="param-value">${e.comments}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Downloads</span>
                        <span class="param-value">${e.downloads}</span>
                    </div>
                </div>
           </li>`}function f(){n=new c(".gallery a",{overlayOpacity:.8,captions:!0,captionsData:"alt",captionPosition:"outside",captionDelay:"250"})}const y="https://pixabay.com/api/",g="49290147-91bc44204d790a43c13c008af";function h(e){const t=encodeURIComponent(e),r=`${y}?key=${g}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r)}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".search-form").addEventListener("submit",e=>{e.preventDefault();const t=e.target.querySelector("input").value;t.length!=0&&(d(),document.querySelector(".loader").style.display="block",h(t).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{r.hits.length?p(r.hits):i("Sorry, there are no images matching your search query. Please try again!")}).catch(r=>{i("Error fetching images:")}).finally(()=>{document.querySelector(".loader").style.display="none"}))})});function i(e){u.error({message:e,close:!0,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",class:"custom-iziToast"})}
//# sourceMappingURL=index.js.map
