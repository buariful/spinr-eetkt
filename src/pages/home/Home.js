import { Outlet } from "react-router-dom";
import { ClientFeedback } from "../../components/home/clientFeedback/ClientFeedback";
import { HeroBanner } from "../../components/home/HeroBanner";
import { RentelListingSection } from "../../components/home/rentelListing/RentelListingSection";
import { SpecialOfferSection } from "../../components/home/specialOffer/SpecialOfferSection";
import { TopDestinationSection } from "../../components/home/topDestinations/TopDestinationSection";

export function Home() {
  return (
    <main>
      <div>
        <div>
          <HeroBanner />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <RentelListingSection />
      <SpecialOfferSection />
      <TopDestinationSection />
      <ClientFeedback />
    </main>
  );
}
