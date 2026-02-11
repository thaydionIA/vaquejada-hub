import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 relative overflow-hidden">

      {/* Fundo textura */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/textura.png')",
        }}
      />

      {/* Overlay para escurecer e dar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            font-bold
            tracking-wider
            text-[#EBD5B3]
            hover:text-[#E89A3D]
            transition
          "
        >
          HUB VAQUEJADA
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-8 text-sm font-medium text-[#D6BFA2]">
          <Link href="/" className="hover:text-[#E89A3D] transition">
            Início
          </Link>
          <Link href="/eventos" className="hover:text-[#E89A3D] transition">
            Eventos
          </Link>
          <Link href="/sobre" className="hover:text-[#E89A3D] transition">
            Sobre
          </Link>
        </nav>

      </div>

      {/* Linha dourada inferior */}
      <div className="relative z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C66A1E] to-transparent" />

    </header>
  );
}
