import React from 'react';
import { Users, ShieldCheck, Award, Phone, CheckCircle2, Heart, ExternalLink, ArrowRight, HelpCircle } from 'lucide-react';

interface PublicParentsGuideProps {
  onNavigate: (view: string) => void;
  onOpenApplyModal?: () => void;
}

export default function PublicParentsGuide({ onNavigate, onOpenApplyModal }: PublicParentsGuideProps) {
  const faqs = [
    {
      q: "Is a career in South African tourism stable or erratic?",
      a: "Tourism and luxury hospitality represent over 8% of total South African employment and is one of the Western Cape's largest economic drivers. Major properties operate under established corporate governance (Singita, Wilderness, Belmond, Marriott) offering permanent contracts, pension contributions, medical aids, and clear career ladders."
    },
    {
      q: "What is the true earning potential for professional drivers and guides?",
      a: "Accredited, professional tourist drivers and registered CATHSSETA guides earn substantially above entry-level retail or general services. With specialized knowledge (wine, cultural heritage, nature) and language skills, daily rates range from R1,200 to R2,800+ per day, plus seasonal gratuities and commissions."
    },
    {
      q: "How safe are transport and guiding work environments?",
      a: "Safety and statutory compliance are paramount. Professional drivers are legally vetted via NaTIS police clearance for their PrDP Category P permit, vehicles are commercially passenger-insured, and guides complete rigorous Level 1 First Aid certifications and provincial registrar screening before receiving an official badge."
    },
    {
      q: "Are the certifications recognized nationally and internationally?",
      a: "Yes. CATHSSETA qualifications and Department of Transport PrDP endorsements are legally recognized across South Africa. South African hospitality and guiding standards are globally respected, allowing qualified professionals to work with international operators, cruise liners, and global travel brands."
    },
    {
      q: "What does Viemma Tours Academy provide, and what does it cost my child?",
      a: "For our selected 2026 intake (5 sponsored slots), Viemma Academy covers critical financial hurdles: medical examination fees for PrDP, official testing center booking costs, First Aid Level 1 training, tailored hospitality modules, and scheduled job shadow transport & meals. The candidate invests their dedication, punctuality, and commitment."
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
            Guardian &amp; Parent Resources
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Trust, Safety &amp; Career Stability in Tourism
          </h1>
          
          <p className="text-base sm:text-lg font-normal max-w-3xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            We understand that parents and guardians seek stability, safety, and a prestigious future for their children. Learn how accredited vocational tourism builds resilient, sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* 2. CORE PILLARS OF TRUST */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 space-y-12">
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Our Commitments</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">Why Families Trust Viemma Academy</h2>
          <p className="text-sm text-stone-600 font-light max-w-2xl">
            We operate with complete statutory transparency, personal mentorship, and zero tolerance for exploitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs space-y-4 hover:border-[#C9A227] transition-all">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-[#17372A] border border-stone-200">
              <ShieldCheck className="w-6 h-6 text-[#C9A227]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17372A]">100% Accredited Pathways</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              We only train for official, legally recognized government qualifications: NaTIS PrDP permits and CATHSSETA / DEDAT registered guide badges.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs space-y-4 hover:border-[#C9A227] transition-all">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-[#17372A] border border-stone-200">
              <Award className="w-6 h-6 text-[#C9A227]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17372A]">Practical Mentorship</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Students do not learn in isolation. Every participant is paired with seasoned Cape Town tourism professionals for direct on-the-road job shadowing.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs space-y-4 hover:border-[#C9A227] transition-all">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-[#17372A] border border-stone-200">
              <Heart className="w-6 h-6 text-[#C9A227]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17372A]">Dignified Support</h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Sponsorship includes practical logistics: medical test payments, licensing fees, transportation for job shadowing, and professional grooming standards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PARENT FAQS */}
      <section className="bg-white border-y border-stone-200 py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Common Questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">Frequently Asked by Parents &amp; Guardians</h2>
            <p className="text-sm text-stone-600 font-light max-w-2xl">
              Honest answers regarding career prospects, safety protocols, and Academy expectations.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-[#F8F7F3] border border-stone-200 rounded-xl space-y-2">
                <h4 className="font-serif font-bold text-lg text-[#17372A]">{faq.q}</h4>
                <p className="text-sm text-stone-700 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRECT ADVISORY CONTACT */}
      <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="bg-[#17372A] text-white rounded-2xl p-10 sm:p-14 text-center space-y-6 dark-section">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Open Door Policy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">Speak with Our Admissions Advisory</h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            We invite parents, guardians, and community leaders to reach out directly with questions regarding our 2026 intake process, verification steps, and sponsorship commitments.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            {onOpenApplyModal && (
              <button
                onClick={onOpenApplyModal}
                className="px-8 py-3.5 bg-[#C9A227] text-[#17372A] hover:bg-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-sm"
                id="parents-apply-btn"
              >
                Apply for 2026 Intake
              </button>
            )}
            <a 
              href="mailto:info@viemmatours.africa?subject=Parent%20Enquiry%20-%20Viemma%20Tours%20Academy"
              className="px-8 py-3.5 bg-white/10 text-white hover:bg-white hover:text-[#17372A] border border-white/30 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Email Admissions Advisory</span>
            </a>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-3.5 bg-white/10 text-white hover:bg-white hover:text-[#17372A] border border-white/30 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
            >
              Read Programme Details
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
