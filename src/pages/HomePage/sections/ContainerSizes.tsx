/* eslint-disable */
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { Ruler, Maximize2, Layers } from 'lucide-react';
"import React from 'react';"
"import ScrollReveal from '@/components/ui/ScrollReveal';"
"import TextAnimation from '@/components/ui/TextAnimation';"
"import { Ruler, Maximize2, Layers } from 'lucide-react';"

export default function ContainerSizesSection(): React.JSX.Element {
  const sizes = [
    {
      title: "20FT Standard",
      icon: Ruler,
      specs: [
        { label: "Length", val: "20 ft" },
        { label: "Width", val: "8 ft" },
        { label: "Height", val: "8 ft 6 in" },
        { label: "Area", val: "~160 sq ft" },
      ],
      description: "Fits most driveways and tight lots. Perfect for jobsite tool storage, residential clearing, or compact workshop builds.",
      highlight: "Compact & Driveway Friendly",
    },
    {
      title: "40FT Standard",
      icon: Maximize2,
      specs: [
        { label: "Length", val: "40 ft" },
        { label: "Width", val: "8 ft" },
        { label: "Height", val: "8 ft 6 in" },
        { label: "Area", val: "~320 sq ft" },
      ],
      description: "Twice the storage on one delivery. Ideal for commercial inventory, agricultural gear, and spacious custom office conversions.",
      highlight: "Maximum Volume Value",
    },
    {
      title: "40FT High Cube",
      icon: Layers,
      specs: [
        { label: "Length", val: "40 ft" },
        { label: "Width", val: "8 ft" },
        { label: "Height", val: "9 ft 6 in" },
        { label: "Area", val: "~320 sq ft" },
      ],
      description: "Same footprint as standard 40ft but with one extra foot of headroom. Essential for high shelving, overhead lofts, and tall equipment.",
      highlight: "Extra Headroom & Vertical Storage",
    },
  ];

  return (
    <section data-webild-section="container-sizes" id="container-sizes" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="Container Sizes"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Standardized dimensions engineered for heavy cargo, securely placed on your property.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sizes.map((size, idx) => {
            const Icon = size.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className="flex flex-col justify-between h-full p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00d4ff] bg-[#007bff]/10 px-2.5 py-1 rounded">
                        {size.highlight}
                      </span>
                      <Icon className="w-5 h-5 text-accent" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      {size.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 my-2 p-3 rounded bg-background border border-[#007bff]/15">
                      {size.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-[11px] text-accent font-medium uppercase tracking-wider">{spec.label}</span>
                          <span className="text-sm font-bold text-foreground">{spec.val}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-accent text-sm leading-relaxed">
                      {size.description}
                    </p>
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