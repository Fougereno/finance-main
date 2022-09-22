let burger = document.querySelector(".burger");
let radiowrap = document.querySelectorAll(".main__ctradiowrap"); 
let radio = document.querySelectorAll(".main__ctradio"); 
let checkel = document.getElementsByClassName("main__count_checked");
const rangeInputs = document.querySelectorAll('input[type="range"]'); 
let burgermenu = document.querySelector(".nav");
let footer = document.querySelectorAll(".footer__navitem");
let info = document.querySelectorAll(".main__iitem");

radiowrap.forEach(function(element) {
  element.addEventListener('click', changeradio)
})
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
});
burger.addEventListener('click', animateburger);
footer.forEach(function(element) {
  element.addEventListener('click', addfootermenu)
});
info.forEach(function(element) {
  element.addEventListener('click', addinfoblock)
});

function animateburger() {
    if(this.classList.contains("nav_open")) {
        this.classList.remove ("nav_open");
    } else {
        this.classList.add ("nav_open");
    }; 
    if(burgermenu.classList.contains("nav_visible")) {
      burgermenu.classList.remove ("nav_visible");
    } else {
      burgermenu.classList.add ("nav_visible");
    };
}

function changeradio() {
  radiowrap.forEach (element => {
    element.classList.remove('main__count_checked'); 
  });
  this.classList.add('main__count_checked');
  for (let i = 0; i < this.childNodes.length; i++) {
    if (this.childNodes[i].className == "main__ctradio") {
      this.childNodes[i].checked = true;
    } 
  }       
}
function handleInputChange(e) {
  let target = e.target   
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'  
}
function addfootermenu() {
  if(this.classList.contains("footer__visible")) {
      this.classList.remove ("footer__visible");
  } else {
      this.classList.add ("footer__visible");
  }; 
}
function addinfoblock() {
  if(this.classList.contains("main__info_visible")) {
      this.classList.remove ("main__info_visible");
  } else {
      this.classList.add ("main__info_visible");
  }; 
}