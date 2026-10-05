import ContactCta from '@/components/sections/contact/ContactCta';
import ProductMediaCards from '@/components/sections/product/ProductMediaCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContainersPage() {
  return (
    <>
  <div id="product" data-section="product">
    <SectionErrorBoundary name="product">
          <ProductMediaCards
      tag="Sales"
      title="Inventory"
      description="High-quality containers for your needs."
      textAnimation="slide-up"
      products={[
        {
          name: "20ft Standard",
          price: "$3,200",
          imageSrc: "http://img.b2bpic.net/free-photo/gray-bright-yellow-warehouse-wall-made-profiled-metal-wall-background-ideas-screen-design-articles_166373-3526.jpg",
        },
        {
          name: "40ft High Cube",
          price: "$4,500",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-door_23-2148098632.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Need Help"
      text="Can't find what you need?"
      primaryButton={{
        text: "Contact",
        href: "/contact",
      }}
      secondaryButton={{
        text: "Email",
        href: "mailto:info@ccw.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
