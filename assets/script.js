
// First, tell us your name
let yourName = "Jeff Horner" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

function changeGB(gbTotalDisplay) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = gbTotalDisplay;
}

function changeCC(ccTotalDisplay) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = ccTotalDisplay;
}

function changeSugar(sugarTotalDisplay) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = sugarTotalDisplay;
}

function changeTotal(totalDisplay) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = totalDisplay;
}
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    changeGB(`${gb}`)
    changeTotal(`${total}`)
})

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        total--
    }
    changeGB(`${gb}`)
    changeTotal(`${total}`)
})

ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    changeCC(`${cc}`)
    changeTotal(`${total}`)
})

ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
       cc--
       total--
    }
    changeCC(`${cc}`)
    changeTotal(`${total}`)
})

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    changeSugar(`${sugar}`)
    changeTotal(`${total}`)
})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
       sugar--
       total--
    }
    changeSugar(`${sugar}`)
    changeTotal(`${total}`)
})

