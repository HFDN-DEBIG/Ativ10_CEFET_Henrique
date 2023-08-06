const calculadoraForm = document.getElementById('calculadoraForm');
const resultadoElement = document.getElementById('resultado');

calculadoraForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (operacao === 'multiplicacao') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacao === 'potencia') {
        resultado = potencia(numero1, numero2);
    }

    resultadoElement.textContent = `Resultado: ${resultado}`;
    resultadoElement.style.display = 'block';
});

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function potencia(base, expoente) {
    return Math.pow(base, expoente);
}
