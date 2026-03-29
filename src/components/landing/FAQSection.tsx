import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar antes de ver o app?",
    a: "Não. Nós desenvolvemos o app completo e você só paga depois de ver tudo pronto e aprovado. Zero risco.",
  },
  {
    q: "O app é realmente personalizado?",
    a: "Sim. Cada app é criado do zero com o nome, logo, cores e identidade da sua barbearia. Não é genérico.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O app funciona perfeitamente em qualquer smartphone, tanto Android quanto iPhone.",
  },
  {
    q: "Meus clientes conseguem usar fácil?",
    a: "Com certeza. A interface é simples e intuitiva. Seus clientes agendam em poucos toques.",
  },
  {
    q: "Tem mensalidade?",
    a: "Consulte as condições durante a conversa no WhatsApp. Temos planos flexíveis para cada realidade.",
  },
  {
    q: "Quanto tempo demora para ficar pronto?",
    a: "Em média, seu app fica pronto entre 5 a 10 dias úteis após a conversa inicial.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Você não paga nada. Simples assim. Desenvolvemos, mostramos, e você decide se quer ou não.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-section">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Perguntas <span className="text-gradient-gold">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl bg-surface-1 border border-border px-6 data-[state=open]:border-gold transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
