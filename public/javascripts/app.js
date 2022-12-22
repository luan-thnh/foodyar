const header = document.querySelector('#header')
const introduce = document.querySelector('.home__introduce')
const eyeIcons = document.querySelectorAll('.modal__eye')
const eyeSlashIcons = document.querySelectorAll('.modal__eye-slash')
const btnMenu = document.querySelector('#btn-menu')
const cardList = document.querySelector('#card-list')
const inputForms = document.querySelectorAll('.modal__form-control input')

inputForms.forEach(
  (input) =>
    (input.onblur = () => {
      const formControl = input.closest('.modal__form-control')
      if (formControl.classList.contains('error')) {
        formControl.classList.remove('error')
      }
    })
)

btnMenu.onclick = (e) => {
  e.preventDefault()

  cardList.classList.toggle('show')
}

// Handler click show password
eyeSlashIcons.forEach(
  (eyeSlashIcon, index) =>
    (eyeSlashIcon.onclick = () => {
      eyeSlashIcon.style.display = 'none'
      eyeIcons[index].style.display = 'block'
      eyeSlashIcon.parentElement.children[0].type = 'text'
    })
)

// Handler click hide password
eyeIcons.forEach(
  (eyeIcon, index) =>
    (eyeIcon.onclick = () => {
      eyeIcon.style.display = 'none'
      eyeSlashIcons[index].style.display = 'block'
      eyeIcon.parentElement.children[0].type = 'password'
    })
)

// Handle scroll
window.onscroll = () => {
  header.classList.toggle('sticky', window.scrollY > 80)
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add('fade')
      : entry.target.classList.remove('fade')
  })
})

const hidesAll = document.querySelectorAll('.hide')
hidesAll.forEach((el) => observer.observe(el))

$(document).ready(function () {
  $('.home__about-slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    arrows: false,
    dots: true,
  })
})
