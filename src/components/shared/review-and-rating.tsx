import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistance } from "date-fns";

const ratings = [
  {
    type: "rating",
    icon: "star.svg",
    number: 4,
  },
  {
    type: "empty",
    icon: "star-outline.svg",
    number: 1,
  },
];

const reviews = [
  {
    name: "Rahul Mehta",
    review:
      "Bulletvisa.com helped me get my Singapore visa in just three days! The tracking feature kept me updated and the support was excellent.",
    time: 1683713210,
    color: "bg-red-100",
  },
  {
    name: "Ananya Gupta",
    review:
      "Impressed with their quick service! The team was responsive, making the visa process seamless.",
    time: 1683716210,
    color: "bg-green-100",
  },
  {
    name: "Vikram Sharma",
    review:
      "The 3-5 day guarantee is genuine. I received my visa on time and was kept informed.",
    time: 1683719210,
    color: "bg-blue-100",
  },
  {
    name: "Priya Deshmukh",
    review:
      "Bulletvisa.com made the visa application stress-free. Customer support answered my questions quickly.",
    time: 1683722210,
    color: "bg-yellow-100",
  },
  {
    name: "Amit Khurana",
    review:
      "I was initially skeptical, but Bulletvisa.com delivered my Singapore visa in four days! Efficient and reliable.",
    time: 1683725210,
    color: "bg-purple-100",
  },
  {
    name: "Sneha Nair",
    review:
      "Amazing service and quick visa delivery! Customer support guided me step-by-step.",
    time: 1683728210,
    color: "bg-pink-100",
  },
  {
    name: "Arjun Bhatia",
    review:
      "Bulletvisa.com made it simple. Their updates and support were very helpful.",
    time: 1683731210,
    color: "bg-orange-100",
  },
  {
    name: "Nisha Patel",
    review:
      "Thanks to their excellent support and timely updates, I felt confident throughout the process.",
    time: 1683734210,
    color: "bg-teal-100",
  },
  {
    name: "Rajesh Kumar",
    review:
      "I was nervous about getting my Singapore visa, but Bulletvisa.com delivered faster than expected.",
    time: 1683737210,
    color: "bg-indigo-100",
  },
  {
    name: "Meena Reddy",
    review:
      "I'm glad I chose Bulletvisa.com. Their tracking system and support made my visa application smooth.",
    time: 1683740210,
    color: "bg-cyan-100",
  },
];

export function ReviewAndRatings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Reviews and Ratings</h3>
        <p className="text-2xl font-bold">4.8/5</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {ratings.map((rating, i) => (
              <div key={i} className="flex gap-2">
                {Array.from({ length: rating.number }).map((_, index) => (
                  <Image
                    key={index}
                    src={`/assets/icons/${rating.icon}`}
                    width={50}
                    height={50}
                    alt={rating.icon}
                    className="w-5"
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="flex items-center gap-1 text-xs font-semibold text-foreground/60">
            <span>172</span>
            <span>reviews</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map(({ name, review, color, time }, i) => (
          <Card key={i} className="bg-gray-50">
            <CardHeader>
              <Avatar>
                <AvatarFallback className={color}>
                  {name
                    .split(" ")
                    .map((text) => text.charAt(0))
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardFooter className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-foreground/85">{name}</p>
              </div>
              <div className="text-foreground/75">{review}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
