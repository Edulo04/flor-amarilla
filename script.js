const pantalla = document.getElementById("pantalla");

const inicio = document.getElementById("inicio");
const segundo = document.getElementById("segundo");
const ramito = document.getElementById("ramito");
const mensajeFinal = document.getElementById("final");
const petalosCaidos = document.getElementById("petalos-caidos");

let activado = false;


/* =====================================
   INTERACCIÓN PRINCIPAL
===================================== */

pantalla.addEventListener("click", iniciarSorpresa);


function iniciarSorpresa() {

    // Evitamos que la animación pueda iniciarse
    // varias veces.

    if (activado) {
        return;
    }

    activado = true;


    /* =================================
       1. DESAPARECE EL PRIMER MENSAJE
    ================================= */

    inicio.classList.add("ocultar");


    /* =================================
       2. APARECE:
          "Un pequeño gesto..."
    ================================= */

    setTimeout(() => {

        segundo.classList.add("mostrar");

    }, 900);


    /* =================================
       3. DESAPARECE EL SEGUNDO MENSAJE
    ================================= */

    setTimeout(() => {

        segundo.classList.remove("mostrar");

        segundo.classList.add("ocultar");

    }, 2700);


    /* =================================
       4. APARECE EL RAMITO
    ================================= */

    setTimeout(() => {

        ramito.classList.add("mostrar");

        crearPetalos();

    }, 3000);


    /* =================================
       5. APARECE EL MENSAJE FINAL
    ================================= */

    setTimeout(() => {

        mensajeFinal.classList.add("mostrar");

    }, 5700);

}


/* =====================================
   PÉTALOS QUE CAEN
===================================== */

function crearPetalos() {

    // Creamos pocos pétalos para que
    // el efecto sea sutil.

    for (let i = 0; i < 10; i++) {

        const petalo =
            document.createElement("span");


        petalo.className =
            "petalo-caido";


        /*
         * Los hacemos caer principalmente
         * alrededor del ramito.
         */

        petalo.style.left =
            (35 + Math.random() * 30) + "%";


        /*
         * Cada pétalo empieza
         * en un momento diferente.
         */

        petalo.style.animationDelay =
            (Math.random() * 2.5) + "s";


        /*
         * Velocidad ligeramente diferente.
         */

        petalo.style.animationDuration =
            (4.5 + Math.random() * 2) + "s";


        petalosCaidos.appendChild(petalo);

    }

}


/* =====================================
   EVITAR SCROLL EN CELULAR
===================================== */

document.addEventListener(
    "touchmove",
    (event) => {

        event.preventDefault();

    },
    {
        passive: false
    }
);
