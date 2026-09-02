import React from 'react';
import { GraduationCap, ExternalLink, Download, FileText, ShieldCheck, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Resource } from '../../types';

interface PublicFundingResourcesProps {
  onNavigate: (view: string) => void;
  resources?: Resource[];
  onOpenApplyModal?: () => void;
}

export default function PublicFundingResources({ onNavigate, resources = [], onOpenApplyModal }: PublicFundingResourcesProps) {
  const fundingSources = [
    {
      title: "CATHSSETA Sector Learnerships",
      category: "Government Statutory Authority",
      desc: "The Culture, Arts, Tourism, Hospitality and Sport Sector Education and Training Authority offers accredited learnerships and training grants for youth in tourism.",
      coverage: "Tuition fees, monthly training allowance stipend, and practical work placement.",
      link: "https://cathsseta.org.za/",
      tag: "Statutory Grants"
    },
    {
      title: "NSFAS TVET College Bursaries",
      category: "National Financial Aid",
      desc: "Covers National Diploma programs in Tourism Management, Hospitality Operations, and Food & Beverage management at public TVET colleges in the Western Cape.",
      coverage: "100% tuition, prescribed learning materials, and transport/living allowances.",
      link: "https://www.nsfas.org.za/",
      tag: "Tuition Aid"
    },
    {
      title: "National Department of Tourism (NDT) Youth Initiatives",
      category: "National Government",
      desc: "Periodic specialized programs including the National Tourism Guiding Development Programme, Wine Service Training, and Food Safety Quality Assurers.",
      coverage: "Direct course accreditation, exam fees, and practical site placements.",
      link: "https://www.tourism.gov.za/",
      tag: "Government Programme"
    },
    {
      title: "TETA Transport Sector Learnerships",
      category: "Transport Authority",
      desc: "Transport Education and Training Authority funding for professional driver qualifications, passenger transport licensing, and commercial road safety skills.",
      coverage: "PrDP Category P testing, code 8/10/14 advanced driver assessments, and stipends.",
      link: "https://www.teta.org.za/",
      tag: "Driver Subsidies"
    }
  ];

  const officialDownloads = [
    {
      title: "Western Cape Tourist Guide Registration Guidelines (DEDAT)",
      file: "DEDAT_Tourist_Guide_Registration_Pack_2026.pdf",
      desc: "Official statutory registration checklist, certified document requirements, and regional registrar submission guide.",
      size: "1.4 MB"
    },
    {
      title: "NaTIS Professional Driving Permit (PrDP) Application Pack",
      file: "NaTIS_PrDP_Form_PD1_and_Medical_Certificate.pdf",
      desc: "Form PD1, Form MC (Medical Certificate for PrDP), and driving license testing center checklist.",
      size: "820 KB"
    },
    {
      title: "Tourism Professional CV & Profile Template (ATS-Ready)",
      file: "Viemma_Academy_Tourism_CV_Template_2026.docx",
      desc: "Standardized resume format preferred by Cape Town luxury hotels, tour operators, and destination management companies.",
      size: "450 KB"
    },
    {
      title: "Western Cape Tourism Safety & Code of Conduct Protocol",
      file: "Western_Cape_Tourism_Safety_Charter.pdf",
      desc: "Emergency procedures, tourist support unit contact numbers, and industry safety standards for drivers and guides.",
      size: "2.1 MB"
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
            Statutory &amp; Financial Aid
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Funding, Bursaries &amp; Statutory Resources
          </h1>
          
          <p className="text-base sm:text-lg font-normal max-w-3xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Financial barriers should not prevent dedicated youth from entering South Africa's vibrant tourism sector. Access verified government funding bodies, bursary links, and official regulatory documents.
          </p>
        </div>
      </section>

      {/* 2. FUNDING DIRECTORY */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16 space-y-12">
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Subsidies &amp; Learnerships</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">Official Tourism Funding Bodies</h2>
          <p className="text-sm text-stone-600 font-light max-w-2xl">
            Established statutory authorities and financial aid schemes that support accredited vocational education in South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fundingSources.map((f, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C9A227] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#17372A] bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                    {f.category}
                  </span>
                  <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#17372A]">{f.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">{f.desc}</p>
                <div className="p-4 bg-[#F8F7F3] rounded-lg border border-stone-200/80 text-xs text-stone-700">
                  <strong className="text-[#17372A] font-semibold">What is covered:</strong> {f.coverage}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <a 
                  href={f.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#17372A] hover:text-[#C9A227] transition-colors"
                >
                  <span>Visit Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OFFICIAL STATUTORY DOWNLOADS */}
      <section className="bg-white border-y border-stone-200 py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">Verified Documentation</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#17372A]">Essential Downloads &amp; Forms</h2>
            <p className="text-sm text-stone-600 font-light max-w-2xl">
              Save time with our curated library of official government gazette forms, application packs, and industry preparation templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officialDownloads.map((doc, idx) => (
              <div key={idx} className="p-6 bg-[#F8F7F3] border border-stone-200 rounded-xl flex items-start justify-between gap-4 hover:border-[#C9A227] transition-all">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <FileText className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-mono text-[11px]">{doc.file}</span>
                    <span>&bull;</span>
                    <span>{doc.size}</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#17372A]">{doc.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{doc.desc}</p>
                </div>
                <button
                  onClick={() => alert(`Starting download: ${doc.file}`)}
                  className="p-3 bg-white border border-stone-300 rounded-lg text-[#17372A] hover:bg-[#17372A] hover:text-white transition-all shrink-0 cursor-pointer shadow-xs"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA TO CHECK ELIGIBILITY */}
      <section className="py-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="bg-[#17372A] text-white rounded-2xl p-10 sm:p-14 text-center space-y-6 dark-section">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em]">2026 Atlantic Seaboard Cohort</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">Need Direct Sponsorship for Your PrDP or Guiding Badge?</h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Viemma Tours Academy sponsors medical examinations, testing center fees, First Aid certifications, and practical job shadowing for selected Cape Town candidates.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('eligibility-checker')}
              className="px-8 py-3.5 bg-[#C9A227] hover:bg-white text-[#17372A] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer shadow-sm"
            >
              Check Eligibility (60 Sec)
            </button>
            <button
              onClick={() => onOpenApplyModal ? onOpenApplyModal() : onNavigate('eligibility-checker')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-[#17372A] border border-white/30 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-lg cursor-pointer"
              id="funding-apply-btn"
            >
              Apply for Programme
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
