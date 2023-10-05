const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt-"Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt-"Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado" id="media-final-resultado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado" id="media-final-resultado">Reprovado</span>';
const notaMinma = parseFloat(prompt("Digite a nota mínima:"));


let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizamediaFinal();
    calculamediaFinal();

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
    atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNota.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= notaMinma ? imgAprovado : imgReprovado}</td>`;
    linha += `<tr>`;

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNota.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizamediaFinal() {
    const mediaFinal = calculamediaFinal();

    document.getElementById ('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById ('media-final-resultado').innerHTML = mediaFinal >= notaMinma ? spanAprovado : spanReprovado;

    console.log(media);
}

function calculamediaFinal() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}