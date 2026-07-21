/*
    [X]saber quando o botao foi clicadoo
    [x] peagr o numero de telefone
    [x] pegar a mensagem
    [x] criar o link personalizado
    [x] disponibilizar o link na tela
    [x] copiar link quando botao de copiar link for clicado


    CADA FUNCAO DEVE FAZER UMA COISA

    1) ORGANIZAR TUDO(PEGAR MENSAGEM, PEGAR NUMERO E ETC)
    2) CRIAR LINK
    3) COPIAR LINK

*/
let linkCompleto = ""




function criarLink(numero, mensagem) {
    let numeroCompleto = '55' + numero

    let link = `https://wa.me/${numeroCompleto}?text=${mensagem}`

    return link

}


function gerarLink() {
    let numeroDigitado = document.getElementById('numero').value
    let mensagemDigitada = document.getElementById('mensagem').value

    linkCompleto = criarLink(numeroDigitado, mensagemDigitada)

    document.getElementById('LinkGerado').textContent = linkCompleto
    document.getElementById('resultado').classList.add('mostrar')
    document.getElementById('mensagemSucesso').textContent = ''
}


function CopiarLink() {
    navigator.clipboard.writeText(linkCompleto) //atalho de copiar link

    alert("✅ link copiado")
}