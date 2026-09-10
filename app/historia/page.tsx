import Link from "next/link";

export default function HistoriaPage() {
  return (
    <main className="historia-page">

      <header className="historia-hero">
        <Link href="/" className="historia-back">
          ← Volver a La Pipi
        </Link>

        <div className="historia-hero-content">
          <span>DE DÓNDE VENIMOS · SEVILLA</span>

          <h1>
            Antes de La Pipi,
            <br />
            <em>hubo un sueño.</em>
          </h1>

          <p>
            Una historia de familia, esfuerzo y amor por la danza.
          </p>
        </div>

        <div className="historia-hero-number">01</div>
      </header>

      <section className="historia-section historia-intro">
        <div className="historia-label">UNA HISTORIA DE FAMILIA</div>

        <div className="historia-grid">
          <div className="historia-memory">
            <div className="historia-memory-inner">
              <span>ESCUELA DE DANZA</span>
              <strong>LA PIPI</strong>
              <i />
              <small>SARA RUIZ · SEVILLA</small>
            </div>
          </div>

          <div className="historia-copy">
            <span className="historia-kicker">
              TODO EMPEZÓ MUCHO ANTES
            </span>

            <h2>
              Todo empezó
              <br />
              con una niña.
            </h2>

            <div className="historia-line" />

            <p className="historia-lead">
              Y detrás de aquella niña estuvieron <strong>Paqui y Luis</strong>.
            </p>

            <p>
              Dos padres que lo dieron todo para que el sueño de Sara
              pudiera crecer. Para que pudiera aprender, avanzar y encontrar
              en la danza un camino que, con los años, acabaría convirtiéndose
              en una forma de vida.
            </p>

            <p>
              En ese camino estuvo <strong>Matilde Coral</strong>.
              Allí comenzó a construirse mucho más que una técnica:
              una manera de sentir la danza, de respetarla y de entender
              que cada paso lleva detrás esfuerzo, disciplina y pasión.
            </p>

            <p>
              Y mientras Sara crecía como bailaora, también crecía aquello
              que siempre estuvo cerca: <strong>Sevilla</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="historia-roots">
        <div className="historia-roots-glow" />

        <span>RAÍCES</span>

        <h2>
          Hay raíces que
          <br />
          <em>se llevan dentro.</em>
        </h2>

        <p>
          Triana. El puente. La madrugada. La Esperanza.
          Ese sentimiento que no siempre necesita palabras.
        </p>

        <div className="historia-route">
          <div>
            <small>01</small>
            <strong>UNA NIÑA</strong>
            <span>Un sueño que empezó bailando.</span>
          </div>

          <div>
            <small>02</small>
            <strong>PAQUI & LUIS</strong>
            <span>Una familia que apostó por ese sueño.</span>
          </div>

          <div>
            <small>03</small>
            <strong>MATILDE CORAL</strong>
            <span>El comienzo de un camino.</span>
          </div>

          <div>
            <small>04</small>
            <strong>LA PIPI</strong>
            <span>Una historia que continúa.</span>
          </div>
        </div>
      </section>

      <section className="historia-final">
        <span>HOY</span>

        <h2>
          No empieza una
          <br />
          historia nueva.
          <br />
          <em>Continúa aquella.</em>
        </h2>

        <p>
          La de una niña. La de sus padres. La de todos los pasos
          que hicieron falta para llegar hasta aquí.
        </p>

        <div className="historia-signature">
          <span>SARA RUIZ</span>
          <strong>“LA PIPI”</strong>
          <small>MONTEQUINTO · SEVILLA</small>
        </div>

        <div className="historia-closing">
          TODO LO QUE BAILAMOS HOY
          <strong>EMPEZÓ MUCHO ANTES.</strong>
        </div>
      </section>

    </main>
  );
}
