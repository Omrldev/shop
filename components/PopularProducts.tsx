import { products } from "@/constants/Index";
import PopularProductCard from "./PopularProductCard";


const PopularProducts = () => {
  return (
    <section id="products" className="max-container border-4 min-h-screen py-28">
      <div>
        <h2>Nuevos Productos</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          numquam ex, recusandae, enim molestias laboriosam
          iure culpa nisi.
        </p>
      </div>

      <div>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>

      
    </section>
  );
};

export default PopularProducts;
