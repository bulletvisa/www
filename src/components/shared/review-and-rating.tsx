import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
    avatar:
      "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Linda Smith",
    time: "25d ago",
    review:
      "Absolutely phenomenal service! With precise documentation, I had my Australian visa in hand within 24 hours of submission. Highly recommend this team for their efficiency and reliability.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Carlos Hernandez",
    time: "40d ago",
    review:
      "Incredible turnaround time! I entrusted them with my Canadian visa application and was pleasantly surprised to receive approval within a day.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Johnson",
    time: "15d ago",
    review:
      "Top-notch service! I submitted my UK visa application, and thanks to their meticulous work, I had my visa sorted within a single day. Their professionalism is unmatched.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1548280684-8c051518e195?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Kim",
    time: "20d ago",
    review:
      "Exceptional efficiency! I applied for a Schengen visa and received approval within just one day.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1619420674819-da50b9f76950?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maria Rodriguez",
    time: "35d ago",
    review:
      "Remarkable service! I entrusted them with my New Zealand visa application and was amazed to find it approved within 24 hours. Highly recommend their services for anyone seeking a hassle-free experience.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohammed Ali",
    time: "10d ago",
    review:
      "Unparalleled professionalism! With all the necessary documents provided, I received my Dubai visa approval within a day. This team sets the bar high for efficiency and reliability.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1583674392771-2abf6be75965?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anna Kowalski",
    time: "28d ago",
    review:
      "Outstanding service! I applied for a US visa and was astounded to receive approval within 24 hours. The team's attention to detail and swift processing made all the difference. Highly recommended!",
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
        {reviews.map((review, i) => (
          <Card key={i} className="bg-gray-50 border-slate-300 h-max">
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src={review.avatar}
                  alt={review.name}
                  className="object-cover"
                />
              </Avatar>
            </CardHeader>
            <CardFooter className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full">
                <p className="text-xs font-bold text-foreground/85">
                  {review.name}
                </p>
                <p className="text-xs text-foreground/65">{review.time}</p>
              </div>
              <div className="text-xs text-foreground/75">{review.review}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
