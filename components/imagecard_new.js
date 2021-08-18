import Image from 'next/image'
import Link from 'next/link'

export default function Imagecard(props) {
    //console.log(props)
    return (
        <li>
            <Link href={props.name}>
                <div className="h-96 bg-gray-500 border-8 ">
                    <div className="h-2/3">
                        <div className="h-full w-full relative">
                            <Image
                                className="absolute"
                                src={props.image}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="h-full z-20 bg-gradient-to-t from-black relative" />

                        </div>
                    </div>
                    <div className=" h-1/3 bg-gray-200 p-4">
                        <p>Insert text.</p>
                    </div>

                </div>

            </Link>
        </li>
    )
}