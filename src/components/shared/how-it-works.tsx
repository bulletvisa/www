import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

type HowItWorksProps = {
  icon: string;
  title: string;
  desc: string;
};

const workflow: HowItWorksProps[] = [
  {
    icon: "conveyor-belt.svg",
    title: "Passport & Photos Collected",
    desc: "We would need your passport & photos as soon as possible",
  },
  {
    icon: "assignment.svg",
    title: "Share Documents Digitally",
    desc: "Share your documents digitally with us",
  },
  {
    icon: "package.svg",
    title: "Passport Delivered on Time",
    desc: "We will process your visa and deliver your passport on time",
  },
];

export function HowItWorks() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">How It Works</h3>
        <p className="text-foreground/80">
          Discover unimaginable visa benefits
        </p>
      </div>
      <Card className="flex flex-wrap items-center justify-between gap-x-20 w-auto md:w-max">
        {workflow.map((item, i) => (
          <div key={i} className="flex flex-col">
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
              <p>{i + 1}</p>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-foreground/80">{item.desc}</p>
            </CardFooter>
          </div>
        ))}
      </Card>
    </div>
  );
}
