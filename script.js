let amount = document.getElementById('mort-amount')
let term = document.getElementById('mort-term')
let rate = document.getElementById('rate')
let p = document.querySelectorAll('p.required')
let div = document.querySelectorAll(`div.required`)
let label = document.querySelectorAll(`label.required`)
let radios = document.querySelectorAll('input[type="radio"]')
let inputs = [amount,term,rate]
function Calcular(){
    if (Number(amount.value == 0 )) {
        p[0].style.display = 'block'
        div[0].style.borderColor = `var(--Red)`
        label[0].style.background = 'var(--Red)'
        label[0].style.color = 'var(--White)'
        amount.addEventListener('input', function() {
            if (amount.value > 0) {
                p[0].style.display = 'none'
                div[0].style.borderColor = ``
                label[0].style.background = ''
                label[0].style.color = ''
            }
        })
    }
    if (Number(term.value == 0 )) {
        p[1].style.display = 'block'
        div[1].style.borderColor = `var(--Red)`
        label[1].style.background = 'var(--Red)'
        label[1].style.color = 'var(--White)'
        term.addEventListener('input', function() {
            if (term.value > 0) {
                p[1].style.display = 'none'
                div[1].style.borderColor = ``
                label[1].style.background = ''
                label[1].style.color = ''
            }
        })
    }
    if (Number(rate.value == 0 )) {
        p[2].style.display = 'block'
        div[2].style.borderColor = `var(--Red)`
        label[2].style.background = 'var(--Red)'
        label[2].style.color = 'var(--White)'
        rate.addEventListener('input', function() {
            if (rate.value > 0) {
                p[2].style.display = 'none'
                div[2].style.borderColor = ``
                label[2].style.background = ''
                label[2].style.color = ''
            }
        })
    }
    if (!radios[0].checked && !radios[1].checked) {
        p[3].style.display = 'block'
    }
}
radios.forEach(function(radioinvalido) {
    radioinvalido.addEventListener('change', function (){
        p[3].style.display = 'none'
    })
})
