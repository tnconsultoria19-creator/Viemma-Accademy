import React from 'react';
import { 
  Car, Compass, Award, ShieldCheck, ArrowRight, CheckCircle2, 
  FileText, Globe, ExternalLink, Download, Sparkles, BookOpen
} from 'lucide-react';
import { Resource } from '../../types';

interface PublicHomeProps {
  onNavigate: (view: string) => void;
  onOpenApplyModal?: () => void;
  resources?: Resource[];
}

export default function PublicHome({ onNavigate, onOpenApplyModal }: PublicHomeProps) {
  return (
    <div className="w-full font-sans bg-[#F8F7F3] text-[#17372A]">

      {/* 1. HERO SECTION - Refined, Editorial, Scenic Atlantic Seaboard Hero Banner */}
      <section className="relative w-full border-b border-stone-200 py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden bg-[#0f3024] dark-section">
        {/* Background image of Cape Town */}
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
            Viemma Tours Academy
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight max-w-4xl drop-shadow-md" style={{ color: '#FFFFFF' }}>
            A career with personality.
          </h1>
          
          <p className="text-base sm:text-xl font-normal max-w-2xl leading-relaxed drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Clear, practical guides for Professional Tourism Drivers, Accredited Tour Guides, and the 2026 sponsored youth cohort by Viemma Tours Academy.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('driver-path')}
              className="inline-flex items-center px-7 py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
              id="hero-explore-pathways"
            >
              <span>Explore Pathways</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            
            <button 
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center px-7 py-3.5 bg-white/10 backdrop-blur-xs border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-xs"
              id="hero-the-programme"
            >
              <span>The 2026 Programme</span>
            </button>

            <button 
              onClick={() => onNavigate('resources-faq')}
              className="inline-flex items-center px-7 py-3.5 bg-white/10 backdrop-blur-xs border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-xs"
              id="hero-free-resources"
            >
              <Download className="w-4 h-4 mr-2 text-[#C9A227]" />
              <span>Download Resources</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROMOTIONAL 3-CARD GRID (DRIVERS, GUIDES, DOWNLOADS) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
        <div className="space-y-3 mb-12">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Vocational Pathways &amp; Downloads</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">Choose Your Path or Access Free Downloads</h2>
          <p className="text-sm text-stone-600 font-light max-w-xl">Direct statutory guides, official Western Cape government roadmaps, and free downloadable toolkits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Tourism Drivers */}
          <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs hover:border-[#C9A227] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img 
                  src="https://images.pexels.com/photos/31627609/pexels-photo-31627609.jpeg" 
                  alt="Tourism Driver" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-md bg-[#17372A] flex items-center justify-center text-[#C9A227]">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    CAREER PATHWAY
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#17372A]">
                  Tourism Drivers
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  Code 8/10 license, PrDP Category P permit &amp; guest transport standards for Western Cape operators.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onNavigate('driver-path')}
                className="w-full inline-flex items-center justify-center px-5 py-3 bg-[#17372A] text-white text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#C9A227] hover:text-[#17372A] transition-all rounded-lg shadow-xs cursor-pointer"
                id="card-view-driver-roadmap"
              >
                <span>View Driver Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Tour Guiding */}
          <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs hover:border-[#C9A227] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80" 
                  alt="Tour Guide" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-md bg-[#17372A] flex items-center justify-center text-[#C9A227]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    CAREER PATHWAY
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#17372A]">
                  Tours &amp; Guiding
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  CATHSSETA NQF accreditation, First Aid Level 1 &amp; Western Cape DEDAT provincial guide registration.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onNavigate('guide-path')}
                className="w-full inline-flex items-center justify-center px-5 py-3 bg-[#17372A] text-white text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#C9A227] hover:text-[#17372A] transition-all rounded-lg shadow-xs cursor-pointer"
                id="card-view-guide-roadmap"
              >
                <span>View Guiding Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Free Resources & Downloads */}
          <div className="bg-[#E8EEE9] border border-stone-300 rounded-xl overflow-hidden shadow-xs hover:border-[#C9A227] hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#17372A] flex items-center justify-center text-[#C9A227]">
                <Download className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">
                OFFICIAL DOWNLOADS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#17372A]">
                Free Downloads
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                Download verified government PDFs, PrDP medical forms (Form MC), Tourism Act documents, and training toolkits.
              </p>
              <ul className="space-y-1 text-xs text-stone-600 font-medium">
                <li className="flex items-center gap-1.5">&bull; DEDAT Tourist Guide FAQ</li>
                <li className="flex items-center gap-1.5">&bull; WC Tourism Safety Strategy</li>
                <li className="flex items-center gap-1.5">&bull; Service Excellence Toolkit</li>
              </ul>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onNavigate('resources-faq')}
                className="w-full inline-flex items-center justify-center px-5 py-3 bg-[#17372A] text-white text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#C9A227] hover:text-[#17372A] transition-all rounded-lg shadow-xs cursor-pointer"
                id="card-view-free-downloads"
              >
                <span>Browse All Downloads</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROGRAMME HIGHLIGHT BANNER */}
      <section className="w-full bg-[#17372A] text-white py-16 px-6 sm:px-12 lg:px-16 dark-section">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight tracking-wide drop-shadow-sm">
              The Viemma Academy Program
            </h2>
            <p className="text-sm text-stone-100 font-normal leading-relaxed">
              Full sponsorship of PrDP fees, medical exams, live route shadowing along Chapman's Peak, and placement introductions with premier Western Cape operators.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            {onOpenApplyModal && (
              <button
                onClick={onOpenApplyModal}
                className="px-7 py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
                id="cta-apply-now"
              >
                Apply Now
              </button>
            )}
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
              id="cta-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('eligibility-checker')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
              id="cta-check-eligibility"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
