import { motion } from "framer-motion";

const BeliefBreakSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Não é culpa sua. Você aprendeu a cortar cabelo, não a gerenciar um negócio digital.
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Você não precisa trabalhar mais.
            <br />
            <span className="text-gradient-gold">
              Precisa de um sistema que trabalhe por você.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefBreakSection;
