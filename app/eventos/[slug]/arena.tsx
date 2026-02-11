import { eventos } from "@/data/eventos";
import { notFound } from "next/navigation";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArenaEventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) notFound();

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* ================= CABEÇALHO ================= */}
        <header className="mb-20">
          <span className="mb-4 inline-block rounded-md bg-amber-600 px-3 py-1 text-sm font-bold uppercase tracking-wider text-black">
            Evento de Vaquejada
          </span>

          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
            {evento.title}
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            {evento.date} • {evento.location}
          </p>
        </header>

        {/* ================= GRID PRINCIPAL ================= */}
        <section className="mb-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ArenaCard label="Premiação">
            R$ {evento.prizeMoney.toLocaleString("pt-BR")}
            {evento.hasTrophy && " + Troféu"}
          </ArenaCard>

          <ArenaCard label="Senhas">
            {evento.totalTickets}
          </ArenaCard>

          <ArenaCard label="Valor da senha">
            R$ {evento.ticketPrice}
          </ArenaCard>

          <ArenaCard label="Limite por vaqueiro">
            {evento.ticketLimitPerRider}
          </ArenaCard>

          <ArenaCard label="Bar no local">
            {evento.hasBar ? "Sim" : "Não"}
          </ArenaCard>

          <ArenaCard label="Troféu">
            {evento.hasTrophy ? "Sim" : "Não"}
          </ArenaCard>
        </section>

        {/* ================= SOBRE ================= */}
        <section className="mb-24 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">
            Sobre o evento
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            {evento.description}
          </p>
        </section>

        {/* ================= LOCAL ================= */}
        <section className="mb-24 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">
            Local
          </h2>
          <p className="text-lg text-zinc-300">
            <strong className="text-white">
              {evento.parkName}
            </strong>
            <br />
            {evento.location}
          </p>
        </section>

        {/* ================= CONTATO ================= */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
          <h2 className="mb-8 text-3xl font-bold text-amber-500">
            Contato dos organizadores
          </h2>

          <div className="flex flex-wrap gap-4">
            {evento.organizersContacts.map((phone) => (
              <a
                key={phone}
                href={`https://wa.me/55${phone.replace(/\D/g, "")}`}
                target="_blank"
                className="rounded-xl border border-amber-600 px-6 py-4 text-lg font-semibold text-amber-500 transition hover:bg-amber-600 hover:text-black"
              >
                📱 {phone}
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

/* ================= COMPONENTE ================= */

function ArenaCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <span className="block text-sm uppercase tracking-widest text-zinc-400">
        {label}
      </span>
      <span className="mt-3 block text-2xl font-extrabold text-white">
        {children}
      </span>
    </div>
  );
}
