import Image from "next/image";
type Product = {
  img: string;
  name: string;
  size: string;
  popularity: string;
  category: string;
};

type Props = {
  product: Product;
};

const ProductBasket = ({ product }: Props) => {
  const { img, name, category, size, popularity } = product;
  return (
    <div className="flex gap-10">
      <Image
        src={img}
        alt={name}
        className="bg-primaryWhite"
        priority
        width={74}
        height={74}
      />
      <div className="flex">
        <h3>{name}</h3>
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
  );
};

export default ProductBasket;
