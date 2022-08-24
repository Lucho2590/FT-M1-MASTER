'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.
var num = 180

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    var arreglo = [1];
    var i = 2;

    while (num !== 1) {
        if (num % i === 0) {
            arreglo.push(i)
            num = num / i
        } else {
            i++;
        }
    }

    return arreglo;
}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    for (let i = 0; i < array.length; i++) {
        console.log('ciclo i')
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temporal = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temporal
            }
            console.log(array[j])
        }
    }
    console.log(array)
    return array;
}



function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (let j = 1; j < array.length; j++) {
        let actual = array[j];
        let i = j - 1;
        while (i >= 0 && array[i] > actual) {
            array[i + 1] = array[i];
            --i;
        }
        array[i + 1] = actual;

    }
    return array
}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (let i = 0; i < array.length; i++) {
        let minimo = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minimo] > array[j]) {
                minimo = j;
            }
        }
        let temporal = array[i]
        array[i] = array[minimo]
        array[minimo] = temporal;
    }
    return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};