import Image from "next/image";

type ReviewsCardProp = {
  img: any;
  subtext: any;
  title: any;
};

const CustomerReviewsCard = ({
  img,
  subtext,
  title,
}: ReviewsCardProp) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-96 mt-7">
      <Image
        src={img}
        alt="customer"
        width={80}
        height={80}
        className="object-contain"
      />
      <p className="info-text mt-4">{subtext}</p>
      <div className="flex p-2">
        {Array(5)
          .fill(null)
          .map((_) => (
            <Image
              src={'/assets/icons/star.svg'}
              alt="star icon"
              width={22}
              height={22}
              className="object-contain"
            />
          ))}
      </div>
      <h3 className="text-xl font-bold text-slate-600 mb-7">{title}</h3>
    </div>
  );
};

export default CustomerReviewsCard;
