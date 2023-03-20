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
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 24
    }
  }
})

const btn = document.querySelector('.brands__all>span')
const container = document.querySelector('.brands')

btn.addEventListener('click', btnClick)

function btnClick() {
  container.classList.toggle('swiper-open')
  if (container.classList.contains('swiper-open')) {
    btn.textContent = 'Скрыть'
  } else {
    btn.textContent = 'Показать все'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const textShowMoreBtn = document.querySelector('.readMore')
  const textContainer = document.querySelector('.main-content__text')

  const toggleBrandsShowMore = () => {
    textContainer.classList.toggle('main-content__text--full')
    textShowMoreBtn.classList.toggle('readMore--hide')

    if (textContainer.classList.contains('main-content__text--full')) {
      textShowMoreBtn.textContent = 'Скрыть'
    } else {
      textShowMoreBtn.textContent = 'Читать далее'
    }
  }

  textShowMoreBtn.addEventListener('click', toggleBrandsShowMore)
})
