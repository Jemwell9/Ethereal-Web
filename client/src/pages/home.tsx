import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Workshops from "@/components/workshops";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Workshops />
    </main>
  );
}