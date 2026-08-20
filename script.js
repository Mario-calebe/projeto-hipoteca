const amount = document.getElementById('mort-amount')
const term = document.getElementById('mort-term')
const rate = document.getElementById('rate')

const mensagensErro = document.querySelectorAll('p.required')
const campos = document.querySelectorAll(`div.required`)
const labels = document.querySelectorAll(`label.required`)// Icones dos campos

const radios = document.querySelectorAll('input[type="radio"]')
const inputs = [amount,term,rate]

const pendente = document.querySelector('div.pending')
const resultado = document.querySelector('div.result')
const h1card = document.querySelector('div.card > h1')
const h2card = document.querySelector('div.card > h2')

document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()
    //Chamar a função, eu criei a função, mas ela não pertence a um evento, agr ela é CHAMADA quando o evento de submit ocorre!
    Calcular()
})

function Calcular(){
    let mortvalue = Number(amount.value)
    let anos = Number(term.value)
    let taxa = Number(rate.value)
    
    let meses = anos * 12
    let taxamensal = (taxa / 100) / 12 // isto é a taxa a.m
    let monthlypayment
    let Payment
    let interest

    let erro = false
    inputs.forEach(function(input, i) {
        if (Number(input.value) <= 0) {
            mensagensErro[i].style.display = 'block'
            campos[i].classList.add('div-required')
            labels[i].classList.add('label-required')
            
            erro = true
        }        
    })

    if (!radios[0].checked && !radios[1].checked) { 
        mensagensErro[3].style.display = 'block'
        return
    }

    if (erro) {
        return
    }


    if (radios[0].checked) {
        monthlypayment = mortvalue * (taxamensal * Math.pow(1 + taxamensal, meses)) / ((Math.pow(1+taxamensal,meses)) -1)    

        Payment = monthlypayment * meses
        interest = Payment 
        let total = interest.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })
        let mensal = monthlypayment.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })

        h1card.innerText = `${mensal}`
        h2card.innerText = `${total}`

    }else if(radios[1].checked){
        monthlypayment = mortvalue * taxamensal
        interest = monthlypayment * meses + mortvalue

        let total = interest.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })
        let mensal = monthlypayment.toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })
        
        h1card.innerText = `${mensal}`
        h2card.innerText = `${total}`

        // console.log('Mensal:', monthlypayment)
        // console.log('Juros:', interest)
        // console.log('Principal:', mortvalue)
    }
    pendente.style.display = 'none'
    resultado.style.display = 'block'

}
// Função para tirar erro quando escrever
inputs.forEach( (input, i) => {
    input.addEventListener('input', function () {
        if (input.value > 0) {
            mensagensErro[i].style.display = 'none'
            campos[i].classList.remove('div-required')
            labels[i].classList.remove('label-required')            
        }
    })
})
// Função de sensor para RADIO
radios.forEach(function(radioinvalido) {
    radioinvalido.addEventListener('change', function() {
        mensagensErro[3].style.display = 'none'
    })
})
document.getElementById('Clear').addEventListener('click', function(){
    inputs.forEach(function(input,i) {
        input.value = ''
        mensagensErro[i].style.display = 'none'
        campos[i].classList.remove('div-required')
        labels[i].classList.remove('label-required')
    })
    radios.forEach(function(radio) {
        radio.checked = false
        mensagensErro[3].style.display = 'none'
    })
    resultado.style.display = 'none'
    pendente.style.display = 'flex'
    
})

