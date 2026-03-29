import { motion } from "framer-motion";
import { TrendingUp, CalendarCheck2, Wallet2, RefreshCcw, Trophy, LayoutGrid } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Mais clientes", desc: "Sistema de indicação que traz novos clientes automaticamente." },
  { icon: CalendarCheck2, title: "Agenda organizada", desc: "Chega de bagunça. Tudo online, automático e sem erros." },
  { icon: Wallet2, title: "Receita previsível", desc: "Saiba quanto vai faturar antes do mês acabar." },
  { icon: RefreshCcw, title: "Fidelização automática", desc: "Programa de pontos que faz o cliente voltar sempre." },
  { icon: Trophy, title: "Marca valorizada", desc: "Seu app, sua identidade. Profissionalismo que impressiona." },
  { icon: LayoutGrid, title: "Controle total", desc: "Dashboard completo com tudo que você precisa saber." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-gradient-section">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            O que muda na sua barbearia{" "}
            <span className="text-gradient-gold">com o sistema</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center p-8 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-[0_0_40px_hsl(38_92%_55%/0.06)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
