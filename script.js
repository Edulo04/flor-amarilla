const pantalla = document.getElementById("pantalla");

const inicio = document.getElementById("inicio");
const segundo = document.getElementById("segundo");
const ramito = document.getElementById("ramito");
const mensajeFinal = document.getElementById("final");
const petalosCaidos = document.getElementById("petalos-caidos");

let activado = false;


pantalla.addEventListener("click", () => {

    if (activado) return;

    activado = true;


    // Desaparece el primer mensaje

    inicio.classList.add("ocultar");


    // Aparece "Un pequeño gesto..."

    setTimeout(() => {

        segundo.classList.add("mostrar");

    }, 800);


    // Desaparece el segundo mensaje

    setTimeout(() => {

        segundo.classList.remove("mostrar");
        segundo.classList.add("ocultar");

    }, 2500);


    // Aparece el ramito

    setTimeout(() => {

        ramito.classList.add("mostrar");

        crearPetalos();

    }, 2700);


    // Mensaje final

    setTimeout(() => {

        mensajeFinal.classList.add("mostrar");

    }, 5100);

});


function crearPetalos() {

    for (let i = 0; i < 12; i++) {

        const petalo = document.createElement("span");

        petalo.className = "petalo-caido";

        petalo.style.left =
            (35 + Math.random() * 30) + "%";

        petalo.style.animationDelay =
            (Math.random() * 2) + "s";

        petalo.style.animationDuration =
            (4 + Math.random() * 2) + "s";

        petalosCaidos.appendChild(petalo);
    }

}
