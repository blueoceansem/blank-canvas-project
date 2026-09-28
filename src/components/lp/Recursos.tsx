import { Badge, Container } from "./ui";

const RECURSOS = [
  {
    titulo: "Régua de pagamento automática",
    texto: "Lembretes antes e depois do vencimento, por WhatsApp e e-mail.",
  },
  {
    titulo: "Pix com baixa automática",
    texto: "O aluno paga no app e a baixa é instantânea. Nada de conferir extrato.",
  },
  {
    titulo: "Gestão completa de alunos",
    texto: "Alunos, responsáveis e matrículas num painel organizado.",
  },
  {
    titulo: "Turmas e calendário",
    texto: "Crie turmas, defina horários e vincule professores e alunos.",
  },
  {
    titulo: "Níveis e certificados",
    texto: "Acompanhe a evolução de cada aluno e emita certificados padronizados.",
  },
  {
    titulo: "Marketplace para divulgar sua escola",
    texto: "Pais buscam cursos e encontram sua escola direto no app.",
  },
];

const APP_LINHAS: [string, string | null][] = [
  ["Próxima aula", "Qui · 18h30"],
  ["Nível", "Intermediário"],
  ["Mensalidade", null],
  ["Avisos", "1 novo"],
];

export const Recursos = () => (
  <section id="recursos" className="bg-ma-ice py-16 xl:py-[120px]">
    <Container className="grid gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[692px_460px] xl:gap-12">
      <div>
        <Badge tone="green">O que você ganha</Badge>
        <h2 className="mt-[18px] text-[34px] font-extrabold leading-[1.06] tracking-[-1.2px] text-ma-navy sm:text-[42px] xl:text-[50px] xl:leading-[53px] xl:tracking-[-1.8px]">
          Menos administrativo. <span className="text-ma-blue">Mais tempo de aula.</span>
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {RECURSOS.map((r) => (
            <li
              key={r.titulo}
              className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(10,22,64,0.05)]"
            >
              <h3 className="text-[20px] font-extrabold leading-[24.2px] tracking-[-0.4px] text-ma-navy">
                {r.titulo}
              </h3>
              <p className="mt-2 text-base leading-6 text-ma-muted">{r.texto}</p>
            </li>
          ))}
        </ul>
      </div>

      <aside className="rounded-[28px] bg-ma-blue p-7 sm:p-10">
        <Badge>App grátis para pais e alunos</Badge>
        <h3 className="mt-[21px] text-[30px] font-extrabold leading-[1.08] tracking-[-1.2px] text-white xl:text-[34px] xl:leading-[36.72px]">
          Sua escola com cara de escola grande
        </h3>
        <p className="mt-[22px] text-[17px] leading-[26.35px] text-[#E3EBFF]">
          Os pais acompanham tudo pelo app e param de te perguntar no WhatsApp quando é a aula ou
          quanto devem.
        </p>

        <div className="mt-[22px] rounded-[20px] bg-white px-5 pb-2 pt-5 shadow-[0_20px_40px_rgba(10,22,64,0.25)]">
          <p className="text-[18px] font-extrabold leading-[21.8px] text-ma-navy">Olá, Mariana</p>
          <ul className="mt-[5px]">
            {APP_LINHAS.map(([rotulo, valor]) => (
              <li
                key={rotulo}
                className="flex h-10 items-center justify-between border-t border-[#E8EDF8] text-[15px] first:border-t-0"
              >
                <span className="font-semibold text-ma-navy">{rotulo}</span>
                {valor ? (
                  <span className="text-ma-muted">{valor}</span>
                ) : (
                  <span className="rounded-full bg-[#E4F6EB] px-[10px] py-[3px] text-[13px] font-extrabold text-[#1F6E43]">
                    Paga
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-[22px] text-[14px] leading-[16.94px] text-[#E3EBFF]">
          Calendário, aulas, avisos, mensalidades e evolução do aluno. 100% gratuito.
        </p>
      </aside>
    </Container>
  </section>
);
