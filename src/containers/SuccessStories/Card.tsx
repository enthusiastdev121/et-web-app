import Image from "next/image";
import Link from "next/link";
import { H4, Message, PhotoItem } from "./SuccessStories.styled";

const Card = ({
  name,
  image,
  text,
  id
}: {
  name: string;
  image: any;
  text: string;
  id: number
}) => {
  return (
    <div className="">
      <Link href={`/testimonials#${id}`} passHref>
        <H4 className="mb-2 cursor-pointer">{name}</H4>
      </Link>

      <div className="flex">
        <Link href={`/testimonials#${id}`} passHref>
          <PhotoItem>
            {image !== null && <img src={image} alt="profile" />}
          </PhotoItem>
        </Link>
        <Message className="text-xs w-3/4">
          {text}...
          <Link href={`/testimonials#${id}`}><a className="txt-primary"> Read&nbsp;more</a></Link>
        </Message>
      </div>
    </div>
  );
};

export default Card;
