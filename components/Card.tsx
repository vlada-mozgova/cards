import Image from "next/image";
import { CardItem } from "../types";

const Card = ({ title, list, description, images }: CardItem) => {

  return (
    <div className="bg-white w-[437.5px] h-[336px] rounded-lg flex flex-row text-Charcoal">
      <div className="w-[183.5px] h-[100%]">
        {images.length && images.length > 1 ? (
          images.map((image, index) => (
            <div
              key={image}
              className="relative w-[183.5px] h-[166px] mb-1 last:mb-0 rounded-tl-lg"
            >
              <Image
                src={`/images/${image}`}
                alt={image}
                layout={"fill"}
                className={`${index === 0 && "rounded-tl-lg"} ${
                  index === images.length - 1 && "rounded-bl-lg"
                }`}
              />
            </div>
          ))
        ) : (
          <div className="relative w-[183.5px] h-[100%] mb-1 last:mb-0">
            <Image src={`/images/${images[0]}`} alt={images[0]} layout={"fill"} />
          </div>
        )}
      </div>
      <div className="py-10 px-[30px]">
        <h1 className="font-bold text-2xl"> {title}</h1>
        <ul className="my-3 list-disc list-inside leading-[26px] text-TanAcccent">
          {list.length > 0 &&
            list.map((item) => (
              <li key={item} className="">
                <span className="relative -left-2 text-Charcoal font-bold text-[15px]">
                  {item}
                </span>
              </li>
            ))}
        </ul>
        <div className="text-[15px] font-semibold leading-[24px]">
          {description.length > 0 &&
            description.map((item) => <p key={item}>{item}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Card;