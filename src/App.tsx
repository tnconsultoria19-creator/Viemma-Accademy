import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PublicLanding from './components/PublicLanding';
import PublicApplicationGateway from './components/PublicApplicationGateway';
import { getDB } from './db';
import { DatabaseSchema } from './types';

export default function App() {
  const [db] = useState<DatabaseSchema>(() => getDB());
  const [currentView, setCurrentView] = useState<string>('home');
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);

  // Master Navigation Controller
  const handleNavigate = (view: string) => {
    // Scroll to top on view transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans antialiased text-[#17372A]">
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenApplyModal={() => setShowApplyModal(true)}
      />

      <main className="flex-1 flex flex-col w-full bg-transparent">
        <PublicLanding 
          currentView={currentView}
          resources={db.resources}
          onNavigate={handleNavigate}
          onOpenApplyModal={() => setShowApplyModal(true)}
        />
      </main>

      <Footer onNavigate={handleNavigate} />

      {showApplyModal && (
        <PublicApplicationGateway 
          onClose={() => setShowApplyModal(false)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
