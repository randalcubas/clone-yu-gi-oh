let btnVoltar = document.getElementById('btn-voltar')
let btnAvancar = document.getElementById('btn-avancar')
let cartao = document.querySelectorAll('.cartao')

let selecionado = 0
let count = cartao.length

btnVoltar.onclick = () => {
    let anterior = document.querySelector('.selecionado')
    anterior.classList.remove('selecionado')

    selecionado = selecionado == 0 ? count - 1 : selecionado - 1
    cartao[selecionado].classList.add('selecionado')
}

btnAvancar.onclick = () => {
    let anterior = document.querySelector('.selecionado')
    anterior.classList.remove('selecionado')

    selecionado = selecionado >= count - 1 ? 0 : selecionado + 1
    cartao[selecionado].classList.add('selecionado')
}