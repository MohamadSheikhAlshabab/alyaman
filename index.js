// preloader
$(function() {
  $("#status").fadeOut(3000);
  $("#preloader").fadeOut(3500);
});

// to top 

//Get the button:
mybutton = document.getElementById("to_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
} 

// AOS
AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-out-sine',
  delay: 400,
  mirror: true,
  once:true
});
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

let carouselItems=null;
let radStep = null;
let options = {step:  0};
let radio = 450;
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
    setInterval(function(){
      options.step++;
      let tween = TweenLite.to(options, 2, {step:options.step--, onUpdate:updateSlides});
    }, 4000);



  })
  function updateSlides(){
    for(let i=0; i<carouselItems.length; i++){
      item = carouselItems[i];
      let angulo = radStep*(i+options.step);
      let rand = Math.ceil(Math.random() * 2);
      // console.log(rand)
      let x = Math.sin(angulo)*radio * 2.5 ;
      let z = Math.cos(angulo)*radio*1.5;
      let y = Math.cos(angulo)*55;
      item.style.zIndex = (Math.cos(angulo)>0)?2:1;
      item.style.transform = "translate3d(" + x /35+ "rem, " + y/7 + "rem, " + z/155 + "rem)";
      let matrex = window.getComputedStyle(item).getPropertyValue("transform");
      let matrexArr = matrex.split(", ");
      let translateXNum = parseInt(matrexArr[12]);
      let translateYNum = parseInt(matrexArr[13]);
      let translateZNum = parseInt(matrexArr[14]);

      if (translateXNum <= 0 && translateYNum == 78 &&translateZNum == 39 ||translateZNum == 43 ){
        item.style.opacity ="1"
      }
      else if (translateXNum == 278 && translateYNum == 39 &&translateZNum == 21 ||
        translateXNum == -278 && translateYNum == 39 &&translateZNum == 21 
        ){
      item.style.opacity ="0.5"
      }
      else if (translateXNum == 278 && translateYNum == -39 &&translateZNum == -21  ||
        translateXNum == -278 && translateYNum == -39 &&translateZNum == -21 
        ){
        item.style.opacity ="0.3"
      }
      else if (translateXNum >= 0 && translateYNum == -78 &&translateZNum == -43 ){
        item.style.opacity ="0.1"
      }
    }
  }
  // setTimeout(updateSlides,1000)
  function moveSlides(newStep){
    move = angleDist(options.step-radStep, newStep-radStep)/radStep;
    // console.log(options.step, newStep, move);
    TweenLite.to(options, 1, {step: newStep - options.step , onUpdate:updateSlides});
    // options.step = -(Math.round(move));
  }
  function angleDist(a, b){
    let diff = a - b;
    let dist = Math.random((diff / Math.PI) %(2*Math.PI) /Math.PI);
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
  $(".gallery_img").hide();
  // $(".gallery_img").slice(0, 0).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".gallery_container").show();
    $("#loadMore").text("Show More").append($(` <br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    class="bi bi-chevron-double-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    <path fill-rule="evenodd"
      d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>`))
    $(".gallery_img:hidden").slice(0, 8).show();
    if($(".gallery_img:hidden").length == 0) {
      $("#loadMore").text("No More").addClass("noContent").fadeOut('slow');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
  }, 1500);
  });

})



$('a[href=#top]').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 600);
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('.totop a').fadeIn();
  } else {
      $('.totop a').fadeOut();
  }
});




// close hamburger

$(document).ready(function(){
  // $('.menu-tab').click(function(){
  //   $('.menu-hide').toggleClass('show');
  //   $('.menu-tab').toggleClass('active');
  // });
  $('.nav_link').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
});
