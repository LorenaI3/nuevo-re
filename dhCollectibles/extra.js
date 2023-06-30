let arrayNum= [20, 15, 33, 49, 18, 30, 16, 26, 5, 92];


let [num1, , num2, , num3] = arrayNum

let nuevoArray= [num1,num2,num3];

//console.log(nuevoArray);
let mascota={
    nombre: "Simona" ,
    tipoDeMascota: "gato" ,
    color: "amarrilo y blanco",
    raza: "Persa",
}

let {nombre, tipoDeMascota, color, raza} = mascota

console.log("Hola, les presento a mi mascota su nombre es " + nombre + ", es un hermoso " + tipoDeMascota + ", de color: " + color + " y su raza es: " + raza);

