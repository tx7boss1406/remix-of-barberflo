import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, ShieldCheck, Zap } from "lucide-react";
import PreQualFormModal from "./PreQualFormModal";

const included = [
  "App exclusivo com sua marca",
  "Sistema de agendamento inteligente",
  "Gestão financeira completa",
  "Notificações automáticas",
  "Programa de fidelidade",
  "Sistema de indicação",
  "Agente de IA integrado",
  "Painel administrativo completo",
  "Suporte dedicado",
];

const PricingSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Investimento
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Transforme sua barbearia por{" "}
              <span className="text-gradient-gold">menos que um corte por dia</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              Desenvolver um aplicativo personalizado normalmente custa entre{" "}
              <span className="text-foreground font-semibold">R$3.000 e R$8.000</span>.
            </p>
            <p className="text-primary font-semibold text-lg md:text-xl">
              Hoje por R$299 <span className="text-muted-foreground font-normal text-sm">(valor promocional)</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-primary/30 shadow-[0_0_80px_hsl(38_92%_55%/0.1)] p-8 md:p-12 text-center"
          >
            <div className="mb-6">
              <p className="text-muted-foreground text-lg line-through">R$ 899,90</p>
              <div className="flex items-baseline justify-center gap-1 mt-3">
                <span className="text-muted-foreground text-xl md:text-2xl font-medium">12x de</span>
                <span className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mx-1">
                  R$29
                </span>
                <span className="font-display text-2xl md:text-4xl font-bold text-gradient-gold">,99</span>
              </div>
              <p className="text-muted-foreground/70 text-base mt-2">ou R$299 à vista</p>
              <p className="text-muted-foreground text-sm mt-1">pagamento único • sem mensalidade</p>
              <p className="text-primary/80 text-sm font-medium mt-3">Menos que um corte por mês</p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Zap size={14} strokeWidth={1.5} />
              Um sistema assim poderia custar R$99/mês — mas você paga apenas uma vez
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
              <p className="text-sm font-semibold text-foreground mb-4">Tudo incluído:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={16} className="text-primary shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              <MessageCircle size={22} />
              Quero meu aplicativo agora
            </button>

            <div className="flex items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
              <ShieldCheck size={16} className="text-primary" strokeWidth={1.5} />
              Você só paga depois de ver o app pronto
            </div>

            <p className="text-sm text-muted-foreground/80 mt-4">
              Esse valor pode voltar ao normal a qualquer momento
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Estamos liberando essa condição para novas barbearias por tempo limitado
            </p>
          </motion.div>
        </div>
      </section>

      <PreQualFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default PricingSection;
