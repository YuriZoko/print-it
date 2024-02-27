const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', () => {
	let selectedDot = document.querySelector('.dot_selected')
	selectedDot.classList.remove('dot_selected')

    let selectedIndex = Array.from(dots.children).indexOf(selectedDot)
    let nextIndex = (selectedIndex - 1 + slides.length) % slides.length
    let nextDot = dots.children[nextIndex]
    nextDot.classList.add('dot_selected')

	let bannerImg = document.querySelector('.banner-img')
	bannerImg.src = `assets/images/slideshow/${slides[nextIndex].image}`

	let paragraph = document.querySelector('#banner p')
	paragraph.innerHTML = slides[nextIndex].tagLine
})


let arrowRight = document.querySelector('.arrow_right')
arrowRight.addEventListener('click', () => {
	let selectedDot = document.querySelector('.dot_selected')
	selectedDot.classList.remove('dot_selected')

    let selectedIndex = Array.from(dots.children).indexOf(selectedDot)
    let nextIndex = (selectedIndex + 1) % slides.length
    let nextDot = dots.children[nextIndex]
    nextDot.classList.add('dot_selected')

	let bannerImg = document.querySelector('.banner-img')
	bannerImg.src = `assets/images/slideshow/${slides[nextIndex].image}`

	let paragraph = document.querySelector('#banner p')
	paragraph.innerHTML = slides[nextIndex].tagLine
})

let dots = document.querySelector('.dots')
for (let i = 0; i < slides.length; i++) {
	console.log(slides[i])
	let dot = document.createElement('span')
	if (i === 0) {
		dot.classList.add('dot')
		dot.classList.add('dot_selected')
	} else {
		dot.classList.add('dot')
	}
	dots.appendChild(dot)
}