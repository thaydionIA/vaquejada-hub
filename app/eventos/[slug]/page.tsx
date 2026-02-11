import { eventos } from "@/data/eventos";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ComprarSenhaCTA } from "@/components/ComprarSenhaCTA";
import Link from "next/link";

export const dynamic = "force-static";

export function generateStaticParams() {
  return eventos.map((evento) => ({
    slug: evento.slug,
  }));
}

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params; // ✅ NECESSÁRIO NO NEXT 15

  const evento = eventos.find((e) => e.slug === slug);
  if (!evento) notFound();

  const ticketsSold = evento.ticketsSold ?? 0;
  const restantes = evento.totalTickets - ticketsSold;
  const esgotado = restantes <= 0;
  const ultimasUnidades = restantes > 0 && restantes <= 5;


  return (
    <main className="bg-amber-950 text-amber-50">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] w-full">
        <Image
          src={evento.image}
          alt={evento.title}
          fill
          priority
          className="object-cover"
        />

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

          <p className="mt-6 text-3xl font-bold text-amber-500">
            R$ {evento.prizeMoney.toLocaleString("pt-BR")}
            {evento.hasTrophy && " + Troféu"}
          </p>

          {/* STATUS DE VENDAS */}
          <div className="mt-6">
            {esgotado && (
              <div className="rounded-xl bg-red-800 px-6 py-3 text-lg font-bold text-white shadow-lg">
                🚫 SENHAS ESGOTADAS
              </div>
            )}

            {!esgotado && (
              <>
                <p className="text-amber-200 text-lg">
                  🎟️ Restam <strong>{restantes}</strong> senhas
                </p>

                {ultimasUnidades && (
                  <span className="mt-2 inline-block rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white animate-pulse">
                    🔥 ÚLTIMAS UNIDADES
                  </span>
                )}
              </>
            )}
          </div>

          {/* CTA */}
          {!esgotado && (
            <ComprarSenhaCTA
              evento={{
                title: evento.title,
                date: evento.date,
                location: evento.location,
                ticketLimitPerRider: evento.ticketLimitPerRider,
                whatsapp: evento.organizersContacts[0],
                slug: evento.slug,
              }}
            />
          )}

          {/* BOTÃO PARTICIPANTES */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href={`/eventos/${evento.slug}/participantes`}
              className="rounded-xl border border-amber-500 px-6 py-3 text-lg font-semibold text-amber-400 transition hover:bg-amber-600 hover:text-black"
            >
              🐂 Ver Participantes
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="mx-auto max-w-6xl px-6 mt-16">
        <div className="grid gap-6 rounded-2xl bg-amber-900/80 p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-6">
          <InfoCard label="Total de Senhas">{evento.totalTickets}</InfoCard>
          <InfoCard label="Vendidas">{ticketsSold}</InfoCard>
          <InfoCard label="Restantes">{restantes < 0 ? 0 : restantes}</InfoCard>
          <InfoCard label="Valor">R$ {evento.ticketPrice}</InfoCard>
          <InfoCard label="Limite por Participante">{evento.ticketLimitPerRider}</InfoCard>
          <InfoCard label="Troféu">{evento.hasTrophy ? "Sim" : "Não"}</InfoCard>
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
      <footer className="bg-amber-900 py-20">
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
      </footer>
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
