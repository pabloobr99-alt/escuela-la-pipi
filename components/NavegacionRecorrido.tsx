"use client";

import { useEffect, useState } from "react";

const secciones = [
  { id: "escuela", numero: "01", nombre: "La escuela" },
  { id: "formacion", numero: "02", nombre: "Formación" },
  { id: "triana", numero: "03", nombre: "Alma de Triana" },
];

export default function NavegacionRecorrido() {
  const [activa, setActiva] = useState("escuela");

  useEffect(() => {
    const observar = () => {
      const mitad = window.innerHeight * 0.45;

      let encontrada = "escuela";

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion.id);

        if (!elemento) continue;

        const rect = elemento.getBoundingClientRect();

        if (rect.top <= mitad) {
          encontrada = seccion.id;
        }
      }

      setActiva(encontrada);
    };

    observar();
    window.addEventListener("scroll", observar, { passive: true });

    return () => window.removeEventListener("scroll", observar);
  }, []);

  return (
    <div className="navegacion-recorrido" aria-label="Recorrido por la web">
      {secciones.map((seccion, indice) => (
        <a
          key={seccion.id}
          href={`#${seccion.id}`}
          className={activa === seccion.id ? "recorrido-activo" : ""}
        >
          <span className="recorrido-numero">{seccion.numero}</span>

          <span className="recorrido-linea">
            <span />
          </span>

          <span className="recorrido-nombre">{seccion.nombre}</span>
        </a>
      ))}
    </div>
  );
}
