document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open')
  const menu = document.querySelector('.aside')
  const menuClose = menu.querySelector('.aside__header-close')
  const overlay = document.querySelector('.overlay')

  const openMenu = function () {
    menu.classList.add('aside--active')
    overlay.classList.add('overlay--active')
  }

  const closeMenu = function () {
    menu.classList.remove('aside--active')
    overlay.classList.remove('overlay--active')
  }

  menuOpen.addEventListener('click', openMenu)

  menuClose.addEventListener('click', closeMenu)

  overlay.addEventListener('click', closeMenu)
})
