import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, User, Mail, Phone, 
  MapPin, Car, Compass, Calendar, Sparkles, X, FileText, Check, AlertCircle,
  GraduationCap, Award, Heart, HelpCircle
} from 'lucide-react';

interface PublicApplicationGatewayProps {
  onClose?: () => void;
  onNavigate?: (view: string) => void;
}

export default function PublicApplicationGateway({ onClose, onNavigate }: PublicApplicationGatewayProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [applicationRef, setApplicationRef] = useState<string>('');

  const [formData, setFormData] = useState({
    // Step 1: Track & Identity
    programmeTrack: 'driver',
    fullName: '',
    idType: 'sa-id',
    dateOfBirth: '',
    gender: 'prefer-not-to-say',
    location: '',
    suburb: '',

    // Step 2: Contact & Qualifications
    email: '',
    phone: '',
    educationLevel: 'matric',
    hasDriversLicense: 'code8',
    prdpStatus: 'none',
    languages: ['English', 'isiXhosa'],

    // Step 3: Motivation & Aspirations
    motivation: '',
    priorExperience: '',
    favouriteAttraction: 'Table Mountain & Atlantic Coastline',
    availability: 'full-time',
    hasCleanCriminalRecord: true,
    willingToUndertakeMedical: true,

    // Step 4: Declarations
    agreeToCodeOfConduct: false,
    agreeToAttendance: false,
    agreeToPopia: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const totalSteps = 4;

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full legal name';
      if (!formData.idType) newErrors.idType = 'Please select your identity document type';
      if (!formData.suburb.trim()) newErrors.suburb = 'Please provide your residential suburb/area';
    }

    if (step === 2) {
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please enter a valid email address';
      if (!formData.phone.trim()) newErrors.phone = 'Please provide a reachable phone or WhatsApp number';
      if (formData.programmeTrack === 'driver' && formData.hasDriversLicense === 'none') {
        newErrors.hasDriversLicense = 'A valid manual or automatic driver license (Code 8/10) is required for the Driver Track';
      }
    }

    if (step === 3) {
      if (!formData.motivation.trim() || formData.motivation.trim().length < 20) {
        newErrors.motivation = 'Please share at least 20 characters explaining your motivation';
      }
      if (!formData.hasCleanCriminalRecord) {
        newErrors.hasCleanCriminalRecord = 'A clean criminal record is a statutory prerequisite for PrDP / Guide registrar badging';
      }
    }

    if (step === 4) {
      if (!formData.agreeToCodeOfConduct) newErrors.agreeToCodeOfConduct = 'You must agree to the Viemma Academy code of conduct';
      if (!formData.agreeToAttendance) newErrors.agreeToAttendance = 'You must commit to 100% attendance requirements';
      if (!formData.agreeToPopia) newErrors.agreeToPopia = 'Please accept the POPIA data processing consent';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setLoading(true);
    setTimeout(() => {
      const generatedRef = `VTA-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationRef(generatedRef);
      setLoading(false);
      setCurrentStep(5); // Step 5 = Success Confirmation
    }, 900);
  };

  const toggleLanguage = (lang: string) => {
    if (formData.languages.includes(lang)) {
      if (formData.languages.length > 1) {
        setFormData({
          ...formData,
          languages: formData.languages.filter(l => l !== lang)
        });
      }
    } else {
      setFormData({
        ...formData,
        languages: [...formData.languages, lang]
      });
    }
  };

  const stepLabels = [
    'Track & Identity',
    'Qualifications',
    'Motivation',
    'Review & Submit'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header with Progress Step Indicator */}
        <div className="bg-[#17372A] text-white p-6 sm:p-7 relative border-b border-white/20 dark-section">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Sponsored Intake Application Form
              </h2>
              <p className="text-xs text-white/90 font-medium">
                2026 Vocational Tourism Development Programme
              </p>
            </div>

            {onClose && (
              <button 
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
                id="close-application-modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Progress Bar (Only during steps 1-4) */}
          {currentStep <= 4 && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] font-semibold text-stone-200 mb-2">
                <span>Step {currentStep} of {totalSteps}: {stepLabels[currentStep - 1]}</span>
                <span className="text-amber-300 font-bold">{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex gap-1">
                {[1, 2, 3, 4].map(stepNum => (
                  <div 
                    key={stepNum}
                    className={`h-full flex-1 rounded-full transition-all duration-300 ${
                      stepNum <= currentStep ? 'bg-amber-300' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#FAF9F5]">
          
          {/* STEP 1: TRACK & IDENTITY */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#17372A]">
                  1. Select Programme Track &amp; Identity
                </h3>
                <p className="text-xs text-stone-600">
                  Select which fully-sponsored vocational track you are applying for in 2026.
                </p>
              </div>

              {/* Track Selection Cards */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                  Chosen Specialisation Track *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, programmeTrack: 'driver' })}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      formData.programmeTrack === 'driver'
                        ? 'border-[#17372A] bg-[#17372A] text-white shadow-sm'
                        : 'border-stone-300 bg-white text-[#17372A] hover:border-[#C9A227]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#C9A227]" />
                      <span className="font-serif font-bold text-sm">Professional Driver Track</span>
                    </div>
                    <p className={`text-xs mt-1.5 leading-relaxed ${formData.programmeTrack === 'driver' ? 'text-stone-300' : 'text-stone-600'}`}>
                      PrDP Category P licensing, vehicle safety, medical exams, and Atlantic Seaboard route familiarisation.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, programmeTrack: 'guide' })}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      formData.programmeTrack === 'guide'
                        ? 'border-[#17372A] bg-[#17372A] text-white shadow-sm'
                        : 'border-stone-300 bg-white text-[#17372A] hover:border-[#C9A227]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#C9A227]" />
                      <span className="font-serif font-bold text-sm">Tour Guiding Track</span>
                    </div>
                    <p className={`text-xs mt-1.5 leading-relaxed ${formData.programmeTrack === 'guide' ? 'text-stone-300' : 'text-stone-600'}`}>
                      CATHSSETA NQF training, First Aid Level 1, DEDAT Provincial Registrar registration badge, and storytelling.
                    </p>
                  </button>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Full Legal Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Lindiwe Khumalo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white text-xs font-medium focus:outline-none focus:border-[#17372A] ${
                      errors.fullName ? 'border-red-500' : 'border-stone-300'
                    }`}
                    id="step1-fullname"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600">{errors.fullName}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Identity Document Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, idType: 'sa-id' })}
                      className={`p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        formData.idType === 'sa-id'
                          ? 'bg-[#17372A] text-white border-[#17372A]'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-[#17372A]'
                      }`}
                      id="id-type-sa"
                    >
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${formData.idType === 'sa-id' ? 'bg-[#C9A227] text-[#17372A] border-[#C9A227]' : 'border-stone-400'}`}>✓</span>
                      <span>South African ID</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, idType: 'foreign-id' })}
                      className={`p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        formData.idType === 'foreign-id'
                          ? 'bg-[#17372A] text-white border-[#17372A]'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-[#17372A]'
                      }`}
                      id="id-type-foreign"
                    >
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${formData.idType === 'foreign-id' ? 'bg-[#C9A227] text-[#17372A] border-[#C9A227]' : 'border-stone-400'}`}>✓</span>
                      <span>Foreign ID / Passport</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Residential Area / Suburb *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sea Point, Camps Bay, Maitland, Langa"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white text-xs font-medium focus:outline-none focus:border-[#17372A] ${
                      errors.suburb ? 'border-red-500' : 'border-stone-300'
                    }`}
                    id="step1-suburb"
                  />
                  {errors.suburb && <p className="text-[11px] text-red-600">{errors.suburb}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Date of Birth / Age Bracket
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 14 May 2002 (Age 23)"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-xs font-medium focus:outline-none focus:border-[#17372A]"
                    id="step1-dob"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT & QUALIFICATIONS */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#17372A]">
                  2. Contact Details &amp; Qualifications
                </h3>
                <p className="text-xs text-stone-600">
                  Provide your reachable contact lines and current statutory qualifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    placeholder="lindiwe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white text-xs font-medium focus:outline-none focus:border-[#17372A] ${
                      errors.email ? 'border-red-500' : 'border-stone-300'
                    }`}
                    id="step2-email"
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Phone / WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+27 73 987 6543"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white text-xs font-medium focus:outline-none focus:border-[#17372A] ${
                      errors.phone ? 'border-red-500' : 'border-stone-300'
                    }`}
                    id="step2-phone"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Driver's License Status *
                  </label>
                  <select 
                    value={formData.hasDriversLicense}
                    onChange={(e) => setFormData({ ...formData, hasDriversLicense: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-xs font-medium focus:outline-none focus:border-[#17372A]"
                    id="step2-license"
                  >
                    <option value="code8">Valid Code 8 (EB / B - Light Motor Vehicle)</option>
                    <option value="code10">Valid Code 10 (C1 - Heavy Vehicle / Minibus)</option>
                    <option value="learners">Valid Learner's License</option>
                    <option value="none">No Driver's License currently</option>
                  </select>
                  {errors.hasDriversLicense && <p className="text-[11px] text-red-600">{errors.hasDriversLicense}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                    Highest Education Completed
                  </label>
                  <select 
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-xs font-medium focus:outline-none focus:border-[#17372A]"
                    id="step2-education"
                  >
                    <option value="matric">National Senior Certificate (Matric / Grade 12)</option>
                    <option value="tvet">TVET Certificate / NCV Level 4</option>
                    <option value="diploma">National Diploma / Degree in Tourism/Hospitality</option>
                    <option value="other">Other High School Leaver Certificate</option>
                  </select>
                </div>
              </div>

              {/* Language proficiencies */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                  Languages Spoken Fluently
                </label>
                <div className="flex flex-wrap gap-2">
                  {['English', 'isiXhosa', 'Afrikaans', 'isiZulu', 'French', 'German', 'Spanish'].map(lang => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => toggleLanguage(lang)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                        formData.languages.includes(lang)
                          ? 'bg-[#17372A] text-white'
                          : 'bg-white text-stone-700 border border-stone-300 hover:border-[#17372A]'
                      }`}
                    >
                      {formData.languages.includes(lang) && <Check className="w-3.5 h-3.5 text-[#C9A227]" />}
                      <span>{lang}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: MOTIVATION & ASPIRATIONS */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#17372A]">
                  3. Motivation &amp; Statutory Screening
                </h3>
                <p className="text-xs text-stone-600">
                  Tell us why you want to represent Cape Town and confirm baseline statutory eligibility.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                  Why are you applying for the Viemma Academy 2026 Cohort? *
                </label>
                <textarea 
                  rows={4}
                  placeholder="Share your passion for hospitality, guiding, or safe tourist transport in the Atlantic Seaboard and Cape Town..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-xs font-medium focus:outline-none focus:border-[#17372A] ${
                    errors.motivation ? 'border-red-500' : 'border-stone-300'
                  }`}
                  id="step3-motivation"
                />
                {errors.motivation && <p className="text-[11px] text-red-600">{errors.motivation}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                  Any previous hospitality, customer service, or driving experience? (Optional)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Waiter at local cafe, volunteer guide, rideshare driver, retail assistant"
                  value={formData.priorExperience}
                  onChange={(e) => setFormData({ ...formData, priorExperience: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-xs font-medium focus:outline-none focus:border-[#17372A]"
                  id="step3-experience"
                />
              </div>

              {/* Statutory Confirmation Checks */}
              <div className="p-4 bg-white rounded-xl border border-stone-300 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#17372A] block">
                  Statutory Prerequisites Acknowledgement
                </span>

                <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
                  <input 
                    type="checkbox"
                    checked={formData.hasCleanCriminalRecord}
                    onChange={(e) => setFormData({ ...formData, hasCleanCriminalRecord: e.target.checked })}
                    className="mt-0.5 rounded border-stone-400 text-[#17372A] focus:ring-[#17372A]"
                  />
                  <span>
                    I confirm that I have a <strong>clean criminal record</strong> without disqualifying convictions (required by DEDAT &amp; National Road Traffic Act for PrDP licensing).
                  </span>
                </label>
                {errors.hasCleanCriminalRecord && (
                  <p className="text-[11px] text-red-600">{errors.hasCleanCriminalRecord}</p>
                )}

                <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
                  <input 
                    type="checkbox"
                    checked={formData.willingToUndertakeMedical}
                    onChange={(e) => setFormData({ ...formData, willingToUndertakeMedical: e.target.checked })}
                    className="mt-0.5 rounded border-stone-400 text-[#17372A] focus:ring-[#17372A]"
                  />
                  <span>
                    I am willing to undergo the sponsored official medical fitness assessment (Form MC for PrDP / First Aid certification).
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & SUBMIT */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#17372A]">
                  4. Review Summary &amp; Final Declarations
                </h3>
                <p className="text-xs text-stone-600">
                  Please review your details and accept the terms of the 2026 sponsored intake.
                </p>
              </div>

              {/* Review Summary Card */}
              <div className="bg-white p-5 rounded-xl border border-stone-300 space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider text-[10px] block">Track</span>
                    <span className="font-bold text-[#17372A] text-sm">
                      {formData.programmeTrack === 'driver' ? '🚗 Professional Driver Track' : '🧭 Tour Guiding Track'}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider text-[10px] block">Full Name</span>
                    <span className="font-bold text-[#17372A]">{formData.fullName}</span>
                    <span className="text-[10px] text-stone-500 block font-normal">({formData.idType === 'sa-id' ? 'South African ID' : 'Foreign ID / Passport'})</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider text-[10px] block">Contact</span>
                    <span className="text-stone-800">{formData.email} &bull; {formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider text-[10px] block">Location</span>
                    <span className="text-stone-800">{formData.suburb}</span>
                  </div>
                </div>

                <div>
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] block">Your Motivation</span>
                  <p className="text-stone-700 italic mt-1 leading-relaxed">
                    "{formData.motivation}"
                  </p>
                </div>
              </div>

              {/* Final Declarations Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
                  <input 
                    type="checkbox"
                    checked={formData.agreeToCodeOfConduct}
                    onChange={(e) => setFormData({ ...formData, agreeToCodeOfConduct: e.target.checked })}
                    className="mt-0.5 rounded border-stone-400 text-[#17372A] focus:ring-[#17372A]"
                    id="decl-conduct"
                  />
                  <span>
                    I commit to the <strong>Viemma Tours Academy Professional Code of Conduct</strong> and exemplary customer service standards.
                  </span>
                </label>
                {errors.agreeToCodeOfConduct && <p className="text-[11px] text-red-600">{errors.agreeToCodeOfConduct}</p>}

                <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
                  <input 
                    type="checkbox"
                    checked={formData.agreeToAttendance}
                    onChange={(e) => setFormData({ ...formData, agreeToAttendance: e.target.checked })}
                    className="mt-0.5 rounded border-stone-400 text-[#17372A] focus:ring-[#17372A]"
                    id="decl-attendance"
                  />
                  <span>
                    I understand that sponsored placements require <strong>100% punctuality and attendance</strong> for all scheduled road tests and workshop sessions.
                  </span>
                </label>
                {errors.agreeToAttendance && <p className="text-[11px] text-red-600">{errors.agreeToAttendance}</p>}

                <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-700">
                  <input 
                    type="checkbox"
                    checked={formData.agreeToPopia}
                    onChange={(e) => setFormData({ ...formData, agreeToPopia: e.target.checked })}
                    className="mt-0.5 rounded border-stone-400 text-[#17372A] focus:ring-[#17372A]"
                    id="decl-popia"
                  />
                  <span>
                    I consent to the secure storage and processing of my application data in accordance with the <strong>Protection of Personal Information Act (POPIA)</strong>.
                  </span>
                </label>
                {errors.agreeToPopia && <p className="text-[11px] text-red-600">{errors.agreeToPopia}</p>}
              </div>

              {/* Submit Action within Step 4 */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 bg-white border border-stone-300 text-[#17372A] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-stone-100 transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-[#C9A227] hover:bg-[#b08d20] text-[#17372A] text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
                  id="final-submit-application-btn"
                >
                  {loading ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: SUCCESS / CONFIRMATION */}
          {currentStep === 5 && (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-3 max-w-lg mx-auto">
                <span className="px-3 py-1 bg-[#17372A] text-[#C9A227] text-[11px] font-bold rounded-full uppercase tracking-widest">
                  Application Reference: {applicationRef}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17372A]">
                  Application Successfully Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your application for the 2026 Viemma Academy sponsored <strong>{formData.programmeTrack === 'driver' ? 'Professional Tourism Driver' : 'Accredited Tour Guide'}</strong> cohort has been received.
                </p>
              </div>

              {/* What Happens Next Checklist */}
              <div className="bg-white p-6 rounded-xl border border-stone-300 max-w-lg mx-auto text-left space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17372A] block">
                  What Happens Next:
                </span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E8EEE9] text-[#17372A] font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                    <span><strong>Initial Screening:</strong> Our admissions team reviews your statutory qualifications within 3–5 working days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E8EEE9] text-[#17372A] font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                    <span><strong>WhatsApp / Phone Consultation:</strong> Shortlisted applicants receive an invitation for an initial 15-minute voice assessment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E8EEE9] text-[#17372A] font-bold flex items-center justify-center text-[10px] shrink-0">3</span>
                    <span><strong>Cohort Orientation:</strong> Final selected candidates attend the Atlantic Seaboard induction day.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                {onClose && (
                  <button
                    onClick={onClose}
                    className="px-7 py-3 bg-[#17372A] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#C9A227] hover:text-[#17372A] transition-all cursor-pointer shadow-sm"
                  >
                    Done / Close Window
                  </button>
                )}
                {onNavigate && (
                  <button
                    onClick={() => {
                      if (onClose) onClose();
                      onNavigate('resources-faq');
                    }}
                    className="px-7 py-3 bg-white border border-stone-300 text-[#17372A] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-stone-100 transition-all cursor-pointer"
                  >
                    Explore Official Resources
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Buttons (For Steps 1 to 3) */}
        {currentStep < 4 && (
          <div className="p-4 sm:p-6 bg-white border-t border-stone-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2.5 bg-white border border-stone-300 text-[#17372A] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-stone-100 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-stone-500 hover:text-stone-800 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[#17372A] hover:bg-[#C9A227] text-white hover:text-[#17372A] text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
              id="step-next-btn"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
