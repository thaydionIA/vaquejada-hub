export default function PlataformaPage() {
  return (
    <main className="bg-amber-950 text-amber-50">

      {/* HERO */}
      <section className="px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          A plataforma SaaS da vaquejada brasileira
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-amber-200 mb-10">
          Organize sua festa com estrutura profissional,
          registre resultados oficialmente
          e eleve o nível digital do seu rancho.
        </p>

        <a
          href="https://wa.me/5562999999999"
          target="_blank"
          className="inline-block bg-amber-600 px-10 py-5 rounded-xl text-lg font-bold text-black shadow-lg hover:bg-amber-700 transition"
        >
          Solicitar apresentação
        </a>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-24 bg-amber-900/40 text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">
          Para organizadores que querem profissionalizar sua festa
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 text-amber-200 text-lg">
          <p>✔ Ranchos e parques de vaquejada</p>
          <p>✔ Organizadores independentes</p>
          <p>✔ Equipes que desejam mais organização</p>
          <p>✔ Festas que querem transparência e credibilidade</p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-amber-400 mb-6">
              O que você ganha
            </h2>

            <p className="text-lg text-amber-200 leading-relaxed">
              Uma estrutura digital completa para organizar
              participantes, resultados e premiações
              sem depender de planilhas ou anotações manuais.
            </p>
          </div>

          <div className="space-y-4 text-amber-200 text-lg">
            <p>✔ Registro digital de vaqueiros</p>
            <p>✔ Controle de bois por senha</p>
            <p>✔ Tabela pública de resultados</p>
            <p>✔ Página oficial da sua festa</p>
            <p>✔ Comunicação centralizada</p>
          </div>

        </div>
      </section>

      {/* MODELO SAAS */}
      <section className="px-6 py-24 bg-amber-900/40 text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">
          Modelo SaaS escalável
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-amber-200 leading-relaxed">
          Cada organizador possui sua própria festa dentro da plataforma,
          com estrutura independente, controle próprio
          e suporte da equipe ThayDion.IA.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-28 text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">
          Leve sua festa para o próximo nível
        </h2>

        <a
          href="https://wa.me/5562999999999"
          target="_blank"
          className="inline-block bg-green-600 px-12 py-6 rounded-xl text-xl font-bold text-white shadow-lg hover:bg-green-700 transition"
        >
          Falar com a equipe ThayDion.IA
        </a>
      </section>

    </main>
  );
}
