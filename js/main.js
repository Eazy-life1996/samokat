window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('[data-menu]'),
        openBtn = document.querySelector('[data-open-menu]'),
        closeBtn = document.querySelector('[data-close-menu]');

  openBtn.addEventListener('click', () => {
    menu.classList.remove('header__nav-close');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.add('header__nav-close');
  });
});