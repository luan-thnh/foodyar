const header = document.querySelector('#header');
const introduce = document.querySelector('.home__introduce');

// Handle scroll
window.onscroll = () => {
  header.classList.toggle('sticky', window.scrollY > 80);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add('fade')
      : entry.target.classList.remove('fade');
  });
});

const hidesAll = document.querySelectorAll('.hide');
hidesAll.forEach((el) => observer.observe(el));

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
  });
});
