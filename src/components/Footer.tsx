import { forwardRef } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 uppercase">Centrokop Trans</h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <p>Željko Dabić</p>
              <p className="hidden md:block">Potkozarska 35.</p>
              <p>Laktaši</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 uppercase">Kontakt</h3>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <a
                href="tel:+38765566945"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden md:inline">+387 65 566 945</span>
                <span className="md:hidden">065 566 945</span>
              </a>
              <a
                href="tel:+38766444413"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden md:inline">+387 66 444 413</span>
                <span className="md:hidden">066 444 413</span>
              </a>
              <a
                href="mailto:centrokoptrans@gmail.com"
                className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                centrokoptrans@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="font-bold text-lg mb-4 uppercase">Brze Poveznice</h3>
            <div className="space-y-2 text-sm">
              {["Početna", "O nama", "Usluge", "Kontakt"].map(
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
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 uppercase">Pratite Nas</h3>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Centrokop Trans. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
