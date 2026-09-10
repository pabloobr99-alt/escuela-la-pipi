import Link from "next/link";
import NavegacionRecorrido from "@/components/NavegacionRecorrido";
import MenuDesplegable from "@/components/MenuDesplegable";

const disciplines = [
  ["01", "Flamenco", "Raíz, carácter y compás."],
  ["02", "Danza Española", "Elegancia, escuela y precisión."],
  ["03", "Sevillanas", "Tradición y alegría compartida."],
  ["04", "Bata de cola", "Técnica, control y presencia."],
  ["05", "Castañuelas", "Ritmo, coordinación y musicalidad."],
  ["06", "Palos del flamenco", "Profundización y conocimiento."],
];

const shows = [
  ["01", "Navidad", "Una cita para compartir el escenario."],
  ["02", "Semana Santa", "Tradición sevillana convertida en danza."],
  ["03", "Fin de curso", "El resultado de todo un año."],
];

export default function Home() {
  return (
    <main className="site-shell nueva-web">

      <NavegacionRecorrido />

      <header className="nav">
        <Link href="/" className="nav-brand">
          <span>ESCUELA DE DANZA</span>
          <strong>LA PIPI</strong>
        </Link>

        <nav className="nav-links">
          <MenuDesplegable />
          <a href="#escuela">La escuela</a>
          <a href="#formacion">Formación</a>
          <a href="#triana">Triana</a>
          <Link href="/historia">Historia</Link>
          <Link href="/horarios" className="nav-cta">
            Horarios <span>↗</span>
          </Link>
        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-v2">

        <div className="hero-v2-noise" />
        <div className="hero-v2-glow" />

        <div className="hero-v2-top">
          <span>MONTEQUINTO · SEVILLA</span>
          <span>EST. LA PIPI</span>
        </div>

        <div className="hero-v2-main">

          <div className="hero-v2-copy">

            <p className="hero-v2-kicker">
              DANZA · FLAMENCO · FORMACIÓN
            </p>

            <h1>
              Donde
              <br />
              la danza
              <br />
              <em>se siente.</em>
            </h1>

            <p className="hero-v2-text">
              Una escuela de danza en Montequinto donde la técnica,
              la tradición y la emoción encuentran su lugar.
            </p>

            <div className="hero-v2-actions">
              <Link href="/horarios" className="gold-button">
                Ver horarios
                <span>↗</span>
              </Link>

              <a href="#escuela" className="quiet-link">
                Descubrir La Pipi
                <span>↓</span>
              </a>
            </div>

          </div>

          <div className="hero-v2-logo">

            <div className="hero-v2-circle circle-one" />
            <div className="hero-v2-circle circle-two" />
            <div className="hero-v2-circle circle-three" />

            <div className="hero-v2-moon">✦</div>

            <div className="hero-logo-image">
              <img
                src="/images/logo-la-pipi.png"
                alt="Escuela de Flamenco y Danza La Pipi La Pipi"
              />
            </div>

            <div className="hero-logo-caption">
              <span>ARTE</span>
              <i />
              <span>RAÍZ</span>
              <i />
              <span>MOVIMIENTO</span>
            </div>

          </div>

        </div>

        <div className="hero-v2-bottom">
          <span>01</span>
          <div />
          <span>BAILA · APRENDE · CRECE</span>
        </div>

      </section>


      {/* =====================================================
          ESCUELA
      ===================================================== */}

      <section className="school-v2" id="escuela">

        <div className="school-v2-left">

          <div className="section-tag">
            <span>01</span>
            LA ESCUELA
          </div>

          <h2>
            Una escuela
            <br />
            con <em>alma.</em>
          </h2>

          <div className="school-v2-number">
            01
          </div>

        </div>

        <div className="school-v2-right">

          <p className="large-intro">
            La danza no empieza cuando suena la música.
            Empieza mucho antes.
          </p>

          <p>
            En la Escuela de Flamenco y Danza La Pipi “La Pipi” entendemos
            la danza como una forma de expresión, aprendizaje y
            crecimiento.
          </p>

          <p>
            Una formación que respeta la tradición y, al mismo tiempo,
            busca que cada alumno encuentre su propia manera de bailar.
          </p>

          <div className="school-signature">
            <span>ESCUELA DE DANZA</span>
            <strong>LA PIPI</strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          MANIFIESTO
      ===================================================== */}

      <section className="manifesto-v2">

        <div className="manifesto-line" />

        <div className="manifesto-content">

          <span className="manifesto-small">
            UNA FORMA DE ENTENDER LA DANZA
          </span>

          <h2>
            Tradición.
            <br />
            Técnica.
            <br />
            <em>Emoción.</em>
          </h2>

          <p>
            Tres palabras que forman parte del camino de cada alumno
            que cruza nuestras puertas.
          </p>

        </div>

        <div className="manifesto-mark">
          SR
        </div>

      </section>


      {/* =====================================================
          FORMACIÓN
      ===================================================== */}

      <section className="training-v2" id="formacion">

        <div className="training-v2-header">

          <div className="section-tag dark-tag">
            <span>02</span>
            FORMACIÓN
          </div>

          <div className="training-v2-title">
            <p>DISCIPLINAS</p>

            <h2>
              Aprende.
              <br />
              <em>Domina.</em>
              <br />
              Expresa.
            </h2>
          </div>

          <p className="training-v2-intro">
            Una formación amplia en danza española y flamenco,
            pensada para diferentes edades, niveles y objetivos.
          </p>

        </div>

        <div className="discipline-grid">

          {disciplines.map(([number, title, text]) => (
            <article className="discipline-v2" key={number}>

              <span className="discipline-v2-number">
                {number}
              </span>

              <div className="discipline-v2-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <span className="discipline-v2-arrow">
                ↗
              </span>

            </article>
          ))}

        </div>

        <div className="efa-strip">

          <div className="efa-emblem">
            <span>FORMACIÓN</span>
            <strong>EFA</strong>
            <small>DANZA</small>
          </div>

          <div className="efa-copy">
            <span>FORMACIÓN EFA</span>
            <p>
              Una parte especialmente importante de la trayectoria
              formativa de la escuela.
            </p>
          </div>

          <Link href="/historia">
            Conocer más <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          TRIANA
      ===================================================== */}

      <section className="triana-v2" id="triana">

        <div className="triana-v2-image">

          <img
            src="/images/puente-triana-noche.jpg"
            alt="Puente de Triana de noche"
          />

          <div className="triana-image-gradient" />

          <div className="triana-image-label">
            <span>SEVILLA</span>
            <strong>PUENTE DE TRIANA</strong>
          </div>

        </div>

        <div className="triana-v2-content">

          <div className="section-tag light-tag">
            <span>03</span>
            NUESTRA RAÍZ
          </div>

          <p className="triana-v2-kicker">
            UNA INSPIRACIÓN QUE SIEMPRE VUELVE
          </p>

          <h2>
            Alma de
            <br />
            <em>Triana.</em>
          </h2>

          <div className="triana-gold-line" />

          <p className="triana-v2-lead">
            Triana es inspiración.
          </p>

          <p>
            El puente, el río, sus dos orillas y todo aquello
            que Sevilla despierta forman parte de la mirada de La Pipi.
          </p>

          <p>
            Desde ahí nace una manera de entender el escenario,
            la música y la danza.
          </p>

          <div className="triana-coordinates">
            <span>SEVILLA</span>
            <i />
            <span>TRIANA</span>
            <i />
            <span>RAÍZ</span>
          </div>

        </div>

        <div className="triana-v2-stamp">
          LA PIPI
        </div>

      </section>


      {/* =====================================================
          ALMA DE TRIANA / HISTORIA
      ===================================================== */}

      <section className="memory-v2">

        <div className="memory-v2-heading">

          <span>UNA HISTORIA QUE SE BAILA</span>

          <h2>
            Hay lugares que
            <br />
            terminan formando
            <br />
            parte de <em>uno mismo.</em>
          </h2>

        </div>

        <div className="memory-v2-grid">

          <div className="memory-card">

            <span>ALMA DE TRIANA</span>

            <strong>
              La primera
              <br />
              marcha que
              <br />
              La Pipi montó.
            </strong>

            <div className="memory-card-line" />

            <small>
              UNA RAÍZ · UN RECUERDO
            </small>

          </div>

          <div className="memory-copy">

            <p>
              “Alma de Triana” ocupa un lugar especial dentro
              de la historia de la escuela. Fue la primera marcha
              que La Pipi montó y permanece ligada a una etapa
              fundamental de su camino.
            </p>

            <p>
              Junto a “Siempre la Esperanza” y la conexión con
              la Esperanza de Triana, la Semana Santa forma parte
              de ese universo emocional que inspira la escuela.
            </p>

            <Link href="/historia" className="underlined-link">
              Nuestra historia <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ESPECTÁCULOS
      ===================================================== */}

      <section className="shows-v2">

        <div className="shows-v2-header">

          <div className="section-tag">
            <span>04</span>
            SOBRE EL ESCENARIO
          </div>

          <h2>
            Cuando todo
            <br />
            cobra <em>vida.</em>
          </h2>

        </div>

        <div className="shows-grid">

          {shows.map(([number, title, text]) => (
            <article className="show-v2" key={number}>

              <div className="show-v2-top">
                <span>{number}</span>
                <span>ESCENARIO</span>
              </div>

              <div className="show-v2-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <div className="show-v2-bottom">
                <span>LA PIPI</span>
                <i>↗</i>
              </div>

            </article>
          ))}

        </div>

        <div className="shows-highlight">

          <span>SEMANA SANTA</span>

          <p>
            Uno de los momentos más esperados de la escuela,
            donde danza, tradición y emoción se encuentran
            sobre el escenario.
          </p>

        </div>

      </section>


      {/* =====================================================
          MÚSICA
      ===================================================== */}

      <section className="music-v2">

        <div className="music-v2-orbit" />

        <div className="music-v2-number">
          05
        </div>

        <div className="music-v2-content">

          <span className="music-v2-kicker">
            IDENTIDAD SONORA
          </span>

          <h2>
            Las Cuatro
            <br />
            <em>Lunas.</em>
          </h2>

          <div className="music-v2-artist">
            <span>VICENTE AMIGO</span>
            <i />
            <span>LA PIPI</span>
          </div>

          <p>
            Hay músicas que terminan convirtiéndose en parte
            de un lugar. “Las Cuatro Lunas”, de Vicente Amigo,
            acompaña desde hace años algunos de los momentos
            más especiales de la escuela.
          </p>

        </div>

        <div className="music-v2-side">
          <span>✦</span>
          <p>
            UNA MÚSICA
            <br />
            QUE SIEMPRE
            <br />
            VUELVE
          </p>
        </div>

      </section>


      {/* =====================================================
          HORARIOS
      ===================================================== */}

      <section className="schedule-v2">

        <div className="section-tag dark-tag">
          <span>06</span>
          HORARIOS
        </div>

        <div className="schedule-v2-grid">

          <div>
            <p>ENCUENTRA TU MOMENTO</p>

            <h2>
              Tu próxima
              <br />
              clase <em>empieza aquí.</em>
            </h2>
          </div>

          <div className="schedule-v2-card">

            <span>CLASES · GRUPOS · NIVELES</span>

            <strong>
              Consulta todos
              <br />
              nuestros horarios.
            </strong>

            <Link href="/horarios">
              Ver horarios
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="final-v2">

        <div className="final-v2-decoration">
          ✦
        </div>

        <span className="final-v2-kicker">
          ESCUELA DE DANZA · MONTEQUINTO
        </span>

        <h2>
          Ven a
          <br />
          <em>bailar.</em>
        </h2>

        <p>
          LA PIPI
          <br />
          Montequinto · Dos Hermanas · Sevilla
        </p>

        <Link href="/horarios" className="gold-button">
          Descubrir horarios
          <span>↗</span>
        </Link>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer-v2">

        <div className="footer-v2-brand">
          <span>ESCUELA DE DANZA</span>
          <strong>
            LA PIPI
          </strong>
        </div>

        <div className="footer-v2-links">
          <Link href="/historia">Historia</Link>
          <Link href="/horarios">Horarios</Link>
          <a href="#escuela">La escuela</a>
          <a href="#triana">Triana</a>
        </div>

        <div className="footer-v2-bottom">
          <span>MONTEQUINTO · SEVILLA</span>
          <span>ARTE · RAÍZ · MOVIMIENTO</span>
          <span>© {new Date().getFullYear()} LA PIPI</span>
        </div>

      </footer>

    </main>
  );
}
