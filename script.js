new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,
  slidesToShow: 4.2,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  scrollLock: true
})

const bodyColor = document.querySelector('body')
const navColor = document.querySelector('nav')
const infosH1Color = document.querySelector('.infosh1')
const infosSpanColor = document.querySelector('.infosSpan')
const infosH3Color = document.querySelector('.infosH3')
const buyButtonColor = document.querySelector('.buyButton')
const linksColor = document.querySelector('.links a')
const moreColor = document.querySelector('.more')

const iconMoon = document.querySelector('.moon')
const iconSun = document.querySelector('.sun')

const themes = {
  't-light': 't-dark',
  't-dark': 't-light'
}

const buttonTheme = document.querySelector('#buttonTheme')

if (buttonTheme) {
  buttonTheme.addEventListener('click', event => {
    event.preventDefault()
    console.log(' Oi')
    const currentTheme = document.body.dataset.theme
    bodyColor.setAttribute('data-theme', themes[currentTheme] || 't-light')
    
  })
}

function change() {}
