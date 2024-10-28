//Juego de Aventuras

let puntos = 0

function iniciarJuego() { 
    let continuar
    do {
        puntos = 0 // Reiniciar puntaje para cada nueva partida
        alert("¡Bienvenido a la aventura en el bosque misterioso!")
        primeraEtapa()
        
        do {
            continuar = prompt("¿Quieres jugar otra vez? (si/no)")
            
            if (continuar === "no") {
                alert("Gracias por jugar. ¡Hasta la próxima aventura!")
            } else if (continuar !== "si" && continuar !== "no") {
                alert("Por favor, ingresa una respuesta válida")
            }
            
        } while (continuar !== "si" && continuar !== "no") 
        
    } while (continuar === "si") // Continuar si la respuesta es "si"
}

function mostrarPuntaje() {
    alert("Tu puntaje actual es: " + puntos + " puntos.")
}

function primeraEtapa() {
    let intentos = 3 // Intentos disponibles para esta etapa
    let decision
    
    for (let i = 0; i < intentos; i++) {
        decision = prompt("Te encuentras en un bosque oscuro y ves dos caminos: uno hacia un río y otro hacia una cueva. ¿Por cuál quieres ir? (escribe 'rio' o 'cueva')")
        
        if (decision === "rio") {
            puntos += 10
            alert("¡Excelente elección! Sigues el río y encuentras un barco abandonado. Ganas 10 puntos.")
            segundaEtapa()
            return
        } else if (decision === "cueva") {
            puntos += 5
            alert("Te adentras en la cueva y encuentras unas monedas antiguas. Ganas 5 puntos.")
            segundaEtapa()
            return
        } else {
            alert("Esa no es una opción válida. Pierdes una vida. Te quedan " + (intentos - i - 1) + " intentos.")
        }
    }
    alert("¡Se acabaron tus intentos en esta etapa! Pierdes el juego.")
    pierdesJuego()
}

function segundaEtapa() {
    mostrarPuntaje()
    let decision
    
    do {
        decision = prompt("Encuentras un viejo puente de madera. ¿Quieres cruzarlo o rodearlo? (escribe 'cruzar' o 'rodear')")

        if (decision === "cruzar") {
            puntos += 15
            alert("El puente aguanta tu peso y llegas al otro lado con éxito. Ganas 15 puntos.")
            terceraEtapa()
            return
        } else if (decision === "rodear") {
            puntos -= 10
            alert("El camino alrededor del puente es largo y cansado. Pierdes 10 puntos.");
            terceraEtapa()
            return
        } else {
            alert("Por favor, elige una opción válida.")
        }
    } while (decision !== "cruzar" && decision !== "rodear")
}

function terceraEtapa() {
    mostrarPuntaje()
    let decision
    
    let intentosRestantes = 2 // Límite de intentos para esta etapa
    while (intentosRestantes > 0) {
        decision = prompt("Llegas a una colina y ves un castillo a lo lejos. ¿Quieres acercarte o regresar? (escribe 'acercarte' o 'regresar')")

        if (decision === "acercarte") {
            puntos += 20
            alert("Te acercas y descubres un tesoro escondido en el castillo. Ganas 20 puntos.")
            finalizarJuego()
            return
        } else if (decision === "regresar") {
            puntos += 5
            alert("Decides volver por seguridad, y encuentras un pequeño cofre en el camino. Ganas 5 puntos.")
            finalizarJuego()
            return
        } else {
            intentosRestantes--
            alert("Esa no es una opción válida. Pierdes una vida. Te quedan " + intentosRestantes + " intentos.")
        }
    }

    alert("Te quedaste sin intentos en esta etapa. Pierdes el juego.")
    pierdesJuego()
}

function finalizarJuego() {
    mostrarPuntaje()
    alert("Gracias por jugar. Tu aventura ha terminado con un total de " + puntos + " puntos. ¡Hasta la próxima!")
}

function pierdesJuego() {
    alert("Tu puntaje final es: 0 puntos. ¡Gracias por jugar!")
}


// Iniciar el juego
iniciarJuego();
