const pantalla = document.getElementById("pantalla");

const inicio = document.getElementById("inicio");

const segundo = document.getElementById("segundo");

const ramito = document.getElementById("ramito");

const mensajeFinal = document.getElementById("final");

const petalosCaidos = document.getElementById("petalos-caidos");


let activado = false;


/* =========================
   CUANDO TOCA LA PANTALLA
========================= */

pantalla.addEventListener("click", () => {

    if (activado) {
        return;
    }

    activado = true;


    /* Ocultamos el primer mensaje */

    inicio.style.opacity = "0";

    inicio.style.transform = "translateY(-20px)";


    /* Aparece el segundo mensaje */

    setTimeout(() => {

        segundo.style.opacity = "1";

        segundo.style.transform = "translateY(0)";

    }, 900);


    /* Desaparece el segundo mensaje */

    setTimeout(() => {

        segundo.style.opacity = "0";

        segundo.style.transform = "translateY(-20px)";

    }, 2500);


    /* Aparece el ramito */

    setTimeout(() => {

        ramito.classList.add("mostrar");

        crearPetalos();

    }, 2800);


    /* Aparece el mensaje final */

    setTimeout(() => {

        mensajeFinal.classList.add("mostrar");

    }, 5000);

});


/* =========================
   PÉTALOS QUE CAEN
========================= */

function crearPetalos() {

    for (let i = 0; i < 18; i++) {

        const petalo = document.createElement("div");

        petalo.classList.add("petalo-caido");

        petalo.style.left =
            Math.random() * 100 + "%";

        petalo.style.animationDelay =
            Math.random() * 3 + "s";

        petalo.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        petalosCaidos.appendChild(petalo);

    }

}
