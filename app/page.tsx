import SpotlightGrid from "@/components/SpotlightGrid";
import HeroBanner from "@/components/HeroBanner";
import TrendingSearches from "@/components/TrendingSearches";
import PitchVideo from "@/components/PitchVideo";
import BestSellersRail from "@/components/BestSellersRail";
import LearnMoreSlider from "@/components/LearnMoreSlider";
import ScrollingWord from "@/components/ScrollingWord";
import Advisors from "@/components/Advisors";
import FoodFirst from "@/components/FoodFirst";
import FeaturedIn from "@/components/FeaturedIn";
import InstaCommunity from "@/components/InstaCommunity";
import Newsletter from "@/components/Newsletter";
import FooterBanner from "@/components/FooterBanner";

export default function HomePage() {
  return (
    <>
      <SpotlightGrid />
      <HeroBanner />
      <TrendingSearches />
      <PitchVideo />
      <BestSellersRail />
      <LearnMoreSlider />
      <ScrollingWord />
      <Advisors />
      <FoodFirst />
      <FeaturedIn />
      <InstaCommunity />
      <Newsletter />
      <FooterBanner />
    </>
  );
}
