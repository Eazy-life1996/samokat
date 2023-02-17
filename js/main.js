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

  // Подпись к инпуту

  const input = document.querySelector('[data-input]'),
        label = document.querySelector('[data-label]');
  
  input.addEventListener('focus', () => {
    label.classList.add('modal-review__label-2');
  });

  input.addEventListener('blur', () => {
    if (input.value != 0) {
      label.classList.add('modal-review__label-2');
    } else {
      label.classList.remove('modal-review__label-2');
    }
  });
});