// alert('Este es un alert desde archivo.js');

// document.write('Hola, este es un mensaje en pantalla');

// Manejo de variables:

var nombre = "Juan Valdez";
var edad = 55;

// document.write("Hola, " + nombre + " tu edad es: " + edad);

// var concat = nombre + " " + edad;

// document.write("<br>" + concat);

// DOM Document Object Model

// var x = document.getElementById("dato");
// x.innerHTML += `<h1> Hola, esta es la variable impresa ${concat} </h1>`;

// implementación de estructuras de control (if)

// if (edad >= 55){
//     x.innerHTML += `<h1> Juan Valdez ya es un adulto mayor </h1>`;
// }

// implementación de un for:

/* for(var i=0; i<=10; i++){
    document.writeln("Iteración: " + i + "<br>")
    var c = 20;
    // document.writeln("la variable es: " + c);
} */


// let Vs var
// document.writeln("La variable es: " + c);

// definir funciones:

function mostrar(nombre, edad){
    document.writeln("hola " + nombre + " tu edad es: " + edad);
}

// implementar la función:
mostrar("David Ramirez", 38);

function cuadrado(num){
    return num*num;
}

var y = cuadrado(5);

document.writeln("<br>" + "el cuadrado es: " + y);

// console.log("el resultado de la función cuadrado es: " + y);

// objetos JSON:
// estructuras de tipo colección. permiten guardar multiples datos.

var auto = {
    marca: 'Ford',
    modelo: '2020',
    color: 'Gris',
    dueño: 'Juan',
    placa: 'abc123'
}

document.writeln("<br>" + 'La marca del auto es ' + auto.marca + ", el modelo es: " + auto.modelo);

// NoSQL se guarda la información en JSON

// Callbacks

// implementamos función
/* function division (x, y, callback){
    if(y === 0){
        return callback('Error, No se puede dividir entre cero!')
    }else{
        callback(null,x/y);
    }
}

// implementar callback:

division(40,0, function(err, res){
     if(err){
        return console.log(err);
     }
    console.log("La respuesta: " + res);
}); */

// Ejemplo 2:
// implementamos función:

/* const leerAlumno = (id, callback) => {
    
    const alumno = {
        id,
        nombre: 'Juan'
    }

    setTimeout(() => {
        callback(alumno);
    }, 3000);

} */

// Enviar datos a la función + el callback
/* leerAlumno(20, (alumno)=>{
    console.log('id: ', alumno.id);
    console.log('nombre: ', alumno.nombre)
}); */

// PROMESAS

/* const promesa = new Promise((res, rej) => {

    setTimeout(() => {
        console.log('Tarea en 5 seg');
        var temp = "Promesa Ok";

        if(temp){
            res(temp);
        }

    }, 5000);

});

// implementar la promesa:
promesa.then(resultado => {
    console.log('Then de la promesa: ', resultado);
})
.catch(err => {
    console.log(err)
}); */

// ASYNC / AWAIT

// 1. Crear una primer función

let getNombre = async() => {
    return 'Juan';
};

// 2. Crear una 2da función
let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

// 3. Implementar Async / Await
saludo().then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
});
