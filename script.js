let Player = {
    name : "smash",
    chips : 100
}

let cards = []
let sum = 0

let getblackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = Player.name + "-  $" + Player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startgame() {
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}


function rendergame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "You've got blackjacked"
        getblackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message

}


function newcard() {
    if (isAlive === true && getblackjack === false) {
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        rendergame()
    }
}



