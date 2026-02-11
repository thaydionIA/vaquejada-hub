import Link from "next/link";

type EventStatus = "ongoing" | "upcoming";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  status: EventStatus;
  slug: string;
}

export function EventCard({
  title,
  date,
  location,
  status,
  slug,
}: EventCardProps) {
  const statusConfig = {
    ongoing: {
      label: "Acontecendo agora",
      className: "bg-amber-700 text-amber-100",
    },
    upcoming: {
      label: "Em breve",
      className: "bg-slate-700 text-slate-200",
    },
  };

  return (
    <article className="group relative rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-amber-700/60 hover:shadow-lg hover:shadow-amber-900/10">
      
      {/* Status */}
      <span
        className={`inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium ${statusConfig[status].className}`}
      >
        {statusConfig[status].label}
      </span>

      {/* Conteúdo */}
      <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-amber-600 transition">
        {title}
      </h3>

      <p className="mb-6 text-sm text-slate-400">
        {date} • {location}
      </p>

      {/* CTA */}
      <Link
        href={`/eventos/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-600 transition"
      >
        Ver detalhes
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
