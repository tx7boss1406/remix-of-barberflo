import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";

interface PreQualFormModalProps {
  open: boolean;
  onClose: () => void;
}

const schedulingOptions = [
  "WhatsApp",
  "Ordem de chegada",
  "Agenda de papel",
  "Outro",
];

const PreQualFormModal = ({ open, onClose }: PreQualFormModalProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [clients, setClients] = useState("");
  const [scheduling, setScheduling] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no app para minha barbearia.\n\n` +
      `🏪 Barbearia: ${name}\n` +
      `📍 Cidade: ${city}\n` +
      `👥 Clientes/dia: ${clients}\n` +
      `📋 Agenda atual: ${scheduling}\n\n` +
      `Já preenchi o formulário no site.`
    );
    window.open(`https://wa.me/5511942498881?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-surface-1 border border-gold p-6 md:p-8 glow-gold relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Quase lá! 🔥
              </h3>
              <p className="text-muted-foreground text-sm">
                Preencha rapidinho para a gente personalizar sua conversa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Nome da barbearia
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Barber Club"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Cidade
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: São Paulo - SP"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Quantos clientes atende por dia?
                </label>
                <input
                  type="text"
                  required
                  maxLength={20}
                  value={clients}
                  onChange={(e) => setClients(e.target.value)}
                  placeholder="Ex: 15"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Como agenda hoje?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {schedulingOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setScheduling(opt)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                        scheduling === opt
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-surface-2 text-muted-foreground border-border hover:border-primary/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!name || !city || !clients || !scheduling}
                className="w-full mt-2 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base animate-pulse-glow hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:animate-none"
              >
                <MessageCircle size={20} />
                Enviar e falar no WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Sem compromisso • Resposta rápida • Você só paga se gostar
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreQualFormModal;
