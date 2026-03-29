import { motion } from "framer-motion";
import { TrendingDown, TriangleAlert } from "lucide-react";

const LossSimulatorSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-destructive font-semibold text-sm tracking-widest uppercase mb-4 block">
            Faça as contas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Quanto você{" "}
            <span className="text-gradient-gold">perde por mês</span> sem
            perceber?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-destructive/20 p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-2xl bg-surface-2/80 backdrop-blur-sm border border-border">
              <p className="text-muted-foreground text-sm mb-2">
                Horários vazios por dia
              </p>
              <p className="font-display text-4xl font-bold text-destructive">
                2
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-surface-2/80 backdrop-blur-sm border border-border">
              <p className="text-muted-foreground text-sm mb-2">
                Ticket médio
              </p>
              <p className="font-display text-4xl font-bold text-foreground">
                R$30
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-surface-2/80 backdrop-blur-sm border border-border">
              <p className="text-muted-foreground text-sm mb-2">
                Perda mensal estimada
              </p>
              <p className="font-display text-4xl font-bold text-destructive">
                R$1.800
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
              <TriangleAlert size={16} strokeWidth={1.5} />
              Isso é R$21.600 por ano jogados fora
            </div>
            <p className="text-muted-foreground text-lg">
              Agora imagine isso ao longo de{" "}
              <span className="text-foreground font-semibold">um ano inteiro.</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <TrendingDown size={18} className="text-destructive" strokeWidth={1.5} />
              <span className="text-sm">
                E isso sem contar os clientes que nunca mais voltaram.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LossSimulatorSection;
