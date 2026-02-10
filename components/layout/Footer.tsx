export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-4">

        <span>
          © {new Date().getFullYear()} Hub de Vaquejada. Todos os direitos reservados.
        </span>

        <span className="text-slate-500">
          Desenvolvido com Next.js & Tailwind CSS
        </span>

      </div>
    </footer>
  );
}
