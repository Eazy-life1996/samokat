window.addEventListener('DOMContentLoaded', () => {
  // Открытие навигационного меню

  const menu = document.querySelector('[data-menu]'),
        openBtn = document.querySelector('[data-open-menu]'),
        closeBtn = document.querySelector('[data-close-menu]');

  openBtn.addEventListener('click', () => {
    menu.classList.add('header__nav-close');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__nav-close');
  });

  // Открытие списка с карточки

  const list = document.querySelector('[data-list]'),
        buttonForList = document.querySelector('[data-show-list]');

  buttonForList.addEventListener('click', () => {
    list.classList.toggle('card__list--visible');
  });

  // Модальные окна

  const modalForComent = document.querySelector('[data-modal-review]'),
    modalBtnOpen = document.querySelector('[data-modal-review-open]'),
    modalBtnclose = document.querySelector('[data-modal-review-close]');

  const modalForQuestion = document.querySelector('[data-modal-question]'),
    modalBtnOpenSecond = document.querySelector('[data-modal-question-open]'),
    modalBtnCloseSecond = document.querySelector('[data-modal-question-close]');

  const toOpenModal = function (modal) {
    modal.classList.add('modal--show');
    document.body.style.overflow = 'hidden';
  };

  const toCloseModal = function (modal) {
    modal.classList.remove('modal--show');
    document.body.style.overflow = '';
  };

  const open = function (btn, modal) {
    btn.addEventListener('click', () => {
      toOpenModal(modal);
    });
  };

  const close = function (btn, modal) {
    btn.addEventListener('click', () => {
      toCloseModal(modal);
    });
  };

  open(modalBtnOpen, modalForComent);
  open(modalBtnOpenSecond, modalForQuestion);
  close(modalBtnclose, modalForComent);
  close(modalBtnCloseSecond, modalForQuestion);

  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      toCloseModal(modalForComent);
      toCloseModal(modalForQuestion);
    }
  });

  const closeTarget = function (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        toCloseModal(modal);
      }
    });
  };

  closeTarget(modalForComent);
  closeTarget(modalForQuestion);

  // Подпись к инпуту

  const input = document.querySelector('[data-input]'),
    inputSecond = document.querySelector('[data-input-2]'),
    label = document.querySelector('[data-label]'),
    labelSecond = document.querySelector('[data-label-2]');

  input.addEventListener('focus', () => {
    label.classList.add('modal__label-focus');
  });

  input.addEventListener('blur', () => {
    if (input.value != 0) {
      label.classList.add('modal__label-focus');
    } else {
      label.classList.remove('modal__label-focus');
    }
  });

  inputSecond.addEventListener('focus', () => {
    labelSecond.classList.add('modal__label-focus--2');
  });

  inputSecond.addEventListener('blur', () => {
    if (inputSecond.value != 0) {
      labelSecond.classList.add('modal__label-focus--2');
    } else {
      labelSecond.classList.remove('modal__label-focus--2');
    }
  });
});