const readline = require("readline");

const tColores = {
    Rojo: 0,
    Verde: 1,
    Azul: 2,
    Dorado: 3
};

const MAX_COLORES_SEQ = 50;

function charToColor(color) {
    if (!color || typeof color !== "string") return null;

    const c = color.toLowerCase();

    if (c === 'r') return tColores.Rojo;
    if (c === 'v') return tColores.Verde;
    if (c === 'a') return tColores.Azul;
    if (c === 'd') return tColores.Dorado;

    return null;
}

function intToColor(numero) {
    return Object.values(tColores).includes(numero) ? numero : null;
}

function generarSecuencia(numColores) {
    const secuencia = [];

    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        const aleatorio = Math.floor(Math.random() * numColores); // 0..3
        secuencia.push(intToColor(aleatorio));
    }

    return secuencia;
}

function comprobarColor(secuenciaColores, indice, color) {
    return secuenciaColores[indice] === color;
}

function mostrarSecuencia(secuenciaColores, numero) {
    console.log("Memoriza la secuencia:");

    for (let i = 0; i < numero; i++) {
        const valor = secuenciaColores[i];
        let nombreColor = "";

        for (let nombre in tColores) {
            if (tColores[nombre] === valor) {
                nombreColor = nombre;
                break;
            }
        }

        console.log(`${i + 1}. ${nombreColor}`);
    }

    console.log("\nPulsa Enter para continuar...");
}

async function comenzarJuego(nombre, rl) {
    console.log(`Bienvenido, ${nombre}. ¡Comienza el juego!`);

    const numColores = 4; // 4 colores: 0..3
    const secuencia = generarSecuencia(numColores);

    let longitudActual = 3;
    let seguirJugando = true;

    while (longitudActual <= MAX_COLORES_SEQ && seguirJugando) {

        mostrarSecuencia(secuencia, longitudActual);

        await new Promise(resolve => rl.question("", resolve));
        console.clear();

        console.log(`Introduce la secuencia de ${longitudActual} colores (R, V, A, D):`);

        let correcto = true;

        for (let i = 0; i < longitudActual && correcto; i++) {
            const entrada = await new Promise(resolve => rl.question(`Color ${i + 1}: `, resolve));

            const colorUsuario = charToColor(entrada);

            if (colorUsuario === null) {
                console.log("Color no válido.");
                correcto = false;
            } else if (!comprobarColor(secuencia, i, colorUsuario)) {
                console.log("Fallaste. Fin de la partida.");
                correcto = false;
            }
        }

        if (!correcto) {
            seguirJugando = false;
        } else {
            console.log("¡Correcto! Pasas a la siguiente ronda.");
            longitudActual++;

            if (longitudActual > MAX_COLORES_SEQ) {
                console.log("🏆 ¡Has ganado el juego completo!");
                seguirJugando = false;
            }
        }
    }

    rl.close();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce tu nombre: ", nombre => {
    console.clear();
    comenzarJuego(nombre, rl);
});
