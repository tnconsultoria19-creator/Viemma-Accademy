import React, { useState } from 'react';
import { 
  BookOpen, FileText, ExternalLink, HelpCircle, Download, 
  Search, Award, DollarSign, Car, Compass, ChevronDown, ChevronUp,
  Share2, Check, Mail, Globe, Sparkles, Building2, ShieldCheck, MapPin, Copy
} from 'lucide-react';
import { Resource } from '../../types';

interface PublicResourcesFaqProps {
  resources?: Resource[];
  onNavigate: (view: string) => void;
}

export default function PublicResourcesFaq({ onNavigate }: PublicResourcesFaqProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'downloads', label: 'PDFs & Guides' },
    { id: 'portals', label: 'Official Portals' },
    { id: 'foundation', label: 'Tourism 101' },
    { id: 'licensing', label: 'Licences & PrDP' },
    { id: 'guiding', label: 'Tour Guiding' },
  ];

  // Comprehensive verified resource list with explicit download vs portal indicator
  const items = [
    {
      id: 'res-wc-strategy',
      title: 'WC Tourism Safety Strategy',
      dept: 'Department of Economic Development and Tourism (DEDAT)',
      type: 'download',
      format: 'PDF Document (2.4 MB)',
      category: 'downloads',
      path: 'both',
      url: 'https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/dedat_tourism_safety_unit_strategy.pdf&type=file',
      description: 'Official provincial policy on visitor safety units, incident support, and destination stewardship in Cape Town and the Western Cape.'
    },
    {
      id: 'res-wc-guide-faq',
      title: 'DEDAT Tourist Guide FAQ',
      dept: 'Western Cape Provincial Registrar of Tourist Guides',
      type: 'download',
      format: 'PDF Document (1.1 MB)',
      category: 'downloads',
      path: 'guide',
      url: 'https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/05.27%20DEDAT%20FAQ%20Tourists%20Guide_R1.pdf&type=file',
      description: 'Registration requirements, code of ethics, CATHSSETA verification, First Aid Level 1 guidelines, and badge renewal.'
    },
    {
      id: 'res-wc-quality-toolkit',
      title: 'Service Excellence Toolkit',
      dept: 'Western Cape Government (DEDAT)',
      type: 'download',
      format: 'PDF Document (3.8 MB)',
      category: 'downloads',
      path: 'both',
      url: 'https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/26.%20WC%20quality%20and%20service%20excellence%20toolkit.pdf&type=file',
      description: 'Hospitality benchmark guide, service recovery principles, and practical customer excellence checklists.'
    },
    {
      id: 'res-tourism-act',
      title: 'Tourism Act 3 of 2014',
      dept: 'Government Gazette of South Africa',
      type: 'download',
      format: 'PDF Document (1.5 MB)',
      category: 'downloads',
      path: 'guide',
      url: 'https://www.westerncape.gov.za/edat/files/wcg-blob-files?file=2024-10/tourism_-act_3-_of_2014_0.pdf&type=file',
      description: 'National legislative act governing tour guide compliance, tourist safety mandates, and legal standards.'
    },
    {
      id: 'res-drivers-guide-pdf',
      title: 'Drivers Guide',
      dept: 'Viemma Academy Transport Unit',
      type: 'download',
      format: 'PDF Roadmap (1.8 MB)',
      category: 'downloads',
      path: 'driver',
      url: 'https://www.westerncape.gov.za',
      description: 'Comprehensive statutory guide for Professional Tourism Drivers covering Code 8/10, PrDP Category P, and guest transport.'
    },
    {
      id: 'res-tours-guiding-pdf',
      title: 'Tours & Guiding',
      dept: 'Viemma Academy Vocational Unit',
      type: 'download',
      format: 'PDF Roadmap (2.1 MB)',
      category: 'downloads',
      path: 'guide',
      url: 'https://www.westerncape.gov.za',
      description: 'Complete roadmap for tourist guides, CATHSSETA NQF qualification, and Western Cape Provincial Registrar registration.'
    },
    {
      id: 'res-portal-dedat',
      title: 'DEDAT Guide Registration Portal',
      dept: 'Western Cape Government',
      type: 'portal',
      format: 'Government Web Application',
      category: 'portals',
      path: 'guide',
      url: 'https://www.westerncape.gov.za/edat/service/registration-tourist-guide',
      description: 'Official provincial portal to apply for new tourist guide registration or renew existing registrations.'
    },
    {
      id: 'res-portal-natis',
      title: 'NaTIS Online PrDP Booking',
      dept: 'Road Traffic Management Corporation (RTMC)',
      type: 'portal',
      format: 'National Traffic System',
      category: 'portals',
      path: 'driver',
      url: 'https://online.natis.gov.za',
      description: 'Official portal to book DLTC appointments for PrDP renewals and driver testing in the Western Cape.'
    },
    {
      id: 'res-portal-cathsseta',
      title: 'CATHSSETA Qualifications Portal',
      dept: 'Culture, Arts, Tourism SETA',
      type: 'portal',
      format: 'SETA Accreditation Directory',
      category: 'portals',
      path: 'guide',
      url: 'https://cathsseta.org.za',
      description: 'Verify accredited training providers for National Certificates in Tourist Guiding (NQF Levels 2 & 4).'
    }
  ];

  const faqs = [
    {
      q: "What is the difference between a Driver and a Tour Guide in Cape Town?",
      a: "A Professional Tourism Driver holds a Code 8/10/14 licence and a PrDP (Category P) to legally transport paying passengers in roadworthy vehicles. A Tourist Guide holds a CATHSSETA qualification and a DEDAT registration badge to interpret culture, flora, fauna, and heritage. In boutique tourism, dual-qualified Driver-Guides command the highest daily earnings."
    },
    {
      q: "Can I apply for a PrDP if I only have a standard Code 8 licence?",
      a: "Yes. You must be at least 21 years old, have held your driving licence for at least one year, pass the Form MC medical examination, and have a clear criminal record verified by SAPS fingerprint clearance."
    },
    {
      q: "How much does it cost to register as a tourist guide in the Western Cape?",
      a: "The official DEDAT registration fee is R240 for a 3-year registration and badge. However, prerequisite CATHSSETA accredited training and First Aid Level 1 certification range from R3,500 to R9,000 when self-funded (or fully sponsored for Viemma Academy cohort fellows)."
    },
    {
      q: "Is the Viemma Academy Program free for accepted youth fellows?",
      a: "Yes. For our selected 2026 intake, Viemma Tours Academy sponsors 100% of DLTC PrDP fees, Form MC medical exams, hospitality masterclasses, and practical job shadow route transport."
    },
    {
      q: "Where is the physical Tourist Guide Registration office in Cape Town?",
      a: "The Western Cape Tourist Guide Registration Office is located at NBS Waldorf Arcade, 80 St George's Mall, Cape Town. Operating hours: Mon–Fri 08h00–16h00."
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      item.category === selectedCategory ||
      (selectedCategory === 'downloads' && item.type === 'download') ||
      (selectedCategory === 'portals' && item.type === 'portal') ||
      (selectedCategory === 'licensing' && item.path === 'driver') ||
      (selectedCategory === 'guiding' && item.path === 'guide');
    
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dept.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col font-sans bg-[#F5F2EB] text-[#17241b]">
      
      {/* 1. HEADER BANNER */}
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

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase text-[#C9A227] tracking-[0.25em] block">
            Documents &amp; Support
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-md" style={{ color: '#FFFFFF' }}>
            Official Downloads &amp; Resources
          </h1>
          <p className="text-sm sm:text-base font-normal max-w-2xl leading-relaxed drop-shadow-xs" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Direct access to Western Cape government policies, Tourist Guide Registrar forms, PrDP statutory roadmaps, and frequently asked questions.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER TOOLBAR */}
      <section className="py-8 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a544d]" />
            <input 
              type="text"
              placeholder="Search forms, legislation, FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e0dbce] bg-white text-xs font-medium text-[#17241b] focus:outline-none focus:border-[#890c25]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#17241b] text-white shadow-xs'
                    : 'bg-white text-[#4a544d] border border-[#e0dbce] hover:bg-[#F5F2EB]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DOCUMENT DIRECTORY */}
      <section className="py-4 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#e0dbce] shadow-xs flex flex-col justify-between hover:border-[#890c25] transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#890c25] bg-[#890c25]/10 px-2 py-0.5 rounded">
                    {item.format}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#4a544d]">
                    {item.type === 'download' ? 'Direct PDF' : 'Official Portal'}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#17241b] group-hover:text-[#890c25] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4a544d] line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-[11px] text-[#4a544d]/70 font-medium">
                  {item.dept}
                </p>
              </div>

              <div className="pt-5 border-t border-[#e0dbce]/60 mt-4 flex items-center justify-between">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#17241b] hover:text-[#890c25] transition-colors"
                  id={`faq-link-${item.id}`}
                >
                  {item.type === 'download' ? (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Document</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-3.5 h-3.5" />
                      <span>Open Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-14 px-6 lg:px-12 max-w-5xl mx-auto w-full space-y-6">
        <div className="border-b border-[#e0dbce] pb-3">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em] block">Common Questions</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17241b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl bg-white border border-[#e0dbce] shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#17241b] hover:bg-[#F5F2EB]/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C9A227] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#4a544d] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#4a544d] leading-relaxed border-t border-[#e0dbce]/40 whitespace-pre-line bg-[#fdfcfb]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. REGISTRATION OFFICE DIRECTORY */}
      <section className="py-10 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="p-6 rounded-xl bg-white border border-[#e0dbce] shadow-xs space-y-3">
          <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-[0.25em] block">Physical In-Person Office</span>
          <h3 className="font-serif font-bold text-base text-[#17241b] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C9A227]" />
            Western Cape Tourist Guide Registration Office
          </h3>
          <p className="text-xs text-[#4a544d] leading-relaxed">
            <strong>Address:</strong> NBS Waldorf Arcade, 80 St George's Mall, Cape Town, 8001<br />
            <strong>Telephone:</strong> +27 (0)21 483 9130 | +27 (0)21 483 9000<br />
            <strong>Email:</strong> registrar.touristguides@westerncape.gov.za<br />
            <strong>Office Hours:</strong> Monday to Friday: 08h00 – 16h00
          </p>
        </div>
      </section>

    </div>
  );
}
