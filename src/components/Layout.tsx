import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "For Sale",
    "href": "/containers"
  },
  {
    "name": "Custom Builds",
    "href": "/custom"
  },
  {
    "name": "Delivery",
    "href": "/delivery"
  },
  {
    "name": "About",
    "href": "/about"
  },
  {
    "name": "Contact",
    "href": "/contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="California Container Works"
      ctaButton={{
        text: "Get a Quote",
        href: "/contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Custom Builds",
              href: "/custom",
            },
            {
              label: "Container Sales",
              href: "/containers",
            },
            {
              label: "Delivery",
              href: "/delivery",
            },
          ],
        },
      ]}
      leftText="California Container Works © 2024"
      rightText="Open 24/7 | CA, AZ, NV Coverage"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
