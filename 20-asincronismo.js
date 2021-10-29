function funAsincrona(miCallback) {
    setTimeout(function () {
        console.log('Este es el proceso como tal');
        miCallback();
    }, 5000)
}

console.log('Inicio del proceso!')
funAsincrona(function () {
    console.log('Terminando el proceso!');
});

console.log('Otro proceso aparte!');