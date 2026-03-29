import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Costa",
    role: "Barbearia do Rafa • SP",
    text: "Depois do app, minha agenda nunca mais ficou vazia. Os clientes agendam sozinhos e eu foco no que importa: cortar cabelo.",
  },
  {
    name: "Lucas Mendes",
    role: "Black Barber Studio • RJ",
    text: "Hoje eu sei exatamente quanto ganho por mês. Antes era tudo no achismo. O painel financeiro mudou meu negócio.",
  },
  {
    name: "Diego Oliveira",
    role: "Barber Club • MA",
    text: "Meus clientes voltam automaticamente por causa do programa de fidelidade. Nem preciso mandar mensagem mais.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-section">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Quem usa, <span className="text-gradient-gold">recomenda</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
