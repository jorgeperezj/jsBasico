// var arreglo = [];

// function rellenar() {
//     let arreglo2 = [];
//     for (let i = 0; i < 10; i++) {
//         arreglo2.push(getRdm(1, 200));
//     }
//     return arreglo2;
// }

// function getRdm(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function imprimirArreglo(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(i + ' -> ' + element);
//     }
// }

// arreglo = rellenar();
// imprimirArreglo(arreglo);



var paises = {
    colombia: 
        {
            capital: "Bogotá",
            moneda: "Peso colombiano",
            poblacion: 51343921
        },
    italia:
        {
            capital: "Roma",
            moneda: "Euro",
            poblacion: 60542215
        },
    canada:
        {
            capital: "Ottawa",
            moneda: "Dolar canadiense ",
            poblacion: 38246108
        }
}

console.log(paises.italia.capital);
