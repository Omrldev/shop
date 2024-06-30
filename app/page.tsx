import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import QualityProducts from "@/components/QualityProducts";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <QualityProducts />
      <Services />
      <CustomerReviews />
      <Subscribe />
    </>
  );
}
