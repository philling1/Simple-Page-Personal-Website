// Creating button click show hide navbar
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li")

togglebtn.addEventListener("click", function(){
  this.classList.toggle("click");
  nav.classList.toggle("open");
})

var typed = new Typed(".input", {
  strings: ["Frontend Developer", "Fullstack React Developer", "Web Developer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true
})

$(document).ready(function(){
  // scroll-up button show/hide script
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}

// slide-up script
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});
});

