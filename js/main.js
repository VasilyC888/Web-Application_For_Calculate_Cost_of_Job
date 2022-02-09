const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')

const basePrise = 6000


squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value
})


squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
})

const totalPrice = basePrise * parseInt(squareInput.value)