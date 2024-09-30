import { Card, CardFooter, CardHeader } from "@/components/ui/card";

const workflow = [
  {
    title: "Passport & Photos Collected",
    desc: "We would need your passport & photos as soon as possible",
  },
  {
    title: "Share Documents Digitally",
    desc: "Share your documents digitally with us",
  },
  {
    title: "Passport Delivered on Time",
    desc: "We will process your visa and deliver your passport on time",
  },
];

export function HowItWorks() {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">How It Works</h3>
        <p className="text-foreground/80">
          Discover unimaginable visa benefits
        </p>
      </div>
      <Card className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {workflow.map((item, i) => (
          <div key={i} className="flex flex-col">
            <CardHeader className="pb-3">
              <p className="w-8 h-8 bg-primary rounded-full text-white text-sm flex justify-center items-center">
                {i + 1}
              </p>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-y-1">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-foreground/80">{item.desc}</p>
            </CardFooter>
          </div>
        ))}
      </Card>
    </div>
  );
}
