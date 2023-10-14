import { GestionarAlumno } from "./GestionarAlumno.js";

const alumnoForm = document.getElementById('alumno-form');
const nombreInput = document.getElementById('nombre');
const calificacionInput = document.getElementById('calificacion');
const agregarAlumnoButton = document.getElementById('agregar-alumno');
const aprobadosList = document.getElementById('aprobados');
const reprobadosList = document.getElementById('reprobados');

const listaAlumnos = new GestionarAlumno();

agregarAlumnoButton.addEventListener('click', () => {
    const nombre = nombreInput.value;
    const calificacion = parseFloat(calificacionInput.value);

    if (nombre && !isNaN(calificacion) && calificacion >= 0 && calificacion <= 10) {
        listaAlumnos.agregarAlumno(nombre, calificacion);

        aprobadosList.innerHTML = '';
        reprobadosList.innerHTML = '';

        let actual = listaAlumnos.inicio;
        while (actual) {
            if (actual.calificacion >= 7) {
                const listItem = document.createElement('li');
                listItem.textContent = `Nombre: ${actual.nombre} Calificación: ${actual.calificacion}`;
                aprobadosList.appendChild(listItem);
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = `Nombre: ${actual.nombre} Calificación: ${actual.calificacion}`;
                reprobadosList.appendChild(listItem);
            }
            actual = actual.siguiente;
        }
    } else if (calificacion > 10) {
        alert('La calificación es incorrecta. La calificación máxima es 10.');
    } else {
        alert('Los datos no coinciden, por favor agregue datos válidos.');
    }

    nombreInput.value = '';
    calificacionInput.value = '';
});

