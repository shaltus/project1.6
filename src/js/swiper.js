const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.8,
      spaceBetween: 24
    },
    640: {
      slidesPerView: 2.8,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 'auto',
      enabled: false
    }
  }
})

const btn = document.querySelector('.brands__all>span')
const container = document.querySelector('.brands')

btn.addEventListener('click', btnClick)

function btnClick() {
  container.classList.toggle('brands--open')
  if (container.classList.contains('brands--open')) {
    btn.textContent = 'Скрыть'
  } else {
    btn.textContent = 'Показать все'
  }
}

const btn1 = document.querySelector('.tech-repair__all>span')
const container1 = document.querySelector('.tech-repair')

btn1.addEventListener('click', btnClick1)

function btnClick1() {
  container1.classList.toggle('tech-open')
  if (container1.classList.contains('tech-open')) {
    btn1.textContent = 'Скрыть'
  } else {
    btn1.textContent = 'Показать все'
  }
}
