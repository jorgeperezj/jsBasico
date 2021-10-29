class perro {
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    ladrar(){
        console.log('Woff');
    }

    cumplirAnios(){
        this.edad++;
        console.log('Su nueva edad es: '+this.edad);
    }
}

var perro1 = new perro('Tommy','Husky', 7);

console.log(perro1);
perro1.ladrar();
perro1.cumplirAnios();