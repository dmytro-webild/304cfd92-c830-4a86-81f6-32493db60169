import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimpleHighlight from '@/components/sections/faq/FaqSimpleHighlight';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Available 24/7"
      title="From Your Mind To Our Design"
      description="CCW delivers premium shipping containers and custom fabrication services across California, Arizona, and Nevada."
      primaryButton={{
        text: "Call Now: 951-285-6103",
        href: "tel:9512856103",
      }}
      secondaryButton={{
        text: "Get a Quote",
        href: "/contact",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1791221200268-mbbxb279.jpg?_wi=1"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="featured-cards" data-section="featured-cards">
    <SectionErrorBoundary name="featured-cards">
          <FeaturesRevealCardsBento
      tag="Our Services"
      title="Shipping Container Solutions"
      description="We specialize in new and used sales alongside precision fabrication."
      items={[
        {
          title: "Custom Containers",
          description: "Tailored fabrication and modifications.",
          href: "/custom",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1791221200269-czniqet6.jpg",
        },
        {
          title: "Used Containers",
          description: "Reliable and durable units.",
          href: "/containers",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1791221200269-4uflqzv1.png",
        },
        {
          title: "New Containers",
          description: "Factory fresh and clean.",
          href: "/containers",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1791221200268-mbbxb279.jpg?_wi=2",
        },
        {
          title: "Delivery & Transport",
          description: "Delivered across the Southwest.",
          href: "/delivery",
          imageSrc: "http://img.b2bpic.net/free-photo/business-entrepreneur-man-presenting-company-statistics-using-tablet-financial-presentation_482257-4608.jpg",
        },
        {
          title: "Fabrication",
          description: "Professional welding and building.",
          href: "/custom",
          imageSrc: "http://img.b2bpic.net/free-photo/gray-bright-yellow-warehouse-wall-made-profiled-metal-wall-background-ideas-screen-design-articles_166373-3526.jpg?_wi=1",
        },
        {
          title: "Site Prep",
          description: "Leveling and concrete pads.",
          href: "/delivery",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-door_23-2148098632.jpg?_wi=1",
        },
        {
          title: "Get a Quote",
          description: "Contact our experts today.",
          href: "/contact",
          imageSrc: "http://img.b2bpic.net/free-photo/cutting-metal-with-plasma-equipment_176420-4793.jpg?_wi=1",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimpleHighlight
      tag="Support"
      title="Frequently Asked"
      titleHighlight="Questions"
      description="Answers to common shipping container inquiries."
      textAnimation="slide-up"
      items={[
        {
          question: "Where do you deliver?",
          answer: "We serve CA, AZ, and NV.",
        },
        {
          question: "Are they waterproof?",
          answer: "Yes, our containers are wind and watertight.",
        },
        {
          question: "Can I customize?",
          answer: "Absolutely, we specialize in custom fabrication.",
        },
        {
          question: "How long is delivery?",
          answer: "Usually 3-7 business days.",
        },
        {
          question: "What is the warranty?",
          answer: "We offer durability guarantees on new units.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Clients"
      title="Trusted Across the Southwest"
      description="We partner with local construction firms and homeowners."
      textAnimation="slide-up"
      names={[
        "General Contractors",
        "Self-Storage Facilities",
        "Farm Logistics",
        "Event Planners",
        "Construction Sites",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact-cta" data-section="contact-cta">
    <SectionErrorBoundary name="contact-cta">
          <ContactCta
      tag="Inquire Now"
      text="Ready to build? Give us a call or send a request."
      primaryButton={{
        text: "Call: 951-285-6103",
        href: "tel:9512856103",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:CaliforniaContainerWorks@yahoo.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
