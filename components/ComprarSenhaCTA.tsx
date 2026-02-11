"use client";

import { useEffect, useRef, useState } from "react";

interface ComprarSenhaCTAProps {
  evento: {
    title: string;
    date: string;
    location: string;
    ticketLimitPerRider: number;
    whatsapp: string;
    slug: string;
  };
}

export function ComprarSenhaCTA({ evento }: ComprarSenhaCTAProps) {
  const [quantidade, setQuantidade] = useState(1);
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMobileCTA(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const message = encodeURIComponent(
    `Olá! Tenho interesse em comprar senha para o evento "${evento.title}".\n\n` +
      `📅 Data: ${evento.date}\n` +
      `📍 Local: ${evento.location}\n` +
      `🎟️ Quantidade de senhas: ${quantidade}\n\n` +
      `Pode me passar mais informações, por favor?`
  );

  const whatsappLink = `https://wa.me/55${evento.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${message}`;

  return (
    <>
      {/* Quantidade */}
      <div className="mt-6 flex items-center gap-4">
        <label className="font-semibold text-amber-200">
          Quantidade de senhas:
        </label>

        <select
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="rounded-lg bg-amber-900 px-4 py-2 text-amber-100 border border-amber-700"
        >
          {Array.from(
            { length: evento.ticketLimitPerRider },
            (_, i) => i + 1
          ).map((qtd) => (
            <option key={qtd} value={qtd}>
              {qtd}
            </option>
          ))}
        </select>
      </div>

      {/* CTA DESKTOP */}
      <a
        href={whatsappLink}
        target="_blank"
        className="mt-8 hidden md:inline-flex w-fit items-center gap-3 rounded-xl bg-amber-600 px-10 py-4 text-xl font-extrabold text-black shadow-lg shadow-amber-600/40 transition hover:bg-amber-700"
      >
        Comprar minha senha
        <span className="text-2xl">📲</span>
      </a>

      {/* CTA MOBILE FIXO (condicional) */}
      {showMobileCTA && (
        <a
          href={whatsappLink}
          target="_blank"
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 rounded-xl bg-amber-600 py-4 text-lg font-extrabold text-black shadow-lg shadow-amber-600/40 md:hidden transition-opacity"
        >
          Comprar minha senha
          <span className="text-2xl">📲</span>
        </a>
      )}
    </>
  );
}
