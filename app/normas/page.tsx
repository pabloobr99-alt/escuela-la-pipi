export default function NormasPage() {
  const normas = [
    {
      numero: "01",
      titulo: "Vestuario",
      texto: "Los alumnos deberán asistir uniformados correctamente para poder recibir su clase.",
      detalle:
        "La indumentaria se adquiere en la escuela abonando el 50% del total. No se admiten devoluciones en metálico.",
    },
    {
      numero: "02",
      titulo: "Actuaciones",
      texto:
        "El vestuario para actuaciones será el que determine la profesora y se adquiere en la escuela abonando el 50% en la fecha indicada.",
      detalle:
        "El impago en plazo se entiende como renuncia a la participación en la actuación. Si la familia abona el 50% del vestuario y posteriormente, por motivos personales, decide que el alumno no participe, no se realizará devolución del importe abonado.",
      extra:
        "El vestuario se entregará tal y como esté: completo, sin terminar o únicamente la tela, según el estado en que se encuentre en ese momento.",
    },
    {
      numero: "03",
      titulo: "Respeto y convivencia",
      texto:
        "Mantener siempre una actitud de respeto hacia el profesorado, los compañeros y las instalaciones.",
    },
    {
      numero: "04",
      titulo: "Objetos personales",
      texto:
        "La dirección no se hace responsable de objetos o prendas perdidas.",
      detalle:
        "Es obligatorio marcar todas las pertenencias con nombre y apellidos.",
    },
    {
      numero: "05",
      titulo: "Higiene personal",
      texto:
        "Se ruega encarecidamente que los alumnos asistan a clase debidamente aseados.",
      detalle:
        "Cada alumno deberá contar con los productos necesarios para su higiene personal, como toalla, desodorante, etc., para garantizar una buena convivencia en el aula.",
    },
    {
      numero: "06",
      titulo: "Comunicación",
      texto:
        "En caso de necesitar hablar con algún miembro del equipo docente por cualquier motivo, se ruega no interrumpir la clase bajo ningún concepto ni durante los descansos entre clases.",
      detalle:
        "Será necesario concertar previamente una cita o tutoría.",
    },
    {
      numero: "07",
      titulo: "Uso de móviles",
      texto:
        "Para favorecer la concentración durante las clases, se habilitará una caja o espacio seguro donde los alumnos depositarán sus móviles al entrar al aula.",
      detalle:
        "Los dispositivos permanecerán allí durante la clase. Al finalizar, deberán recogerlos al salir del aula, garantizando así el buen desarrollo de la actividad.",
    },
  ];

  return (
    <main className="normas-page">
      <section className="normas-hero">
        <div className="normas-hero-number">07</div>
        <p className="normas-eyebrow">ESCUELA DE FLAMENCO Y DANZA · LA PIPI</p>
        <h1>
          Normas
          <br />
          <span>del centro.</span>
        </h1>
        <p className="normas-intro">
          El respeto, el compromiso y la convivencia también forman parte
          de nuestra forma de entender la danza.
        </p>
      </section>

      <section className="normas-intro-section">
        <div className="normas-intro-label">NORMAS · LA PIPI</div>
        <div className="normas-intro-copy">
          <p className="normas-lead">
            Para que cada clase, cada ensayo y cada actuación puedan
            desarrollarse de la mejor manera, necesitamos cuidar entre todos
            el espacio que compartimos.
          </p>
          <p>
            Estas normas tienen como objetivo favorecer el respeto, la
            responsabilidad, la concentración y una buena convivencia entre
            alumnos, familias y equipo docente.
          </p>
        </div>
      </section>

      <section className="normas-lista">
        {normas.map((norma) => (
          <article className="norma-card" key={norma.numero}>
            <div className="norma-numero">{norma.numero}</div>

            <div className="norma-contenido">
              <p className="norma-kicker">NORMAS DEL CENTRO</p>
              <h2>{norma.titulo}</h2>

              <p className="norma-texto">{norma.texto}</p>

              {norma.detalle && (
                <p className="norma-detalle">{norma.detalle}</p>
              )}

              {norma.extra && (
                <p className="norma-extra">{norma.extra}</p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="normas-cierre">
        <div className="normas-cierre-line" />
        <p>ESCUELA DE FLAMENCO Y DANZA</p>
        <h2>
          LA
          <br />
          PIPI
        </h2>
        <span>MONTEQUINTO · SEVILLA</span>
      </section>
    </main>
  );
}
