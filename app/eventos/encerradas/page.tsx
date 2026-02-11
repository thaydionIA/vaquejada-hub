import Link from "next/link";
import Image from "next/image";
import { eventos } from "@/data/eventos";

export const dynamic = "force-static";

export default function EncerradasPage() {
  const festasEncerradas = eventos.filter(
    (e) => e.status === "finished"
  );

  return (
    <main className="bg-amber-950 min-h-screen text-amber-50 px-6 py-20">

      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          Festas Encerradas
        </h1>

        <p className="text-lg text-amber-200 max-w-3xl mx-auto">
          Histórico oficial das festas realizadas na plataforma.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {festasEncerradas.length > 0 ? (
          festasEncerradas.map((festa) => (
            <div
              key={festa.id}
              className="rounded-2xl bg-amber-900/60 border border-amber-700 shadow-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={festa.image}
                  alt={festa.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-amber-300">
                  {festa.title}
                </h2>

                <p className="text-sm text-amber-200">
                  {festa.date} • {festa.location}
                </p>

                <span className="inline-block bg-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Encerrada
                </span>

                <Link
                  href={`/eventos/${festa.slug}/participantes`}
                  className="mt-4 inline-block bg-amber-600 px-5 py-2 rounded-lg text-sm font-bold text-black hover:bg-amber-700 transition"
                >
                  Ver Resultados
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-amber-300">
            Nenhuma festa encerrada ainda.
          </p>
        )}

      </div>

    </main>
  );
}
