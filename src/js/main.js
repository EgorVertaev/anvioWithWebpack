import "../scss/main.scss"
import "../index.html"

import Swiper from "swiper/bundle"

const burger = document.querySelector('.menu__burger')
const burgerInner = document.querySelector('.menu__burger-inner')
const menuMob = document.querySelector('.menu-mob')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const menuMobBtn = document.querySelectorAll('.menu-mob__btn')
const menuMobSub = document.querySelectorAll('.menu-mob__sub')

menuMobBtn.forEach(button => {
  button.addEventListener('click', () => {
    let submenu = button.nextElementSibling;
    button.classList.toggle('menu-mob__btn--active')
    submenu.classList.toggle('menu-mob__sub--active')
  })
})

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle('menu__burger--active')
  burgerInner.classList.toggle('menu__burger-inner--active')
  body.classList.toggle('overlay')
  menuMob.classList.toggle('menu-mob--active')
})

wrapper.addEventListener('click', () => {
  body.classList.remove('overlay')
  menuMob.classList.remove('menu-mob--active')
  burger.classList.remove('menu__burger--active')
  burgerInner.classList.remove('menu__burger-inner--active')
  
  menuMobBtn.forEach(button => {
      button.classList.remove('menu-mob__btn--active')
  })

  menuMobSub.forEach( menu => {
    menu.classList.remove('menu-mob__sub--active')
  })
})


const modal = document.querySelector('.modal')
const openModal = document.querySelector('.btn-js')
const closeModal = document.querySelector('.modal__close-btn')

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--active')
  body.classList.add('overlay-modal')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal--active')
  body.classList.remove('overlay-modal')
})


const swiper = new Swiper('.discond-slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
  
});


const sliderNews = new Swiper('.slider-news__inner', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: "auto",
  spaceBetween: 30,
  
});

const sliderEmotions = new Swiper('.slider-emotions__inner', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  spaceBetween: 30,
  
});

const sliderEvents = new Swiper('.slider-events__inner', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 30,
  
});