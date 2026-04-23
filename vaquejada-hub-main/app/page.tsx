import { eventos } from "@/data/eventos";
import { EventCard } from "@/components/ui/EventCard";

export default function Home() {
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
        <header className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Eventos de Vaquejada
          </h1>
          <p className="text-lg text-[#EBD5B3]">
            Acompanhe os principais eventos acontecendo e os próximos do sertão
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.title}
              date={evento.date}
              location={evento.location}
              status={evento.status}
              slug={evento.slug}
              image={evento.image}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
