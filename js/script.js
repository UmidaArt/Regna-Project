const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const myMenuLink = document.querySelectorAll('.menuLink')

myBurger.addEventListener('click', () => {
    myMenu.classList.toggle('showMenu')
    document.body.classList.toggle('overflow' )
})

myMenuLink.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('showMenu')
        document.body.classList.remove('overflow')
    })
})


