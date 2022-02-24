const contenedor = document.getElementById('test');
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");


const preguntas = [
    {
        pregunta: ("<h2>1. which are the main Js variables?<h2>"),
        respuestas: {
            a: "Const, Let and Var <br>",
            b: "Body, Header, Footer <br>",
            c: "Else, If and While <br>",
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: ("<h2>2. which are the main HTML tags?<h2>"),
        respuestas: {
            a: "Const, Let and Var <br>",
            b: "Header, Body and Footer <br>",
            c: "Else, If and While <br>",
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: ("<h2>2. On JS when we should use Const<h2>"),
        respuestas: {
            a: "Always<br>",
            b: "Never <br>",
            c: "When we can´t use Let <br><br>",
        },
        respuestaCorrecta: "a"
    }
]


function mostrarTest() {
    const preguntasYrespuestas = [];
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for (letraRespuesta in preguntaActual.respuestas) {
            respuestas.push(
                `<label> 
                    <input type = "radio" name = "${numeroDePregunta}" value = "${letraRespuesta}"</input>
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`
            );
        }
        preguntasYrespuestas.push(
            `<div class = "cuestion"> ${preguntaActual.pregunta} </div>
            <div class ="respuestas"> ${respuestas.join("")} </div>
            `
        );
    });
    contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
    let testAprobado = " <h2>Congrats, we will return your collegue save and sound<h2><br>";
    let testSuspenso = "<h2> And now your collegue is going to die.. <h2><br>";

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (
            todasLasRespuestas.querySelector(checkboxRespuestas) || {}
        ).value;

        if (respuestaElegida === preguntaActual.respuestaCorrecta) {
            respuestasCorrectas++;

            respuestas[numeroDePregunta].style.color = "blue";
        } else {
            respuestas[numeroDePregunta].style.color = "red";
        }
    });
    if (respuestasCorrectas === preguntas.length) {
        resultadoTest.innerHTML =
            "<br>You have succeeded " +
            respuestasCorrectas +
            " questions out of a total of " +
            preguntas.length + testAprobado;
    } else {

        resultadoTest.innerHTML =
            "<br>You have succeeded " +
            respuestasCorrectas +
            " questions out of a total of " +
            preguntas.length + testSuspenso;
    }

}



botonRes.addEventListener("click", mostrarResultado);





//https://www.youtube.com/watch?v=bkvLa8BI9zc&list=PLat5s9AdO1poigK2lJgO5d8D_whjcTRHY&index=3

//http://www.infosofia.es/ejemplo-de-javascript-corrigiendo-un-test-de-radio-buttons/


