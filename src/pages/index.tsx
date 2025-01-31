import Head from "next/head";
import Script from "next/script";
import { TopNavigationBar } from "@/components/container/top-navigation-bar";
import { Footer } from "@/components/container/footer";
import { CheckPincodeAvailability } from "@/components/shared/check-pincode-availability";
import { Separator } from "@/components/ui/separator";
import { ApplicationCard } from "@/components/shared/application-card";
import { HeroImage } from "@/components/shared/hero-image";
import { WhyUseUs } from "@/components/shared/why-use-us";
import { HowItWorks } from "@/components/shared/how-it-works";
import { DocumentsRequired } from "@/components/shared/document-required";
import { ReviewAndRatings } from "@/components/shared/review-and-rating";
import { Faq } from "@/components/shared/faq";
import { InfoStrip } from "@/components/shared/info-strip";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Bulletvisa</title>
        <meta
          name="description"
          content="Get your Singapore visa quickly and efficiently with Bullet Visa. Our streamlined process ensures swift approvals, making your travel plans hassle-free."
        />
        <link
          rel="icon"
          href="https://bulletvisa.com/wp-content/uploads/2024/05/cropped-favi-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://bulletvisa.com/wp-content/uploads/2024/05/cropped-favi-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://bulletvisa.com/wp-content/uploads/2024/05/cropped-favi-180x180.png"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oesq5piv7n");
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5LMQK2K6');
          `}
        </Script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5LMQK2K6"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <TopNavigationBar />
      <main className="bg-white p-4 md:px-16 flex flex-col gap-6 relative">
        <InfoStrip />
        <div className="flex gap-6">
          <div className="w-full lg:w-2/3 flex flex-col items-start gap-6">
            <HeroImage
              title="Get Singapore Visa for Indians in 3 working days"
              imageUrl="https://x1xgawylf0a6wvzl.public.blob.vercel-storage.com/singapore-hero-image.webp"
            />
            <Separator />
            <CheckPincodeAvailability />
            <Separator />
            <WhyUseUs />
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
              governmentFees: 2100,
              gstPercentage: 18,
              bulletvisaFees: 1199,
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
