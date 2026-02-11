import { eventos } from "@/data/eventos";
import { participantes } from "@/data/participantes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PLATFORM_WHATSAPP } from "@/lib/config";

export const dynamic = "force-static";

export function generateStaticParams() {
    return eventos.map((evento) => ({
        slug: evento.slug,
    }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ParticipantesPage({ params }: Props) {
    const { slug } = await params;

    const festa = eventos.find((e) => e.slug === slug);
    if (!festa) notFound();

    const lista = participantes.filter(
        (p) => p.eventoSlug === slug
    );

    const campeoes = lista
        .filter((p) => p.posicao)
        .sort((a, b) => (a.posicao ?? 99) - (b.posicao ?? 99));

    return (
        <main className="min-h-screen bg-amber-950 px-6 py-20 text-amber-50">
            <div className="mx-auto max-w-7xl">

                <h1 className="text-4xl font-bold text-amber-400 mb-4">
                    🐂 Festa de Vaquejada
                </h1>

                <p className="text-lg text-amber-200 mb-14">
                    {festa.title} • {festa.date}
                </p>

                {/* ================= PREMIAÇÃO ================= */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8">
                        🏆 Premiação Oficial
                    </h2>

                    <div className="grid gap-6 md:grid-cols-4">
                        {[1, 2, 3, 4].map((pos) => {
                            const campeao = campeoes.find(
                                (c) => c.posicao === pos
                            );

                            return (
                                <div
                                    key={pos}
                                    className={`relative rounded-2xl p-6 border shadow-xl text-center transition-all
                                               ${pos === 1
                                            ? "bg-gradient-to-br from-yellow-500/30 to-amber-800 border-yellow-400 shadow-yellow-500/40 scale-105"
                                            : "bg-gradient-to-br from-amber-900/40 to-amber-800 border-yellow-500"
                                        }`}
                                >
                                    <div className="text-4xl mb-3">
                                        {pos === 1 && "🥇"}
                                        {pos === 2 && "🥈"}
                                        {pos === 3 && "🥉"}
                                        {pos === 4 && "🏅"}
                                    </div>

                                    <h3 className="font-bold text-lg text-amber-100">
                                        {pos}º Lugar
                                    </h3>

                                    <div className="mt-4 text-amber-200">
                                        {campeao ? (
                                            <>
                                                <p
                                                    className={`font-semibold text-lg ${pos === 1 ? "text-yellow-300" : "text-amber-100"
                                                        }`}
                                                >
                                                    {campeao.nome}
                                                </p>

                                                <p className="text-sm text-amber-300">
                                                    {campeao.cavalo ?? "—"}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="italic text-amber-500">
                                                Em disputa
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ================= TABELA ================= */}
                <section>
                    <h2 className="text-2xl font-bold text-amber-400 mb-6">
                        📋 Participantes
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-amber-700 shadow-lg">
                        <table className="min-w-full text-left">
                            <thead className="bg-amber-900 text-amber-300">
                                <tr>
                                    <th className="px-6 py-4">#</th>
                                    <th className="px-6 py-4">Vaqueiro</th>
                                    <th className="px-6 py-4">Cavalo</th>
                                    <th className="px-6 py-4 text-center">Bois</th>
                                    <th className="px-6 py-4 text-center">Resultado</th>
                                </tr>
                            </thead>

                            <tbody>
                                {lista.map((p, index) => {
                                    const bateuSenha =
                                        p.boisDerrubados >= p.totalBois;

                                    return (
                                        <tr
                                            key={index}
                                            className="border-t border-amber-800 hover:bg-amber-900/60 transition"
                                        >
                                            <td className="px-6 py-4 font-semibold text-amber-300">
                                                {index + 1}
                                            </td>

                                            <td className="px-6 py-4 font-bold text-amber-100">
                                                {p.nome}
                                            </td>

                                            <td className="px-6 py-4 text-amber-200">
                                                {p.cavalo ?? (
                                                    <span className="italic text-amber-500">
                                                        —
                                                    </span>
                                                )}
                                            </td>

                                            <td className="px-6 py-4 text-center text-amber-300 font-semibold">
                                                {p.boisDerrubados}/{p.totalBois}
                                            </td>

                                            <td className="px-6 py-4 text-center">
                                                {bateuSenha ? (
                                                    <span className="bg-green-600 text-white px-4 py-1 rounded-full font-bold">
                                                        V
                                                    </span>
                                                ) : p.boisDerrubados === 0 ? (
                                                    <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">
                                                        0
                                                    </span>
                                                ) : (
                                                    <span className="bg-gray-600 text-white px-4 py-1 rounded-full font-bold">
                                                        -
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ================= AVISO ================= */}
                <div className="mt-20 rounded-2xl bg-amber-900 p-12 text-center shadow-xl border border-amber-700">
                    <h2 className="text-2xl font-bold text-amber-400 mb-4">
                        🐎 Registre o nome do seu cavalo
                    </h2>

                    <p className="text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
                        Seu cavalo faz parte da sua história.
                        Envie o nome para a organização e registre sua trajetória na
                        nossa festa.
                        Cada boi derrubado é um capítulo —
                        venha escrever o seu conosco.
                    </p>
                    <a
                        href={`https://wa.me/${PLATFORM_WHATSAPP}?text=${encodeURIComponent(
                            `Olá! Quero registrar o nome do meu cavalo na festa "${festa.title}".\n\n` +
                            `Nome do vaqueiro: \n` +
                            `Nome do cavalo: `
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-600/40 transition hover:bg-green-700"
                    >
                        📲 Registrar nome do cavalo
                    </a>

                </div>

                <div className="mt-16">
                    <Link
                        href={`/eventos/${festa.slug}`}
                        className="rounded-xl border border-amber-600 px-6 py-3 text-lg font-semibold text-amber-400 transition hover:bg-amber-600 hover:text-black"
                    >
                        ← Voltar para a festa
                    </Link>
                </div>

            </div>
        </main>
    );
}
