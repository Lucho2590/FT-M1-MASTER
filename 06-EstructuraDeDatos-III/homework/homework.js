"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    size() {
        let counter = 1;
        if (this.left) { counter += this.left.size() };
        if (this.right) { counter += this.right.size() };
        return counter;
    };
    insert(nodo) {
        if (this.value > nodo) {
            if (!this.left) {
                this.left = new BinarySearchTree(nodo);
            } else {
                this.left.insert(nodo);
            }
        } else {
            if (!this.right) {
                this.right = new BinarySearchTree(nodo);
            } else {
                this.right.insert(nodo);
            }
        }
    };
    contains(valor) {
        // Se chequea el valor de la root 
        if (valor === this.value) {
            return true;
        }
        if (valor < this.value) { // Se pregunta si valor es menor al raiz, ya que todos los valores menores a la raiz se acomodan en izq.
            if (this.left) { // Pregunta si tiene izq.
                if (this.left.contains(valor)) // hacer recurcion, y compara valor con el this.value de la posicion donde se encuentra parado.
                    return true;
            } // si valor no coincide
        } else {
            if (this.right) { // pregunta si tiene algo a la derecha.
                if (this.right.contains(valor)) {; // hacer recurcion, y compara valor con el this.value de la posicion donde se encuentra parado.
                    return true;
                }
            }
        }
        return false; // si no encuentra comparacion, retorna FALSE.
    }


    depthFirstForEach(cb, order = "in-order") {
        if (order == "pre-order") {
            cb(this.value);
            if (this.left) { this.left.depthFirstForEach(cb, order) };
            if (this.right) { this.right.depthFirstForEach(cb, order) };
        }
        if (order == "post-order") {
            if (this.left) { this.left.depthFirstForEach(cb, order) };
            if (this.right) { this.right.depthFirstForEach(cb, order) };
            cb(this.value);
        }
        if (order == "in-order") {
            if (this.left) { this.left.depthFirstForEach(cb, order) };
            cb(this.value);
            if (this.right) { this.right.depthFirstForEach(cb, order) };
        }
    };
    breadthFirstForEach(server, result = []) {
        server(this.value);
        if (this.left) {
            result.push(this.left)
        };
        if (this.right) {
            result.push(this.right)
        };
        if (result.length) {
            result.shift().breadthFirstForEach(server, result)
        }
    }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};