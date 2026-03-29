import { motion } from "framer-motion";
import { CalendarX2, Ban, PiggyBank, Timer, UserX, MessageSquareOff } from "lucide-react";

const problems = [
  { icon: CalendarX2, title: "Agenda bagunçada", desc: "Clientes marcam e desmarcam pelo WhatsApp. Você perde o controle." },
  { icon: Timer, title: "Horários vazios", desc: "Clientes esquecem o horário e você fica parado esperando." },
  { icon: PiggyBank, title: "Sem controle financeiro", desc: "Não sabe quanto faturou ontem. Muito menos no mês." },
  { icon: Ban, title: "Ordem de chegada", desc: "Fila desorganizada, cliente irritado, tempo perdido." },
  { icon: UserX, title: "Clientes não voltam", desc: "Sem sistema de fidelização, o cliente vai no concorrente." },
  { icon: MessageSquareOff, title: "WhatsApp caótico", desc: "Mensagens perdidas, confirmações manuais, retrabalho." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-destructive font-semibold text-sm tracking-widest uppercase mb-4 block">
            O problema
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Você reconhece alguma dessas{" "}
            <span className="text-gradient-gold">situações?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você é barbeiro, provavelmente vive pelo menos 3 desses problemas
            toda semana.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="p-6 rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-border hover:border-destructive/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                <p.icon className="text-destructive" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
