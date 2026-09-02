import React, { useState } from 'react';
import { 
  CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, 
  MapPin, BookOpen, UserCheck, HelpCircle, XCircle, RotateCcw,
  Sparkles, Check, FileText, Mail, Download
} from 'lucide-react';

interface PublicEligibilityCheckerProps {
  onNavigate: (view: string) => void;
  onOpenApplyModal?: () => void;
}

export default function PublicEligibilityChecker({ onNavigate, onOpenApplyModal }: PublicEligibilityCheckerProps) {
  const [answers, setAnswers] = useState({
    recentLeaver: true,
    studiedTourism: true,
    saId: true,
    atlanticSeaboard: true,
    noCriminalRecord: true,
    willingToFund: true,
    careerPath: 'driver'
  });

  const [submitted, setSubmitted] = useState(false);

  const isEligible = 
    answers.recentLeaver && 
    answers.studiedTourism && 
    answers.saId && 
    answers.atlanticSeaboard && 
    answers.noCriminalRecord && 
    answers.willingToFund;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="flex-1 flex flex-col font-sans bg-[#F5F2EB] text-[#17241b]">
      
      {/* 1. HEADER HERO */}
      <section className="relative bg-[#0f3024] py-14 sm:py-20 px-6 lg:px-12 border-b border-stone-200 overflow-hidden dark-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Atmosphere dark-green overlay at ~50% opacity */}
        <div className="absolute inset-0 bg-[#0f3024]/50" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            Eligibility Assistant
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Check Programme Eligibility
          </h1>
          <p className="text-sm sm:text-base font-normal max-w-2xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Answer 6 quick questions to see if you meet the baseline criteria for the 2026 Viemma Academy sponsored development intake.
          </p>
        </div>
      </section>

      {/* 2. QUESTIONNAIRE OR RESULTS */}
      <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-7 sm:p-9 rounded-2xl bg-white border border-[#e0dbce] shadow-xs space-y-8">
            <div className="border-b border-[#e0dbce] pb-4">
              <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em] block">Step 1 of 1</span>
              <h2 className="font-serif text-2xl font-bold text-[#17241b]">Prerequisite Assessment</h2>
              <p className="text-xs text-[#4a544d] mt-1">
                Your responses are evaluated instantly without saving any personal information.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Question: Pathway */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#17241b] block">
                  1. Which career pathway are you pursuing?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, careerPath: 'driver' }))}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.careerPath === 'driver' 
                        ? 'border-[#17241b] bg-[#17241b] text-white shadow-xs' 
                        : 'border-[#e0dbce] bg-[#F5F2EB] text-[#17241b] hover:border-[#C9A227]'
                    }`}
                  >
                    <span className="font-serif font-bold text-sm block">Professional Tourism Driver</span>
                    <span className={`text-[11px] ${answers.careerPath === 'driver' ? 'text-white/80' : 'text-[#4a544d]'}`}>
                      PrDP &amp; medical exam sponsorship
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, careerPath: 'guide' }))}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.careerPath === 'guide' 
                        ? 'border-[#17241b] bg-[#17241b] text-white shadow-xs' 
                        : 'border-[#e0dbce] bg-[#F5F2EB] text-[#17241b] hover:border-[#C9A227]'
                    }`}
                  >
                    <span className="font-serif font-bold text-sm block">Accredited Tour Guide</span>
                    <span className={`text-[11px] ${answers.careerPath === 'guide' ? 'text-white/80' : 'text-[#4a544d]'}`}>
                      Live job shadow &amp; route coaching
                    </span>
                  </button>
                </div>
              </div>

              {/* Questions 2-7 */}
              {[
                {
                  key: 'recentLeaver',
                  title: '2. Are you a recent school leaver or young job seeker (ages 18–30)?',
                  desc: 'Priority is given to youth starting their vocational tourism career.'
                },
                {
                  key: 'studiedTourism',
                  title: '3. Do you have a strong interest or prior study in Tourism / Hospitality / Customer Service?',
                  desc: 'Demonstrated enthusiasm for Cape Town hospitality and guest experiences.'
                },
                {
                  key: 'saId',
                  title: '4. Do you hold a valid South African ID or permanent residency?',
                  desc: 'Mandatory statutory prerequisite for DLTC PrDP and CATHSSETA registration.'
                },
                {
                  key: 'atlanticSeaboard',
                  title: '5. Are you resident in the Western Cape with access to the Atlantic Seaboard?',
                  desc: 'Training, masterclasses, and practical job shadowing take place across Cape Town.'
                },
                {
                  key: 'noCriminalRecord',
                  title: '6. Do you have a clear criminal record (eligible for SAPS police clearance)?',
                  desc: 'Strict legal requirement for professional passenger transport and tour guide badges.'
                },
                {
                  key: 'willingToFund',
                  title: '7. Are you committed to attending scheduled practical training sessions and workshops?',
                  desc: 'Active attendance and punctuality are required for sponsorship maintainability.'
                }
              ].map(q => (
                <div key={q.key} className="p-4 rounded-xl bg-[#F5F2EB]/60 border border-[#e0dbce] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#17241b]">{q.title}</h4>
                      <p className="text-xs text-[#4a544d]">{q.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.key]: true }))}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          (answers as any)[q.key] === true 
                            ? 'bg-[#17241b] text-white shadow-xs' 
                            : 'bg-white border border-[#e0dbce] text-[#4a544d] hover:bg-stone-100'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.key]: false }))}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          (answers as any)[q.key] === false 
                            ? 'bg-[#C9A227] text-[#17241b] shadow-xs' 
                            : 'bg-white border border-[#e0dbce] text-[#4a544d] hover:bg-stone-100'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div className="pt-4 border-t border-[#e0dbce] flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#17241b] hover:bg-[#C9A227] text-white hover:text-[#17241b] text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xs cursor-pointer"
                id="eligibility-submit-btn"
              >
                Calculate Results
              </button>
            </div>
          </form>
        ) : (
          /* RESULT SCREEN */
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e0dbce] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#e0dbce] pb-4">
              <div className="flex items-center gap-3">
                {isEligible ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#17241b]">
                    {isEligible ? "You meet baseline eligibility!" : "You may have prerequisites to complete"}
                  </h2>
                  <p className="text-xs text-[#4a544d]">
                    {isEligible 
                      ? "You match the core requirements for the 2026 Viemma Academy cohort." 
                      : "Review the checklist below to prepare for future intakes."}
                  </p>
                </div>
              </div>

              <button 
                onClick={handleReset}
                className="p-2 rounded-lg border border-[#e0dbce] hover:bg-[#F5F2EB] text-[#17241b] text-xs font-bold flex items-center gap-1 cursor-pointer"
                title="Start over"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>

            {/* Next Steps */}
            <div className="p-6 rounded-xl bg-[#F5F2EB] border border-[#e0dbce] space-y-4">
              <h3 className="font-serif font-bold text-base text-[#17241b]">
                {isEligible ? "Recommended Next Steps" : "How to prepare"}
              </h3>
              
              <ul className="text-xs text-[#4a544d] space-y-2.5">
                {isEligible ? (
                  <>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Prepare Documentation:</strong> Certified copy of South African ID, valid driver's licence (if pursuing driver track), Matric certificate, and proof of Western Cape address.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Inquire with Admissions:</strong> Email your CV and motivation to <a href="mailto:info@viemmatours.africa" className="text-[#C9A227] font-bold hover:underline">info@viemmatours.africa</a> referencing your eligibility screening results.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Review Statutory Roadmaps:</strong> Download the Drivers Guide or Tours &amp; Guiding resources to understand the exact regulatory steps.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0 mt-1.5"></span>
                      <span>Review our free roadmaps to explore self-paced DLTC licensing or CATHSSETA college enrollments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0 mt-1.5"></span>
                      <span>You can browse 100% of our career guides, salary data, and government links freely on this site.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {isEligible && onOpenApplyModal && (
                <button
                  onClick={onOpenApplyModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A227] hover:bg-[#b08d20] text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
                  id="eligibility-apply-now-btn"
                >
                  <span>Apply for 2026 Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => onNavigate(answers.careerPath === 'driver' ? 'driver-path' : 'guide-path')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#17372A] hover:bg-[#C9A227] text-white hover:text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg shadow-sm cursor-pointer"
                id="eligibility-view-roadmap-btn"
              >
                <span>View {answers.careerPath === 'driver' ? 'Drivers' : 'Tours'} Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('resources-faq')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-stone-300 hover:border-[#17372A] text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-[#C9A227]" />
                <span>View Free Resources &amp; FAQs</span>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-200 hover:bg-stone-300 text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
                id="eligibility-change-options-btn"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Change Options</span>
              </button>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
