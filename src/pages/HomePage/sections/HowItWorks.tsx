import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { PhoneCall, Container, Wrench, Truck } from 'lucide-react';

export default function HowItWorksSection(): React.JSX.Element {
  const steps = [
    {
      number: "01",
      title: "Call or Request a Quote",
      description: "Contact our team directly to discuss your spatial needs, timeline, and budget.",
      icon: PhoneCall,
    },
    {
      number: "02",
      title: "Pick Your Size and Condition",
      description: "Select between 20ft, 40ft, or High Cube containers in 1-Trip or Used condition.",
      icon: Container,
    },
    {
      number: "03",
      title: "We Build Your Modifications",
      description: "Our in-house fabrication team installs doors, windows, paint, and custom features.",
      icon: Wrench,
    },
    {
      number: "04",
      title: "We Deliver and Place It",
      description: "We haul directly to your site and position the container exactly where you need it.",
      icon: Truck,
    },
  ];

  return (
    <section data-webild-section="how-it-works" id="how-it-works" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="How It Works"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              A straightforward four-step process from initial quote to final site delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className="flex flex-col gap-4 p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all relative h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#00d4ff]/40 font-mono">
                      {step.number}
                    </span>
                    <div className="p-2 rounded bg-[#007bff]/10 text-[#00d4ff]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-accent text-sm leading-relaxed">
                    {step.description}
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