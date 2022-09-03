let burger = document.querySelector(".nav__burger");

burger.addEventListener("click", animateburger);

function animateburger() {
    if(this.classList.contains("nav_open")) {
        this.classList.remove ("nav_open");
    } else {
        this.classList.add ("nav_open");
    };
}