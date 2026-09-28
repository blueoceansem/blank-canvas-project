import { Badge, Container, CtaButton } from "./ui";

export const CtaFinal = () => (
  <section className="bg-ma-navy py-16 xl:pb-[89px] xl:pt-[90px]">
    <Container className="flex flex-col items-center text-center">
      <Badge tone="coral">Faça as contas</Badge>
      <h2 className="mt-7 max-w-[960px] text-[34px] font-extrabold leading-[1.06] tracking-[-1.2px] text-white sm:text-[46px] xl:text-[60px] xl:leading-[62.4px] xl:tracking-[-2.2px]">
        Quanto você deixou de receber <br className="hidden md:block" />
        este mês <span className="text-ma-cyan">para não ter que cobrar?</span>
      </h2>
      <p className="mt-7 max-w-[680px] text-[18px] leading-[1.5] text-ma-soft xl:text-[20px]">
        Coloque a cobrança no automático e volte a gastar seu tempo com o que importa: a aula.
      </p>
      <CtaButton className="mt-7 h-[66px] px-12 text-[17px] tracking-[1.2px] shadow-[0_0_36px_rgba(95,212,245,0.45)]" />
    </Container>
  </section>
);
