import Image from "next/image";
import { Sponsor } from "@/types/Event";

interface SponsorBannerProps {
  title: string;
  subtitle?: string;
  sponsors: Sponsor[];
  compact?: boolean;
}

export function SponsorBanner({
  title,
  subtitle,
  sponsors,
  compact = false,
}: SponsorBannerProps) {
  if (sponsors.length === 0) return null;

  return (
    <section className="rounded-lg border border-amber-700/70 bg-black/40 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-7">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
            Publicidade
          </span>
          <h2 className="mt-1 text-2xl font-bold text-amber-100">{title}</h2>
        </div>

        {subtitle && (
          <p className="max-w-xl text-sm leading-relaxed text-amber-200">
            {subtitle}
          </p>
        )}
      </div>

      <div
        className={
          compact
            ? "grid gap-4 sm:grid-cols-2"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {sponsors.map((sponsor) => {
          const content = (
            <div className="flex h-full items-center gap-4 rounded-lg border border-[#5A3A22] bg-[#2A1A12]/90 p-4 transition hover:border-amber-400 hover:bg-[#3B2A1F]">
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md bg-amber-50 p-2">
                <Image
                  src={sponsor.logo}
                  alt={`Marca ${sponsor.name}`}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>

              <div className="min-w-0">
                <strong className="block text-base text-amber-100">
                  {sponsor.name}
                </strong>
                {sponsor.description && (
                  <span className="mt-1 block text-sm text-[#D6BFA2]">
                    {sponsor.description}
                  </span>
                )}
              </div>
            </div>
          );

          if (!sponsor.website) {
            return <div key={sponsor.name}>{content}</div>;
          }

          return (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir patrocinador ${sponsor.name}`}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
