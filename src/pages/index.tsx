import Head from "next/head";
import { TopNavigationBar } from "@/components/container/top-navigation-bar";
import { Footer } from "@/components/container/footer";
import { CheckPincodeAvailability } from "@/components/shared/check-pincode-availability";
import { Separator } from "@/components/ui/separator";
import { ApplicationCard } from "@/components/shared/application-card";
import { HeroImage } from "@/components/shared/hero-image";
import { WhyUseSwift } from "@/components/shared/why-use-swift";
import { HowItWorks } from "@/components/shared/how-it-works";
import { DocumentsRequired } from "@/components/shared/document-required";
import { ReviewAndRatings } from "@/components/shared/review-and-rating";
import { Faq } from "@/components/shared/faq";
import { InfoStrip } from "@/components/shared/info-strip";

export default function Page() {
  return (
    <div>
      <Head>
        <title>BulletVisa</title>
        <meta
          name="description"
          content="Get Singapore Visa for Indians in 4 to 5 working days"
        />
      </Head>

      <TopNavigationBar />

      <main className="bg-white p-4 md:px-16 flex flex-col gap-6 relative">
        <InfoStrip />
        <div className="flex gap-6">
          <div className="lg:w-2/3 flex flex-col items-start gap-6">
            <HeroImage
              title="Get Singapore Visa for Indians in 3 working days"
              imageUrl="https://x1xgawylf0a6wvzl.public.blob.vercel-storage.com/singapore-hero-image.webp"
            />
            <Separator />
            <CheckPincodeAvailability />
            <Separator />
            <WhyUseSwift />
            <Separator />
            <HowItWorks />
            <Separator />
            <DocumentsRequired />
            <Separator />
            <ReviewAndRatings />
            <Separator />
            <Faq />
          </div>
          <ApplicationCard
            data={{
              governmentFees: 1800,
              gstPercentage: 18,
              swiftFees: 3200,
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
