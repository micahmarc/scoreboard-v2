let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

function addOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}


function plusOne() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function plusTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function plusThree() {
    guestScore += 3
    guestEl.textContent = guestScore
}