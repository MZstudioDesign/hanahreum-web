import HeroVideo from "@/components/sections/HeroVideo";
import BrandEssence from "@/components/sections/BrandEssence";
import ScrollVelocityBand from "@/components/sections/ScrollVelocityBand";
import PremiumSelections from "@/components/sections/PremiumSelections";
import BWBandDivider from "@/components/sections/BWBandDivider";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FlowingMenuSection from "@/components/sections/FlowingMenuSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <BrandEssence />
      <ScrollVelocityBand />
      <PremiumSelections />
      <BWBandDivider />
      <TestimonialsSection />
      <FlowingMenuSection />
      <ContactCTA />
    </>
  );
}
