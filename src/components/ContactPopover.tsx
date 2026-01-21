import { Phone } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const phoneNumbers = [
  { label: "Željko", number: "+387 65 566 945", href: "tel:+38765566945" },
  { label: "Alternativni", number: "+387 66 444 413", href: "tel:+38766444413" },
  { label: "Fiksni", number: "+387 51 530 282", href: "tel:+38751530282" },
];

interface ContactPopoverProps {
  children: React.ReactNode;
}

const ContactPopover = ({ children }: ContactPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-72 p-4" align="center">
        <div className="space-y-3">
          <h4 className="font-bold text-center text-foreground mb-4">Pozovite nas</h4>
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={phone.href}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                  {phone.label}
                </p>
                <p className="font-semibold">{phone.number}</p>
              </div>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopover;
