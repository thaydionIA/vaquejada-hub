import { eventos } from "@/data/eventos";
import { EventCard } from "@/components/ui/EventCard";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      
      {/* Título da página */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Eventos de Vaquejada
        </h1>
        <p className="mt-2 text-slate-400">
          Acompanhe os principais eventos acontecendo e os próximos do sertão
        </p>
      </header>

      {/* Grid de eventos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {eventos.map((evento) => (
          <EventCard
            key={evento.id}
            title={evento.title}
            date={evento.date}
            location={evento.location}
            status={evento.status}
            slug={evento.slug}
          />
        ))}
      </div>

    </section>
  );
}
