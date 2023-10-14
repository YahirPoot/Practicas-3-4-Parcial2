import Alumno from './Alumno.js';

export class GestionarAlumno {
    constructor() {
        this.inicio = null;
    }

    agregarAlumno(nombre, calificacion) {
        const nuevoAlumno = new Alumno(nombre, calificacion);

        if (!this.inicio) {
            this.inicio = nuevoAlumno;
        } else {
            let actual = this.inicio;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoAlumno;
        }
    }

    alumnoAprobados() {
        const aprobados = new GestionarAlumno();
        let actual = this.inicio;
        while (actual) {
            if (actual.calificacion >= 7) {
                aprobados.agregarAlumno(actual.nombre, actual.calificacion);
            }
            actual = actual.siguiente;
        }
        return aprobados;
    }

    alumnoReprobados() {
        const reprobados = new GestionarAlumno();
        let actual = this.inicio;
        while (actual) {
            if (actual.calificacion < 7) {
                reprobados.agregarAlumno(actual.nombre, actual.calificacion);
            }
            actual = actual.siguiente;
        }
        return reprobados;
    }
}
