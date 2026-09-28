import { Badge, Container } from "./ui";

const FAQ = [
  {
    p: "Preciso entender de tecnologia pra usar?",
    r: "Não. Cobrança, comunicação e gestão entram no automático no mesmo dia em que você cadastra o primeiro aluno.",
  },
  {
    p: "Quanto custa?",
    r: "Os planos começam em R$ 129,90 por mês e variam pelo número de alunos: Essencial (até 50), Crescer (até 100) e Evoluir (até 200). Sem contrato e sem taxa de setup.",
  },
  { p: "Tem contrato ou fidelidade?", r: "Não tem contrato. Você cancela quando quiser." },
  {
    p: "Os pais têm app próprio?",
    r: "Têm. O app é 100% gratuito: pais e alunos veem calendário e aulas, recebem avisos e pagam a mensalidade via Pix pelo celular.",
  },
  {
    p: "Ajuda a reduzir atrasos nos pagamentos?",
    r: "Os lembretes saem sozinhos antes e depois do vencimento, por WhatsApp e e-mail, e você vê em tempo real quem pagou e quem está em atraso.",
  },
  {
    p: "O que é o marketplace?",
    r: "É a vitrine do Minha Aula. Sua escola aparece no app e pais que buscam cursos encontram você direto por lá.",
  },
];

export const Duvidas = () => (
  <section id="duvidas" className="bg-white py-16 xl:pb-[57px] xl:pt-[65px]">
    <Container className="flex flex-col items-center">
      <Badge tone="navy">Dúvidas</Badge>
      <h2 className="mt-[31px] text-center text-[34px] font-extrabold leading-[1.06] tracking-[-1.2px] text-ma-navy xl:text-[48px] xl:leading-[50.88px] xl:tracking-[-1.6px]">
        Antes de você perguntar
      </h2>
      <dl className="mt-2 w-full max-w-[740px] divide-y divide-[#DCE3F4] border-b border-[#DCE3F4]">
        {FAQ.map((f) => (
          <div key={f.p} className="py-6">
            <dt className="text-[20px] font-extrabold leading-[1.21] tracking-[-0.4px] text-ma-navy xl:text-[22px]">
              {f.p}
            </dt>
            <dd className="mt-[9px] text-[17px] leading-[26.35px] text-ma-muted">{f.r}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
);
