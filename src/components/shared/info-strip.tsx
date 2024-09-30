import Image from "next/image";

export const InfoStrip: React.FC = () => {
  return (
    <div className="w-full p-3 rounded-lg text-primary bg-blue-50 border border-indigo-200 flex items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/assets/icons/local-police.svg"
          width={50}
          height={50}
          alt="safe-guard-icon"
          className="h-6"
        />
        <p>
          Visa on time guarantee: Full refund if your visa isn&apos;t delivered
          as promised.
        </p>
      </div>
    </div>
  );
};
