'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    let arreglo = num.split('').reverse()
    let resultado = []
    for (let i = 0; i < arreglo.length; i++) {
        resultado.push(arreglo[i] * Math.pow(2, i));
    }
    return resultado.reduce((e, i) => e + i, 0);
}

function DecimalABinario(num) {
    // tu codigo aca
    let resultado = "";
    while (num !== 0) {
        resultado = num % 2 + resultado;
        num = Math.floor(num / 2)
    }
    return resultado;
}
module.exports = {
    BinarioADecimal,
    DecimalABinario,
}