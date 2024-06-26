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
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
})


/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.querySelector('#theme-button')
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.section__title`, { delay: 500, origin: 'bottom' })
sr.reveal(`.section__subtitle`, { delay: 500, origin: 'top' })
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })
sr.reveal(`.about__img`, { origin: 'left' })
sr.reveal(`.about__info `, { delay: 900, origin: 'top' })
sr.reveal(`.about__description `, { delay: 900, origin: 'bottom' })
sr.reveal(`.about__data`, { delay: 600, origin: 'right' })
sr.reveal(`.skills__card-1`, { delay: 900, origin: 'left' })
sr.reveal(`.skills__card-2`, { delay: 900, origin: 'bottom' })
sr.reveal(`.skills__card-3`, { delay: 900, origin: 'right' })
// sr.reveal(`.work__filters`, { delay: 900, origin: 'top' })
sr.reveal(`.work`, { delay: 900, origin: 'bottom' })
sr.reveal(`.contact__box-1`, { delay: 900, origin: 'left' })
sr.reveal(`.contact__box-2`, { delay: 900, origin: 'right' })


/*=============== HOME TEXT ANIMATION ===============*/
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