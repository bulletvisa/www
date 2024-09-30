import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "Is Singapore Tourist Visa Available Now?",
    answer:
      "Yes, Singapore is currently issuing tourist visas for travelers, including Singapore visa for Indians.",
  },
  {
    id: "2",
    question: "How Can I Get A Singapore Tourist Visa From India?",
    answer:
      "Indian citizens can apply for a Singapore tourist visa online through the official visa application portal or by using authorized visa agents. The Singapore visa cost varies depending on the type of visa.",
  },
  {
    id: "3",
    question: "Is Singapore Tourist Visa-Free For Indian Citizens?",
    answer:
      "No, Indian citizens are required to obtain a tourist visa to visit Singapore. The Singapore visa fees are applicable for Indian citizens.",
  },
  {
    id: "4",
    question: "Is There A Singapore EVisa For Indians?",
    answer:
      "Yes, Indian citizens can apply for a Singapore eVisa, which is a convenient option for travel and has a fixed Singapore visa price.",
  },
  {
    id: "5",
    question: "Is There A Singapore Transit Visa For Indians?",
    answer:
      "Yes, Singapore has a High Commission in New Delhi and a Consulate-General in Mumbai, which handle visa applications and other consular services for Indian citizens applying for a Singapore visa.",
  },
  {
    id: "6",
    question: "Is There A Singapore Embassy In India?",
    answer:
      "Yes, Singapore has a High Commission in New Delhi and a Consulate-General in Mumbai, which handle visa applications and other consular services for Indian citizens applying for a Singapore visa.",
  },
  {
    id: "7",
    question:
      "What Happens At The Singapore Immigration Checkpoints Once I Arrive With My Tourist Visa?",
    answer:
      "Upon arrival in Singapore with a tourist visa, you will go through immigration clearance where your visa and travel documents will be checked, ensuring you have met the Singapore visa requirements.",
  },
  {
    id: "8",
    question: "What are the Singapore visa entry requirements for US Citizens?",
    answer:
      "US citizens do not need a visa for short visits to Singapore for tourism or business purposes, ensuring you comply with the visa regulations during your stay.",
  },
  {
    id: "9",
    question: "How long can I stay in Singapore on a Singapore tourist visa?",
    answer:
      "The duration of stay allowed on a Singapore tourist visa varies, typically up to 30 or 90 days, depending on the type of visa and Singapore visa fees paid.",
  },
  {
    id: "10",
    question:
      "Where can citizens find the nearest Singapore embassy in the US?",
    answer:
      "The nearest Singapore embassy or consulate can be found in Washington DC, New York, or San Francisco, where you can inquire about the Singapore visa cost and other details.",
  },
  {
    id: "11",
    question: "Who can travel to Singapore for 90 days without a visa?",
    answer:
      "Citizens of visa waiver countries, including the US, can travel to Singapore for stays of up to 90 days without a visa, ensuring you have met the Singapore visa requirements.",
  },
  {
    id: "12",
    question: "Who can apply for a Singapore visa online?",
    answer:
      "Eligible foreign nationals, including Indian citizens, can apply for a Singapore visa online.",
  },
  {
    id: "13",
    question: "Who must apply for a Singapore visa at the embassy?",
    answer:
      "Some nationalities are required to apply for a Singapore visa at the embassy or consulate, where they can get details about the Singapore visa fees and other requirements.",
  },
  {
    id: "14",
    question: "What is an SG arrival card for Singapore?",
    answer:
      "The SG Arrival Card is an electronic arrival card for visitors to Singapore, including those applying for a Singapore visa for Indians.",
  },
  {
    id: "15",
    question:
      "How do I complete the SG Arrival Card application for Singapore?",
    answer:
      "You can complete the application online before your trip, which is separate from the Singapore visa application process.",
  },
  {
    id: "16",
    question: "Where do they accept the SG Arrival Card?",
    answer:
      "The SG Arrival Card is accepted at Singapore's immigration checkpoints, where you will also present your Singapore visa if required.",
  },
  {
    id: "17",
    question:
      "How to ensure a successful Singapore visa for Indians online application?",
    answer:
      "Ensure all required documents are submitted accurately and meet the criteria for the visa application, including the payment of Singapore visa fees.",
  },
  {
    id: "18",
    question:
      "What happens after my Singapore visa application has been approved?",
    answer:
      "After approval, you will receive notification and can proceed with your travel plans, ensuring you have paid the applicable Singapore visa fees.",
  },
  {
    id: "19",
    question: "What is the procedure to apply for a Singapore visa online?",
    answer:
      "The procedure involves filling out an online application, submitting required documents, and paying the visa fee, which includes the Singapore visa price.",
  },
  {
    id: "20",
    question: "Is it safe to apply for a Singapore visa online?",
    answer:
      "Yes, applying online through the official portal is safe and secure, ensuring your Singapore visa for Indians is processed efficiently.",
  },
  {
    id: "21",
    question:
      "How do I track the status of my Singapore visa online application?",
    answer:
      "You can track the status of your application online using the provided tracking number, ensuring your Singapore visa is processed timely.",
  },
  {
    id: "22",
    question:
      "What are the specifications for the passport-sized photos needed for the Singapore visa online application?",
    answer:
      "Photos must meet specific size and quality requirements as outlined in the visa application guidelines, ensuring your Singapore visa application is not delayed.",
  },
  {
    id: "23",
    question: "How early should I apply for a Singapore visa?",
    answer:
      "It is recommended to apply for a Singapore visa at least 30 days before your intended travel date, ensuring you have ample time to complete the application process and pay the Singapore visa fees.",
  },
  {
    id: "24",
    question:
      "How will I know when my Singapore visa online submission has been approved?",
    answer:
      "You will receive notification of approval via email or through the online visa application portal, ensuring you are aware of the status of your Singapore visa application.",
  },
  {
    id: "25",
    question: "What is the cost to apply for a Singapore visa online?",
    answer:
      "The cost of a Singapore visa varies depending on the type of visa and processing time selected, ensuring you are aware of the Singapore visa cost before applying.",
  },
  {
    id: "26",
    question:
      "Is there a fast-track service for Singapore visa online submission?",
    answer:
      "Yes, expedited processing options are available for an additional fee, allowing you to fast-track your Singapore visa application if needed.",
  },
  {
    id: "27",
    question: "Can I work in Singapore with a tourist visa?",
    answer:
      "No, a tourist visa does not allow for employment in Singapore, ensuring you comply with the visa regulations during your stay.",
  },
  {
    id: "28",
    question: "What is the processing time for a Singapore tourist visa?",
    answer:
      "Processing times for a Singapore tourist visa are typically around 3-5 working days, ensuring you plan your travel accordingly.",
  },
  {
    id: "29",
    question:
      "Is travel insurance required for a Singapore visa online application?",
    answer:
      "Travel insurance is not mandatory but is recommended for medical emergencies and unforeseen circumstances, ensuring you are covered during your stay and meet the Singapore visa requirements.",
  },
  {
    id: "30",
    question:
      "What is the minimum passport validity required for a Singapore visa online submission?",
    answer:
      "Your passport must be valid for at least 6 months from the date of entry into Singapore, ensuring you meet the passport requirements for your Singapore visa.",
  },
  {
    id: "31",
    question:
      "Can I apply for a Singapore visa online on behalf of a friend or family member?",
    answer:
      "Yes, you can apply for a Singapore visa online on behalf of a friend or family member, ensuring you have their consent and provide accurate information about the Singapore visa application.",
  },
  {
    id: "32",
    question:
      "Can I cancel my Singapore visa online application after it has been submitted?",
    answer:
      "No, once submitted, visa applications cannot be canceled, so ensure all information is accurate before submitting your Singapore visa application.",
  },
  {
    id: "33",
    question: "How do I pay for my Singapore visa online application?",
    answer:
      "Payment for your Singapore visa online application can be made using a credit or debit card, ensuring you pay the applicable Singapore visa fees.",
  },
  {
    id: "34",
    question: "Is there a physical visa stamp for the Singapore e visa?",
    answer:
      "No, the Singapore e-visa is electronically linked to your passport, eliminating the need for a physical visa stamp.",
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
