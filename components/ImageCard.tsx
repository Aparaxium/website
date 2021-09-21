import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  readonly title: string;
  readonly description: string;
  readonly imgSrc: string;
  readonly href?: string;
  readonly gradient?: boolean;
  readonly hover?: boolean;
  readonly horizontal?: boolean;
};

/* not neccessary due to undefined and null being falsey, but is semantically useful
Imagecard.defaultProps = {
  gradient: false,
  hover: false,
};
*/

export default function ImageCard({
  title,
  description,
  imgSrc,
  href = "/",
  gradient,
  hover,
  horizontal,
}: Props): ReactElement {
  if (horizontal) {
    return (
      <ul>
        <div
          className={`grid grid-cols-2 h-72  ${
            hover ? "transform transition-all hover:-translate-y-1" : ""
          }`}
        >
          <Link href={href}>
            <div className="relative h-full cursor-pointer">
              <Image
                title={title}
                alt={title}
                className="absolute"
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
              <div
                className={`${
                  gradient ? "h-full bg-gradient-to-t from-black relative" : ""
                }`}
              />
            </div>
          </Link>
          <div className="flex flex-col justify-center ml-4 divide-y divide-black">
            <Link href={href}>
              <a className="items-center m-4 text-4xl font-bold text-center cursor-pointer ">
                {title}
              </a>
            </Link>
            <p className="p-4 text-center">{description}</p>
          </div>
        </div>
      </ul>
    );
  } else {
    return (
      <ul>
        <div
          className={` ${
            hover ? "transform transition-all hover:-translate-y-1" : ""
          }`}
        >
          <Link href={href}>
            <div className="relative cursor-pointer h-72">
              <Image
                title={title}
                alt={title}
                className="absolute"
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
              <div
                className={`${
                  gradient ? "h-full bg-gradient-to-t from-black relative" : ""
                }`}
              />
            </div>
          </Link>
          <div className="divide-y divide-black ">
            <Link href={href}>
              <a className="flex flex-col items-center py-4 text-4xl font-bold text-center cursor-pointer">
                {title}
              </a>
            </Link>
            <p className="py-6 text-center">{description}</p>
          </div>
        </div>
      </ul>
    );
  }
}
