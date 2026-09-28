import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import selectArrow from "@/assets/lp/select-arrow.svg";

type LeadModalCtx = { open: () => void };
const Ctx = createContext<LeadModalCtx>({ open: () => {} });
export const useLeadModal = () => useContext(Ctx);

const MODALIDADES = [
  "Idiomas",
  "Música ou canto",
  "Dança ou ballet",
  "Artes marciais (judô, jiu-jitsu, karatê, muay thai…)",
  "Natação",
  "Futebol, vôlei ou beach tennis",
  "Academia, CrossFit, pilates ou yoga",
  "Reforço escolar ou cursos técnicos",
  "Teatro",
  "Outra modalidade",
];

const FAIXAS_ALUNOS = ["Até 50", "51 a 100", "101 a 200", "+ de 200"];

export type Lead = { nome: string; whatsapp: string; modalidade: string; alunos: string };

/**
 * Destino dos leads. Defina VITE_LEAD_WEBHOOK_URL (ex.: webhook do CRM, Zapier/Make ou
 * uma função do Supabase). Sem ela, o lead NÃO é salvo em lugar nenhum.
 */
async function enviarLead(lead: Lead) {
  const url = import.meta.env["VITE_LEAD_WEBHOOK_URL"] as string | undefined;
  if (!url) {
    console.warn("[Minha Aula] VITE_LEAD_WEBHOOK_URL não configurada — lead não enviado:", lead);
    return;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, origem: "lp-minha-aula", enviadoEm: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`);
}

const mascaraWhats = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const inputCls =
  "mt-2 h-[52px] w-full rounded-[12px] border-[1.5px] border-[#D3DBF2] bg-[#F5F8FF] px-4 text-base text-ma-navy outline-none transition placeholder:text-[#757575] focus:border-ma-blue focus:bg-white";

function LeadForm({ onClose }: { onClose: () => void }) {
  const [lead, setLead] = useState<Lead>({
    nome: "",
    whatsapp: "",
    modalidade: MODALIDADES[0] ?? "",
    alunos: "",
  });
  const [erro, setErro] = useState("");
  const [status, setStatus] = useState<"idle" | "enviando" | "ok">("idle");
  const nomeRef = useRef<HTMLInputElement>(null);

  useEffect(() => nomeRef.current?.focus(), []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (lead.nome.trim().length < 2) return setErro("Digite seu nome.");
    if (lead.whatsapp.replace(/\D/g, "").length < 10) return setErro("Digite um WhatsApp com DDD.");
    if (!lead.alunos) return setErro("Escolha quantos alunos ativos você tem hoje.");
    setErro("");
    setStatus("enviando");
    try {
      await enviarLead({ ...lead, nome: lead.nome.trim() });
      setStatus("ok");
    } catch {
      setStatus("idle");
      setErro("Não conseguimos enviar agora. Tente de novo em instantes.");
    }
  };

  if (status === "ok") {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <p className="text-[28px] font-bold leading-[1.2] tracking-[-0.8px] text-ma-navy">
          Recebemos seus dados!
        </p>
        <p className="text-base leading-[1.45] text-[#4B5578]">
          Em breve a equipe do Minha Aula chama você no WhatsApp {lead.whatsapp} para liberar o
          teste da sua escola.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 h-[52px] rounded-full bg-ma-navy px-8 text-sm font-extrabold uppercase tracking-[1px] text-white"
        >
          Fechar
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <div>
        <h2
          id="lead-title"
          className="pr-8 text-[24px] font-bold leading-[1.21] tracking-[-0.8px] text-ma-navy sm:text-[28px]"
        >
          Teste o Minha Aula na sua escola
        </h2>
        <p className="mt-1 text-base leading-[1.45] text-[#4B5578]">
          Cadastro grátis. 4 perguntas rápidas.
        </p>
      </div>

      <label className="block text-[15px] font-semibold text-ma-navy">
        Seu nome
        <input
          ref={nomeRef}
          className={inputCls}
          placeholder="Como podemos te chamar?"
          autoComplete="name"
          value={lead.nome}
          onChange={(e) => setLead({ ...lead, nome: e.target.value })}
        />
      </label>

      <label className="block text-[15px] font-semibold text-ma-navy">
        WhatsApp
        <input
          className={inputCls}
          type="tel"
          inputMode="numeric"
          placeholder="(00) 00000-0000"
          autoComplete="tel-national"
          value={lead.whatsapp}
          onChange={(e) => setLead({ ...lead, whatsapp: mascaraWhats(e.target.value) })}
        />
      </label>

      <label className="block text-[15px] font-semibold text-ma-navy">
        O que sua escola ensina?
        <span className="relative block">
          <select
            className={`${inputCls} appearance-none pl-[14px] pr-10`}
            value={lead.modalidade}
            onChange={(e) => setLead({ ...lead, modalidade: e.target.value })}
          >
            {MODALIDADES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <img
            src={selectArrow}
            alt=""
            width={12}
            height={12}
            className="pointer-events-none absolute right-[19px] top-[calc(50%+4px)] -translate-y-1/2"
          />
        </span>
      </label>

      <fieldset>
        <legend className="text-[15px] font-semibold text-ma-navy">
          Quantos alunos ativos você tem hoje?
        </legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {FAIXAS_ALUNOS.map((f) => {
            const ativo = lead.alunos === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={ativo}
                onClick={() => setLead({ ...lead, alunos: f })}
                className={`h-12 rounded-[12px] border-[1.5px] px-1 text-[13px] font-bold transition sm:text-[15px] ${
                  ativo
                    ? "border-ma-navy bg-ma-navy text-white"
                    : "border-[#D3DBF2] bg-white text-ma-navy hover:border-ma-blue"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </fieldset>

      {erro && (
        <p role="alert" className="-mb-1 text-sm font-semibold text-[#B03522]">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "enviando"}
        className="h-[60px] rounded-full bg-ma-cyan text-base font-extrabold uppercase tracking-[1px] text-ma-navy transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "enviando" ? "Enviando…" : "Quero testar agora →"}
      </button>
    </form>
  );
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const open = useCallback(() => setAberto(true), []);
  const close = useCallback(() => setAberto(false), []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {aberto && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-[#071033]/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-title"
            className="relative w-full max-w-[480px] rounded-t-[24px] bg-white p-6 shadow-[0_0_0_1px_rgba(95,212,245,0.4),0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[24px] sm:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#4B5578] hover:bg-[#F5F8FF] sm:right-5 sm:top-5"
            >
              ×
            </button>
            <LeadForm onClose={close} />
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
