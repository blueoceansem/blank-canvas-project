import logo from "@/assets/lp/logo-footer.svg";
import { Container } from "./ui";

/** Links legais — ainda apontam para a home do site oficial até as páginas existirem */
const LINKS = [
  { href: "#duvidas", label: "Dúvidas" },
  { href: "https://minhaaulaoficial.com.br/", label: "Termos de Uso" },
  { href: "https://minhaaulaoficial.com.br/", label: "Política de Privacidade" },
  { href: "https://minhaaulaoficial.com.br/", label: "LGPD" },
];

export const Footer = () => (
  <footer className="border-t border-[#1C2B63] bg-ma-navy-3">
    <Container className="flex flex-col items-center gap-6 py-10 lg:h-[126px] lg:flex-row lg:justify-between lg:py-0">
      <a href="#" className="flex items-center gap-[10px]" aria-label="Minha Aula — início">
        <img src={logo} alt="" width={32} height={29} />
        <span className="text-[18px] font-bold text-white">Minha Aula</span>
      </a>
      <div className="flex flex-col items-center gap-4 text-[15px] text-[#8E9CC8] lg:flex-row lg:gap-7">
        <nav className="flex flex-wrap justify-center gap-x-[27px] gap-y-2">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="underline transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <p>© 2026 Minha Aula. Todos os direitos reservados.</p>
      </div>
    </Container>
  </footer>
);
