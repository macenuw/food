function modal() {
  const modal = document.querySelector('#callModal');
  const infoModal = document.querySelector('#infoModal');
  const sendBtn = document.querySelectorAll('[data-name="sendBtn"]');
  const openBtn = document.querySelectorAll('[data-name="openModal"]');
  const closeBtn = document.querySelectorAll('[data-name="closeBtn"]');
  const message = {
    seccess: `Мы свяжемся с вами в ближайшее время`,
    error: "Произовшла ошибка",
    mistake: "В введенных данных ошибка",
  }
  closeBtn.forEach(btn => btn.addEventListener('click', closeModal))
  openBtn.forEach(btn => btn.addEventListener('click', openModal))
  sendBtn.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(e.target);
  }))

  modal.addEventListener('click', (e) => {
    if (modal.classList.contains('show') && e.target === modal) {
      closeModal();
    }
  })
  window.addEventListener('keyup', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })
  const modalTimerId = setTimeout(openModal, 6000)

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId)
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  function fetchData(btn) {
    const formForFetch = btn.closest('form');
    const formInputs = formForFetch.querySelectorAll('input');
    const userData = {
      name: '',
      tel: '',
    }
    formInputs.forEach(item => {
      if (item.getAttribute('name') === 'name') {
        userData.name = item.value;
      } else {
        userData.tel = item.value
      }
    })
    const jsonData = JSON.stringify(userData);
    if (userData.name !== '' && userData.tel !== '') {
      console.log(jsonData);
      closeModal()
      showMessage(message.seccess)
      formForFetch.reset();
    } else {
      showMessage(message.mistake)
    }
  };

  function showMessage(text) {
    infoModal.classList.remove('hide');
    infoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    infoModal.querySelector('.modal__title').textContent = text;
    setTimeout(() => {
      infoModal.classList.remove('show');
      infoModal.classList.add('hide')
      document.body.style.overflow = '';
    }, 2000)
  }
}
module.exports = modal;