let amount = document.getElementById('mort-amount')
let term = document.getElementById('mort-term')
let rate = document.getElementById('rate')

let p = document.querySelectorAll('p.required')
let div = document.querySelectorAll(`div.required`)
let label = document.querySelectorAll(`label.required`)

let radios = document.querySelectorAll('input[type="radio"]')
let inputs = [amount,term,rate]

let pendente = document.querySelector('div.pending')
let resultado = document.querySelector('div.result')
let h1card = document.querySelector('div.card > h1')
let h2card = document.querySelector('div.card > h2')

function Calcular(){
    let mortvalue = Number(amount.value)
    let anos = Number(term.value)
    let taxa = Number(rate.value)
    
    let meses = anos * 12
    let Imeses = (taxa / 100) / 12 // isto é a taxa a.m
    let monthlypayment
    let Payment
    let interest
    inputs.forEach(function(input, i) {
        if (Number(input.value) <= 0) {
            p[i].style.display = 'block'
            div[i].classList.add('div-required')
            label[i].classList.add('label-required')
        }        
    })

    if (!radios[0].checked && !radios[1].checked) { 
        p[3].style.display = 'block'
    }

    if (radios[0].checked) {
        monthlypayment = mortvalue * (Imeses * Math.pow(1 + Imeses, meses)) / ((Math.pow(1+Imeses,meses)) -1)    

        Payment = monthlypayment * meses
        interest = Payment 
        let total = interest.toLocaleString('en-Gb', {
            style: 'currency',
            currency: 'GBP'
        })
        let mensal = monthlypayment.toLocaleString('en-Gb', {
            style: 'currency',
            currency: 'GBP'
        })

        h1card.innerText = `${mensal}`
        h2card.innerText = `${total}`

    }else if(radios[1].checked){
        monthlypayment = mortvalue * Imeses
        interest = monthlypayment * meses + mortvalue

        let total = interest.toLocaleString('en-Gb', {
            style: 'currency',
            currency: 'GBP'
        })
        let mensal = monthlypayment.toLocaleString('en-Gb', {
            style: 'currency',
            currency: 'GBP'
        })
        
        h1card.innerText = `${mensal}`
        h2card.innerText = `${total}`

        console.log('Mensal:', monthlypayment)
        console.log('Juros:', interest)
        console.log('Principal:', mortvalue)
    }
        if ((amount.value > 0 && term.value > 0 && rate.value > 0) && radios[0].checked || radios[1].checked) {
            pendente.style.display = 'none'
            resultado.style.display = 'block'
            
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
    resultado.style.display = 'none'
    pendente.style.display = 'flex'
    
}
