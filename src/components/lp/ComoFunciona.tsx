import type { ReactNode } from "react";
import fundo from "@/assets/lp/como-funciona-bg.webp";
import { Badge, Container, CtaButton } from "./ui";

const MockLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[12px] font-extrabold uppercase leading-[14.5px] tracking-[1px] text-ma-blue">
    {children}
  </p>
);

const MockTurma = () => (
  <div className="rounded-[18px] bg-white p-[18px]">
    <MockLabel>Turma B · Jiu-jitsu</MockLabel>
    <ul className="mt-[10px] flex flex-col gap-[10px]">
      {[
        ["Marina Souza", "Faixa azul"],
        ["Lucas Pereira", "Faixa branca"],
        ["Ana Ribeiro", "Faixa roxa"],
      ].map(([nome, faixa]) => (
        <li
          key={nome}
          className="flex h-[39px] items-center justify-between rounded-[10px] bg-[#F2F6FF] px-3 text-[15px]"
        >
          <span className="font-semibold text-ma-navy">{nome}</span>
          <span className="font-bold text-ma-blue">{faixa}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MockWhatsapp = () => (
  <div className="rounded-[18px] bg-[#E8F0FF] p-[18px]">
    <MockLabel>WhatsApp · automático</MockLabel>
    <p className="mt-[10px] rounded-[4px_14px_14px_14px] bg-white px-[14px] py-3 text-[15px] leading-[21.75px] text-ma-navy">
      Oi, Marina! A mensalidade de outubro da sua escola já está disponível. É só pagar no Pix pelo
      app.
    </p>
    <span className="mt-[10px] inline-flex h-[37px] items-center rounded-full bg-ma-green px-[14px] text-[14px] font-extrabold text-ma-navy">
      Pagar com Pix
    </span>
  </div>
);

const MockPix = () => (
  <div className="rounded-[18px] bg-white p-[18px]">
    <MockLabel>Outubro</MockLabel>
    <div className="mt-3 grid grid-cols-2 gap-[10px]">
      <div className="rounded-[12px] bg-[#E4F6EB] p-3 text-[#1F6E43]">
        <p className="text-[13px] font-bold leading-[15.7px]">Em dia</p>
        <p className="mt-1 text-[22px] font-extrabold leading-[26.6px]">34 alunos</p>
      </div>
      <div className="rounded-[12px] bg-[#FFE7E3] p-3 text-[#B03522]">
        <p className="text-[13px] font-bold leading-[15.7px]">Em atraso</p>
        <p className="mt-1 text-[22px] font-extrabold leading-[26.6px]">6 alunos</p>
      </div>
    </div>
    <div className="mt-3 h-[10px] overflow-hidden rounded-[5px] bg-[#E8EDF8]">
      <div className="h-full w-[85%] bg-ma-green" />
    </div>
  </div>
);

const PASSOS = [
  {
    n: 1,
    titulo: "Cadastre seus alunos",
    mock: <MockTurma />,
    texto: "Alunos, responsáveis, matrículas e turmas num painel só.",
  },
  {
    n: 2,
    titulo: "A cobrança sai sozinha",
    mock: <MockWhatsapp />,
    texto:
      "Lembretes antes e depois do vencimento, por WhatsApp e e-mail. Você não precisa ligar para ninguém.",
  },
  {
    n: 3,
    titulo: "O Pix cai na sua conta",
    mock: <MockPix />,
    texto:
      "A baixa é automática e o dinheiro cai na hora. Você vê em tempo real quem pagou e quem está em atraso.",
  },
];

export const ComoFunciona = () => (
  <section
    id="como-funciona"
    className="relative overflow-hidden bg-ma-navy py-16 xl:pb-[134px] xl:pt-[125px]"
  >
    {/* Fundo do Figma (brilho azul + cards da Ana Clara e do Bruno Lima), só em telas largas */}
    <img
      src={fundo}
      alt=""
      width={1920}
      height={1083}
      className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-top xl:block"
    />
    {/* Em telas menores, só o brilho azul */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[-153px] h-[319px] w-[871px] -translate-x-1/2 rounded-[50%] bg-[#087DD8] blur-[140px] xl:hidden"
    />

    <Container className="relative flex flex-col items-center">
      <Badge>Como funciona</Badge>
      <div className="mt-7 flex max-w-[1123px] flex-col items-center gap-[13px] text-center">
        <h2 className="font-display-xb text-[36px] font-extrabold leading-[1.05] tracking-[-1.4px] text-white sm:text-[48px] xl:text-[62px] xl:leading-[63.24px] xl:tracking-[-2.2px]">
          Você dá aula. <span className="text-ma-cyan">O Minha Aula cobra.</span>
        </h2>
        <p className="font-display text-[19px] leading-[1.2] text-ma-soft xl:text-[24px] xl:leading-[28.5px]">
          Três passos e a cobrança da sua escola passa a rodar sozinha, todo mês.
        </p>
      </div>

      <ol className="mt-10 grid w-full gap-6 md:grid-cols-3 xl:mt-14">
        {PASSOS.map((p) => (
          <li
            key={p.n}
            className="flex flex-col rounded-[24px] border border-ma-line bg-ma-navy-2 p-6 xl:min-h-[467.5px] xl:p-8"
          >
            <div className="flex items-center gap-[14px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ma-cyan text-[19px] font-extrabold text-ma-cyan shadow-[0_0_16px_rgba(95,212,245,0.5)]">
                {p.n}
              </span>
              <h3 className="text-[22px] font-extrabold leading-[1.21] tracking-[-0.5px] text-white xl:text-[24px]">
                {p.titulo}
              </h3>
            </div>
            <div className="mt-6">{p.mock}</div>
            <p className="mt-[23px] text-[17px] leading-[25.5px] text-ma-soft">{p.texto}</p>
          </li>
        ))}
      </ol>

      <CtaButton className="mt-12 h-[60px] px-10 text-base tracking-[1px] shadow-[0_0_28px_rgba(95,212,245,0.4)] xl:mt-[77px]" />
    </Container>
  </section>
);
