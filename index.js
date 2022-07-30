let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// <!-- email validtion-->

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check(){
  if(email.value.match(regExp)){
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    email.style.outline="#F60419";
    email.style.borderColor="#F60419"
    icon1.style.display = "none";
    icon2.style.display = "block";
    error.style.display = "none";
    btn.style.display = "block";
  }else{
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    email.style.outline="#F60419";
    email.style.borderColor="#F60419"
    icon1.style.display = "block";
    icon2.style.display = "none";
    error.style.display = "block";
    btn.style.display = "none";
  }
  if(email.value == ""){
    email.style.borderColor = "lightgrey";
    email.style.background = "#fff";
    email.style.outline="#F60419";
    email.style.borderColor="#F60419"
    icon1.style.display = "none";
    icon2.style.display = "none";
    error.style.display = "none";
    btn.style.display = "none";
  }
}