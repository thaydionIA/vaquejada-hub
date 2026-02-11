"use client";

import { useEffect, useRef, useState } from "react";

interface ComprarSenhaCTAProps {
  evento: {
    title: string;
    date: string;
    location: string;
    ticketLimitPerRider: number;
    ticketPrice?: number; // opcional para calcular total
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

  const valorTotal =
    evento.ticketPrice && quantidade
      ? evento.ticketPrice * quantidade
      : null;

  const message = encodeURIComponent(
    `Olá! Tenho interesse em comprar senha para o evento "${evento.title}".\n\n` +
      `📅 Data: ${evento.date}\n` +
      `📍 Local: ${evento.location}\n` +
      `🎟️ Quantidade de senhas: ${quantidade}\n` +
      (valorTotal
        ? `💰 Valor total: R$ ${valorTotal.toLocaleString("pt-BR")}\n\n`
        : "\n") +
      `Pode me passar mais informações, por favor?`
  );

  const whatsappLink = `https://wa.me/55${evento.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${message}`;

  return (
    <>
      {/* ================= QUANTIDADE ================= */}
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
        <label className="font-semibold text-amber-200">
          Quantidade de senhas:
        </label>

        <select
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="rounded-lg bg-amber-900 px-4 py-2 text-amber-100 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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

        {valorTotal && (
          <span className="text-amber-400 font-bold text-lg">
            Total: R$ {valorTotal.toLocaleString("pt-BR")}
          </span>
        )}
      </div>

      {/* ================= CTA DESKTOP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 hidden md:inline-flex w-fit items-center gap-3 rounded-xl bg-amber-600 px-10 py-4 text-xl font-extrabold text-black shadow-lg shadow-amber-600/40 transition hover:bg-amber-700 hover:scale-[1.02]"
      >
        Comprar minha senha
        <span className="text-2xl">📲</span>
      </a>

      {/* ================= CTA MOBILE FIXO ================= */}
      {showMobileCTA && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 rounded-xl bg-amber-600 py-4 text-lg font-extrabold text-black shadow-lg shadow-amber-600/40 md:hidden transition-transform active:scale-95"
        >
          Comprar minha senha
          <span className="text-2xl">📲</span>
        </a>
      )}
    </>
  );
}
