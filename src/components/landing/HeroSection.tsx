import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Play, Users } from "lucide-react";
import PreQualFormModal from "./PreQualFormModal";

const DEMO_URL = "https://barberclubslz.vercel.app";

const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-gold mb-8 text-sm text-muted-foreground"
          >
            <Users size={14} className="text-primary" />
            Sistema já aplicado em barbearias reais
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Você está perdendo clientes{" "}
            <span className="text-gradient-gold">todos os dias</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
              e nem percebe.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Sem sistema, você perde clientes no automático.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg animate-pulse-glow hover:brightness-110 transition-all duration-200"
            >
              <MessageCircle size={22} />
              Quero parar de perder clientes
            </button>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-surface-2 border border-border text-foreground font-semibold text-lg hover:bg-surface-3 transition-all duration-200"
            >
              <Play size={20} />
              Ver demonstração
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            ⚡ Sem compromisso • Resposta rápida • Você só paga se gostar
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <PreQualFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default HeroSection;
