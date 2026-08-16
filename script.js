let amount = document.getElementById('mort-amount')
let term = document.getElementById('mort-term')
let rate = document.getElementById('rate')
let cal = document.querySelectorAll('div.cal')
let r1 = document.getElementById('repay')
let r2 = document.getElementById('interest-only')

function Calcular(){
    if (Number(amount.value.length) == 0) {
        cal[0].innerHTML += '<p class="required">This field is required</p>'
    }
    if (Number(term.value.length) == 0) {
        cal[1].innerHTML += '<p class="required">This field is required</p>'
    }
    if (Number(rate.value.length) == 0) {
        cal[2].innerHTML += '<p class="required">This field is required</p>'
    }
    if (r1) {
        
    }
}