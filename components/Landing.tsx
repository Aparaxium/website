import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  quality?: number;
};

export default function Landing({ quality = 75 }: Props): ReactElement {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-full h-3/4">
        <Image
          priority={true}
          alt="Hero Image"
          className="z-10"
          src="/images/landing.jpg"
          layout="fill"
          quality={quality}
          objectFit="cover"
          objectPosition="center center"
        />
        <div className="relative z-20 h-full bg-gradient-to-t from-bgray-900" />
      </div>

      <div className="absolute z-30 flex flex-col items-center justify-center w-full h-3/4 top-40">
        <h1 className="flex flex-col text-center text-gray-100">
          <span className="text-6xl">Lorem</span>
          <span className="mt-3 text-5xl">&</span>
          <span className="text-8xl">Ipsum</span>
        </h1>
      </div>

      <div className="flex relative justify-center h-1/6 items-top top-16">
        <h2 className="text-5xl">Dolor sit</h2>
      </div>
    </div>
  );
}
