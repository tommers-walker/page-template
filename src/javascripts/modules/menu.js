import { utils } from './utils';

const menuBtn = document.querySelector('#js-menu-btn');
const navMenu = document.querySelector('#js-nav-menu');

const toggle = (el) => {
  utils.toggleClass(el, 'is-active');
}

const menu = {
  init() {
    menuBtn.addEventListener('click', function(e) {
      toggle(menuBtn);
      toggle(navMenu);
    });
  }
}

export { menu }
