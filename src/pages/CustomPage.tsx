import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import FaqSimpleHighlight from '@/components/sections/faq/FaqSimpleHighlight';
import { Paintbrush, Wrench } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function CustomPage() {
  return (
    <>
  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Fabrication"
      title="Custom Designs"
      description="Modifying spaces to your exact specs."
      imageSrc="http://img.b2bpic.net/free-photo/cutting-metal-with-plasma-equipment_176420-4793.jpg"
      textAnimation="slide-up"
      items={[
        {
          icon: Wrench,
          title: "Welding",
          description: "Expert metal fabrication.",
        },
        {
          icon: Paintbrush,
          title: "Finishing",
          description: "Professional paint and coating.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimpleHighlight
      tag="Guide"
      title="The Custom Process"
      description="Simple steps for your unique build."
      textAnimation="slide-up"
      items={[
        {
          question: "Consultation?",
          answer: "Call us to discuss designs.",
        },
        {
          question: "Pricing?",
          answer: "Varies by scope of work.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
