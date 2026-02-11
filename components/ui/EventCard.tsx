import Link from "next/link";
import Image from "next/image";

type EventStatus = "ongoing" | "upcoming";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  status: EventStatus;
  slug: string;
  image: string;
}

export function EventCard({
  title,
  date,
  location,
  status,
  slug,
  image,
}: EventCardProps) {
  const statusConfig = {
    ongoing: {
      label: "Acontecendo agora",
      className: "bg-[#C66A1E] text-white",
    },
    upcoming: {
      label: "Em breve",
      className: "bg-[#4E342E] text-[#EBD5B3]",
    },
  };

  return (
    <div className="group w-full max-w-md mx-auto transition duration-300 hover:scale-105">
      <div className="borda-moldura rounded-xl bg-[#2A1A12] shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* IMAGEM */}
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />

          <span
            className={`absolute top-4 left-4 rounded-md px-4 py-1 text-xs font-semibold shadow-md z-10 ${statusConfig[status].className}`}
          >
            {statusConfig[status].label}
          </span>
        </div>

        {/* CONTEÚDO */}
        <div className="p-6 text-[#F5E6D3] bg-gradient-to-b from-[#3B2A1F] to-[#2A1A12]">
          <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

          <p className="mb-6 text-sm text-[#D6BFA2]">
            {date} • {location}
          </p>

          <Link
            href={`/eventos/${slug}`}
            className="
    relative
    inline-block
    px-6
    py-2
    text-sm
    font-bold
    text-[#F5E6D3]
    rounded-md
    transition
    duration-300
    hover:scale-105
    active:scale-95
  "
          >
            <span
              className="
      absolute inset-0 rounded-md
      bg-[url('/btn3.png')]
      bg-cover bg-center
      border border-[#5A3A22]
      shadow-[inset_0_3px_6px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.6),0_6px_12px_rgba(0,0,0,0.6)]
    "
            />
            <span className="relative z-10">Ver detalhes →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
