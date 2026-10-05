/* eslint-disable */
import React from 'react';
import { Clock, Wrench, Truck, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
"import { Clock, Wrench, Truck, UserCheck } from 'lucide-react';"
"import ScrollReveal from '@/components/ui/ScrollReveal';"

export default function TrustBarSection(): React.JSX.Element {
  const trustItems = [
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Direct assistance whenever you need it",
    },
    {
      icon: Wrench,
      title: "Custom Built To Order",
      description: "Tailored to your exact specs",
    },
    {
      icon: Truck,
      title: "Delivery Across CA, AZ & NV",
      description: "Fast transport to your site",
    },
    {
      icon: UserCheck,
      title: "Deal Direct With The Owner",
      description: "No middlemen, straight answers",
    },
  ];

  return (
    <div data-webild-section="trust-bar" id="trust-bar" className="bg-background py-8 border-y border-[#007bff]/20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-colors"
                >
                  <div className="p-3 rounded-md bg-[#007bff]/10 text-[#00d4ff] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-accent mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}