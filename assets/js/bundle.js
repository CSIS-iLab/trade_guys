!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";var n,a="protocol hostname host pathname port search hash href".split(" ");function s(t){n||(n=document.createElement("a"));var e={};n.href=t||"";for(var i=0,s=a.length;i<s;i++){var r=a[i];e[r]=n[r]}return e}function r(t,e,i){var n=s(t),a=/\?(?:.*)$/.test(n.search)?"&":"?";return n.protocol+"//"+n.host+n.port+n.pathname+n.search+a+e+"="+i+n.hash}function o(t){if(!(this instanceof o))return new o(t);t||console.info("SoundCloud API requires clientId, get it at https://developers.soundcloud.com"),this._events={},this._clientId=t,this._baseUrl="https://api.soundcloud.com",this.playing=!1,this.duration=0,this.audio=document.createElement("audio")}o.prototype.resolve=function(t,e){var i=this._baseUrl+"/resolve.json?url="+encodeURIComponent(t)+"&client_id="+this._clientId;this._json(i,function(i){if(this.cleanData(),Array.isArray(i))i={tracks:i},this._playlist=i;else if(i.tracks)this._playlist=i;else{this._track=i;var n=s(t);this._track.stream_url+=n.hash}this.duration=i.duration&&!isNaN(i.duration)?i.duration/1e3:0,e(i)}.bind(this))},o.prototype._jsonp=function(t,e){var i=document.getElementsByTagName("script")[0]||document.head,n=document.createElement("script"),a="jsonp_callback_"+(new Date).valueOf()+Math.floor(1e3*Math.random());window[a]=function(t){n.parentNode&&n.parentNode.removeChild(n),window[a]=function(){},e(t)},n.src=r(t,"callback",a),i.parentNode.insertBefore(n,i)},o.prototype._json=function(t,e){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t={};try{t=JSON.parse(i.responseText)}catch(t){}e(t)}},i.send(null)},o.prototype.on=function(t,e){this._events[t]=e,this.audio.addEventListener(t,e,!1)},o.prototype.off=function(t,e){this._events[t]=null,this.audio.removeEventListener(t,e)},o.prototype.unbindAll=function(){for(var t in this._events){var e=this._events[t];e&&this.off(t,e)}},o.prototype.preload=function(t,e){this._track={stream_url:t},e&&(this.audio.preload=e),this.audio.src=this._clientId?r(t,"client_id",this._clientId):t},o.prototype.play=function(t){var e;if((t=t||{}).streamUrl)e=t.streamUrl;else if(this._playlist){var i=this._playlist.tracks.length;if(i){if(void 0===t.playlistIndex?this._playlistIndex=this._playlistIndex||0:this._playlistIndex=t.playlistIndex,this._playlistIndex>=i||this._playlistIndex<0)return void(this._playlistIndex=0);e=this._playlist.tracks[this._playlistIndex].stream_url}}else this._track&&(e=this._track.stream_url);if(!e)throw new Error("There is no tracks to play, use `streamUrl` option or `load` method");return this._clientId&&(e=r(e,"client_id",this._clientId)),e!==this.audio.src&&(this.audio.src=e),this.playing=e,this.audio.play()},o.prototype.pause=function(){this.audio.pause(),this.playing=!1},o.prototype.stop=function(){this.audio.pause(),this.audio.currentTime=0,this.playing=!1},o.prototype.next=function(t){t=t||{};var e=this._playlist.tracks.length;if(this._playlistIndex>=e-1){if(!t.loop)return;this._playlistIndex=-1}if(this._playlist&&e)return this.play({playlistIndex:++this._playlistIndex})},o.prototype.previous=function(){if(!(this._playlistIndex<=0))return this._playlist&&this._playlist.tracks.length?this.play({playlistIndex:--this._playlistIndex}):void 0},o.prototype.seek=function(t){if(!this.audio.readyState)return!1;var e=t.offsetX/t.target.offsetWidth||(t.layerX-t.target.offsetLeft)/t.target.offsetWidth;this.audio.currentTime=e*(this.audio.duration||0)},o.prototype.cleanData=function(){this._track=void 0,this._playlist=void 0},o.prototype.setVolume=function(t){this.audio.readyState&&(this.audio.volume=t)},o.prototype.setTime=function(t){this.audio.readyState&&(this.audio.currentTime=t)},t.exports=o},function(t,e,i){t.exports=i(2)},function(t,e,i){"use strict";i.r(e);const n={postsContainer:document.querySelector(".archive"),paginationContainer:document.querySelector(".archive-pagination"),postsList:null,totalNumPosts:0,numberOfPages:0,currentPage:1,numberPerPage:3,getPosts(){const t=this.postsContainer.querySelectorAll(".post-list");this.postsList=Array.from(t),this.totalNumPosts=this.postsList.length,this.numberOfPages=Math.ceil(this.totalNumPosts/this.numberPerPage)},setCurrentPage(){const t=this.getURLParams(window.location.href);let e=1;t.page&&t.page<=this.numberOfPages&&(e=t.page),this.currentPage=+e},setupPaginationBtns(){let t=`<button class='pagination-page pagination-prev' data-page='${this.currentPage-1}'><i class="icon-angle-left"></i></button>`;t+=`<span class="pagination-total-pages">Page\n    <span class="pagination-current-page">${this.currentPage}</span> of \n    ${this.numberOfPages}</span>`;for(let e=1;e<=this.numberOfPages;e++){let i="";e==this.currentPage&&(i=" is-active"),t+=`<button class='pagination-page page-num${i}' data-page='${e}'>${e}</button>`}t+=`<button class='pagination-page pagination-next' data-page='${this.currentPage+1}'><i class="icon-angle-right"></i></button>`,this.paginationContainer.innerHTML=t,this.paginationContainer.querySelectorAll(".pagination-page").forEach(t=>{t.addEventListener("click",n.changePage)})},updatePaginationBtns(){const t=this.paginationContainer.querySelector(".page-num.is-active");t.disabled=!1,t.classList.remove("is-active");const e=this.paginationContainer.querySelector('.page-num[data-page="'+this.currentPage+'"]');e.disabled=!0,e.classList.add("is-active");const i=this.paginationContainer.querySelector(".pagination-prev");i.disabled=1==this.currentPage,i.setAttribute("data-page",this.currentPage-1);const n=this.paginationContainer.querySelector(".pagination-next");n.disabled=this.currentPage==this.numberOfPages,n.setAttribute("data-page",this.currentPage+1),this.paginationContainer.querySelector(".pagination-current-page").innerHTML=this.currentPage},updatePostList(){const t=(this.currentPage-1)*this.numberPerPage,e=t+this.numberPerPage;for(let i=0;i<=this.totalNumPosts-1;i++)i>=t&&i<e?this.postsList[i].classList.remove("is-hidden"):this.postsList[i].classList.add("is-hidden")},changePage(){let t=this.getAttribute("data-page");history.pushState?history.pushState(null,null,"?page="+t):location.hash="?page="+t,n.setCurrentPage(),n.updatePaginationBtns(),n.updatePostList()},getURLParams(t){let e={};const i=document.createElement("a");i.href=t;const n=i.search.substring(1).split("&");for(let t=0;t<n.length;t++){const i=n[t].split("=");e[i[0]]=decodeURIComponent(i[1])}return e}};var a=function(){document.querySelector(".archive")&&(n.getPosts(),n.setCurrentPage(),n.setupPaginationBtns(),n.updatePaginationBtns(),n.updatePostList())},s=i(0);let r=[];const o=(t,e)=>{let i=new s("e1b9039f824fdaf6ec1fc594037c1ac7");i.resolve(t,function(t){let i=l(t.duration);e.textContent=i}),r.push(i)},l=t=>{const e=Math.floor(t/6e4),i=(t%6e4/1e3).toFixed(0);return e+":"+(i<10?"0":"")+i},u=(t,e)=>{setInterval(()=>{let i=r[e].audio.currentTime/r[e].audio.duration*100;t.style.width=`${i}%`},300)},c=(t,e,i)=>{t.querySelector(".progress-bar").addEventListener("click",n=>{let a=t.querySelector(".progress-bar").offsetWidth,s=n.offsetX/a*r[i].audio.duration;r[i].audio.currentTime=s,u(e,i)})};window.addEventListener("DOMContentLoaded",()=>{a(),function(){let t=document.querySelectorAll(".audio-player");t&&(t.forEach(t=>{let e=t.querySelector(".audio-control").dataset.url,i=t.querySelector(".duration");o(e,i)}),t.forEach((t,e)=>{t.querySelectorAll(".audio-control i, .action").forEach(i=>{let n=t.querySelector(".progress");i.addEventListener("click",()=>{let i=t.querySelector(".audio-control i");i.classList.toggle("icon-pause"),i.classList.toggle("icon-play");let a=t.querySelector(".action");a.classList.toggle("pause"),a.classList.toggle("listen");let s=t.querySelector(".pause")||{},o=t.querySelector(".listen")||{};s.innerText="pause",o.innerText="listen",c(t,n,e),r[e]&&r[e].playing?r[e].pause():r[e]&&!r[e].playing&&(r[e].play(),u(n,e))})})}))}()})}]);
//# sourceMappingURL=bundle.js.map