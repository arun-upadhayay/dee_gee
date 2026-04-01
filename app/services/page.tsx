import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ServicesHero } from "@/app/services/ServicesHero";
import { ServicesList } from "@/app/services/ServicesList";
import { PricingTiers } from "@/app/services/PricingTiers";
import { ProcessSteps } from "@/app/services/ProcessSteps";

export const metadata = {
  title: "Services & Packages | Dee Gee Catering & Events",
  description: "Bespoke wedding catering and event services. From intimate celebrations to grand royal affairs — three tiers of luxury crafted for every discerning host.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <PricingTiers />
      <ProcessSteps />
      <Footer />
    </main>
  );
}
