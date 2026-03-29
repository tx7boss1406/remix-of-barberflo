import { motion } from "framer-motion";
import { Clock, Users, TriangleAlert } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-surface-1/80 backdrop-blur-sm border border-primary/20 p-8 md:p-10 text-center"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap mb-6">
            <div className="flex items-center gap-2 text-primary">
              <Clock size={18} strokeWidth={1.5} />
              <span className="text-sm font-semibold">Oferta por tempo limitado</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Users size={18} strokeWidth={1.5} />
              <span className="text-sm font-semibold">Máximo 5 barbearias por mês</span>
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Como o desenvolvimento é personalizado,{" "}
            <span className="text-foreground font-semibold">
              consigo atender no máximo 5 barbearias por mês.
            </span>
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
            <TriangleAlert size={14} strokeWidth={1.5} />
            Se essa página está no ar, ainda tem vaga.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
