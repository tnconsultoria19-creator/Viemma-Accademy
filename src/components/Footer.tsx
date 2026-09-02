import React from 'react';
import { 
  Compass, ExternalLink, ShieldCheck, Mail, 
  Phone, MapPin, Download, Heart, ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative w-full text-stone-300 font-sans text-xs overflow-hidden dark-section">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/2885986/pexels-photo-2885986.jpeg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f231b]/70 via-[#0f231b]/60 to-[#0f231b]/80" />

      {/* Main Footer Container */}
      <div className="relative z-10">
        
        {/* 1. UPPER FOOTER: 4 DISTINCT COLUMNS */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: COMPANY (Links to the 3 pages) */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
              Company
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('driver-path')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Drivers Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('guide-path')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Tours &amp; Guiding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('how-it-works')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  The 2026 Programme
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('eligibility-checker')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Check Eligibility
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
              Help &amp; Support
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              <li>
                <button 
                  onClick={() => onNavigate('eligibility-checker')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Application Screening
                </button>
              </li>
              <li>
                <a 
                  href="https://www.westerncape.gov.za/edat/service/registration-tourist-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1"
                >
                  <span>DEDAT Registrar Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#C9A227]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.za/services/driving-licence/apply-professional-driving-permit-prdp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1"
                >
                  <span>PrDP License Guide</span>
                  <ExternalLink className="w-3 h-3 text-[#C9A227]" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: OFFICIAL RESOURCES */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
              Official Downloads
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              <li>
                <a 
                  href="https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/dedat_tourism_safety_unit_strategy.pdf&type=file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>WC Tourism Safety Strategy</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/05.27%20DEDAT%20FAQ%20Tourists%20Guide_R1.pdf&type=file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>DEDAT Tourist Guide FAQ</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/26.%20WC%20quality%20and%20service%20excellence%20toolkit.pdf&type=file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Service Excellence Toolkit</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/tourism_-act_3-_of_2014_0.pdf&type=file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Tourism Act 3 of 2014</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: VIEMMA TOURS ACADEMY */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc366uzOWFLPWyEuBIMhicbjT2GajlyGrsVyeSDE68ap9hBFEamMNA78eyvIPmA-MVNbGhtCBwzKlk29IttM_jygwrCJXjmUdZt6iijoXLFzRyBcrcb_C-oH3KxcsenhczLCRl7RfOtKSy_7o02kbNgJ29iMA?key=KPDE2Lo8HhnJ3v--HqdAAw" 
                alt="Viemma Tours Academy" 
                className="h-10 w-auto bg-white/10 p-1 rounded-md"
                referrerPolicy="no-referrer"
              />
              <span className="font-sans font-bold text-sm tracking-wide text-white">VIEMMA ACADEMY</span>
            </div>
            <p className="text-[12px] leading-relaxed text-stone-300">
              A dedicated vocational initiative in the Atlantic Seaboard empowering young South Africans with open career licensing roadmaps and selective high-touch sponsorships.
            </p>
            <div className="pt-1 text-[11px] text-stone-400">
              <p>Atlantic Seaboard &bull; Cape Town, South Africa</p>
              <a href="mailto:info@viemmatours.africa" className="mt-1 block text-[#C9A227] hover:underline">info@viemmatours.africa</a>
            </div>
          </div>

        </div>

        {/* 2. BOTTOM UTILITY BAR */}
        <div className="border-t border-white/10 bg-black/40 py-6 px-6 sm:px-8 lg:px-12 text-[11px]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Copyright & Policy Links */}
            <div className="flex items-center gap-4 text-stone-400">
              <span>&copy; {new Date().getFullYear()} Viemma Tours Academy.</span>
              <button onClick={() => onNavigate('home')} className="hover:text-white">Privacy Policy</button>
              <span>&bull;</span>
              <button onClick={() => onNavigate('home')} className="hover:text-white">Terms &amp; Conditions</button>
            </div>

            {/* Right: Currency & Language Switcher */}
            <div className="flex items-center gap-5 text-stone-400">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-stone-500">Currency:</span>
                <span className="text-white font-medium">ZAR (R)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-stone-500">Language:</span>
                <span className="text-white font-medium">English</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}
