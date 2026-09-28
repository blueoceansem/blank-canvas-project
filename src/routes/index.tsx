import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Página em branco" },
      {
        name: "description",
        content: "Uma tela vazia, pronta para receber o próximo conteúdo.",
      },
      { property: "og:title", content: "Página em branco" },
      {
        property: "og:description",
        content: "Uma tela vazia, pronta para receber o próximo conteúdo.",
      },
    ],
  }),
  component: BlankPage,
});

function BlankPage() {
  return <div className="min-h-screen bg-background" aria-label="Página em branco" />;
}
