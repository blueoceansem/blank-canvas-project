import checkPlan from "@/assets/lp/check-plan.svg";
import { Badge, Container } from "./ui";
import { useLeadModal } from "./LeadModal";

/** Preços dos planos — troque "[VALOR]" quando os valores de Crescer e Evoluir estiverem definidos */
const PLANOS = [
  {
    nome: "Essencial",
    publico: "Para pequenas escolas",
    preco: "R$ 129,90",
    limite: "Até 50 alunos",
    destaque: false,
  },
  {
    nome: "Crescer",
    publico: "Para escolas que estão crescendo",
    preco: "R$ [VALOR]",
    limite: "Até 100 alunos",
    destaque: true,
  },
  {
    nome: "Evoluir",
    publico: "Para grandes escolas",
    preco: "R$ [VALOR]",
    limite: "Até 200 alunos",
    destaque: false,
  },
];

const INCLUSO = [
  "Agenda e aulas",
  "Mensalidades com Pix automático",
  "Comunicação com alunos e responsáveis",
];

const GARANTIAS = [
  { titulo: "Sem contrato", texto: "Plano mensal." },
  { titulo: "Sem taxa de setup", texto: "Você não paga para começar." },
  { titulo: "Cancele quando quiser", texto: "Você decide até quando usar." },
];

export const Planos = () => {
  const { open } = useLeadModal();
  return (
    <section id="planos" className="bg-ma-navy py-16 xl:pb-16 xl:pt-[63px]">
      <Container className="flex flex-col items-center">
        <Badge>Planos</Badge>
        <div className="mt-[42px] max-w-[937px] text-center">
          <h2 className="font-display text-[38px] font-extrabold leading-[1.02] tracking-[-1.4px] text-white sm:text-[48px] xl:text-[60px] xl:leading-[58.24px] xl:tracking-[-2px]">
            Planos a partir de{" "}
            <span className="whitespace-nowrap text-ma-cyan">R$ 129,90/mês.</span>
          </h2>
          <p className="mt-2 text-[19px] leading-[1.2] text-ma-soft xl:mt-0 xl:text-[24px] xl:leading-[28.5px]">
            Veja qual cabe na sua escola. Sem contrato e sem taxa de setup.
          </p>
        </div>

        <div className="mt-12 grid w-full gap-6 lg:grid-cols-3 xl:mt-16">
          {PLANOS.map((p) => (
            <article
              key={p.nome}
              className={`flex flex-col rounded-[26px] bg-white p-7 xl:p-9 ${
                p.destaque ? "shadow-[0_0_0_3px_#5FD4F5,0_0_40px_rgba(95,212,245,0.4)]" : ""
              }`}
            >
              <h3 className="text-[28px] font-extrabold leading-[33.88px] tracking-[-0.8px] text-ma-navy">
                {p.nome}
              </h3>
              <p className="mt-[6px] text-base text-ma-muted">{p.publico}</p>
              <p className="mt-[22px] flex flex-wrap items-baseline gap-x-[18px]">
                <span className="font-display whitespace-nowrap text-[38px] font-black leading-[53.24px] tracking-[-1.6px] text-ma-blue xl:text-[44px]">
                  {p.preco}
                </span>
                <span className="text-base text-ma-muted">/mês</span>
              </p>
              <span className="mt-[22px] self-start rounded-full bg-[#E8F0FF] px-3 py-[6px] text-[15px] font-extrabold leading-[18.15px] text-ma-blue-2">
                {p.limite}
              </span>
              <hr className="mt-[22px] border-[#E8EDF8]" />
              <ul className="mt-[22px] flex flex-col gap-3">
                {INCLUSO.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-[10px] text-base leading-[19.36px] text-ma-navy"
                  >
                    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-ma-blue">
                      <img src={checkPlan} alt="" width={12} height={12} />
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className={`mt-auto ${p.destaque ? "pt-[27px]" : "pt-[23px]"}`}>
                <button
                  type="button"
                  onClick={open}
                  className={`w-full rounded-full text-sm font-extrabold uppercase tracking-[1px] transition ${
                    p.destaque
                      ? "h-[54px] bg-ma-cyan text-ma-navy hover:brightness-110"
                      : "h-[58px] border-2 border-ma-blue text-ma-blue-2 hover:bg-ma-blue hover:text-white"
                  }`}
                >
                  Quero testar agora →
                </button>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-14 grid w-full gap-8 text-center md:grid-cols-3 xl:mt-[89px]">
          {GARANTIAS.map((g) => (
            <li key={g.titulo} className="flex flex-col gap-[5px]">
              <p className="text-[24px] font-extrabold leading-[29.04px] text-ma-cyan">
                {g.titulo}
              </p>
              <p className="text-base text-ma-soft">{g.texto}</p>
            </li>
          ))}
        </ul>

        <p className="font-display mt-14 text-center text-[16px] font-semibold leading-[1.4] text-white xl:text-[20px]">
          Pagamentos processados pelo Asaas · Instituição de pagamento autorizada pelo Banco Central
          do Brasil.
        </p>
      </Container>
    </section>
  );
};
