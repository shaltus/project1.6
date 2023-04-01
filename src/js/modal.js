document.addEventListener('DOMContentLoaded', () => {
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
})

document.addEventListener('DOMContentLoaded', () => {
  const modalFeedbackOpen = document.querySelectorAll('.menu-btn--chat')
  const modalFeedback = document.querySelector('.modal-feedback')
  const modalFeedbackClose = document.querySelector('.modal-form__close--feedback')
  const menu = document.querySelector('.aside')
  const content = document.querySelector('.content')
  const overlay = document.querySelector('.overlay')

  const openModalFeedback = function () {
    modalFeedback.classList.add('modal-feedback--active')
    overlay.classList.add('overlay--active')
    content.classList.add('content--no-scroll')
    

    if (menu.classList.contains('aside--active')) {
      menu.classList.remove('aside--active')
    }
  }

  const closeModalFeedback = function () {
    modalFeedback.classList.remove('modal-feedback--active')
    overlay.classList.remove('overlay--active')
    content.classList.remove('content--no-scroll')
  }
  const handleKeyDown = function (event) {
    if (event.key === 'Escape') {
      closeModalFeedback()
    }
  }

  modalFeedbackOpen.forEach((btn) => {
    btn.addEventListener('click', openModalFeedback, false)
  })

  modalFeedbackClose.addEventListener('click', closeModalFeedback, false)
  
  overlay.addEventListener('click', closeModalFeedback, false)
  document.addEventListener('keydown', handleKeyDown)
})

