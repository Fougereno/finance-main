!function(){document.querySelector(".nav__burger"),document.querySelector(".main__count__radiowrap");let e=document.querySelectorAll(".main__count__radio"),t=document.getElementsByClassName("main__count_checked");function n(){for(let e=0;e<t.length;e++)t[e].classList.remove("main__count_checked");this.checked?this.parentNode.classList.add("main__count_checked"):this.parentNode.classList.remove("main__count_checked")}function c(e){let t=e.target;const n=t.min,c=t.max,o=t.value;t.style.backgroundSize=100*(o-n)/(c-n)+"% 100%"}e.forEach((function(e){e.addEventListener("change",n)})),document.querySelectorAll('input[type="range"]').forEach((e=>{e.addEventListener("input",c)}))}();