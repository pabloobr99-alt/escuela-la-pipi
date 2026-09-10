const horarios = {
  Lunes: [
    ["16:00 – 17:00", "Minirevuelo", "Escuela"],
    ["17:00 – 18:00", "Revuelo", "Escuela"],
    ["18:00 – 19:00", "Canasteras", "Escuela"],
    ["19:00 – 20:00", "Esencia", "Escuela"],
    ["20:00 – 21:00", "Quejío", "Escuela"],
    ["21:00 – 22:00", "Embrujo", "Escuela"],
  ],
  Martes: [
    ["10:00 – 11:00", "Sevillanas", "Escuela"],
    ["11:00 – 12:00", "Técnica de castañuelas", "Escuela"],
    ["16:00 – 17:00", "Concurso de Lunares", "Escuela"],
    ["17:00 – 18:00", "Lunares", "Escuela"],
    ["18:00 – 19:00", "Guerreras", "Escuela"],
    ["19:00 – 20:00", "Español Grupo 1", "Escuela"],
    ["20:00 – 22:00", "Soniquete", "Escuela"],
    ["16:00 – 17:00", "Bata de cola G1", "SUM"],
    ["17:00 – 19:00", "EFA 2º y 3º de Medio", "SUM"],
  ],
  Miércoles: [
    ["16:00 – 17:00", "Minirevuelo", "Escuela"],
    ["17:00 – 18:00", "Revuelo", "Escuela"],
    ["18:00 – 19:00", "Canasteras", "Escuela"],
    ["19:00 – 20:00", "Esencia", "Escuela"],
    ["20:00 – 21:00", "Quejío", "Escuela"],
    ["21:00 – 22:00", "Embrujo", "Escuela"],
    ["16:00 – 17:00", "Concurso", "SUM"],
    ["17:00 – 19:00", "EFA 2º Inicial", "SUM"],
    ["19:00 – 20:00", "Sevillanas", "SUM"],
  ],
  Jueves: [
    ["10:00 – 11:00", "Solera", "Escuela"],
    ["17:00 – 18:00", "Lunares", "Escuela"],
    ["18:00 – 19:00", "Guerreras", "Escuela"],
    ["19:00 – 20:00", "Español Grupo 2", "Escuela"],
    ["20:00 – 21:00", "Sevillanas", "Escuela"],
    ["21:00 – 22:00", "Contratiempo", "Escuela"],
    ["16:00 – 17:00", "Bata de cola G2", "SUM"],
    ["17:00 – 19:00", "Alboroto", "SUM"],
  ],
  Viernes: [
    ["16:00 – 17:00", "Teoría EFA 2º y 3º de Medio", "Escuela"],
    ["17:00 – 18:00", "EFA 1º y 2º de Inicial", "Escuela"],
    ["18:00 – 20:00", "Junior Avanzado", "Escuela"],
  ],
};

export default function HorariosPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      
      {/* FONDO DECORATIVO */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #d4af37 25%, transparent 25%),
              linear-gradient(-45deg, #d4af37 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #d4af37 75%),
              linear-gradient(-45deg, transparent 75%, #d4af37 75%)
            `,
            backgroundSize: "70px 70px",
            backgroundPosition: "0 0, 0 35px, 35px -35px, -35px 0px",
          }}
        />
      </div>

      {/* CABECERA */}
      <header className="relative z-10 border-b border-[#c9a227]/30 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          
          <a
            href="/"
            className="flex items-center gap-4 transition hover:opacity-80"
          >
            <img
              src="/images/logo-la-pipi.jpg"
              alt="Escuela La Pipi"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <p className="text-xs tracking-[0.3em] text-[#d4af37]">
                ESCUELA
              </p>
              <p className="text-xl font-black tracking-wider">
                LA PIPI
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#d4af37]/50 px-5 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            ← Volver
          </a>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
          Escuela La Pipi · Montequinto
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          HORARIOS
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#d4af37]/60" />
          <span className="text-2xl text-[#d4af37]">✦</span>
          <span className="h-px w-16 bg-[#d4af37]/60" />
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60">
          Consulta los horarios semanales de las clases y grupos de
          <span className="text-white"> Escuela La Pipi</span>.
        </p>
      </section>

      {/* HORARIOS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          
          {Object.entries(horarios).map(([dia, clases]) => (
            <div
              key={dia}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/95 shadow-2xl"
            >
              {/* DÍA */}
              <div className="border-b border-[#d4af37]/30 bg-gradient-to-r from-[#151515] to-[#0d0d0d] px-6 py-5">
                <h2 className="text-2xl font-black text-[#d4af37]">
                  {dia}
                </h2>
              </div>

              {/* CLASES */}
              <div className="divide-y divide-white/[0.07]">
                {clases.map(([hora, grupo, lugar], index) => (
                  <div
                    key={`${dia}-${grupo}-${hora}-${index}`}
                    className="group px-5 py-5 transition hover:bg-white/[0.035]"
                  >
                    <div className="flex items-start gap-4">
                      
                      {/* HORA */}
                      <div className="min-w-[92px]">
                        <p className="text-sm font-bold text-[#d4af37]">
                          {hora}
                        </p>
                      </div>

                      {/* INFO */}
                      <div className="min-w-0 flex-1">
                        <p className="font-bold leading-5 text-white transition group-hover:text-[#d4af37]">
                          {grupo}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-white/40">
                            {lugar}
                          </span>

                          {lugar === "SUM" && (
                            <span className="rounded-full border border-[#d4af37]/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#d4af37]">
                              SUM
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-[#d4af37]/20 bg-black px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          Escuela La Pipi
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          ¿Quieres formar parte de La Pipi?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white/50">
          Próximamente podrás consultar toda la información sobre grupos,
          niveles, precios y matrícula.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#d4af37] px-8 py-4 font-black text-black transition hover:scale-105 hover:bg-[#e2c45c]"
        >
          Conocer la escuela
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-white/30">
        Escuela La Pipi · Montequinto · Sevilla
      </footer>
    </main>
  );
}
