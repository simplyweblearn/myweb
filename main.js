
const menuBtn = document.getElementById('menu-btn')
const menuView = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
  menuView.classList.toggle('show')
})