const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase">
          <span className="text-primary">Centrokop</span> Trans
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-lg text-primary leading-relaxed">
            Mi smo firma specijalizovana za usluge u oblastima niskogradnje, uključujući sve vrste
            iskopa, asfaltiranje i sve ostale zemljane radove. Sa dugogodišnjim iskustvom, pružamo
            efikasna i sigurna rješenja koja u potpunosti zadovoljavaju potrebe naših klijenata.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Naša misija je da obezbedimo vrhunske usluge u oblastima niskogradnje, primjenom
            najnovijih tehnologija i metoda, uz poseban fokus na kvalitet, preciznost i sigurnost.
            Posvećeni smo stalnom unapređenju i razvoju, kako bismo doprinosili održivom razvoju
            infrastrukture i kontinuiranom zadovoljstvu naših klijenata širom svih regiona.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Sa iskustvom koje imamo u sektoru niskogradnje, pružamo sveobuhvatna rješenja koja
            su osmišljena da zadovolje specifične zahtjeve svakog klijenta. Naša sposobnost da se
            prilagodimo različitim tipovima terena i projektima omogućava nam da uvijek
            postignemo optimalne rezultate, bilo da se radi o asfaltiranju, iskopima ili ostalim
            zemljanim radovima.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
