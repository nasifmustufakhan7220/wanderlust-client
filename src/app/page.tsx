import { Banner } from "@/components/Home/banner";
import { WhyChoose } from "@/components/Home/why-choose";
import { Testimonials } from "@/components/Home/testimonials";
import { Cta } from "@/components/Home/cta";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChoose />
      <Testimonials />
      <Cta />
    </div>
  );
}
