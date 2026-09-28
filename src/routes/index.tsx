import { createFileRoute } from "@tanstack/react-router";
import { LeadModalProvider } from "@/components/lp/LeadModal";
import { Header } from "@/components/lp/Header";
import { Hero } from "@/components/lp/Hero";
import { Modalidades } from "@/components/lp/Modalidades";
import { Dor } from "@/components/lp/Dor";
import { ComoFunciona } from "@/components/lp/ComoFunciona";
import { Recursos } from "@/components/lp/Recursos";
import { Planos } from "@/components/lp/Planos";
import { Depoimentos } from "@/components/lp/Depoimentos";
import { Duvidas } from "@/components/lp/Duvidas";
import { CtaFinal } from "@/components/lp/CtaFinal";
import { Footer } from "@/components/lp/Footer";

const TITULO = "Minha Aula — Receba as mensalidades sem precisar cobrar";
const DESCRICAO =
  "O Minha Aula envia a cobrança pelo WhatsApp, gera o Pix e dá baixa automática. Para escolas de atividades extracurriculares.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
    ],
  }),
  component: LandingMinhaAula,
});

function LandingMinhaAula() {
  return (
    <LeadModalProvider>
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <Dor />
        <ComoFunciona />
        <Recursos />
        <Planos />
        <Depoimentos />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
    </LeadModalProvider>
  );
}
