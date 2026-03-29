import { useState } from "react";
import { motion } from "framer-motion";
import { Play, MessageCircle, ExternalLink, VolumeX } from "lucide-react";
import PreQualFormModal from "./PreQualFormModal";
import vslThumbnail from "@/assets/vsl-thumbnail.png";

const DEMO_URL = "https://barberclubslz.vercel.app";

const VideoSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleFakePlay = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <>
      <section className="py-20 md:py-28 relative">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </div>

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Demonstração
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Veja isso{" "}
              <span className="text-gradient-gold">antes de sair dessa página</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Descubra por que barbearias estão adotando aplicativos próprios
              para crescer e fidelizar clientes.
            </p>
          </motion.div>

          {/* VSL Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={handleFakePlay}
            className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              boxShadow:
                "0 0 0 1px hsl(var(--border) / 0.4), 0 25px 60px -12px rgba(0,0,0,0.5), 0 0 40px -8px hsl(var(--primary) / 0.06)",
            }}
          >
            {/* Background image with blur & zoom */}
            <img
              src={vslThumbnail}
              alt="Demonstração do sistema BarberClub"
              className="absolute inset-0 w-full h-full object-cover scale-[1.05] transition-all duration-700 group-hover:scale-[1.09]"
              style={{ filter: "blur(1.5px) contrast(1.05) saturate(1.1) brightness(0.85)" }}
            />

            {/* Gradient overlay — vignette with lighter center */}
            <div
              className="absolute inset-0"
              style={{
                background: [
                  "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.20) 65%, rgba(0,0,0,0.55) 100%)",
                  "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(0,0,0,0.3) 100%)",
                ].join(", "),
              }}
            />

            {/* Subtle ambient glow on edges */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse 120% 80% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%), radial-gradient(ellipse 120% 80% at 50% 100%, hsl(var(--primary) / 0.05) 0%, transparent 60%)",
              }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* ===== CONTENT ===== */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {/* Play button — dead center */}
              <motion.div
                animate={clicked ? { scale: [1, 0.9, 1.06, 1] } : {}}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(var(--primary) / 0.2)",
                      "0 0 0 16px hsl(var(--primary) / 0)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow:
                      "0 0 20px 3px hsl(var(--primary) / 0.12), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  <Play
                    className="text-white ml-0.5"
                    size={20}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* ===== VIDEO UI ELEMENTS ===== */}

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
              <div className="h-full w-[12%] bg-primary/80 rounded-r-full" />
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/[0.08] text-white/90 text-[11px] font-medium tracking-wide">
              1:12
            </div>

            {/* Mute icon */}
            <div className="absolute top-3 right-3 z-20 p-1.5 rounded-md bg-black/40 backdrop-blur-md border border-white/[0.06]">
              <VolumeX size={14} className="text-white/60" />
            </div>

            {/* Live badge */}
            <div className="absolute top-3 left-3 z-20">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] text-white/80 font-medium tracking-wide">
                  AO VIVO
                </span>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-3 left-3 z-20">
              <span className="text-[11px] text-white/50 font-medium tracking-wide">
                Demonstração real do sistema
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/15"
            >
              <MessageCircle size={18} />
              Quero um app pra minha barbearia
            </button>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] text-foreground font-semibold text-sm hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
            >
              <ExternalLink size={18} className="text-primary" />
              Ver aplicativo funcionando
            </a>
          </motion.div>
          <p className="text-center mt-3 text-xs text-muted-foreground/70 tracking-wide">
            Sem compromisso · Você só paga se gostar
          </p>
        </div>
      </section>

      <PreQualFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default VideoSection;
