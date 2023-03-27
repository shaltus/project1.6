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
