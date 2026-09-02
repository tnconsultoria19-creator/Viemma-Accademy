import React, { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenApplyModal: () => void;
}

export default function Navbar({ 
  currentView, 
  onNavigate,
  onOpenApplyModal
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (view: string) => {
    setMobileOpen(false);
    onNavigate(view);
  };

  return (
    <header className="w-full bg-[#FAF9F5] border-b border-stone-200 px-6 sm:px-12 h-20 flex items-center justify-between sticky top-0 z-50 shadow-xs font-sans">
      
      {/* Brand Logo */}
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => handleNav('home')} 
        id="public-header-logo"
      >
        <img 
          src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc366uzOWFLPWyEuBIMhicbjT2GajlyGrsVyeSDE68ap9hBFEamMNA78eyvIPmA-MVNbGhtCBwzKlk29IttM_jygwrCJXjmUdZt6iijoXLFzRyBcrcb_C-oH3KxcsenhczLCRl7RfOtKSy_7o02kbNgJ29iMA?key=KPDE2Lo8HhnJ3v--HqdAAw" 
          alt="Viemma Tours Academy Logo" 
          className="h-11 w-auto max-w-[160px] object-contain rounded-md"
          referrerPolicy="no-referrer"
        />
        <div className="hidden sm:block">
          <span className="font-sans font-bold text-base sm:text-lg tracking-wide text-[#17372A] block leading-tight">VIEMMA TOURS ACADEMY</span>
        </div>
      </div>

      {/* Desktop Horizontal Nav Links */}
      <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] text-[#17372A]">
        <button 
          onClick={() => handleNav('driver-path')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'driver-path' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-driver"
        >
          Drivers
        </button>
        
        <button 
          onClick={() => handleNav('guide-path')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'guide-path' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-tours"
        >
          Tours
        </button>
        
        <button 
          onClick={() => handleNav('how-it-works')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'how-it-works' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-programme"
        >
          The Programme
        </button>
        
        <button 
          onClick={() => handleNav('eligibility-checker')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'eligibility-checker' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-eligibility"
        >
          Check Eligibility
        </button>

        <button 
          onClick={() => handleNav('resources-faq')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'resources-faq' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-downloads"
        >
          Free Downloads
        </button>

        <button 
          onClick={() => handleNav('funding')}
          className={`hover:text-[#C9A227] transition-colors py-1 cursor-pointer ${
            currentView === 'funding' ? 'text-[#C9A227] border-b-2 border-[#C9A227]' : ''
          }`}
          id="pub-nav-funding"
        >
          Funding
        </button>
      </nav>

      {/* Right Action */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenApplyModal}
          className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#C9A227] hover:bg-[#17372A] text-[#17372A] hover:text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-xs cursor-pointer"
          id="pub-nav-apply-now"
        >
          <span>Apply Now</span>
        </button>

        {/* Mobile hamburger toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="lg:hidden text-[#17372A] p-2 hover:bg-stone-200 rounded-lg cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-[#FAF9F5] border-b border-stone-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-2 z-50">
          <button onClick={() => handleNav('driver-path')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Drivers</button>
          <button onClick={() => handleNav('guide-path')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Tours</button>
          <button onClick={() => handleNav('how-it-works')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">The Programme</button>
          <button onClick={() => handleNav('eligibility-checker')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Check Eligibility</button>
          <button onClick={() => handleNav('resources-faq')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Free Downloads</button>
          <button onClick={() => handleNav('funding')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Funding &amp; Bursaries</button>
          <button onClick={() => handleNav('business')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Start a Business</button>
          <button onClick={() => handleNav('parents')} className="block w-full text-left py-2 font-bold uppercase text-xs text-[#17372A]">Parents' Guide</button>
          
          <div className="pt-4 border-t border-stone-200 space-y-2">
            <button 
              onClick={() => {
                setMobileOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3 bg-[#C9A227] text-[#17372A] font-bold uppercase text-xs rounded-lg text-center cursor-pointer hover:bg-[#17372A] hover:text-white transition-all shadow-xs"
            >
              Apply Now (2026 Cohort)
            </button>
            <button 
              onClick={() => handleNav('eligibility-checker')} 
              className="w-full py-3 bg-[#17372A] text-white font-bold uppercase text-xs rounded-lg text-center cursor-pointer hover:bg-[#C9A227] hover:text-[#17372A] transition-all"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
