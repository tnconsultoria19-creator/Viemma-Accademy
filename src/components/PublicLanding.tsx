import React from 'react';
import PublicHome from './public/PublicHome';
import PublicDriverPath from './public/PublicDriverPath';
import PublicGuidePath from './public/PublicGuidePath';
import PublicHowItWorks from './public/PublicHowItWorks';
import PublicEligibilityChecker from './public/PublicEligibilityChecker';
import PublicResourcesFaq from './public/PublicResourcesFaq';
import PublicFundingResources from './public/PublicFundingResources';
import PublicStartBusiness from './public/PublicStartBusiness';
import PublicParentsGuide from './public/PublicParentsGuide';
import { Resource } from '../types';

interface PublicLandingProps {
  currentView: string;
  resources: Resource[];
  onNavigate: (view: string) => void;
  onOpenApplyModal: () => void;
}

export default function PublicLanding({ currentView, resources, onNavigate, onOpenApplyModal }: PublicLandingProps) {
  switch (currentView) {
    case 'driver-path':
      return <PublicDriverPath onNavigate={onNavigate} />;
    case 'guide-path':
      return <PublicGuidePath onNavigate={onNavigate} />;
    case 'how-it-works':
      return <PublicHowItWorks onNavigate={onNavigate} onOpenApplyModal={onOpenApplyModal} />;
    case 'eligibility-checker':
      return <PublicEligibilityChecker onNavigate={onNavigate} onOpenApplyModal={onOpenApplyModal} />;
    case 'resources-faq':
      return <PublicResourcesFaq resources={resources} onNavigate={onNavigate} />;
    case 'funding':
      return <PublicFundingResources onNavigate={onNavigate} resources={resources} />;
    case 'business':
      return <PublicStartBusiness onNavigate={onNavigate} />;
    case 'parents':
      return <PublicParentsGuide onNavigate={onNavigate} />;
    case 'home':
    default:
      return (
        <PublicHome 
          resources={resources} 
          onNavigate={onNavigate} 
          onOpenApplyModal={onOpenApplyModal}
        />
      );
  }
}
