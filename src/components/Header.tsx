import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPopover from "@/components/ContactPopover";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Početna", href: "#home" },
  { label: "O nama", href: "#about" },
  { label: "Usluge", href: "#services" },
  { label: "Statistika", href: "#stats" },
  { label: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Centrokop Trans" className="h-12 md:h-16 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ContactPopover>
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Kontakt
              </Button>
            </ContactPopover>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ContactPopover>
              <Button variant="default" size="sm" className="w-full mt-4 gap-2">
                <Phone className="w-4 h-4" />
                Kontakt
              </Button>
            </ContactPopover>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
