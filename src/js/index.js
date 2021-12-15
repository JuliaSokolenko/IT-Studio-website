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

document.addEventListener('DOMContentLoaded', () => {
    handleNavigation()
    handleHeaderFill()
})
