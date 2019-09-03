/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navBarList = document.getElementById('navbar__list');
const sectionList = document.querySelectorAll('[data-nav]')

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const populateLinks = () => {
  const fragment = document.createDocumentFragment();
  sectionList.forEach(section => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-scroll="${section.getAttribute('id')}" class="menu__link">${section.dataset.nav}</a>`
    fragment.appendChild(li);
  })
  navBarList.appendChild(fragment)
}

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
  for (let i = 0; i < sectionList.length; i++) {
    const boundary = sectionList[i].getBoundingClientRect();
    if ((boundary.top < (window.innerHeight / 3)) && (boundary.top > 0 - (window.innerHeight / 3))) {
      sectionList[i].classList.toggle('your-active-class', true)
      continue
    }
    sectionList[i].classList.toggle('your-active-class', false)
  }
}

// Scroll to anchor ID using scrollTO event
const scrollSection = (e) => {
  e.preventDefault()
  for (let i = 0; i < sectionList.length; i++) {
    if (sectionList[i].getAttribute('id') == e.target.dataset.scroll) {
      const ele = document.getElementById(sectionList[i].getAttribute('id'))
      console.log(sectionList[i].getBoundingClientRect().top)
      console.log(sectionList[i].getBoundingClientRect().left)
      window.scroll(sectionList[i].getBoundingClientRect().left, sectionList[i].getBoundingClientRect().top)
      // console.log(sectionList[i])
      // console.log(e.target.dataset.scroll)
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 
populateLinks()

// Scroll to section on link click
navBarList.addEventListener('click', scrollSection)

// Set sections as active
document.addEventListener('scroll', setActiveSection)