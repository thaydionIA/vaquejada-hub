import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="relative overflow-hidden">

      {/* Fundo textura */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/textura.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hub de Vaquejada"
            width={220}
            height={120}
            priority
            className="h-auto w-auto max-h-16 object-contain"
          />
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-8 text-sm font-medium text-[#D6BFA2]">
          <Link href="/" className="hover:text-[#E89A3D] transition">
            Início
          </Link>

          <Link href="/eventos/encerradas" className="hover:text-[#E89A3D] transition">
            Festas
          </Link>

          <Link href="/sobre" className="hover:text-[#E89A3D] transition">
            Plataforma
          </Link>
        </nav>

      </div>

      {/* Linha dourada inferior */}
      <div className="relative z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C66A1E] to-transparent" />

    </header>
  );
}
