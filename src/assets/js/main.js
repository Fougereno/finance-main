let burger = document.querySelector(".nav__burger");
let radiowrap = document.querySelector(".main__count__radiowrap"); 
let radio = document.querySelectorAll(".main__count__radio"); 
let checkel = document.getElementsByClassName("main__count_checked");


radio.forEach(function(element) {
    element.addEventListener('change', changeradio)
})

function animateburger() {
    if(this.classList.contains("nav_open")) {
        this.classList.remove ("nav_open");
    } else {
        this.classList.add ("nav_open");
    };
}
function changeradio() {
    for (let i = 0; i < checkel.length; i++) {
        checkel[i].classList.remove('main__count_checked');
    }
    if (this.checked) {
      this.parentNode.classList.add('main__count_checked');
    } else {
      this.parentNode.classList.remove('main__count_checked');
    }
}

const rangeInputs = document.querySelectorAll('input[type="range"]'); 

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  });

  function handleInputChange(e) {
    let target = e.target   
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'  
  }
