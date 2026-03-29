import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const others = [
  "App genérico com a marca deles",
  "Apenas agendamento básico",
  "Sem personalização real",
  "Suporte padronizado",
  "Cliente esquece que existe",
  "Igual para todo mundo",
];

const ours = [
  "App exclusivo com SUA marca",
  "Sistema completo de gestão",
  "100% personalizado",
  "Atendimento dedicado",
  "Notificações automáticas",
  "Único no mercado",
];

const ComparisonSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Diferencial
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Por que o BarberPro é{" "}
            <span className="text-gradient-gold">diferente?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border"
          >
            <h3 className="font-display font-semibold text-muted-foreground mb-6 text-lg">
              Outros sistemas
            </h3>
            <ul className="space-y-4">
              {others.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X size={18} className="text-destructive mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-primary/30 shadow-[0_0_60px_hsl(38_92%_55%/0.08)]"
          >
            <h3 className="font-display font-semibold text-gradient-gold mb-6 text-lg">
              BarberPro
            </h3>
            <ul className="space-y-4">
              {ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
