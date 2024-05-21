/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

/*---------------------------------------------------------------------
  Initialise mobile nav
---------------------------------------------------------------------*/

/* Wait for element to be rendered before triggering code */
/* Nav-bar loaded from HTML component causing delay */
function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

waitForElm('.nav-toggler').then((elm) => {
  // define all UI variable
  const navToggler = document.querySelector('.nav-toggler');
  const navMenu = document.querySelector('.site-navbar ul');
  const navLinks = document.querySelectorAll('.site-navbar a');

  // load all event listners
  allEventListners();

  // functions of all event listners
  function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
  }

  // togglerClick function
  function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
  }

  // navLinkClick function
  function navLinkClick() {
    if (navMenu.classList.contains('open')) {
      navToggler.click();
    }
  }
});