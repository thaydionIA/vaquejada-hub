import Link from "next/link";
import Image from "next/image";
import { eventos } from "@/data/eventos";
import { participantes } from "@/data/participantes";
import { SponsorBanner } from "@/components/ui/SponsorBanner";
import { Event, Sponsor } from "@/types/Event";
import { Participante } from "@/data/participantes";

export const dynamic = "force-static";

export default function EncerradasPage() {
  const festasEncerradas = [...eventos]
    .filter((evento) => evento.status === "finished")
    .sort(
      (a, b) =>
        new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
    );

  const totalParticipantes = festasEncerradas.reduce(
    (total, festa) => total + getParticipantesCount(festa.slug),
    0
  );
  const totalPremiacao = festasEncerradas.reduce(
    (total, festa) => total + festa.prizeMoney,
    0
  );
  const sponsors = getUniqueSponsors(
    festasEncerradas.flatMap((festa) => festa.sponsors ?? [])
  );
  const campeoes = getCampeoes(festasEncerradas);
  const destaque = festasEncerradas[0];

  return (
    <main className="relative min-h-screen bg-[#1F120B] text-amber-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/home2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-amber-950/95 to-[#1F120B]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex rounded-lg border border-amber-700 px-4 py-2 text-sm font-bold text-amber-300 transition hover:bg-amber-700 hover:text-black"
            >
              Voltar para início
            </Link>

            <span className="block text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
              Histórico oficial
            </span>

            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-amber-100 md:text-6xl">
              Festas encerradas e resultados
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-amber-200">
              Consulte os eventos já finalizados, veja participantes, resultados
              oficiais e as marcas que apoiaram cada festa.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <SummaryCard label="Festas encerradas" value={festasEncerradas.length} />
            <SummaryCard label="Participantes" value={totalParticipantes} />
            <SummaryCard
              label="Premiação somada"
              value={`R$ ${totalPremiacao.toLocaleString("pt-BR")}`}
            />
          </div>
        </div>

        {destaque && <FeaturedResult festa={destaque} />}

        {campeoes.length > 0 && (
          <ChampionsSection campeoes={campeoes} />
        )}

        {sponsors.length > 0 && (
          <div className="mt-14">
            <SponsorBanner
              title="Patrocinadores dos resultados"
              subtitle="Marcas exibidas nos eventos que já foram finalizados."
              sponsors={sponsors}
            />
          </div>
        )}

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-500">
                Arquivo
              </span>
              <h2 className="mt-1 text-3xl font-bold text-amber-100">
                Todas as festas encerradas
              </h2>
            </div>

            <span className="text-sm font-semibold text-[#C8AE8C]">
              {festasEncerradas.length}{" "}
              {festasEncerradas.length === 1 ? "registro" : "registros"}
            </span>
          </div>

          {festasEncerradas.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {festasEncerradas.map((festa) => (
                <ResultCard key={festa.id} festa={festa} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-amber-800 bg-black/35 p-10 text-center text-amber-200">
              Nenhuma festa encerrada ainda.
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function ChampionsSection({
  campeoes,
}: {
  campeoes: { festa: Event; campeao: Participante }[];
}) {
  return (
    <section className="mt-14">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
            Galeria de campeões
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-amber-100">
            Nossos campeões
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-amber-200">
          Destaque para os vencedores que marcaram presença nos resultados
          oficiais das vaquejadas encerradas.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {campeoes.map(({ festa, campeao }) => (
          <ChampionCard
            key={`${festa.slug}-${campeao.nome}`}
            festa={festa}
            campeao={campeao}
          />
        ))}
      </div>
    </section>
  );
}

function ChampionCard({
  festa,
  campeao,
}: {
  festa: Event;
  campeao: Participante;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-yellow-500/70 bg-gradient-to-br from-yellow-500/20 via-[#3B2A1F] to-[#1F120B] shadow-[0_18px_50px_rgba(0,0,0,0.45)] md:grid md:grid-cols-[180px_1fr]">
      <div className="relative min-h-[180px]">
        <Image
          src={festa.image}
          alt={festa.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-4 bottom-4 rounded-lg border border-yellow-400/70 bg-black/65 px-4 py-3 text-center">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">
            1º lugar
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">
          Campeão da vaquejada
        </span>

        <h3 className="mt-2 text-3xl font-extrabold text-amber-100">
          {campeao.nome}
        </h3>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <InfoPill label="Evento" value={festa.title} />
          <InfoPill label="Cavalo" value={campeao.cavalo || "Não informado"} />
          <InfoPill label="Data" value={festa.date} />
          <InfoPill label="Local" value={festa.location} />
        </div>

        <Link
          href={`/eventos/${festa.slug}/participantes`}
          className="mt-6 inline-flex rounded-lg bg-yellow-500 px-5 py-3 text-sm font-extrabold text-black transition hover:bg-yellow-400"
        >
          Ver resultado completo
        </Link>
      </div>
    </article>
  );
}

function FeaturedResult({ festa }: { festa: Event }) {
  const campeao = getCampeao(festa.slug);

  return (
    <section className="overflow-hidden rounded-lg border border-amber-700 bg-black/45 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative min-h-[280px]">
        <Image
          src={festa.image}
          alt={festa.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white">
          Encerrada
        </span>
      </div>

      <div className="p-6 md:p-8">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
          Último resultado
        </span>

        <h2 className="mt-3 text-3xl font-extrabold text-amber-100">
          {festa.title}
        </h2>

        <div className="mt-5 grid gap-3 text-sm text-amber-200 sm:grid-cols-2">
          <InfoPill label="Data" value={festa.date} />
          <InfoPill label="Local" value={festa.location} />
          <InfoPill label="Parque" value={festa.parkName} />
          <InfoPill
            label="Premiação"
            value={`R$ ${festa.prizeMoney.toLocaleString("pt-BR")}`}
          />
        </div>

        <div className="mt-6 rounded-lg border border-yellow-500/70 bg-yellow-500/10 p-5">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-yellow-300">
            Campeão
          </span>
          <p className="mt-2 text-xl font-bold text-amber-100">
            {campeao ? campeao.nome : "Resultado em atualização"}
          </p>
          {campeao?.cavalo && (
            <p className="mt-1 text-amber-200">Cavalo: {campeao.cavalo}</p>
          )}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/eventos/${festa.slug}/participantes`}
            className="rounded-lg bg-amber-600 px-5 py-3 font-bold text-black transition hover:bg-amber-500"
          >
            Ver resultados
          </Link>
          <Link
            href={`/eventos/${festa.slug}`}
            className="rounded-lg border border-amber-600 px-5 py-3 font-bold text-amber-300 transition hover:bg-amber-600 hover:text-black"
          >
            Página do evento
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ festa }: { festa: Event }) {
  const count = getParticipantesCount(festa.slug);
  const campeao = getCampeao(festa.slug);

  return (
    <article className="overflow-hidden rounded-lg border border-[#5A3A22] bg-[#2A1A12] shadow-[0_15px_40px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-amber-500">
      <div className="relative h-48 w-full">
        <Image
          src={festa.image}
          alt={festa.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <span className="absolute left-4 top-4 rounded-md bg-green-700 px-3 py-1 text-xs font-bold text-white">
          Resultado publicado
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug text-amber-100">
          {festa.title}
        </h3>

        <p className="mt-3 text-sm text-[#D6BFA2]">
          {festa.date} • {festa.location}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <InfoPill label="Participantes" value={count} />
          <InfoPill
            label="Prêmio"
            value={`R$ ${festa.prizeMoney.toLocaleString("pt-BR")}`}
          />
        </div>

        <div className="mt-5 rounded-lg border border-amber-800 bg-black/25 p-4">
          <span className="block text-xs font-bold uppercase text-amber-400">
            1º lugar
          </span>
          <strong className="mt-1 block text-amber-100">
            {campeao ? campeao.nome : "Em atualização"}
          </strong>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/eventos/${festa.slug}/participantes`}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-500"
          >
            Ver resultados
          </Link>
          <Link
            href={`/eventos/${festa.slug}`}
            className="rounded-lg border border-amber-700 px-4 py-2 text-sm font-bold text-amber-300 transition hover:bg-amber-700 hover:text-black"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}

function SummaryCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-amber-800 bg-black/40 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <span className="block text-sm text-[#C8AE8C]">{label}</span>
      <strong className="mt-2 block text-3xl text-amber-300">{value}</strong>
    </div>
  );
}

function InfoPill({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-[#5A3A22] bg-black/25 p-3">
      <span className="block text-xs font-bold uppercase text-[#B89A74]">
        {label}
      </span>
      <strong className="mt-1 block text-amber-100">{value}</strong>
    </div>
  );
}

function getParticipantesCount(slug: string) {
  return participantes.filter((participante) => participante.eventoSlug === slug)
    .length;
}

function getCampeao(slug: string) {
  return participantes.find(
    (participante) =>
      participante.eventoSlug === slug && participante.posicao === 1
  );
}

function getCampeoes(festas: Event[]) {
  return festas
    .map((festa) => {
      const campeao = getCampeao(festa.slug);

      if (!campeao) return null;

      return { festa, campeao };
    })
    .filter(
      (item): item is { festa: Event; campeao: Participante } =>
        item !== null
    );
}

function getUniqueSponsors(sponsors: Sponsor[]) {
  return sponsors.filter(
    (sponsor, index, list) =>
      list.findIndex((item) => item.name === sponsor.name) === index
  );
}
