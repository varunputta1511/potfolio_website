const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});



var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
  })
})

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#3d005e",
  "#48005f",
  "#60005f",
  "#680060",
  "#7c0060",
  "#830060",
  "#950f5f",
  "#9c155f",
  "#ac265e",
  "#b22c5e",
  "#c03b5d",
  "#c5415d",
  "#d1525c",
  "#d5585c",
  "#df685c",
  "#e36e5c",
  "#ec805d",
  "#ef865e",
  "#f59761",
  "#f89d63",
  "#fdaf69",
  "#ffb56b",

];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

particlesJS("particles-js", { "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 631.3181133058181 } }, "color": { "value": "#7d1959" }, "shape": { "type": "edge", "stroke": { "width": 1, "color": "#111dde" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.49716301422833176, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 5.7, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 160.3412060865523, "color": "#ec2a3b", "opacity": 0.4008530152163807, "width": 1 }, "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "straight": false, "out_mode": "bounce", "bounce": false, "attract": { "enable": true, "rotateX": 1763.753266952075, "rotateY": 1603.4120608655228 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.156297557645007 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 0.09744926547616141, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

cursorAnimation();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration += 1 / 3;
  }, 60);
}

var menu = document.querySelector("nav h3")
var full = document.querySelector("#fullscr")
var navimg = document.querySelector("nav img")
var flag = 0 
menu.addEventListener("click",function(){
  if(flag==0){
  full.style.top =  0 
  navimg.style.opacity = 0
  flag=1
  }else{
    full.style.top="-100%"
    navimg.style.opacity = 0;
    flag = 0
  }
})

function menuAnimation() {

}
function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()