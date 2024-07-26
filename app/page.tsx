import Navbar from '@/app/ui/home/navbar';
import HeroSection from '@/app/ui/home/hero-section';
import ServicesSection from '@/app/ui/home/services-section';
import PopularSection from '@/app/ui/home/popular-section';
import PricingSection from '@/app/ui/home/pricing-section';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="mt-20 md:mt-0">
        <HeroSection />

        <ServicesSection />

        <PopularSection />

        <PricingSection />
      </div>
    </main>
  );
}
