import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { Play } from 'lucide-react';

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
          <div className="relative w-[300px] sm:w-[360px] aspect-[9/16] rounded-2xl bg-card border-2 border-[#007bff]/40 shadow-2xl overflow-hidden flex flex-col items-center justify-center group hover:border-[#007bff] transition-all">
            {/* Dark background pattern frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#002a3a]/40 via-background to-black/80 pointer-events-none" />
            
            {/* Centered Play Button */}
            <button
              aria-label="Play Customer Video"
              className="relative z-10 w-20 h-20 rounded-full bg-[#007bff] text-white flex items-center justify-center shadow-lg shadow-[#007bff]/40 group-hover:scale-110 group-hover:bg-[#00d4ff] group-hover:text-black transition-all cursor-pointer"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>

            <span className="relative z-10 text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mt-6 bg-background/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#007bff]/30">
              Customer Story Video
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}