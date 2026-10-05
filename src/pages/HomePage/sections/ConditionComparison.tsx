/* eslint-disable */
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { Sparkles, ShieldCheck, Wrench } from 'lucide-react';
"import React from 'react';"
"import ScrollReveal from '@/components/ui/ScrollReveal';"
"import TextAnimation from '@/components/ui/TextAnimation';"
"import { Sparkles, ShieldCheck, Wrench } from 'lucide-react';"

export default function ConditionComparisonSection(): React.JSX.Element {
  const conditions = [
    {
      title: "1-Trip",
      icon: Sparkles,
      badge: "Factory Fresh",
      description: "Shipped once from the factory. Cleanest condition, best for custom builds and anything customers will see.",
      features: [
        "Pristine exterior paint & floor",
        "Ideal for office & retail pop-ups",
        "Longest structural service life",
      ],
    },
    {
      title: "Used",
      icon: ShieldCheck,
      badge: "Best Value",
      description: "Wind and watertight, with some dents and surface rust. Lowest cost, great for storage.",
      features: [
        "100% weather-tested & secure",
        "Lowest price point for storage",
        "Heavy Corten steel strength",
      ],
    },
    {
      title: "Custom",
      icon: Wrench,
      badge: "Built To Order",
      description: "Any container modified to your plan.",
      features: [
        "Doors, windows, A/C & vents",
        "Custom welding & fabrication",
        "Tailored color finishes",
      ],
    },
  ];

  return (
    <section data-webild-section="condition-comparison" id="condition-comparison" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="New, 1-Trip, or Used?"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Choose the right container condition based on your budget, aesthetic, and functional requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className="flex flex-col justify-between h-full p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded bg-[#007bff]/10 text-[#00d4ff]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#00d4ff] bg-[#007bff]/10 px-2.5 py-1 rounded">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-accent text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="flex flex-col gap-2 mt-2 pt-4 border-t border-[#007bff]/15">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}