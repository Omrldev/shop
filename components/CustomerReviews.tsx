import { reviews } from "@/constants/Index";
import CustomerReviewsCard from "./CustomerReviewsCard";

const CustomerReviews = () => {
  return (
    <section className="bg-indigo-100 w-full">
      <div className="max-container px-2 text-center py-7">
        <h3 className="text-3xl md:text-5xl font-semibold capitalize">
          Qué dicen nuestros
          <span className="text-indigo-500"> clientes</span>?
        </h3>
        <p className="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <div className="md:flex justify-evenly items-center mt-10">
          {reviews.map((review) => (
            <CustomerReviewsCard
              img={review.img}
              subtext={review.subtext}
              title={review.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
