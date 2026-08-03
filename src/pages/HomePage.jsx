import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FeaturedEventsSection from '../components/sections/FeaturedEventsSection';
import ImpactStatsSection from '../components/sections/ImpactStatsSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage({ onNavigate }) {
  return (
    <div className="font-body-md text-on-surface antialiased">
      <Header onNavigate={onNavigate} />

      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturedEventsSection />
        <ImpactStatsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
