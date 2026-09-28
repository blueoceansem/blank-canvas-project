import { useEffect, useRef } from "react";
import heroArte from "@/assets/lp/hero-arte.webp";
import checkCyan from "@/assets/lp/check-cyan.svg";
import { CtaButton } from "./ui";

const BENEFICIOS = [
  "Chega de mandar cobrança um por um",
  "Veja em tempo real quem pagou e quem está em atraso",
  "Os pais acompanham aulas e pagamentos pelo app",
];

const LARGURA_ARTE = 678;

/** Escala da arte no desktop: 1 quando cabe, menor quando a borda direita passaria da tela (margem de 40px) */
function useEscalaArte() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ajustar = () => {
      el.style.removeProperty("--arte-escala");
      const esquerda = el.getBoundingClientRect().left;
      const disponivel = document.documentElement.clientWidth - 40 - esquerda;
      el.style.setProperty(
        "--arte-escala",
        String(Math.min(1, Math.max(0.5, disponivel / LARGURA_ARTE))),
      );
    };
    ajustar();
    window.addEventListener("resize", ajustar);
    return () => window.removeEventListener("resize", ajustar);
  }, []);
  return ref;
}

/*
 * Celular = quadro "02 · 390px" (centralizado, arte embaixo); tablet = mesmo formato, maior;
 * desktop (xl) = quadros de 1440 e 1920 (texto à esquerda, arte ao lado; o recuo vem do .hero-inset).
 */
export const Hero = () => {
  const arteRef = useEscalaArte();
  return (
    <section id="cadastro" className="bg-hero-grid-mobile relative overflow-hidden xl:bg-hero-grid">
      <div className="relative flex flex-col items-center pt-[67px] text-center sm:pt-20 xl:block xl:min-h-[835px] xl:pb-[133px] xl:pt-[92px] xl:text-left xl:hero-inset">
        <div className="flex min-h-[337.51px] w-full flex-col items-center justify-center gap-[16.56px] px-2 sm:min-h-0 sm:justify-start sm:gap-6 sm:px-8 xl:w-auto xl:items-start xl:gap-0 xl:px-0">
          <span className="inline-flex h-[18.27px] items-center rounded-full px-[9.14px] text-[7.42px] font-extrabold uppercase leading-[8.98px] tracking-[0.685px] text-ma-navy bg-ma-cyan sm:h-[30px] sm:px-[14px] sm:text-[11px] sm:leading-[1.2] sm:tracking-[1px] xl:h-8 xl:px-4 xl:text-[13px] xl:leading-[15.73px] xl:tracking-[1.2px]">
            Para escolas de atividades extracurriculares
          </span>

          <div className="relative z-10 flex max-w-[374px] flex-col items-center gap-[5.71px] sm:max-w-[600px] sm:gap-[10px] xl:mt-[51px] xl:max-w-[652px] xl:items-start">
            <h1 className="font-display text-[min(34.26px,8.785vw)] font-bold leading-[1.1] tracking-[-0.0667em] text-white sm:text-[52px] sm:tracking-[-3px] xl:text-[60px] xl:leading-[66px] xl:tracking-[-4px]">
              Receba as mensalidades{" "}
              <span className="text-ma-cyan">sem precisar cobrar nenhum aluno.</span>
            </h1>
            <p className="max-w-[342.6px] text-[11.99px] leading-[17.99px] text-ma-soft sm:max-w-[600px] sm:text-[18px] sm:leading-[1.5] xl:text-[21px] xl:leading-[31.5px]">
              Você cadastra o aluno. O Minha Aula envia a cobrança pelo WhatsApp, gera o Pix e dá
              baixa automática quando ele paga. Você só aparece para dar aula.
            </p>
          </div>

          <ul className="relative z-10 flex flex-col items-center gap-[5.14px] sm:gap-[9px] xl:mt-[25px] xl:items-start">
            {BENEFICIOS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-[6.85px] text-[10.28px] font-medium leading-[12.44px] text-white sm:gap-3 sm:text-[16px] sm:leading-[1.21] xl:text-[18px]"
              >
                <span className="flex h-[18.27px] w-[18.27px] shrink-0 items-center justify-center rounded-full border-[1.14px] border-ma-cyan shadow-[0_0_6.85px_rgba(95,212,245,0.45)] sm:h-8 sm:w-8 sm:border-2 sm:shadow-[0_0_12px_rgba(95,212,245,0.45)]">
                  <img
                    src={checkCyan}
                    alt=""
                    width={14}
                    height={14}
                    className="h-2 w-2 sm:h-[14px] sm:w-[14px]"
                  />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <CtaButton className="relative z-10 h-[30.26px] px-[18.79px] text-[11.95px] leading-[14.47px] tracking-[0.683px] sm:h-[53px] sm:px-[33px] sm:text-[17px] sm:tracking-[1.2px] xl:mt-8 xl:text-[21px]" />
        </div>

        {/* Arte (celular + card Pix + ícones, imagem única do Figma). Celular: embaixo, 98% da largura, 5px para a esquerda como no quadro de 390.
            Desktop: ao lado do texto, na posição do Figma; encolhe só quando a tela não comporta os 678px */}
        <div
          ref={arteRef}
          className="relative ml-[-1.32%] mt-10 w-[98%] self-start sm:mx-auto sm:mt-12 sm:w-full sm:max-w-[560px] sm:self-center xl:absolute xl:left-[calc(var(--hero-inset)+606px)] xl:top-[181px] xl:m-0 xl:w-[678px] xl:max-w-none xl:origin-top-left xl:[transform:scale(var(--arte-escala,1))]"
        >
          <img
            src={heroArte}
            alt="App Minha Aula mostrando a lista de mensalidades pagas e pendentes, com aviso de Pix recebido"
            width={678}
            height={660}
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
};
