"use client";

import { useState } from "react";
import Link from "next/link";

export default function MenuDesplegable() {
  const [abierto, setAbierto] = useState(false);

  const cerrar = () => setAbierto(false);

  return (
    <div className="menu-desplegable">
      <button
        type="button"
        className={`menu-trigger ${abierto ? "menu-abierto" : ""}`}
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
      >
        <span>MENÚ</span>
        <span className="menu-icon">
          <i />
          <i />
        </span>
      </button>

      {abierto && (
        <div className="menu-dropdown">
          <div className="menu-dropdown-content">

            <div className="menu-dropdown-title">
              <span>ESCUELA DE DANZA SARA RUIZ “LA PIPI”</span>
              <button onClick={cerrar} aria-label="Cerrar menú">
                ×
              </button>
            </div>

            <nav className="menu-dropdown-links">

              <Link href="/" onClick={cerrar}>
                <span>00</span>
                <strong>Inicio</strong>
                <b>→</b>
              </Link>

              <a href="/#escuela" onClick={cerrar}>
                <span>01</span>
                <strong>La escuela</strong>
                <b>→</b>
              </a>

              <a href="/#formacion" onClick={cerrar}>
                <span>02</span>
                <strong>Formación</strong>
                <b>→</b>
              </a>

              <a href="/#triana" onClick={cerrar}>
                <span>03</span>
                <strong>Alma de Triana</strong>
                <b>→</b>
              </a>

              <Link href="/historia" onClick={cerrar}>
                <span>04</span>
                <strong>Nuestra historia</strong>
                <b>→</b>
              </Link>

              <Link href="/horarios" onClick={cerrar}>
                <span>05</span>
                <strong>Horarios</strong>
                <b>→</b>
              </Link>

              <Link href="/tienda" onClick={cerrar}>
                <span>06</span>
                <strong>Tienda</strong>
                <b>→</b>
              </Link>

              <Link href="/admin" onClick={cerrar}>
                <span>07</span>
                <strong>Administrador</strong>
                <b>→</b>
              </Link>

            </nav>

            <div className="menu-dropdown-bottom">
              <span>MONTEQUINTO · SEVILLA</span>
              <span>FLAMENCO · DANZA · TRADICIÓN</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
