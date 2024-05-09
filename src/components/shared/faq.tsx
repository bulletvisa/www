import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "Is it animated?",
    answer:
      "Yes, it's animated by default, but you can disable it if you prefer.",
  },
  {
    id: "2",
    question: "What file formats are supported?",
    answer:
      "We support a wide range of file formats including JPG, PNG, PDF, and more. If you have a specific format in mind, feel free to ask!",
  },
  {
    id: "3",
    question: "Can I customize the colors?",
    answer:
      "Absolutely! Our platform allows for extensive customization including colors, fonts, and layouts to match your preferences and branding.",
  },
  {
    id: "4",
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial period so you can experience all the features and benefits before committing to a subscription.",
  },
  {
    id: "5",
    question: "How secure is my data?",
    answer:
      "We take security very seriously. Your data is encrypted and stored securely to ensure the highest level of protection against unauthorized access.",
  },
  {
    id: "6",
    question: "Do you offer customer support?",
    answer:
      "Yes, our dedicated support team is available to assist you with any questions or issues you may encounter. Don't hesitate to reach out!",
  },
  {
    id: "7",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Of course! You can cancel your subscription at any time with no hidden fees or penalties. Your satisfaction is our priority.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <h3 className="text-lg font-semibold">Frequently asked questions</h3>
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
