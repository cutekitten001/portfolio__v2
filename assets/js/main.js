/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector('#header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/



const text = document.querySelector('.home__education');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'UI/UX Designer';
  }, 0)

  setTimeout(() => {
    text.textContent = 'Frontend Developer';
  }, 4000)

  setTimeout(() => {
    text.textContent = 'Freelancer';
  }, 8000)
}
textLoad()
setInterval(textLoad, 12000)