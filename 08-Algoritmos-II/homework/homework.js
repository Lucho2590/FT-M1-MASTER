'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (array.length <= 1) {
        return array;
    }
    // var rand = Math.floor(Math.random() * array.length);
    var pivot = array[Math.floor(Math.random() * array.length)];
    // var pivot = array[0]; // Utiliza el primer valor del array como Pivot.
    var left = [];
    var rigth = [];
    var equal = []; // son los valores iguales al Pivot.

    for (let i = 0; i < array.length; i++) { // Arrancaria a iterar el array desde el index 1 del arreglo, si utilizamos el index 0 es el pivot. 
        //if (array[i] === pivot)
        if (array[i] < pivot) {
            left.push(array[i])
        } else if (array[i] > pivot) {
            rigth.push(array[i])
        } else { //Se puede eliminar esta condicion si concatenamos el Pivot en el return.
            equal.push(array[i]) // 
        } //
    }
    return quickSort(left).concat(equal).concat(quickSort(rigth));
    //return [].concat(quickSort(left), pivot, quickSort(rigth))
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length === 1) return array;

    let division = split(array);
    let left = division[0];
    let rigth = division[1];

    return unir(mergeSort(left), mergeSort(rigth));


    function split(array) {
        let dividir = Math.floor(array.length / 2); // Dividis el arraglo original en dos
        let left = array.slice(0, dividir); // A left le das la primera mitad del arreglo (de izq a derecha)
        let rigth = array.slice(dividir); // Le das la segunda mitad del arreglo. 

        return [left, rigth];
    }

    function unir(left, rigth) {
        let array = [];
        let indexLeft = 0;
        let indexRigth = 0;

        while (indexLeft < left.length && indexRigth < rigth.length) {
            if (left[indexLeft] < rigth[indexRigth]) {
                array.push(left[indexLeft])
                indexLeft++;
            } else {
                array.push(rigth[indexRigth])
                indexRigth++;
            }
        }
        return array.concat(left.slice(indexLeft)).concat(rigth.slice(indexRigth));
    }

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};