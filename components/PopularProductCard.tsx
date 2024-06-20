import Image from "next/image";

type PopularProductsProps = {
  imgURL: string;
  name: string;
  price: string;
};

const PopularProductCard = ({ imgURL, name, price }: PopularProductsProps) => {
  return (
    <div className="">
      <Image src={imgURL} alt="products" width={280} height={280}/>
      <div className="xl:flex">
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
      </div>
    </div>
  );
};

export default PopularProductCard;
