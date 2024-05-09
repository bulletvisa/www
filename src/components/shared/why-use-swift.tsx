import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

type WhyUseSwiftProps = {
  icon: string;
  title: string;
  desc: string;
};

const features: WhyUseSwiftProps[] = [
  {
    icon: "/assets/icons/fast-clock.svg",
    title: "On Time Guarantee",
    desc: "100% refund if we don't keep our promise",
  },
  {
    icon: "/assets/icons/local-police.svg",
    title: "Security Insurance",
    desc: "Your passport insured upto Rs 1,00,000",
  },
  {
    icon: "/assets/icons/query-stats.svg",
    title: "Real-Time Tracking",
    desc: "Always be updated about the status of your visa",
  },
];

export function WhyUseSwift() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Why Use Bullet Visa</h3>
        <p className="text-foreground/80">
          Discover unimaginable visa benefits
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-3 md:gap-6">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="bg-blue-50 border-none flex flex-col items-start md:items-center justify-center h-full"
          >
            <CardHeader>
              <Image
                className="h-6"
                width={50}
                height={50}
                src={feature.icon}
                alt={feature.title}
              />
            </CardHeader>
            <CardFooter className="flex flex-col items-start md:items-center justify-center gap-1">
              <h4 className="text-sm font-semibold">{feature.title}</h4>
              <p className="text-xs text-foreground/80">{feature.desc}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
