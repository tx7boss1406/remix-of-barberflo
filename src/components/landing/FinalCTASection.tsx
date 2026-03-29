import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Eye, BarChart2 } from "lucide-react";
import PreQualFormModal from "./PreQualFormModal";

const WHATSAPP_ANALYSIS =
  "https://wa.me/5511942498881?text=Quero%20uma%20an%C3%A1lise%20gratuita%20da%20minha%20barbearia";

const FinalCTASection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Se você quer parar de{" "}
              <span className="text-gradient-gold">perder dinheiro</span> todos os
              dias, esse é o próximo passo.
            </h2>

            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Clique no botão, preencha seus dados e descubra como ter o app da
              sua barbearia pronto em poucos dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                <MessageCircle size={22} />
                Quero meu app personalizado
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-2/80 backdrop-blur-sm border border-primary/20 text-foreground font-semibold hover:bg-surface-3 transition-all duration-300"
              >
                <Eye size={18} className="text-primary" strokeWidth={1.5} />
                Quero ver como ficaria meu app
              </button>
              <a
                href={WHATSAPP_ANALYSIS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-2/80 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-surface-3 transition-all duration-300"
              >
                <BarChart2 size={18} className="text-primary" strokeWidth={1.5} />
                Quero análise gratuita da minha barbearia
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Sem compromisso • Resposta rápida • Você só paga se gostar
            </p>
          </motion.div>
        </div>
      </section>

      <PreQualFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default FinalCTASection;
