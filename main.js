(()=>{"use strict";var e=document.querySelectorAll(".slider__item"),t=document.querySelector(".slider__button_type_prev"),i=document.querySelector(".slider__button_type_next"),n=document.querySelector(".header__search"),s=document.querySelector(".header__logo"),r=document.querySelector(".header__title"),l=document.querySelector(".button_type_search-icon"),o=document.querySelector(".menu_type_top"),d=document.querySelector(".button_type_menu"),c=document.querySelector(".fa"),a="fa-bars",u="fa-times";function _(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.index=e}var i,n;return i=t,(n=[{key:"renderSlides",value:function(){for(var t=window.innerWidth>768,i=0;i<e.length;i++)e[i].style.display="none";if(e[this.index].style.display="list-item",t){var n=this.index+1>=e.length?0:this.index+1;e[n].style.display="list-item"}}},{key:"nextSlide",value:function(){this.index=this.index+1>=e.length?0:this.index+1,this.renderSlides()}},{key:"prevSlide",value:function(){this.index=this.index-1<0?e.length-1:this.index-1,this.renderSlides()}}])&&_(i.prototype,n),t}())(0);h.renderSlides(),t.addEventListener("click",(function(){h.prevSlide()})),i.addEventListener("click",(function(){h.nextSlide()})),window.addEventListener("resize",(function(){h.renderSlides()})),d.addEventListener("click",(function(){o.classList.toggle("menu_open"),c.classList.contains("fa-bars")?(c.classList.remove(a),c.classList.add(u)):(c.classList.add(a),c.classList.remove(u))})),l.addEventListener("click",(function(){n.classList.toggle("header__search_visible"),s.classList.toggle("header__logo_invisible"),d.classList.toggle("button_invisible"),r.classList.toggle("header__title_invisible")}))})();