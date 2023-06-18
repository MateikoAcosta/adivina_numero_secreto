const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    const input = readlineSync.question('Ingresa un número: ');
    return parseInt(input, 10);     // agrego esta linea, que transforma una cadena de caracteres(input, pues readlineSync.question() 
};                                  // devuelve una cadena de caracteres) a un numero entero, sino el juego no me andaba.

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
