let amount = document.getElementById('mort-amount')
let term = document.getElementById('mort-term')
let rate = document.getElementById('rate')

let p = document.querySelectorAll('p.required')
let div = document.querySelectorAll(`div.required`)
let label = document.querySelectorAll(`label.required`)

let radios = document.querySelectorAll('input[type="radio"]')
let inputs = [amount,term,rate]


function Calcular(){
    let mortvalue = Number(amount.value)
    let anos = Number(term.value)
    let taxa = Number(rate.value)
    
    let meses = anos * 12
    let Imeses = (taxa / 100) / 12 // isto é a taxa a.m

    inputs.forEach(function(input, i) {
        if (Number(input.value) <= 0) {
            p[i].style.display = 'block'
            div[i].classList.add('div-required')
            label[i].classList.add('label-required')
        }        
    })

    if (radios[0].checked) {
        let monthlypayment = mortvalue * (Imeses * Math.pow(1 + Imeses, meses)) / ((Math.pow(1+Imeses,meses)) -1)    

        let Payment = monthlypayment * meses
        let interest = Payment - mortvalue

        console.log('mensal:', monthlypayment);
        console.log('Total:', Payment);
        console.log('Juros:', interest);

    }else if(radios[1].checked){
        let monthlypayment = mortvalue * Imeses
        let interest = monthlypayment * meses

        console.log('Mensal:', monthlypayment)
        console.log('Juros:', interest)
        console.log('Principal:', mortvalue)
    }

    if (!radios[0].checked && !radios[1].checked) { 
        p[3].style.display = 'block'
    }

    
}
// Função para tirar erro quando escrever
inputs.forEach( (input, i) => {
    input.addEventListener('input', function () {
        if (input.value > 0) {
            p[i].style.display = 'none'
            div[i].classList.remove('div-required')
            label[i].classList.remove('label-required')            
        }
    })
})
// Função de sensor para RADIO
radios.forEach(function(radioinvalido) {
    radioinvalido.addEventListener('change', function() {
        p[3].style.display = 'none'
    })
})
function Clear() {
    inputs.forEach(function(input,i) {
        input.value = ''
        p[i].style.display = 'none'
        div[i].classList.remove('div-required')
        label[i].classList.remove('label-required')
    })
    radios.forEach(function(radio) {
        radio.checked = false
        p[3].style.display = 'none'
    })
}