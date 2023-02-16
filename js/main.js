window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('[data-menu]'),
        openBtn = document.querySelector('[data-open-menu]'),
        closeBtn = document.querySelector('[data-close-menu]');

  openBtn.addEventListener('click', () => {
    menu.classList.add('header__nav-close');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__nav-close');
  });

  // Открытие списка с карточке

  const list = document.querySelector('[data-list]'),
        buttonForList = document.querySelector('[data-show-list]');

  buttonForList.addEventListener('click', () => {
    list.classList.toggle('card__list--visible');
  });
});