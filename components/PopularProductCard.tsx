import Image from "next/image";

type PopularProductsProps = {
  imgURL: string;
  name: string;
  price: string;
};

const PopularProductCard = ({ imgURL, name, price }: PopularProductsProps) => {
  return (
    <div className={`${imgURL} w-full min-h-96 min-w-96 flex-1 bg-no-repeat bg-cover`}>
    
      <div className="px-2">
        <h3 className="mt-5 text-lg leading-normal font-semibold text-slate-50">
          {name}
        </h3>
        <p className="text-white leading-normal text-md">{price}</p>
      </div>

      <div className="flex px-2 gap-2.5 relative -bottom-64">
        <span className="flex">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                key={index}
                src={"/assets/icons/star.svg"}
                alt="star"
                width={24}
                height={24}
              />
            ))}
        </span>

        <p className="text-md leading-normal text-white">87k reviews</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
