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

  const inputQ = document.querySelectorAll('[data-input]'),
        labelQ = document.querySelectorAll('[data-label]');

  inputQ.forEach((item, i) => {
    item.addEventListener('click', () => {
      labelQ[i].classList.add('modal__label-focus--1');
    });
  });

  inputQ.forEach((item, i) => {
    item.addEventListener('blur', () => {
      if (item.value != 0) {
        labelQ[i].classList.add('modal__label-focus--1');
      } else {
        labelQ[i].classList.remove('modal__label-focus--1');
      }
    });
  });

  // Смена темы 

  const btnBlack = document.querySelectorAll('[data-black]'),
    btnWhite = document.querySelectorAll('[data-white]'),
    body = document.querySelector('body'),
    header = document.querySelector('[data-header]'),
    imgMob = document.querySelector('[data-img-mob]'),
    imgTab = document.querySelector('[data-img-tab]'),
    imgDesk = document.querySelector('[data-img-desk]'),
    titles = document.querySelectorAll('[data-title]'),
    subTitles = document.querySelectorAll('[data-subtitle]'),
    p = document.querySelectorAll('[data-p]'),
    textFromDesign = document.querySelectorAll('[data-design]'),
    reviewsCard = document.querySelectorAll('[data-bg]'),
    blockForBtns = document.querySelectorAll('[data-border]'),
    links = document.querySelectorAll('[data-link]');

  btnBlack.forEach(item => {
    item.addEventListener('click', () => {
      blockForBtns.forEach(item => item.classList.add('block-btn'));
      btnBlack.forEach(item => item.classList.add('btn-black'));
      btnWhite.forEach(item => item.classList.add('btn-white'));
      body.classList.add('body-color');
      header.classList.add('header-bike');
      imgMob.src = 'img/bike-mobile-black2.png';
      imgTab.src = 'img/bike-tab-black2.png';
      imgDesk.src = 'img/bike-desktop-black2.png';
      titles.forEach(item => item.classList.add('title-color'));
      subTitles.forEach(item => item.classList.add('text-color'));
      p.forEach(item => item.classList.add('text-color'));
      links.forEach(item => item.classList.add('text-color'));
      textFromDesign.forEach(item => item.classList.add('text-color--2'));
      reviewsCard.forEach(item => item.classList.add('background-white'));
    });
  });

  btnWhite.forEach(item => {
    item.addEventListener('click', () => {
      blockForBtns.forEach(item => item.classList.remove('block-btn'));
      btnBlack.forEach(item => item.classList.remove('btn-black'));
      btnWhite.forEach(item => item.classList.remove('btn-white'));
      body.classList.remove('body-color');
      header.classList.remove('header-bike');
      imgMob.src = 'img/card-bike-mob.png';
      imgTab.src = 'img/card-bike-tab.png';
      imgDesk.src = 'img/card-bike-desk.png';
      titles.forEach(item => item.classList.remove('title-color'));
      subTitles.forEach(item => item.classList.remove('text-color'));
      p.forEach(item => item.classList.remove('text-color'));
      links.forEach(item => item.classList.remove('text-color'));
      textFromDesign.forEach(item => item.classList.remove('text-color--2'));
      reviewsCard.forEach(item => item.classList.remove('background-white'));
    });
  });
});