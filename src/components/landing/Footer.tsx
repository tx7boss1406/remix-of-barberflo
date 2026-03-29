const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center">
        <p className="font-display font-bold text-foreground mb-2">
          Barber<span className="text-gradient-gold">Pro</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BarberPro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
