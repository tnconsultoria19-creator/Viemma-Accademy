import React, { useState } from 'react';
import { 
  Car, CheckCircle2, AlertCircle, ExternalLink, ArrowRight, 
  MapPin, ShieldCheck, FileText, HelpCircle, DollarSign, Clock,
  Download, Globe, ChevronRight, Check
} from 'lucide-react';

interface PublicDriverPathProps {
  onNavigate: (view: string) => void;
}

export default function PublicDriverPath({ onNavigate }: PublicDriverPathProps) {
  const [activeTab, setActiveTab] = useState<'todo' | 'duration' | 'cost' | 'forms' | 'contact'>('todo');

  return (
    <div className="w-full font-sans bg-[#F8F7F3] text-[#17372A]">
      
      {/* 1. EDITORIAL HEADER & TITLE AREA */}
      <section className="relative w-full border-b border-stone-200 py-16 sm:py-20 px-6 sm:px-12 lg:px-16 overflow-hidden bg-[#0f3024] dark-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/31627609/pexels-photo-31627609.jpeg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Atmosphere dark-green overlay at ~50% opacity */}
        <div className="absolute inset-0 bg-[#0f3024]/50" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            CAREER PATHWAY &bull; DRIVERS
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Professional Tourism Driver Guide
          </h1>

          <p className="text-base sm:text-lg font-normal leading-relaxed max-w-3xl drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            If you drive people around as part of your job, or operate passenger and tourist transport in the Western Cape, you must hold a valid Professional Driving Permit (PrDP) and adhere to national transport regulations.
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">STATUTORY REQUIREMENT</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Professional Driving Permit (PrDP Category P)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                  To operate passenger vehicles, shuttle services, or tourist transfer vehicles in Cape Town, drivers must hold a valid PrDP in addition to their Code 8 or Code 10 driving licence.
                </p>

                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#17372A]">PrDP Vehicle Categories</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 font-light">
                    <li>Light motor vehicles transporting passengers for reward (shuttle and tour sedan).</li>
                    <li>Minibuses designed to carry 12 or more people (e.g. Toyota Quantum).</li>
                    <li>Buses designed to carry more than 35 people (Code 14 + PrDP).</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#17372A]">Statutory Prerequisites</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Age Requirement
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Must be at least 21 years old for Category P (Passengers).</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Valid Driving Licence
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Must hold a valid South African driving licence for the class of vehicle.</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Medical Fitness
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Pass Form MC medical exam by a registered medical practitioner.</p>
                    </div>

                    <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200">
                      <h4 className="font-bold text-sm text-[#17372A] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                        Police Clearance
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">Clean criminal record with no driving under the influence or violent offences.</p>
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
                    Application Duration &amp; Turnaround
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-stone-700 font-light leading-relaxed">
                  <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#17372A]">PrDP Processing Time</h4>
                      <p className="text-xs text-stone-600 mt-1">Typically takes 4 to 8 weeks from the date of biometric capture and application submission at your local DLTC (Driving Licence Testing Centre).</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#17372A]">Validity Period</h4>
                      <p className="text-xs text-stone-600 mt-1">A PrDP is valid for 24 months (2 years) from the date of issue. Renewal requires a new medical evaluation and police clearance.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COST TAB */}
            {activeTab === 'cost' && (
              <div className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227] block">FINANCES &amp; SPONSORSHIP</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A] mt-1">
                    Statutory Costs &amp; Academy Sponsorship
                  </h2>
                </div>

                <div className="space-y-4">
                  <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#17372A] text-white uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3">Fee Component</th>
                        <th className="p-3">Estimated Cost</th>
                        <th className="p-3">Viemma Academy Cohort</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-medium">DLTC Application Fee</td>
                        <td className="p-3">~R180 - R250</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Form MC Medical Examination</td>
                        <td className="p-3">~R350 - R600</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Card Issue Fee</td>
                        <td className="p-3">~R150 - R220</td>
                        <td className="p-3 text-emerald-800 font-bold">100% Sponsored</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hospitality Driving Masterclass</td>
                        <td className="p-3">Commercial value R4,500</td>
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
                    Official Links &amp; Resources
                  </h2>
                </div>
                <div className="space-y-3">
                  <a href="https://www.westerncape.gov.za" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 hover:border-[#17372A] transition-all">
                    <span className="text-sm font-bold text-[#17372A]">Western Cape DEDAT Official Portal</span>
                    <ExternalLink className="w-4 h-4 text-stone-500" />
                  </a>
                  <a href="https://www.gov.za" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#F8F7F3] rounded-lg border border-stone-200 hover:border-[#17372A] transition-all">
                    <span className="text-sm font-bold text-[#17372A]">NaTIS Online Booking Services</span>
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
                  For inquiries regarding the 2026 Viemma Academy Program sponsored cohort or application assistance, contact our Atlantic Seaboard office:
                </p>
                <div className="p-5 bg-[#F8F7F3] rounded-lg border border-stone-200 space-y-2">
                  <p className="text-sm font-bold text-[#17372A]">Viemma Tours Academy Admissions Office</p>
                  <p className="text-sm text-stone-600">Email: <a href="mailto:info@viemmatours.africa" className="text-[#C9A227] font-bold hover:underline">info@viemmatours.africa</a></p>
                  <p className="text-sm text-stone-600">Location: Atlantic Seaboard • Cape Town</p>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#17372A] text-white p-8 rounded-xl shadow-sm space-y-6 dark-section">
              <h3 className="font-serif text-xl font-bold text-white">Ready to begin your driving career?</h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Check your eligibility in under 2 minutes to see if you qualify for our 2026 sponsored cohort.
              </p>
              <button 
                onClick={() => onNavigate('eligibility-checker')}
                className="w-full py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-widest transition-all rounded-lg shadow-sm cursor-pointer text-center block"
                id="driver-sidebar-eligibility"
              >
                Check Eligibility
              </button>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#17372A]">Related Guide</h4>
              <button 
                onClick={() => onNavigate('guide-path')}
                className="w-full text-left p-3 bg-[#F8F7F3] rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between text-xs font-bold text-[#17372A]"
              >
                <span>Accredited Tour Guide Roadmap</span>
                <ChevronRight className="w-4 h-4 text-[#C9A227]" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
