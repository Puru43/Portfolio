const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('mid')[0]
const rightImg = document.getElementsByClassName('right')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    rightImg.classList.toggle('active')
})