const handleNavigation = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.nav__link').forEach((link) => {
                        if (
                            link.getAttribute('href').replace('#', '') ===
                            entry.target.id
                        ) {
                            link.classList.add('nav__link--secondary')
                        } else {
                            link.classList.remove('nav__link--secondary')
                        }
                    })
                }
            })
        },
        {
            threshold: 0.5,
        }
    )

    document
        .querySelectorAll('section')
        .forEach((section) => observer.observe(section))
}

const handleHeaderFill = () => {
    const header = document.querySelector('header')
    const scrollValue = 100

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY

        if (scrollPosition >= scrollValue) {
            header.classList.add('header--secondary')
        } else {
            header.classList.remove('header--secondary')
        }
    })
}

const button = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const burgerMenu = document.querySelector('.header__burger-layers')

const handleToggleBurgerMenu = () => {
    button.addEventListener('click', (event) =>{
        event.preventDefault()
        nav.classList.toggle('nav--visible')
        burgerMenu.classList.toggle('header__burger-layers--cross')
    })
}    

const handleCloseBurgerMenu = () => {
    document.addEventListener('click', (event) =>{
        const target = event.target;
        if(target !== button) {
            nav.classList.remove('nav--visible')
            burgerMenu.classList.remove('header__burger-layers--cross')
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleNavigation()
    handleHeaderFill()
    handleToggleBurgerMenu()
    handleCloseBurgerMenu()
})
