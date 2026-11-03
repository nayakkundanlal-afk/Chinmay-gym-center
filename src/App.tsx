import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MembershipSection } from './components/MembershipSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { JoinModal } from './components/JoinModal';

export const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('');

  const handleOpenJoin = (planName?: string) => {
    setSelectedPlanForEnquiry(planName || '');
    setIsJoinModalOpen(true);
  };

  const handleFacilityInquire = (facilityTitle: string) => {
    setSelectedPlanForEnquiry(facilityTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const facilitiesElement = document.getElementById('facilities');
    if (facilitiesElement) {
      facilitiesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#C6FF00] selection:text-black">
      {/* 1. Header / Navbar */}
      <Navbar onJoinClick={() => handleOpenJoin()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onStartClick={() => handleOpenJoin()}
          onExploreClick={handleExploreClick}
        />

        {/* 3. Trust & Statistics Section */}
        <StatsSection />

        {/* 4. About Energym Fitness Club */}
        <AboutSection onVisitClick={handleVisitClick} />

        {/* 5. Fitness Facilities */}
        <FacilitiesSection onFacilityInquire={handleFacilityInquire} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Membership Plans */}
        <MembershipSection
          onDirectEnquire={(planName) => {
            setSelectedPlanForEnquiry(planName);
            handleVisitClick();
          }}
        />

        {/* 8. Gym Gallery & Visual Tour */}
        <GallerySection />

        {/* 9. Google Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 10. Location, Map, and Contact Form */}
        <ContactSection initialPlan={selectedPlanForEnquiry} />

        {/* 11. Final Call To Action */}
        <FinalCta
          onJoinClick={() => handleOpenJoin()}
          onContactClick={handleVisitClick}
        />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Call & WhatsApp conversion actions */}
      <FloatingActions onJoinClick={() => handleOpenJoin()} />

      {/* Join & Quick Enquiry Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        selectedPlanName={selectedPlanForEnquiry}
      />
    </div>
  );
};

export default App;
