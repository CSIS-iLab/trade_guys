!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}({10:function(t,e,n){"use strict";n.r(e);const i={postsContainer:document.querySelector(".archive:not(.no-pagination)"),paginationContainer:document.querySelector(".archive-pagination"),postContentContainer:document.querySelector(".post-content"),postsList:Array.from(document.querySelectorAll(".post-list")),totalNumPosts:0,numberOfPages:0,currentPage:1,numberPerPage:10,filterByContentTypes:!1,selectedContentTypes:[],getPosts(){let t=this.postsList;this.filterByContentTypes&&this.selectedContentTypes.length>0&&(t=this.postsList.filter(t=>this.selectedContentTypes.includes(t.getAttribute("data-content-type")))),this.totalNumPosts=t.length,this.numberOfPages=Math.ceil(this.totalNumPosts/this.numberPerPage)},getContentTypesFromURL(){const t=this.getURLParams(window.location.href);t.content_type&&(this.selectedContentTypes=t.content_type.split(","))},setCurrentPage(){const t=this.getURLParams(window.location.href);let e=1;t.page&&t.page<=this.numberOfPages&&(e=t.page),this.currentPage=+e},setupPaginationBtns(){let t=`<button class='pagination-page pagination-prev' data-page='${this.currentPage-1}'><i class="icon-angle-left"></i></button>`;t+='<span class="pagination-total-pages"></span>';for(let e=1;e<=this.numberOfPages;e++){let n="";e==this.currentPage&&(n=" is-active"),t+=`<button class='pagination-page page-num${n}' data-page='${e}'>${e}</button>`}t+=`<button class='pagination-page pagination-next' data-page='${this.currentPage+1}'><i class="icon-angle-right"></i></button>`,this.paginationContainer.innerHTML=t,this.paginationContainer.querySelectorAll(".pagination-page").forEach(t=>{t.addEventListener("click",i.changePage)})},setupTotalPages(){document.querySelectorAll(".pagination-total-pages").forEach(t=>{t.innerHTML=`Page\n    <span class="pagination-current-page">${this.currentPage}</span> of \n    ${this.numberOfPages} <span class="pagination-total-items">(${this.totalNumPosts} items)</span>`})},setupContentFiltering(){if(!this.filterByContentTypes)return;document.querySelectorAll('.content-types-filter input[type="checkbox"]').forEach(t=>{t.addEventListener("change",i.filterContent)})},updatePaginationBtns(){const t=this.paginationContainer.querySelector(".page-num.is-active");t.disabled=!1,t.classList.remove("is-active");const e=this.paginationContainer.querySelector('.page-num[data-page="'+this.currentPage+'"]');e.disabled=!0,e.classList.add("is-active");const n=this.paginationContainer.querySelector(".pagination-prev");n.disabled=1==this.currentPage,n.setAttribute("data-page",this.currentPage-1);const i=this.paginationContainer.querySelector(".pagination-next");i.disabled=this.currentPage==this.numberOfPages,i.setAttribute("data-page",this.currentPage+1),document.querySelectorAll(".pagination-current-page").forEach(t=>t.innerHTML=this.currentPage)},updatePostList(){const t=(this.currentPage-1)*this.numberPerPage,e=t+this.numberPerPage;let n=this.postsList;this.selectedContentTypes.length>0&&(n=[],this.postsList.forEach(t=>{const e=t.getAttribute("data-content-type");this.selectedContentTypes.includes(e)?n.push(t):t.classList.add("is-hidden")})),n.forEach((n,i)=>{i==t?n.classList.add("first-visible-post"):n.classList.remove("first-visible-post"),i>=t&&i<e?n.classList.remove("is-hidden"):n.classList.add("is-hidden")})},changePage(){let t=this.getAttribute("data-page");const e=i.getURLParams(window.location.href);let n="?",s="page="+t;e.content_type&&(n="?content_type="+e.content_type+"&"),s=n+s,history.pushState?history.pushState(null,null,s):location.hash=s,i.setCurrentPage(),i.updatePaginationBtns(),i.updatePostList()},filterContent(){let t=this.value;const e=i.selectedContentTypes.indexOf(t);-1!==e?i.selectedContentTypes.splice(e,1):i.selectedContentTypes.push(t);let n="?content_type="+i.selectedContentTypes.join(",");history.pushState?history.pushState(null,null,n):location.hash=n,i.getPosts(),i.setCurrentPage(),i.setupPaginationBtns(),i.setupTotalPages(),i.updatePaginationBtns(),i.updatePostList()},getURLParams(t){let e={};const n=document.createElement("a");n.href=t;const i=n.search.substring(1).split("&");for(let t=0;t<i.length;t++){const n=i[t].split("=");e[n[0]]=decodeURIComponent(n[1])}return e}};var s=function(){document.querySelector(".archive:not(.no-pagination)")&&(document.querySelector(".content-types-filter")&&(i.filterByContentTypes=!0,i.getContentTypesFromURL(),i.selectedContentTypes.forEach(t=>{document.querySelector('.content-types-filter input[value="'+t+'"]').checked=!0})),i.getPosts(),i.setCurrentPage(),i.setupPaginationBtns(),i.setupTotalPages(),i.setupContentFiltering(),i.updatePaginationBtns(),i.updatePostList())},o=n(2);let a=[];const r=(t,e)=>{let n=e.querySelector(".duration"),i=new o("e1b9039f824fdaf6ec1fc594037c1ac7");i.resolve(t,function(t){let e=l(t.duration);n.textContent=e}),a.push(i)},l=t=>{const e=Math.floor(t/6e4),n=(t%6e4/1e3).toFixed(0);return e+":"+(n<10?"0":"")+n},c=(t,e)=>{setInterval(()=>{let n=a[e].audio.currentTime/a[e].audio.duration*100;t.style.width=`${n}%`},300)},u=(t,e,n)=>{t.querySelector(".progress-bar").addEventListener("click",i=>{let s=t.querySelector(".progress-bar").offsetWidth,o=i.offsetX/s*a[n].audio.duration;a[n].audio.currentTime=o,c(e,n)})},p="listen",d="loading",h=t=>{let e=t.querySelector(".action");e.classList.toggle("pause"),e.classList.toggle("listen");let n=t.querySelector(".pause"),i=t.querySelector(".listen");n&&(n.querySelector(".action-label").innerText="pause",n.setAttribute("aria-label","Pause the podcast")),i&&(i.querySelector(".action-label").innerText=p,i.setAttribute("aria-label","Listen to the podcast"));let s=t.querySelector(".audio-control i");s.classList.toggle("icon-pause"),s.classList.toggle("icon-play")};var y=()=>{if(!document.querySelector(".body-home"))return;const t=getComputedStyle(document.body).getPropertyValue("--breakpoint").replace(/"/g,"").trim();if("xsmall"==t||"small"==t)return;const e=document.querySelector(".site-title-main"),n=document.getElementById("the_arrow"),i=document.getElementById("trade_arrow"),s=document.getElementById("guys_arrow"),o=document.querySelector(".featured-stat-container");function a(t){const{top:e,bottom:n,width:i}=t.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight;return{isVisible:(e>0||n>0)&&e<s,width:i,top:e}}window.addEventListener("scroll",function(){let t=a(o);t.isVisible&&o.style.setProperty("--background-width",t.width/1.25-t.top+"px"),a(e).isVisible&&(e.classList.contains("in-view")||e.classList.add("in-view"),function(){const t=window.pageYOffset/2,e="translate("+t+"px)",o="translate(-"+t+"px)";n.style.setProperty("transform",o),s.style.setProperty("transform",o),i.style.setProperty("transform",e)}())})};var g=()=>{const t=document.getElementById("nav-trigger"),e=document.getElementById("nav-trigger-label"),n=e.getAttribute("data-label-open"),i=e.getAttribute("data-label-close"),s=document.getElementById("site-overlay");t.addEventListener("change",function(){t.checked?(document.body.classList.add("menu-open"),s.classList.add("menu-open"),e.innerHTML=i):(document.body.classList.remove("menu-open"),s.classList.remove("menu-open"),e.innerHTML=n)}),s.addEventListener("click",function(){t.checked=!t.checked,function(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}(t,"change")})};var f=function(){const t=document.querySelector(".post-feature-video");if(!t)return;const e=function(t){let e;const n=t.getAttribute("data-url").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return n&&11==n[2].length&&(e=n[2]),e}(t);e&&(t.innerHTML='<iframe width="560" height="315" src="//www.youtube.com/embed/'+e+'" frameborder="0" allowfullscreen></iframe>')};window.addEventListener("DOMContentLoaded",()=>{s(),function(){let t=document.querySelectorAll(".audio-player");t&&t.forEach((t,e)=>{let n=t.querySelector(".listen")||{};n.querySelector(".action-label").innerText=p;let i=t.querySelector(".audio-control").dataset.url;r(i,t),t.querySelector(".menu").addEventListener("click",()=>{t.querySelector(".transcript").classList.toggle("show-transcript")}),t.querySelectorAll(".action").forEach(i=>{let s=t.querySelector(".progress");i.addEventListener("click",()=>{u(t,s,e),a[e]&&a[e].playing?(a[e].pause(),h(t)):a[e]&&!a[e].playing&&(a[e].play(),0===a[e].audio.currentTime?(n.querySelector(".action-label").innerText=d,setTimeout(()=>h(t),1500)):h(t),c(s,e))})})})}(),y(),g(),f()})},2:function(t,e,n){"use strict";var i,s="protocol hostname host pathname port search hash href".split(" ");function o(t){i||(i=document.createElement("a"));var e={};i.href=t||"";for(var n=0,o=s.length;n<o;n++){var a=s[n];e[a]=i[a]}return e}function a(t,e,n){var i=o(t),s=/\?(?:.*)$/.test(i.search)?"&":"?";return i.protocol+"//"+i.host+i.port+i.pathname+i.search+s+e+"="+n+i.hash}function r(t){if(!(this instanceof r))return new r(t);t||console.info("SoundCloud API requires clientId, get it at https://developers.soundcloud.com"),this._events={},this._clientId=t,this._baseUrl="https://api.soundcloud.com",this.playing=!1,this.duration=0,this.audio=document.createElement("audio")}r.prototype.resolve=function(t,e){var n=this._baseUrl+"/resolve.json?url="+encodeURIComponent(t)+"&client_id="+this._clientId;this._json(n,function(n){if(this.cleanData(),Array.isArray(n))n={tracks:n},this._playlist=n;else if(n.tracks)this._playlist=n;else{this._track=n;var i=o(t);this._track.stream_url+=i.hash}this.duration=n.duration&&!isNaN(n.duration)?n.duration/1e3:0,e(n)}.bind(this))},r.prototype._jsonp=function(t,e){var n=document.getElementsByTagName("script")[0]||document.head,i=document.createElement("script"),s="jsonp_callback_"+(new Date).valueOf()+Math.floor(1e3*Math.random());window[s]=function(t){i.parentNode&&i.parentNode.removeChild(i),window[s]=function(){},e(t)},i.src=a(t,"callback",s),n.parentNode.insertBefore(i,n)},r.prototype._json=function(t,e){var n=new XMLHttpRequest;n.open("GET",t),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t={};try{t=JSON.parse(n.responseText)}catch(t){}e(t)}},n.send(null)},r.prototype.on=function(t,e){this._events[t]=e,this.audio.addEventListener(t,e,!1)},r.prototype.off=function(t,e){this._events[t]=null,this.audio.removeEventListener(t,e)},r.prototype.unbindAll=function(){for(var t in this._events){var e=this._events[t];e&&this.off(t,e)}},r.prototype.preload=function(t,e){this._track={stream_url:t},e&&(this.audio.preload=e),this.audio.src=this._clientId?a(t,"client_id",this._clientId):t},r.prototype.play=function(t){var e;if((t=t||{}).streamUrl)e=t.streamUrl;else if(this._playlist){var n=this._playlist.tracks.length;if(n){if(void 0===t.playlistIndex?this._playlistIndex=this._playlistIndex||0:this._playlistIndex=t.playlistIndex,this._playlistIndex>=n||this._playlistIndex<0)return void(this._playlistIndex=0);e=this._playlist.tracks[this._playlistIndex].stream_url}}else this._track&&(e=this._track.stream_url);if(!e)throw new Error("There is no tracks to play, use `streamUrl` option or `load` method");return this._clientId&&(e=a(e,"client_id",this._clientId)),e!==this.audio.src&&(this.audio.src=e),this.playing=e,this.audio.play()},r.prototype.pause=function(){this.audio.pause(),this.playing=!1},r.prototype.stop=function(){this.audio.pause(),this.audio.currentTime=0,this.playing=!1},r.prototype.next=function(t){t=t||{};var e=this._playlist.tracks.length;if(this._playlistIndex>=e-1){if(!t.loop)return;this._playlistIndex=-1}if(this._playlist&&e)return this.play({playlistIndex:++this._playlistIndex})},r.prototype.previous=function(){if(!(this._playlistIndex<=0))return this._playlist&&this._playlist.tracks.length?this.play({playlistIndex:--this._playlistIndex}):void 0},r.prototype.seek=function(t){if(!this.audio.readyState)return!1;var e=t.offsetX/t.target.offsetWidth||(t.layerX-t.target.offsetLeft)/t.target.offsetWidth;this.audio.currentTime=e*(this.audio.duration||0)},r.prototype.cleanData=function(){this._track=void 0,this._playlist=void 0},r.prototype.setVolume=function(t){this.audio.readyState&&(this.audio.volume=t)},r.prototype.setTime=function(t){this.audio.readyState&&(this.audio.currentTime=t)},t.exports=r},3:function(t,e,n){t.exports=n(10)}});
//# sourceMappingURL=bundle.js.map