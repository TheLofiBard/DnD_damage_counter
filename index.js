
let countEl = document.getElementById("count-el")

let countLog = document.getElementById("pass-log")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function subtract() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    countLog.textContent += countStr
    count = 0
    countEl.textContent = count
}