import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, Check, Lock, Handshake, Sparkles } from "lucide-react";
import PreQualFormModal from "./PreQualFormModal";

const guarantees = [
  { icon: Lock, label: "Sem risco" },
  { icon: Handshake, label: "Sem compromisso" },
  { icon: Sparkles, label: "100% personalizado" },
];

const GuaranteeSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-radial opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <ShieldCheck className="text-primary" size={36} />
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Você{" "}
              <span className="text-gradient-gold">só paga se gostar</span>{" "}
              do resultado.
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Eu desenvolvo seu aplicativo completo, com a identidade da sua barbearia.{" "}
              <span className="text-foreground font-semibold">
                Você vê funcionando, testa tudo e só paga se fizer sentido pra você.
              </span>
            </p>

            {/* 3 guarantee pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {guarantees.map((g) => (
                <motion.div
                  key={g.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-surface-1/80 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold"
                >
                  <g.icon size={16} />
                  {g.label}
                </motion.div>
              ))}
            </div>

            {/* Safety phrase */}
            <p className="text-muted-foreground text-base mb-10 italic">
              "Se não fizer sentido pra você, simplesmente não seguimos."
            </p>

            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              <MessageCircle size={20} />
              Quero ver como ficaria meu app
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Sem compromisso • Resposta rápida no WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      <PreQualFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default GuaranteeSection;
