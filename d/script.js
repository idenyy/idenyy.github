const greetingFrame = document.getElementById('data')
const overlay = document.getElementById('overlay')
const closePopup = document.getElementById('closePopup')

function createSnowflake() {
	const snowflake = document.createElement('div')
	snowflake.className = 'snowflake'
	snowflake.style.width = `${Math.random() * 5}px`
	snowflake.style.height = snowflake.style.width
	snowflake.style.left = `${Math.random() * 100}%`
	snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`
	snowflake.style.animationDelay = `${Math.random() * 5}s`
	document.querySelector('.snowflakes-container').appendChild(snowflake)

	snowflake.addEventListener('animationend', () => {
		document.querySelector('.snowflakes-container').removeChild(snowflake)
	})
}

setInterval(createSnowflake, 800)

function updateCountdown() {
	const newYear = new Date('January 1, 2025 00:00:00').getTime()
	const now = new Date().getTime()
	const distance = newYear - now

	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((distance % (1000 * 60)) / 1000)

	document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`

	if (distance < 0) {
		clearInterval(x)
		document.getElementById('countdown').innerHTML = 'Happy New Year!'
	}
}
setInterval(updateCountdown, 1000)

greetingFrame.addEventListener('click', () => {
	overlay.style.display = 'block'
})

closePopup.addEventListener('click', () => {
	overlay.style.display = 'none'
})

window.addEventListener('click', event => {
	if (event.target === overlay) {
		overlay.style.display = 'none'
	}
})
