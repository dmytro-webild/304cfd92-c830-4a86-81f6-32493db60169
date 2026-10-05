// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import FeaturedCardsSection from './HomePage/sections/FeaturedCards';
import FaqSection from './HomePage/sections/Faq';
import SocialProofSection from './HomePage/sections/SocialProof';
import ContactCtaSection from './HomePage/sections/ContactCta';


import TrustBarSection from './HomePage/sections/TrustBar';
import WhatWeDoSection from './HomePage/sections/WhatWeDo';
import ContainerSizesSection from './HomePage/sections/ContainerSizes';
import ConditionComparisonSection from './HomePage/sections/ConditionComparison';
import WhatPeopleBuildSection from './HomePage/sections/WhatPeopleBuild';
import HowItWorksSection from './HomePage/sections/HowItWorks';
import WhyUsSection from './HomePage/sections/WhyUs';
import SitePrepPadsSection from './HomePage/sections/SitePrepPads';
import CustomerVideoSection from './HomePage/sections/CustomerVideo';
import BottomCallBarSection from './HomePage/sections/BottomCallBar';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />
      <TrustBarSection />
      <WhatWeDoSection />
      <ContainerSizesSection />
      <ConditionComparisonSection />
      <WhatPeopleBuildSection />
      <HowItWorksSection />
      <WhyUsSection />

  <FeaturedCardsSection />

      <SitePrepPadsSection />
      <CustomerVideoSection />
  <FaqSection />

  <SocialProofSection />

  <ContactCtaSection />
      <BottomCallBarSection />
    </>
  );
}
