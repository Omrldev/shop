import { products } from "@/constants/Index";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container min-h-screen py-28">
      <div className="px-2">
        <h2 className="text-5xl lg:text-7xl font-bold">
          ¡<span className="text-indigo-400">Super</span>ventas!
        </h2>
        <p className="mt-3 text-lg leading-normal max-w-sm md:max-w-lg">
          Descubre nuestros productos más populares según las compras de
          nuestros usuarios. ¡Los productos más top y favoritos!
        </p>
      </div>

      <div className="flex mt-5 gap-2 hover:overflow-x-auto">
        <PopularProductCard
          imgURL="bg-img-1"
          name="Nike Air Force 1 Low J1"
          price="119.99 €"
        />
        <PopularProductCard
          imgURL="bg-img-2"
          name="Nike Air Force 1 Low J2"
          price="139.99 €"
        />
        <PopularProductCard
          imgURL="bg-img-3"
          name="Nike Air Force 1 Low J3"
          price="159.99 €"
        />
      </div>
    </section>
  );
};

export default PopularProducts;
