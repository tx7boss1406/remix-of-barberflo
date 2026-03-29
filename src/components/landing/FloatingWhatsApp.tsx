import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5511942498881?text=Quero%20um%20app%20personalizado%20pra%20minha%20barbearia";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.32 22.616c-.39 1.1-1.932 2.014-3.162 2.28-.842.18-1.94.324-5.636-1.212-4.726-1.964-7.77-6.756-8.006-7.07-.226-.314-1.898-2.53-1.898-4.826s1.2-3.424 1.628-3.892c.39-.426.918-.618 1.228-.618.15 0 .284.008.406.014.428.018.642.044.924.714.354.84 1.214 2.962 1.32 3.178.108.216.216.508.068.806-.14.304-.264.44-.48.684-.216.246-.422.434-.638.7-.198.234-.42.484-.18.912.24.428 1.068 1.762 2.294 2.854 1.578 1.404 2.908 1.838 3.32 2.04.314.152.688.128.936-.132.314-.336.702-.892 1.098-1.44.282-.39.638-.44.982-.296.35.138 2.216 1.046 2.596 1.236.38.192.632.284.726.446.09.162.09.936-.3 2.036z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
