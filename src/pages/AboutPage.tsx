import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Building, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutPage() {
  return (
    <>
  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Mission"
      title="Who We Are"
      description="Leaders in the shipping container industry."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-female-industrial-employee-working-uniform-hardhat-checking-production-factory_342744-188.jpg"
      textAnimation="slide-up"
      items={[
        {
          icon: Building,
          title: "Quality",
          description: "Top tier standards.",
        },
        {
          icon: Users,
          title: "Experts",
          description: "Decades of experience.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialQuoteCards
      tag="Reputation"
      title="Client Stories"
      description="Hear from our partners."
      textAnimation="slide-up"
      testimonials={[
        {
          name: "John Doe",
          role: "Contractor",
          quote: "Reliable and fast.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-millennial-guy-tilts-head-smiles-happily-expresses-sincere-emotions_273609-45703.jpg",
        },
        {
          name: "Jane Smith",
          role: "Owner",
          quote: "Best build ever.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-handsome-guy-posing-against-white-wall_176420-32958.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
