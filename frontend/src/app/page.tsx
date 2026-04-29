import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FlashSales from '@/components/home/FlashSales';
import TrendingGifts from '@/components/home/TrendingGifts';
import BestSellers from '@/components/home/BestSellers';
import SameDayDelivery from '@/components/home/SameDayDelivery';
import TrustBadges from '@/components/home/TrustBadges';
import Testimonials from '@/components/home/Testimonials';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import SpecialOccasions from '@/components/home/SpecialOccasions';
import FeaturedProductsCarousel from '@/components/home/FeaturedProductsCarousel';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import SocialProof from '@/components/home/SocialProof';
import PaymentMethods from '@/components/home/PaymentMethods';
import FAQ from '@/components/home/FAQ';
import ShopByCategory from '@/components/home/ShopByCategory';
import PremiumCollections from '@/components/home/PremiumCollections';
import BrandPartners from '@/components/home/BrandPartners';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FlashSales />
      <FeaturedProductsCarousel />
      <TrendingGifts />
      <BestSellers />
      <ShopByCategory />
      <PremiumCollections />
      <WhyChooseUs />
      <SameDayDelivery />
      <PaymentMethods />
      <TrustBadges />
      <SocialProof />
      <BrandPartners />
      <FAQ />
      <Testimonials />
      <NewsletterSignup />
      <SpecialOccasions />
    </>
  );
}
