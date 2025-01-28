const botaoAvancar = document.getElementById('btn-avancar');
const botaoVoltar = document.getElementById('btn-voltar');
const cartaoLista = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartaoLista.forEach(cartao => {
    cartao.addEventListener("click", function() {
        const cartaVirada = cartao.querySelector('.carta-virada');

        //virar o cartao
        cartao.classList.toggle('virar');
        //mostrar fundo da carta
        cartaVirada.classList.toggle('mostrar-fundo-carta');

        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');
    });
});

// botao avançar
botaoAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartaoLista.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

// botão voltar
botaoVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartaoLista[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

