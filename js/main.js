const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')


const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

const ceilings = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floors = document.querySelector('input[name="floor"]')

const basePrise = 6000

const totalPriceElement = document.querySelector('#total-price')


squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value
})


squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
})

function calculate() {
    let totalPrice = basePrise * parseInt(squareInput.value)

    for (const radio of radioType) {
        if (radio.checked === true) {
            totalPrice *= parseFloat(radio.value)
        }
    }

    for (const radio of radioBuilding) {
        if (radio.checked === true) {
            totalPrice *= parseFloat(radio.value)
        }
    }

    for (const radio of radioRooms) {
        if (radio.checked === true) {
            totalPrice *= parseFloat(radio.value)
        }
    }

    if (ceilings.checked) {
        totalPrice *= parseFloat(ceilings.value)
    }

    if (walls.checked) {
        totalPrice *= parseFloat(walls.value)
    }

    if (floors.checked) {
        totalPrice *= parseFloat(floors.value)
    }

    const formatter = new Intl.NumberFormat('ru')

    totalPriceElement.innerHTML = formatter.format(totalPrice)
}

calculate()

for(const input of inputs) {
    input.addEventListener('input', function(){
        calculate()
    })
}