
  const modalCallOpen = document.querySelectorAll('.menu-btn--call')
  const modalCall = document.querySelector('.modal-call')
  const modalCallClose = document.querySelector('.modal-form__close--call')
  const menu = document.querySelector('.aside')
  const content = document.querySelector('.content')
  const overlay = document.querySelector('.overlay')

  const openModalCall = function () {
    modalCall.classList.add('modal-call--active')
    overlay.classList.add('overlay--active')
    content.classList.add('content--no-scroll')

    if (menu.classList.contains('aside--active')) {
      menu.classList.remove('aside--active')
    }
  }

  const closeModalCall = function () {
    modalCall.classList.remove('modal-call--active')
    overlay.classList.remove('overlay--active')
    content.classList.remove('content--no-scroll')
  }
  const handleKeyDown = function (event) {
    if (event.key === 'Escape') {
      closeModalCall()
    }
  }

  modalCallOpen.forEach((btn) => {
    btn.addEventListener('click', openModalCall, false)
  })

  modalCallClose.addEventListener('click', closeModalCall, false)
  overlay.addEventListener('click', closeModalCall, false)
  document.addEventListener('keydown', handleKeyDown)


  modalFeedbackClose.addEventListener('click', closeModalFeedback, false)

