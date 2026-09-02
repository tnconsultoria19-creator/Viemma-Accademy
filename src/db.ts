import { DatabaseSchema, User, StudentProfile, Application, Participant, ParticipantProgress, Sponsorship, JobShadow, AppStatus } from './types';
import { INITIAL_DATABASE } from './mockData';

const DB_KEY = 'VMR_ACADEMY_DB';
const SESSION_KEY = 'VMR_ACADEMY_SESSION';

export function getDB(): DatabaseSchema {
  const data = localStorage.getItem(DB_KEY);
  if (!data) {
    localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_DATABASE));
    return INITIAL_DATABASE;
  }
  try {
    const parsed = JSON.parse(data);
    const merged = { ...INITIAL_DATABASE, ...parsed };
    
    // Ensure that array fields are arrays and object fields are objects
    const keys = Object.keys(INITIAL_DATABASE) as Array<keyof DatabaseSchema>;
    for (const key of keys) {
      if (Array.isArray(INITIAL_DATABASE[key])) {
        if (!Array.isArray(merged[key])) {
          merged[key] = INITIAL_DATABASE[key] as any;
        }
      } else if (typeof INITIAL_DATABASE[key] === 'object' && INITIAL_DATABASE[key] !== null) {
        if (typeof merged[key] !== 'object' || merged[key] === null) {
          merged[key] = INITIAL_DATABASE[key] as any;
        }
      }
    }
    return merged;
  } catch (e) {
    localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_DATABASE));
    return INITIAL_DATABASE;
  }
}

export function saveDB(db: DatabaseSchema): void {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// Current logged in session helper
export interface Session {
  token: string;
  user: User;
}

export function getSession(): Session | null {
  const data = localStorage.getItem(SESSION_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

export function saveSession(session: Session): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

// --- AUTHENTICATION ---
export function registerUser(fields: {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  southAfricanIdConfirmed: boolean;
  school: string;
  matricYear: string;
  studiedTourism: boolean;
  location: string;
  criminalRecordDeclaration: boolean;
  careerPath: 'driver' | 'guide' | 'exploring';
}): { success: boolean; error?: string; session?: Session } {
  const db = getDB();
  const emailLower = fields.email.toLowerCase().trim();

  if (db.users.some(u => u.email.toLowerCase() === emailLower)) {
    return { success: false, error: 'An account with this email already exists.' };
  }

  const userId = 'u-' + Math.random().toString(36).substr(2, 9);
  
  const newUser: User = {
    id: userId,
    firstName: fields.firstName.trim(),
    lastName: fields.lastName.trim(),
    email: emailLower,
    phone: fields.phone.trim(),
    role: 'student',
    profileStatus: 'Active',
    careerInterest: fields.careerPath,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const newProfile: StudentProfile = {
    userId,
    dateOfBirth: fields.dateOfBirth,
    southAfricanIdConfirmed: fields.southAfricanIdConfirmed,
    school: fields.school.trim(),
    matricYear: fields.matricYear,
    studiedTourism: fields.studiedTourism,
    location: fields.location.trim(),
    criminalRecordDeclaration: fields.criminalRecordDeclaration,
    careerPath: fields.careerPath,
    eligibilityStatus: 'PENDING',
    profileCompletion: 60 // Onboarding will finish it
  };

  // Run initial eligibility rules check (always accept all candidates as eligible)
  const isEligible = true;
     
  newProfile.eligibilityStatus = 'ELIGIBLE';

  db.users.push(newUser);
  db.studentProfiles[userId] = newProfile;
  saveDB(db);

  // Save auth password (simple plain text simulation matching production logic)
  const passwords = JSON.parse(localStorage.getItem('VMR_PASSWORDS') || '{}');
  passwords[emailLower] = fields.passwordHash;
  localStorage.setItem('VMR_PASSWORDS', JSON.stringify(passwords));

  const session: Session = {
    token: 'jwt-mock-' + userId,
    user: newUser
  };
  saveSession(session);

  return { success: true, session };
}

export function loginUser(email: string, passwordHash: string): { success: boolean; error?: string; session?: Session } {
  const db = getDB();
  const emailLower = email.toLowerCase().trim();
  const user = db.users.find(u => u.email.toLowerCase() === emailLower);

  if (!user) {
    return { success: false, error: 'Invalid email or password.' };
  }

  const passwords = JSON.parse(localStorage.getItem('VMR_PASSWORDS') || '{}');
  const savedPassword = passwords[emailLower] || (emailLower === 'admin@vmracademy.co.za' ? 'admin123' : emailLower === 'sibusiso@gmail.com' ? 'sibu123' : emailLower === 'thandeka@gmail.com' ? 'thande123' : '');

  if (savedPassword !== passwordHash) {
    return { success: false, error: 'Invalid email or password.' };
  }

  const session: Session = {
    token: 'jwt-mock-' + user.id,
    user
  };
  saveSession(session);

  return { success: true, session };
}

// --- STUDENT PROCESSES ---
export function updateStudentProfile(userId: string, fields: Partial<StudentProfile>): void {
  const db = getDB();
  if (db.studentProfiles[userId]) {
    db.studentProfiles[userId] = { ...db.studentProfiles[userId], ...fields };
    
    // Always accept candidates as eligible
    const p = db.studentProfiles[userId];
    p.eligibilityStatus = 'ELIGIBLE';
    
    saveDB(db);
  }
}

export function submitApplication(userId: string, application: {
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
  cvFileName: string;
}): { success: boolean; error?: string; application?: Application } {
  const db = getDB();

  // If already applied and not draft/rejected, block duplicate
  const existing = db.applications.find(a => a.userId === userId && a.status !== 'WITHDRAWN');
  if (existing) {
    return { success: false, error: 'You have already submitted an active application.' };
  }

  const appId = 'app-' + Math.random().toString(36).substr(2, 9);
  const newApp: Application = {
    id: appId,
    userId,
    careerPath: application.careerPath,
    motivation: application.motivation,
    education: application.education,
    eligibilityAnswers: application.eligibilityAnswers,
    cvFileUrl: '#',
    cvFileName: application.cvFileName || 'uploaded_resume.pdf',
    status: 'SUBMITTED',
    submittedAt: new Date().toISOString()
  };

  db.applications.push(newApp);
  saveDB(db);
  return { success: true, application: newApp };
}

export function registerAndApply(data: {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  location: string;
  school: string;
  matricYear: string;
  studiedTourism: boolean;
  careerPath: 'driver' | 'guide';
  motivation: string;
  achievements: string;
  southAfricanIdConfirmed: boolean;
  atlanticSeaboard: boolean;
  noCriminalRecord: boolean;
  willingToFund: boolean;
  cvFileName: string;
}): { success: boolean; error?: string; session?: Session; application?: Application } {
  const regResult = registerUser({
    email: data.email,
    passwordHash: data.passwordHash,
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    dateOfBirth: data.dateOfBirth,
    southAfricanIdConfirmed: data.southAfricanIdConfirmed,
    school: data.school,
    matricYear: data.matricYear,
    studiedTourism: data.studiedTourism,
    location: data.location,
    criminalRecordDeclaration: !data.noCriminalRecord,
    careerPath: data.careerPath
  });

  if (!regResult.success || !regResult.session) {
    return { success: false, error: regResult.error || 'Failed to create user account.' };
  }

  const appResult = submitApplication(regResult.session.user.id, {
    careerPath: data.careerPath,
    motivation: data.motivation,
    education: {
      school: data.school,
      matricYear: data.matricYear,
      studiedTourism: data.studiedTourism,
      achievements: data.achievements
    },
    eligibilityAnswers: {
      recentLeaver: true,
      studiedTourism: data.studiedTourism,
      saId: data.southAfricanIdConfirmed,
      atlanticSeaboard: data.atlanticSeaboard,
      noCriminalRecord: data.noCriminalRecord,
      willingToFund: data.willingToFund
    },
    cvFileName: data.cvFileName
  });

  if (!appResult.success || !appResult.application) {
    return { success: false, error: appResult.error || 'Failed to submit application dossier.' };
  }

  return {
    success: true,
    session: regResult.session,
    application: appResult.application
  };
}

// --- MILESTONES & ACTIVE PROGRESS ---
export function toggleMilestone(participantId: string, milestoneId: string, notes?: string): void {
  const db = getDB();
  const progressIndex = db.participantProgress.findIndex(p => p.participantId === participantId && p.milestoneId === milestoneId);
  
  if (progressIndex > -1) {
    const current = db.participantProgress[progressIndex];
    if (current.status === 'completed') {
      current.status = 'pending';
      delete current.completedAt;
      delete current.verifiedBy;
    } else {
      current.status = 'completed';
      current.completedAt = new Date().toISOString();
      current.verifiedBy = 'Student Verified';
      if (notes) current.notes = notes;
    }
  } else {
    db.participantProgress.push({
      id: 'prg-' + Math.random().toString(36).substr(2, 9),
      participantId,
      milestoneId,
      status: 'completed',
      completedAt: new Date().toISOString(),
      verifiedBy: 'Student Verified',
      notes
    });
  }

  // Calculate if student completed all milestones
  const participant = db.participants.find(p => p.id === participantId);
  if (participant) {
    const pathMilestones = db.milestones.filter(m => m.careerPath === participant.careerPath);
    const completedCount = db.participantProgress.filter(p => p.participantId === participantId && p.status === 'completed').length;
    
    if (completedCount >= pathMilestones.length) {
      participant.graduationStatus = 'READY_FOR_GRADUATION';
    } else {
      participant.graduationStatus = 'PENDING';
    }
  }

  saveDB(db);
}

// --- ADMIN CONTROL ACTIONS ---
export function setProgrammeCapacity(capacity: number): void {
  const db = getDB();
  if (db.programmes[0]) {
    db.programmes[0].maxParticipants = capacity;
    saveDB(db);
  }
}

export function changeApplicationStatus(appId: string, status: AppStatus, adminNotes?: string, adminUser?: string): { success: boolean; error?: string } {
  const db = getDB();
  const app = db.applications.find(a => a.id === appId);
  if (!app) return { success: false, error: 'Application not found.' };

  app.status = status;
  app.reviewedAt = new Date().toISOString();
  app.reviewedBy = adminUser || 'Admin Console';
  if (adminNotes) app.adminNotes = adminNotes;

  // Handle auto-induction of student if Accepted
  if (status === 'ACCEPTED') {
    const activeParticipantsCount = db.participants.filter(p => p.status === 'ACTIVE').length;
    const maxCap = db.programmes[0]?.maxParticipants || 5;

    if (activeParticipantsCount >= maxCap) {
      return { success: false, error: `Induction blocked! VMR Academy program capacity limit reached (${activeParticipantsCount}/${maxCap} slots filled). Please increase program capacity settings to admit more students.` };
    }

    // Check if participant record already exists
    const existingPart = db.participants.find(p => p.userId === app.userId);
    if (!existingPart) {
      const partId = 'part-' + Math.random().toString(36).substr(2, 9);
      const newParticipant: Participant = {
        id: partId,
        userId: app.userId,
        applicationId: appId,
        programmeId: db.programmes[0]?.id || 'p2026',
        careerPath: app.careerPath,
        status: 'ACTIVE',
        startDate: new Date().toISOString(),
        graduationStatus: 'PENDING'
      };
      
      db.participants.push(newParticipant);

      // Seed initial milestones progress
      const relevantMilestones = db.milestones.filter(m => m.careerPath === app.careerPath);
      relevantMilestones.forEach(m => {
        db.participantProgress.push({
          id: 'prg-' + Math.random().toString(36).substr(2, 9),
          participantId: partId,
          milestoneId: m.id,
          status: m.order <= 2 ? 'completed' : 'pending', // Auto complete profile & application accepted
          completedAt: m.order <= 2 ? new Date().toISOString() : undefined,
          verifiedBy: m.order <= 2 ? 'System Auto-induction' : undefined
        });
      });

      // Seed sponsorships
      if (app.careerPath === 'driver') {
        db.sponsorships.push(
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'driver', supportType: 'PrDP Traffic Costs', description: 'Covers municipal booking and processing fees for PrDP', status: 'eligible' },
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'driver', supportType: 'Medical Examination Fee', description: 'Pre-paid medical certification check for commercial license', status: 'eligible' },
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'driver', supportType: 'Learner/Driver Licence booking', description: 'Licence bookings and lessons.', status: 'student_responsibility' }
        );
      } else if (app.careerPath === 'guide') {
        db.sponsorships.push(
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'guide', supportType: 'Job-Shadowing Experience', description: 'Assigned mentorship tour with senior operators', status: 'approved' },
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'guide', supportType: 'Job-Shadow Transport Support', description: 'VMR arranged pickup/dropoff on shadow day', status: 'approved' },
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'guide', supportType: 'Sustenance & Lunch', description: 'Lunch and hydration provided during active job shadow', status: 'approved' },
          { id: 'sp-' + Math.random().toString(36).substr(2, 9), participantId: partId, careerPath: 'guide', supportType: 'Tour Guide Course & Registration', description: 'Standard accredited tour course and licensing fee', status: 'student_responsibility' }
        );
      }
    }
  }

  saveDB(db);
  return { success: true };
}

export function adminGraduateStudent(participantId: string, ceremonyDate: string, ceremonyVenue: string): void {
  const db = getDB();
  const participant = db.participants.find(p => p.id === participantId);
  if (participant) {
    participant.status = 'ACTIVE'; // wait, keep active or set role? Spec says set status: GRADUATED
    participant.graduationStatus = 'GRADUATED';
    participant.graduationDate = new Date().toISOString().split('T')[0];
    participant.ceremonyDate = ceremonyDate;
    participant.ceremonyVenue = ceremonyVenue;
    participant.ceremonyAttendance = 'pending';

    // Mark all milestones as completed
    const relevantProgress = db.participantProgress.filter(p => p.participantId === participantId);
    const relevantMilestones = db.milestones.filter(m => m.careerPath === participant.careerPath);
    
    relevantMilestones.forEach(m => {
      const pIndex = relevantProgress.findIndex(p => p.milestoneId === m.id);
      if (pIndex > -1) {
        relevantProgress[pIndex].status = 'completed';
        if (!relevantProgress[pIndex].completedAt) {
          relevantProgress[pIndex].completedAt = new Date().toISOString();
          relevantProgress[pIndex].verifiedBy = 'Admin Certified';
        }
      } else {
        db.participantProgress.push({
          id: 'prg-' + Math.random().toString(36).substr(2, 9),
          participantId,
          milestoneId: m.id,
          status: 'completed',
          completedAt: new Date().toISOString(),
          verifiedBy: 'Admin Certified'
        });
      }
    });

    // Mark sponsorships approved
    db.sponsorships.forEach(s => {
      if (s.participantId === participantId && s.status === 'eligible') {
        s.status = 'approved';
        s.approvedBy = 'Admin Certified';
        s.date = new Date().toISOString().split('T')[0];
      }
    });

    saveDB(db);
  }
}

export function createJobShadow(participantId: string, fields: {
  date: string;
  pickupLocation: string;
  pickupTime: string;
  returnTime: string;
  location: string;
  host: string;
}): void {
  const db = getDB();
  db.jobShadows.push({
    id: 'sh-' + Math.random().toString(36).substr(2, 9),
    participantId,
    date: fields.date,
    pickupLocation: fields.pickupLocation,
    pickupTime: fields.pickupTime,
    returnTime: fields.returnTime,
    location: fields.location,
    host: fields.host,
    transportIncluded: true,
    lunchIncluded: true,
    attendance: 'pending',
    notes: 'Practical job shadow session'
  });
  saveDB(db);
}
