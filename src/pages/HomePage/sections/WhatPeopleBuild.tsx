import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { HardHat, Wrench, Building2, Tractor, ShieldAlert, Warehouse, Store, Archive } from 'lucide-react';

export default function WhatPeopleBuildSection(): React.JSX.Element {
  const items = [
    {
      title: "Jobsite Storage",
      description: "Secure weather-resistant storage for tools, materials, and heavy equipment directly on active construction sites.",
      icon: HardHat,
    },
    {
      title: "Workshops",
      description: "Dedicated workspace modified with electrical, lighting, ventilation, and custom workbenches for any craft.",
      icon: Wrench,
    },
    {
      title: "Mobile Offices",
      description: "Fully insulated and climate-controlled ground-level office space for on-site managers and administrative teams.",
      icon: Building2,
    },
    {
      title: "Farm & Ranch Storage",
      description: "Heavy-duty protection for livestock feed, tack, machinery, and agricultural supplies against pests and weather.",
      icon: Tractor,
    },
    {
      title: "Equipment & Tool Storage",
      description: "Lockable, high-security containers designed to safeguard high-value industrial and commercial gear.",
      icon: ShieldAlert,
    },
    {
      title: "Garages & Vehicle Storage",
      description: "Wide roll-up door conversions built to park ATVs, mowers, motorcycles, and small vehicles safely.",
      icon: Warehouse,
    },
    {
      title: "Retail & Pop-Up Shops",
      description: "Custom glass doors, display windows, and branded finishes for eye-catching temporary or permanent retail spaces.",
      icon: Store,
    },
    {
      title: "Business Inventory Storage",
      description: "Scalable, clean, and dry overflow storage for retail stock, commercial supplies, and archival records.",
      icon: Archive,
    },
  ];

  return (
    <section data-webild-section="what-people-build" id="what-people-build" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="What People Build"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Versatile steel shipping containers converted for commercial, agricultural, and residential uses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.05}>
                <div className="flex flex-col gap-3 p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all h-full">
                  <div className="p-2.5 rounded bg-[#007bff]/10 text-[#00d4ff] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}