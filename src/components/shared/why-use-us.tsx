import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

type WhyUseUsProps = {
  icon: string;
  title: string;
  desc: string;
};

const features: WhyUseUsProps[] = [
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

export function WhyUseUs() {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Why use Bulletvisa</h3>
        <p className="text-foreground/80">
          Discover unimaginable visa benefits
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="bg-gray-50 border-none flex flex-col items-center h-full"
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
            <CardFooter className="flex flex-col items-center justify-center gap-1">
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-center text-foreground/80">{feature.desc}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
