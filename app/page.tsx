import { eventos } from "@/data/eventos";
import { EventCard } from "@/components/ui/EventCard";
import { SponsorBanner } from "@/components/ui/SponsorBanner";
import { Sponsor } from "@/types/Event";

export default function Home() {
  const eventosOrdenados = [...eventos].sort(
    (a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime()
  );
  const eventosAtivos = eventosOrdenados.filter(
    (evento) => evento.status !== "finished"
  );
  const eventosEncerrados = eventosOrdenados.filter(
    (evento) => evento.status === "finished"
  );
  const sponsors = getUniqueSponsors(
    eventos.flatMap((evento) => evento.sponsors ?? [])
  );

  return (
    <main className="relative min-h-screen">

      {/* Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home2.jpg')",
        }}
      />

      {/* Overlay escuro para leitura */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-[#F5E6D3]">

        {/* Título */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sistema de Vaquejada
          </h1>
          <p className="text-lg text-[#EBD5B3]">
            Encontre festas, veja senhas disponíveis, acompanhe participantes
            e confira resultados oficiais em um só lugar.
          </p>
        </header>

        <EventSection title="Festas em aberto" eventos={eventosAtivos} />

        {sponsors.length > 0 && (
          <div className="mt-16">
            <SponsorBanner
              title="Marcas que apoiam a vaquejada"
              subtitle="Espaço para destacar patrocinadores e parceiros dos eventos cadastrados."
              sponsors={sponsors}
            />
          </div>
        )}

        {eventosEncerrados.length > 0 && (
          <div className="mt-20">
            <EventSection title="Resultados encerrados" eventos={eventosEncerrados} />
          </div>
        )}

      </section>
    </main>
  );
}

function getUniqueSponsors(sponsors: Sponsor[]) {
  return sponsors.filter(
    (sponsor, index, list) =>
      list.findIndex((item) => item.name === sponsor.name) === index
  );
}

function EventSection({
  title,
  eventos: lista,
}: {
  title: string;
  eventos: typeof eventos;
}) {
  return (
    <section>
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-amber-300">{title}</h2>
        <span className="text-sm font-semibold text-[#C8AE8C]">
          {lista.length} {lista.length === 1 ? "festa" : "festas"}
        </span>
      </div>

      {lista.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.title}
              date={evento.date}
              location={evento.location}
              status={evento.status}
              slug={evento.slug}
              image={evento.image}
              totalTickets={evento.totalTickets}
              ticketsSold={evento.ticketsSold}
              ticketPrice={evento.ticketPrice}
              parkName={evento.parkName}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-[#5A3A22] bg-black/30 p-8 text-center text-[#D6BFA2]">
          Nenhuma festa cadastrada nesta categoria.
        </div>
      )}
    </section>
  );
}

