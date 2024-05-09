import Image from "next/image";

type HeroImageProps = {
  title: string;
  imageUrl: string;
};

export const HeroImage: React.FC<HeroImageProps> = (props) => {
  return (
    <div className="relative w-full h-full object-cover rounded-lg">
      <Image
        className="w-full h-full object-cover aspect-video md:aspect-auto rounded-lg"
        width={800}
        height={300}
        src={props.imageUrl}
        alt={props.title}
      />
      <h1 className="absolute bottom-2 md:bottom-5 left-2 md:left-5 font-semibold text-lg md:text-2xl text-white">
        {props.title}
      </h1>
    </div>
  );
};
