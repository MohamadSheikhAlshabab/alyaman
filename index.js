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

// carousel images

var carouselItems=null;
var radStep = null;
var options = {step:  0};
var radio = 500;
(function(){ 
  document.addEventListener('DOMContentLoaded', function(){
    carouselItems = document.querySelectorAll('ul.circular_carousel li');
    carouselItems.forEach(function(item){
      item.addEventListener('click', function(e){
        e.stopPropagation();
        moveSlides(this.dataset.index);
      });
    });
    radStep = (2*Math.PI) / carouselItems.length;
    options.step = 0;
    updateSlides();
    /*setInterval(function(){
      options.step++;
      var tween = TweenLite.to(options, 1, {step:options.step++, onUpdate:updateSlides});
    }, 2000);*/
  });
  function updateSlides(){
    for(var i=0; i<carouselItems.length; i++){
      item = carouselItems[i];
      var angulo = radStep*(i+options.step);
      var x = Math.sin(angulo)*radio*2;
      var z = Math.cos(angulo)*radio - 500;
      var y = Math.cos(angulo)*75;
      item.style.zIndex = (Math.cos(angulo)>0)?2:1;
      item.style.transform = "translate3d(" + x /25+ "rem, " + y/8 + "rem, " + z/25 + "rem)";
    }
  }
  function moveSlides(newStep){
    move = angleDist(options.step-radStep, newStep-radStep)/radStep;
    console.log(options.step, newStep, move);
    TweenLite.to(options, 1, {step: newStep - options.step , onUpdate:updateSlides});
    // options.step = -(Math.round(move));
  }
  function angleDist(a, b){
    var diff = a - b;
    var dist = Math.random((diff / Math.PI) %(2*Math.PI) /Math.PI);
    return dist;
  }
})();

window.addEventListener("load",function() {
  moveSlides(newStep)
  myTimer = setInterval(function(){ updateSlides()}, 4);
})

// auto play slide show

showSlides1();

function showSlides1() {
  let slideIndex1 = 0;
  let i;
  let slides1 = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("dot");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}

// load more

$(document).ready(function(){
  $(".gallery_container").hide();
  $(".gallery_img").slice(0, 0).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".gallery_container").show();
    $("#loadMore").text("Show More")
    $(".gallery_img:hidden").slice(0, 9).slideDown();
    if($(".gallery_img:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})