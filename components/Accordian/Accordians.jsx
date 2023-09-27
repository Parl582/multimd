import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordians = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:underline-0">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur consequuntur explicabo quas minus iste, dolor beatae facilis aspernatur, voluptatibus quibusdam repudiandae quos dolorem illo tempora error nobis nostrum eius?
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordians;
