import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import { MapPin, Truck } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function DeliveryPage() {
  return (
    <>
  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Logistics"
      title="Professional Delivery"
      description="We ensure safe transport to your site."
      imageSrc="http://img.b2bpic.net/free-photo/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van_637285-2293.jpg"
      textAnimation="slide-up"
      items={[
        {
          icon: Truck,
          title: "Safe Handling",
          description: "Professional drivers.",
        },
        {
          icon: MapPin,
          title: "Broad Coverage",
          description: "Serving the Southwest.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCarousel
      tag="Logistics"
      title="Fleet Services"
      description="Delivering excellence everywhere."
      textAnimation="slide-up"
      items={[
        {
          title: "Site Prep",
          description: "Leveling.",
          buttonIcon: "ArrowRight",
          imageSrc: "http://img.b2bpic.net/free-photo/forklift-carrying-box-supply-chain-concept_23-2149853114.jpg",
        },
        {
          title: "Placement",
          description: "Precision.",
          buttonIcon: "ArrowRight",
          imageSrc: "http://img.b2bpic.net/free-photo/crane-blue-sky_268835-696.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
