"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const iniciarSesion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setCargando(true);

    /*
      ACCESO PROVISIONAL

      Más adelante sustituiremos esto por autenticación real
      con base de datos.

      Usuario:
      admin

      Contraseña:
      lapipi
    */

    if (usuario === "admin" && password === "lapipi") {
      localStorage.setItem("pipi_admin_auth", "true");

      setTimeout(() => {
        router.push("/admin");
      }, 400);

      return;
    }

    setCargando(false);
    setError("Usuario o contraseña incorrectos.");
  };

  return (
    <main className="admin-login">

      <div className="admin-login-background">
        <span>LA PIPI</span>
      </div>

      <section className="admin-login-card">

        <div className="admin-login-top">

          <div className="admin-login-brand">
            <span>ESCUELA DE DANZA</span>

            <strong>SARA RUIZ</strong>

            <em>“LA PIPI”</em>
          </div>

          <span className="admin-login-number">
            00 / 01
          </span>

        </div>

        <div className="admin-login-intro">

          <span>ÁREA PRIVADA</span>

          <h1>
            Bienvenida
            <br />
            <em>de nuevo.</em>
          </h1>

          <p>
            Accede al espacio de administración
            de la Escuela de Danza Sara Ruiz “La Pipi”.
          </p>

        </div>

        <form
          className="admin-login-form"
          onSubmit={iniciarSesion}
        >

          <label>
            <span>USUARIO</span>

            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Introduce tu usuario"
              autoComplete="username"
            />
          </label>

          <label>
            <span>CONTRASEÑA</span>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
              autoComplete="current-password"
            />
          </label>

          {error && (
            <div className="admin-login-error">
              <span>×</span>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={cargando}
          >
            {cargando
              ? "ACCEDIENDO..."
              : "ENTRAR AL ADMINISTRADOR →"}
          </button>

        </form>

        <div className="admin-login-footer">

          <span>
            MONTEQUINTO · SEVILLA
          </span>

          <span>
            FLAMENCO · DANZA · TRADICIÓN
          </span>

        </div>

      </section>

    </main>
  );
}
