import React from 'react';
import ButtonArrow from '@/components/ui/ButtonArrow';
import { PhoneCall } from 'lucide-react';

export default function BottomCallBarSection(): React.JSX.Element {
  return (
    <section data-webild-section="bottom-call-bar" id="bottom-call-bar" className="sticky bottom-0 z-40 bg-[#0a0a0a]/95 backdrop-blur border-t border-[#007bff]/40 py-4 shadow-2xl">
      <div className="w-content-width mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-[#007bff] text-black animate-pulse">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">Ready to talk container options?</p>
            <p className="text-xl md:text-2xl font-black text-foreground tracking-tight">951-285-6103</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ButtonArrow
            text="Call Now"
            href="tel:9512856103"
            variant="primary"
            className="primary-button text-base px-6 py-2.5 font-bold"
          />
        </div>
      </div>
    </section>
  );
}