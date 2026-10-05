/* eslint-disable */
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { ArrowRight, Hammer, Box, ShieldCheck, Truck } from 'lucide-react';
"import React from 'react';"
"import ScrollReveal from '@/components/ui/ScrollReveal';"
"import TextAnimation from '@/components/ui/TextAnimation';"
"import { ArrowRight, Hammer, Box, ShieldCheck, Truck } from 'lucide-react';"

export default function WhatWeDoSection(): React.JSX.Element {
  const cards = [
    {
      title: "Custom Containers",
      icon: Hammer,
      description: "We specialize in custom container modifications tailored to your exact specifications. From roll-up doors and windows to full office conversions and HVAC installations, our shop builds what you imagine.",
      href: "/custom",
      linkText: "Explore Custom Builds",
    },
    {
      title: "New & 1-Trip Containers",
      icon: Box,
      description: "Directly imported from factory manufacture after a single cargo load, 1-trip containers are in spotless condition. Perfect for customer-facing commercial spaces, modern pop-ups, or pristine storage.",
      href: "/containers",
      linkText: "View New Containers",
    },
    {
      title: "Used Containers",
      icon: ShieldCheck,
      description: "Fully inspected wind and watertight shipping containers built from heavy-gauge steel. An economical choice providing maximum security and durable weatherproof storage for job sites or equipment.",
      href: "/containers",
      linkText: "Browse Used Inventory",
    },
    {
      title: "Transportation & Relocation",
      icon: Truck,
      description: "Reliable container transport and site relocation services across California, Arizona, and Nevada. Our experienced heavy drivers deliver and drop precise placement right onto your prepared site.",
      href: "/delivery",
      linkText: "Delivery Info & Coverage",
    },
  ];

  return (
    <section data-webild-section="what-we-do" id="what-we-do" className="bg-background py-16">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="What We Do"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Complete shipping container solutions from modification and sales to specialized Southwest transport.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className="flex flex-col justify-between h-full p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all group">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 w-fit rounded-lg bg-[#007bff]/10 text-[#00d4ff] group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-accent text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00d4ff] hover:text-white mt-6 group-hover:translate-x-1 transition-all"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}