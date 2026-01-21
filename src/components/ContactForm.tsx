import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Upit poslan!",
        description: "Hvala na interesovanju. Kontaktiraćemo Vas uskoro.",
      });
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Greška",
        description: "Došlo je do greške. Molimo pokušajte ponovo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">
            <span className="text-primary">Pošaljite</span> Nam Upit
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Kontaktirajte nas za više informacija o našim uslugama (iskopi,
            asfaltiranje priprema terena, prevoz, zemljani radovi).
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase">
                Ime i Prezime:
              </label>
              <Input
                placeholder="Unesite vaše ime i prezime"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-card border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase">
                Email:
              </label>
              <Input
                type="email"
                placeholder="Unesite vašu email adresu"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-card border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase">
                Vrsta Usluge:
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Odaberite uslugu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iskop">Iskop</SelectItem>
                  <SelectItem value="asfaltiranje">Asfaltiranje</SelectItem>
                  <SelectItem value="prevoz">Prevoz</SelectItem>
                  <SelectItem value="zemljani">Zemljani radovi</SelectItem>
                  <SelectItem value="ostalo">Ostalo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase">
                Dodatne Informacije / Poruka:
              </label>
              <Textarea
                placeholder="Opis vašeg upita, lokacija, detalji o projektu..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-card border-border resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Šaljem..." : "Pošaljite Upit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
