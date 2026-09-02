export type UserRole = 'student' | 'admin' | 'mentor' | 'partner';
export type AppStatus = 'DRAFT' | 'SUBMITTED' | 'UNDER REVIEW' | 'SHORTLISTED' | 'INTERVIEW' | 'ACCEPTED' | 'WAITLISTED' | 'NOT SELECTED' | 'WITHDRAWN';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: UserRole;
  profileStatus: string;
  careerInterest: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudentProfile {
  userId: string;
  dateOfBirth: string;
  southAfricanIdConfirmed: boolean;
  school: string;
  matricYear: string;
  studiedTourism: boolean;
  location: string;
  criminalRecordDeclaration: boolean;
  careerPath: 'driver' | 'guide' | 'exploring';
  eligibilityStatus: 'ELIGIBLE' | 'NOT_ELIGIBLE' | 'PENDING';
  profileCompletion: number;
}

export interface Application {
  id: string;
  userId: string;
  careerPath: 'driver' | 'guide';
  motivation: string;
  education: {
    school: string;
    matricYear: string;
    studiedTourism: boolean;
    achievements: string;
  };
  eligibilityAnswers: {
    recentLeaver: boolean;
    studiedTourism: boolean;
    saId: boolean;
    atlanticSeaboard: boolean;
    noCriminalRecord: boolean;
    willingToFund: boolean;
  };
  cvFileUrl: string;
  cvFileName: string;
  status: AppStatus;
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  adminNotes?: string;
}

export interface Programme {
  id: string;
  name: string;
  year: number;
  maxParticipants: number;
  active: boolean;
  applicationOpen: string;
  applicationClose: string;
}

export interface Participant {
  id: string;
  userId: string;
  applicationId: string;
  programmeId: string;
  careerPath: 'driver' | 'guide';
  status: 'ACTIVE' | 'GRADUATED';
  startDate: string;
  graduationStatus: 'PENDING' | 'READY_FOR_GRADUATION' | 'GRADUATED';
  graduationDate?: string;
  ceremonyDate?: string;
  ceremonyVenue?: string;
  ceremonyAttendance?: 'yes' | 'no' | 'pending';
}

export interface Milestone {
  id: string;
  careerPath: 'driver' | 'guide';
  name: string;
  description: string;
  required: boolean;
  order: number;
}

export interface ParticipantProgress {
  id: string;
  participantId: string;
  milestoneId: string;
  status: 'pending' | 'completed';
  completedAt?: string;
  verifiedBy?: string;
  notes?: string;
}

export interface Sponsorship {
  id: string;
  participantId: string;
  careerPath: 'driver' | 'guide';
  supportType: string;
  description: string;
  status: 'eligible' | 'approved' | 'student_responsibility';
  amount?: number;
  approvedBy?: string;
  date?: string;
  notes?: string;
}

export interface JobShadow {
  id: string;
  participantId: string;
  date: string;
  pickupLocation: string;
  pickupTime: string;
  returnTime: string;
  location: string;
  host: string;
  transportIncluded: boolean;
  lunchIncluded: boolean;
  attendance: 'pending' | 'present' | 'absent';
  notes?: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  careerPath: 'driver' | 'guide' | 'both';
  description: string;
  officialUrl: string;
  content: string;
  lastReviewed: string;
  active: boolean;
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  location: string;
  contact: string;
  active: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  partnerId: string;
  careerPath: 'driver' | 'guide' | 'both';
  type: string;
  location: string;
  requirements: string;
  active: boolean;
}

export interface SalesIncentive {
  id: string;
  product: string;
  category: string;
  commissionType: 'percentage' | 'fixed';
  commissionValue: number;
  active: boolean;
  terms: string;
}

export interface DatabaseSchema {
  users: User[];
  studentProfiles: Record<string, StudentProfile>;
  applications: Application[];
  programmes: Programme[];
  participants: Participant[];
  milestones: Milestone[];
  participantProgress: ParticipantProgress[];
  sponsorships: Sponsorship[];
  jobShadows: JobShadow[];
  resources: Resource[];
  partners: Partner[];
  opportunities: Opportunity[];
  salesIncentives: SalesIncentive[];
}
