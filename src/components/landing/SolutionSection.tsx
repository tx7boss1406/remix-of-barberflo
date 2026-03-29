import { motion } from "framer-motion";
import { Smartphone, BarChart2, BellRing, Heart, BotMessageSquare, SlidersHorizontal } from "lucide-react";

const features = [
  { icon: Smartphone, title: "App exclusivo com sua marca", desc: "Seu aplicativo com o nome e a identidade visual da sua barbearia. Seus clientes vão baixar o SEU app." },
  { icon: BarChart2, title: "Gestão financeira completa", desc: "Saiba exatamente quanto você fatura por dia, semana e mês. Controle total na palma da mão." },
  { icon: BellRing, title: "Notificações automáticas", desc: "Seus clientes recebem lembretes automáticos. Chega de no-show e horários perdidos." },
  { icon: Heart, title: "Programa de fidelidade", desc: "Clientes ganham pontos a cada corte e voltam mais. Fidelização no automático." },
  { icon: BotMessageSquare, title: "Agente de IA integrado", desc: "Responde dúvidas, sugere horários e ajuda seus clientes 24 horas por dia." },
  { icon: SlidersHorizontal, title: "Painel administrativo", desc: "Tudo em um só lugar: agenda, finanças, clientes, relatórios e automações." },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 md:py-32 bg-gradient-section">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            A solução
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Tudo que sua barbearia precisa.{" "}
            <span className="text-gradient-gold">Em um só sistema.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não é um app genérico. É um sistema completo, personalizado e construído
            para fazer sua barbearia crescer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-[0_0_40px_hsl(38_92%_55%/0.06)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
