import React from 'react';
import { Compass, Lightbulb, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Building, FileCheck, DollarSign } from 'lucide-react';

interface PublicStartBusinessProps {
  onNavigate: (view: string) => void;
}

export default function PublicStartBusiness({ onNavigate }: PublicStartBusinessProps) {
  const businessIdeas = [
    {
      title: "Local Walking & Storytelling Tours",
      category: "Guiding & Culture",
      desc: "Monetize cultural history, architecture, local culinary hotspots, or scenic coastal walks in Sea Point, Bo-Kaap, and Camps Bay. List directly on Airbnb Experiences, GetYourGuide, and TripAdvisor.",
      investment: "Low (R500 - R2,500 initial setup)",
      revenue: "R350 - R850 per guest per walking tour",
      icon: Compass
    },
    {
      title: "Airport & Private Scenic Shuttles",
      category: "Transport & Driving",
      desc: "Provide boutique airport transfers and bespoke peninsula private drives using a clean, commercially permitted passenger vehicle. Partner with boutique Atlantic Seaboard guesthouses and Airbnb hosts.",
      investment: "Medium (Requires valid PrDP, passenger liability & roadworthy vehicle)",
      revenue: "R600 - R1,200 per transfer | R2,500+ full-day peninsula tour",
      icon: Building
    },
    {
      title: "Boutique Retreats & Speciality Itineraries",
      category: "Event Planning & Logistics",
      desc: "Coordinate tailored day experiences: photography outings, corporate wine tastings, sunset peninsula yoga retreats, or hiking expeditions. Manage guest logistics, catering, and transport.",
      investment: "Low (Deposit-based operations)",
      revenue: "R1,500 - R4,000 per coordinated package",
      icon: Calendar
    }
  ];

  const startupChecklist = [
    {
      step: "1. Define Your Specific Niche & Customer Profile",
      detail: "Identify whether your service targets luxury hotel guests, backpackers, culinary tourists, or business travelers. A sharp focus yields higher conversions."
    },
    {
      step: "2. CIPC Company Registration (Pty Ltd)",
      detail: "Register your private company online via CIPC (Companies and Intellectual Property Commission) for ~R175 to obtain your legal company registration number and tax reference."
    },
    {
      step: "3. SARS Tax Compliance & Business Bank Account",
      detail: "Open a dedicated business banking account (FNB, Standard Bank, Capitec Business, etc.) and register on SARS eFiling for corporate tax compliance."
    },
    {
      step: "4. Professional Guiding Badges or Passenger Permits (PrDP)",
      detail: "If driving passengers, hold a valid PrDP Category P and operating license. If guiding paid groups, ensure CATHSSETA registration with Western Cape DEDAT."
    },
    {
      step: "5. Comprehensive Passenger Liability Insurance",
      detail: "Essential protection against unexpected road, health, or logistics incidents. Leading insurers offer specific tourism passenger and public liability packages."
    },
    {
      step: "6. Digital Channels & Direct Booking System",
      detail: "Set up a Google Business profile, Instagram showcase, WhatsApp Business catalogue, and list on major international OTA booking aggregators (Airbnb Experiences, Viator)."
    }
  ];

  return (
    <div className="w-full font-sans bg-[#F8F7F3] text-[#17372A]">
      
      {/* 1. HERO */}
      <section className="relative w-full border-b border-stone-200 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 bg-[#0f3024] overflow-hidden dark-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Atmosphere dark-green overlay at ~50% opacity */}
        <div className="absolute inset-0 bg-[#0f3024]/50" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            Entrepreneurship Roadmap
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Start a Tourism Venture in Cape Town
          </h1>
          
          <p className="text-base sm:text-lg font-normal max-w-3xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Do not just wait for an opening—create your own business. Learn how to launch small-scale, high-margin, scalable tourism operations in the Western Cape with practical compliance and business guidance.
          </p>
        </div>
      </section>

      {/* 2. VENTURE IDEAS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 space-y-12">
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Viable Business Models</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">High-Potential Micro-Tourism Ventures</h2>
          <p className="text-sm text-stone-600 font-light max-w-2xl">
            Realistic, tested concepts you can launch with foundational training and licensing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessIdeas.map((biz, idx) => {
            const IconComponent = biz.icon;
            return (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C9A227] transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-[#17372A] border border-stone-200">
                    <IconComponent className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#17372A] bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                    {biz.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#17372A]">{biz.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">{biz.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-stone-100 text-xs">
                  <div className="text-stone-600">
                    <span className="font-bold text-[#17372A]">Startup Capital:</span> {biz.investment}
                  </div>
                  <div className="text-[#C9A227] font-semibold">
                    <span className="font-bold text-[#17372A]">Potential Revenue:</span> {biz.revenue}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LEGAL & REGULATORY CHECKLIST */}
      <section className="bg-white border-y border-stone-200 py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Statutory Compliance</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">6-Step Legal Startup Checklist</h2>
            <p className="text-sm text-stone-600 font-light max-w-2xl">
              Follow South African laws and Western Cape regional bylaws to ensure your tourism venture is fully compliant from day one.
            </p>
          </div>

          <div className="space-y-4">
            {startupChecklist.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#F8F7F3] border border-stone-200 rounded-xl flex items-start gap-4 hover:border-[#C9A227] transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#17372A]">{item.step}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="bg-[#17372A] text-white rounded-2xl p-10 sm:p-14 text-center space-y-6 dark-section">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Academy Mentorship</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">Need Business Coaching &amp; Licensing Support?</h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Viemma Tours Academy members gain access to direct industry mentoring, booking management support, and verified hotel concierge referral networks.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-3.5 bg-white text-[#17372A] hover:bg-[#C9A227] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-sm"
            >
              The Programme
            </button>
            <button
              onClick={() => onNavigate('application-gateway')}
              className="px-8 py-3.5 bg-[#C9A227] text-[#17372A] hover:bg-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
            >
              Apply for 2026 Cohort
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
