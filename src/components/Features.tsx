import { Settings, Lightbulb, Clock } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Visok Standard",
    description: "Kvalitet i pažnja prema detaljima u svakom projektu.",
    descriptionFull:
      "Naša posvećenost kvalitetu i pažnji prema detaljima omogućava nam da pružimo izuzetne usluge u oblastima niskogradnje, sa posebnim fokusom na sigurnost, preciznost i efikasnost.",
  },
  {
    icon: Lightbulb,
    title: "Kreativna Rješenja",
    description: "Inovativna rješenja prilagođena Vašim potrebama.",
    descriptionFull:
      "Uvijek se trudimo da pronađemo inovativna i efikasna rješenja za Vaše potrebe. Pružamo podršku i savjete tokom cijelog procesa, od početne faze do završetka projekta.",
  },
  {
    icon: Clock,
    title: "Brza Realizacija",
    description: "Efikasni projekti u najkraćem mogućem roku.",
    descriptionFull:
      "Naša sposobnost da brzo i efikasno realizujemo projekte omogućava našim klijentima da dobiju rezultate u najkraćem mogućem roku, bez kompromisa u kvalitetu.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 uppercase text-primary-foreground">
          Centrokop Trans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 text-center border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="md:hidden">{feature.description}</span>
                <span className="hidden md:inline">{feature.descriptionFull}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
