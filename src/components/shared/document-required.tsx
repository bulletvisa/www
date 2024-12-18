import Image from "next/image";
import { Card, CardFooter, CardHeader } from "../ui/card";

type CardsProps = {
  icon: string;
  title: string;
  subtitle: string;
};

type DocumentsRequiredProps = {
  employee: string;
  cards: CardsProps[];
};

const documents: DocumentsRequiredProps[] = [
  {
    employee: "Employees",
    cards: [
      {
        icon: "fingerprint.svg",
        title: "Passport",
        subtitle: "Valid Passport",
      },
      {
        icon: "bed.svg",
        title: "Hotel Booking",
        subtitle: "Hotel or Stay Confirmation",
      },
      {
        icon: "travel.svg",
        title: "Flight Tickets",
        subtitle: "Return flight tickets",
      },
      {
        icon: "add-a-photo.svg",
        title: "Photos",
        subtitle: "3 Photos - (H) 45mm x (W) 35mm",
      },
      {
        icon: "account-balance.svg",
        title: "Bank Statement",
        subtitle: "Last 3 months with 1L balance",
      },
    ],
  },
  {
    employee: "Self Employed",
    cards: [
      {
        icon: "fingerprint.svg",
        title: "Passport",
        subtitle: "Valid Passport",
      },
      {
        icon: "bed.svg",
        title: "Hotel Booking",
        subtitle: "Hotel or Stay Confirmation",
      },
      {
        icon: "travel.svg",
        title: "Flight Tickets",
        subtitle: "Return flight tickets",
      },
      {
        icon: "add-a-photo.svg",
        title: "Photos",
        subtitle: "3 Photos - (H) 45mm x (W) 35mm",
      },
      {
        icon: "account-balance.svg",
        title: "Bank Statement",
        subtitle: "Last 3 months with 1L balance",
      },
      {
        icon: "store.svg",
        title: "GST Certificated & COI",
        subtitle: "Gst certificate and Certificate of Incorp.",
      },
    ],
  },
];

export function DocumentsRequired() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold">Document Required</h3>
      <div className="flex flex-col gap-4">
        {documents.map((document, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h4 className="uppercase font-medium text-xs">
              For {document.employee}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {document.cards.map((item, i) => (
                <Card key={i} className="w-full">
                  <CardHeader className="pb-3">
                    <Image
                      src={`/assets/icons/${item.icon}`}
                      width={50}
                      height={50}
                      alt={item.icon}
                      className="w-6"
                    />
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start gap-y-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-foreground/80">{item.subtitle}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
