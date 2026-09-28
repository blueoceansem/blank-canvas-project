import { Badge, Container } from "./ui";

const NUMEROS = [
  { valor: "+80", rotulo: "escolas ativas" },
  { valor: "+2.500", rotulo: "alunos na plataforma" },
  { valor: "4,8★", rotulo: "avaliação média" },
  { valor: "+R$ 500 mil", rotulo: "movimentados por mês" },
];

const DEPOIMENTOS = [
  {
    selo: "Menos atrasos",
    texto:
      "Antes eu cobrava aluno por aluno no WhatsApp. Agora é tudo automático. Os atrasos nas mensalidades também melhoraram muito.",
    nome: "Mariana Costa",
    cargo: "Proprietária · Escola de Idiomas Fluency Now",
  },
  {
    selo: "+12 alunos",
    texto:
      "A ideia do marketplace é muito legal. Ajuda a divulgar a academia para pais e alunos de outros cursos na minha região. Já percebi novos clientes chegando a partir do app.",
    nome: "João Santos",
    cargo: "Fundador · Academia Oficina do Corpo",
  },
  {
    selo: "Zero planilhas",
    texto:
      "Os relatórios me ajudam a tomar decisões melhores. A comunicação com os pais ficou profissional. Não volto mais pra planilha.",
    nome: "Ana Oliveira",
    cargo: "Coordenadora · Centro de Reforço Escolar",
  },
];

export const Depoimentos = () => (
  <section className="bg-ma-ice py-16 xl:pb-[55px] xl:pt-[33px]">
    <Container className="flex flex-col items-center">
      <Badge tone="green">Quem já usa</Badge>
      <h2 className="mt-[17px] text-center text-[34px] font-extrabold leading-[1.08] tracking-[-1.2px] text-ma-navy xl:text-[46px] xl:leading-[49.68px] xl:tracking-[-1.6px]">
        Quem usa, <span className="text-ma-blue">recomenda</span>
      </h2>

      <ul className="mt-10 grid w-full grid-cols-2 gap-4 lg:grid-cols-4 xl:mt-[41px]">
        {NUMEROS.map((n) => (
          <li key={n.rotulo} className="rounded-[20px] bg-ma-navy px-5 py-5 xl:px-7 xl:py-6">
            <p className="font-display whitespace-nowrap text-[26px] font-black leading-[1.21] tracking-[-1px] sm:text-[30px] text-ma-cyan xl:text-[40px] xl:tracking-[-1.4px]">
              {n.valor}
            </p>
            <p className="mt-[5px] text-[14px] text-ma-soft xl:text-base">{n.rotulo}</p>
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid w-full gap-6 md:grid-cols-3">
        {DEPOIMENTOS.map((d) => (
          <li
            key={d.nome}
            className="flex min-h-[338px] flex-col rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(10,22,64,0.06)]"
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className="font-display mt-[-1px] h-[34px] text-[56px] font-black leading-[60px] text-ma-blue"
              >
                “
              </span>
              <span className="mt-[4px] rounded-full bg-[#E4F6EB] px-3 py-[5px] text-[13px] font-extrabold leading-[15.73px] text-[#1F6E43]">
                {d.selo}
              </span>
            </div>
            <blockquote className="mt-[18px] text-[19px] font-semibold leading-[27.55px] text-ma-navy">
              {d.texto}
            </blockquote>
            <footer className="mt-auto pt-[18px]">
              <p className="text-base font-extrabold text-ma-navy">{d.nome}</p>
              <p className="mt-[2px] text-[14px] text-ma-muted">{d.cargo}</p>
            </footer>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
