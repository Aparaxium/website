import Image from 'next/image'
import Link from 'next/link'

export default function Imagecard(props) {
    return (
        <li>
            <Link href={props.name}>
                <div className="h-96 w-full bg-gray-500 border-8 ">
                    <div className="h-1/3 w-full flex">
                        <div className="w-1/4 h-full bg-gray-700 flex justify-center items-center">
                            <div className="h-3/4 w-3/4 justify-center items-center flex relative">
                                <Image
                                    className="rounded-full"
                                    src="/images/carousel.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                        </div>
                        <div className="h-full w-3/4  p-4">
                            <p>This is a card, this is the title text.</p>
                        </div>
                    </div>
                    <div className=" h-3/4 bg-gray-300 p-4">
                        <p>this is the desc.</p>
                    </div>

                </div>

            </Link>
        </li>
    )
}