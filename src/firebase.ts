import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "argon-burner-n8gvj",
  appId: "1:834962104807:web:02b1305304eee16a801d42",
  apiKey: "AIzaSyDbpuZkGHGJoA0fqliWKdFS2GNjD2ipGBs",
  authDomain: "argon-burner-n8gvj.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-viemmayouth-b2a1c3ff-da92-4a02-95fe-d3fc3ce37eca",
  storageBucket: "argon-burner-n8gvj.firebasestorage.app",
  messagingSenderId: "834962104807",
  measurementId: "",
  oAuthClientId: "834962104807-345qpt2nrhovdabumtnacccuvdk8v8ov.apps.googleusercontent.com",
  recaptchaSiteKey: ""
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let firestoreInstance: Firestore;
try {
  // Try with specific database ID if supported
  firestoreInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId || undefined);
} catch (e) {
  firestoreInstance = getFirestore(app);
}

export const db = firestoreInstance;
export const auth: Auth = getAuth(app);
