import { ClipboardCheck, Cog, Truck, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Konsultacije",
    description: "Analiziramo Vaše potrebe.",
    descriptionFull:
      "Razgovaramo sa klijentima i analiziramo njihove potrebe kako bismo pronašli najbolje rješenje.",
  },
  {
    icon: Cog,
    title: "2. Planiranje",
    description: "Detaljan plan i vremenski okvir.",
    descriptionFull:
      "Pravimo detaljan plan i vremenski okvir kako bi svaki korak bio jasan i efikasan.",
  },
  {
    icon: Truck,
    title: "3. Izvođenje",
    description: "Precizni radovi uz modernu opremu.",
    descriptionFull:
      "Korišćenjem laserskog nivelira, GPS tehnologije i specijalizovane mehanizacije, garantujemo preciznost i visok kvalitet.",
  },
  {
    icon: CheckCircle2,
    title: "4. Kontrola",
    description: "Provjera kvaliteta završnih radova.",
    descriptionFull:
      "Detaljno provjeravamo završene radove kako bismo osigurali da ispunjavaju najviše standarde.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="section-padding relative"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 uppercase">
          <span className="text-primary">Kako</span> Radimo?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 text-primary">{step.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                <span className="md:hidden">{step.description}</span>
                <span className="hidden md:inline">{step.descriptionFull}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
