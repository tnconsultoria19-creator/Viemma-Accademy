import { DatabaseSchema, Milestone } from './types';

export const DEFAULT_PROGRAMME = {
  id: 'p2026',
  name: 'VMR Academy Youth Development Programme',
  year: 2026,
  maxParticipants: 5,
  active: true,
  applicationOpen: '2026-01-01',
  applicationClose: '2026-10-31'
};

export const DEFAULT_MILESTONES: Milestone[] = [
  // Driver Milestones
  { id: 'm-drv-1', careerPath: 'driver', name: 'Profile Completed', description: 'Student completed basic information and eligibility check', required: true, order: 1 },
  { id: 'm-drv-2', careerPath: 'driver', name: 'Application Accepted', description: 'Application formally approved by VMR Academy board', required: true, order: 2 },
  { id: 'm-drv-3', careerPath: 'driver', name: 'Learner\'s Licence Completed', description: 'Student acquired their Learner\'s Licence (self-funded)', required: true, order: 3 },
  { id: 'm-drv-4', careerPath: 'driver', name: 'Driving Licence Acquired', description: 'Student passed their practical driving test (self-funded)', required: true, order: 4 },
  { id: 'm-drv-5', careerPath: 'driver', name: 'Medical Examination Passed', description: 'Completed PrDP medical check (VMR Academy sponsored)', required: true, order: 5 },
  { id: 'm-drv-6', careerPath: 'driver', name: 'PrDP Issued', description: 'Professional Driving Permit successfully acquired from traffic department (VMR Academy sponsored)', required: true, order: 6 },
  { id: 'm-drv-7', careerPath: 'driver', name: 'Tourism-Specific Preparation', description: 'Completed customer hospitality and navigation course', required: true, order: 7 },
  { id: 'm-drv-8', careerPath: 'driver', name: 'Academy Graduation', description: 'Formally completed all milestones and graduated from VMR Academy', required: true, order: 8 },

  // Guide Milestones
  { id: 'm-gd-1', careerPath: 'guide', name: 'Profile Completed', description: 'Student completed basic information and eligibility check', required: true, order: 1 },
  { id: 'm-gd-2', careerPath: 'guide', name: 'Application Accepted', description: 'Application formally approved by VMR Academy board', required: true, order: 2 },
  { id: 'm-gd-3', careerPath: 'guide', name: 'Tour Guide Course Completed', description: 'Completed accredited tour-guide certification training (self-funded)', required: true, order: 3 },
  { id: 'm-gd-4', careerPath: 'guide', name: 'Guiding Registration Done', description: 'Successfully registered with regional tourism authority as an official guide (self-funded)', required: true, order: 4 },
  { id: 'm-gd-5', careerPath: 'guide', name: 'Job-Shadow Experience', description: 'Participated in a live practical tour operations shadowing day (VMR Academy sponsored)', required: true, order: 5 },
  { id: 'm-gd-6', careerPath: 'guide', name: 'Academy Graduation', description: 'Formally completed all milestones and graduated from VMR Academy', required: true, order: 6 }
];

export const DEFAULT_RESOURCES = [
  {
    id: 'res-1',
    title: 'South African Department of Transport - PrDP Info',
    category: 'Official Government',
    careerPath: 'driver' as const,
    description: 'Direct requirements and forms for acquiring a Professional Driving Permit (PrDP) in South Africa.',
    officialUrl: 'https://www.gov.za/services/driving-licence-licence/apply-professional-driving-permit',
    content: 'A Professional Driving Permit (PrDP) is required in South Africa to drive public transport and heavy vehicles, including tourism vehicles carrying paying passengers. To qualify, you must be 21 years or older (for passenger vehicles), have a valid driving licence, pass a medical examination, obtain a police clearance certificate, and pay the regulatory application fees.',
    lastReviewed: '2026-05-12',
    active: true
  },
  {
    id: 'res-2',
    title: 'CATHSSETA Cultural & Heritage Guiding',
    category: 'Industry Standards',
    careerPath: 'guide' as const,
    description: 'Standard unit standards and qualifications framework to register as an accredited Tourist Guide.',
    officialUrl: 'https://cathsseta.org.za/',
    content: 'CATHSSETA (Culture, Art, Tourism, Hospitality, and Sport Sector Education and Training Authority) is the official body regulating tourist guiding qualifications in South Africa. Becoming a tourist guide requires completing a CATHSSETA accredited training course with a registered provider.',
    lastReviewed: '2026-06-20',
    active: true
  },
  {
    id: 'res-3',
    title: 'RTMC Learner\'s Licence Booking',
    category: 'Official Government',
    careerPath: 'driver' as const,
    description: 'Official portal to book your learner\'s licence computer theory test online.',
    officialUrl: 'https://online.natis.gov.za/',
    content: 'Bookings for driver and learner tests must be done through the official NaTIS online system. Ensure you have your SA ID document, two black-and-white photos, and the booking fee ready for your appointment.',
    lastReviewed: '2026-07-01',
    active: true
  }
];

export const DEFAULT_PARTNERS = [
  { id: 'part-1', name: 'The Bay Hotel', type: 'Hotel & Hospitality', location: 'Camps Bay, Atlantic Seaboard', contact: 'hr@bayhotel.co.za', active: true },
  { id: 'part-2', name: 'Afritours Operators', type: 'Tour Operator', location: 'Cape Town Central', contact: 'info@afritours.com', active: true },
  { id: 'part-3', name: 'Atlantic Ocean Adventures', type: 'Adventure Tourism', location: 'Sea Point', contact: 'tours@atlanticadv.co.za', active: true },
  { id: 'part-4', name: 'Table Mountain Boutique Lodge', type: 'Hospitality', location: 'Kloof Nek', contact: 'booking@tablemountainlodge.co.za', active: true }
];

export const DEFAULT_OPPORTUNITIES = [
  { id: 'opp-1', title: 'Part-Time Chauffeur (Shuttle Service)', partnerId: 'part-1', careerPath: 'driver' as const, type: 'Freelance', location: 'Camps Bay', requirements: 'VMR Academy Graduate, Valid PrDP, Clean Driving Record', active: true },
  { id: 'opp-2', title: 'Seasonal Cultural Site Guide', partnerId: 'part-3', careerPath: 'guide' as const, type: 'Freelance', location: 'Cape Town', requirements: 'VMR Academy Graduate, CATHSSETA Registered Tourist Guide', active: true },
  { id: 'opp-3', title: 'Luxury Hotel Transfer Driver', partnerId: 'part-4', careerPath: 'driver' as const, type: 'Contract', location: 'Table Mountain', requirements: 'VMR Academy Graduate, PrDP, Medical clearance', active: true },
  { id: 'opp-4', title: 'Weekend Private City Tour Guide', partnerId: 'part-2', careerPath: 'guide' as const, type: 'Freelance', location: 'Cape Town Peninsula', requirements: 'VMR Academy Graduate, registered cultural guide, First Aid certificate', active: true }
];

export const DEFAULT_SALES_INCENTIVES = [
  { id: 'inc-1', product: 'Cape Peninsula Luxury Day Tour', category: 'Tour Packages', commissionType: 'percentage' as const, commissionValue: 12, active: true, terms: 'Commission paid on fully settled client bookings referred by accredited network members.' },
  { id: 'inc-2', product: 'Premium Estate Cabernet Sauvignon (Case of 6)', category: 'Wine Products', commissionType: 'fixed' as const, commissionValue: 150, active: true, terms: 'Fixed payout of R150 per case ordered using active graduate sales code.' },
  { id: 'inc-3', product: 'Authentic African Beaded Wildlife Art (Large)', category: 'Arts & Crafts', commissionType: 'percentage' as const, commissionValue: 15, active: true, terms: 'Subject to artist partner availability. Earn 15% on direct retail boutique sales.' },
  { id: 'inc-4', product: 'Certified GIA Tanzanite Pendant Set', category: 'Diamonds & Fine Jewelry', commissionType: 'percentage' as const, commissionValue: 8, active: true, terms: 'Subject to private diamond boutique viewing appointments arranged for luxury guests.' }
];

export const SEED_USERS = [
  { id: 'adm', email: 'admin@vmracademy.co.za', passwordHash: 'admin123', firstName: 'Sipho', lastName: 'Khumalo', phone: '0821112233', role: 'admin' as const, profileStatus: 'Active', careerInterest: 'Management', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'std1', email: 'sibusiso@gmail.com', passwordHash: 'sibu123', firstName: 'Sibusiso', lastName: 'Nkosi', phone: '0714445566', role: 'student' as const, profileStatus: 'Active', careerInterest: 'driver', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'std2', email: 'thandeka@gmail.com', passwordHash: 'thande123', firstName: 'Thandeka', lastName: 'Zwane', phone: '0738889900', role: 'student' as const, profileStatus: 'Active', careerInterest: 'guide', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
];

export const SEED_STUDENT_PROFILES = {
  'std1': {
    userId: 'std1',
    dateOfBirth: '2006-03-12',
    southAfricanIdConfirmed: true,
    school: 'Sea Point High School',
    matricYear: '2025',
    studiedTourism: true,
    location: 'Camps Bay, Cape Town',
    criminalRecordDeclaration: false,
    careerPath: 'driver' as const,
    eligibilityStatus: 'ELIGIBLE' as const,
    profileCompletion: 100
  },
  'std2': {
    userId: 'std2',
    dateOfBirth: '2005-09-24',
    southAfricanIdConfirmed: true,
    school: 'Hout Bay Secondary School',
    matricYear: '2024',
    studiedTourism: true,
    location: 'Hout Bay, Cape Town',
    criminalRecordDeclaration: false,
    careerPath: 'guide' as const,
    eligibilityStatus: 'ELIGIBLE' as const,
    profileCompletion: 100
  }
};

export const SEED_APPLICATIONS = [
  {
    id: 'app-std1',
    userId: 'std1',
    careerPath: 'driver' as const,
    motivation: 'I completed Tourism in Matric and fell in love with local hospitality. My dream is to drive international tourists along the beautiful coastal routes of South Africa and tell them about our heritage, and eventually start my own boutique transfer service. I have already saved some money from my part-time job for my learner\'s test.',
    education: {
      school: 'Sea Point High School',
      matricYear: '2025',
      studiedTourism: true,
      achievements: 'Top Tourist Learner Award, Matric Prefect'
    },
    eligibilityAnswers: {
      recentLeaver: true,
      studiedTourism: true,
      saId: true,
      atlanticSeaboard: true,
      noCriminalRecord: true,
      willingToFund: true
    },
    cvFileUrl: '#',
    cvFileName: 'sibusiso_nkosi_resume.pdf',
    status: 'ACCEPTED' as const,
    submittedAt: '2026-08-01T10:14:00Z',
    reviewedAt: '2026-08-03T09:00:00Z',
    reviewedBy: 'Sipho Khumalo',
    adminNotes: 'Highly motivated applicant. Excellent matric results and solid school reference. Meets all criteria. Accepted into the 2026 driver program.'
  },
  {
    id: 'app-std2',
    userId: 'std2',
    careerPath: 'guide' as const,
    motivation: 'Being a tour guide is my absolute calling. I love people, I love storytelling, and Hout Bay is rich with fishing history and beautiful landmarks. This sponsorship opportunity for job shadowing and transport support is exactly the stepping stone I need as I begin my self-funded guiding course at Cape Peninsula College.',
    education: {
      school: 'Hout Bay Secondary School',
      matricYear: '2024',
      studiedTourism: true,
      achievements: 'Debating Captain, Tourism Project Leader'
    },
    eligibilityAnswers: {
      recentLeaver: true,
      studiedTourism: true,
      saId: true,
      atlanticSeaboard: true,
      noCriminalRecord: true,
      willingToFund: true
    },
    cvFileUrl: '#',
    cvFileName: 'thandeka_zwane_cv.docx',
    status: 'SUBMITTED' as const,
    submittedAt: '2026-08-15T14:30:00Z'
  }
];

export const SEED_PARTICIPANTS = [
  {
    id: 'part-std1',
    userId: 'std1',
    applicationId: 'app-std1',
    programmeId: 'p2026',
    careerPath: 'driver' as const,
    status: 'ACTIVE' as const,
    startDate: '2026-08-04T08:00:00Z',
    graduationStatus: 'PENDING' as const
  }
];

export const SEED_PROGRESS = [
  { id: 'prg-1', participantId: 'part-std1', milestoneId: 'm-drv-1', status: 'completed' as const, completedAt: '2026-08-04T08:30:00Z', verifiedBy: 'System' },
  { id: 'prg-2', participantId: 'part-std1', milestoneId: 'm-drv-2', status: 'completed' as const, completedAt: '2026-08-04T09:00:00Z', verifiedBy: 'Sipho Khumalo' },
  { id: 'prg-3', participantId: 'part-std1', milestoneId: 'm-drv-3', status: 'completed' as const, completedAt: '2026-08-10T11:00:00Z', verifiedBy: 'Sipho Khumalo', notes: 'Verified Learner\'s Licence Copy.' },
  { id: 'prg-4', participantId: 'part-std1', milestoneId: 'm-drv-4', status: 'pending' as const },
  { id: 'prg-5', participantId: 'part-std1', milestoneId: 'm-drv-5', status: 'pending' as const },
  { id: 'prg-6', participantId: 'part-std1', milestoneId: 'm-drv-6', status: 'pending' as const },
  { id: 'prg-7', participantId: 'part-std1', milestoneId: 'm-drv-7', status: 'pending' as const },
  { id: 'prg-8', participantId: 'part-std1', milestoneId: 'm-drv-8', status: 'pending' as const }
];

export const SEED_SPONSORSHIPS = [
  { id: 'spon-1', participantId: 'part-std1', careerPath: 'driver' as const, supportType: 'PrDP Traffic Costs', description: 'Covers the municipal booking and issuing costs of the Professional Driving Permit.', status: 'eligible' as const, notes: 'To be unlocked once driver licence milestone is completed.' },
  { id: 'spon-2', participantId: 'part-std1', careerPath: 'driver' as const, supportType: 'Medical Examination Fee', description: 'Pre-paid medical check at authorized clinic in Sea Point.', status: 'eligible' as const },
  { id: 'spon-3', participantId: 'part-std1', careerPath: 'driver' as const, supportType: 'Learner/Driver Licence booking', description: 'Licence bookings and lessons.', status: 'student_responsibility' as const }
];

export const SEED_JOB_SHADOWS = [
  {
    id: 'sh-1',
    participantId: 'part-std1', // Wait, this is driver, but if they shadow guide, we can assign it
    date: '2026-09-10',
    pickupLocation: 'Camps Bay Library',
    pickupTime: '07:30',
    returnTime: '17:00',
    location: 'Hout Bay & Cape Peninsula Coastal Route',
    host: 'Afritours Senior Shuttle Team',
    transportIncluded: true,
    lunchIncluded: true,
    attendance: 'pending' as const,
    notes: 'Practical exposure to guest check-in, premium coastal driving, safe navigation, and coastal stop routines.'
  }
];

export const INITIAL_DATABASE: DatabaseSchema = {
  users: SEED_USERS,
  studentProfiles: SEED_STUDENT_PROFILES,
  applications: SEED_APPLICATIONS,
  programmes: [DEFAULT_PROGRAMME],
  participants: SEED_PARTICIPANTS,
  milestones: DEFAULT_MILESTONES,
  participantProgress: SEED_PROGRESS,
  sponsorships: SEED_SPONSORSHIPS,
  jobShadows: SEED_JOB_SHADOWS,
  resources: DEFAULT_RESOURCES,
  partners: DEFAULT_PARTNERS,
  opportunities: DEFAULT_OPPORTUNITIES,
  salesIncentives: DEFAULT_SALES_INCENTIVES
};
