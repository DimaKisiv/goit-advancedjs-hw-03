import{S as c,i as u}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();let n;function p(e){const t=document.querySelector(".gallery");t.innerHTML="",e.forEach(a=>{t.innerHTML+=m(a)}),n?n.refresh():f()}function d(){const e=document.querySelector(".gallery");e.innerHTML=""}function m(e){return`<li class="gallery-item">
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
           </li>`}function f(){n=new c(".gallery a",{overlayOpacity:.8,captions:!0,captionsData:"alt",captionPosition:"outside",captionDelay:"250"})}const y="https://pixabay.com/api/",g="49290147-91bc44204d790a43c13c008af";function h(e){const t=encodeURIComponent(e),a=`${y}?key=${g}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a)}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("form.form").addEventListener("submit",e=>{e.preventDefault();const t=e.target.querySelector("input").value;t.length!=0&&(d(),document.querySelector(".loader").style.display="block",h(t).then(a=>{if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a.json()}).then(a=>{a.hits.length?p(a.hits):i("Sorry, there are no images matching your search query. Please try again!")}).catch(a=>{i("Error fetching images:")}).finally(()=>{document.querySelector(".loader").style.display="none"}))})});function i(e){u.error({message:e,close:!0,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",class:"custom-iziToast"})}
//# sourceMappingURL=index.js.map
