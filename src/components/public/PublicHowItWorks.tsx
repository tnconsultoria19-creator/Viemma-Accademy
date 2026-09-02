import React from 'react';
import { 
  CheckCircle2, ArrowRight, Award, ShieldCheck, 
  Users, Briefcase, Calendar, Sparkles, Mail, Phone, ArrowUpRight, Car, Compass, MapPin
} from 'lucide-react';

interface PublicHowItWorksProps {
  onNavigate: (view: string) => void;
  onOpenApplyModal?: () => void;
}

export default function PublicHowItWorks({ onNavigate, onOpenApplyModal }: PublicHowItWorksProps) {
  return (
    <div className="w-full font-sans bg-[#F8F7F3] text-[#17372A]">
      
      {/* 1. HERO BANNER - Viemma Academy Program */}
      <section className="relative w-full bg-[#0f3024] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden dark-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Atmosphere dark-green overlay at ~50% opacity */}
        <div className="absolute inset-0 bg-[#0f3024]/50" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            Programme Overview
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl drop-shadow-md" style={{ color: '#FFFFFF' }}>
            The Viemma Academy Program
          </h1>
          
          <p className="text-base sm:text-lg font-normal max-w-2xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            A comprehensive, sponsored youth development initiative providing practical Atlantic Seaboard driver familiarisation, PrDP licensing support, and tour operator networking.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            {onOpenApplyModal && (
              <button 
                onClick={onOpenApplyModal}
                className="inline-flex items-center px-7 py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
                id="hero-apply-programme"
              >
                <span>Apply for 2026 Cohort</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}

            <button 
              onClick={() => onNavigate('eligibility-checker')}
              className="inline-flex items-center px-7 py-3.5 bg-white/10 border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
              id="hero-check-eligibility"
            >
              <span>Check Eligibility</span>
            </button>

            <button 
              onClick={() => onNavigate('driver-path')}
              className="inline-flex items-center px-7 py-3.5 bg-white/10 border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
              id="hero-driver-pathway"
            >
              <span>Drivers Pathway</span>
            </button>

            <button 
              onClick={() => onNavigate('guide-path')}
              className="inline-flex items-center px-7 py-3.5 bg-white/10 border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
              id="hero-guide-pathway"
            >
              <span>Tours &amp; Guiding</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW & SPONSORSHIP DETAILS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                COHORT STRUCTURE
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#17372A]">
                How the Program Works
              </h2>
            </div>
            
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              The Viema Academy Program bridges the gap between basic driving licensing and professional guest-ready transport excellence. Selected youth candidates receive hands-on training, regulatory fee sponsorships, and live route experience along Cape Town's premier tourism routes.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17372A]">1. Eligibility &amp; Screening</h4>
                  <p className="text-xs text-stone-600 font-light mt-0.5">South African youth (18–30) with a valid driver's license and clean criminal record.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] shrink-0">
                  <Award className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17372A]">2. Full Sponsorship Package</h4>
                  <p className="text-xs text-stone-600 font-light mt-0.5">DLTC PrDP application fees, Category P medical certification, and live route shadowing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] shrink-0">
                  <Briefcase className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17372A]">3. Industry Placement</h4>
                  <p className="text-xs text-stone-600 font-light mt-0.5">Direct introduction to leading Western Cape inbound tour operators, boutique hotels, and DMCs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsoring breakdown & Requirements */}
          <div className="bg-white border border-stone-200 p-8 rounded-2xl shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#17372A]">
              What Viemma Tours Academy Sponsors
            </h3>
            
            <ul className="space-y-3.5 text-xs text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17372A] shrink-0 mt-0.5" />
                <span><strong>DLTC PrDP Fees:</strong> Application and issue fees fully sponsored for selected candidates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17372A] shrink-0 mt-0.5" />
                <span><strong>Medical Examination:</strong> Form MC Category P certified medical evaluation covered.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17372A] shrink-0 mt-0.5" />
                <span><strong>Route Shadowing:</strong> Atlantic Seaboard, Cape Point, and Winelands hospitality familiarisation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17372A] shrink-0 mt-0.5" />
                <span><strong>Client Etiquette Masterclass:</strong> VIP guest communication, luggage safety, and emergency protocols.</span>
              </li>
            </ul>

            <div className="p-4 bg-[#F8F7F3] rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
              <span className="font-bold text-[#17372A] block">2026 Intake Inquiries &amp; Admissions:</span>
              <p>Email: <a href="mailto:info@viemmatours.africa" className="text-[#C9A227] font-bold hover:underline">info@viemmatours.africa</a></p>
              <p>Location: Atlantic Seaboard, Cape Town</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. VOCATIONAL CURRICULUM MODULES */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 pb-16 sm:pb-24">
        <div className="border-t border-stone-200 pt-16 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A227] block">
              ACADEMY CURRICULUM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">
              Core Training Milestones
            </h2>
            <p className="text-sm text-stone-600 font-light max-w-xl mx-auto">
              Structured modules designed in partnership with Western Cape hospitality operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-base text-[#17372A]">Regulatory Compliance &amp; PrDP</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Comprehensive training on South African road transport legislation, passenger liability, Form MC medical exams, and DLTC testing protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-base text-[#17372A]">Hospitality &amp; Guest Etiquette</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                International guest handling, luggage care, professional grooming standards, the LEARN service recovery model, and proactive communication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8EEE9] flex items-center justify-center text-[#17372A] font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-base text-[#17372A]">Route Knowledge &amp; Shadowing</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Hands-on navigation along Chapman's Peak Drive, Table Mountain cableway access points, Cape Point National Park, and Franschhoek wine corridors.
              </p>
            </div>
          </div>

          {/* Bottom Actions Banner */}
          <div className="bg-[#17372A] text-white p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs dark-section">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-white">Interested in the 2026 Programme?</h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                Ready to take your tourism career to the next level? Check your prerequisites or submit your sponsored cohort application.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onOpenApplyModal && (
                <button
                  onClick={onOpenApplyModal}
                  className="px-8 py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-sm"
                  id="programme-cta-apply"
                >
                  Apply Now
                </button>
              )}
              <button
                onClick={() => onNavigate('eligibility-checker')}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
                id="programme-cta-eligibility"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
