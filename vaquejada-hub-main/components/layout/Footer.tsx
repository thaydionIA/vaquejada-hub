import Image from "next/image";
export function Footer() {
  return (
    <footer className="relative border-t border-[#5A3A22] overflow-hidden">

      {/* Textura */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/textura.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/80" />

      {/* Conteúdo */}
      <div className="relative mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-[#D6BFA2]">

        {/* Plataforma */}
        <div>
          <h3 className="text-lg font-bold text-amber-400 mb-3">
            Hub de Vaquejada
          </h3>
          <p className="text-[#C8AE8C] leading-relaxed">
            Sistema digital desenvolvido especialmente
            para a gestão da festa de vaquejada do
            <span className="block font-semibold text-amber-300 mt-1">
              Rancho Pai e Filho
            </span>
          </p>
        </div>

        {/* ThayDion.IA */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/thaydion-logo.png"
              alt="Logo ThayDion.IA"
              width={32}
              height={32}
              className="object-contain"
            />
            <h3 className="text-lg font-bold text-amber-400">
              ThayDion.IA
            </h3>
          </div>

          <p className="text-[#C8AE8C] leading-relaxed">
            Tecnologia aplicada à tradição.
            <br />
            Transformando festas em experiências digitais.
          </p>
        </div>

        {/* Direitos */}
        <div>
          <h3 className="text-lg font-bold text-amber-400 mb-3">
            Direitos & Propriedade
          </h3>

          <p className="text-[#C8AE8C] leading-relaxed">
            © {new Date().getFullYear()} ThayDion.IA
            <br />
            Todos os direitos de propriedade intelectual
            deste sistema pertencem à ThayDion.IA.
          </p>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="relative border-t border-[#5A3A22] py-6 text-center text-xs text-[#B89A74]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
          <span>Desenvolvido para Rancho Pai e Filho</span>
          <span className="hidden md:inline">•</span>
          <span>Plataforma proprietária ThayDion.IA</span>
        </div>
      </div>


    </footer>
  );
}
