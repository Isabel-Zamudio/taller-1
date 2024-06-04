// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:
//     Ingresa un nombre > Camilo
//     Ingresa otro nombre > Ariel
//     Pedro
//     Pablo
//     Ariel
//     Juan
//     Diana
//     Camilo

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
console.log(nombres)

let nuevoNombre = prompt("Ingrese el nuevo nombre que desea agregar a la lista: ")
nombres.push(nuevoNombre)
console.log(nombres)

let posición = parseInt(prompt("Ingrese la posición que desea remplazar: "))
let remplzarNombre= prompt("Ingrese nombre para remplazar en la posición >> " +posición +": ")

nombres.splice(posición, 1, remplzarNombre);
console.log(nombres)
