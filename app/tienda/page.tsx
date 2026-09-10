import Link from "next/link";

export default function TiendaPage() {
  return (
    <main className="tienda-page">
      <section className="tienda-hero">
        <span className="tienda-kicker">
          ESCUELA DE DANZA SARA RUIZ “LA PIPI”
        </span>

        <h1>
          La tienda
          <br />
          <em>de La Pipi.</em>
        </h1>

        <p>
          Una extensión de nuestra escuela.
          <br />
          Próximamente podrás llevar contigo un pedacito de La Pipi.
        </p>

        <span className="tienda-location">
          MONTEQUINTO · SEVILLA
        </span>
      </section>

      <section className="tienda-intro">
        <span className="tienda-intro-label">LA TIENDA</span>

        <div>
          <h2>
            Mucho más que
            <br />
            <span>una prenda.</span>
          </h2>

          <p>
            Estamos preparando una colección propia inspirada
            en la danza, el flamenco y la identidad de La Pipi.
          </p>
        </div>
      </section>

      <section className="tienda-categorias">
        <span>LO QUE VIENE</span>

        <h2>Próximamente.</h2>

        <div className="tienda-category-grid">
          <article className="tienda-category-card">
            <span>01</span>
            <h3>Vestuario</h3>
            <p>
              Prendas vinculadas a la identidad de La Pipi.
            </p>
            <strong>PRÓXIMAMENTE</strong>
          </article>

          <article className="tienda-category-card">
            <span>02</span>
            <h3>Accesorios</h3>
            <p>
              Detalles para llevar contigo el espíritu de la escuela.
            </p>
            <strong>PRÓXIMAMENTE</strong>
          </article>

          <article className="tienda-category-card">
            <span>03</span>
            <h3>Danza</h3>
            <p>
              Material y complementos para quienes viven la danza.
            </p>
            <strong>PRÓXIMAMENTE</strong>
          </article>
        </div>
      </section>

      <section className="tienda-manifesto">
        <p>
          La Pipi no es solamente un lugar donde aprender a bailar.
          <br />
          Es una manera de sentir la danza.
        </p>

        <span>
          ESCUELA DE DANZA SARA RUIZ “LA PIPI”
        </span>
      </section>

      <section className="tienda-contacto">
        <div>
          <span>¿TIENES ALGUNA DUDA?</span>

          <h2>
            Mientras llega la tienda,
            <br />
            <em>ven a conocernos.</em>
          </h2>
        </div>

        <Link href="/#escuela" className="tienda-contacto-button">
          CONOCE LA ESCUELA →
        </Link>
      </section>

      <footer className="tienda-footer">
        <span>ESCUELA DE DANZA SARA RUIZ “LA PIPI”</span>
        <span>MONTEQUINTO · SEVILLA</span>
      </footer>
    </main>
  );
}

