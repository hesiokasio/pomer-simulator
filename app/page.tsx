// app/page.tsx
import styles from '@/styles/Landing.module.scss';
import HeroSection from '@/app/components/HeroSection';
// کامپوننت‌های بعدی هم اینجا ایمپورت میشن

export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <HeroSection />
      
      {/* <FeaturesSection /> */}
      {/* <SpecsSection /> */}
      {/* <CtaSection /> */}
    </div>
  );
}