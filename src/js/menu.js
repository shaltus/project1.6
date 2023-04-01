
  const menuOpen = document.querySelector('.menu-open')
  const content = document.querySelector('.content')
  const menu = document.querySelector('.aside')
  const menuClose = menu.querySelector('.aside__header-close')
  const overlay = document.querySelector('.overlay')

  const openMenu = function () {
    menu.classList.add('aside--active')
    overlay.classList.add('overlay--active')
    content.classList.add('content--no-scroll')
  }

  const closeMenu = function () {
    menu.classList.remove('aside--active')
    overlay.classList.remove('overlay--active')
    content.classList.remove('content--no-scroll')
  }
  const handleKeyDown = function (event) {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }
  menuOpen.addEventListener('click', openMenu)

  menuClose.addEventListener('click', closeMenu)

  overlay.addEventListener('click', closeMenu)
  document.addEventListener('keydown', handleKeyDown)


