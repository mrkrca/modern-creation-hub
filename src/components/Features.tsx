import { Settings, Lightbulb, Clock } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Visok Standard",
    description:
      "Naša posvećenost kvalitetu i pažnji prema detaljima omogućava nam da pružimo izuzetne usluge u oblastima niskogradnje, sa posebnim fokusom na sigurnost, preciznost i efikasnost.",
  },
  {
    icon: Lightbulb,
    title: "Kreativna Rješenja",
    description:
      "Uvijek se trudimo da pronađemo inovativna i efikasna rješenja za Vaše potrebe. Pružamo podršku i savjete tokom cijelog procesa, od početne faze do završetka projekta.",
  },
  {
    icon: Clock,
    title: "Brza Realizacija",
    description:
      "Naša sposobnost da brzo i efikasno realizujemo projekte omogućava našim klijentima da dobiju rezultate u najkraćem mogućem roku, bez kompromisa u kvalitetu.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase text-primary-foreground">
          Centrokop Trans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
