import { motion } from "framer-motion";
import { Send, Headphones, Layers, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Send,
    num: "01",
    title: "Você me chama no WhatsApp",
    desc: "Uma conversa rápida e sem pressão.",
  },
  {
    icon: Headphones,
    num: "02",
    title: "Eu entendo sua barbearia e seus objetivos",
    desc: "Analiso sua realidade para criar algo que faça sentido.",
  },
  {
    icon: Layers,
    num: "03",
    title: "Mostro como ficaria seu aplicativo personalizado",
    desc: "Você vê tudo pronto antes de tomar qualquer decisão.",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "Você decide se quer seguir ou não",
    desc: "Sem pressão, sem obrigação, sem custo.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Transparência total
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            O que acontece{" "}
            <span className="text-gradient-gold">depois que você clicar?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 md:p-8 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="absolute top-5 right-6 font-display text-4xl font-bold text-border/60 group-hover:text-primary/15 transition-colors duration-300">
                {step.num}
              </span>
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="text-primary" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 pr-10">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-muted-foreground text-lg"
        >
          Simples, rápido e{" "}
          <span className="text-foreground font-semibold">sem pressão.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
