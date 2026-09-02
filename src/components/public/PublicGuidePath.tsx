import React, { useState } from 'react';
import { 
  Compass, CheckCircle2, AlertCircle, ExternalLink, ArrowRight, 
  MapPin, Award, BookOpen, ShieldCheck, Download, Globe, Check, FileText, ChevronRight
} from 'lucide-react';

interface PublicGuidePathProps {
  onNavigate: (view: string) => void;
}

export default function PublicGuidePath({ onNavigate }: PublicGuidePathProps) {
  const [activeTab, setActiveTab] = useState<'todo' | 'duration' | 'cost' | 'forms' | 'contact'>('todo');

  return (
    <div className="w-full font-sans bg-[#F8F7F3] text-[#17372A]">
      
      {/* 1. EDITORIAL HEADER & TITLE AREA */}
      <section className="relative w-full border-b border-stone-200 py-16 sm:py-20 px-6 sm:px-12 lg:px-16 overflow-hidden bg-[#0f3024] dark-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Atmosphere dark-green overlay at ~50% opacity */}
        <div className="absolute inset-0 bg-[#0f3024]/50" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            CAREER PATHWAY &bull; TOUR GUIDES
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Accredited Tour Guide Roadmap
          </h1>

          <p className="text-base sm:text-lg font-normal leading-relaxed max-w-3xl drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Step-by-step statutory guide to obtaining your CATHSSETA NQF qualification, First Aid Level 1 certification, and Western Cape Provincial Tourist Guide badge.
          </p>
        </div>
      </section>

      {/* 2. QUICK SECTION NAVIGATION BAR */}
      <section className="bg-white border-y border-stone-200 sticky top-20 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 flex overflow-x-auto hide-scrollbar gap-8 py-4 text-xs font-bold uppercase tracking-widest text-[#17372A]">
          <button 
            onClick={() => setActiveTab('todo')}
            className={`pb-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'todo' ? 'border-[#C9A227] text-[#C9A227]' : 'border-transparent hover:text-[#C9A227]'}`}
          >
            What you should do
          </button>
          <button 
            onClick={() => setActiveTab('duration')}
            className={`pb-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'duration' ? 'border-[#C9A227] text-[#C9A227]' : 'border-transparent hover:text-[#C9A227]'}`}
          >
            How long it takes
          </button>
          <button 
            onClick={() => setActiveTab('cost')}
            className={`pb-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'cost' ? 'border-[#C9A227] text-[#C9A227]' : 'border-transparent hover:text-[#C9A227]'}`}
          >
            Cost &amp; Sponsorship
          </button>
          <button 
            onClick={() => setActiveTab('forms')}
            className={`pb-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'forms' ? 'border-[#C9A227] text-[#C9A227]' : 'border-transparent hover:text-[#C9A227]'}`}
          >
            Official Links
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`pb-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'contact' ? 'border-[#C9A227] text-[#C9A227]' : 'border-transparent hover:text-[#C9A227]'}`}
          >
            Contact
          </button>
        </div>
      </section>

      {/* 3. MAIN CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Information Panel */}
          <div className="lg:col-span-8 bg-white border border-stone-200 p-8 sm:p-12 rounded-xl space-y-10 shadow-xs">
            
            {/* WHAT TO DO */}
            {activeTab === 'todo' && (
              <div className="space-y-8">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">STATUTORY ACCREDITATION</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Tour Guide Registration Process
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                  Tourist guides are required by the Tourism Act 3 of 2014 to be officially registered to ensure visitors to the Western Cape receive professional, safe, and accurate heritage interpretation.
                </p>

                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#17372A]">Core Specialisations</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 font-light">
                    <li><strong>Culture Guiding:</strong> Cities, historical monuments, museums, and heritage routes.</li>
                    <li><strong>Nature Guiding:</strong> Flora, fauna, game reserves, and Table Mountain national parks.</li>
                    <li><strong>Adventure Guiding:</strong> Specialized outdoor and extreme sport experiences.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#17372A]">Prerequisites for DEDAT Registration</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        CATHSSETA Certificate
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">NQF Level 2 or 4 qualification certificate from an accredited training provider.</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        First Aid Level 1
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Valid First Aid Level 1 Certificate from a recognised training institution.</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Police Clearance
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Valid South African Police Service (SAPS) criminal clearance certificate.</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Identity / Work Permit
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Certified copy of South African ID document or valid work permit.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DURATION TAB */}
            {activeTab === 'duration' && (
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">TIMELINES</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Accreditation &amp; Registration Duration
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-stone-700 font-light leading-relaxed">
                  <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#17372A]">CATHSSETA Coursework</h4>
                      <p className="text-xs text-stone-600 mt-1">Full-time courses typically take 2 to 6 weeks; part-time modular tracks take 2 to 4 months.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#17372A]">DEDAT Registrar Processing</h4>
                      <p className="text-xs text-stone-600 mt-1">Registration and badge issuance through the Western Cape Department of Economic Development and Tourism typically takes 3 to 6 weeks.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COST TAB */}
            {activeTab === 'cost' && (
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">FEES &amp; BUDGET</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Statutory Registration &amp; Training Costs
                  </h2>
                </div>

                <div className="space-y-4">
                  <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#17372A] text-white uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3">Requirement</th>
                        <th className="p-3">Standard Cost</th>
                        <th className="p-3">Viemma Academy Cohort</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-medium">DEDAT 3-Year Registration &amp; Badge</td>
                        <td className="p-3">R240</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">First Aid Level 1 Certification</td>
                        <td className="p-3">~R850 - R1,200</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">SAPS Criminal Clearance</td>
                        <td className="p-3">~R160</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Practical Route Shadowing</td>
                        <td className="p-3">Commercial value R5,000</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FORMS TAB */}
            {activeTab === 'forms' && (
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">DOCUMENTS</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Official Links &amp; Legislation
                  </h2>
                </div>
                <div className="space-y-3">
                  <a href="http://www.cathsseta.org.za" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 hover:border-[#17372A] transition-all">
                    <span className="text-sm font-bold text-[#17372A]">CATHSSETA Official Website</span>
                    <ExternalLink className="w-4 h-4 text-stone-500" />
                  </a>
                  <a href="https://www.westerncape.gov.za" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 hover:border-[#17372A] transition-all">
                    <span className="text-sm font-bold text-[#17372A]">Western Cape DEDAT Tourist Guide Registrar</span>
                    <ExternalLink className="w-4 h-4 text-stone-500" />
                  </a>
                </div>
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">SUPPORT</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Who to Contact
                  </h2>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  For assistance regarding tour guide accreditation and our Atlantic Seaboard sponsored youth cohort:
                </p>
                <div className="p-5 bg-[#F8F7F3] rounded-lg border border-stone-200 space-y-2">
                  <p className="text-sm font-bold text-[#17372A]">Viemma Tours Academy Registrar Support</p>
                  <p className="text-sm text-stone-600">Email: <a href="mailto:info@viemmatours.africa" className="text-[#C9A227] font-bold hover:underline">info@viemmatours.africa</a></p>
                  <p className="text-sm text-stone-600">Location: Atlantic Seaboard • Cape Town</p>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#17372A] text-white p-8 rounded-xl shadow-sm space-y-6 dark-section">
              <h3 className="font-serif text-xl font-bold text-white">Start your guiding career today</h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Verify your qualifications and apply for the 2026 Viemma Academy Program cohort.
              </p>
              <button 
                onClick={() => onNavigate('eligibility-checker')}
                className="w-full py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-widest transition-all rounded-lg shadow-sm cursor-pointer text-center block"
                id="guide-sidebar-eligibility"
              >
                Check Eligibility
              </button>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#17372A]">Related Guide</h4>
              <button 
                onClick={() => onNavigate('driver-path')}
                className="w-full text-left p-3 bg-[#F8F7F3] rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between text-xs font-bold text-[#17372A]"
              >
                <span>Professional Tourism Driver Roadmap</span>
                <ChevronRight className="w-4 h-4 text-[#C9A227]" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
