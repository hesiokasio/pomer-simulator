// app/page.tsx
import styles from '@/styles/Landing.module.scss';
import HeroSection from '@/app/components/landing/HeroSection';
import TrustBadgesSection from '@/app/components/landing/TrustBadgesSection';
import FeaturesSection from '@/app/components/landing/FeaturesSection';
import ComparisonSection from '@/app/components/landing/ComparisonSection';
import SpecsSection from '@/app/components/landing/SpecsSection';
import ProductsSection from './components/landing/ProductsSection';
import CtaSection from '@/app/components/landing/CtaSection';
import CalculatorSection from '@/app/components/landing/CalculatorSection';
import FaqSection from '@/app/components/landing/FaqSection';

export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <HeroSection />
      <TrustBadgesSection />
      <FeaturesSection />
      {/* <ComparisonSection />
      <SpecsSection /> */}
      <ProductsSection />
      <CalculatorSection />
      <CtaSection />
      <FaqSection />
      
      {/* <FeaturesSection /> */}
      {/* <SpecsSection /> */}
      {/* <CtaSection /> */}
    </div>
  );
}