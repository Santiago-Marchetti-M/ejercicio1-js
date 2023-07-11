//! EJERCICIO 1 

console.log("PRIMER EJERCICIO");

const num_1 = 20;

function par(num_1) {
    if (num_1 % 2 === 0) {
        console.log("El número " + num_1 + " es par")
    }
    else {
        console.log("El número " + num_1 + " es impar")
    }
}
par(num_1);

console.log("----");


//! EJERCICIO 2


console.log("SEGUNDO EJERCICIO");

const num_2_1 = 10;
const num_2_2 = 20;

function comparacion(num_2_1, num_2_2) {
    if (num_2_1 > num_2_2) {
        console.log("El número " + num_2_1 + " es mayor a " + num_2_2);
    }
    if (num_2_1 < num_2_2) {
        console.log("El número " + num_2_1 + " es menor a " + num_2_2);
    }
    if (num_2_1 == num_2_2) {
        console.log("El número " + num_2_1 + " es igual a " + num_2_2);
    }
}
comparacion(num_2_1, num_2_2)

console.log("----");


//! EJERCICIO 3


console.log("TERCER EJERCICIO");

const num_3 = 15;

function multiplo5(num_3) {
    if (num_3 > 0 && num_3 % 5 == 0) {
        console.log("El número " + num_3 + " es múltiplo  de 5");
    }
    else {
        console.log("El número " + num_3 + " no es múltiplo  de 5");
    }
}
multiplo5(num_3);

console.log("----");


//! EJERCICIO 4


console.log("CUARTO EJERCICIO");

contador_4 = 0;
num_4 = 10;

function ciclo(contador_4, num_4) {
    while (contador_4 < num_4) {
        console.log(contador_4);
        contador_4++;
    }
}
ciclo(contador_4, num_4);

console.log("----");


//! EJERCICIO 5


console.log("QUINTO EJERCICIO");

contador_5 = 0;
palabra = "JavaScript";
num_5 = 5;

function palabraynumero(palabra, num_5, contador_5) {
    while (contador_5 < num_5) {
        console.log(palabra);
        contador_5++;
    }
}
palabraynumero(palabra, num_5, contador_5);

console.log("----");


//! EJERCICIO 6


console.log("SEXTO EJERCICIO");

let juegos = ["Ark", "LoL", "DbD"];

function array(juegos) {
    console.log(juegos);
}
array(juegos);

console.log("----");


//! EJERCICIO 7


console.log("SEPTIMO EJERCICIO");

const num_7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function contador_7(num_7) {
    for (let i = 0; i < num_7.length; i++) {
        if (i !== 4) {
            console.log(num_7[i]);
        }
    }
}

contador_7(num_7);


//! EJERCICIO 8


console.log("OCTAVO EJERCICIO");

const array_8 = [5, 10, 15, 20, 25];
const num_8 = 2;

function multiplo(array_8, num_8) {
    for (let i = 0; i < array_8.length; i++) {
        console.log(array_8[i] * num_8);
    }
}

multiplo(array_8, num_8);

console.log("----");