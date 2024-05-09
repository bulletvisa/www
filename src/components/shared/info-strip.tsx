import Image from "next/image";

export const InfoStrip: React.FC = () => {
  return (
    <div className="w-full p-3 rounded-lg text-primary bg-blue-50 border border-indigo-200 flex items-center justify-center text-xs md:text-base">
      <div className="flex items-center justify-center gap-1">
        <Image
          src="/assets/icons/local-police.svg"
          width={50}
          height={50}
          alt="safe-guard-icon"
          className="h-6"
        />
        <p>
          Visa on time guarantee - If you don&apos;t{" "}
          <span className="hidden md:inline-block">
            {" "}
            receive your visa in 3 working days you will get a{" "}
          </span>{" "}
          complete refund no questions asked.
        </p>
      </div>
    </div>
  );
};
