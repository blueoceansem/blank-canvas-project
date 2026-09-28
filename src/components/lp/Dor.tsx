import iconChat from "@/assets/lp/icon-chat.svg";
import iconDoc from "@/assets/lp/icon-doc.svg";
import iconTrend from "@/assets/lp/icon-trend.svg";
import { Badge, Container } from "./ui";

const DORES = [
  {
    icon: iconChat,
    titulo: "O climão de cobrar",
    texto:
      "Você vê o aluno toda semana. Mandar mensagem cobrando é chato, então você adia. E um mês de atraso vira dois.",
  },
  {
    icon: iconDoc,
    titulo: "Caderno, planilha e WhatsApp",
    texto:
      "Cada informação num canto. Para saber quem pagou, você abre três lugares e ainda fica na dúvida.",
  },
  {
    icon: iconTrend,
    titulo: "Caixa que ninguém prevê",
    texto:
      "Você só descobre quanto entrou no fim do mês. Abrir turma nova, comprar material ou tirar férias vira aposta.",
  },
];

export const Dor = () => (
  <section className="bg-ma-ice py-14 xl:pb-[51px] xl:pt-[52px]">
    <Container className="flex flex-col items-center">
      <Badge tone="coral">Isso soa familiar?</Badge>
      <h2 className="font-display-xb mt-[18px] max-w-[900px] text-center text-[32px] font-extrabold leading-[1.06] tracking-[-1.2px] sm:text-[44px] xl:text-[54px] xl:leading-[57.24px] xl:tracking-[-1.8px]">
        <span className="text-ma-navy md:block">Você abriu uma escola para ensinar. </span>
        <span className="text-ma-blue md:block">Não para correr atrás de mensalidade.</span>
      </h2>

      <div className="mt-10 grid w-full gap-6 md:grid-cols-3 xl:mt-[47px]">
        {DORES.map((d) => (
          <article
            key={d.titulo}
            className="rounded-[22px] bg-white p-7 shadow-[0_10px_30px_rgba(10,22,64,0.06)] xl:min-h-[300px] xl:p-9"
          >
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#FFE7E3]">
              <img src={d.icon} alt="" width={26} height={26} />
            </span>
            <h3 className="mt-4 text-[22px] font-extrabold leading-[1.21] tracking-[-0.6px] text-ma-navy xl:text-[25px]">
              {d.titulo}
            </h3>
            <p className="mt-[15px] text-[17px] leading-[1.55] text-ma-muted xl:text-[18px]">
              {d.texto}
            </p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
