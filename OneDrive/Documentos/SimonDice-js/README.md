🎮 Descripción del proyecto
Este proyecto implementa una versión por consola del clásico juego Simón Dice, donde el jugador debe memorizar y repetir una secuencia de colores que aumenta de longitud en cada ronda.
El objetivo es poner a prueba la memoria del usuario y comprobar hasta dónde puede llegar sin cometer errores.

El programa está desarrollado en JavaScript y se ejecuta mediante Node.js utilizando la interfaz readline para leer la entrada del usuario.

🧠 Funcionamiento del juego
Al iniciar el programa, se genera una secuencia completa de colores aleatorios.

El jugador comienza con una subsecuencia de 3 colores.

En cada ronda:

Se muestra la parte correspondiente de la secuencia.

El usuario pulsa Enter para continuar.

La pantalla se limpia.

El jugador introduce los colores uno por uno usando las letras:

R → Rojo

V → Verde

A → Azul

D → Dorado

Si el jugador acierta toda la secuencia, avanza a la siguiente ronda (la secuencia aumenta en 1 color).

Si falla, la partida termina.

Si llega al final de la secuencia completa, gana el juego.

🧩 Estructura del código
El proyecto incluye varias funciones obligatorias, cada una con una responsabilidad clara:

✔️ charToColor(color)
Convierte un carácter introducido por el usuario en el color correspondiente del enumerado tColores.
Devuelve null si el carácter no es válido.

✔️ intToColor(numero)
Convierte un número entero en el color correspondiente dentro del enumerado.

✔️ generarSecuencia(numColores)
Genera un array de longitud MAX_COLORES_SEQ con colores aleatorios.

✔️ comprobarColor(secuencia, indice, color)
Comprueba si el color introducido por el usuario coincide con el de la secuencia.

✔️ mostrarSecuencia(secuencia, numero)
Muestra por pantalla los primeros numero colores de la secuencia y espera a que el usuario pulse Enter.

✔️ comenzarJuego(nombre, rl)
Controla toda la lógica del juego:

Generación de la secuencia

Gestión de rondas

Lectura de entrada del usuario

Validación de colores

Mensajes de acierto, fallo o victoria# SIMON-DICE