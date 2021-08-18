import Image from "next/image";
import Link from "next/link";

export default function Imagecard(props) {
  //console.log(props)
  return (
    <li>
      <Link href={props.name}>
        <div className="h-full m-6 transform transition-all hover:-translate-y-4 ">
          <div className="h-52 w-full relative">
            <Image
              className="absolute "
              src={props.image}
              layout="fill"
              objectFit="cover"
            />
            <div className="h-full z-20 bg-gradient-to-t from-black relative" />
          </div>
          <div className=" h-1/5 bg-gray-200 p-2">
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              elementum lobortis mauris, sit amet porta elit. Donec quis
              pulvinar orci. Duis lobortis vulputate lorem ut eleifend. Quisque
              aliquam felis sed odio tincidunt varius.
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
