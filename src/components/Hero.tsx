import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPopover from "@/components/ContactPopover";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6 animate-fade-in">
            <span className="text-primary">Iskop</span> Prevoz
            <br />
            <span className="text-primary">Asfaltiranje</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Efikasna rješenja za svaki teren. Profesionalne usluge iskopa, transporta i asfaltiranja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <ContactPopover>
              <Button size="lg" className="gap-2 text-base font-semibold">
                <Phone className="w-5 h-5" />
                Kontakt
              </Button>
            </ContactPopover>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToContact}
            >
              <Send className="w-5 h-5" />
              Pošaljite Upit
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
