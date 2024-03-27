const calcularBt = document.querySelector('.app__form-input-button');
let mostraImcCalculado = document.getElementById('app__form-resultado-imc');
let mostraClassificacao = document.getElementById('app__form-resultado-classificacao');

calcularBt.addEventListener('click', (event) => {
    event.preventDefault();

    const pesoInput = document.getElementById('app__form-input-info-peso').value;
    const alturaInput = document.getElementById('app__form-input-info-altura').value;
    
    if (pesoInput === '' || alturaInput === '') {
        alert('Informe valores válidos para os campos. Tente novamente');
    } else if(validaPeso(pesoInput) && validaAltura(alturaInput)) {
        const resultadoImc = calculaImc(pesoInput, alturaInput);
        mostraImcCalculado.textContent = resultadoImc.imc.toFixed(2);
        mostraClassificacao.textContent = resultadoImc.classificacao;
    } else {
        alert('Informe valores válidos para os campos. Tente novamente');
    }
});

function validaPeso(value){
    if(parseFloat(value) >= 30 && parseFloat(value) <= 300){
        return true;
    }else{
        alert('Peso Invalido. Tente novamente');
        return false;
    }
}

function validaAltura(value){
    if(parseFloat(value) >= 0.10 && parseFloat(value) <= 3){
        return true;
    }else{
        alert('Altura Invalida. Tente novamente');
        return false;
    }
}

function calculaImc(peso, altura){
    var resultadoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    var resultadoClasificacao = '';
    
    if(resultadoImc < 18.5){
        resultadoClasificacao = 'Abaixo do peso.';
    }else if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
        resultadoClasificacao = 'Peso normal.';
    }else if(resultadoImc >= 25 && resultadoImc <= 29.9){
        resultadoClasificacao = 'Sobrepeso.';
    }else if(resultadoImc >= 30 && resultadoImc <= 34.9){
        resultadoClasificacao = 'Obesidade grau 1.';
    }else if(resultadoImc >= 35 && resultadoImc <= 39.9){
        resultadoClasificacao = 'Obesidade grau 2.';
    }else if(resultadoImc >= 40){
        resultadoClasificacao = 'Obesidade grau 3.';
    } else {
        resultadoClasificacao = 'Opção inválida. Tente novamente';
    }
    
    return {imc: resultadoImc, classificacao: resultadoClasificacao};
}
