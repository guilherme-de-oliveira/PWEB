function fecharJanela() {
    var janelaAberta = document.getElementById('janelaAberta');
    var janelaFechada = document.getElementById('janelaFechada');
    janelaAberta.style.display = 'none';
    janelaFechada.style.display = 'block';
}

function abrirJanela() {
    var janelaAberta = document.getElementById('janelaAberta');
    var janelaFechada = document.getElementById('janelaFechada');
    janelaAberta.style.display = 'block';
    janelaFechada.style.display = 'none';
}

function quebrarJanela() {
    var janelas = document.getElementById('janelas');

    var janelaQuebrada = document.getElementById('janelaQuebrada');
    janelas.style.display = 'none';
    janelaQuebrada.style.display = 'block';
    
}