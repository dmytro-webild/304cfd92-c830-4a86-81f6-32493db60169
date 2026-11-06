/* eslint-disable */
// @ts-nocheck
import Button from "@/components/ui/Button";

const primaryButton = {
  text: "Call 951-285-6103",
  href: "tel:951-285-6103"
};
const secondaryButton = {
  text: "Get a Quote",
  href: "/contact"
};

const HeroInline = () => {
  return (
    <section aria-label="Hero section" className="relative pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-background overflow-hidden">
      <div className="w-content-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center my-auto">
        <div className="flex flex-col items-start gap-4 text-left">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Custom, New & Used Shipping Containers in the Inland Empire
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-accent font-medium max-w-xl">
            Built to your specs. Delivered across California, Arizona, and Nevada. Available 24/7
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4 mt-2">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" />
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-[#007bff]/40 bg-card shadow-2xl">
            <img
              src="https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1793985590522-o173r5d6.jpg"
              alt="California Container Works shipping container mural"
              className="w-full h-full object-cover object-[center_70%] block rounded-2xl"
              style={{ objectFit: "cover", objectPosition: "center 70%" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HeroSection() {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroInline />
    </div>
  );
}
