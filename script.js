let current = 0
let slides = document.querySelectorAll('.hero-slide')

function showSlide(i){
slides.forEach(s=>s.classList.remove('active'))
slides[i].classList.add('active')
}

function nextHero(){
current = (current+1) % slides.length
showSlide(current)
}

function prevHero(){
current = (current-1+slides.length) % slides.length
showSlide(current)
}

setInterval(nextHero,6000)

/* Profiles */

function startApp(){
document.getElementById('profiles').style.display="none"
document.getElementById('app').style.display="block"
}

/* Row scroll */

function scrollRow(dir){
document.getElementById('row1').scrollLeft += dir * 300
}

/* Hide app initially */

document.getElementById('app').style.display="none"
