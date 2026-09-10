"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Seccion =
  | "Inicio"
  | "Contenido"
  | "Espectáculos"
  | "Horarios"
  | "Tienda"
  | "Formación"
  | "Fotografías";

type Espectaculo = {
  id: number;
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  publicado: boolean;
};

type Producto = {
  id: number;
  nombre: string;
  precio: string;
  categoria: string;
  disponible: boolean;
};

type Clase = {
  id: number;
  dia: string;
  hora: string;
  nombre: string;
  espacio: string;
};

type Curso = {
  id: number;
  nombre: string;
  nivel: string;
  descripcion: string;
  activo: boolean;
};

const menu: [string, Seccion][] = [
  ["00", "Inicio"],
  ["01", "Contenido"],
  ["02", "Espectáculos"],
  ["03", "Horarios"],
  ["04", "Tienda"],
  ["05", "Formación"],
  ["06", "Fotografías"],
];

const espectaculosIniciales: Espectaculo[] = [
  {
    id: 1,
    titulo: "Espectáculo de Navidad",
    fecha: "Diciembre",
    lugar: "Sevilla",
    descripcion: "Nuestro tradicional espectáculo de Navidad.",
    publicado: true,
  },
  {
    id: 2,
    titulo: "Espectáculo de Fin de Curso",
    fecha: "Junio",
    lugar: "Sevilla",
    descripcion: "El gran espectáculo que pone el broche al curso.",
    publicado: true,
  },
];

const productosIniciales: Producto[] = [];

const clasesIniciales: Clase[] = [
  {
    id: 1,
    dia: "Lunes",
    hora: "16:00 – 17:00",
    nombre: "Minirevuelo",
    espacio: "Escuela",
  },
  {
    id: 2,
    dia: "Lunes",
    hora: "17:00 – 18:00",
    nombre: "Revuelo",
    espacio: "Escuela",
  },
  {
    id: 3,
    dia: "Lunes",
    hora: "18:00 – 19:00",
    nombre: "Canasteras",
    espacio: "Escuela",
  },
  {
    id: 4,
    dia: "Lunes",
    hora: "19:00 – 20:00",
    nombre: "Esencia",
    espacio: "Escuela",
  },
  {
    id: 5,
    dia: "Lunes",
    hora: "20:00 – 21:00",
    nombre: "Quejío",
    espacio: "Escuela",
  },
  {
    id: 6,
    dia: "Lunes",
    hora: "21:00 – 22:00",
    nombre: "Embrujo",
    espacio: "Escuela",
  },
];

const cursosIniciales: Curso[] = [
  {
    id: 1,
    nombre: "Formación EFA",
    nivel: "Inicial",
    descripcion: "Formación orientada al itinerario EFA.",
    activo: true,
  },
  {
    id: 2,
    nombre: "Formación EFA",
    nivel: "Medio",
    descripcion: "Formación EFA para alumnado de nivel medio.",
    activo: true,
  },
];

export default function AdminPage() {
  const router = useRouter();

  const [autorizado, setAutorizado] = useState(false);
  const [comprobandoAcceso, setComprobandoAcceso] = useState(true);

  const [activo, setActivo] = useState<Seccion>("Inicio");

  const [espectaculos, setEspectaculos] =
    useState<Espectaculo[]>([]);

  const [productos, setProductos] =
    useState<Producto[]>([]);

  const [clases, setClases] =
    useState<Clase[]>([]);

  const [cursos, setCursos] =
    useState<Curso[]>([]);

  const [tituloEspectaculo, setTituloEspectaculo] =
    useState("");

  const [fechaEspectaculo, setFechaEspectaculo] =
    useState("");

  const [lugarEspectaculo, setLugarEspectaculo] =
    useState("");

  const [descripcionEspectaculo, setDescripcionEspectaculo] =
    useState("");

  const [mostrarNuevoEspectaculo, setMostrarNuevoEspectaculo] =
    useState(false);

  const [nombreProducto, setNombreProducto] =
    useState("");

  const [precioProducto, setPrecioProducto] =
    useState("");

  const [categoriaProducto, setCategoriaProducto] =
    useState("");

  const [mostrarNuevoProducto, setMostrarNuevoProducto] =
    useState(false);

  const [nombreCurso, setNombreCurso] =
    useState("");

  const [nivelCurso, setNivelCurso] =
    useState("");

  const [descripcionCurso, setDescripcionCurso] =
    useState("");

  const [mostrarNuevoCurso, setMostrarNuevoCurso] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const [contenido, setContenido] = useState({
    titular: "Una escuela donde la danza se siente.",
    subtitulo:
      "Flamenco, danza española y formación en Montequinto.",
    historia:
      "Una historia de familia, esfuerzo y amor por la danza.",
    triana:
      "Triana forma parte del alma de La Pipi.",
  });

  useEffect(() => {
    const autenticado =
      localStorage.getItem("pipi_admin_auth");

    if (autenticado !== "true") {
      router.replace("/admin/login");
      return;
    }

    setAutorizado(true);
    setComprobandoAcceso(false);
  }, [router]);

  useEffect(() => {
    const guardadoEspectaculos =
      localStorage.getItem("pipi_espectaculos");

    const guardadoProductos =
      localStorage.getItem("pipi_productos");

    const guardadoClases =
      localStorage.getItem("pipi_clases");

    const guardadoCursos =
      localStorage.getItem("pipi_cursos");

    const guardadoContenido =
      localStorage.getItem("pipi_contenido");

    setEspectaculos(
      guardadoEspectaculos
        ? JSON.parse(guardadoEspectaculos)
        : espectaculosIniciales
    );

    setProductos(
      guardadoProductos
        ? JSON.parse(guardadoProductos)
        : productosIniciales
    );

    setClases(
      guardadoClases
        ? JSON.parse(guardadoClases)
        : clasesIniciales
    );

    setCursos(
      guardadoCursos
        ? JSON.parse(guardadoCursos)
        : cursosIniciales
    );

    if (guardadoContenido) {
      setContenido(JSON.parse(guardadoContenido));
    }
  }, []);

  useEffect(() => {
    if (espectaculos.length) {
      localStorage.setItem(
        "pipi_espectaculos",
        JSON.stringify(espectaculos)
      );
    }
  }, [espectaculos]);

  useEffect(() => {
    localStorage.setItem(
      "pipi_productos",
      JSON.stringify(productos)
    );
  }, [productos]);

  useEffect(() => {
    if (clases.length) {
      localStorage.setItem(
        "pipi_clases",
        JSON.stringify(clases)
      );
    }
  }, [clases]);

  useEffect(() => {
    if (cursos.length) {
      localStorage.setItem(
        "pipi_cursos",
        JSON.stringify(cursos)
      );
    }
  }, [cursos]);

  useEffect(() => {
    localStorage.setItem(
      "pipi_contenido",
      JSON.stringify(contenido)
    );
  }, [contenido]);

  const notificar = (texto: string) => {
    setMensaje(texto);

    setTimeout(() => {
      setMensaje("");
    }, 2500);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("pipi_admin_auth");
    router.replace("/admin/login");
  };

  const crearEspectaculo = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!tituloEspectaculo.trim()) {
      notificar("Introduce un título.");
      return;
    }

    const nuevo: Espectaculo = {
      id: Date.now(),
      titulo: tituloEspectaculo,
      fecha: fechaEspectaculo || "Próximamente",
      lugar: lugarEspectaculo || "Sevilla",
      descripcion:
        descripcionEspectaculo ||
        "Información próximamente disponible.",
      publicado: false,
    };

    setEspectaculos((actuales) => [
      ...actuales,
      nuevo,
    ]);

    setTituloEspectaculo("");
    setFechaEspectaculo("");
    setLugarEspectaculo("");
    setDescripcionEspectaculo("");
    setMostrarNuevoEspectaculo(false);

    notificar("Espectáculo creado.");
  };

  const eliminarEspectaculo = (id: number) => {
    setEspectaculos((actuales) =>
      actuales.filter((item) => item.id !== id)
    );

    notificar("Espectáculo eliminado.");
  };

  const cambiarPublicacion = (id: number) => {
    setEspectaculos((actuales) =>
      actuales.map((item) =>
        item.id === id
          ? {
              ...item,
              publicado: !item.publicado,
            }
          : item
      )
    );

    notificar("Estado actualizado.");
  };

  const crearProducto = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!nombreProducto.trim()) {
      notificar("Introduce el nombre del producto.");
      return;
    }

    const nuevo: Producto = {
      id: Date.now(),
      nombre: nombreProducto,
      precio: precioProducto || "Consultar",
      categoria:
        categoriaProducto || "Colección La Pipi",
      disponible: true,
    };

    setProductos((actuales) => [
      ...actuales,
      nuevo,
    ]);

    setNombreProducto("");
    setPrecioProducto("");
    setCategoriaProducto("");
    setMostrarNuevoProducto(false);

    notificar("Producto añadido.");
  };

  const eliminarProducto = (id: number) => {
    setProductos((actuales) =>
      actuales.filter((item) => item.id !== id)
    );

    notificar("Producto eliminado.");
  };

  const cambiarDisponibilidad = (id: number) => {
    setProductos((actuales) =>
      actuales.map((item) =>
        item.id === id
          ? {
              ...item,
              disponible: !item.disponible,
            }
          : item
      )
    );

    notificar("Disponibilidad actualizada.");
  };

  const crearCurso = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!nombreCurso.trim()) {
      notificar("Introduce el nombre del curso.");
      return;
    }

    const nuevo: Curso = {
      id: Date.now(),
      nombre: nombreCurso,
      nivel: nivelCurso || "Por determinar",
      descripcion:
        descripcionCurso ||
        "Información próximamente disponible.",
      activo: true,
    };

    setCursos((actuales) => [
      ...actuales,
      nuevo,
    ]);

    setNombreCurso("");
    setNivelCurso("");
    setDescripcionCurso("");
    setMostrarNuevoCurso(false);

    notificar("Curso añadido.");
  };

  const eliminarCurso = (id: number) => {
    setCursos((actuales) =>
      actuales.filter((item) => item.id !== id)
    );

    notificar("Curso eliminado.");
  };

  const guardarContenido = () => {
    localStorage.setItem(
      "pipi_contenido",
      JSON.stringify(contenido)
    );

    notificar("Contenido guardado.");
  };

  if (comprobandoAcceso || !autorizado) {
    return (
      <main className="admin-loading">
        <span>LA PIPI</span>
        <strong>Comprobando acceso...</strong>
      </main>
    );
  }

  return (
    <main className="admin-panel">

      <aside className="admin-sidebar">

        <div className="admin-logo">
          <span>ESCUELA DE DANZA</span>
          <strong>LA PIPI</strong>
          <em>“LA PIPI”</em>
        </div>

        <nav>
          {menu.map(([numero, nombre]) => (
            <button
              key={nombre}
              type="button"
              className={
                activo === nombre
                  ? "activo"
                  : ""
              }
              onClick={() => setActivo(nombre)}
            >
              <span>{numero}</span>
              {nombre}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <span>ÁREA PRIVADA</span>

          <strong>
            MONTEQUINTO · SEVILLA
          </strong>

          <button
            type="button"
            className="admin-logout"
            onClick={cerrarSesion}
          >
            CERRAR SESIÓN →
          </button>
        </div>

      </aside>

      <section className="admin-content">

        <header className="admin-header">

          <div>
            <span>ÁREA DE ADMINISTRACIÓN</span>

            <h1>
              {activo}
              <em>.</em>
            </h1>
          </div>

          <div className="admin-status">
            <span />
            PANEL ACTIVO
          </div>

        </header>

        {mensaje && (
          <div className="admin-toast">
            {mensaje}
          </div>
        )}

        {activo === "Inicio" && (
          <>

            <section className="admin-welcome">

              <div>
                <span>
                  ESCUELA DE DANZA LA PIPI
                </span>

                <h2>
                  Todo bajo
                  <br />
                  <em>control.</em>
                </h2>
              </div>

              <p>
                Bienvenida al centro de gestión de La Pipi.
                Desde aquí puedes organizar el contenido
                de la escuela.
              </p>

            </section>

            <section className="admin-overview">

              <div>
                <span>ESPECTÁCULOS</span>
                <strong>
                  {espectaculos.length}
                </strong>
              </div>

              <div>
                <span>CLASES</span>
                <strong>
                  {clases.length}
                </strong>
              </div>

              <div>
                <span>PRODUCTOS</span>
                <strong>
                  {productos.length}
                </strong>
              </div>

              <div>
                <span>FORMACIÓN</span>
                <strong>
                  {cursos.length}
                </strong>
              </div>

            </section>

            <section className="admin-grid">

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Espectáculos")
                }
              >
                <span>01</span>

                <div>
                  <h3>Espectáculos</h3>
                  <p>
                    Gestiona actuaciones,
                    eventos y publicaciones.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Horarios")
                }
              >
                <span>02</span>

                <div>
                  <h3>Horarios</h3>
                  <p>
                    Consulta y organiza
                    las clases.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Tienda")
                }
              >
                <span>03</span>

                <div>
                  <h3>Tienda</h3>
                  <p>
                    Gestiona productos
                    y disponibilidad.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Contenido")
                }
              >
                <span>04</span>

                <div>
                  <h3>Contenido</h3>
                  <p>
                    Edita los textos
                    principales de la web.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Formación")
                }
              >
                <span>05</span>

                <div>
                  <h3>Formación</h3>
                  <p>
                    Gestiona cursos,
                    niveles y EFA.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

              <button
                type="button"
                className="admin-card"
                onClick={() =>
                  setActivo("Fotografías")
                }
              >
                <span>06</span>

                <div>
                  <h3>Fotografías</h3>
                  <p>
                    Organiza la futura
                    galería de la escuela.
                  </p>
                </div>

                <strong>ABRIR →</strong>
              </button>

            </section>

          </>
        )}

        {activo === "Espectáculos" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>GESTIÓN DE EVENTOS</span>

                <h2>
                  Tus
                  <br />
                  <em>espectáculos.</em>
                </h2>
              </div>

              <button
                type="button"
                className="admin-main-button"
                onClick={() =>
                  setMostrarNuevoEspectaculo(
                    !mostrarNuevoEspectaculo
                  )
                }
              >
                {mostrarNuevoEspectaculo
                  ? "CERRAR"
                  : "+ NUEVO ESPECTÁCULO"}
              </button>

            </div>

            {mostrarNuevoEspectaculo && (
              <form
                className="admin-form-card"
                onSubmit={crearEspectaculo}
              >

                <span>NUEVO REGISTRO</span>

                <h3>
                  Crear espectáculo
                  <em>.</em>
                </h3>

                <div className="admin-form-grid">

                  <label>
                    <span>TÍTULO</span>
                    <input
                      value={tituloEspectaculo}
                      onChange={(e) =>
                        setTituloEspectaculo(
                          e.target.value
                        )
                      }
                      placeholder="Nombre"
                    />
                  </label>

                  <label>
                    <span>FECHA</span>
                    <input
                      value={fechaEspectaculo}
                      onChange={(e) =>
                        setFechaEspectaculo(
                          e.target.value
                        )
                      }
                      placeholder="Fecha"
                    />
                  </label>

                  <label>
                    <span>LUGAR</span>
                    <input
                      value={lugarEspectaculo}
                      onChange={(e) =>
                        setLugarEspectaculo(
                          e.target.value
                        )
                      }
                      placeholder="Lugar"
                    />
                  </label>

                  <label className="admin-form-full">
                    <span>DESCRIPCIÓN</span>

                    <textarea
                      value={
                        descripcionEspectaculo
                      }
                      onChange={(e) =>
                        setDescripcionEspectaculo(
                          e.target.value
                        )
                      }
                      placeholder="Descripción"
                      rows={4}
                    />
                  </label>

                </div>

                <button
                  type="submit"
                  className="admin-save-button"
                >
                  GUARDAR ESPECTÁCULO →
                </button>

              </form>
            )}

            <div className="admin-events">

              {espectaculos.map((item) => (
                <article
                  className="admin-event"
                  key={item.id}
                >

                  <div className="admin-event-number">
                    {String(item.id).slice(-2)}
                  </div>

                  <div className="admin-event-main">

                    <span>
                      {item.publicado
                        ? "PUBLICADO"
                        : "BORRADOR"}
                    </span>

                    <h3>{item.titulo}</h3>

                    <p>
                      {item.descripcion}
                    </p>

                  </div>

                  <div className="admin-event-data">

                    <div>
                      <small>FECHA</small>
                      <strong>
                        {item.fecha}
                      </strong>
                    </div>

                    <div>
                      <small>LUGAR</small>
                      <strong>
                        {item.lugar}
                      </strong>
                    </div>

                  </div>

                  <div className="admin-event-actions">

                    <button
                      type="button"
                      onClick={() =>
                        cambiarPublicacion(item.id)
                      }
                    >
                      {item.publicado
                        ? "OCULTAR"
                        : "PUBLICAR"}
                    </button>

                    <button
                      type="button"
                      className="delete"
                      onClick={() =>
                        eliminarEspectaculo(item.id)
                      }
                    >
                      ELIMINAR
                    </button>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {activo === "Horarios" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>ORGANIZACIÓN DE LA ESCUELA</span>

                <h2>
                  Los
                  <br />
                  <em>horarios.</em>
                </h2>
              </div>

              <div className="admin-module-note">
                {clases.length} clases registradas
              </div>

            </div>

            <div className="admin-schedule">

              {clases.map((clase) => (
                <div
                  className="admin-schedule-row"
                  key={clase.id}
                >

                  <span>{clase.dia}</span>

                  <strong>
                    {clase.hora}
                  </strong>

                  <h3>
                    {clase.nombre}
                  </h3>

                  <small>
                    {clase.espacio}
                  </small>

                </div>
              ))}

            </div>

          </section>
        )}

        {activo === "Tienda" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>GESTIÓN DE PRODUCTOS</span>

                <h2>
                  La
                  <br />
                  <em>tienda.</em>
                </h2>
              </div>

              <button
                type="button"
                className="admin-main-button"
                onClick={() =>
                  setMostrarNuevoProducto(
                    !mostrarNuevoProducto
                  )
                }
              >
                {mostrarNuevoProducto
                  ? "CERRAR"
                  : "+ NUEVO PRODUCTO"}
              </button>

            </div>

            {mostrarNuevoProducto && (
              <form
                className="admin-form-card"
                onSubmit={crearProducto}
              >

                <span>NUEVO PRODUCTO</span>

                <h3>
                  Añadir a la tienda
                  <em>.</em>
                </h3>

                <div className="admin-form-grid">

                  <label>
                    <span>NOMBRE</span>

                    <input
                      value={nombreProducto}
                      onChange={(e) =>
                        setNombreProducto(
                          e.target.value
                        )
                      }
                      placeholder="Nombre"
                    />
                  </label>

                  <label>
                    <span>PRECIO</span>

                    <input
                      value={precioProducto}
                      onChange={(e) =>
                        setPrecioProducto(
                          e.target.value
                        )
                      }
                      placeholder="Ej. 25 €"
                    />
                  </label>

                  <label>
                    <span>CATEGORÍA</span>

                    <input
                      value={categoriaProducto}
                      onChange={(e) =>
                        setCategoriaProducto(
                          e.target.value
                        )
                      }
                      placeholder="Vestuario"
                    />
                  </label>

                </div>

                <button
                  type="submit"
                  className="admin-save-button"
                >
                  GUARDAR PRODUCTO →
                </button>

              </form>
            )}

            <div className="admin-product-grid">

              {productos.length === 0 ? (
                <div className="admin-empty">

                  <span>TIENDA VACÍA</span>

                  <h3>
                    Todavía no hay
                    <em> productos.</em>
                  </h3>

                  <p>
                    Añade el primer producto
                    desde el botón superior.
                  </p>

                </div>
              ) : (
                productos.map((producto) => (
                  <article
                    className="admin-product"
                    key={producto.id}
                  >

                    <span>
                      {producto.categoria}
                    </span>

                    <h3>
                      {producto.nombre}
                    </h3>

                    <strong>
                      {producto.precio}
                    </strong>

                    <small>
                      {producto.disponible
                        ? "DISPONIBLE"
                        : "NO DISPONIBLE"}
                    </small>

                    <div>

                      <button
                        type="button"
                        onClick={() =>
                          cambiarDisponibilidad(
                            producto.id
                          )
                        }
                      >
                        {producto.disponible
                          ? "OCULTAR"
                          : "ACTIVAR"}
                      </button>

                      <button
                        type="button"
                        className="delete"
                        onClick={() =>
                          eliminarProducto(
                            producto.id
                          )
                        }
                      >
                        ELIMINAR
                      </button>

                    </div>

                  </article>
                ))
              )}

            </div>

          </section>
        )}

        {activo === "Contenido" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>WEB PÚBLICA</span>

                <h2>
                  Edita
                  <br />
                  <em>La Pipi.</em>
                </h2>
              </div>

              <button
                type="button"
                className="admin-main-button"
                onClick={guardarContenido}
              >
                GUARDAR CAMBIOS
              </button>

            </div>

            <div className="admin-content-editor">

              <label>
                <span>TITULAR PRINCIPAL</span>

                <input
                  value={contenido.titular}
                  onChange={(e) =>
                    setContenido({
                      ...contenido,
                      titular: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>SUBTÍTULO</span>

                <textarea
                  rows={3}
                  value={contenido.subtitulo}
                  onChange={(e) =>
                    setContenido({
                      ...contenido,
                      subtitulo: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>NUESTRA HISTORIA</span>

                <textarea
                  rows={5}
                  value={contenido.historia}
                  onChange={(e) =>
                    setContenido({
                      ...contenido,
                      historia: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>ALMA DE TRIANA</span>

                <textarea
                  rows={5}
                  value={contenido.triana}
                  onChange={(e) =>
                    setContenido({
                      ...contenido,
                      triana: e.target.value,
                    })
                  }
                />
              </label>

            </div>

          </section>
        )}

        {activo === "Formación" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>FORMACIÓN Y EFA</span>

                <h2>
                  Nuestra
                  <br />
                  <em>formación.</em>
                </h2>
              </div>

              <button
                type="button"
                className="admin-main-button"
                onClick={() =>
                  setMostrarNuevoCurso(
                    !mostrarNuevoCurso
                  )
                }
              >
                {mostrarNuevoCurso
                  ? "CERRAR"
                  : "+ NUEVO CURSO"}
              </button>

            </div>

            {mostrarNuevoCurso && (
              <form
                className="admin-form-card"
                onSubmit={crearCurso}
              >

                <span>NUEVO CURSO</span>

                <h3>
                  Añadir formación
                  <em>.</em>
                </h3>

                <div className="admin-form-grid">

                  <label>
                    <span>NOMBRE</span>

                    <input
                      value={nombreCurso}
                      onChange={(e) =>
                        setNombreCurso(
                          e.target.value
                        )
                      }
                      placeholder="Nombre del curso"
                    />
                  </label>

                  <label>
                    <span>NIVEL</span>

                    <input
                      value={nivelCurso}
                      onChange={(e) =>
                        setNivelCurso(
                          e.target.value
                        )
                      }
                      placeholder="Inicial / Medio / Avanzado"
                    />
                  </label>

                  <label className="admin-form-full">
                    <span>DESCRIPCIÓN</span>

                    <textarea
                      value={descripcionCurso}
                      onChange={(e) =>
                        setDescripcionCurso(
                          e.target.value
                        )
                      }
                      placeholder="Descripción"
                      rows={4}
                    />
                  </label>

                </div>

                <button
                  type="submit"
                  className="admin-save-button"
                >
                  GUARDAR CURSO →
                </button>

              </form>
            )}

            <div className="admin-course-grid">

              {cursos.map((curso) => (
                <article
                  className="admin-course"
                  key={curso.id}
                >

                  <span>{curso.nivel}</span>

                  <h3>
                    {curso.nombre}
                  </h3>

                  <p>
                    {curso.descripcion}
                  </p>

                  <div>

                    <small>
                      {curso.activo
                        ? "ACTIVO"
                        : "INACTIVO"}
                    </small>

                    <button
                      type="button"
                      className="delete"
                      onClick={() =>
                        eliminarCurso(curso.id)
                      }
                    >
                      ELIMINAR
                    </button>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {activo === "Fotografías" && (
          <section className="admin-module">

            <div className="admin-module-top">

              <div>
                <span>ARCHIVO VISUAL</span>

                <h2>
                  Las
                  <br />
                  <em>fotografías.</em>
                </h2>
              </div>

            </div>

            <div className="admin-photo-empty">

              <div className="admin-photo-icon">
                +
              </div>

              <span>
                GALERÍA DE LA PIPI
              </span>

              <h3>
                Aquí vivirá
                <br />
                <em>la historia visual.</em>
              </h3>

              <p>
                Este espacio está preparado para
                incorporar las fotografías de
                espectáculos, clases y momentos
                importantes de la escuela.
              </p>

              <button
                type="button"
                className="admin-main-button"
                onClick={() =>
                  notificar(
                    "La subida de fotografías será el siguiente módulo."
                  )
                }
              >
                PREPARAR GALERÍA
              </button>

            </div>

          </section>
        )}

      </section>

    </main>
  );
}
