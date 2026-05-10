import { HeroSection } from "@/sections/HeroSection";
import { ServiceCategories } from "@/sections/ServiceCategories";
import { HowItWorks } from "@/sections/HowItWorks";
import { ExploreServices } from "@/sections/ExploreServices";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServiceCategories />
      <HowItWorks />
      <ExploreServices />
      <CTASection />
    </div>
  );
}
