//Insertar datos a un array

let numArray = [1,2,3,4,5]

function newNumber(){
numArray.push(6,7)
console.log(numArray)
}

// -----------

let txtArray = ["ana", "carlos", "karina", "luz"]

addCharacters();

function addCharacters(){
    txtArray.push("alex", "gaby")
    console.log(txtArray)
};

// resultado ["ana", "carlos", "karina", "luz","alex", "gaby")]

// -----------
// Borra el 1er elemento de nuestro array

let array = ["ana", "carlos", "karina", "luz"]

let shiftArray = array.shift();
console.log(array);

// resultado [carlos", "karina", "luz"]

// Borra el ultimo elemento de nuestro array

let array = ["ana", "carlos", "karina", "luz"]

let shiftArray = array.pop();

console.log(array);
// resultado ["ana", "carlos", "karina"]
