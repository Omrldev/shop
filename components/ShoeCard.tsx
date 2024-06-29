import Image from "next/image";

type ShoeCardProp = {
  imgURL: any
  changeBigShoe: any
  bigShoe: any
};

const ShoeCard = ({ imgURL, changeBigShoe, bigShoe }: ShoeCardProp) => {
  const handleClick = () => {
    if (bigShoe !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`${
        bigShoe == imgURL.bigShoe ? "border-orange-400" : "border-transparent"
      } border-4 cursor-pointer rounded-xl`}
      onClick={handleClick}
    >
      <div className="bg-card bg-cover bg-center sm:w-40 sm:h-40 flex justify-center items-center">
        <Image
          src={imgURL.miniatura}
          alt="miniatura"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
