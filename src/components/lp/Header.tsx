import logo from "@/assets/lp/logo.svg";
import { CtaButton } from "./ui";

const NAV = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const Header = () => (
  <header className="border-b border-[#1C2B63] bg-ma-navy">
    <div className="mx-auto flex h-[72px] max-w-[1118px] items-center justify-between px-5 sm:px-8 lg:h-[89px] xl:px-0">
      <a href="#" className="flex items-center gap-[10px]" aria-label="Minha Aula — início">
        <img src={logo} alt="" width={40} height={36} className="h-[30px] w-auto lg:h-9" />
        <span className="text-[19px] font-bold tracking-[-0.4px] text-white lg:text-[22px]">
          Minha Aula
        </span>
      </a>
      <nav className="hidden items-center gap-[82px] lg:flex">
        <ul className="flex items-center gap-[82px]">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-base font-medium text-[#D5DDF5] transition hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <CtaButton className="h-11 px-[22px] text-sm tracking-[0.8px]" />
      </nav>
      <CtaButton className="h-10 px-4 text-[12px] tracking-[0.6px] lg:hidden">
        Testar grátis →
      </CtaButton>
    </div>
  </header>
);
