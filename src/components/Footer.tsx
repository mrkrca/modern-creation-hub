import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Centrokop Trans</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Željko Dabić</p>
              <p>Potkozarska 35.</p>
              <p>Laktaši</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+38765566945"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +387 65 566 945
              </a>
              <a
                href="tel:+38766444413"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +387 66 444 413
              </a>
              <a
                href="tel:+38751530282"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +387 51 530 282
              </a>
              <a
                href="mailto:centrokoptrans@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                centrokoptrans@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Brze Poveznice</h3>
            <div className="space-y-2 text-sm">
              {["Početna", "O nama", "Usluge", "Galerija", "Statistika", "Kontakt"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Pratite Nas</h3>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Centrokop Trans. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
