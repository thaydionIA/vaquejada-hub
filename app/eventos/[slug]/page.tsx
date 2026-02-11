import { eventos } from "@/data/eventos";
import { notFound } from "next/navigation";
import Image from "next/image";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) notFound();

  /* ================= WHATSAPP CTA ================= */
  const whatsappNumber = evento.organizersContacts[0];

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse em comprar senha para o evento "${evento.title}".\n\n` +
    `📅 Data: ${evento.date}\n` +
    `📍 Local: ${evento.location}\n` +
    `🎟️ Quantidade de senhas: 1\n\n` +
    `Pode me passar mais informações, por favor?`
  );

  const whatsappLink = `https://wa.me/55${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${whatsappMessage}`;

  return (
    <main className="bg-amber-950 text-amber-50">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] w-full">
        <Image
          src={`/eventos/${evento.slug}.jpg`}
          alt={evento.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-black/80 to-amber-900/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24">
          <span className="mb-4 w-fit rounded-full bg-amber-900 px-4 py-1 text-sm font-bold text-amber-100">
            Evento de Vaquejada
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            {evento.title}
          </h1>

          <p className="mt-4 text-xl text-amber-200">
            {evento.date} • {evento.location}
          </p>

          {/* Premiação */}
          <p className="mt-6 text-3xl font-bold text-amber-500">
            R$ {evento.prizeMoney.toLocaleString("pt-BR")}
            {evento.hasTrophy && " + Troféu"}
          </p>

          {/* ================= CTA PRINCIPAL ================= */}
          <a
            href={whatsappLink}
            target="_blank"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-amber-600 px-10 py-4 text-xl font-extrabold text-black shadow-lg shadow-amber-600/40 transition hover:bg-amber-700"
          >
            Comprar minha senha
            <span className="text-2xl">📲</span>
          </a>
        </div>
      </section>

      {/* ================= CARDS DE INFO ================= */}
      <section className="mx-auto max-w-6xl px-6 mt-16">
        <div className="grid gap-6 rounded-2xl bg-amber-900/80 p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-5">
          <InfoCard label="Senhas">{evento.totalTickets}</InfoCard>
          <InfoCard label="Valor">R$ {evento.ticketPrice}</InfoCard>
          <InfoCard label="Limite por Participante">{evento.ticketLimitPerRider}</InfoCard>
          <InfoCard label="Troféu">{evento.hasTrophy ? "Sim" : "Não"}</InfoCard>
          <InfoCard label="Bar">{evento.hasBar ? "Sim" : "Não"}</InfoCard>
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-6 text-3xl font-bold text-amber-100">
          Sobre o evento
        </h2>
        <p className="text-lg leading-relaxed text-amber-200">
          {evento.description}
        </p>
      </section>

      {/* ================= LOCAL ================= */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="mb-6 text-3xl font-bold text-amber-100">
          Local
        </h2>
        <p className="text-lg text-amber-200">
          <strong className="text-amber-50">
            {evento.parkName}
          </strong>
          <br />
          {evento.location}
        </p>
      </section>

      {/* ================= CONTATO ================= */}
      <section className="bg-amber-900 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-amber-400">
            Contato dos organizadores
          </h2>

          <div className="flex flex-wrap gap-4">
            {evento.organizersContacts.map((phone) => (
              <a
                key={phone}
                href={`https://wa.me/55${phone.replace(/\D/g, "")}`}
                target="_blank"
                className="rounded-xl border border-amber-600 px-6 py-4 text-lg font-semibold text-amber-400 transition hover:bg-amber-600 hover:text-black"
              >
                📱 {phone}
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-amber-950 p-6 text-center border border-amber-700 shadow-md">
      <span className="block text-sm uppercase tracking-widest text-amber-300">
        {label}
      </span>
      <span className="mt-3 block text-3xl font-bold text-amber-100">
        {children}
      </span>
    </div>
  );
}
