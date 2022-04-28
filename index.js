// All Variables
let welcome;
let date = new Date();
let hour = date.getHours();
let sec = date.getSeconds();
let year = date.getFullYear();

// Greeting User
if (hour < 12) {
  welcome = "Good Morning";
} else if (hour < 17) {
  welcome = "Good Afternoon";
} else {
  welcome = "Good Evening";
}
setTimeout(() => {
  var element = document.getElementById("greet");
  element.classList.add("hide");
}, 7000);
document.getElementById("text").innerHTML = welcome + " User";

// Change Color
document.addEventListener("keypress", function () {
  var color = document.getElementById("color").value;
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = color;
})


// Testimonial
const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

// dynamic copyright year.
document.getElementById("paragraph").innerHTML = year;
