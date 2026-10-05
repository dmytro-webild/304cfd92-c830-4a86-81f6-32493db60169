import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimpleHighlight from '@/components/sections/faq/FaqSimpleHighlight';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactPage() {
  return (
    <>
  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Inquiry"
      text="Reach out for your project today."
      primaryButton={{
        text: "Call",
        href: "tel:123",
      }}
      secondaryButton={{
        text: "Mail",
        href: "mailto:x@x.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimpleHighlight
      tag="Help"
      title="Contact FAQs"
      description="Find answers quickly."
      textAnimation="slide-up"
      items={[
        {
          question: "Office hours?",
          answer: "24/7.",
        },
        {
          question: "Service areas?",
          answer: "CA, AZ, NV.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
