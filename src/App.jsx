import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ServiceSection from './components/sections/ServiceSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialSection from './components/sections/TestimonialSection';
import FAQSection from './components/sections/FAQSection';
import FinalCTASection from './components/sections/FinalCTASection';
import Footer from './components/layout/Footer';
import UserInfoModal from './components/ui/UserInfoModal';
import SuccessPage from './pages/SuccessPage';
import FailPage from './pages/FailPage';
import { requestPayment } from './lib/payment';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const handleCTA = (plan = 'monthly') => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleFormSubmit = async (userInfo) => {
    setShowModal(false);
    try {
      await requestPayment(userInfo, selectedPlan);
    } catch (error) {
      if (error.code === 'USER_CANCEL') return;
      console.error('결제 오류:', error);
      alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen">
      <HeroSection onCTA={handleCTA} />
      <ProblemSection />
      <ServiceSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PricingSection onCTA={handleCTA} />
      <FAQSection />
      <FinalCTASection onCTA={handleCTA} />
      <Footer />
      <UserInfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/fail" element={<FailPage />} />
    </Routes>
  );
}
