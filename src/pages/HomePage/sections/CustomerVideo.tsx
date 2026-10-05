import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';

export default function CustomerVideoSection(): React.JSX.Element {
  return (
    <section data-webild-section="customer-video" id="customer-video" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col gap-10 items-center">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="Hear It From a Customer"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg">
              Watch real feedback from a client who built their custom container setup with us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl bg-card border border-[#007bff] shadow-2xl shadow-[#007bff]/20 overflow-hidden mx-auto">
            <iframe
              src="https://www.youtube.com/embed/WmZg0Va3hqA"
              title="Hear It From a Customer"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}