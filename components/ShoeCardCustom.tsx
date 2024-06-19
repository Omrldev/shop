
import Image from "next/image";

type shoeProps = {
    imgURL: any
    currentBigShoe: any
    changeBigShoe: any
}

const ShoeCardCustom = ({ imgURL, currentBigShoe, changeBigShoe }: shoeProps ) => {
  const handleClick = () => {
    if (currentBigShoe !== imgURL.bigshoe) {
      changeBigShoe(imgURL.bigshoe);
    }
  };

  return (
    <div
      className={`${
        currentBigShoe === imgURL.bigshoe
          ? "border-orange-400"
          : "border-transparent"
      } rounded-xl cursor-pointer border-2 max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="rounded-xl border-2 bg-card bg-cover bg-center w-28 h-24">
        <Image
          src={imgURL}
          alt="miniatura"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCardCustom;
