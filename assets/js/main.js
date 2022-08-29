// Slideshow

var counterSlide = 2;
var slide1 = document.getElementById('slide-1').checked = true;
setInterval(
  () => {
document.getElementById(`slide-${counterSlide}`).checked = true;
counterSlide++;
if (counterSlide > 2) {
  counterSlide = 1;
}
  },5000
)

// Sticky navigation bar

window.addEventListener('scroll',() => {
  let header = document.getElementById('header')
  header.classList.toggle('sticky',window.scrollY > 0)
})
