let slides = document.querySelectorAll('.slider-container')

let index = 0


function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}

setInterval(next, 8000);


function menuShow() { 
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove("open")
    } else { 
        menuMobile.classList.add('open')
    }
}