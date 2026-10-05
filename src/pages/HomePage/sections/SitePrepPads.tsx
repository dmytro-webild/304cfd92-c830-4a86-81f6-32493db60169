import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import ButtonArrow from '@/components/ui/ButtonArrow';
import { ShieldCheck, Compass, Layers } from 'lucide-react';

export default function SitePrepPadsSection(): React.JSX.Element {
  return (
    <section data-webild-section="site-prep-pads" id="site-prep-pads" className="bg-background py-16 border-t border-[#007bff]/20">
      <div className="w-content-width mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <ScrollReveal variant="fade-blur" className="flex-1">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00d4ff] bg-[#007bff]/10 px-3 py-1 rounded w-fit">
              Professional Site Prep
            </span>
            <TextAnimation
              tag="h2"
              variant="slide-up"
              text="Site Prep & Concrete Pads"
              gradientText={false}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            />
            <p className="text-accent text-base md:text-lg leading-relaxed">
              We level the ground and pour precision concrete pads so your container sits flat, doors stay perfectly aligned, and water drains away smoothly. Protect your investment with a solid foundation.
            </p>
            <div className="pt-2">
              <ButtonArrow
                text="Learn About Site Prep Options"
                href="/site-prep"
                variant="primary"
                className="primary-button inline-flex"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" className="flex-1 w-full">
          <div className="p-8 rounded-lg bg-card border border-[#007bff]/30 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-[#007bff]/10 text-[#00d4ff] shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Ground Leveling</h3>
                <p className="text-accent text-sm mt-1">Prevents structural twisting so container doors open and seal without sticking.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-t border-[#007bff]/15 pt-6">
              <div className="p-3 rounded bg-[#007bff]/10 text-[#00d4ff] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Concrete Pad Pouring</h3>
                <p className="text-accent text-sm mt-1">Durable, heavy-duty foundation built specifically for loaded cargo container weights.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-t border-[#007bff]/15 pt-6">
              <div className="p-3 rounded bg-[#007bff]/10 text-[#00d4ff] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Drainage Protection</h3>
                <p className="text-accent text-sm mt-1">Engineered slope ensures rainwater drains away, preventing rust and undercarriage damage.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}