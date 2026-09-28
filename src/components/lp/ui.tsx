import type { ReactNode } from "react";
import { useLeadModal } from "./LeadModal";

type BadgeTone = "cyan" | "green" | "coral" | "navy";

const badgeTones: Record<BadgeTone, string> = {
  cyan: "bg-ma-cyan text-ma-navy",
  green: "bg-ma-green text-ma-navy",
  coral: "bg-ma-coral text-white",
  navy: "bg-ma-navy text-ma-cyan",
};

export const Badge = ({
  tone = "cyan",
  children,
  className = "",
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex min-h-[30px] items-center rounded-full px-[14px] py-[6px] text-center text-[11px] font-extrabold uppercase leading-[1.2] tracking-[1px] sm:text-[13px] sm:tracking-[1.2px] ${badgeTones[tone]} ${className}`}
  >
    {children}
  </span>
);

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0 ${className}`}>
    {children}
  </div>
);

/** Botão "Quero testar agora" — todos abrem o formulário */
export const CtaButton = ({
  className = "",
  children = "Quero testar agora →",
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { open } = useLeadModal();
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-full bg-ma-cyan font-extrabold uppercase text-ma-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ma-cyan ${className}`}
    >
      {children}
    </button>
  );
};
