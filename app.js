const player = {
	name: "Michael",
	chips: 200,
	sayHello() {
		console.log("Heisann!")
	},
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")

// playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
	const randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}

function startGame() {
	isAlive = true
	const firstCard = getRandomCard()
	const secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: "
	for (const card of cards) {
		cardsEl.textContent += `${card} `
	}

	sumEl.textContent = `Sum: ${sum}`
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
	messageEl.textContent = message
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		const card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
	}
}
