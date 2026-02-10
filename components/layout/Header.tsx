import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-amber-700 hover:text-amber-600 transition"
        >
          HUB VAQUEJADA
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-amber-600 transition">
            Início
          </Link>
          <Link href="/eventos" className="hover:text-amber-600 transition">
            Eventos
          </Link>
          <Link href="/sobre" className="hover:text-amber-600 transition">
            Sobre
          </Link>
        </nav>

      </div>
    </header>
  );
}
