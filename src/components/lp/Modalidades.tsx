import modalidadesArte from "@/assets/lp/modalidades-arte.webp";
import { Container } from "./ui";

const MODALIDADES = [
  "Idiomas",
  "Música",
  "Dança",
  "Ballet",
  "Jiu-Jitsu",
  "Judô",
  "Natação",
  "Futebol",
  "Reforço Escolar",
  "Pilates e Yoga",
  "Beach Tennis",
];

export const Modalidades = () => (
  <section className="relative overflow-hidden bg-ma-blue">
    <Container className="relative flex flex-col pt-14 xl:h-[614px] xl:justify-center xl:pt-0">
      <div className="relative z-10 flex w-full max-w-[530px] flex-col gap-6 xl:ml-9 xl:gap-[31px]">
        <h2 className="font-display text-[40px] font-bold leading-[0.95] text-white sm:text-[52px] xl:w-[448px] xl:text-[60px] xl:leading-[53px]">
          Feito para quem ensina:
        </h2>
        <ul className="grid grid-cols-2 gap-x-[7px] gap-y-[14px] sm:grid-cols-3">
          {MODALIDADES.map((m) => (
            <li
              key={m}
              className="flex h-[46px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[22px] border border-[#5C8DF2] bg-[#1D4FC4] px-3 text-[15px] font-semibold text-white transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:border-white/70 hover:bg-[#3A6BE8] hover:shadow-[0_10px_22px_rgba(7,16,51,0.28)] active:translate-y-0 active:shadow-none sm:text-base"
            >
              {m}
            </li>
          ))}
          <li className="flex h-[46px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[22px] border border-[#5C8DF2] bg-[#0B245C] px-3 text-[15px] font-semibold text-white transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:border-white/70 hover:bg-[#17357F] hover:shadow-[0_10px_22px_rgba(7,16,51,0.28)] active:translate-y-0 active:shadow-none sm:text-base">
            e muito mais
          </li>
        </ul>
      </div>

      {/* Celular + card de mensalidades (imagem única do Figma) — encosta na borda de baixo da seção */}
      <img
        src={modalidadesArte}
        alt="Tela inicial do app Minha Aula com mensalidades pagas, pendentes e próximas cobranças"
        width={620}
        height={539}
        className="mx-auto mt-12 block w-full max-w-[420px] xl:absolute xl:left-[600px] xl:top-[75px] xl:mt-0 xl:w-[620px] xl:max-w-none"
      />
    </Container>
  </section>
);
