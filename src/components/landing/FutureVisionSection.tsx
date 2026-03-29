import { motion } from "framer-motion";
import { CalendarCheck2, RefreshCcw, Wallet2, Briefcase } from "lucide-react";

const items = [
  { icon: CalendarCheck2, text: "Agenda cheia todos os dias" },
  { icon: RefreshCcw, text: "Clientes retornando automaticamente" },
  { icon: Wallet2, text: "Receita previsível todo mês" },
  { icon: Briefcase, text: "Negócio organizado e profissional" },
];

const FutureVisionSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            O futuro da sua barbearia
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-10">
            Imagine sua barbearia{" "}
            <span className="text-gradient-gold">funcionando assim:</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-primary/15 hover:border-primary/30 transition-all duration-300 text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} strokeWidth={1.5} />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
