export function Footer() {
  return (
    <footer className="relative border-t border-[#5A3A22] overflow-hidden">

      {/* Textura de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/textura.png')",
        }}
      />

      {/* Overlay para escurecer e dar contraste */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo original (inalterado) */}
      <div className="relative mx-auto max-w-7xl px-6 py-10 text-sm text-[#D6BFA2] flex flex-col md:flex-row justify-between gap-4">

        <span>
          © {new Date().getFullYear()} Hub de Vaquejada. Todos os direitos reservados.
        </span>

        <span className="text-[#B89A74]">
          Desenvolvido com Next.js & Tailwind CSS
        </span>

      </div>

    </footer>
  );
}
