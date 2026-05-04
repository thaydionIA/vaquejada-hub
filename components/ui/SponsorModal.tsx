"use client";

import { useState } from "react";
import Image from "next/image";
import { Sponsor } from "@/types/Event";

interface SponsorModalProps {
  sponsor?: Sponsor;
  eventTitle: string;
}

export function SponsorModal({ sponsor, eventTitle }: SponsorModalProps) {
  const [open, setOpen] = useState(Boolean(sponsor));

  if (!sponsor || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Publicidade ${sponsor.name}`}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-amber-500 bg-[#2A1A12] text-amber-50 shadow-[0_20px_70px_rgba(0,0,0,0.65)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-amber-500/70 bg-black/60 text-2xl font-bold leading-none text-amber-100 transition hover:bg-amber-600 hover:text-black"
          aria-label="Fechar publicidade"
        >
          x
        </button>

        <div className="bg-amber-900 px-5 py-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
            Publicidade
          </span>
        </div>

        <div className="p-6 text-center">
          <div className="mx-auto mb-5 flex h-32 w-full max-w-[260px] items-center justify-center rounded-lg bg-amber-50 p-5">
            <div className="relative h-full w-full">
              <Image
                src={sponsor.logo}
                alt={`Marca ${sponsor.name}`}
                fill
                sizes="260px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-amber-100">
            {sponsor.name}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-amber-200">
            {sponsor.description ?? "Patrocinador oficial"} do {eventTitle}.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {sponsor.website && (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-amber-600 px-5 py-3 font-bold text-black transition hover:bg-amber-500"
              >
                Ver marca
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-amber-600 px-5 py-3 font-bold text-amber-300 transition hover:bg-amber-600 hover:text-black"
            >
              Fechar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
