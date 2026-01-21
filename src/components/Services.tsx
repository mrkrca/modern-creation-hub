import { Button } from "@/components/ui/button";
import serviceExcavation from "@/assets/service-excavation.jpg";
import serviceAsphalt from "@/assets/service-asphalt.jpg";
import serviceTerrain from "@/assets/service-terrain.jpg";

const services = [
  {
    title: "Sve vrste iskopa",
    description: "Profesionalni iskopni radovi za sve tipove terena i projekte.",
    image: serviceExcavation,
  },
  {
    title: "Asfaltiranje",
    description: "Kvalitetno asfaltiranje puteva, parkinga i dvorišta.",
    image: serviceAsphalt,
  },
  {
    title: "Razni zemljani radovi",
    description: "Nasipi, priprema terena i dr. zemljani radovi.",
    image: serviceTerrain,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase">
          <span className="text-primary">Naše</span> Usluge
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button variant="default" size="sm">
                  Više Informacija
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
