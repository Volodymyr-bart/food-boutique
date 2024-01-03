import Image from "next/image";

const DiscountProduct = ({ product }: any) => {
  const { img, name, category, size, popularity } = product;
  return (
    <li className="flex gap-2 bg-secondaryWhite rounded-30 p-5 ">
      <Image
        src={img}
        alt={name}
        className="bg-primaryWhite"
        priority
        width={74}
        height={74}
      />
      <div className="flex flex-col">
        <h3 className="general-card-title">{name}</h3>
        <div className="flex flex-col general-span-container">
          <span className="general-span-info">
            Category:<span className="span-info-value">{category}</span>
          </span>
          <span className="general-span-info">
            Size:<span className="span-info-value">{size}</span>
          </span>
          <span className="general-span-info">
            Popularity:<span className="span-info-value">{popularity}</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default DiscountProduct;
