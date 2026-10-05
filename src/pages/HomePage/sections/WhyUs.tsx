import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { UserCheck, Users, Hammer, MessageSquareCheck, Compass, PhoneCall } from 'lucide-react';

export default function WhyUsSection(): React.JSX.Element {
  const points = [
    {
      title: "Owner-Operated",
      description: "You deal direct with the owner on every project. Expect direct accountability, pride in workmanship, and honest commitments.",
      icon: UserCheck,
    },
    {
      title: "One Team From Sale to Delivery",
      description: "We handle your container from initial consultation through custom fabrication and final site drop-off. No hand-offs or middleman delays.",
      icon: Users,
    },
    {
      title: "Built to Order",
      description: "Every modification is tailored specifically to your exact operational requirements. We do not force cookie-cutter setups on custom builds.",
      icon: Hammer,
    },
    {
      title: "Straight Answers",
      description: "Get clear pricing, honest lead times, and realistic site feasibility feedback up front. We value transparent communication over quick sales.",
      icon: MessageSquareCheck,
    },
    {
      title: "We Handle the Site Prep",
      description: "Our experts assist with ground leveling guidance and concrete pad placement advice. We ensure your container sits stable, square, and level.",
      icon: Compass,
    },
    {
      title: "Reachable 24/7",
      description: "Urgent site needs and project questions don't strictly keep standard business hours. Reach our team anytime for direct assistance.",
      icon: PhoneCall,
    },
  ];

  return (
    <section data-webild-section="why-us" id="why-us" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="Why California Container Works"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Local expertise, direct owner accountability, and dedicated service across CA, AZ, and NV.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.08}>
                <div className="flex flex-col gap-3 p-6 rounded-lg bg-card border border-[#007bff]/30 hover:border-[#007bff] transition-all h-full">
                  <div className="p-2.5 rounded bg-[#007bff]/10 text-[#00d4ff] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {pt.title}
                  </h3>
                  <p className="text-accent text-sm leading-relaxed">
                    {pt.description}
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